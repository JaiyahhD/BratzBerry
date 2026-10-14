
/* ==========================================
   BRATZBERRY™ — BUNNY BOO EDITION
   Made with love by Yasmin 💋
   ========================================== */

const view = document.querySelector("#view");
const homeButton = document.querySelector("#home");

const musicDock = document.querySelector("#music-dock");
const dockTitle = document.querySelector("#dock-title");
const dockToggle = document.querySelector("#dock-toggle");
const dockPlayer = document.querySelector("#dock-player");

// ==========================================
// BUNNY BOO HOTLINE LETTERS
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
let playbackTimer = null;
let playbackVersion = 0;

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

// Spotify state
let currentPlaylistId = null;
let dockExpanded = false;

// ==========================================
// HELPERS
// ==========================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

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
    console.warn("Could not save message status.");
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
// MAIN PHONE NAVIGATION
// ==========================================

function go(destination) {
  cancelPlayback();

  // Stop SOS timers when leaving Bestie SOS.
  if (
    page === "sos" &&
    destination !== "sos" &&
    typeof bestieSOS !== "undefined"
  ) {
    bestieSOS.cleanup();
  }

  page = destination;

  // Minimize Spotify without removing its iframe.
  if (destination !== "music") {
    setDockExpanded(false);
  }

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
                src="assets/${asset}.${asset === 'messages' || asset === 'sos' ? 'webp' : 'png'}"
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

  else if (destination === "music") {
    renderBooBeats();
    return;
  }

  else if (destination === "mail") {
    render(`
      <button class="back" data-go="home">‹ Home</button>
      <h2>Baddie Mail 💌</h2>

      <div class="panel">
        Letters from the TBB girlies will arrive here
        once you collect and approve their messages. ♡
      </div>
    `);
  }

  
    else if (destination === "memories") {
    bunnyMemories.menu();
    }


  
else if (destination === "notes") {
  if (
    typeof loveNotesApp !== "undefined" &&
    typeof loveNotesApp.menu === "function"
  ) {
    loveNotesApp.menu();
  } else {
    render(`
      <button class="back" data-go="home">‹ Home</button>
      <h2>Love Notes 💗</h2>
      <div class="panel">
        Love Notes couldn't load.
        Check that love-notes.js is connected in index.html.
      </div>
    `);
  }
}


  // ========================================
  // BESTIE SOS — NEW INTERACTIVE APP
  // ========================================

  else if (destination === "sos") {
    if (
      typeof bestieSOS !== "undefined" &&
      typeof bestieSOS.menu === "function"
    ) {
      bestieSOS.menu();
    } else {
      render(`
        <button class="back" data-go="home">‹ Home</button>

        <h2>Bestie SOS 💋</h2>

        <div class="panel">
          <strong>Bestie SOS isn't connected yet.</strong>

          <p>
            Make sure bestie-sos.js exists in your project
            folder and is loaded after script.js
            in index.html.
          </p>
        </div>
      `);

      console.error(
        "BRATZBERRY: bestie-sos.js is missing or did not load correctly."
      );
    }
  }

  
    else if (destination === "about") {
    if (
        typeof sashaYasminApp !== "undefined" &&
        typeof sashaYasminApp.menu === "function"
    ) {
        sashaYasminApp.menu();
    } else {
        render(`
        <button class="back" data-go="home">‹ Home</button>
        <h2>Sasha × Yasmin 👑</h2>
        <div class="panel">
            The Duo File couldn't load.
            Check that sasha-yasmin.js is linked in index.html.
        </div>
        `);
    }
    }


  
    else if (destination === "files") {
    bunnyBooFiles.menu();
    }


  

else if (destination === "settings") {
  bunnySettings.menu();
}


  else {
    go("home");
    return;
  }

  updateClock();
}

// ==========================================
// BUNNY BOO HOTLINE
// ==========================================

function showThread(index, replay = false) {
  if (!letters[index]) return;

  cancelPlayback();

  activeThread = index;
  page = "thread";

  setDockExpanded(false);

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

    letter.lines.forEach(message => {
      addBubble(message);
    });

    showAllButton.disabled = true;
    scrollDown();
  }

  replayButton.addEventListener("click", () => {
    showThread(index, true);
  });

  showAllButton.addEventListener("click", showAll);

  if (wasRead && !replay) {
    showAll();
    return;
  }

  function nextMessage() {
    if (
      page !== "thread" ||
      token !== playbackVersion
    ) {
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
    if (
      page !== "thread" ||
      token !== playbackVersion
    ) {
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

    const typingDelay = Math.min(
      2500,
      800 + messageLength * 12
    );

    playbackTimer = setTimeout(
      nextMessage,
      typingDelay
    );
  }

  showTyping();
}

// ==========================================
// BOO BEATS — PLAYLIST HELPERS
// ==========================================

function getBooBeatsPlaylists() {
  if (
    typeof booBeatsPlaylists === "undefined" ||
    !Array.isArray(booBeatsPlaylists)
  ) {
    return null;
  }

  return booBeatsPlaylists;
}

function getSpotifyPlaylistId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    const validHosts = [
      "open.spotify.com",
      "www.open.spotify.com"
    ];

    if (!validHosts.includes(parsed.hostname)) {
      return null;
    }

    const match = parsed.pathname.match(
      /\/playlist\/([A-Za-z0-9]+)/
    );

    return match ? match[1] : null;
  } catch (error) {
    return null;
  }
}

