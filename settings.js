
/* ==========================================
   BRATZBERRY™ SETTINGS
   Bunny Boo Edition
   ========================================== */

const bunnySettings = (() => {
  const THEME_KEY = "bratzberry-theme";
  const SOUND_KEY = "bratzberry-sounds";

  const themes = {
    original: {
      name: "Original Sasha",
      emoji: "💋",
      description: "The OG chocolate-and-pink BratzBerry look."
    },
    pink: {
      name: "Pretty in Pink",
      emoji: "🎀",
      description: "Blush, rose, and all things pretty."
    },
    sage: {
      name: "Sage & Slay",
      emoji: "🌿",
      description: "Soft sage, creamy neutrals, and a little luxury."
    },
    gold: {
      name: "Golden Girl",
      emoji: "👑",
      description: "Champagne, warm gold, and main-character energy."
    }
  };

  const getTheme = () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      return themes[saved] ? saved : "original";
    } catch {
      return "original";
    }
  };

  const getSounds = () => {
    try {
      return localStorage.getItem(SOUND_KEY) === "true";
    } catch {
      return false;
    }
  };

  let currentTheme = getTheme();
  let soundsEnabled = getSounds();
  let audioContext = null;

  function applyTheme(themeName) {
    if (!themes[themeName]) return;

    currentTheme = themeName;
    document.documentElement.dataset.bbTheme = themeName;

    try {
      localStorage.setItem(THEME_KEY, themeName);
    } catch {
      // The phone still works if storage is unavailable.
    }
  }

  function setSounds(enabled) {
    soundsEnabled = Boolean(enabled);

    try {
      localStorage.setItem(SOUND_KEY, String(soundsEnabled));
    } catch {
      // Sound preference applies for this visit.
    }
  }

  function playTap() {
    if (!soundsEnabled) return;

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) return;

      if (!audioContext) {
        audioContext = new AudioContextClass();
      }

      if (audioContext.state === "suspended") {
        audioContext.resume();
      }

      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(660, now);
      oscillator.frequency.exponentialRampToValueAtTime(
        880,
        now + 0.07
      );

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(
        0.025,
        now + 0.01
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.09
      );

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start(now);
      oscillator.stop(now + 0.1);
    } catch {
      // Audio is optional; never interrupt navigation.
    }
  }

  function isSettingsOpen() {
    return typeof page !== "undefined" &&
      page === "settings";
  }

  function show(html) {
    if (!isSettingsOpen()) return;

    render(`
      <div class="bbs-app">
        ${html}
      </div>
    `);
  }

  function header(title, subtitle) {
    return `
      <button class="back" data-bbs="menu">‹ Settings</button>

      <div class="bbs-heading">
        <span>BRATZBERRY™ PERSONAL SETTINGS</span>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
    `;
  }

  function menu() {
    show(`
      <button class="back" data-go="home">‹ Home</button>

      <div class="bbs-heading">
        <span>BRATZBERRY™ · BUNNY BOO EDITION</span>
        <h2>Settings ⚙️</h2>
        <p>Your phone. Your colors. Your rules, Bunny Boo. 💋</p>
      </div>

      <div class="bbs-owner">
        <div class="bbs-avatar">👑</div>
        <h3>Bunny Boo's Phone</h3>
        <p>Angel · Sasha · The Founder</p>
        <span class="bbs-status">♡ FOREVER CONNECTED ♡</span>
      </div>

      <div class="bbs-section-label">MAKE IT YOURS</div>

      <div class="bbs-menu">
        <button data-bbs="appearance">
          <span>🎨</span>
          <strong>Appearance</strong>
          <small>Choose your BratzBerry aesthetic</small>
          <b>›</b>
        </button>

        <button data-bbs="sounds">
          <span>🔊</span>
          <strong>Phone Sounds</strong>
          <small>${soundsEnabled ? "Tap sounds are on" : "Tap sounds are off"}</small>
          <b>›</b>
        </button>

        <button data-bbs="welcome">
          <span>✨</span>
          <strong>Welcome Experience</strong>
          <small>Replay your special introduction</small>
          <b>›</b>
        </button>

        <button data-bbs="about">
          <span>💗</span>
          <strong>About This Phone</strong>
          <small>Made by Yasmin, just for Sasha</small>
          <b>›</b>
        </button>
      </div>

      <div class="bbs-section-label">DEVICE INFORMATION</div>

      <div class="bbs-info">
        <div><span>Device</span><strong>BRATZBERRY™</strong></div>
        <div><span>Edition</span><strong>Bunny Boo</strong></div>
        <div><span>Owner</span><strong>Angel / Sasha</strong></div>
        <div><span>Creator</span><strong>Jaiyah / Yasmin</strong></div>
        <div><span>Software</span><strong>BunnyOS 1.0</strong></div>
        <div><span>Theme</span><strong>${themes[currentTheme].name}</strong></div>
        <div><span>Connection</span><strong>Forever ♡</strong></div>
      </div>

      <p class="bbs-footer">
        Designed with love, books, and a whole lot of attitude. 💋
      </p>
    `);
  }

  function appearance() {
    show(`
      ${header(
        "Appearance 🎨",
        "Pick your mood, pretty girl. They're ALL your colors."
      )}

      <div class="bbs-paper">
        <h3>Bunny Boo's Color Collection</h3>
        <p>
          Four looks. One iconic Sasha wallpaper.
          Switch whenever you feel like it, girl.
        </p>
      </div>

      <div class="bbs-themes">
        ${Object.entries(themes).map(([key, theme]) => `
          <button
            class="bbs-theme-card bbs-preview-${key} ${currentTheme === key ? "bbs-selected" : ""}"
            data-bbs-theme="${key}"
            aria-pressed="${currentTheme === key}"
          >
            <div class="bbs-theme-icon">${theme.emoji}</div>

            <div class="bbs-theme-details">
              <strong>${theme.name}</strong>
              <small>${theme.description}</small>

              <span class="bbs-swatches">
                <i></i><i></i><i></i>
              </span>
            </div>

            <span class="bbs-theme-check">
              ${currentTheme === key ? "✓" : "＋"}
            </span>
          </button>
        `).join("")}
      </div>

      <div class="bbs-paper">
        <h3>Don't worry, Boo. 💋</h3>
        <p>
          Your Sasha wallpaper, app icons, playlist covers,
          messages, and saved Love Notes stay exactly
          where they belong.
        </p>
      </div>
    `);
  }

  function sounds() {
    show(`
      ${header(
        "Phone Sounds 🔊",
        "Just a little extra personality."
      )}

      <div class="bbs-paper">
        <h3>Tap, Tap, Pretty Girl. 💗</h3>
        <p>
          Turn on a tiny sound whenever you tap a button
          inside your BratzBerry phone.
        </p>

        <div class="bbs-sound-setting">
          <div>
            <strong>Touch Sounds</strong>
            <small>${soundsEnabled ? "ON · She's making noise!" : "OFF · Quiet luxury."}</small>
          </div>

          <button
            class="bbs-switch ${soundsEnabled ? "bbs-switch-on" : ""}"
            data-bbs="toggle-sounds"
            role="switch"
            aria-checked="${soundsEnabled}"
            aria-label="Touch sounds"
          >
            <span></span>
          </button>
        </div>

        <button class="bbs-action" data-bbs="test-sound">
          Test My Sound ♡
        </button>

        <p class="bbs-tiny">
          Sound effects start muted and do not control
          your Spotify music.
        </p>
      </div>
    `);
  }

  function welcome() {
    show(`
      ${header(
        "Welcome Experience ✨",
        "Wanna have your main-character moment again?"
      )}

      <div class="bbs-paper bbs-center">
        <div class="bbs-big-emoji">💌</div>

        <h3>One More Time, Bunny Boo?</h3>

        <p>
          You can replay your original BRATZBERRY™
          welcome whenever you want.
        </p>

        <p>
          Your saved Love Notes, selected theme,
          and other preferences will still be here.
        </p>

        <button class="bbs-action" data-bbs="replay">
          Replay My Welcome ✨
        </button>
      </div>
    `);
  }

  function about() {
    show(`
      ${header(
        "About This Phone 💗",
        "Not available in stores. Obviously."
      )}

      <div class="bbs-paper bbs-about">
        <div class="bbs-big-emoji">👑💋</div>

        <span class="bbs-letter-label">
          A LITTLE SOMETHING FROM YOUR YASMIN
        </span>

        <h3>Angel, GIRLLLL. 😭🤎</h3>

        <p>
          You already know I be doing the absolute MOST
          when I get an idea in my head. And somehow,
          that turned into me making you a whole PHONE.
          Like girl, who does that? Apparently ME. 😂
        </p>

        <p>
          But I wanted you to have something that was
          completely yours. Something cute, a little
          ridiculous, and full of reminders that you're
          loved and appreciated.
        </p>

        <p>
          So whether you're having a good day, a rough
          day, a study meltdown, or you just need to
          hear from your girl, I hope you open this
          little phone and smile.
        </p>

        <p>
          You built a whole community where I ended up
          finding a sister. The least I could do was
          build you a little world of your own. 🥹
        </p>

        <p>
          Love you, Bunny Boo. And yes, you're stuck
          with me. No returns, no exchanges, and
          ABSOLUTELY no refunds. 💋
        </p>

        <div class="bbs-signature">Your Yasmin ♡</div>
      </div>

      <div class="bbs-device-stamp">
        BRATZBERRY™ · BUNNY BOO EDITION<br>
        HANDMADE WITH LOVE · FOREVER CONNECTED
      </div>
    `);
  }

  function replayWelcome() {
    // Uses the existing welcome/boot screen.
    // Does not erase localStorage or reset any apps.
    if (typeof go === "function") {
      go("boot");
    }
  }

  function handleClick(event) {
    // Play sounds for buttons throughout the phone.
    // No sound for ordinary links or text.
    const anyButton = event.target.closest("button");

    if (anyButton && soundsEnabled) {
      playTap();
    }

    if (!isSettingsOpen()) return;

    const themeButton = event.target.closest("[data-bbs-theme]");

    if (themeButton) {
      applyTheme(themeButton.dataset.bbsTheme);
      appearance();
      return;
    }

    const button = event.target.closest("[data-bbs]");
    if (!button) return;

    const action = button.dataset.bbs;

    if (action === "menu") menu();
    else if (action === "appearance") appearance();
    else if (action === "sounds") sounds();
    else if (action === "welcome") welcome();
    else if (action === "about") about();

    else if (action === "toggle-sounds") {
      setSounds(!soundsEnabled);
      sounds();
    }

    else if (action === "test-sound") {
      playTap();
    }

    else if (action === "replay") {
      replayWelcome();
    }
  }

  document.addEventListener("click", handleClick);

  // Restore the saved theme when the phone opens.
  applyTheme(currentTheme);

  return {
    menu,
    applyTheme,
    getTheme,
    getSounds
  };
})();
