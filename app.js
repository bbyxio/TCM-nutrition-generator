/* ==========================================
   TCM Nutrition & Diagnosis Generator
   Production Build
   Part 1: Core Databases
   ========================================== */

/* ------------------------------------------
   PATTERN DATABASE
------------------------------------------ */

const patterns = {

  spleenQiDeficiency: {
    name: "Spleen Qi Deficiency",
    element: "Earth",
    description:
      "Insufficient Spleen Qi leading to poor transformation and transportation of food and fluids."
  },

  spleenYangDeficiency: {
    name: "Spleen Yang Deficiency",
    element: "Earth",
    description:
      "Progression of Spleen Qi deficiency with cold and weakened digestive fire."
  },

  dampnessAccumulation: {
    name: "Dampness Accumulation",
    element: "Earth",
    description:
      "Impaired fluid metabolism resulting in Damp retention."
  },

  liverQiStagnation: {
    name: "Liver Qi Stagnation",
    element: "Wood",
    description:
      "Impaired free flow of Liver Qi causing emotional and physical stagnation."
  },

  liverFire: {
    name: "Liver Fire Rising",
    element: "Wood",
    description:
      "Excess heat generated from prolonged Liver Qi stagnation."
  },

  liverBloodDeficiency: {
    name: "Liver Blood Deficiency",
    element: "Wood",
    description:
      "Insufficient Liver Blood to nourish tissues and Shen."
  },

  lungQiDeficiency: {
    name: "Lung Qi Deficiency",
    element: "Metal",
    description:
      "Weak Lung Qi affecting respiration and defensive Qi."
  },

  lungYinDeficiency: {
    name: "Lung Yin Deficiency",
    element: "Metal",
    description:
      "Depletion of Lung Yin causing dryness and deficiency heat."
  },

  kidneyYangDeficiency: {
    name: "Kidney Yang Deficiency",
    element: "Water",
    description:
      "Insufficient Kidney Yang causing cold and reduced metabolic activity."
  },

  kidneyYinDeficiency: {
    name: "Kidney Yin Deficiency",
    element: "Water",
    description:
      "Depletion of Kidney Yin leading to empty heat and dryness."
  }

};

/* ------------------------------------------
   FIVE ELEMENT INTERPRETATIONS
------------------------------------------ */

const fiveElements = {

  Wood: {
    organ: "Liver",
    functions:
      "Ensures smooth flow of Qi, stores Blood, supports tendons and emotional regulation.",
    emotion: "Anger / Frustration",
    season: "Spring"
  },

  Fire: {
    organ: "Heart",
    functions:
      "Governance of Blood circulation and housing the Shen.",
    emotion: "Joy",
    season: "Summer"
  },

  Earth: {
    organ: "Spleen",
    functions:
      "Transformation and transportation of food and fluids.",
    emotion: "Pensiveness / Worry",
    season: "Late Summer"
  },

  Metal: {
    organ: "Lung",
    functions:
      "Governance of Qi, respiration and defensive Wei Qi.",
    emotion: "Grief",
    season: "Autumn"
  },

  Water: {
    organ: "Kidney",
    functions:
      "Stores Essence, governs growth, reproduction and water metabolism.",
    emotion: "Fear",
    season: "Winter"
  }

};

/* ------------------------------------------
   SYMPTOM DATABASE
------------------------------------------ */

