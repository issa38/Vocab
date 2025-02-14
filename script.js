// -------------------------
// Vocabulary Data
// -------------------------
// Sample vocabulary array; feel free to expand this list or load your own data.
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
// Global Variables for Answers
// -------------------------
let weeklyWords = [];  // Array of 10 words for the week.
const fillAnswers = [];  // Expected answers for fill-in-the-blank (word in lowercase).
const tfAnswers = [];    // Boolean: true if statement is correct, false otherwise.
const matchAnswers = []; // Expected definitions for matching section.

// -------------------------
// Utility Functions
// -------------------------

// Returns ISO week number and year for a given date.
function getWeekNumber(date) {
  // Copy date so don't modify original
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number (Monday is 1, Sunday is 7)
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  // Year is the year of the Thursday
  const year = d.getUTCFullYear();
  // Get first day of year
  const firstDay = new Date(Date.UTC(year,0,1));
  // Calculate full weeks to nearest Thursday
  const weekNum = Math.ceil((((d - firstDay) / 86400000) + 1) / 7);
  return { year, week: weekNum };
}

// Shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // Swap
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

  // If we already have a list for this week, use it.
  if (localStorage.getItem(weekKey)) {
    weeklyWords = JSON.parse(localStorage.getItem(weekKey));
  } else {
    // Gather words used in the past 4 weeks.
    const usedWords = new Set();
    for (let i = 1; i <= 4; i++) {
      // Calculate previous week (this is a simple approximation)
      let prevWeek = week - i;
      let prevYear = year;
      if (prevWeek < 1) {
        prevYear -= 1;
        // Approximate last week number (could be 52 or 53)
        prevWeek = 52;
      }
      const key = `weeklyVocab_${prevYear}_${prevWeek}`;
      if (localStorage.getItem(key)) {
        const words = JSON.parse(localStorage.getItem(key));
        words.forEach(item => usedWords.add(item.word));
      }
    }
    // Filter vocabulary to exclude words used recently.
    const availableWords = vocabulary.filter(item => !usedWords.has(item.word));
    // If not enough words are available, fallback to entire list.
    const sourcePool = availableWords.length >= 10 ? availableWords : vocabulary;
    // Shuffle and take 10 random words.
    weeklyWords = shuffleArray([...sourcePool]).slice(0, 10);
    
    // Save for current week.
    localStorage.setItem(weekKey, JSON.stringify(weeklyWords));
    // Update history (optional – you can view all past weeks if needed).
    history[weekKey] = weeklyWords;
    localStorage.setItem("vocabHistory", JSON.stringify(history));
  }
}

// -------------------------
// Generate Question Sections
// -------------------------

function generateFillQuestions() {
  const fillContainer = document.getElementById("fill-questions");
  fillContainer.innerHTML = "";
  fillAnswers.length = 0; // Reset
  
  weeklyWords.forEach((item, index) => {
    // Create a container div for the question.
    const qDiv = document.createElement("div");
    qDiv.classList.add("question");
    
    // Create label with the definition prompt.
    const label = document.createElement("label");
    label.textContent = `Question ${index + 1}: Fill in the blank for the definition: "${item.definition}"`;
    label.setAttribute("for", `fib_${index}`);
    
    // Create input field.
    const input = document.createElement("input");
    input.type = "text";
    input.id = `fib_${index}`;
    
    // Save the correct answer (in lowercase for comparison).
    fillAnswers.push(item.word.toLowerCase());
    
    qDiv.appendChild(label);
    qDiv.appendChild(input);
    fillContainer.appendChild(qDiv);
  });
}

