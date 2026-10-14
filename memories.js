
/* ==========================================
   BRATZBERRY™
   MEMORIES — THE RECEIPTS OF US
   Sasha × Yasmin Edition
   ========================================== */

const bunnyMemories = (() => {
  const ROOT = "assets/memories/";
  const KEY = "bratzberry-memories-favorites-v1";

  const memories = [
    {
      id: 1,
      image: "memory-01.png",
      date: "September 1, 2026",
      category: "chaos",
      emoji: "🌙",
      title: "MA'AM, WHY ARE YOU AWAKE?!",
      tag: "THE SLEEP POLICE",
      quote: "WHY ARE YOU AWAKE?!!!",
      caption:
        "GIRLLLL. Why am I asking why you're awake when I clearly need to be asleep too? 😭 Neither one of us has any business policing the other's bedtime, but here we are.",
      note: "Two sleep schedules. Zero supervision."
    },
    {
      id: 2,
      image: "memory-02.png",
      date: "August 20, 2026",
      category: "stickers",
      emoji: "😭",
      title: "WOULDN'T YOU LIKE TO KNOW?",
      tag: "THE STICKER LANGUAGE",
      quote: "I'M TRYNA SEE IF IT SIT RIGHT WITH MY SPIRIT",
      caption:
        "Not a single normal response in sight. 😭 We could have a whole conversation using nothing but GIFs, stickers, and questionable facial expressions.",
      note: "Fluent in reaction images."
    },
    {
      id: 3,
      image: "memory-03.png",
      date: "August 21, 2026",
      category: "food",
      emoji: "🍽️",
      title: "DID YOU EAT, ANGEL BRENAAAE?",
      tag: "THE FOOD POLICE",
      quote: "Soooo Angel Brenae, it's afternoon time, did you eat?",
      caption:
        "I really be checking on your meals like I have some kind of official certification. 😭 But somebody gotta make sure my girl is eating!",
      note: "Food Police Department, Case 001."
    },
    {
      id: 4,
      image: "memory-04.png",
      date: "August 21, 2026",
      category: "food",
      emoji: "🫣",
      title: "THE INTERROGATION CONTINUES",
      tag: "THE FOOD POLICE",
      quote: "Did YOU? AND was it anytime AFTER 12PM",
      caption:
        "AND THEN YOU TURNED THE WHOLE INVESTIGATION ON ME. 😭 See, this is why neither one of us can get away with skipping meals. The accountability is mutual, unfortunately.",
      note: "Nobody is above the law."
    },
    {
      id: 5,
      image: "memory-05.png",
      date: "August 21, 2026",
      category: "food",
      emoji: "👉",
      title: "GO EAT RIGHT NOW.",
      tag: "THE FOOD POLICE",
      quote: "HELP? MAAM DID YOU GET DINNER THO",
      caption:
        "The fact that I sent a whole GO EAT RIGHT NOW GIF, and you STILL came back asking about my dinner. 😭 We're really two grown women parenting each other.",
      note: "Both officers under investigation."
    },
    {
      id: 6,
      image: "memory-06.png",
      date: "August 29, 2026",
      category: "tbb",
      emoji: "🍫",
      title: "THE CHOCOLATE FROG DEPARTMENT",
      tag: "BEHIND THE TBB SCENES",
      quote: "OH YES THIS IS NOICEEE",
      caption:
        "One minute we're talking ideas, next thing you know we're figuring out cards, prices, submissions, and a whole system. 😂 This is what happens when our brains get together.",
      note: "Just two girls and another project."
    },
    {
      id: 7,
      image: "memory-07.png",
      date: "August 31, 2026",
      category: "tbb",
      emoji: "💻",
      title: "AYE KEEP MOVING DAWG!",
      tag: "BEHIND THE TBB SCENES",
      quote: "AYE KEEP MOVING DAWG",
      caption:
        "GIRL, NOT THE FILE TIMES MOVING WHILE WE'RE TRYING TO FIGURE THINGS OUT. 😭 The projects be PROJECTING, but somehow we always find a way to laugh through the chaos.",
      note: "Technical difficulties, starring us."
    },
    {
      id: 8,
      image: "memory-08.png",
      date: "August 5, 2026",
      category: "tbb",
      emoji: "📋",
      title: "CAN I ASK YOU ONE MORE THING?",
      tag: "BEHIND THE TBB SCENES",
      quote: "COULD NEVA BE SICK",
      caption:
        "Me coming to you with another TBB question like GIRL, I promise I'm almost done. 😂 But you always make room for the conversation. That's something I appreciate more than you know.",
      note: "Founder × The Girl With Another Question."
    },
    {
      id: 9,
      image: "memory-09.png",
      date: "August 10, 2026",
      category: "stickers",
      emoji: "👜",
      title: "SAME TASTE, SAME NONSENSE",
      tag: "THE STICKER LANGUAGE",
      quote: "Hold on now I'm learning smth new",
      caption:
        "We can start off talking about fashion and somehow end up in a GIF exchange. 😭 I swear, we find a way to make absolutely anything funny.",
      note: "A normal conversation? Never heard of her."
    },
    {
      id: 10,
      image: "memory-10.png",
      date: "August 18, 2026",
      category: "food",
      emoji: "🍝",
      title: "WAIT!! WHAT'S FOR DINNER?",
      tag: "THE FOOD POLICE",
      quote: "WHATS FOR DINNER",
      caption:
        "NOT SPONGEBOB ENTERING THE FOOD INVESTIGATION. 😭 At this point, asking if you've eaten is basically part of my daily vocabulary.",
      note: "The kitchen is under surveillance."
    },
    {
      id: 11,
      image: "memory-11.png",
      date: "August 6–7, 2026",
      category: "heart",
      emoji: "💗",
      title: "ILY FOR LIFEEEEE.",
      tag: "THE SOFT SPOT",
      quote: "ILY FOR LIFEEEEE",
      caption:
        "And THIS right here? This is my favorite kind of receipt. We joke, we laugh, we get on each other's nerves about eating and sleeping, and we build things together. But underneath all that is a friendship I genuinely cherish. You really are one of my biggest supporters, and I hope you never forget that I'm always rooting for you too. ILY MOREEEE, Bunny Boo. For life. 🤎",
      note: "Some receipts are worth keeping forever."
    }
  ];

  const filters = [
    { id: "all", label: "All Receipts", icon: "💌" },
    { id: "food", label: "Food Police", icon: "🍽️" },
    { id: "stickers", label: "Sticker Wars", icon: "😭" },
    { id: "tbb", label: "TBB Chaos", icon: "💻" },
    { id: "chaos", label: "Sleep Police", icon: "🌙" },
    { id: "heart", label: "Soft Spot", icon: "💗" }
  ];

  let favorites = [];
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) || "[]");
    favorites = Array.isArray(stored)
      ? stored.filter(id => memories.some(m => m.id === id))
      : [];
  } catch {
    favorites = [];
  }

  let screen = "home";
  let filter = "all";
  let currentId = 1;
  let touchStartX = null;

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch {}
  }

  function isOpen() {
    return Boolean(view.querySelector(".rom-app"));
  }

  function renderPage(html) {
    render(`<div class="rom-app">${html}</div>`);
  }

  function top(title, subtitle, back = "home") {
    return `
      <button class="rom-back" data-rom="${back}">
        ‹ ${back === "home" ? "Scrapbook" : "Gallery"}
      </button>
      <header class="rom-heading">
        <span>THE SASHA × YASMIN ARCHIVES</span>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </header>
    `;
  }

  function imageTag(memory, className = "") {
    return `
      <img
        class="${className}"
        src="${ROOT}${memory.image}"
        alt="Discord conversation from ${memory.date}: ${memory.title}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
      />
      <div class="rom-image-error" style="display:none">
        📸 Screenshot not found:
        <strong>${memory.image}</strong>
        <small>Check assets/memories/ and the filename.</small>
      </div>
    `;
  }

  function home() {
    screen = "home";

    renderPage(`
      <button class="back" data-go="home">‹ Home</button>

      <div class="rom-hero">
        <span>BRATZBERRY™ PRESENTS</span>
        <div class="rom-hero-icons">💌 ✨ 📸</div>
        <h1>THE RECEIPTS<br>OF US ♡</h1>
        <p>
          A friendship told through screenshots,
          stickers, side-eyes & way too many messages.
        </p>
        <div class="rom-hero-footer">
          SASHA × YASMIN · VOL. 001
        </div>
      </div>

      <div class="rom-intro">
        <span>DEAR BUNNY BOO,</span>
        <p>
          GIRLLLL, we talk WAY too much for me to ever
          fit everything in one little scrapbook. 😭
          But these? These are some of the receipts
          that make us, US.
        </p>
        <p>
          From making sure the other one ate,
          to our endless stickers, to the things
          we've built together... I wouldn't trade
          our little corner of the internet for anything.
        </p>
        <strong>— YOUR YASMIN 💋</strong>
      </div>

      <button class="rom-primary" data-rom="read">
        Open Our Scrapbook 📖
      </button>

      <div class="rom-home-grid">
        <button data-rom="gallery">
          <span>📸</span>
          <strong>The Gallery</strong>
          <small>Browse every receipt</small>
        </button>

        <button data-rom="museum">
          <span>😭</span>
          <strong>Sticker Museum</strong>
          <small>Our second language</small>
        </button>

        <button data-rom="favorites">
          <span>💗</span>
          <strong>Favorite Receipts</strong>
          <small>Keep your favorites close</small>
        </button>

        <button data-rom="ending">
          <span>🥹</span>
          <strong>One Last Receipt</strong>
          <small>The one that means the most</small>
        </button>
      </div>

      <p class="rom-footer">
        NO POSED PICTURES NECESSARY. JUST US. ♡
      </p>
    `);
  }

  function getMemory(id) {
    return memories.find(m => m.id === id) || memories[0];
  }

  function receipt(id) {
    const memory = getMemory(id);
    currentId = memory.id;
    screen = "receipt";

    const index = memories.findIndex(m => m.id === memory.id);
    const favorite = favorites.includes(memory.id);

    renderPage(`
      ${top("The Receipts 📸", "Actual conversations. Actual foolishness.", "gallery")}

      <div class="rom-progress">
        <span>RECEIPT ${String(index + 1).padStart(2, "0")} / 11</span>
        <span>${memory.date}</span>
      </div>

      <div class="rom-polaroid">
        <div class="rom-tape"></div>
        <div class="rom-photo">
          ${imageTag(memory)}
        </div>
        <div class="rom-polaroid-label">
          ${memory.emoji} ${memory.tag}
        </div>
      </div>

      <article class="rom-caption">
        <span>FROM THE ARCHIVES ♡</span>
        <h3>${memory.title}</h3>
        <blockquote>“${memory.quote}”</blockquote>
        <p>${memory.caption}</p>
        <div class="rom-signature">— YASMIN 💋</div>
      </article>

      <div class="rom-mini-note">
        ✨ ${memory.note}
      </div>

      <button
        class="rom-favorite ${favorite ? "rom-is-favorite" : ""}"
        data-rom-favorite="${memory.id}"
      >
        ${favorite ? "💗 Saved to Favorites" : "♡ Save This Receipt"}
      </button>

      <div class="rom-nav">
        <button data-rom-prev ${index === 0 ? "disabled" : ""}>
          ← Previous
        </button>
        <span>${index + 1} / ${memories.length}</span>
        <button data-rom-next ${index === memories.length - 1 ? "disabled" : ""}>
          Next →
        </button>
      </div>

      ${index === memories.length - 1 ? `
        <div class="rom-last-hint">
          💗 You've reached the sweetest receipt.
          <button data-rom="ending">Read the final page →</button>
        </div>
      ` : ""}

      <p class="rom-swipe-hint">
        Swipe left or right to turn pages ♡
      </p>
    `);
  }

  function gallery(onlyFavorites = false) {
    screen = onlyFavorites ? "favorites" : "gallery";

    const filtered = memories.filter(memory =>
      (onlyFavorites ? favorites.includes(memory.id) : true) &&
      (filter === "all" || memory.category === filter)
    );

    renderPage(`
      ${top(
        onlyFavorites ? "Favorite Receipts 💗" : "The Gallery 📸",
        onlyFavorites
          ? "The moments you want to keep close."
          : "Every screenshot has a story."
      )}

      <div class="rom-filter-row">
        ${filters.map(item => `
          <button
            class="${filter === item.id ? "rom-selected" : ""}"
            data-rom-filter="${item.id}"
          >
            ${item.icon} ${item.label}
          </button>
        `).join("")}
      </div>

      <div class="rom-gallery">
        ${filtered.length ? filtered.map(memory => `
          <button class="rom-gallery-card" data-rom-open="${memory.id}">
            <div class="rom-gallery-image">
              ${imageTag(memory)}
            </div>
            <span>${memory.emoji} ${memory.tag}</span>
            <strong>${memory.title}</strong>
            <small>${memory.date}</small>
            ${favorites.includes(memory.id)
              ? `<b class="rom-gallery-heart">♥</b>`
              : ""}
          </button>
        `).join("") : `
          <div class="rom-empty">
            <div>💌</div>
            <h3>No receipts here yet!</h3>
            <p>
              ${onlyFavorites
                ? "Open a memory and tap Save This Receipt to add it here."
                : "Try another scrapbook category."}
            </p>
          </div>
        `}
      </div>
    `);
  }

  function museum() {
    screen = "museum";

    const stickerMemories = memories.filter(memory =>
      [1, 2, 4, 5, 7, 9, 10].includes(memory.id)
    );

    renderPage(`
      ${top(
        "The Sticker Museum 😭",
        "Because typing a regular response is apparently illegal."
      )}

      <div class="rom-museum-intro">
        <span>THE OFFICIAL EXHIBIT</span>
        <h3>WE SPEAK FLUENT GIF.</h3>
        <p>
          Angel, the way we communicate through stickers
          and reaction images needs to be studied. 😭
          Here's a little collection of our finest nonsense.
        </p>
      </div>

      <div class="rom-museum-grid">
        ${stickerMemories.map(memory => `
          <button data-rom-open="${memory.id}" class="rom-museum-card">
            <div class="rom-museum-photo">
              ${imageTag(memory)}
            </div>
            <strong>${memory.emoji} ${memory.title}</strong>
            <small>Tap to see the whole conversation →</small>
          </button>
        `).join("")}
      </div>

      <p class="rom-museum-outro">
        MEMBERSHIP: LIFETIME · LANGUAGE: STICKERS & FOOLISHNESS 💋
      </p>
    `);
  }

  function ending() {
    screen = "ending";
    const memory = getMemory(11);

    renderPage(`
      ${top(
        "One Last Receipt 💗",
        "Okay, girl. This one is a little different."
      )}

      <div class="rom-ending">
        <div class="rom-ending-stars">✦ ♡ ✦</div>
        <span>AUGUST 6, 2026</span>
        <h2>ILY FOR LIFEEEEE.</h2>

        <div class="rom-ending-photo">
          ${imageTag(memory)}
        </div>

        <div class="rom-ending-letter">
          <p>Bunny Boo,</p>

          <p>
            We spend so much time laughing, sending stickers,
            asking if the other one ate, and getting caught
            up in another TBB project that sometimes
            I just wanna make sure you know something.
          </p>

          <p>
            I appreciate you. Not just as the founder of TBB,
            not just as somebody I work on things with,
            but as my friend. My sister.
          </p>

          <p>
            We haven't needed a million pictures together
            to build something real. We found each other
            through a screen, and somehow that turned into
            a friendship I wouldn't trade.
          </p>

          <p>
            So yes, I'm gonna keep asking if you ate.
            I'm gonna keep telling you to rest.
            And I'm absolutely gonna keep sending you
            the most ridiculous stickers I can find. 😂
          </p>

          <p>
            Because that's us, and I love that for us.
          </p>

          <h3>ILY MOREEEE. FOR LIFE. 🤎</h3>
          <div class="rom-ending-signature">
            YOUR YASMIN, ALWAYS 💋
          </div>
        </div>

        <div class="rom-ending-bottom">
          OUR STORY IS STILL BEING WRITTEN.
          <strong>TO BE CONTINUED... ♡</strong>
        </div>
      </div>

      <button class="rom-primary" data-rom="home">
        Back to Our Little Scrapbook 💌
      </button>
    `);
  }

  function openNext(direction) {
    const index = memories.findIndex(m => m.id === currentId);
    const next = index + direction;

    if (next >= 0 && next < memories.length) {
      receipt(memories[next].id);
    }
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(value => value !== id);
    } else {
      favorites.push(id);
    }
    save();
    receipt(id);
  }

  function handleClick(event) {
    if (!isOpen()) return;

    const favoriteButton = event.target.closest("[data-rom-favorite]");
    if (favoriteButton) {
      toggleFavorite(Number(favoriteButton.dataset.romFavorite));
      return;
    }

    const openButton = event.target.closest("[data-rom-open]");
    if (openButton) {
      receipt(Number(openButton.dataset.romOpen));
      return;
    }

    const filterButton = event.target.closest("[data-rom-filter]");
    if (filterButton) {
      filter = filterButton.dataset.romFilter;
      gallery(screen === "favorites");
      return;
    }

    if (event.target.closest("[data-rom-prev]")) {
      openNext(-1);
      return;
    }

    if (event.target.closest("[data-rom-next]")) {
      openNext(1);
      return;
    }

    const button = event.target.closest("[data-rom]");
    if (!button) return;

    const action = button.dataset.rom;

    if (action === "home") home();
    else if (action === "read") receipt(1);
    else if (action === "gallery") {
      filter = "all";
      gallery();
    }
    else if (action === "favorites") {
      filter = "all";
      gallery(true);
    }
    else if (action === "museum") museum();
    else if (action === "ending") ending();
  }

  view.addEventListener("click", handleClick);

  // Swipe only within the scrapbook receipt pages.
  view.addEventListener("touchstart", event => {
    if (!isOpen() || screen !== "receipt") return;
    if (!event.target.closest(".rom-app")) return;
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  view.addEventListener("touchend", event => {
    if (!isOpen() || screen !== "receipt" || touchStartX === null) return;

    const difference = event.changedTouches[0].screenX - touchStartX;
    touchStartX = null;

    if (Math.abs(difference) > 65) {
      openNext(difference < 0 ? 1 : -1);
    }
  }, { passive: true });

  return { menu: home };
})();
