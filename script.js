
const view = document.querySelector("#view");
const homeButton = document.querySelector("#home");

// ==========================================
// BRATZBERRY™ — BUNNY BOO EDITION
// OPEN WHEN LETTERS
// ==========================================

const letters = [
  {
    title: "school is stressing you out 🎓",
    preview: "For the days your to-do list feels endless.",
    lines: [
      "Hey Bunny Boo 💗",
      "I know school is asking a LOT of you right now.",
      "But one stressful day doesn't erase everything you've accomplished.",
      "Take it one assignment at a time, pretty girl.",
      "I see how hard you work, and I'm so proud of you.",
      "And don't forget your Yasmin is always rooting for you. 💋"
    ]
  },
  {
    title: "you feel overwhelmed 🌷",
    preview: "A little breathing room from your girl.",
    lines: [
      "Girl, first of all… BREATHE. 😭",
      "You don't have to figure everything out today.",
      "It's okay to rest. It's okay to take a minute.",
      "Eat something, drink some water, and give yourself permission to slow down.",
      "You're doing better than you think, Bunny Boo.",
      "I love you, even on the days when you have nothing left to give. 🤎"
    ]
  },
  {
    title: "you need your soul sister 🫂",
    preview: "Your Yasmin is right here.",
    lines: [
      "BUNNY BOOOOOOO! 💋",
      "You rang? Your Pretty Princess has arrived!",
      "Whatever kind of day this is, you don't have to go through it alone.",
      "Whether you need to vent, laugh, cry, or just sit in silence…",
      "You already know I'm here for you.",
      "Always. 💗"
    ]
  },
  {
    title: "you forget you're THAT girl 👑",
    preview: "An emergency confidence refill.",
    lines: [
      "EXCUSE ME, MISS SASHA?!",
      "Who told you that you weren't THAT girl?",
      "Because we need to have a conversation. IMMEDIATELY. 😭",
      "You're smart, beautiful, resilient, and capable.",
      "You're so much more than whatever is challenging you right now.",
      "Now straighten that crown, Bunny Boo. 💋"
    ]
  },
  {
    title: "you need to smile 😂",
    preview: "Your official unseriousness permit.",
    lines: [
      "Girl, first of all… 😂",
      "This is your official permission to stop being responsible for five minutes.",
      "Being an adult does NOT mean you have to be serious 24/7.",
      "Put the assignments down. Go get a snack.",
      "Do something silly today.",
      "Doctor Yasmin has prescribed it. 💋"
    ]
  }
];

// ==========================================
// APP STATE
// ==========================================

let page = "boot";
let activeThread = 0;

let opened = new Set();

try {
  const saved = JSON.parse(
    localStorage.getItem("bratzberry-opened") || "[]"
  );

  if (Array.isArray(saved)) {
    opened = new Set(saved);
  }
} catch (error) {
  console.warn("Could not load saved messages.");
}

let playbackTimer = null;
let playbackVersion = 0;

// ==========================================
// HELPERS
// ==========================================

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

function render(html) {
  view.innerHTML = html;
  view.scrollTop = 0;
}

function saveOpened() {
  try {
    localStorage.setItem(
      "bratzberry-opened",
      JSON.stringify([...opened])
    );
  } catch (error) {
    console.warn("Read status could not be saved.");
  }
}

function cancelPlayback() {
  playbackVersion++;

  if (playbackTimer !== null) {
    clearTimeout(playbackTimer);
    playbackTimer = null;
  }
}

// ==========================================
// PHONE NAVIGATION
// ==========================================

