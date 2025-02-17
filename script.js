// -------------------------
// Vocabulary Data
// -------------------------
const vocabulary = [
  { word: "aberration", definition: "a departure from what is normal, usual, or expected" },
  { word: "cacophony", definition: "a harsh, discordant mixture of sounds" },
  { word: "deleterious", definition: "causing harm or damage" },
  { word: "ephemeral", definition: "lasting for a very short time" },
  { word: "fortuitous", definition: "happening by accident or chance rather than design" },
  { word: "gregarious", definition: "fond of company; sociable" },
  { word: "harangue", definition: "a lengthy and aggressive speech" },
  { word: "iconoclast", definition: "a person who attacks cherished beliefs or institutions" },
  { word: "juxtapose", definition: "place or deal with close together for contrasting effect" },
  { word: "kinetic", definition: "relating to or resulting from motion" },
  { word: "laconic", definition: "using very few words" },
  { word: "maverick", definition: "an unorthodox or independent-minded person" },
  { word: "nefarious", definition: "wicked or criminal" },
  { word: "obfuscate", definition: "render obscure, unclear, or unintelligible" },
  { word: "paradox", definition: "a statement that contradicts itself but might be true" },
  { word: "quixotic", definition: "exceedingly idealistic; unrealistic and impractical" },
  { word: "rancor", definition: "bitterness or resentfulness" },
  { word: "sagacious", definition: "having or showing keen mental discernment and good judgment" },
  { word: "tantamount", definition: "equivalent in seriousness to; virtually the same as" },
  { word: "ubiquitous", definition: "present, appearing, or found everywhere" },
  { word: "vapid", definition: "offering nothing that is stimulating or challenging" },
  { word: "wary", definition: "feeling or showing caution about possible dangers or problems" },
  { word: "xenophobia", definition: "dislike of or prejudice against people from other countries" },
  { word: "yoke", definition: "to join together; to harness" },
  { word: "zealous", definition: "having or showing zeal" },
  // Add more words as needed...
];

// -------------------------
// Global Variables
// -------------------------
let weeklyWords = [];  // Array of 10 words for the week.
const fillAnswers = [];  // Expected answers for fill-in-the-blank.
const tfAnswers = [];    // Correct Boolean values for true/false questions.
const matchAnswers = []; // Expected definitions for matching questions.

// -------------------------
// Utility Functions
// -------------------------

// Returns ISO week number and year for a given date.
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const year = d.getUTCFullYear();
  const firstDay = new Date(Date.UTC(year, 0, 1));
  const weekNum = Math.ceil((((d - firstDay) / 86400000) + 1) / 7);
  return { year, week: weekNum };
}

// Shuffle an array using Fisher-Yates.
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// -------------------------
// Weekly Vocabulary Selection
// -------------------------
function loadWeeklyWords() {
  const now = new Date();
  const { year, week } = getWeekNumber(now);
  document.getElementById("date-info").textContent = `Date: ${now.toLocaleDateString()} | Week ${week} of ${year}`;
  
  const weekKey = `weeklyVocab_${year}_${week}`;
  let history = JSON.parse(localStorage.getItem("vocabHistory") || "{}");
  
  if (localStorage.getItem(weekKey)) {
    weeklyWords = JSON.parse(localStorage.getItem(weekKey));
  } else {
    const usedWords = new Set();
    for (let i = 1; i <= 4; i++) {
      let prevWeek = week - i;
      let prevYear = year;
      if (prevWeek < 1) {
        prevYear -= 1;
        prevWeek = 52; // Approximation
      }
      const key = `weeklyVocab_${prevYear}_${prevWeek}`;
      if (localStorage.getItem(key)) {
        const words = JSON.parse(localStorage.getItem(key));
        words.forEach(item => usedWords.add(item.word));
      }
    }
    const availableWords = vocabulary.filter(item => !usedWords.has(item.word));
    const sourcePool = availableWords.length >= 10 ? availableWords : vocabulary;
    weeklyWords = shuffleArray([...sourcePool]).slice(0, 10);
    localStorage.setItem(weekKey, JSON.stringify(weeklyWords));
    history[weekKey] = weeklyWords;
    localStorage.setItem("vocabHistory", JSON.stringify(history));
  }
}