// ==========================================
// PERSISTENT SPOTIFY MUSIC DOCK
// ==========================================

function setDockExpanded(expanded) {
  dockExpanded = expanded;

  musicDock.classList.toggle(
    "expanded",
    expanded
  );

  dockToggle.textContent = expanded
    ? "Minimize −"
    : "Expand ♫";

  dockToggle.setAttribute(
    "aria-expanded",
    String(expanded)
  );
}

function loadPersistentPlaylist(playlist) {
  const playlistId = getSpotifyPlaylistId(
    playlist.spotifyUrl
  );

  if (!playlistId) {
    return false;
  }

  // Keep the existing Spotify iframe alive.
  if (currentPlaylistId === playlist.id) {
    musicDock.hidden = false;
    setDockExpanded(true);
    return true;
  }

  const embedUrl =
    "https://open.spotify.com/embed/playlist/" +
    encodeURIComponent(playlistId) +
    "?utm_source=generator";

  // Only replace the iframe when selecting
  // a different playlist.
  dockPlayer.innerHTML = `
    <iframe
      src="${embedUrl}"
      title="${escapeHTML(playlist.name)} Spotify playlist"
      width="100%"
      height="352"
      style="border:0; border-radius:12px;"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  `;

  currentPlaylistId = playlist.id;

  dockTitle.textContent = playlist.name;

  musicDock.hidden = false;

  document.querySelector(".screen")
    .classList.add("has-music");

  setDockExpanded(true);

  return true;
}

dockToggle.addEventListener("click", () => {
  setDockExpanded(!dockExpanded);
});

// ==========================================
// BOO BEATS — PLAYLIST COLLECTION
// ==========================================

function renderBooBeats(selectedId = null) {
  cancelPlayback();
  page = "music";

  const playlists = getBooBeatsPlaylists();

  if (!playlists) {
    render(`
      <button class="back" data-go="home">
        ‹ Home
      </button>

      <h2>Boo Beats 🎧</h2>

      <div class="panel">
        <strong>Oops! The playlists aren't loading.</strong>

        <p>
          Check that playlists.js is loaded
          before script.js in index.html.
        </p>
      </div>
    `);

    return;
  }

  const selected = playlists.find(
    playlist => playlist.id === selectedId
  );

  render(`
    <button class="back" data-go="home">
      ‹ Home
    </button>

    <div class="boo-header">
      <div class="tag">
        ✦ SIS CONNECT · MUSIC ✦
      </div>

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
      ${selected ? "Selected Playlist ♫" : "Your Playlists ♡"}
    </h3>

    ${
      selected
        ? renderSelectedPlaylist(selected)
        : `
          <div class="boo-playlists">
            ${playlists.map(playlist => `
              <button
                class="boo-playlist-card"
                data-playlist="${escapeHTML(playlist.id)}"
              >
                <div
                  class="boo-cover"
                  style="background:${escapeHTML(playlist.color || "#84525D")}"
                >
                  <img
                    src="${escapeHTML(playlist.cover || "")}"
                    alt="${escapeHTML(playlist.name)} album cover"
                    style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"
                  >
                </div>

                <div class="boo-playlist-info">
                  <strong>
                    ${escapeHTML(playlist.name)}
                  </strong>

                  <small>
                    ${escapeHTML(playlist.category)}
                  </small>

                  <p>
                    ${escapeHTML(playlist.description)}
                  </p>
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

  view.querySelectorAll("[data-playlist]").forEach(
    button => {
      button.addEventListener("click", () => {
        renderBooBeats(button.dataset.playlist);
      });
    }
  );

  document.querySelector("#all-playlists")
    ?.addEventListener("click", () => {
      setDockExpanded(false);
      renderBooBeats();
    });

  updateClock();
}

// ==========================================
// SELECTED SPOTIFY PLAYLIST
// ==========================================

function renderSelectedPlaylist(playlist) {
  const playlistId = getSpotifyPlaylistId(
    playlist.spotifyUrl
  );

  if (!playlistId) {
    return `
      <div class="boo-empty">
        <h3>${escapeHTML(playlist.name)}</h3>
        <p>${escapeHTML(playlist.description)}</p>
        <p class="mini">
          This playlist is being curated by Yasmin. 💋
        </p>
      </div>
    `;
  }

  const spotifyUrl =
    "https://open.spotify.com/playlist/" +
    encodeURIComponent(playlistId);

  // Spotify stays mounted outside #view.
  loadPersistentPlaylist(playlist);

  return `
    <div class="boo-player">
      <h3>${escapeHTML(playlist.name)}</h3>

      <p>${escapeHTML(playlist.description)}</p>

      <p class="mini">
        Your Spotify player is open below. 🎧
        Press play, then visit any other app.
        The playlist will stay loaded.
      </p>

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
// APP BUTTON NAVIGATION
// ==========================================

view.addEventListener("click", event => {
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

// ==========================================
// START PHONE
// ==========================================

go("boot");