function go(destination) {
  cancelPlayback();

  page = destination;

  if (destination === "boot") {
    render(`
      <div class="center">
        <div class="sparkle">💋</div>
        <div class="brand">BRATZBERRY™</div>
        <div class="tag">BUNNY BOO EDITION</div>

        <p class="sub">
          Exclusively for Sasha.<br>
          Made with love by Yasmin ♡
        </p>

        <button class="action" data-go="lock">
          Power On ✨
        </button>
      </div>
    `);
  }

  else if (destination === "lock") {
    render(`
      <div class="center">
        <div class="tag">SIS CONNECT ♥ FULL BARS</div>

        <div class="bigtime" id="locktime">9:41</div>

        <div class="sparkle">💌</div>

        <h2>Hey, Bunny Boo!</h2>

        <p>
          You've got a special delivery<br>
          from your Pretty Princess.
        </p>

        <button class="action" data-go="home">
          Tap to Unlock ♡
        </button>
      </div>
    `);
  }

  else if (destination === "home") {
    const apps = [
      ["messages", "messages", "Bunny Boo Hotline"],
      ["mail", "mail", "Baddie Mail"],
      ["music", "music", "Boo Beats"],
      ["memories", "memories", "Memories"],
      ["notes", "notes", "Love Notes"],
      ["sos", "sos", "Bestie SOS"],
      ["about", "faves", "Sasha × Yasmin"],
      ["files", "files", "Bunny Boo Files"],
      ["settings", "settings", "Settings"]
    ];

    render(`
      <div class="home-art">

        <div class="tag">
          ✦ SIS CONNECT · BUNNY BOO EDITION ✦
        </div>

        <div class="home-brand">BRATZBERRY™</div>

        <div class="home-edition">
          Bunny Boo Edition ♡
        </div>

        <div class="home-spacer"></div>

        <div class="home-widget">
          A REAL ONE<br>
          in a world full of ANYBODY. ♡
        </div>

        <div class="grid">
          ${apps.map(([id, asset, label]) => `
            <button class="app" data-go="${id}">
              <img
                class="appicon"
                src="assets/${asset}.webp"
                alt=""
                loading="lazy"
              >
              <span>${label}</span>
            </button>
          `).join("")}
        </div>

        <div class="home-signoff">
          Made with love by Yasmin 💋
        </div>

      </div>
    `);
  }

  else if (destination === "messages") {
    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>Bunny Boo Hotline 💌</h2>

      <p class="mini">
        Open whichever message your heart needs today.
      </p>

      ${letters.map((letter, index) => `
        <button class="thread" data-thread="${index}">

          <span class="avatar">
            ${opened.has(index) ? "💗" : "💌"}
          </span>

          <span>
            <strong>
              Open when ${escapeHTML(letter.title)}…
            </strong>

            <small>
              ${escapeHTML(letter.preview)}
              · ${opened.has(index) ? "Read" : "Unread"}
            </small>
          </span>

        </button>
      `).join("")}
    `);
  }

  else if (destination === "thread") {
    showThread(activeThread);
  }

  else if (destination === "mail") {
    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>Baddie Mail 💌</h2>

      <div class="panel">
        Letters from the TBB girlies will arrive here
        once you collect and approve their messages. ♡
      </div>
    `);
  }

  else if (destination === "files") {
    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>Bunny Boo Files ✦</h2>

      <div class="panel">
        A little vault of surprises, just for Sasha.
      </div>
    `);
  }

  else if (destination === "music") {
  renderBooBeats();
}

  else if (destination === "settings") {
    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>Settings ⚙</h2>

      <div class="panel">
        BRATZBERRY™ · Bunny Boo Edition<br>
        SIS CONNECT · Made by Yasmin ♡
      </div>
    `);
  }

  else if (destination === "sos") {
    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>Bestie SOS 🫶</h2>

      <div class="panel">
        Bunny Boo, whatever today looks like,
        you're not facing it alone.
        Pick the reminder you need most.
      </div>

      <button class="thread" data-thread="1">
        🌷 I'm overwhelmed
      </button>

      <button class="thread" data-thread="2">
        🫂 I need my soul sister
      </button>

      <button class="thread" data-thread="3">
        👑 I need confidence
      </button>
    `);
  }

  else {
    const pages = {
      memories: [
        "Our Memories 📸",
        "A home for your favorite photos together. We will add real pictures here."
      ],
      music: [
        "Boo Beats 🎵",
        "Your Spotify playlist collection will live here. We will embed each playlist when you send its Spotify link."
      ],
      notes: [
        "Love Notes 📝",
        "Tiny affirmations, inside jokes, and sweet reminders will live here."
      ],
      about: [
        "Sasha × Yasmin 💋",
        "Two Bratz, one unbreakable sisterhood. This phone was made by Yasmin, just for her Bunny Boo."
      ]
    };

    const data = pages[destination];

    if (!data) {
      go("home");
      return;
    }

    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>${data[0]}</h2>

      <div class="panel">
        ${data[1]}
      </div>
    `);
  }

  updateClock();
}