const symptomWeights = {

  /* Spleen Qi Deficiency */

  fatigue: {
    spleenQiDeficiency: 3,
    spleenYangDeficiency: 2,
    lungQiDeficiency: 2
  },

  poorAppetite: {
    spleenQiDeficiency: 4,
    spleenYangDeficiency: 3
  },

  bloating: {
    spleenQiDeficiency: 3,
    dampnessAccumulation: 3
  },

  looseStools: {
    spleenQiDeficiency: 4,
    spleenYangDeficiency: 4
  },

  postMealFatigue: {
    spleenQiDeficiency: 5
  },

  /* Spleen Yang */

  coldLimbs: {
    spleenYangDeficiency: 5,
    kidneyYangDeficiency: 4
  },

  feelingCold: {
    spleenYangDeficiency: 4,
    kidneyYangDeficiency: 5
  },

  edema: {
    spleenYangDeficiency: 3,
    kidneyYangDeficiency: 4,
    dampnessAccumulation: 2
  },

  /* Dampness */

  heaviness: {
    dampnessAccumulation: 5
  },

  brainFog: {
    dampnessAccumulation: 4,
    spleenQiDeficiency: 2
  },

  excessiveMucus: {
    dampnessAccumulation: 5,
    lungQiDeficiency: 2
  },

  stickyStools: {
    dampnessAccumulation: 5
  },

  /* Liver Qi */

  irritability: {
    liverQiStagnation: 4,
    liverFire: 3
  },

  moodSwings: {
    liverQiStagnation: 5
  },

  sighing: {
    liverQiStagnation: 5
  },

  hypochondriacPain: {
    liverQiStagnation: 5,
    liverFire: 2
  },

  /* Liver Fire */

  headaches: {
    liverFire: 5,
    liverQiStagnation: 2
  },

  redEyes: {
    liverFire: 5
  },

  angerOutbursts: {
    liverFire: 5
  },

  bitterTaste: {
    liverFire: 5
  },

  /* Liver Blood */

  dizziness: {
    liverBloodDeficiency: 4,
    kidneyYinDeficiency: 2
  },

  dryEyes: {
    liverBloodDeficiency: 5,
    liverFire: 1
  },

  numbness: {
    liverBloodDeficiency: 5
  },

  scantyMenses: {
    liverBloodDeficiency: 5
  },

  /* Lung Qi */

  weakVoice: {
    lungQiDeficiency: 5
  },

  shortnessOfBreath: {
    lungQiDeficiency: 5
  },

  spontaneousSweating: {
    lungQiDeficiency: 4
  },

  frequentColds: {
    lungQiDeficiency: 5
  },

  /* Lung Yin */

  dryCough: {
    lungYinDeficiency: 5
  },

  dryThroat: {
    lungYinDeficiency: 5,
    kidneyYinDeficiency: 2
  },

  nightSweats: {
    lungYinDeficiency: 3,
    kidneyYinDeficiency: 5
  },

  drySkin: {
    lungYinDeficiency: 4
  },

  /* Kidney Yang */

  lowLibido: {
    kidneyYangDeficiency: 5
  },

  lowerBackPain: {
    kidneyYangDeficiency: 4,
    kidneyYinDeficiency: 4
  },

  frequentUrination: {
    kidneyYangDeficiency: 5
  },

  /* Kidney Yin */

  tinnitus: {
    kidneyYinDeficiency: 4
  },

  fivePalmHeat: {
    kidneyYinDeficiency: 5
  },

  insomnia: {
    kidneyYinDeficiency: 4,
    liverBloodDeficiency: 2
  }

};

/* ------------------------------------------
   TONGUE DATABASE
------------------------------------------ */

const tongueWeights = {

  pale: {
    spleenQiDeficiency: 3,
    spleenYangDeficiency: 4,
    liverBloodDeficiency: 4
  },

  swollen: {
    spleenQiDeficiency: 3,
    dampnessAccumulation: 4
  },

  teethMarks: {
    spleenQiDeficiency: 5,
    dampnessAccumulation: 3
  },

  red: {
    liverFire: 4,
    kidneyYinDeficiency: 3,
    lungYinDeficiency: 3
  },

  redSides: {
    liverQiStagnation: 4,
    liverFire: 5
  },

  dry: {
    kidneyYinDeficiency: 4,
    lungYinDeficiency: 5
  },

  greasyCoat: {
    dampnessAccumulation: 5
  },

  peeled: {
    kidneyYinDeficiency: 4,
    lungYinDeficiency: 4
  }

};

/* ------------------------------------------
   PULSE DATABASE
------------------------------------------ */

