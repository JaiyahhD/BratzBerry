
/* ==========================================
   BRATZBERRY™ — BESTIE SOS
   Bunny Boo's Survival Kit 💋
   ========================================== */

const bestieSOS = (() => {
  const boosts = [
    "Bunny Boo, you are the moment. Don't let one rough day convince you otherwise. 👑",
    "The crown is not crooked, babe. You're just looking down. Chin UP! 💋",
    "You can be nervous and still absolutely SLAY.",
    "Somebody needs what only YOU can bring to the world. Don't forget that. 🤎",
    "You don't need to have it all figured out to be THAT girl.",
    "Miss Sasha, this is your reminder that you're smart, capable, and very much iconic.",
    "Your Pretty Princess would like to remind you that quitting on yourself is NOT on today's schedule. 💗"
  ];

  const laughs = [
    "Emergency announcement: the drama has been temporarily canceled due to excessive fabulousness. 💅🏽",
    "Girl, are we having a crisis or do we need a snack and a nap? Be specific. 😭",
    "Your emotional support bestie has arrived. Unfortunately, she also has no idea what's going on. 😂",
    "This meeting could've been an email. This meltdown could've been a bubble bath.",
    "Not you fighting for your life against a Tuesday. 😭",
    "Bunny Boo, respectfully, close the 47 tabs in your brain.",
    "The universe said character development. We said CAN WE SKIP THIS EPISODE?! 😂"
  ];

  const comfort = [
    "Hey, Bunny Boo. You don't have to be strong every single second. You deserve softness, too. 🫂",
    "Whatever happened today, it doesn't change how loved you are.",
    "You can take a break without having to earn it.",
    "Some days, simply making it through is enough. And I'm proud of you for that.",
    "If today feels heavy, you don't have to carry tomorrow at the same time.",
    "Sending you the biggest, warmest, most dramatic Yasmin hug imaginable. 🤎"
  ];

  const studySteps = [
    {
      title: "Minute 1 — Reset 🌷",
      body: "Put your shoulders down, unclench your jaw, and take three slow breaths."
    },
    {
      title: "Minute 2 — Clear the chaos 📝",
      body: "Write down everything stressing you out. No organizing yet. Just get it out of your head."
    },
    {
      title: "Minute 3 — Pick ONE thing 📚",
      body: "Choose the smallest useful task you can complete or start right now."
    },
    {
      title: "Minute 4 — Make it tiny ✨",
      body: "Break that task into a first step so easy you can begin without overthinking."
    },
    {
      title: "Minute 5 — Start, pretty girl 👑",
      body: "Set a 15-minute timer and give that one task your attention. Progress over perfection."
    }
  ];

  let currentMood = "medium";
  let lastRandom = {};
  let breathingTimer = null;
  let studyTimer = null;
  let breathingPhase = 0;
  let studyIndex = 0;

  const moods = {
    low: "Minor Inconvenience",
    medium: "Girl, It's a LOT",
    high: "CODE PINK"
  };

  const tiles = [
    ["hug", "🫂", "Hug Me, Heaux", "Soft words, big love"],
    ["hype", "👑", "Hype Me Up", "Confidence refill"],
    ["breathe", "🌷", "Girl, BREATHE", "A calming reset"],
    ["laugh", "😂", "I'm Cryinggg", "Emergency silliness"],
    ["study", "📚", "Academic Meltdown", "Study-day rescue"],
    ["yasmin", "💌", "Where's My Yasmin?", "Your soul sister"]
  ];

  function randomItem(type, items) {
    let index = Math.floor(Math.random() * items.length);

    if (items.length > 1 && index === lastRandom[type]) {
      index = (index + 1) % items.length;
    }

    lastRandom[type] = index;
    return items[index];
  }

  function clearActivities() {
    clearInterval(breathingTimer);
    clearInterval(studyTimer);
    breathingTimer = null;
    studyTimer = null;
  }

  function active() {
    return typeof page !== "undefined" && page === "sos";
  }

  function put(html) {
    if (!active()) return;
    render(html);
    attach();
  }

  function frame(title, subtitle, content) {
    return `
      <div class="sos-screen">
        <button class="back" data-sos="menu">‹ Bestie SOS</button>
        <div class="sos-eyebrow">✦ BUNNY BOO SURVIVAL KIT ✦</div>
        <h2>${title}</h2>
        <p class="sos-subtitle">${subtitle}</p>
        ${content}
      </div>
    `;
  }

  function menu() {
    clearActivities();

    put(`
      <div class="sos-screen">
        <button class="back" data-go="home">‹ Home</button>
        <div class="sos-eyebrow">✦ SIS CONNECT · EMERGENCY LINE ✦</div>
        <h2 class="sos-heading">Bestie SOS 💋</h2>
        <p class="sos-subtitle">
          What's the emergency, pretty girl?<br>
          No judgment. Just love, laughs & a lil attitude.
        </p>

        <div class="sos-levels">
          <div class="sos-level-label">SASHA EMERGENCY LEVEL</div>
          <div class="sos-level-buttons">
            ${Object.entries(moods).map(([id, name]) => `
              <button class="sos-level ${currentMood === id ? "selected" : ""}"
                data-mood="${id}">${name}</button>
            `).join("")}
          </div>
          <p class="sos-level-note" id="sos-mood-note">
            ${moodMessage()}
          </p>
        </div>

        <div class="sos-grid">
          ${tiles.map(([id, emoji, name, subtitle]) => `
            <button class="sos-tile" data-sos="${id}">
              <span class="sos-emoji">${emoji}</span>
              <strong>${name}</strong>
              <small>${subtitle}</small>
            </button>
          `).join("")}
        </div>

        <p class="sos-signature">
          Your Pretty Princess is always in your corner. ♡
        </p>
      </div>
    `);
  }

  function moodMessage() {
    if (currentMood === "low") {
      return "Okay, diva. We can handle a little plot twist. 💋";
    }
    if (currentMood === "high") {
      return "CODE PINK activated. We're leading with extra love today. 🫂";
    }
    return "It's a LOT, but you don't have to do it all at once. 🤎";
  }

  function hug() {
    clearActivities();
    const message = randomItem("hug", comfort);

    put(frame(
      "Hug Me, Heaux 🫂",
      "Come here, pretty girl. Virtual hug incoming.",
      `
        <div class="sos-heart">🤎</div>
        <div class="sos-message">${message}</div>
        <button class="sos-primary" data-sos="hug">
          I Need Another Hug ♡
        </button>
      `
    ));
  }

  function hype() {
    clearActivities();
    const message = randomItem("hype", boosts);

    put(frame(
      "Hype Me Up 👑",
      "Emergency crown adjustment, courtesy of Yasmin.",
      `
        <div class="sos-heart">👑</div>
        <div class="sos-message">${message}</div>
        <button class="sos-primary" data-sos="hype">
          More Main Character Energy ✨
        </button>
      `
    ));
  }

  function laugh() {
    clearActivities();
    const message = randomItem("laugh", laughs);

    put(frame(
      "I'm Cryinggg 😂",
      "Because sometimes we just need to be unserious.",
      `
        <div class="sos-heart">😭</div>
        <div class="sos-message">${message}</div>
        <button class="sos-primary" data-sos="laugh">
          Girl, Give Me Another 😂
        </button>
      `
    ));
  }

  function breathe() {
    clearActivities();
    breathingPhase = 0;

    put(frame(
      "Girl, BREATHE 🌷",
      "Four seconds in. Four seconds out. Just be here.",
      `
        <div class="sos-breath-area">
          <div class="sos-breath-circle" id="sos-breath-circle">
            <span id="sos-breath-word">Ready?</span>
          </div>
          <p id="sos-breath-instruction">
            Let your shoulders relax.
          </p>
        </div>

        <button class="sos-primary" data-sos="start-breath">
          Start Breathing ♡
        </button>
        <button class="sos-secondary" data-sos="stop-breath">
          Stop & Rest
        </button>
      `
    ));
  }

  function startBreathing() {
    clearActivities();

    const circle = document.querySelector("#sos-breath-circle");
    const word = document.querySelector("#sos-breath-word");
    const instruction = document.querySelector("#sos-breath-instruction");

    if (!circle || !word || !instruction) return;

    function update() {
      if (!active() || !circle.isConnected) {
        clearActivities();
        return;
      }

      const inhale = breathingPhase % 2 === 0;

      circle.classList.toggle("inhale", inhale);
      word.textContent = inhale ? "Breathe In" : "Breathe Out";
      instruction.textContent = inhale
        ? "Inhale slowly for four seconds. 🌷"
        : "Exhale gently for four seconds. 🤎";

      breathingPhase++;
    }

    update();
    breathingTimer = setInterval(update, 4000);
  }

  function stopBreathing() {
    clearActivities();

    document.querySelector("#sos-breath-circle")
      ?.classList.remove("inhale");

    const word = document.querySelector("#sos-breath-word");
    const instruction = document.querySelector("#sos-breath-instruction");

    if (word) word.textContent = "You did it ♡";
    if (instruction) {
      instruction.textContent =
        "Take your time. There's no rush to do anything else.";
    }
  }

  function study() {
    clearActivities();
    studyIndex = 0;
    showStudyStep();
  }

  function showStudyStep() {
    const step = studySteps[studyIndex];

    put(frame(
      "Academic Meltdown 📚",
      "Five-minute rescue. One step at a time.",
      `
        <div class="sos-study-count">
          STEP ${studyIndex + 1} OF ${studySteps.length}
        </div>
        <div class="sos-message">
          <strong>${step.title}</strong>
          <p>${step.body}</p>
        </div>
        <div class="sos-study-progress">
          <div style="width:${(studyIndex + 1) * 20}%"></div>
        </div>
        <button class="sos-primary" data-sos="next-study">
          ${studyIndex === studySteps.length - 1
            ? "I Got This! 👑"
            : "Next Step →"}
        </button>
      `
    ));
  }

  function nextStudy() {
    if (studyIndex < studySteps.length - 1) {
      studyIndex++;
      showStudyStep();
    } else {
      put(frame(
        "YOU DID THAT! 👑",
        "Your academic comeback starts with one small step.",
        `
          <div class="sos-heart">✨</div>
          <div class="sos-message">
            See? You don't have to conquer the whole semester
            in one afternoon. Just start where you are.
            Your Pretty Princess is proud of you. 💋
          </div>
          <button class="sos-primary" data-sos="study">
            Restart My Study Reset 📚
          </button>
        `
      ));
    }
  }

  function yasmin() {
    clearActivities();

    put(frame(
      "Where's My Yasmin? 💌",
      "Your Pretty Princess is one tap away.",
      `
        <div class="sos-heart">💋</div>
        <div class="sos-message">
          <strong>Heyyyy, Bunny Boo! 💗</strong>
          <p>
            Whether you need to vent, laugh, cry, or tell me
            absolutely nothing important, I'm always your girl.
          </p>
          <p>
            You never have to have a reason to reach for me.
            I love you, and you've always got me. 🤎
          </p>
          <em>Love, your Pretty Princess ♡</em>
        </div>

        <button class="sos-primary" data-sos="text-yasmin">
          💌 Summon My Pretty Princess
        </button>

        <p class="sos-tiny">
          Opens Messages on your iPhone.
          You choose when to send.
        </p>
      `
    ));
  }

  function textYasmin() {
    // OPTIONAL: Add your phone number here later.
    // Example: const number = "15551234567";
    // IMPORTANT: A number placed in a public website
    // can be viewed in the page's source code.
    const number = "";

    const message =
      "Hey Pretty Princess! 💗 Your Bunny Boo needs you!";

    const recipient = number.trim();
    const destination = recipient
      ? `sms:${recipient}?body=${encodeURIComponent(message)}`
      : `sms:?body=${encodeURIComponent(message)}`;

    window.location.href = destination;
  }

  function attach() {
    // Event delegation is installed once in init().
  }

  function handleClick(event) {
    const moodButton = event.target.closest("[data-mood]");

    if (moodButton && active()) {
      currentMood = moodButton.dataset.mood;
      menu();
      return;
    }

    const button = event.target.closest("[data-sos]");

    if (!button || !active()) return;

    const action = button.dataset.sos;

    if (action === "menu") menu();
    else if (action === "hug") hug();
    else if (action === "hype") hype();
    else if (action === "laugh") laugh();
    else if (action === "breathe") breathe();
    else if (action === "start-breath") startBreathing();
    else if (action === "stop-breath") stopBreathing();
    else if (action === "study") study();
    else if (action === "next-study") nextStudy();
    else if (action === "yasmin") yasmin();
    else if (action === "text-yasmin") textYasmin();
  }

  function init() {
    view.addEventListener("click", handleClick);
  }

  return {
    init,
    menu,
    cleanup: clearActivities
  };
})();

bestieSOS.init();
