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
      {
          word: "accommodation",
          definition: "making or becoming suitable; adjusting to circumstances"
      },
      {
          word: "adamant",
          definition: "very hard native crystalline carbon valued as a gem"
      },
      {
          word: "addendum",
          definition: "textual matter that is appended to the end of a publication"
      },
      {
          word: "adhere",
          definition: "stick to firmly"
      },
      {
          word: "adherent",
          definition: "someone who believes and helps to spread a doctrine"
      },
      {
          word: "adversity",
          definition: "a state of misfortune or affliction"
      },
      {
          word: "advice",
          definition: "a proposal for an appropriate course of action"
      },
      {
          word: "advise",
          definition: "give advice to"
      },
      {
          word: "advocate",
          definition: "a person who pleads for a person, cause, or idea"
      },
      {
          word: "affect",
          definition: "have an influence upon"
      },
      {
          word: "affirm",
          definition: "declare solemnly and formally as true"
      },
      {
          word: "ambiguous",
          definition: "having more than one possible meaning"
      },
      {
          word: "amicable",
          definition: "characterized by friendship and good will"
      },
      {
          word: "anecdote",
          definition: "short account of an incident"
      },
      {
          word: "annotation",
          definition: "the act of adding notes"
      },
      {
          word: "anomaly",
          definition: "deviation from the normal or common order, form, or rule"
      },
      {
          word: "antagonism",
          definition: "an actively expressed feeling of dislike and hostility"
      },
      {
          word: "array",
          definition: "an impressive display or assortment"
      },
      {
          word: "ascertain",
          definition: "learn or discover with confidence"
      },
      {
          word: "assiduous",
          definition: "marked by care and persistent effort"
      },
      {
          word: "assimilate",
          definition: "make alike"
      },
      {
          word: "assure",
          definition: "inform positively and with certainty and confidence"
      },
      {
          word: "autonomy",
          definition: "political independence"
      },
      {
          word: "candor",
          definition: "the quality of being honest and straightforward"
      },
      {
          word: "causation",
          definition: "the act of making something happen"
      },
      {
          word: "cerebral",
          definition: "of or relating to the brain"
      },
      {
          word: "chastise",
          definition: "scold or criticize severely"
      },
      {
          word: "citation",
          definition: "an official award usually given as formal public statement"
      },
      {
          word: "cite",
          definition: "make reference to"
      },
      {
          word: "codify",
          definition: "organize into a system, such as a body of law"
      },
      {
          word: "cognizant",
          definition: "having or showing knowledge or understanding or realization"
      },
      {
          word: "coherent",
          definition: "marked by an orderly and consistent relation of parts"
      },
      {
          word: "complementary",
          definition: "serving to fill out, enhance, or supply what is lacking"
      },
      {
          word: "compliance",
          definition: "the act of submitting, usually surrendering power to another"
      },
      {
          word: "conceive",
          definition: "have the idea for"
      },
      {
          word: "conceptualise",
          definition: "have the idea for"
      },
      {
          word: "condense",
          definition: "cause a gas or vapor to change into a liquid"
      },
      {
          word: "confirm",
          definition: "strengthen"
      },
      {
          word: "conjecture",
          definition: "believe especially on uncertain or tentative grounds"
      },
      {
          word: "connotation",
          definition: "an idea that is implied or suggested"
      },
      {
          word: "conscientious",
          definition: "characterized by extreme care and great effort"
      },
      {
          word: "conscious",
          definition: "having awareness of surroundings and sensations and thoughts"
      },
      {
          word: "consciousness",
          definition: "an alert cognitive state in which you are aware of yourself"
      },
      {
          word: "consecutive",
          definition: "one after the other"
      },
      {
          word: "constituted",
          definition: "brought about or set up or accepted"
      },
      {
          word: "constraint",
          definition: "the state of being physically limited"
      },
      {
          word: "contend",
          definition: "compete for something"
      },
      {
          word: "context",
          definition: "the set of facts or circumstances that surround a situation"
      },
      {
          word: "continual",
          definition: "occurring without interruption"
      },
      {
          word: "continuous",
          definition: "moving in time or space without interruption"
      },
      {
          word: "contraindicate",
          definition: "suggest that something (e.g., a treatment) is inadvisable"
      },
      {
          word: "conventional",
          definition: "following accepted customs and proprieties"
      },
      {
          word: "correlation",
          definition: "a reciprocal connection between two or more things"
      },
      {
          word: "corroborate",
          definition: "give evidence for"
      },
      {
          word: "covert",
          definition: "secret or hidden"
      },
      {
          word: "credible",
          definition: "capable of being believed"
      },
      {
          word: "credulous",
          definition: "showing a lack of judgment or experience"
      },
      {
          word: "cultivate",
          definition: "adapt something wild to the environment"
      },
      {
          word: "delegate",
          definition: "a person appointed or elected to represent others"
      },
      {
          word: "deliberate",
          definition: "carefully thought out in advance"
      },
      {
          word: "demographic",
          definition: "a statistic characterizing human populations"
      },
      {
          word: "dense",
          definition: "having high compaction or concentration"
      },
      {
          word: "derive",
          definition: "come from"
      },
      {
          word: "designate",
          definition: "design or destine"
      },
      {
          word: "determine",
          definition: "find out or learn with certainty, as by making an inquiry"
      },
      {
          word: "determinism",
          definition: "(philosophy) a philosophical theory holding that all events are inevitable consequences of antecedent sufficient causes; often understood as denying the possibility of free will"
      },
      {
          word: "diligent",
          definition: "quietly and steadily persevering in detail or exactness"
      },
      {
          word: "discretion",
          definition: "power of making choices unconstrained by external agencies"
      },
      {
          word: "disparage",
          definition: "express a negative opinion of"
      },
      {
          word: "disposition",
          definition: "your usual mood"
      },
      {
          word: "disproportionate",
          definition: "out of proper balance"
      },
      {
          word: "dogma",
          definition: "a doctrine or code of beliefs accepted as authoritative"
      },
      {
          word: "eclectic",
          definition: "selecting what seems best of various styles or ideas"
      },
      {
          word: "edification",
          definition: "uplifting enlightenment"
      },
      {
          word: "effect",
          definition: "a phenomenon that is caused by some previous phenomenon"
      },
      {
          word: "egalitarian",
          definition: "favoring social equality"
      },
      {
          word: "embed",
          definition: "fix or set securely or deeply"
      },
      {
          word: "emergence",
          definition: "the act of coming out into view"
      },
      {
          word: "empirical",
          definition: "derived from experiment and observation rather than theory"
      },
      {
          word: "emulate",
          definition: "strive to equal or match, especially by imitating"
      },
      {
          word: "enmity",
          definition: "a state of deep-seated ill-will"
      },
      {
          word: "ensconce",
          definition: "fix firmly"
      },
      {
          word: "ensure",
          definition: "make certain of"
      },
      {
          word: "entrenched",
          definition: "dug in"
      },
      {
          word: "epitome",
          definition: "a standard or typical example"
      },
      {
          word: "equivocal",
          definition: "open to two or more interpretations"
      },
      {
          word: "escalate",
          definition: "increase in extent or intensity"
      },
      {
          word: "espouse",
          definition: "choose and follow a theory, idea, policy, etc."
      },
      {
          word: "established",
          definition: "brought about or set up or accepted"
      },
      {
          word: "estranged",
          definition: "caused to be unloved"
      },
      {
          word: "ethos",
          definition: "the distinctive spirit of a culture or an era"
      },
      {
          word: "euphemism",
          definition: "an inoffensive expression substituted for an offensive one"
      },
      {
          word: "exclusive",
          definition: "admitting or accepting only a particular group"
      },
      {
          word: "exemplary",
          definition: "worthy of imitation"
      },
      {
          word: "exemplify",
          definition: "be characteristic of"
      },
      {
          word: "existential",
          definition: "relating to or dealing with the state of being"
      },
      {
          word: "experiential",
          definition: "of or relating to direct observation or participation"
      },
      {
          word: "explicate",
          definition: "elaborate, as of theories and hypotheses"
      },
      {
          word: "explicit",
          definition: "precisely and clearly expressed or readily observable"
      },
      {
          word: "extrapolation",
          definition: "an inference about the future based on known facts"
      },
      {
          word: "fallacy",
          definition: "a misconception resulting from incorrect reasoning"
      },
      {
          word: "figurative",
          definition: "not literal"
      },
      {
          word: "formal",
          definition: "in accord with established conventions and requirements"
      },
      {
          word: "formulate",
          definition: "prepare according to instructions"
      },
      {
          word: "fractious",
          definition: "easily irritated or annoyed"
      },
      {
          word: "heuristic",
          definition: "a commonsense rule to help solve some problem"
      },
      {
          word: "homogeneous",
          definition: "all of the same or similar kind or nature"
      },
      {
          word: "hypothesis",
          definition: "a tentative insight that is not yet verified or tested"
      },
      {
          word: "hypothetical",
          definition: "a conjectural possibility or circumstance"
      },
      {
          word: "illusive",
          definition: "based on or having the nature of a fantasy"
      },
      {
          word: "imminent",
          definition: "close in time; about to occur"
      },
      {
          word: "impartial",
          definition: "free from undue bias or preconceived opinions"
      },
      {
          word: "impede",
          definition: "be a hindrance or obstacle to"
      },
      {
          word: "impenetrable",
          definition: "not admitting of passage into or through"
      },
      {
          word: "imperil",
          definition: "pose a threat to; present a danger to"
      },
      {
          word: "implement",
          definition: "a piece of equipment or a tool used for a specific purpose"
      },
      {
          word: "implicit",
          definition: "suggested though not directly expressed"
      },
      {
          word: "incremental",
          definition: "increasing gradually by regular degrees or additions"
      },
      {
          word: "indicate",
          definition: "designate a place, direction, person, or thing"
      },
      {
          word: "inevitable",
          definition: "incapable of being avoided or prevented"
      },
      {
          word: "inference",
          definition: "a conclusion you can draw based on known evidence"
      },
      {
          word: "influence",
          definition: "a power to affect persons or events"
      },
      {
          word: "infuse",
          definition: "fill, as with a certain quality"
      },
      {
          word: "ingenuous",
          definition: "lacking in sophistication or worldliness"
      },
      {
          word: "ingrained",
          definition: "deeply rooted; firmly fixed or held"
      },
      {
          word: "inimical",
          definition: "tending to obstruct or cause harm"
      },
      {
          word: "initiative",
          definition: "readiness to embark on bold new ventures"
      },
      {
          word: "innate",
          definition: "present at birth but not necessarily hereditary"
      },
      {
          word: "innocuous",
          definition: "not injurious to physical or mental health"
      },
      {
          word: "innovation",
          definition: "the act of starting something for the first time"
      },
      {
          word: "inquisitive",
          definition: "given to questioning"
      },
      {
          word: "insidious",
          definition: "working or spreading in a hidden and usually injurious way"
      },
      {
          word: "instigate",
          definition: "provoke or stir up"
      },
      {
          word: "instinctive",
          definition: "unthinking"
      },
      {
          word: "insure",
          definition: "protect by a contract of reimbursement in case of loss"
      },
      {
          word: "intrinsic",
          definition: "belonging to a thing by its very nature"
      },
      {
          word: "invariably",
          definition: "without change, in every case"
      },
      {
          word: "lateral thinking",
          definition: "a heuristic for solving problems"
      },
      {
          word: "literal",
          definition: "limited to the explicit meaning of a word or text"
      },
      {
          word: "literate",
          definition: "able to read and write"
      },
      {
          word: "logical fallacy",
          definition: "an error in reasoning that undermines an argument"
      },
      {
          word: "mandate",
          definition: "a formal statement of a command to do something"
      },
      {
          word: "manifest",
          definition: "clearly revealed to the mind or the senses or judgment"
      },
      {
          word: "manifesto",
          definition: "a public declaration of intentions"
      },
      {
          word: "maven",
          definition: "one who is very skilled in or knowledgeable about a field"
      },
      {
          word: "mediocre",
          definition: "moderate to inferior in quality"
      },
      {
          word: "meme",
          definition: "an amusing image that spreads rapidly through social media"
      },
      {
          word: "menial",
          definition: "relating to unskilled work, especially domestic work"
      },
      {
          word: "mitigation",
          definition: "the action of lessening in severity or intensity"
      },
      {
          word: "naive",
          definition: "marked by or showing unaffected simplicity"
      },
      {
          word: "notation",
          definition: "a comment or instruction (usually added)"
      },
      {
          word: "nuance",
          definition: "a subtle difference in meaning or opinion or attitude"
      },
      {
          word: "objective",
          definition: "the goal intended to be attained"
      },
      {
          word: "obstinate",
          definition: "marked by tenacious unwillingness to yield"
      },
      {
          word: "paradigm",
          definition: "a standard or typical example"
      },
      {
          word: "paradox",
          definition: "a statement that contradicts itself"
      },
      {
          word: "partial",
          definition: "being or affecting only a segment"
      },
      {
          word: "pedantic",
          definition: "marked by a narrow focus on or display of learning"
      },
      {
          word: "periodical",
          definition: "happening or recurring at regular intervals"
      },
      {
          word: "pernicious",
          definition: "exceedingly harmful"
      },
      {
          word: "persuade",
          definition: "cause somebody to adopt a certain position or belief"
      },
      {
          word: "plausible",
          definition: "apparently reasonable, valid, or truthful"
      },
      {
          word: "precipitate",
          definition: "bring about abruptly"
      },
      {
          word: "preconceive",
          definition: "conceive beforehand"
      },
      {
          word: "presumption",
          definition: "a premise that is taken for granted"
      },
      {
          word: "primeval",
          definition: "having existed from the beginning"
      },
      {
          word: "primordial",
          definition: "having existed from the beginning"
      },
      {
          word: "proclivity",
          definition: "a natural inclination"
      },
      {
          word: "propaganda",
          definition: "information that is spread to promote some cause"
      },
      {
          word: "propensity",
          definition: "a natural inclination"
      },
      {
          word: "propose",
          definition: "present for consideration, examination, or criticism"
      },
      {
          word: "protocol",
          definition: "forms of ceremony and etiquette observed by officials"
      },
      {
          word: "proximity",
          definition: "the property of being close together"
      },
      {
          word: "proxy",
          definition: "a person authorized to act for another"
      },
      {
          word: "rational",
          definition: "consistent with or based on or using reason"
      },
      {
          word: "rationale",
          definition: "an explanation of the fundamental reasons"
      },
      {
          word: "reasoning",
          definition: "thinking that is organized and logical"
      },
      {
          word: "rebuke",
          definition: "an act or expression of criticism and censure"
      },
      {
          word: "recalcitrant",
          definition: "stubbornly resistant to authority or control"
      },
      {
          word: "receptive",
          definition: "able to absorb liquid (not repellent)"
      },
      {
          word: "reconcile",
          definition: "come to terms"
      },
      {
          word: "reiterate",
          definition: "say, state, or perform again"
      },
      {
          word: "replicate",
          definition: "reproduce or make an exact copy of"
      },
      {
          word: "reprimand",
          definition: "an act or expression of criticism and censure"
      },
      {
          word: "resilient",
          definition: "recovering readily from adversity, depression, or the like"
      },
      {
          word: "retain",
          definition: "secure and keep for possible future use or application"
      },
      {
          word: "retention",
          definition: "the act of keeping something"
      },
      {
          word: "rhetoric",
          definition: "study of the technique for using language effectively"
      },
      {
          word: "rhetorical",
          definition: "relating to using language effectively"
      },
      {
          word: "salient",
          definition: "conspicuous, prominent, or important"
      },
      {
          word: "sanction",
          definition: "official permission or approval"
      },
      {
          word: "savvy",
          definition: "marked by practical hardheaded intelligence"
      },
      {
          word: "self-effacing",
          definition: "reluctant to draw attention to yourself"
      },
      {
          word: "seminal",
          definition: "influential and providing a basis for later development"
      },
      {
          word: "sequential",
          definition: "in regular succession without gaps"
      },
      {
          word: "serial",
          definition: "pertaining to or occurring in or producing a series"
      },
      {
          word: "serial publication",
          definition: "a periodical that appears at scheduled times"
      },
      {
          word: "signify",
          definition: "denote or connote"
      },
      {
          word: "socioeconomic",
          definition: "involving social as well as economic factors"
      },
      {
          word: "speculative",
          definition: "not based on fact or investigation"
      },
      {
          word: "status quo",
          definition: "the existing state of affairs"
      },
      {
          word: "stimulus",
          definition: "any information or event that acts to arouse action"
      },
      {
          word: "subjective",
          definition: "taking place within the mind and modified by individual bias"
      },
      {
          word: "substantiate",
          definition: "establish or strengthen as with new evidence or facts"
      },
      {
          word: "subtlety",
          definition: "the quality of being difficult to detect or analyze"
      },
      {
          word: "subversive",
          definition: "in opposition to an established system or government"
      },
      {
          word: "sufficient",
          definition: "of a quantity that can fulfill a need or requirement"
      },
      {
          word: "sustain",
          definition: "lengthen or extend in duration or space"
      },
      {
          word: "sustainable",
          definition: "capable of being prolonged"
      },
      {
          word: "synopsis",
          definition: "a sketchy summary of the main points of an argument"
      },
      {
          word: "tactile",
          definition: "of or relating to or proceeding from the sense of touch"
      },
      {
          word: "tangible",
          definition: "perceptible by the senses, especially the sense of touch"
      },
      {
          word: "tenacious",
          definition: "stubbornly unyielding"
      },
      {
          word: "tenacity",
          definition: "persistent determination"
      },
      {
          word: "terminate",
          definition: "bring to an end or halt"
      },
      {
          word: "theory",
          definition: "a belief that can guide behavior"
      },
      {
          word: "unequivocal",
          definition: "admitting of no doubt or misunderstanding"
      },
      {
          word: "utopian",
          definition: "pertaining to or resembling an ideally perfect state"
      },
      {
          word: "verify",
          definition: "confirm the truth of"
      },
      {
          word: "vouch",
          definition: "give personal assurance; guarantee"
      }
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
      label.textContent = `Fill in the blank: "${item.definition}"`;
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
      label.textContent = `T/F – The word "${item.word}" means "${displayedDefinition}"?`;
      
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
    let totalQuestions = fillAnswers.length | tfAnswers.length | matchAnswers.length;
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