// -------------------------
// Word Key Section
// -------------------------
function generateWordKey() {
  const keyList = document.getElementById("word-key-list");
  keyList.innerHTML = "";
  weeklyWords.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.word;
    li.dataset.word = item.word.toLowerCase();
    keyList.appendChild(li);
  });
}

// Update the word key: if any fill-in answer matches a word from the key, cross it off.
function updateWordKeyCrossOff() {
  const keyItems = document.querySelectorAll("#word-key-list li");
  const inputs = document.querySelectorAll("#fill-questions input[type='text']");
  let usedWords = new Set();
  inputs.forEach(input => {
    const val = input.value.trim().toLowerCase();
    if(val) {
      usedWords.add(val);
    }
  });
  keyItems.forEach(li => {
    if (usedWords.has(li.dataset.word)) {
      li.classList.add("crossed-off");
    } else {
      li.classList.remove("crossed-off");
    }
  });
}

// -------------------------
// Generate Question Sections
// -------------------------

// Fill-in-the-Blank Questions
function generateFillQuestions() {
  const fillContainer = document.getElementById("fill-questions");
  fillContainer.innerHTML = "";
  fillAnswers.length = 0;
  
  weeklyWords.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question");
    
    const label = document.createElement("label");
    label.textContent = `Question ${index + 1}: Fill in the blank for the definition: "${item.definition}"`;
    label.setAttribute("for", `fib_${index}`);
    
    const input = document.createElement("input");
    input.type = "text";
    input.id = `fib_${index}`;
    
    // Update word key on every input change.
    input.addEventListener("input", updateWordKeyCrossOff);
    
    fillAnswers.push(item.word.toLowerCase());
    
    qDiv.appendChild(label);
    qDiv.appendChild(input);
    fillContainer.appendChild(qDiv);
  });
}

// True/False Questions
function generateTFQuestions() {
  const tfContainer = document.getElementById("tf-questions");
  tfContainer.innerHTML = "";
  tfAnswers.length = 0;
  
  weeklyWords.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question");
    
    const isTrueStatement = Math.random() < 0.5;
    let displayedDefinition = item.definition;
    if (!isTrueStatement) {
      let other;
      do {
        other = vocabulary[Math.floor(Math.random() * vocabulary.length)];
      } while (other.word === item.word);
      displayedDefinition = other.definition;
    }
    
    tfAnswers.push(isTrueStatement);
    
    const label = document.createElement("label");
    label.textContent = `Question ${index + 1}: True or False – The word "${item.word}" means "${displayedDefinition}"?`;
    
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("tf-options");
    
    const trueOption = document.createElement("label");
    trueOption.innerHTML = `<input type="radio" name="tf_${index}" value="true"> True`;
    
    const falseOption = document.createElement("label");
    falseOption.innerHTML = `<input type="radio" name="tf_${index}" value="false"> False`;
    
    optionsDiv.appendChild(trueOption);
    optionsDiv.appendChild(falseOption);
    
    qDiv.appendChild(label);
    qDiv.appendChild(optionsDiv);
    tfContainer.appendChild(qDiv);
  });
}

// Matching Questions
function generateMatchingQuestions() {
  const matchContainer = document.getElementById("matching-questions");
  matchContainer.innerHTML = "";
  matchAnswers.length = 0;
  
  const definitions = weeklyWords.map(item => item.definition);
  const shuffledDefs = shuffleArray([...definitions]);
  
  weeklyWords.forEach((item, index) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("matching-row", "question");
    
    const wordSpan = document.createElement("span");
    wordSpan.textContent = item.word;
    
    const select = document.createElement("select");
    select.id = `match_${index}`;
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select definition";
    select.appendChild(defaultOption);
    
    shuffledDefs.forEach(def => {
      const option = document.createElement("option");
      option.value = def;
      option.textContent = def;
      select.appendChild(option);
    });
    
    matchAnswers.push(item.definition);
    
    rowDiv.appendChild(wordSpan);
    rowDiv.appendChild(select);
    matchContainer.appendChild(rowDiv);
  });
}

