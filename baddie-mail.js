
/* ==========================================
   BRATZBERRY™ — BADDIE MAIL 💋💌
   Special Delivery for Angel
   12 real submissions + 3 surprise letters
   ========================================== */

const baddieMail = (() => {
  const STORAGE_KEY = "bratzberry-baddie-mail-v1";

  const letters = [
    {
      id: 1,
      from: "Belle",
      subject: "Love and care",
      category: "appreciation",
      message: `Dear angel your the best admin the server could ever have. What would we do without you? Your amazing. And im also so thankful to have gotten to know you. The way you care about everyone is very sweet and kind. I hope you accomplish great things in life `
    },
    {
      id: 2,
      from: "Beckie Mckinney",
      subject: "You Don’t Go Unnoticed ❤️",
      category: "love",
      message: `Thank you for everything you do, Angel. ❤️ I just want you to know that your kindness, effort and everything you do truly don’t go unnoticed. You’re so appreciated, even if I don’t always say it. Never forget how much of a difference you make. 🫶🏽✨`
    },
    {
      id: 3,
      from: "Ladybug",
      subject: "Everything you do 💕",
      category: "love",
      message: `Dear Angel, you are honestly one of the best friends I’ve ever had. You do so much for the TBB community and have given me so much joy and laughter and I wouldn’t have met the people I had including you if it hadn’t been for you! You have gifted me countless gifts over the past year like there are no words to describe how much you mean to me and I promise one day imma gift you stuff as well just because, because you have the sweetest heart and are the bestest friend ever. You are the best buddy reader partner and I love that we have gotten closer this year! Love your friend (and wife cough cough) ladybug 🐞💗💗💗`
    },
    {
      id: 4,
      from: "Lillie",
      subject: "Thank you for all of the laughs and memories ",
      category: "appreciation",
      message: `Thank you for every laugh and memory within the server. TBB would not be the same without you! Especially with all of the events, vibes of the community, and the different names that we all change to within the server. `
    },
    {
      id: 5,
      from: "Beckie Mckinney",
      subject: "Family ",
      category: "funny",
      message: `My favourite memory has to be the whole soup-making saga 😂😭 Angel has officially adopted me into the Discord family instead of turning me into soup like everyone else! Although, considering I’m apparently known as the one who poisons and bites people, I’m not sure whether being adopted is a sign of love or a safety precaution. 💀😂❤️ It’s definitely one of those inside jokes that will always make me smile!`
    },
    {
      id: 6,
      from: "Jen <3",
      subject: "To the honourable soup queen",
      category: "love",
      message: `For though thou may try and create soup with mine body I must part on thee mine love.

Ok enough really bad old english,, I love you so much and I am so grateful for your friendship every day. You are truly one of the most kindhearted people I’ve ever had the honour of meeting and you make me want to be better every day <3 Thank you for everything you have ever done for me and thank you for everything you ever will do, I love you unconditionally forever and ever <3`
    },
    {
      id: 7,
      from: "Day",
      subject: "To the Queen of TBB <3",
      category: "appreciation",
      message: `Hi my lovely angel, I just wanted to make sure you know how loved and how amazzing of a person you are. When I joined in as a newbie I was lowkey worried because almost everyone is either from the Europe or the US and me being from Asia , I thought I would feel like the odd one out but i never felt that way because everytime i spoke in the general channel and you were around, you would always respond and make me feel seen. As a 24 year old, I felt so comfortable around you and Jaiyah from the start. At camp we were in the same team and i think i connected and related to you the most then. You were encouraging, understanding and most of all such a wonderful leader lifting us all up. I am so glad I joined TBB because I got to interact with the amazing human being whose name exactly tells you what kind of person she is, Angel the Angel <3`
    },
    {
      id: 8,
      from: "Lunabeez",
      subject: "💕 To Someone Who Makes the World a Little Brighter",
      category: "love",
      message: `💖 To my beautiful Angel 💖

I honestly don’t even know where to begin, because I don’t think words could ever fully express how much appreciation I have for you and the incredible person you are. 🥹❤️

You are such a truly remarkable woman, Angel. You have this beautiful combination of strength, charisma, kindness, and warmth that makes you stand out in the most wonderful way. You have a presence about you that draws people in, but it’s your heart, your compassion, and the way you make people feel that truly make you special. You have a way of bringing people together and making them feel welcome, accepted, and valued, and I think that says so much about the kind of person you are.

One of the things I admire most about you is that the community you’ve created is such a beautiful reflection of you. The kindness, acceptance, warmth, and sense of belonging that people find there are a reflection of the love and care you pour into everything you do. You haven’t just created a Discord server; you’ve created a space that carries pieces of your heart. A place where people from all walks of life can come together, be themselves, form connections, and feel like they belong. And I think that is one of the most beautiful things a person can do. The time, effort, and dedication you put into what you’ve built speak volumes about your character, and I hope you know how special that is. ❤️

I feel so incredibly blessed that I found my way into your community and that I get to be your adopted daughter. 🥹💕 There is something so special about finding a place where you feel welcomed, accepted, and connected to others, and I’m so grateful that you’ve created that kind of space. But beyond the community itself, I’m grateful for the person at the heart of it all. You. The woman whose kindness and vision brought all these people together in the first place. The woman who has made something beautiful simply by being herself and sharing a little piece of that with the world.

I hope you know that you deserve just as much love, appreciation, and kindness as you give to everyone around you. Sometimes, the people who do so much for others don’t always get to see just how much of a difference they make. So I hope you never forget that who you are matters, that what you do matters, and that the love you put into the world does not go unnoticed. You are so much more than what you do for others, and you deserve to be celebrated simply for being the incredible woman that you are.

Thank you for being unapologetically you. Thank you for your strength, your kindness, your beautiful personality, and your willingness to create a space where so many people can find connection and belonging. Thank you for making room for me in your little family and allowing me to be a part of something so special. I feel genuinely lucky to know you, and I hope you feel proud of the person you are and everything you’ve created, because you have so many reasons to be.

The community you’ve built is beautiful, but what makes it truly special is that it reflects the beautiful person behind it. And I hope you can see yourself through the eyes of the people who appreciate you, because I think you’d be amazed at just how much light you bring into the lives of others.

I’m so grateful for you, Angel. So grateful to be a part of your community, so grateful to be your adopted daughter, and so grateful that someone like you exists in this world. Never stop being the wonderful, strong, charismatic, big-hearted woman that you are. The world needs more people like you. Love you, Angel. Always remember how special you are. 🥹💖🫶🏻`
    },
    {
      id: 9,
      from: "Spirit whisperer/Ash",
      subject: "To my TBB Mom!",
      category: "love",
      message: `Hey ma just wanted to let you know u r loved and appreciated. We all miss you and I hope u r doing okay. Love ya lots girlie and keep b ur head up!`
    },
    {
      id: 10,
      from: "BrittNiccoli",
      subject: "Give yourself grace & love like you do all <3",
      category: "appreciation",
      message: `You give so much of yourself to The Baddie Bookshelf <3 it is only right we give it back to you in the form of love and encouragement. One breath. One moment. One small step. As we get into these colder months, I hope you take the time for you to rejuvenate and recharge as your queenly self deserves!`
    },
    {
      id: 11,
      from: "Phoenix ",
      subject: "A Formal Complaint from Your Fired and Rehired Bodyguard",
      category: "funny",
      message: `My Dearest Angel Boss. 

I genuinely just want to thank you for being such an amazing host and for helping create a community that feels so welcoming, fun, and full of love. One of the things I love about you is how down to earth you are! Like literally, you always make people laugh but most of all, you make people feel comfortable being themselves, no matter who or where they're from. I think that's such a special thing to have in a community, especially one filled with a bunch of baddies who are probably one questionable book recommendation away from losing their minds. [Yall know I'm right 👀]. 

Another thing that I admire alot on a daily basis, is seeing how you and everyone else are building TBB. It doesn't feel like just a bookclub, it feels like a cozy sanctuary where every baddie can just find comfort and connect, be chaotic little gremlins which we represent very well heh and share our love for not just books but every little form of life. You and the other girlies give us a place where we belong and a safe space to be who we are and I thank you for giving us that on a daily. But we all see the effort, care, and genuine love you all put into it, it shines bright like a diamondddd, and I hope you know how much that means to all of us in this lovely digital family.  [see what i did there heh 🥲] 

But genuinely, I'm so happy to be part of this community and to have gotten to know you and so many of the baddies that have now become near and dear to my heart, this summer, it was really amazing. Thank you for being you, for making people feel welcome, and for creating something that brings so many of us together. I love how you and the others go about building this community with so much personality and heart. You deserve all the love you're receiving and then some, and I hope you never underestimate the impact you have on the people around you, even in the little moments.

May your TBR never end, your fictional men remain deliciously problematic, and your real-life baddies always have your back always and forever. And don't worry, Angel,  even if you fire me again, Phoenix will always get back up again heh. [okay i'm done haha] 

Your favourite fired-and-rehired bodyguard,
Phoenix <3`
    },
    {
      id: 12,
      from: "alexa",
      subject: "to the sweetest angel out there <3",
      category: "appreciation",
      message: `hihi angel! thank you soso much for putting together such a lovely server with so many fun, exciting, cool (and did i mention fun...) events! i loveee the atmosphere you bring and i really do appreciate your endless dedication to the server that feels like home. hope you have a great day we love youuuu 😻`
    },
    {
      id: 13,
      from: "TBB Staff 💼",
      subject: "Behind Every Great Community Is You 💌",
      category: "special",
      featured: true,
      message: `Dear Angel,

Some people see the fun events, the conversations, and the little moments that make TBB feel like home. We also see the planning, the patience, the problem-solving, and the love you pour into making it all happen.

You created more than a bookish space. You gave people a reason to show up, connect, laugh, and feel like they belong. And even when things get chaotic, your heart for this community never goes unnoticed.

You deserve to enjoy what you've built just as much as everyone else. So here's your official reminder to delegate, take a break, and let the team have your back sometimes. We got you, dawg. 😂

With love and a whole lot of appreciation,
Your TBB Staff 💼💗`
    },
    {
      id: 14,
      from: "TBB Admin 👑",
      subject: "A Letter to Our Fearless Founder 👑",
      category: "special",
      featured: true,
      message: `Dear Angel,

Consider this your formal notice from the Department of We See You. 👑

You have a gift for taking an idea and turning it into a whole experience. You care about the details, you care about the people, and you keep showing up even when nobody sees how much work happens behind the scenes.

But here's the part we need you to hear: you do not have to carry every single thing by yourself. Leadership is not doing it all; sometimes it's trusting the people beside you to help hold it together.

We hope you give yourself credit for the community you've created and the connections you've made possible. TBB has your fingerprints all over it, in the best possible way.

Now please clock out of Founder Mode for five minutes and accept your flowers. 💐

All our love,
Your TBB Admin 👑💌`
    },
    {
      id: 15,
      from: "The TBB Baddies 💋",
      subject: "A Whole Lotta Love for Our Bunny Boo 💗",
      category: "special",
      featured: true,
      message: `ANGELLLLLL! 💋

Girl, did you really think you could build a whole bookish community, give us somewhere to be dramatic about fictional people, and NOT get a love letter out of it?! Absolutely not. 😭

Because of TBB, there are new friendships, shared reads, inside jokes, chaotic conversations, and people who found their little corner of the internet. That matters. YOU matter.

We hope you know you are appreciated for more than the things you organize or the problems you solve. You deserve the same kindness, laughter, and love you help create for everybody else.

So this is your reminder from the imaginary group chat: drink some water, eat an actual meal, rest that brilliant brain, and let yourself be celebrated.

With all the love, all the chaos, and probably too many reaction GIFs,
The TBB Baddies 💋📚💗`
    }
  ];

  const categories = [
    { id: "all", label: "All Mail" },
    { id: "unread", label: "Unread" },
    { id: "special", label: "Special Delivery 👑" },
    { id: "saved", label: "Saved ♡" }
  ];

  let saved = loadSaved();
  let filter = "all";

  function loadSaved() {
    try {
      const data = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );

      return {
        opened: Array.isArray(data.opened)
          ? data.opened : [],
        favorites: Array.isArray(data.favorites)
          ? data.favorites : []
      };
    } catch {
      return { opened: [], favorites: [] };
    }
  }

  function persist() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(saved)
      );
    } catch {
      console.warn("Baddie Mail could not save progress.");
    }
  }

  function escape(value) {
    return String(value).replace(
      /[&<>"']/g,
      char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]
    );
  }

  function isRead(id) {
    return saved.opened.includes(id);
  }

  function isSaved(id) {
    return saved.favorites.includes(id);
  }

  function unreadCount() {
    return letters.filter(letter => !isRead(letter.id)).length;
  }

  function getVisible() {
    if (filter === "unread") {
      return letters.filter(letter => !isRead(letter.id));
    }

    if (filter === "special") {
      return letters.filter(letter => letter.featured);
    }

    if (filter === "saved") {
      return letters.filter(letter => isSaved(letter.id));
    }

    return letters;
  }

  function draw(html) {
    render(`<section class="bm-app">${html}</section>`);

    // Attach actions directly to the new buttons.
    // This avoids conflicts with other phone apps.

    view.querySelectorAll("[data-bm-home]").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        go("home");
      });
    });

    view.querySelectorAll("[data-bm-menu]").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        menu();
      });
    });

    view.querySelectorAll("[data-bm-filter]").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        filter = button.dataset.bmFilter;
        menu();
      });
    });

    view.querySelectorAll("[data-bm-open]").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        openLetter(Number(button.dataset.bmOpen));
      });
    });

    view.querySelectorAll("[data-bm-save]").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopImmediatePropagation();

        const id = Number(button.dataset.bmSave);

        if (isSaved(id)) {
          saved.favorites = saved.favorites.filter(
            item => item !== id
          );
        } else {
          saved.favorites.push(id);
        }

        persist();
        openLetter(id);
      });
    });
  }

  function topBar(title, backTo = "home") {
    return `
      <div class="bm-topbar">
        <button
          type="button"
          class="bm-back"
          ${backTo === "home"
            ? "data-bm-home"
            : "data-bm-menu"}
          aria-label="Back"
        >←</button>

        <span class="bm-topbar-title">
          ${escape(title)}
        </span>

        <span class="bm-topbar-icon">💌</span>
      </div>
    `;
  }

  function menu() {
    const visible = getVisible();
    const unread = unreadCount();

    draw(`
      ${topBar("Baddie Mail")}

      <div class="bm-hero">
        <div class="bm-hero-icon">💌</div>

        <div class="bm-eyebrow">
          THE BADDIE BOOKSHELF PRESENTS
        </div>

        <h1>You've Got<br>Baddie Mail!</h1>

        <p>
          A whole inbox of love, laughs, appreciation,
          and a little bit of TBB foolishness.
          All addressed to YOU, Angel. 💋
        </p>

        <div class="bm-stats">
          <div>
            <strong>${letters.length}</strong>
            <span>Letters</span>
          </div>

          <div>
            <strong>${unread}</strong>
            <span>Unread</span>
          </div>

          <div>
            <strong>${saved.favorites.length}</strong>
            <span>Saved</span>
          </div>
        </div>
      </div>

      <div class="bm-filters">
        ${categories.map(category => `
          <button
            type="button"
            class="bm-filter ${
              filter === category.id ? "active" : ""
            }"
            data-bm-filter="${category.id}"
          >
            ${category.label}
          </button>
        `).join("")}
      </div>

      <div class="bm-section-heading">
        <span>
          ${filter === "all"
            ? "YOUR LOVE LETTERS"
            : categories.find(
                category => category.id === filter
              )?.label}
        </span>

        <span>${visible.length} MAIL</span>
      </div>

      ${
        visible.length
          ? `
            <div class="bm-inbox">
              ${visible.map(letter => card(letter)).join("")}
            </div>
          `
          : `
            <div class="bm-empty">
              <div>💗</div>
              <h3>Nothing here yet, Bunny Boo!</h3>
              <p>
                Your love letters are waiting in the inbox.
              </p>
              <button
                class="bm-filter"
                data-bm-filter="all"
              >
                See All Mail
              </button>
            </div>
          `
      }

      <div class="bm-footer">
        Sealed with love by your TBB family.
        <strong>Special delivery for Sasha ♡</strong>
      </div>
    `);
  }

  function card(letter) {
    const read = isRead(letter.id);
    const favorite = isSaved(letter.id);

    return `
      <button
        type="button"
        class="bm-mail-card ${
          read ? "is-read" : "is-unread"
        } ${letter.featured ? "is-featured" : ""}"
        data-bm-open="${letter.id}"
      >
        <span class="bm-mail-avatar">
          ${letter.featured ? "👑" : "💌"}
        </span>

        <span class="bm-mail-content">
          <span class="bm-mail-from">
            ${escape(letter.from)}
            ${!read
              ? '<span class="bm-unread-dot"></span>'
              : ""}
          </span>

          <span class="bm-mail-subject">
            ${escape(letter.subject)}
          </span>

          <span class="bm-mail-preview">
            ${escape(
              letter.message.replace(/\s+/g, " ").slice(0, 85)
            )}...
          </span>

          <span class="bm-mail-meta">
            ${letter.featured
              ? "✨ SPECIAL DELIVERY"
              : read
                ? "✓ Opened"
                : "✉ New Letter"}

            ${favorite ? " · ♥ Saved" : ""}
          </span>
        </span>

        <span class="bm-mail-arrow">›</span>
      </button>
    `;
  }

  function openLetter(id) {
    const letter = letters.find(item => item.id === id);
    if (!letter) return;

    if (!isRead(id)) {
      saved.opened.push(id);
      persist();
    }

    const favorite = isSaved(id);
    const index = letters.findIndex(item => item.id === id);
    const previous = letters[index - 1];
    const next = letters[index + 1];

    draw(`
      ${topBar("Special Delivery", "menu")}

      <div class="bm-letter-header">
        <div class="bm-letter-seal">
          ${letter.featured ? "👑" : "💌"}
        </div>

        <div class="bm-letter-counter">
          LETTER ${String(id).padStart(2, "0")}
          OF ${letters.length}
        </div>

        <h2>${escape(letter.subject)}</h2>

        <p>
          From ${escape(letter.from)}, with love 💗
        </p>

        ${letter.featured
          ? `<span class="bm-featured-badge">
               ✨ SPECIAL DELIVERY
             </span>`
          : ""}
      </div>

      <article class="bm-letter-paper">
        <div class="bm-paper-heart">♡</div>

        <div class="bm-paper-label">
          TO: ANGEL, OUR BUNNY BOO
        </div>

        <div class="bm-paper-line"></div>

        <div class="bm-letter-message">${
          escape(letter.message)
        }</div>

        <div class="bm-paper-line"></div>

        <div class="bm-letter-signature">
          With love,<br>
          <strong>${escape(letter.from)}</strong>
        </div>
      </article>

      <button
        type="button"
        class="bm-save-button ${favorite ? "saved" : ""}"
        data-bm-save="${id}"
      >
        ${favorite
          ? "♥ Saved to Your Favorites"
          : "♡ Save This Love Letter"}
      </button>

      <div class="bm-letter-navigation">
        ${
          previous
            ? `
              <button
                type="button"
                data-bm-open="${previous.id}"
              >
                ← Previous
              </button>
            `
            : "<span></span>"
        }

        <button
          type="button"
          data-bm-menu
        >
          All Mail 💌
        </button>

        ${
          next
            ? `
              <button
                type="button"
                data-bm-open="${next.id}"
              >
                Next →
              </button>
            `
            : "<span></span>"
        }
      </div>

      <div class="bm-letter-end">
        You are so loved, Angel. Never forget it. 💋
      </div>
    `);
  }

  return {
    menu,
    cleanup() {}
  };
})();