// ==========================================
// BUNNY BOO HOTLINE
// ANIMATED TEXT CONVERSATIONS
// ==========================================

function showThread(index, replay = false) {
  if (!letters[index]) return;

  cancelPlayback();

  activeThread = index;
  page = "thread";

  const wasRead = opened.has(index);

  opened.add(index);
  saveOpened();

  const letter = letters[index];

  render(`
    <button class="back" data-go="messages">
      ‹ All Messages
    </button>

    <div class="chat-header">

      <span class="chat-avatar">💋</span>

      <span>
        <strong>Yasmin 💗</strong>
        <small>Pretty Princess · SIS CONNECT</small>
      </span>

    </div>

    <p class="chat-topic" id="chat-topic"></p>

    <div
      id="bubbles"
      class="chat-bubbles"
      aria-live="polite"
      aria-relevant="additions text"
    ></div>

    <div class="chat-controls">

      <button class="pill" id="replay">
        ↻ Replay
      </button>

      <button class="pill secondary" id="show-all">
        Show All
      </button>

    </div>
  `);

  document.querySelector("#chat-topic").textContent =
    `Open when ${letter.title}…`;

  const area = document.querySelector("#bubbles");
  const replayButton = document.querySelector("#replay");
  const showAllButton = document.querySelector("#show-all");

  const token = playbackVersion;

  let messageIndex = 0;

  function scrollDown() {
    area.scrollTop = area.scrollHeight;
  }

  function addBubble(message) {
    const bubble = document.createElement("div");

    bubble.className = "bubble from";
    bubble.textContent = message;

    area.appendChild(bubble);

    scrollDown();
  }

  function removeTyping() {
    area.querySelector(".typing")?.remove();
  }

  function showAll() {
    cancelPlayback();

    area.replaceChildren();

    letter.lines.forEach((message) => {
      addBubble(message);
    });

    showAllButton.disabled = true;
    scrollDown();
  }

  replayButton.addEventListener("click", () => {
    showThread(index, true);
  });

  showAllButton.addEventListener("click", showAll);

  // Previously opened letters show immediately.
  if (wasRead && !replay) {
    showAll();
    return;
  }

  function nextMessage() {
    if (page !== "thread" || token !== playbackVersion) {
      return;
    }

    removeTyping();

    if (messageIndex >= letter.lines.length) {
      return;
    }

    addBubble(letter.lines[messageIndex]);

    messageIndex++;

    if (messageIndex < letter.lines.length) {
      playbackTimer = setTimeout(showTyping, 650);
    } else {
      showAllButton.disabled = true;
    }
  }

  function showTyping() {
    if (page !== "thread" || token !== playbackVersion) {
      return;
    }

    removeTyping();

    const indicator = document.createElement("div");

    indicator.className = "typing";
    indicator.setAttribute(
      "aria-label",
      "Yasmin is typing"
    );

    indicator.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    area.appendChild(indicator);

    scrollDown();

    const messageLength =
      letter.lines[messageIndex]?.length || 0;

    // Longer texts take a little longer to arrive.
    const typingDelay = Math.min(
      2500,
      800 + messageLength * 12
    );

    playbackTimer = setTimeout(
      nextMessage,
      typingDelay
    );
  }

  // Begin with a typing indicator.
  showTyping();
}

// ==========================================
// BUTTON NAVIGATION
// ==========================================

view.addEventListener("click", (event) => {
  const button = event.target.closest(
    "[data-go], [data-thread]"
  );

  if (!button) return;

  if (button.dataset.thread !== undefined) {
    showThread(Number(button.dataset.thread));
  } else {
    go(button.dataset.go);
  }
});

homeButton.addEventListener("click", () => {
  go("home");
});

