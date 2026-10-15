
/* ==========================================
   BRATZBERRY™ — LOVE NOTES 💗
   Pretty Princess Post-Its
   Made for Sasha, with love by Yasmin
   ========================================== */

const loveNotesApp = (() => {
  const notes = [
    // 💌 PICK A LOVE NOTE
    {
      id: 1, category: "love", title: "Be So Fr Right Now",
      text: "Bunny Boo, be so fr right now. 😭 You really thought you were about to go through life without somebody reminding you how amazing you are? GIRL PLEASE. You got me now, so unfortunately for you, the encouragement will be excessive and the love will be LOUD. 💋",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 2, category: "love", title: "Hey, My Girl",
      text: "I hope you know you don't have to be the strong one all the time. You deserve somebody who checks on you, pours into you, and reminds you that you're loved without having to ask. And yes ma'am, I'm volunteering. 😂💗",
      signature: "Yasmin ♡"
    },
    {
      id: 3, category: "love", title: "One Thing About Me",
      text: "When I love somebody, I LOVE them. And you, my girl, are stuck with me. Through the good days, the stressful ones, the random conversations, and all the nonsense in between. That's just what it is. 🤎",
      signature: "Your Pretty Princess 💋"
    },
    {
      id: 4, category: "love", title: "Just Because",
      text: "No special occasion. No dramatic announcement. Just me popping up to tell you I love you, Bunny Boo. Because why should I need a reason? Exactly. 💗",
      signature: "Yasmin ♡"
    },
    {
      id: 5, category: "love", title: "No Auditions Necessary",
      text: "You never have to perform, pretend, or prove yourself to earn a place in my life. You can show up exactly as you are. Even if exactly as you are means tired, irritated, and ready to fight your assignments. 😭🤎",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 6, category: "love", title: "The Friendship Contract",
      text: "I don't remember signing paperwork, but apparently we're in a lifetime friendship agreement. No cancellations. No refunds. Customer service is also me, so good luck with that. 😂💋",
      signature: "Your favorite headache 😘"
    },
    {
      id: 7, category: "love", title: "Little Reminder",
      text: "I hope somebody makes you feel appreciated today. And if nobody does, here I am, clocking in for my shift. You matter to me, Bunny Boo. More than you probably realize. 🤎",
      signature: "Yasmin ♡"
    },
    {
      id: 8, category: "love", title: "Across Any Distance",
      text: "Life gets busy. Days get long. Sometimes we have a million things going on. But none of that changes where you stand with me. My girl is my girl. PERIOD. 💗",
      signature: "Your Pretty Princess 💋"
    },
    {
      id: 9, category: "love", title: "A Little Extra Love",
      text: "In case nobody told you today: you're appreciated, you're important, and you're loved. Also, please drink some water. I'm trying to keep my Bunny Boo in excellent condition. 😭💋",
      signature: "Your favorite headache 😘"
    },

    // 🪞 MIRROR, MIRROR
    {
      id: 10, category: "mirror", title: "EXCUSE ME, MISS SASHA",
      text: "Just checking to make sure you haven't forgotten who you are. Smart? Check. Beautiful? Obviously. Capable? Absolutely. A little dramatic sometimes? Mind your business, we're not discussing that part. 😭👑",
      signature: "Your favorite headache 😘"
    },
    {
      id: 11, category: "mirror", title: "Look at You",
      text: "Girl, LOOK AT YOU. You've made it through things that once felt impossible, and you're still finding reasons to keep going. That's not small. That's something to be proud of. 🤎",
      signature: "Yasmin ♡"
    },
    {
      id: 12, category: "mirror", title: "Beauty and Brains",
      text: "Being pretty AND intelligent? Bunny Boo, leave some blessings for the rest of the population. 😭 But seriously, I hope you never make yourself smaller to make anybody else comfortable.",
      signature: "Your Pretty Princess 💋"
    },
    {
      id: 13, category: "mirror", title: "That Crown",
      text: "Friendly reminder that your crown doesn't disappear just because you're having an off day. Adjust it, straighten your shoulders, and remember exactly who you are. 👑",
      signature: "Yasmin ♡"
    },
    {
      id: 14, category: "mirror", title: "The Whole Package",
      text: "Your beauty isn't just how you look. It's how you think, how you care, how you keep trying, and how you show up in the world. That's the kind of beautiful that lasts. 💗",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 15, category: "mirror", title: "No Comparison Allowed",
      text: "Aht aht! Don't start comparing your chapter to somebody else's highlight reel. Your journey belongs to YOU, and I need you to stop acting like you're behind. 🤎",
      signature: "Your favorite headache 😘"
    },
    {
      id: 16, category: "mirror", title: "Academic Baddie",
      text: "Listen, Miss Future Big Time Professional! Your brain is doing BIG things. You don't need to know everything today. That's literally why you're learning. Now give yourself some credit. 📚💋",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 17, category: "mirror", title: "Still Her",
      text: "Messy hair? Still her. Tired eyes? Still her. Bad mood? Still her. One assignment away from losing it? STILL HER. 😂👑",
      signature: "Your favorite headache 😘"
    },
    {
      id: 18, category: "mirror", title: "My Girl Is Special",
      text: "You have a way of being you that nobody else can duplicate. I hope you protect that instead of trying to become what everybody else expects. 🤎",
      signature: "Yasmin ♡"
    },

    // 😂 JUST US THINGS
    {
      id: 19, category: "us", title: "The Bratz Department",
      text: "Sasha and Yasmin reporting for duty. Our qualifications? Being cute, having opinions, and occasionally needing somebody to tell us to calm down. That's a full-time position. 💋😂",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 20, category: "us", title: "Important Announcement",
      text: "If you ever wonder whether I have something to tell you, the answer is probably yes. Is it important? Debatable. Am I telling you anyway? Absolutely. 😭",
      signature: "Your favorite headache 😘"
    },
    {
      id: 21, category: "us", title: "Bestie Business Hours",
      text: "Our friendship operates on a very professional system: random updates, unsolicited commentary, dramatic reactions, and checking in like we haven't spoken in seventeen years. 😂🤎",
      signature: "Yasmin ♡"
    },
    {
      id: 22, category: "us", title: "Please Advise",
      text: "If I text you 'GIRLLLL,' just know you're about to receive a story. I cannot promise it'll be short, organized, or remotely necessary. Thank you for your patience. 💋",
      signature: "Your favorite headache 😘"
    },
    {
      id: 23, category: "us", title: "The Group Project",
      text: "Friendship with me is basically a group project where we both get full credit for showing up, laughing, and occasionally reminding each other to get our lives together. 😂",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 24, category: "us", title: "Official Complaint",
      text: "I would like to file a formal complaint. Why are we expected to be responsible adults EVERY day? Who approved this schedule? Because I have questions. 😭",
      signature: "Yasmin ♡"
    },
    {
      id: 25, category: "us", title: "Emergency Meeting",
      text: "Bunny Boo, this is an emergency friendship meeting. Agenda item one: we deserve a treat. Agenda item two: see agenda item one. Meeting adjourned. 💅🏽",
      signature: "Your favorite headache 😘"
    },
    {
      id: 26, category: "us", title: "No Context Needed",
      text: "One thing I love about having my girl? Sometimes I don't need a perfect explanation. I can just start talking and trust you'll figure out what kind of day I'm having. 🤎😂",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 27, category: "us", title: "Certified Duo",
      text: "Some people have matching bracelets. We have an entire fictional Bratz phone. Honestly, I feel like that says everything anybody needs to know about us. 😭💗",
      signature: "Yasmin ♡"
    },

    // 🌸 POCKET AFFIRMATIONS
    {
      id: 28, category: "affirm", title: "One Thing at a Time",
      text: "You don't have to solve every problem today. Handle the next thing, then the next. That's enough. 🌷",
      signature: "Yasmin ♡"
    },
    {
      id: 29, category: "affirm", title: "Rest Is Allowed",
      text: "You are allowed to rest before you're completely exhausted. Your worth isn't measured by how much you get done. 🤎",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 30, category: "affirm", title: "Try Again Tomorrow",
      text: "A rough day is not a failed life. Get some rest, Bunny Boo. Tomorrow gets another chance. 💗",
      signature: "Yasmin ♡"
    },
    {
      id: 31, category: "affirm", title: "You Belong",
      text: "You deserve to take up space, speak your mind, and walk into rooms like you belong there. Because you do. 👑",
      signature: "Your Pretty Princess 💋"
    },
    {
      id: 32, category: "affirm", title: "Progress, Pretty Girl",
      text: "Small steps still count. Even the tiny ones you think nobody notices. I see you trying, and I'm proud of you. 🤎",
      signature: "Yasmin ♡"
    },
    {
      id: 33, category: "affirm", title: "No Rush",
      text: "You're not late to your own life. You are learning, growing, and becoming at your own pace. 🌸",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 34, category: "affirm", title: "Feel Your Feelings",
      text: "You can be grateful and still be tired. Happy and still overwhelmed. Strong and still need support. You're human, my girl. 💗",
      signature: "Yasmin ♡"
    },
    {
      id: 35, category: "affirm", title: "Keep Going",
      text: "You've already survived so many days you thought would break you. Don't forget how much strength lives in you. 🤎",
      signature: "Your Pretty Princess ♡"
    },
    {
      id: 36, category: "affirm", title: "Love, Always",
      text: "Whatever today brings, remember this: you are loved without conditions, celebrated without competition, and never alone in my corner of the world. 💋",
      signature: "Yasmin ♡"
    }
  ];

  const categories = {
    love: {
      emoji: "💌",
      name: "Pick a Love Note",
      subtitle: "A sweet little surprise"
    },
    mirror: {
      emoji: "🪞",
      name: "Mirror, Mirror",
      subtitle: "Compliments for my Sasha"
    },
    us: {
      emoji: "😂",
      name: "Just Us Things",
      subtitle: "Bestie nonsense"
    },
    affirm: {
      emoji: "🌸",
      name: "Pocket Affirmations",
      subtitle: "Tiny words, big love"
    }
  };

  const storageKey = "bratzberry-love-favorites";

  let favorites = new Set();
  let lastPicked = {};
  let currentCategory = null;
  let currentNoteId = null;

  try {
    const stored = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

    if (Array.isArray(stored)) {
      favorites = new Set(stored.map(Number));
    }
  } catch (error) {
    console.warn("Love Notes favorites could not be loaded.");
  }

  function saveFavorites() {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify([...favorites])
      );
    } catch (error) {
      console.warn("Love Notes favorites could not be saved.");
    }
  }

  function active() {
    return typeof page !== "undefined" && page === "notes";
  }

  function escapeText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function show(html) {
    if (!active()) return;

    render(`
      <div class="ln-screen">
        ${html}
      </div>
    `);
  }

  function getDailyNote() {
    // The same note appears all day on this device.
    // It changes according to the local calendar date.
    const now = new Date();
    const start = new Date(
      now.getFullYear(), 0, 1
    );

    const dayOfYear = Math.floor(
      (
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        ) - start
      ) / 86400000
    );

    const index = (
      dayOfYear + now.getFullYear() * 17
    ) % notes.length;

    return notes[index];
  }

  function getRandomNote(category) {
    const choices = notes.filter(
      note => note.category === category
    );

    if (!choices.length) return null;

    let index = Math.floor(
      Math.random() * choices.length
    );

    if (
      choices.length > 1 &&
      choices[index].id === lastPicked[category]
    ) {
      index = (index + 1) % choices.length;
    }

    lastPicked[category] = choices[index].id;

    return choices[index];
  }

  function noteCard(note, isDaily = false) {
    const saved = favorites.has(note.id);

    return `
      <div class="ln-note-card ${isDaily ? "ln-daily" : ""}">
        <div class="ln-note-top">
          <span>
            ${isDaily ? "TODAY'S LITTLE LOVE NOTE" : "FROM YASMIN, WITH LOVE"}
          </span>
          <span>♡ ${String(note.id).padStart(3, "0")}</span>
        </div>

        <div class="ln-note-sticker">💗</div>

        <h3>${escapeText(note.title)}</h3>

        <p class="ln-note-message">
          ${escapeText(note.text)}
        </p>

        <p class="ln-signature">
          — ${escapeText(note.signature)}
        </p>

        <button
          class="ln-save ${saved ? "is-saved" : ""}"
          data-ln-save="${note.id}"
          aria-pressed="${saved}"
        >
          ${saved ? "♥ Saved to My Heart" : "♡ Save to My Heart"}
        </button>
      </div>
    `;
  }

  function menu() {
    currentCategory = null;
    currentNoteId = null;

    const daily = getDailyNote();

    show(`
      <button class="back" data-go="home">‹ Home</button>

      <div class="ln-heading">
        <div class="ln-eyebrow">
          ✦ PRETTY PRINCESS PRODUCTIONS ✦
        </div>

        <h2>Love Notes 💗</h2>

        <p>
          Pretty Princess Post-Its<br>
          Little pieces of Yasmin, just for Bunny Boo.
        </p>
      </div>

      ${noteCard(daily, true)}

      <div class="ln-section-heading">
        <span>OPEN SOMETHING SWEET ♡</span>
      </div>

      <div class="ln-grid">
        ${Object.entries(categories).map(
          ([id, category]) => `
            <button class="ln-tile" data-ln-category="${id}">
              <span class="ln-tile-emoji">
                ${category.emoji}
              </span>
              <strong>${category.name}</strong>
              <small>${category.subtitle}</small>
            </button>
          `
        ).join("")}
      </div>

      <button class="ln-favorites-button" data-ln="favorites">
        ♥ Saved to My Heart
        <span>${favorites.size}</span>
      </button>

      <p class="ln-footer">
        A little love, a little attitude, a whole lot of us. 💋
      </p>
    `);
  }

  function openCategory(category) {
    if (!categories[category]) return;

    currentCategory = category;

    const note = getRandomNote(category);

    if (note) {
      openNote(note.id, category);
    }
  }

  function openNote(id, category = null) {
    const note = notes.find(
      item => item.id === Number(id)
    );

    if (!note) return;

    currentNoteId = note.id;

    if (category) {
      currentCategory = category;
    }

    const details = categories[note.category];

    show(`
      <button class="back" data-ln="back">
        ‹ ${currentCategory ? details.name : "Love Notes"}
      </button>

      <div class="ln-heading">
        <div class="ln-eyebrow">
          ✦ SEALED WITH LOVE ✦
        </div>

        <h2>${details.emoji} ${details.name}</h2>

        <p>Special delivery for Bunny Boo ♡</p>
      </div>

      <div class="ln-envelope-open">💌</div>

      ${noteCard(note)}

      ${
        currentCategory
          ? `
            <button
              class="ln-next"
              data-ln="another"
            >
              Open Another Note ✨
            </button>
          `
          : ""
      }

      <button class="ln-text-button" data-ln="menu">
        Back to My Journal ♡
      </button>
    `);
  }

  function showFavorites() {
    currentCategory = null;

    const savedNotes = notes.filter(
      note => favorites.has(note.id)
    );

    show(`
      <button class="back" data-ln="menu">
        ‹ Love Notes
      </button>

      <div class="ln-heading">
        <div class="ln-eyebrow">
          ✦ BUNNY BOO'S COLLECTION ✦
        </div>

        <h2>Saved to My Heart ♥</h2>

        <p>
          Your favorite little pieces of Yasmin.
        </p>
      </div>

      ${
        savedNotes.length
          ? `
            <div class="ln-saved-list">
              ${savedNotes.map(note => `
                <button
                  class="ln-saved-item"
                  data-ln-note="${note.id}"
                >
                  <span>💌</span>
                  <span>
                    <strong>${escapeText(note.title)}</strong>
                    <small>
                      ${categories[note.category].name}
                    </small>
                  </span>
                  <span>›</span>
                </button>
              `).join("")}
            </div>
          `
          : `
            <div class="ln-empty">
              <div>💗</div>
              <h3>Nothing saved yet, pretty girl!</h3>
              <p>
                Open a few notes and tap
                "Save to My Heart" to collect them here.
              </p>
              <button class="ln-next" data-ln="menu">
                Find Some Love Notes ♡
              </button>
            </div>
          `
      }
    `);
  }

  function toggleFavorite(id) {
    id = Number(id);

    if (favorites.has(id)) {
      favorites.delete(id);
    } else {
      favorites.add(id);
    }

    saveFavorites();

    // Update the heart without replacing the note.
    document.querySelectorAll(
      `[data-ln-save="${id}"]`
    ).forEach(button => {
      const saved = favorites.has(id);

      button.textContent = saved
        ? "♥ Saved to My Heart"
        : "♡ Save to My Heart";

      button.classList.toggle("is-saved", saved);

      button.setAttribute(
        "aria-pressed",
        String(saved)
      );
    });

    const count = document.querySelector(
      ".ln-favorites-button span"
    );

    if (count) {
      count.textContent = favorites.size;
    }
  }

  function handleClick(event) {
    if (!active()) return;

    const saveButton = event.target.closest(
      "[data-ln-save]"
    );

    if (saveButton) {
      toggleFavorite(saveButton.dataset.lnSave);
      return;
    }

    const categoryButton = event.target.closest(
      "[data-ln-category]"
    );

    if (categoryButton) {
      openCategory(categoryButton.dataset.lnCategory);
      return;
    }

    const noteButton = event.target.closest(
      "[data-ln-note]"
    );

    if (noteButton) {
      openNote(noteButton.dataset.lnNote);
      return;
    }

    const actionButton = event.target.closest(
      "[data-ln]"
    );

    if (!actionButton) return;

    const action = actionButton.dataset.ln;

    if (action === "menu") {
      menu();
    } else if (action === "favorites") {
      showFavorites();
    } else if (action === "another") {
      openCategory(currentCategory);
    } else if (action === "back") {
      if (currentCategory) {
        menu();
      } else {
        showFavorites();
      }
    }
  }

  function init() {
    view.addEventListener("click", handleClick);
  }

  return {
    init,
    menu
  };
})();

loveNotesApp.init();