const pulseWeights = {

  weak: {
    spleenQiDeficiency: 4,
    lungQiDeficiency: 4,
    kidneyYangDeficiency: 3
  },

  deep: {
    kidneyYangDeficiency: 4,
    kidneyYinDeficiency: 3
  },

  slippery: {
    dampnessAccumulation: 5
  },

  wiry: {
    liverQiStagnation: 5,
    liverFire: 4
  },

  rapid: {
    liverFire: 5,
    kidneyYinDeficiency: 3,
    lungYinDeficiency: 3
  },

  thin: {
    liverBloodDeficiency: 5,
    kidneyYinDeficiency: 3
  }

};
/* ==========================================
   PART 2
   NUTRITION & LIFESTYLE DATABASE
========================================== */

const recommendations = {

  spleenQiDeficiency: {

    foodsToEat: [
      "Oats",
      "Rice",
      "Sweet potato",
      "Carrots",
      "Pumpkin",
      "Chicken",
      "Turkey",
      "Lentils",
      "Chickpeas",
      "Dates"
    ],

    foodsToAvoid: [
      "Ice cold drinks",
      "Raw salads in excess",
      "Refined sugar",
      "Greasy foods",
      "Excess dairy"
    ],

    lifestyle: [
      "Eat regular meals",
      "Avoid skipping breakfast",
      "Prioritize adequate sleep",
      "Avoid excessive studying while eating",
      "Moderate exercise"
    ],

    nutritionSummary:
      "Focus on warm, cooked foods that strengthen digestion and support Qi production."
  },

  spleenYangDeficiency: {

    foodsToEat: [
      "Lamb",
      "Chicken",
      "Ginger",
      "Cinnamon",
      "Sweet potato",
      "Pumpkin",
      "Oats",
      "Walnuts",
      "Leeks",
      "Bone broth"
    ],

    foodsToAvoid: [
      "Cold drinks",
      "Raw foods",
      "Ice cream",
      "Excess fruit smoothies",
      "Cold dairy"
    ],

    lifestyle: [
      "Keep abdomen warm",
      "Avoid prolonged exposure to cold",
      "Gentle movement daily",
      "Regular meal schedule",
      "Prioritize restorative sleep"
    ],

    nutritionSummary:
      "Use warming foods and cooking methods to support Yang and digestive fire."
  },

  dampnessAccumulation: {

    foodsToEat: [
      "Barley",
      "Adzuki beans",
      "Millet",
      "Daikon radish",
      "Celery",
      "Mung beans",
      "Parsley",
      "Green tea",
      "Mushrooms",
      "Turnips"
    ],

    foodsToAvoid: [
      "Sugary foods",
      "Fried foods",
      "Greasy foods",
      "Alcohol",
      "Excess dairy"
    ],

    lifestyle: [
      "Increase daily movement",
      "Avoid overeating",
      "Reduce sugar intake",
      "Improve sleep quality",
      "Avoid prolonged sitting"
    ],

    nutritionSummary:
      "Promote fluid metabolism and reduce Damp-producing foods."
  },

  liverQiStagnation: {

    foodsToEat: [
      "Peppermint",
      "Citrus peel",
      "Lemon",
      "Lime",
      "Turmeric",
      "Basil",
      "Parsley",
      "Buckwheat",
      "Green vegetables",
      "Rose tea"
    ],

    foodsToAvoid: [
      "Alcohol",
      "Highly processed foods",
      "Overeating",
      "Excess caffeine"
    ],

    lifestyle: [
      "Regular exercise",
      "Stress management",
      "Breathing exercises",
      "Creative activities",
      "Time outdoors"
    ],

    nutritionSummary:
      "Encourage smooth circulation of Qi through movement and aromatic foods."
  },

  liverFire: {

    foodsToEat: [
      "Cucumber",
      "Celery",
      "Watercress",
      "Bitter greens",
      "Mung beans",
      "Chrysanthemum tea",
      "Pear",
      "Green tea",
      "Lettuce",
      "Broccoli"
    ],

    foodsToAvoid: [
      "Alcohol",
      "Spicy foods",
      "Deep fried foods",
      "Excess red meat",
      "Energy drinks"
    ],

    lifestyle: [
      "Stress reduction",
      "Adequate sleep",
      "Reduce stimulants",
      "Mindfulness practices",
      "Regular exercise"
    ],

    nutritionSummary:
      "Clear heat while supporting healthy Liver function."
  },

  liverBloodDeficiency: {

    foodsToEat: [
      "Beets",
      "Eggs",
      "Grass-fed beef",
      "Chicken",
      "Spinach",
      "Black sesame",
      "Goji berries",
      "Dates",
      "Lentils",
      "Bone broth"
    ],

    foodsToAvoid: [
      "Excess fasting",
      "Highly processed foods"
    ],

    lifestyle: [
      "Prioritize sleep",
      "Avoid overwork",
      "Gentle exercise",
      "Manage stress",
      "Regular meals"
    ],

    nutritionSummary:
      "Nourish Blood with nutrient-dense foods and adequate recovery."
  },

  lungQiDeficiency: {

    foodsToEat: [
      "Rice",
      "Oats",
      "Chicken",
      "Pear",
      "Sweet potato",
      "Carrots",
      "Mushrooms",
      "Almonds",
      "White beans",
      "Daikon"
    ],

    foodsToAvoid: [
      "Smoking",
      "Excess cold foods",
      "Highly processed foods"
    ],

    lifestyle: [
      "Breathing exercises",
      "Moderate aerobic activity",
      "Adequate sleep",
      "Reduce overexertion",
      "Fresh air exposure"
    ],

    nutritionSummary:
      "Strengthen Lung Qi and support respiratory resilience."
  },

  lungYinDeficiency: {

    foodsToEat: [
      "Pear",
      "Honey",
      "Tofu",
      "White fungus",
      "Sesame seeds",
      "Almonds",
      "Duck",
      "Lily bulb",
      "Cucumber",
      "Asparagus"
    ],

    foodsToAvoid: [
      "Smoking",
      "Excess spicy foods",
      "Alcohol",
      "Drying foods"
    ],

    lifestyle: [
      "Stay hydrated",
      "Humidify dry environments",
      "Avoid overtraining",
      "Prioritize sleep",
      "Breathing exercises"
    ],

    nutritionSummary:
      "Moisten dryness and replenish Lung Yin."
  },

  kidneyYangDeficiency: {

    foodsToEat: [
      "Lamb",
      "Venison",
      "Walnuts",
      "Black beans",
      "Chestnuts",
      "Ginger",
      "Cinnamon",
      "Bone broth",
      "Leeks",
      "Shrimp"
    ],

    foodsToAvoid: [
      "Cold drinks",
      "Raw foods",
      "Ice cream",
      "Excess fruit smoothies"
    ],

    lifestyle: [
      "Stay warm",
      "Avoid excessive exertion",
      "Adequate sleep",
      "Strength training",
      "Regular schedule"
    ],

    nutritionSummary:
      "Warm and support Kidney Yang while conserving energy."
  },

  kidneyYinDeficiency: {

    foodsToEat: [
      "Black sesame",
      "Goji berries",
      "Tofu",
      "Eggs",
      "Duck",
      "Kidney beans",
      "Seaweed",
      "Mulberries",
      "Asparagus",
      "Pear"
    ],

    foodsToAvoid: [
      "Alcohol",
      "Excess spicy foods",
      "Overuse of stimulants"
    ],

    lifestyle: [
      "Prioritize sleep",
      "Meditation",
      "Moderate exercise",
      "Avoid chronic overwork",
      "Stress reduction"
    ],

    nutritionSummary:
      "Nourish Yin, fluids, and Essence while reducing deficiency heat."
  }

};
/* ==========================================
   PART 3
   DIAGNOSTIC ENGINE
========================================== */