// -------------------------
// Show Only One Random Test Section
// -------------------------
function showRandomTestSection() {
  const sections = ["fill-in-the-blank", "true-false", "matching"];
  const chosen = sections[Math.floor(Math.random() * sections.length)];
  sections.forEach(sectionId => {
    document.getElementById(sectionId).style.display = (sectionId === chosen) ? "block" : "none";
  });
}

// -------------------------
// Check Answers & Mark Incorrect Responses
// -------------------------
function checkAnswers() {
  let totalQuestions = fillAnswers.length + tfAnswers.length + matchAnswers.length;
  let correctCount = 0;
  
  // Check Fill-in-the-Blank
  weeklyWords.forEach((item, index) => {
    const input = document.getElementById(`fib_${index}`);
    if (input) {
      const userAnswer = input.value.trim().toLowerCase();
      const qDiv = input.parentElement;
      if (userAnswer === fillAnswers[index]) {
        correctCount++;
        qDiv.classList.remove("incorrect");
      } else {
        qDiv.classList.add("incorrect");
      }
    }
  });
  
  // Check True/False
  weeklyWords.forEach((item, index) => {
    const radios = document.getElementsByName(`tf_${index}`);
    let selected;
    let qDiv = null;
    radios.forEach(radio => {
      if (!qDiv) qDiv = radio.closest(".question");
      if (radio.checked) {
        selected = radio.value;
      }
    });
    if (selected !== undefined) {
      if ((selected === "true" && tfAnswers[index] === true) ||
          (selected === "false" && tfAnswers[index] === false)) {
        correctCount++;
        if(qDiv) qDiv.classList.remove("incorrect");
      } else {
        if(qDiv) qDiv.classList.add("incorrect");
      }
    } else {
      if(qDiv) qDiv.classList.add("incorrect");
    }
  });
  
  // Check Matching
  weeklyWords.forEach((item, index) => {
    const select = document.getElementById(`match_${index}`);
    if (select) {
      const qDiv = select.parentElement;
      if (select.value === matchAnswers[index]) {
        correctCount++;
        qDiv.classList.remove("incorrect");
      } else {
        qDiv.classList.add("incorrect");
      }
    }
  });
  
  document.getElementById("result").textContent = `You got ${correctCount} out of ${totalQuestions} correct.`;
}

// -------------------------
// Reset Test (Clears Answers and Visual Cues)
// -------------------------
function resetTest() {
  // Reset Fill-in-the-Blank inputs.
  const fillInputs = document.querySelectorAll("#fill-questions input[type='text']");
  fillInputs.forEach(input => {
    input.value = "";
    input.parentElement.classList.remove("incorrect");
  });
  
  // Reset True/False radio buttons.
  weeklyWords.forEach((item, index) => {
    const radios = document.getElementsByName(`tf_${index}`);
    radios.forEach(radio => radio.checked = false);
    if (radios.length > 0) {
      const qDiv = radios[0].closest(".question");
      if (qDiv) qDiv.classList.remove("incorrect");
    }
  });
  
  // Reset Matching selections.
  weeklyWords.forEach((item, index) => {
    const select = document.getElementById(`match_${index}`);
    if (select) {
      select.selectedIndex = 0;
      select.parentElement.classList.remove("incorrect");
    }
  });
  
  document.getElementById("result").textContent = "";
  updateWordKeyCrossOff();
}

// -------------------------
// Dark Mode Toggle Functionality
// -------------------------
function initializeDarkMode() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  
  darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

// -------------------------
// Initialize Page
// -------------------------
function initializeTest() {
  loadWeeklyWords();
  generateWordKey();
  generateFillQuestions();
  generateTFQuestions();
  generateMatchingQuestions();
  showRandomTestSection();
  initializeDarkMode();
}

document.getElementById("submit-btn").addEventListener("click", checkAnswers);
document.getElementById("reset-btn").addEventListener("click", resetTest);

initializeTest();