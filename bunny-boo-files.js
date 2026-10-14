
/* ============================================
   BRATZBERRY™ — BUNNY BOO WEEKLY
   The Unreleased Collection · Vol. 001
   ============================================ */

const bunnyBooFiles = (() => {
  const KEY = "bratzberry-bunny-weekly-v1";

  const editions = {
    pink: {
      name: "Pink Princess",
      label: "PINK EDITION",
      icon: "🎀"
    },
    sage: {
      name: "Sage Society",
      label: "SAGE EDITION",
      icon: "🌿"
    },
    gold: {
      name: "Golden Girl",
      label: "GOLD EDITION",
      icon: "👑"
    }
  };

  const headlines = [
    "FOUNDER. ICON. MAIN CHARACTER.",
    "SHE DIDN'T COME TO PLAY.",
    "THE GIRL BEHIND THE BOOKISH EMPIRE.",
    "IT'S ANGEL'S WORLD. WE JUST LIVE HERE.",
    "PRETTY, POWERFUL & BOOKED."
  ];

  const starterItems = [
    { id: "books", icon: "📚", name: "A bookish obsession" },
    { id: "pink", icon: "🎀", name: "Something pink" },
    { id: "sage", icon: "🌿", name: "A little sage green" },
    { id: "gold", icon: "✨", name: "A touch of gold" },
    { id: "tbb", icon: "👑", name: "Founder energy" },
    { id: "planner", icon: "🗓️", name: "Seventeen plans at once" },
    { id: "coffee", icon: "☕", name: "A cute little drink" },
    { id: "headphones", icon: "🎧", name: "A personal soundtrack" },
    { id: "bag", icon: "👜", name: "An iconic bag" },
    { id: "peace", icon: "🧘🏽‍♀️", name: "Some well-earned peace" },
    { id: "travel", icon: "✈️", name: "A future boarding pass" },
    { id: "bestie", icon: "💋", name: "Her Yasmin, obviously" }
  ];

  const interview = [
    {
      q: "First things first. Who IS Angel?",
      a: "The founder of TBB, a bookish community that brings Baddies together. And yes, we're putting that on the cover because that's ICONIC. Put some respect on her name, Queen Angel!"
    },
    {
      q: "What's her unofficial catchphrase?",
      a: "“I GOT IT DAWG.” And listen, she probably DOES. Her brain might be running seventeen tabs at once, but she's handling business. 😭"
    },
    {
      q: "What's her Bratz alter ego?",
      a: "Sasha, obviously. Founder energy, main-character presence, and absolutely deserving of her own magazine and everything to come back to her a hundred fold."
    },
    {
      q: "What's something her best friend appreciates?",
      a: "How far they've come. That you always show up and show out. Your support is undeniably top tier. Your name, Angel, couldn't be any more perfect for you!"
    },
    {
      q: "What's next for the cover girl?",
      a: "Whatever SHE decides. More happiness, more peace, more wins, and hopefully one of those trips we keep talking about. 😂✈️"
    }
  ];

  const hallOfFame = [
    {
      icon: "👑",
      title: "The Founder",
      category: "THE LEGACY",
      description: "You created TBB. A whole community of readers found a place to connect because you decided to build one. That's not a small thing, girl."
    },
    {
      icon: "📚",
      title: "The Bookish Visionary",
      category: "THE IMPACT",
      description: "I literally came looking for book friends and found a sister. That's the kind of unexpected connection your community made possible."
    },
    {
      icon: "💗",
      title: "The No-Pressure Bestie",
      category: "THE SISTERHOOD",
      description: "We can both go handle life and come back like we were just talking yesterday. That kind of friendship deserves recognition."
    },
    {
      icon: "🧠",
      title: "The 'I Got It Dawg' Executive",
      category: "THE PERSONALITY",
      description: "The ideas be IDEA-ING, the brain be BRAINING, and somehow you still find a way to get things handled. We can never imagine the many hours you've truly put into TBB to keep it floating way above ocean level.😭"
    },
    {
      icon: "🌿",
      title: "The Woman Behind the Founder",
      category: "THE REMINDER",
      description: "You're allowed to rest, have your own dreams, and exist outside of everything you do for other people. You're important without having to produce anything."
    }
  ];

  const futureHeadlines = [
    {
      icon: "✈️",
      category: "TRAVEL",
      title: "BREAKING: SASHA & YASMIN FINALLY BOOK THE TRIP.",
      story: "Sources confirm the two besties have officially graduated from talking about an itinerary to actually packing bags. The group chat is reportedly SHOOK."
    },
    {
      icon: "📚",
      category: "BOOKISH WORLD",
      title: "TBB FOUNDER ENTERS HER NEXT ICONIC CHAPTER.",
      story: "Angel continues writing her own story, one idea, one decision, and one well-deserved win at a time."
    },
    {
      icon: "🌿",
      category: "LIFESTYLE",
      title: "LOCAL ICON DISCOVERS THE ART OF DOING ABSOLUTELY NOTHING.",
      story: "In a stunning turn of events, Bunny Boo reportedly put her phone down, took a break, and let somebody else handle something for once. We love to see it."
    },
    {
      icon: "👑",
      category: "COVER STORY",
      title: "ANGEL GETS EVERYTHING SHE'S BEEN WORKING TOWARD.",
      story: "The details of her next chapter remain unwritten, but her best friend is already somewhere cheering embarrassingly loud."
    }
  ];

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
      return {
        edition: editions[saved.edition] ? saved.edition : "pink",
        headline: Number.isInteger(saved.headline) &&
          saved.headline >= 0 &&
          saved.headline < headlines.length
            ? saved.headline
            : 0,
        starter: Array.isArray(saved.starter)
          ? saved.starter.filter(id =>
              starterItems.some(item => item.id === id)
            ).slice(0, 6)
          : ["books", "pink", "tbb", "bestie"]
      };
    } catch {
      return {
        edition: "pink",
        headline: 0,
        starter: ["books", "pink", "tbb", "bestie"]
      };
    }
  }

  let state = load();
  let currentScreen = "menu";
  let currentFeature = 0;

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      // The magazine remains usable without localStorage.
    }
  }

  function active() {
    return typeof page !== "undefined" && page === "files";
  }

  function show(html) {
    if (!active()) return;

    render(`
      <div class="bbw-app">
        ${html}
      </div>
    `);
  }

  function header(title, subtitle) {
    return `
      <button class="back" data-bbw="menu">‹ Magazine</button>

      <div class="bbw-heading">
        <span>THE UNRELEASED COLLECTION · VOL. 001</span>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
    `;
  }

  function coverMarkup() {
    return `
      <div class="bbw-cover bbw-edition-${state.edition}" id="bbw-cover">
        <div class="bbw-cover-top">
          <span>THE SASHA ISSUE · VOL. 001</span>
          <span>EXCLUSIVE ✦</span>
        </div>

        <div class="bbw-masthead">
          <span>BUNNY BOO</span>
          <strong>WEEKLY</strong>
        </div>

        <div class="bbw-cover-art">
          <div class="bbw-cover-orbit">✦ &nbsp; ♡ &nbsp; ✦</div>
          <div class="bbw-cover-crown">👑</div>
          <div class="bbw-cover-name">ANGEL</div>
          <div class="bbw-cover-subtitle">AKA SASHA · THE FOUNDER</div>
          <div class="bbw-cover-sparkle">💋 ✨ 🌿</div>
        </div>

        <div class="bbw-cover-headline">
          ${headlines[state.headline]}
        </div>

        <div class="bbw-cover-bottom">
          <span>HER WORLD. HER RULES.</span>
          <span>PRICELESS ♡</span>
        </div>
      </div>
    `;
  }

  function menu() {
    currentScreen = "menu";

    show(`
      <button class="back" data-go="home">‹ Home</button>

      <div class="bbw-heading">
        <span>BRATZBERRY™ PRESENTS</span>
        <h2>Bunny Boo Weekly 💋</h2>
        <p>Angel, girl... you're literally the cover story.</p>
      </div>

      ${coverMarkup()}

      <div class="bbw-feature-label">
        INSIDE THE SASHA ISSUE
      </div>

      <div class="bbw-menu">
        <button data-bbw="studio">
          <span>📸</span>
          <strong>The Cover Girl</strong>
          <small>Design your exclusive magazine cover</small>
          <b>›</b>
        </button>

        <button data-bbw="interview">
          <span>🎤</span>
          <strong>The Unfiltered Interview</strong>
          <small>Five questions. One iconic girl.</small>
          <b>›</b>
        </button>

        <button data-bbw="hall">
          <span>💎</span>
          <strong>The Hall of Fame</strong>
          <small>Because credit is due, period.</small>
          <b>›</b>
        </button>

        <button data-bbw="starter">
          <span>🛍️</span>
          <strong>The Bunny Boo Starter Pack</strong>
          <small>Build your personal essentials collection</small>
          <b>›</b>
        </button>

        <button data-bbw="future">
          <span>🔮</span>
          <strong>Future Headlines</strong>
          <small>Tomorrow's news, according to Yasmin</small>
          <b>›</b>
        </button>
      </div>

      <p class="bbw-footer">
        BUNNY BOO WEEKLY™ · AN EXCLUSIVE YASMIN PRODUCTION
      </p>
    `);
  }

  function studio() {
    currentScreen = "studio";

    show(`
      ${header(
        "The Cover Girl 📸",
        "Editor-in-chief? YOU, obviously."
      )}

      ${coverMarkup()}

      <div class="bbw-feature-label">CHOOSE YOUR EDITION</div>

      <div class="bbw-edition-picker">
        ${Object.entries(editions).map(([key, edition]) => `
          <button
            class="bbw-edition-choice ${state.edition === key ? "bbw-active" : ""}"
            data-bbw-edition="${key}"
            aria-pressed="${state.edition === key}"
          >
            <span>${edition.icon}</span>
            <strong>${edition.name}</strong>
          </button>
        `).join("")}
      </div>

      <div class="bbw-feature-label">PICK YOUR COVER HEADLINE</div>

      <div class="bbw-headline-picker">
        ${headlines.map((headline, index) => `
          <button
            class="${state.headline === index ? "bbw-active" : ""}"
            data-bbw-headline="${index}"
            aria-pressed="${state.headline === index}"
          >
            <span>${state.headline === index ? "◉" : "○"}</span>
            ${headline}
          </button>
        `).join("")}
      </div>

      <button class="bbw-action" data-bbw="download">
        Save My Magazine Cover 📸
      </button>

      <p class="bbw-note">
        Your edition and headline are saved automatically.
        Your cover exports as a PNG image.
      </p>
    `);
  }

  function interviewPage(index = 0) {
    currentScreen = "interview";
    currentFeature = Math.max(0, Math.min(index, interview.length - 1));

    const item = interview[currentFeature];

    show(`
      ${header(
        "The Unfiltered Interview 🎤",
        "An exclusive interview, imagined by Yasmin."
      )}

      <div class="bbw-page-number">
        THE INTERVIEW · ${String(currentFeature + 1).padStart(2, "0")}
        / ${String(interview.length).padStart(2, "0")}
      </div>

      <div class="bbw-editorial-page">
        <div class="bbw-editorial-icon">🎤</div>
        <span class="bbw-editorial-kicker">
          IN CONVERSATION WITH THE COVER GIRL
        </span>

        <h3>${item.q}</h3>

        <div class="bbw-editorial-rule"></div>

        <p>${item.a}</p>

        <div class="bbw-editorial-signoff">
          — THE EDITORIAL DESK 💋
        </div>
      </div>

      <div class="bbw-pagination">
        <button
          data-bbw-prev
          ${currentFeature === 0 ? "disabled" : ""}
        >← Previous</button>

        <span>${currentFeature + 1} / ${interview.length}</span>

        <button
          data-bbw-next
          ${currentFeature === interview.length - 1 ? "disabled" : ""}
        >Next →</button>
      </div>
    `);
  }

  function hall() {
    currentScreen = "hall";

    show(`
      ${header(
        "The Hall of Fame 💎",
        "Give that girl her flowers while she's here."
      )}

      <div class="bbw-editorial-intro">
        <span>THE ANGEL HONORS · SPECIAL EDITION</span>
        <h3>AND THE ICON IS...</h3>
        <p>
          Bunny Boo, this is your reminder that you're
          worth celebrating. Not just for what you do,
          but for who you are.
        </p>
      </div>

      <div class="bbw-hall">
        ${hallOfFame.map((item, index) => `
          <article class="bbw-honor">
            <div class="bbw-honor-top">
              <span>HONOR ${String(index + 1).padStart(2, "0")}</span>
              <span>${item.category}</span>
            </div>

            <div class="bbw-honor-icon">${item.icon}</div>

            <h3>${item.title}</h3>
            <p>${item.description}</p>

            <div class="bbw-honor-bottom">
              RECOGNIZED BY YOUR YASMIN ♡
            </div>
          </article>
        `).join("")}
      </div>
    `);
  }

  function starter() {
    currentScreen = "starter";

    const selected = starterItems.filter(item =>
      state.starter.includes(item.id)
    );

    show(`
      ${header(
        "Bunny Boo Starter Pack 🛍️",
        "Pick six things that belong in your universe."
      )}

      <div class="bbw-starter-preview">
        <span>THE OFFICIAL BUNNY BOO KIT™</span>
        <h3>ANGEL'S ESSENTIALS</h3>

        <div class="bbw-starter-grid">
          ${selected.length
            ? selected.map(item => `
                <div>
                  <span>${item.icon}</span>
                  <small>${item.name}</small>
                </div>
              `).join("")
            : `<p>Nothing in the bag yet, girl. 😂</p>`
          }
        </div>

        <div class="bbw-starter-footer">
          CURATED BY THE COVER GIRL HERSELF
        </div>
      </div>

      <div class="bbw-feature-label">
        BUILD YOUR PACK · ${selected.length}/6 SELECTED
      </div>

      <div class="bbw-item-picker">
        ${starterItems.map(item => {
          const chosen = state.starter.includes(item.id);

          return `
            <button
              class="${chosen ? "bbw-active" : ""}"
              data-bbw-item="${item.id}"
              aria-pressed="${chosen}"
            >
              <span>${item.icon}</span>
              <strong>${item.name}</strong>
              <b>${chosen ? "✓" : "＋"}</b>
            </button>
          `;
        }).join("")}
      </div>

      <p class="bbw-note">
        These are fun starter-pack choices, not claims
        about everything you actually own.
        Your selections save automatically.
      </p>
    `);
  }

  function futurePage(index = 0) {
    currentScreen = "future";
    currentFeature = Math.max(
      0,
      Math.min(index, futureHeadlines.length - 1)
    );

    const item = futureHeadlines[currentFeature];

    show(`
      ${header(
        "Future Headlines 🔮",
        "Manifesting the good stuff, Bunny Boo."
      )}

      <div class="bbw-page-number">
        TOMORROW'S EDITION · ${String(currentFeature + 1).padStart(2, "0")}
        / ${String(futureHeadlines.length).padStart(2, "0")}
      </div>

      <div class="bbw-future-page">
        <div class="bbw-future-top">
          <span>BUNNY BOO DAILY</span>
          <span>THE FUTURE ISSUE</span>
        </div>

        <div class="bbw-future-icon">${item.icon}</div>

        <span class="bbw-future-category">${item.category}</span>

        <h3>${item.title}</h3>

        <div class="bbw-editorial-rule"></div>

        <p>${item.story}</p>

        <div class="bbw-future-bottom">
          EXCLUSIVE IMAGINED HEADLINE 
        </div>
      </div>

      <div class="bbw-pagination">
        <button
          data-bbw-prev
          ${currentFeature === 0 ? "disabled" : ""}
        >← Previous</button>

        <span>${currentFeature + 1} / ${futureHeadlines.length}</span>

        <button
          data-bbw-next
          ${currentFeature === futureHeadlines.length - 1 ? "disabled" : ""}
        >Next →</button>
      </div>
    `);
  }

  /* ----------------------------------------
     CANVAS EXPORT — REAL PNG DOWNLOAD
     ---------------------------------------- */

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";

    words.forEach(word => {
      const candidate = line ? `${line} ${word}` : word;

      if (ctx.measureText(candidate).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    });

    if (line) lines.push(line);
    return lines;
  }

  function downloadCover() {
    const palettes = {
      pink: {
        background: "#F2C4D4",
        ink: "#623447",
        card: "#DCA1B8",
        accent: "#8C4B66",
        light: "#FFF2F5"
      },
      sage: {
        background: "#B9C9AD",
        ink: "#354C3B",
        card: "#8FA987",
        accent: "#516C53",
        light: "#F4F2E5"
      },
      gold: {
        background: "#E9D29B",
        ink: "#63472A",
        card: "#C5A46B",
        accent: "#8D693B",
        light: "#FFF4DD"
      }
    };

    const colors = palettes[state.edition];

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1440;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, 1080, 1440);

    ctx.fillStyle = colors.ink;
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "left";
    ctx.fillText("THE SASHA ISSUE · VOL. 001", 70, 82);

    ctx.textAlign = "right";
    ctx.fillText("EXCLUSIVE ✦", 1010, 82);

    ctx.textAlign = "center";
    ctx.font = "bold 115px Georgia";
    ctx.fillText("BUNNY BOO", 540, 245);

    ctx.font = "bold 83px Georgia";
    ctx.fillText("WEEKLY", 540, 345);

    ctx.fillStyle = colors.card;
    ctx.fillRect(70, 395, 940, 680);

    ctx.strokeStyle = colors.light;
    ctx.lineWidth = 5;
    ctx.strokeRect(92, 417, 896, 636);

    ctx.fillStyle = colors.light;
    ctx.font = "65px Georgia";
    ctx.fillText("✦    ♡    ✦", 540, 500);

    ctx.font = "155px serif";
    ctx.fillText("♛", 540, 710);

    ctx.fillStyle = colors.ink;
    ctx.font = "bold 125px Georgia";
    ctx.fillText("ANGEL", 540, 850);

    ctx.font = "bold 27px Arial";
    ctx.fillText("AKA SASHA · THE FOUNDER", 540, 925);

    ctx.fillStyle = colors.accent;
    ctx.fillRect(70, 1110, 940, 185);

    ctx.fillStyle = colors.light;
    ctx.font = "bold 49px Arial";

    const lines = wrapText(ctx, headlines[state.headline], 860);
    const lineHeight = 57;
    const firstY = 1204 - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, i) => {
      ctx.fillText(line, 540, firstY + i * lineHeight);
    });

    ctx.fillStyle = colors.ink;
    ctx.font = "bold 22px Arial";

    ctx.textAlign = "left";
    ctx.fillText("HER WORLD. HER RULES.", 70, 1370);

    ctx.textAlign = "right";
    ctx.fillText("PRICELESS ♡", 1010, 1370);

    const link = document.createElement("a");
    link.download = `Bunny-Boo-Weekly-${state.edition}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function handleClick(event) {
    if (!active()) return;

    const editionButton = event.target.closest("[data-bbw-edition]");

    if (editionButton) {
      const edition = editionButton.dataset.bbwEdition;

      if (editions[edition]) {
        state.edition = edition;
        save();
        studio();
      }
      return;
    }

    const headlineButton = event.target.closest("[data-bbw-headline]");

    if (headlineButton) {
      const index = Number(headlineButton.dataset.bbwHeadline);

      if (Number.isInteger(index) &&
          index >= 0 &&
          index < headlines.length) {
        state.headline = index;
        save();
        studio();
      }
      return;
    }

    const itemButton = event.target.closest("[data-bbw-item]");

    if (itemButton) {
      const id = itemButton.dataset.bbwItem;
      if (!starterItems.some(item => item.id === id)) return;

      if (state.starter.includes(id)) {
        state.starter = state.starter.filter(item => item !== id);
      } else if (state.starter.length < 6) {
        state.starter.push(id);
      } else {
        alert("GIRLLLL, only six items fit in this starter pack. 😭🛍️");
        return;
      }

      save();
      starter();
      return;
    }

    if (event.target.closest("[data-bbw-prev]")) {
      if (currentScreen === "interview") {
        interviewPage(currentFeature - 1);
      } else if (currentScreen === "future") {
        futurePage(currentFeature - 1);
      }
      return;
    }

    if (event.target.closest("[data-bbw-next]")) {
      if (currentScreen === "interview") {
        interviewPage(currentFeature + 1);
      } else if (currentScreen === "future") {
        futurePage(currentFeature + 1);
      }
      return;
    }

    const button = event.target.closest("[data-bbw]");
    if (!button) return;

    const action = button.dataset.bbw;

    if (action === "menu") menu();
    else if (action === "studio") studio();
    else if (action === "interview") interviewPage();
    else if (action === "hall") hall();
    else if (action === "starter") starter();
    else if (action === "future") futurePage();
    else if (action === "download") downloadCover();
  }

  view.addEventListener("click", handleClick);

  return { menu };
})();