/* ------------------------------------------
   CREATE EMPTY SCORE OBJECT
------------------------------------------ */

function initializeScores() {

  return {
    spleenQiDeficiency: 0,
    spleenYangDeficiency: 0,
    dampnessAccumulation: 0,
    liverQiStagnation: 0,
    liverFire: 0,
    liverBloodDeficiency: 0,
    lungQiDeficiency: 0,
    lungYinDeficiency: 0,
    kidneyYangDeficiency: 0,
    kidneyYinDeficiency: 0
  };

}

/* ------------------------------------------
   APPLY SYMPTOM SCORES
------------------------------------------ */

function processSymptoms(selectedSymptoms, scores) {

  selectedSymptoms.forEach(symptom => {

    const matches = symptomWeights[symptom];

    if (!matches) return;

    Object.entries(matches).forEach(([pattern, weight]) => {
      scores[pattern] += weight;
    });

  });

}

/* ------------------------------------------
   APPLY TONGUE SCORES
------------------------------------------ */

function processTongue(selectedTongue, scores) {

  selectedTongue.forEach(feature => {

    const matches = tongueWeights[feature];

    if (!matches) return;

    Object.entries(matches).forEach(([pattern, weight]) => {
      scores[pattern] += weight;
    });

  });

}

/* ------------------------------------------
   APPLY PULSE SCORES
------------------------------------------ */

