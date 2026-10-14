
/* =========================================================
   BRATZBERRY™ — BUNNY BOO HOTLINE
   Open When... Collection
   20 letters from Yasmin to Sasha
   ========================================================= */

const bunnyBooHotline = (() => {
  const STORAGE_KEY = "bratzberry-hotline-v1";

  const letters = [
    {
      id: 1,
      emoji: "🧠",
      title: "Open When Your Brain Won't STFU",
      category: "comfort",
      from: "Chairwoman of the Mind Your Mental Business Committee",
      message: `Angel Brenae.

I know that brain of yours is currently hosting approximately 47 meetings, 12 emergency conferences, and one completely unnecessary investigation. And I know you probably have a solution for every single thing running through your head.

BUT MA'AM. Not everything requires a solution tonight.

Some things can be unfinished. Some questions can stay unanswered. Some ideas can wait until tomorrow. You're allowed to have a thought without turning it into an assignment.

And before you hit me with your famous "I GOT IT DAWG," I KNOW YOU DO. That's not the point. 😂

Close some of those mental tabs, girl. The world will still be here when you reopen them.

— Yasmin, Chairwoman of the Mind Your Mental Business Committee 💋`
    },
    {
      id: 2,
      emoji: "💌",
      title: "Open When You Need to Hear the TRUTH",
      category: "pep",
      from: "Your Pretty Princess",
      message: `Okay, Sasha. Pull up a chair because this is not the envelope for sugarcoating.

You cannot keep saying yes to things you don't have the capacity for and then act surprised when your plate looks like a Thanksgiving buffet.

You are not required to fix every inconvenience, answer every question immediately, or make everybody comfortable at your own expense.

And sometimes? You're going to have to let somebody be disappointed. That's life. They'll survive.

Being a good person does not mean being endlessly available.

Now, if you need me to help you figure something out, you already know my question: "Uh huh, but what can I help with?"

Notice I said HELP. Not take over your entire life. 😂

Love you. Now go set that boundary.

— Your Pretty Princess 🤎`
    },
    {
      id: 3,
      emoji: "😭",
      title: "Open When Life Is LIFE-ING",
      category: "comfort",
      from: "Department of Absolutely Not",
      message: `First of all, who authorized today to act like this?

Because from what I'm hearing, life has been doing entirely too much, and nobody consulted either of us.

Here's the agenda for the remainder of this ridiculous day:

1. Find somewhere comfortable to sit.
2. Get yourself something to drink.
3. Stop treating today's problems like they all have to be solved before midnight.
4. If necessary, stare at the ceiling dramatically for five minutes.

You do not have to turn a terrible day into a productive one. Sometimes the accomplishment is simply making it through without throwing your phone across the room.

Tomorrow gets its own chance to behave.

Today? We're filing a complaint with management.

— Yasmin, Department of Absolutely Not 😭`
    },
    {
      id: 4,
      emoji: "🍽️",
      title: "Open When You Haven't Eaten",
      category: "funny",
      from: "Officer Yasmin",
      message: `ANGEL BRENAE.

What did you eat today?

And before you answer, coffee does not count. A handful of snacks does not count as dinner. And telling me you were "about to eat" three hours ago is NOT the same as eating.

I need a plate. An actual plate. With food on it.

Don't make me pull up our Discord receipts, because you already know I have evidence of this ongoing investigation. 😭

Matter of fact, go eat something before you finish reading this envelope.

...I'll wait.

Okay. Now that we've handled that, remember that the girl who takes care of everybody and everything also needs to take care of herself.

Love you, but the Food Police do not take days off.

— Officer Yasmin 🍽️`
    },
    {
      id: 5,
      emoji: "🌙",
      title: "Open When You Should Be ASLEEP",
      category: "funny",
      from: "The Sleep Police",
      message: `EXCUSE ME.

Why are you awake?

No, seriously. Look at the time.

Now I know I have absolutely no room to talk because there's a strong possibility I'm awake doing something equally unnecessary. But we're not discussing my crimes right now. We're discussing YOURS.

Whatever you're planning, editing, organizing, researching, or randomly thinking about can probably wait.

Put the phone down. Get comfortable. Let yourself be off duty.

And if you catch me online after I sent you this? Mind your business. 😭

Goodnight, Bunny Boo.

— The Sleep Police (currently under investigation) 🌙`
    },
    {
      id: 6,
      emoji: "👑",
      title: "Open When You Forget THAT Girl Is You",
      category: "pep",
      from: "Yasmin",
      message: `Sasha, I need you to remember something.

You built a community where people found books, friendships, laughter, and a place to belong. That did not happen by accident.

Your ideas became actual experiences. Your imagination became something people get to participate in. And your presence has made a difference in ways you probably don't even see.

I'm not telling you this so you can add another responsibility to your list. I'm telling you because I want you to recognize what you've already done.

You don't need a special occasion to give yourself credit.

Look at the woman you've become, the things you've created, and the people you've brought together.

THAT girl? Yeah. She's you.

— Yasmin 👑`
    },
    {
      id: 7,
      emoji: "💻",
      title: "Open When TBB Has You STRESSED",
      category: "pep",
      from: "The Pretty Princess Administration",
      message: `OFFICIAL NOTICE FROM THE TBB SUPPORT DEPARTMENT

To: Founder Sasha
From: Yasmin, Unofficial Director of "Girl, Let Me Help"
Subject: Your Immediate Release From Doing Everything

Dear Founder,

After a thorough review, it has been determined that you are attempting to operate an entire community using one brain, two hands, and an unreasonable number of open tabs.

Effective immediately, you are authorized to delegate, postpone, simplify, and say "we'll deal with that later."

Not every event needs seventeen layers. Not every issue needs a founder-level investigation. And not every good idea needs to launch this week.

Your community should be something you enjoy, too.

This notice has been approved by the Pretty Princess Administration.

P.S. I know you got it, dawg. I'm still asking what I can help with.

— Yasmin 💻`
    },
    {
      id: 8,
      emoji: "😂",
      title: "Open When You Need a Good Laugh",
      category: "funny",
      from: "Your Favorite Accomplice",
      message: `BREAKING NEWS 🚨

Two grown women have reportedly spent an unreasonable amount of time communicating through reaction stickers instead of complete sentences.

Witnesses claim the conversations frequently begin with a legitimate question and somehow end with a GIF that has absolutely nothing to do with the original topic.

Authorities are also investigating repeated incidents of:

• "GIRLLLL"
• "I GOT IT DAWG"
• Unsolicited food interrogations
• Questionable sleep schedules
• Starting one small project and accidentally building an entire operation

Both suspects remain at large and show no signs of changing their behavior.

When reached for comment, Yasmin reportedly said, "Wouldn't you like to know?"

More at 11. 😭

— Your Favorite Accomplice`
    },
    {
      id: 9,
      emoji: "🫶🏽",
      title: "Open When You Feel Unappreciated",
      category: "comfort",
      from: "Jaiyah",
      message: `I want to talk about the things people don't always notice.

The messages you answer. The ideas you consider. The little adjustments you make because you want somebody to have a better experience. The time you spend behind the scenes when everyone else only sees the finished result.

I see that part of you.

I see how much thought goes into things that other people might assume just magically happen.

And while I can't speak for everybody, I can speak for myself: your effort has never been invisible to me.

I appreciate the time, patience, and heart you put into the things you care about. Even when you don't receive the recognition you deserve.

I hope you find spaces where that care is returned just as freely.

— Jaiyah 🤎`
    },
    {
      id: 10,
      emoji: "💭",
      title: "Open When You're Doubting Yourself",
      category: "pep",
      from: "Yasmin",
      message: `What if you stopped asking whether you're capable and started asking what you need to learn?

You don't have to already know every answer before you begin. You don't need to have every detail figured out. And you certainly don't need to compare your beginning to somebody else's finished product.

Think about how many things you've figured out that once felt unfamiliar.

You learned because you tried. You adjusted when something didn't work. You asked questions. You kept going.

That is evidence you can use right now.

Being unsure does not mean you're unqualified. It means you're standing in front of something new.

Take the first step. You can figure out the second one when you get there.

— Yasmin ✨`
    },
    {
      id: 11,
      emoji: "🧘🏽‍♀️",
      title: "Open When You Need Permission to REST",
      category: "comfort",
      from: "The Pretty Princess Rest & Recovery Office",
      message: `This envelope is your official permission slip.

You may cancel a nonessential plan.
You may leave a message unanswered until tomorrow.
You may spend an afternoon doing absolutely nothing impressive.
You may enjoy something without turning it into content, an event, or a project.

And most importantly, you do not have to earn rest by exhausting yourself first.

I know you enjoy creating. I know you love having something to work toward. But I also want you to have moments that belong to nobody except you.

No deadlines. No expectations. No explanations.

Just Angel, being Angel.

Signed and approved,

The Pretty Princess Rest & Recovery Office 💤`
    },
    {
      id: 12,
      emoji: "💅🏽",
      title: "Open When You're Feeling a Little EXTRA",
      category: "funny",
      from: "The Extra Committee",
      message: `OH, SO WE'RE BEING DRAMATIC TODAY?

PERFECT. I SUPPORT IT. 💋

Put on the cute outfit. Play the song again. Take the picture from seventeen different angles. Change your mind about your aesthetic halfway through. Send me the sticker that best represents your current level of attitude.

You are allowed to enjoy being a little ridiculous sometimes.

Not every conversation needs to be serious. Not every decision needs a spreadsheet. Sometimes the answer really is "because I felt like it."

And if somebody asks why you're doing the most?

Tell them you're actually doing the appropriate amount. They're simply not keeping up.

Now go be fabulous, Sasha.

— Yasmin, Fellow Member of the Extra Committee 💅🏽`
    },
    {
      id: 13,
      emoji: "🎉",
      title: "Open When Something AMAZING Happens",
      category: "sisterhood",
      from: "Your Hype Woman",
      message: `WAIT WAIT WAIT WAIT.

YOU DID WHAT?!

GIRLLLLLLLLL!!! 🎉🎉🎉

Okay, I need the entire story. From the beginning. With details. Do NOT send me some little two-word summary and think that's sufficient.

What happened? How did you find out? What was your reaction? DID YOU SCREAM? Because I'm prepared to scream with you.

And please don't minimize it by immediately moving on to the next thing.

You get to enjoy this moment. You get to be excited. You get to celebrate yourself without adding a "but I still need to..." at the end.

I'm throwing imaginary confetti all over this phone right now.

PROUD OF YOUUUUU! 🥳

— Your Hype Woman, Yasmin`
    },
    {
      id: 14,
      emoji: "🥹",
      title: "Open When You Need to Feel Loved",
      category: "sisterhood",
      from: "Your Yasmin",
      message: `Bunny Boo,

There's something really special about finding a person you can be completely yourself with.

Somebody you can laugh with, work with, talk nonsense with, and check on without it feeling like an obligation.

I'm grateful our paths crossed in that little bookish corner of the internet. I'm grateful the conversations grew beyond server stuff. And I'm grateful that somewhere along the way, you became family to me.

You don't have to be entertaining, helpful, productive, or in a good mood to deserve that love.

You're my sister on the quiet days, too.

And whatever kind of day you're having when you read this, I hope you can feel even a little bit of the love I put into making this for you.

ILY FOR LIFEEEEE.

— Your Yasmin 🤎`
    },
    {
      id: 15,
      emoji: "💌",
      title: "Open When You Don't Know Which One to Open",
      category: "comfort",
      from: "Yasmin",
      message: `Well, hello there, Miss Indecisive. 😂

You have twenty envelopes to choose from and somehow ended up here. So we're going to do something different.

Look around you and find three things:

Something that makes you comfortable.
Something that makes you smile.
Something you haven't taken a moment to appreciate lately.

Got them?

Good.

Now here's your tiny assignment: do one nice thing for yourself today that has absolutely nothing to do with being useful to anybody else.

It doesn't have to be big. A favorite snack, a good song, a few chapters of a book, or just some uninterrupted peace.

No special occasion needed.

Sometimes the surprise is simply remembering to enjoy your own day.

— Yasmin 💌`
    },
    {
      id: 16,
      emoji: "😤",
      title: "Open When Somebody Got You MESSED UP",
      category: "funny",
      from: "Head of the Girl WHAT Department",
      message: `WHO.

WHO DID WHAT.

Okay, before we begin, I need you to tell me whether we're in the "I just need to vent" category or the "help me figure out what to say" category.

Because those are two VERY different departments, ma'am. 😭

If you need to vent, I can listen without turning your feelings into a project.

If you want a solution, we'll sort through what actually happened, what deserves a response, and what isn't worth another minute of your energy.

Either way, we're not giving somebody unlimited access to your peace just because they decided to act foolish.

And no, you do not have to respond while you're upset.

Sometimes the strongest reply is the one you send after you've had time to think.

— Yasmin, Head of the Girl WHAT Department`
    },
    {
      id: 17,
      emoji: "🪫",
      title: "Open When Your Social Battery Is on 1%",
      category: "comfort",
      from: "Yasmin",
      message: `AUTOMATED MESSAGE:

Hello! You've reached Angel's social battery.

Unfortunately, the battery is currently operating at 1% capacity. All nonessential conversations, unnecessary explanations, and surprise obligations have been temporarily suspended.

Please allow one to three business days for recovery. 😂

But seriously, girl. You don't owe anybody a performance when you're drained.

You can love people and still need space. You can care about your community and still step away from the screen. You can be a good friend without being constantly available.

And you already know how we operate. We can both disappear into our own worlds and pick right back up without making it weird.

So recharge. I'll catch you when you're ready.

— Yasmin 🔋`
    },
    {
      id: 18,
      emoji: "🦋",
      title: "Open When Everything Is Changing",
      category: "comfort",
      from: "Jaiyah",
      message: `Change has a funny way of making even familiar things feel uncertain.

Sometimes you're excited about what's next. Sometimes you're nervous. Sometimes you're both at the exact same time.

You don't have to choose one feeling to make the other valid.

I hope you give yourself room to outgrow old routines, change your mind, try something unfamiliar, and discover new things about yourself.

You aren't obligated to remain the version of you that made sense to everybody yesterday.

And you don't need to know exactly how everything will turn out before allowing yourself to move forward.

Whatever this new chapter looks like, I hope it brings you experiences that remind you how much life still has to offer.

Turn the page, Sasha. See what's there.

— Jaiyah 🦋`
    },
    {
      id: 19,
      emoji: "✨",
      title: "Open When You Need a Little Motivation",
      category: "pep",
      from: "Your Accountability Bestie",
      message: `Okay, we're doing this the practical way.

Pick ONE thing you've been putting off.

Not the entire list. Not the biggest possible version of the task. Just one thing.

Now make it smaller.

If you need to clean, start with one surface.
If you need to plan, write the first three steps.
If you need to create, open the file.
If you need to send a message, draft the first sentence.

Give it ten minutes.

You do not need to feel magically motivated before beginning. Sometimes the energy comes after you've started.

And if ten minutes is all you manage today? That's ten minutes you didn't have before.

Now go handle that little piece, dawg. 😂

— Your Accountability Bestie`
    },
    {
      id: 20,
      emoji: "♾️",
      title: "Open When You Wonder If We're Stuck Together Forever",
      category: "sisterhood",
      from: "Your Forever Pretty Princess",
      message: `Unfortunately, Sasha, your request to terminate this friendship has been DENIED.

After careful consideration, the Sasha × Yasmin Sisterhood Committee has determined that you are, in fact, stuck with me.

Terms and conditions include:

Random check-ins about food.
Unsolicited opinions on cute things.
Occasional disappearing acts followed by completely normal conversations.
Too many stickers.
More ideas than either of us has time for.
And a standing invitation to come talk to me about whatever's on your mind.

There is no expiration date on this agreement.

But underneath all my foolishness, I really do mean this: I'm thankful I got to know you beyond TBB. What started as a shared love of books turned into a friendship that means so much more to me.

I don't know everything life has planned for either of us, but I hope we get to keep making memories, laughing at nonsense, and cheering each other on through all of it.

So yeah, Bunny Boo.

YOU'RE STUCK WITH ME. 😭🤎

ILY FOR LIFEEEEE.

— Yasmin, Your Forever Pretty Princess 💋`
    }
  ];

  const categories = [
    { id: "all", label: "All 20" },
    { id: "comfort", label: "Soft Landing" },
    { id: "funny", label: "Girl, BYE 😭" },
    { id: "pep", label: "Reality Checks" },
    { id: "sisterhood", label: "Sisterhood" },
    { id: "favorites", label: "My Favorites ♡" }
  ];

  let saved = loadSaved();
  let activeFilter = "all";
  let currentLetter = null;
  let openingTimer = null;

  function loadSaved() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return {
        opened: Array.isArray(data?.opened) ? data.opened : [],
        favorites: Array.isArray(data?.favorites) ? data.favorites : []
      };
    } catch {
      return { opened: [], favorites: [] };
    }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {
      // The app still works if storage is unavailable.
    }
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function isOpened(id) {
    return saved.opened.includes(id);
  }

  function isFavorite(id) {
    return saved.favorites.includes(id);
  }

  function markOpened(id) {
    if (!isOpened(id)) {
      saved.opened.push(id);
      persist();
    }
  }

  function toggleFavorite(id) {
    if (isFavorite(id)) {
      saved.favorites = saved.favorites.filter(item => item !== id);
    } else {
      saved.favorites.push(id);
    }
    persist();
  }

  function getVisibleLetters() {
    if (activeFilter === "favorites") {
      return letters.filter(letter => isFavorite(letter.id));
    }
    if (activeFilter === "all") return letters;
    return letters.filter(letter => letter.category === activeFilter);
  }

  function isOpen() {
    return Boolean(view.querySelector(".bbh-app"));
  }

  function draw(html) {
    render(`<section class="bbh-app">${html}</section>`);
  }

  function topBar(title, backAction = "menu") {
    return `
      <div class="bbh-topbar">
        <button class="bbh-back" data-bbh-action="${backAction}"
          aria-label="Back">←</button>
        <div class="bbh-topbar-title">${escapeHTML(title)}</div>
        <span class="bbh-topbar-heart">♡</span>
      </div>
    `;
  }

  function menu() {
    clearTimeout(openingTimer);
    currentLetter = null;

    const openedCount = letters.filter(letter => isOpened(letter.id)).length;
    const visible = getVisibleLetters();

    draw(`
      ${topBar("Bunny Boo Hotline", "home")}
      <div class="bbh-hero">
        <div class="bbh-hero-icon">💌</div>
        <div class="bbh-eyebrow">A LITTLE SOMETHING FROM YASMIN</div>
        <h1>Open When...</h1>
        <p>For every mood, every moment, and every version of you.
           Twenty little reminders that your girl is always rooting for you.</p>
        <div class="bbh-progress">
          <span>${openedCount} of 20 opened</span>
          <span>♡ ${saved.favorites.length} saved</span>
        </div>
        <div class="bbh-progress-track">
          <div class="bbh-progress-fill"
            style="width:${openedCount / letters.length * 100}%"></div>
        </div>
      </div>

      <div class="bbh-filter-row" aria-label="Filter letters">
        ${categories.map(category => `
          <button
            class="bbh-filter ${activeFilter === category.id ? "is-active" : ""}"
            data-bbh-filter="${category.id}">
            ${category.label}
          </button>
        `).join("")}
      </div>

      <div class="bbh-section-label">
        <span>${activeFilter === "all" ? "THE ENVELOPE COLLECTION" :
          categories.find(c => c.id === activeFilter)?.label || "LETTERS"}</span>
        <span>${visible.length} LETTER${visible.length === 1 ? "" : "S"}</span>
      </div>

      ${visible.length ? `
        <div class="bbh-envelope-grid">
          ${visible.map(letter => envelopeCard(letter)).join("")}
        </div>
      ` : `
        <div class="bbh-empty">
          <div>💗</div>
          <h3>No favorites yet, Bunny Boo!</h3>
          <p>Open an envelope and tap the heart to save it here.</p>
          <button class="bbh-pill-button" data-bbh-filter="all">
            See all envelopes
          </button>
        </div>
      `}

      <div class="bbh-menu-footer">
        Made with all my love, foolishness &amp; a little attitude.<br>
        <strong>— Your Pretty Princess 💋</strong>
      </div>
    `);
  }

  function envelopeCard(letter) {
    const opened = isOpened(letter.id);
    const favorite = isFavorite(letter.id);

    return `
      <button class="bbh-envelope-card ${opened ? "is-read" : ""}"
        data-bbh-open="${letter.id}"
        aria-label="Open letter ${letter.id}: ${escapeHTML(letter.title)}">
        <div class="bbh-envelope-art">
          <div class="bbh-envelope-back"></div>
          <div class="bbh-envelope-flap"></div>
          <div class="bbh-envelope-front"></div>
          <div class="bbh-envelope-seal">♥</div>
        </div>
        <span class="bbh-envelope-number">
          LETTER ${String(letter.id).padStart(2, "0")}
        </span>
        <span class="bbh-envelope-title">${escapeHTML(letter.title)}</span>
        <span class="bbh-envelope-status">
          ${opened ? "✓ Opened" : "✉ Sealed"}
          ${favorite ? " · ♥ Saved" : ""}
        </span>
      </button>
    `;
  }

  function openLetter(id) {
    const letter = letters.find(item => item.id === id);
    if (!letter) return;

    clearTimeout(openingTimer);
    currentLetter = id;

    draw(`
      ${topBar("A Letter From Yasmin")}
      <div class="bbh-opening-screen">
        <div class="bbh-opening-label">SPECIAL DELIVERY FOR SASHA</div>
        <div class="bbh-opening-envelope">
          <div class="bbh-opening-paper">♡</div>
          <div class="bbh-opening-back"></div>
          <div class="bbh-opening-flap"></div>
          <div class="bbh-opening-front"></div>
          <div class="bbh-opening-seal">♥</div>
        </div>
        <div class="bbh-opening-caption">Opening letter
          ${String(id).padStart(2, "0")}...</div>
      </div>
    `);

    openingTimer = setTimeout(() => {
      if (!isOpen() || currentLetter !== id) return;
      markOpened(id);
      showLetter(id);
    }, 1250);
  }

  function showLetter(id) {
    const letter = letters.find(item => item.id === id);
    if (!letter) return;

    currentLetter = id;

    const favorite = isFavorite(id);
    const index = letters.findIndex(item => item.id === id);
    const previous = letters[index - 1];
    const next = letters[index + 1];

    draw(`
      ${topBar("Letter " + String(id).padStart(2, "0"))}

      <div class="bbh-letter-header">
        <span class="bbh-letter-emoji">${letter.emoji}</span>
        <span class="bbh-letter-counter">LETTER ${id} OF 20</span>
        <h2>${escapeHTML(letter.title)}</h2>
        <p>From Yasmin, with love 💋</p>
      </div>

      <article class="bbh-paper">
        <div class="bbh-paper-decoration">♡</div>
        <div class="bbh-paper-to">TO: MY BUNNY BOO</div>
        <div class="bbh-paper-divider"></div>
        <div class="bbh-paper-body">${escapeHTML(letter.message)}</div>
        <div class="bbh-paper-bottom">sealed with love ♡</div>
      </article>

      <div class="bbh-letter-actions">
        <button class="bbh-favorite-button ${favorite ? "is-favorite" : ""}"
          data-bbh-favorite="${id}"
          aria-pressed="${favorite}">
          ${favorite ? "♥ Saved to Favorites" : "♡ Save This Letter"}
        </button>
        <button class="bbh-replay-button" data-bbh-open="${id}">
          ✉ Reopen Envelope
        </button>
      </div>

      <div class="bbh-letter-navigation">
        <button data-bbh-open="${previous?.id || ""}"
          ${previous ? "" : "disabled"}>
          ← Previous
        </button>
        <button data-bbh-action="menu">All Envelopes</button>
        <button data-bbh-open="${next?.id || ""}"
          ${next ? "" : "disabled"}>
          Next →
        </button>
      </div>
    `);
  }

  function handleClick(event) {
    if (!isOpen()) return;

    const filter = event.target.closest("[data-bbh-filter]");
    if (filter) {
      activeFilter = filter.dataset.bbhFilter;
      menu();
      return;
    }

    const envelope = event.target.closest("[data-bbh-open]");
    if (envelope) {
      const id = Number(envelope.dataset.bbhOpen);
      if (id) openLetter(id);
      return;
    }

    const favorite = event.target.closest("[data-bbh-favorite]");
    if (favorite) {
      const id = Number(favorite.dataset.bbhFavorite);
      toggleFavorite(id);
      showLetter(id);
      return;
    }

    const action = event.target.closest("[data-bbh-action]");
    if (action) {
      if (action.dataset.bbhAction === "home") {
        clearTimeout(openingTimer);
        currentLetter = null;
        go("home");
      } else if (action.dataset.bbhAction === "menu") {
        menu();
      }
    }
  }

  view.addEventListener("click", handleClick);

  return {
    menu,
    cleanup() {
      clearTimeout(openingTimer);
      currentLetter = null;
    }
  };
})();