function generateTFQuestions() {
  const tfContainer = document.getElementById("tf-questions");
  tfContainer.innerHTML = "";
  tfAnswers.length = 0;
  
  weeklyWords.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question");
    
    // Decide randomly if this statement will be correct or not.
    const isTrueStatement = Math.random() < 0.5;
    let displayedDefinition = item.definition;
    if (!isTrueStatement) {
      // Pick a random wrong definition from another word.
      let other;
      do {
        other = vocabulary[Math.floor(Math.random() * vocabulary.length)];
      } while (other.word === item.word);
      displayedDefinition = other.definition;
    }
    
    // Save the correct answer (true if the statement is exactly the word's definition)
    tfAnswers.push(isTrueStatement);
    
    const label = document.createElement("label");
    label.textContent = `Question ${index + 1}: True or False – The word "${item.word}" means "${displayedDefinition}"?`;
    
    // Create radio buttons.
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

function generateMatchingQuestions() {
  const matchContainer = document.getElementById("matching-questions");
  matchContainer.innerHTML = "";
  matchAnswers.length = 0;
  
  // For matching, we use the 10 words and shuffle their definitions.
  const definitions = weeklyWords.map(item => item.definition);
  const shuffledDefs = shuffleArray([...definitions]);
  
  weeklyWords.forEach((item, index) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("matching-row");
    
    // Display the word.
    const wordSpan = document.createElement("span");
    wordSpan.textContent = item.word;
    
    // Create dropdown for definitions.
    const select = document.createElement("select");
    select.id = `match_${index}`;
    // Default option.
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
    
    // Save the correct definition.
    matchAnswers.push(item.definition);
    
    rowDiv.appendChild(wordSpan);
    rowDiv.appendChild(select);
    matchContainer.appendChild(rowDiv);
  });
}

// -------------------------
// Check Answers & Reset
// -------------------------

function checkAnswers() {
  let totalQuestions = fillAnswers.length + tfAnswers.length + matchAnswers.length;
  let correctCount = 0;
  let feedback = "";
  
  // Check fill-in-the-blank answers.
  weeklyWords.forEach((item, index) => {
    const userAnswer = document.getElementById(`fib_${index}`).value.trim().toLowerCase();
    if (userAnswer === fillAnswers[index]) {
      correctCount++;
    }
  });
  
  // Check true/false answers.
  weeklyWords.forEach((item, index) => {
    const radios = document.getElementsByName(`tf_${index}`);
    let selected;
    for (let radio of radios) {
      if (radio.checked) {
        selected = radio.value;
        break;
      }
    }
    // Compare as boolean.
    if ((selected === "true" && tfAnswers[index] === true) ||
        (selected === "false" && tfAnswers[index] === false)) {
      correctCount++;
    }
  });
  
  // Check matching answers.
  weeklyWords.forEach((item, index) => {
    const select = document.getElementById(`match_${index}`);
    if (select.value === matchAnswers[index]) {
      correctCount++;
    }
  });
  
  feedback = `You got ${correctCount} out of ${totalQuestions} correct.`;
  document.getElementById("result").textContent = feedback;
}

function resetTest() {
  // Reset fill-in answers.
  weeklyWords.forEach((item, index) => {
    const fib = document.getElementById(`fib_${index}`);
    if (fib) fib.value = "";
  });
  
  // Reset true/false radio buttons.
  weeklyWords.forEach((item, index) => {
    const radios = document.getElementsByName(`tf_${index}`);
    radios.forEach(radio => radio.checked = false);
  });
  
  // Reset matching selections.
  weeklyWords.forEach((item, index) => {
    const select = document.getElementById(`match_${index}`);
    if (select) select.selectedIndex = 0;
  });
  
  // Clear feedback.
  document.getElementById("result").textContent = "";
}

// -------------------------
// Initialize Page
// -------------------------
function initializeTest() {
  loadWeeklyWords();
  generateFillQuestions();
  generateTFQuestions();
  generateMatchingQuestions();
}

// Attach event listeners.
document.getElementById("submit-btn").addEventListener("click", checkAnswers);
document.getElementById("reset-btn").addEventListener("click", resetTest);

// Initialize the test on page load.
initializeTest();