// ==========================================
// CLOCK
// ==========================================

function updateClock() {
  const time = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });

  const clock = document.querySelector("#clock");

  if (clock) {
    clock.textContent = time;
  }

  const lockClock = document.querySelector("#locktime");

  if (lockClock) {
    lockClock.textContent = time;
  }
}

setInterval(updateClock, 30000);


/* ==========================================
   BOO BEATS — SPOTIFY MUSIC LOUNGE
   ========================================== */

function getSpotifyPlaylistId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    if (
      parsed.hostname !== "open.spotify.com" &&
      parsed.hostname !== "www.open.spotify.com"
    ) {
      return null;
    }

    const match = parsed.pathname.match(
      /\/playlist\/([A-Za-z0-9]+)/
    );

    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function renderBooBeats(selectedId = null) {
  cancelPlayback();
  page = "music";

  const playlists = booBeatsPlaylists;
  const selected = playlists.find(p => p.id === selectedId);

  render(`
    <button class="back" data-go="home">
      ‹ Home
    </button>

    <div class="boo-header">
      <div class="tag">✦ SIS CONNECT · MUSIC ✦</div>
      <h2>Boo Beats 🎧</h2>
      <p class="mini">
        Every Bunny Boo deserves her own soundtrack.
      </p>
    </div>

    <div class="boo-featured">
      <div class="boo-record">♫</div>
      <div>
        <small>PRETTY PRINCESS PRODUCTIONS</small>
        <h3>Made for Sasha ♡</h3>
        <p>Curated with love by Yasmin 💋</p>
      </div>
    </div>

    <h3 class="boo-section-title">
      ${selected ? "Now Playing ♫" : "Your Playlists ♡"}
    </h3>

    ${
      selected
        ? renderSpotifyPlayer(selected)
        : `
          <div class="boo-playlists">
            ${playlists.map(p => `
              <button
                class="boo-playlist-card"
                data-playlist="${escapeHTML(p.id)}"
              >
                <div
                  class="boo-cover"
                  style="background:${p.color}"
                >
                  ♫
                </div>

                <div class="boo-playlist-info">
                  <strong>${escapeHTML(p.name)}</strong>
                  <small>${escapeHTML(p.category)}</small>
                  <p>${escapeHTML(p.description)}</p>
                </div>

                <span class="boo-chevron">›</span>
              </button>
            `).join("")}
          </div>
        `
    }

    ${
      selected
        ? `
          <button class="pill boo-all" id="all-playlists">
            ← All Playlists
          </button>
        `
        : ""
    }
  `);

  view.querySelectorAll("[data-playlist]").forEach(button => {
    button.addEventListener("click", () => {
      renderBooBeats(button.dataset.playlist);
    });
  });

  document.querySelector("#all-playlists")?.addEventListener(
    "click",
    () => renderBooBeats()
  );
}

function renderSpotifyPlayer(playlist) {
  const playlistId = getSpotifyPlaylistId(playlist.spotifyUrl);

  if (!playlistId) {
    return `
      <div class="boo-empty">
        <div class="boo-record">♫</div>
        <h3>${escapeHTML(playlist.name)}</h3>
        <p>${escapeHTML(playlist.description)}</p>
        <p class="mini">
          This playlist is being curated by Yasmin. 💋
        </p>
      </div>
    `;
  }

  const embedUrl =
    "https://open.spotify.com/embed/playlist/" +
    encodeURIComponent(playlistId) +
    "?utm_source=generator";

  const spotifyUrl =
    "https://open.spotify.com/playlist/" +
    encodeURIComponent(playlistId);

  return `
    <div class="boo-player">
      <h3>${escapeHTML(playlist.name)}</h3>
      <p>${escapeHTML(playlist.description)}</p>

      <iframe
        src="${embedUrl}"
        title="${escapeHTML(playlist.name)} Spotify playlist"
        width="100%"
        height="352"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style="border-radius:12px"
      ></iframe>

      <a
        class="boo-spotify-link"
        href="${spotifyUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Spotify ↗
      </a>
    </div>
  `;
}


// ==========================================
// START PHONE
// ==========================================

go("boot");