function processPulse(selectedPulse, scores) {

  selectedPulse.forEach(feature => {

    const matches = pulseWeights[feature];

    if (!matches) return;

    Object.entries(matches).forEach(([pattern, weight]) => {
      scores[pattern] += weight;
    });

  });

}

/* ------------------------------------------
   SORT RESULTS
------------------------------------------ */

function rankPatterns(scores) {

  return Object.entries(scores)
    .map(([id, score]) => ({
      id,
      score,
      ...patterns[id]
    }))
    .sort((a, b) => b.score - a.score);

}

/* ------------------------------------------
   CONFIDENCE CALCULATION
------------------------------------------ */

function calculateConfidence(rankedPatterns) {

  const topScore = rankedPatterns[0]?.score || 0;
  const secondScore = rankedPatterns[1]?.score || 0;

  if (topScore === 0) return 0;

  const confidence =
    ((topScore - secondScore) / topScore) * 100;

  return Math.max(
    25,
    Math.min(
      95,
      Math.round(confidence + 50)
    )
  );

}

/* ------------------------------------------
   DETERMINE PRIMARY PATTERN
------------------------------------------ */

function getPrimaryPattern(rankedPatterns) {

  return rankedPatterns[0];

}

/* ------------------------------------------
   GET TOP THREE PATTERNS
------------------------------------------ */

function getTopPatterns(rankedPatterns) {

  return rankedPatterns
    .filter(pattern => pattern.score > 0)
    .slice(0, 3);

}

/* ------------------------------------------
   FIVE ELEMENT LOOKUP
------------------------------------------ */

function getElementInfo(pattern) {

  return fiveElements[pattern.element];

}

/* ------------------------------------------
   RECOMMENDATION LOOKUP
------------------------------------------ */

function getRecommendations(patternId) {

  return recommendations[patternId];

}

/* ------------------------------------------
   COMPLETE ANALYSIS PIPELINE
------------------------------------------ */

function analyzeTCMProfile({

  symptoms,
  tongue,
  pulse

}) {

  const scores = initializeScores();

  processSymptoms(symptoms, scores);
  processTongue(tongue, scores);
  processPulse(pulse, scores);

  const rankedPatterns =
    rankPatterns(scores);

  const primaryPattern =
    getPrimaryPattern(rankedPatterns);

  const topPatterns =
    getTopPatterns(rankedPatterns);

  const confidence =
    calculateConfidence(rankedPatterns);

  return {

    scores,
    rankedPatterns,
    primaryPattern,
    topPatterns,
    confidence

  };

}
/* ==========================================
   PART 4
   RESULTS RENDERING & UI
========================================== */

/* ------------------------------------------
   HELPER FUNCTIONS
------------------------------------------ */

function getCheckedValues(groupName) {

  return Array.from(
    document.querySelectorAll(
      `input[name="${groupName}"]:checked`
    )
  ).map(input => input.value);

}

function createList(items) {

  return `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

}

/* ------------------------------------------
   BUILD RESULTS HTML
------------------------------------------ */

function renderResults(result) {

  const resultsSection =
    document.getElementById("results");

  const topPattern =
    result.primaryPattern;

  if (!topPattern || topPattern.score === 0) {

    resultsSection.innerHTML = `
      <div class="pattern-card">
        <h3>No Pattern Detected</h3>
        <p>
          Please select more symptoms,
          tongue findings, or pulse findings.
        </p>
      </div>
    `;

    resultsSection.classList.add("active");
    return;

  }

  const recs =
    getRecommendations(topPattern.id);

  const elementInfo =
    getElementInfo(topPattern);

  const topThreeHTML =
    result.topPatterns.map((pattern, index) => {

      const rankClass =
        `rank-${index + 1}`;

      return `
        <div class="pattern-card ${rankClass}">
          <h3>
            #${index + 1}
            ${pattern.name}
          </h3>

          <div class="pattern-score">
            Score: ${pattern.score}
          </div>

          <p>
            ${pattern.description}
          </p>
        </div>
      `;

    }).join("");

  resultsSection.innerHTML = `

    <div class="top-pattern-banner">

      <h2>
        Primary Pattern:
        ${topPattern.name}
      </h2>

      <p>
        ${topPattern.description}
      </p>

    </div>

    <div class="result-box">

      <h4>Confidence Score</h4>

      <div class="confidence-bar">
        <div
          class="confidence-fill"
          style="width:${result.confidence}%">
        </div>
      </div>

      <p>
        ${result.confidence}% Confidence
      </p>

    </div>

    <div class="results-grid">

      <div class="result-box">

        <h4>
          Top Matching Patterns
        </h4>

        ${topThreeHTML}

      </div>

      <div class="element-card">

        <h4>
          Five Element Interpretation
        </h4>

        <p>
          <strong>Element:</strong>
          ${topPattern.element}
        </p>

        <p>
          <strong>Zang Organ:</strong>
          ${elementInfo.organ}
        </p>

        <p>
          <strong>Function:</strong>
          ${elementInfo.functions}
        </p>

        <p>
          <strong>Emotion:</strong>
          ${elementInfo.emotion}
        </p>

        <p>
          <strong>Season:</strong>
          ${elementInfo.season}
        </p>

      </div>

      <div class="result-box">

        <h4>
          Nutrition Strategy
        </h4>

        <p>
          ${recs.nutritionSummary}
        </p>

      </div>

      <div class="result-box">

        <h4>
          Foods To Emphasize
        </h4>

        ${createList(recs.foodsToEat)}

      </div>

      <div class="result-box">

        <h4>
          Foods To Limit
        </h4>

        ${createList(recs.foodsToAvoid)}

      </div>

      <div class="result-box">

        <h4>
          Lifestyle Recommendations
        </h4>

        ${createList(recs.lifestyle)}

      </div>

    </div>

    <div class="disclaimer">

      <strong>Educational Use Only</strong>

      <p>
        This tool is intended for
        educational purposes and does
        not replace a complete TCM
        assessment by a qualified
        practitioner.
      </p>

    </div>

  `;

  resultsSection.classList.add("active");

  resultsSection.scrollIntoView({
    behavior: "smooth"
  });

}

/* ------------------------------------------
   ANALYZE BUTTON
------------------------------------------ */

function handleAnalysis() {

  const symptoms =
    getCheckedValues("symptoms");

  const tongue =
    getCheckedValues("tongue");

  const pulse =
    getCheckedValues("pulse");

  const result =
    analyzeTCMProfile({

      symptoms,
      tongue,
      pulse

    });

  renderResults(result);

}

/* ------------------------------------------
   APP INITIALIZATION
------------------------------------------ */

function initializeApp() {

  const analyzeButton =
    document.getElementById("analyzeBtn");

  if (analyzeButton) {

    analyzeButton.addEventListener(
      "click",
      handleAnalysis
    );

  }

}

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);

