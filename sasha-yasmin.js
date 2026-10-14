
/* ==========================================
   BRATZBERRY™ — SASHA × YASMIN 👑
   The Pretty Committee
   ========================================== */

const sashaYasminApp = (() => {
  const facts = {
    sasha: {
      name: "SASHA",
      real: "ANGEL",
      nickname: "Bunny Boo 🐰",
      sign: "Gemini ♊",
      department: "CHAOS DEPARTMENT",
      intro: "The founder of TBB. The reason this whole bookish universe even exists. My girl be having a million thoughts at once, but somehow still gets things DONE.",
      traits: [
        "Brain running on seventeen tabs at once.",
        "Will absolutely overthink something.",
        "Says 'I GOT IT DAWG' and means it.",
        "Needs her time to disappear and recharge sometimes."
      ]
    },
    yasmin: {
      name: "YASMIN",
      real: "JAIYAH",
      nickname: "Pretty Princess 💋",
      sign: "Libra ♎",
      department: "CALM DEPARTMENT",
      intro: "The girl who joined TBB looking for book friends and somehow ended up with a sister. Usually calm, usually observing, but please don't mistake that for not having an opinion. 😭",
      traits: [
        "Calm until further notice.",
        "Will ask what she can do to help.",
        "Stubborn, but let's call it determination. 😂",
        "Also disappears when life starts LIFE-ING."
      ]
    }
  };

  const comparisons = [
    {
      title: "When Life Gets Loud",
      sasha: "Her brain is already on scenario number twelve. 😭",
      yasmin: "I'm listening first, then figuring out what we can actually DO."
    },
    {
      title: "When We Need Space",
      sasha: "May go recharge and handle her business.",
      yasmin: "May disappear too because girl, LIFE.",
      together: "And when we come back? We pick right back up. No weird energy."
    },
    {
      title: "When There's a Problem",
      sasha: "'I GOT IT DAWG.' Already working on a plan.",
      yasmin: "'Uh huh, but what can I help with?'",
      together: "Different approaches, same goal: get it handled."
    },
    {
      title: "When Somebody Says 'Let's Plan a Trip'",
      sasha: "The ideas are IDEA-ING.",
      yasmin: "Okayyyy, let's talk dates, plans, and logistics.",
      together: "Now actually taking one of these trips? That's the next assignment. 😂"
    },
    {
      title: "When It Comes to Friendship",
      sasha: "Doesn't have to be available every second.",
      yasmin: "Doesn't expect constant communication either.",
      together: "That's what I love. We're friends, not employees clocking in for a shift."
    },
    {
      title: "Our General Operating Systems",
      sasha: "Chaos, but organized chaos.",
      yasmin: "Calm, but stubbornly calm.",
      together: "Somehow this combination WORKS. Don't ask me how. 😭🤎"
    }
  ];

  const airSignFacts = [
    {
      title: "Mental Chemistry 🧠",
      text: "Apparently Gemini and Libra can talk about everything and nothing for hours. And honestly? The random conversations alone make me feel like the zodiac folks been reading our messages. 😭"
    },
    {
      title: "Balance ⚖️",
      text: "One of us got seventeen thoughts going at once, and the other one is trying to figure out the next reasonable step. I'm not saying which is which because GIRL, you already know. 😂"
    },
    {
      title: "Independence 🌷",
      text: "THIS ONE. We do not need to talk every waking second to know the friendship is solid. We can go handle our lives and come right back without anybody taking it personally."
    },
    {
      title: "Adventure ✈️",
      text: "Apparently air signs make good travel buddies. Well, the itineraries have been discussed. Now we just need to actually GO somewhere together. 😭"
    }
  ];

  const questions = [
    {
      question: "Who founded TBB?",
      answers: ["Sasha 👑", "Yasmin 💋", "A mysterious book fairy"],
      correct: 0,
      reaction: "PERIOD! Angel built the whole community. Founder behavior. 👑"
    },
    {
      question: "Who joined TBB looking for a bookish Discord?",
      answers: ["Sasha", "Yasmin", "Neither of us"],
      correct: 1,
      reaction: "Me! I was just tryna find people to talk books with. LOOK AT US NOW. 😭"
    },
    {
      question: "Who's the Gemini?",
      answers: ["Yasmin", "Both of us", "Sasha"],
      correct: 2,
      reaction: "Bunny Boo herself! ♊"
    },
    {
      question: "Who's in the Calm Department?",
      answers: ["Yasmin", "Sasha", "Neither, let's be serious"],
      correct: 0,
      reaction: "That's meeeee. Calm until further notice, thank you. 💋"
    },
    {
      question: "What's our friendship's communication policy?",
      answers: [
        "Mandatory daily attendance",
        "Pick back up whenever life allows",
        "Submit a formal absence request"
      ],
      correct: 1,
      reaction: "Exactly! Nobody is submitting PTO to be somebody's friend. 😭🤎"
    },
    {
      question: "Which trips have we taken together so far?",
      answers: [
        "All the trips",
        "Three international vacations",
        "None yet, but we've been PLANNING"
      ],
      correct: 2,
      reaction: "Our itinerary era is stronger than our boarding-pass era right now. 😂✈️"
    }
  ];

  let currentScreen = "menu";
  let quizIndex = 0;
  let quizScore = 0;
  let selectedAnswer = null;

  function active() {
    return typeof page !== "undefined" && page === "about";
  }

  function show(html) {
    if (!active()) return;
    render(`<div class="sy-app">${html}</div>`);
  }

  function header(title, subtitle, back = "menu") {
    return `
      <button class="back" data-sy="${back}">‹ Back</button>
      <div class="sy-header">
        <div class="sy-kicker">✦ THE PRETTY COMMITTEE ✦</div>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
    `;
  }

  function menu() {
    currentScreen = "menu";
    show(`
      <button class="back" data-go="home">‹ Home</button>

      <div class="sy-header">
        <div class="sy-kicker">BRATZBERRY™ EXCLUSIVE</div>
        <h2>Sasha × Yasmin 💋</h2>
        <p>Same sisterhood. Very different operating systems.</p>
      </div>

      <div class="sy-duo">
        <button class="sy-person sy-sasha" data-sy="sasha">
          <span class="sy-monogram">S</span>
          <small>ANGEL</small>
          <strong>SASHA</strong>
          <em>Chaos Department</em>
          <span class="sy-tap">TAP TO EXPLORE ♡</span>
        </button>
        <span class="sy-between">♡</span>
        <button class="sy-person sy-yasmin" data-sy="yasmin">
          <span class="sy-monogram">Y</span>
          <small>JAIYAH</small>
          <strong>YASMIN</strong>
          <em>Calm Department</em>
          <span class="sy-tap">TAP TO EXPLORE ♡</span>
        </button>
      </div>

      <div class="sy-statement">
        <span>OFFICIAL FRIENDSHIP STATUS</span>
        <strong>Two Bratz. One sisterhood. 🤎</strong>
        <p>Bratz comparison on the outside. Soul-sister energy underneath.</p>
      </div>

      <div class="sy-menu">
        <button data-sy="story"><span>📚</span><strong>Our Origin Story</strong><small>How TBB brought us together</small></button>
        <button data-sy="comparison"><span>💻</span><strong>Friendship.exe</strong><small>Two different operating systems</small></button>
        <button data-sy="astrology"><span>♊</span><strong>Air Sign Alliance</strong><small>Gemini × Libra</small></button>
        <button data-sy="quiz"><span>🎀</span><strong>Who Knows the Duo?</strong><small>Let's see what you remember</small></button>
        <button data-sy="certificate"><span>👑</span><strong>Sisterhood Certificate</strong><small>Officially stuck with me</small></button>
        <button data-sy="letter"><span>💌</span><strong>One Last Thing...</strong><small>A note from your Yasmin</small></button>
      </div>
      <p class="sy-footnote">Created with love, attitude & a little too much personality. 💋</p>
    `);
  }

  function profile(which) {
    const p = facts[which];
    if (!p) return;
    currentScreen = which;

    show(`
      ${header(`${p.name} ${which === "sasha" ? "👑" : "💋"}`, "OFFICIAL BRATZ CHARACTER FILE")}
      <div class="sy-profile-card ${which === "sasha" ? "sy-profile-pink" : ""}">
        <div class="sy-profile-monogram">${p.name[0]}</div>
        <div class="sy-kicker">${p.department}</div>
        <h3>${p.real}</h3>
        <p>${p.nickname} · ${p.sign}</p>
      </div>
      <div class="sy-paper">
        <h3>Okayyyy, so here's the tea. ☕</h3>
        <p>${p.intro}</p>
        ${p.traits.map(t => `<div class="sy-trait">♡ ${t}</div>`).join("")}
      </div>
      <button class="sy-primary" data-sy="${which === "sasha" ? "yasmin" : "sasha"}">
        Meet ${which === "sasha" ? "Yasmin 💋" : "Sasha 👑"}
      </button>
    `);
  }

  function story() {
    currentScreen = "story";
    show(`
      ${header("Our Origin Story 📚", "She built the community. I found my sister.")}
      <div class="sy-paper">
        <span class="sy-chapter">CHAPTER 001 · THE TBB ERA</span>
        <h3>It Started With Books.</h3>
        <p>A few years ago, I was literally just looking for a bookish Discord. That's it. Somewhere to talk books, meet people, and mind my little reading business. 😂</p>
        <p>Then I found TBB. And what I DIDN'T know was that the girl who founded the whole community would eventually become somebody I consider my sister.</p>
        <p>Somewhere along the way, I applied to be part of the staff. Don't ask me what my first position was because girl, I genuinely cannot remember. 😭 But what I do know is that I came looking for book friends and ended up finding my Bunny Boo.</p>
      </div>
      <div class="sy-paper">
        <span class="sy-chapter">CHAPTER 002 · SOMEWHERE ALONG THE WAY</span>
        <h3>From TBB to My Girl.</h3>
        <p>Between random conversations, helping each other, planning trips we haven't even taken yet, and just being our very different selves, somewhere along the way this became way more than a Discord friendship.</p>
        <p>And one of my FAVORITE things? We don't have to talk every second. Life be LIFE-ING. I can disappear, come back, and there's no weird energy. No explanations required. We just pick back up.</p>
        <p>That's rare, and I don't take it for granted. 🤎</p>
      </div>
      <div class="sy-quote">She created TBB. Neither of us knew it would also be where we'd find each other. ♡</div>
    `);
  }

  function comparison() {
    currentScreen = "comparison";
    show(`
      ${header("Friendship.exe 💻", "Same friendship. Two different kinds of crazy.")}
      <div class="sy-system-label">SASHA.EXE × YASMIN.EXE · RUNNING SUCCESSFULLY</div>
      ${comparisons.map((item, index) => `
        <details class="sy-compare">
          <summary><span>${String(index + 1).padStart(2, "0")}</span>${item.title}<b>＋</b></summary>
          <div class="sy-compare-body">
            <div><strong>👑 SASHA</strong><p>${item.sasha}</p></div>
            <div><strong>💋 YASMIN</strong><p>${item.yasmin}</p></div>
            ${item.together ? `<p class="sy-together">♡ ${item.together}</p>` : ""}
          </div>
        </details>
      `).join("")}
      <div class="sy-quote">Compatibility status: Girl, somehow it WORKS. 😭💗</div>
    `);
  }

  function astrology() {
    currentScreen = "astrology";
    show(`
      ${header("Air Sign Alliance ♊", "Gemini × Libra · Why are the stars in our business? 😭")}
      <div class="sy-astro-duo">
        <div><span>♊</span><strong>SASHA</strong><small>GEMINI</small></div>
        <b>×</b>
        <div><span>♎</span><strong>YASMIN</strong><small>LIBRA</small></div>
      </div>
      <div class="sy-paper">
        <h3>Okay, so unfortunately astrology cooked here lowkeyyy.</h3>
        <p>Now I'm not saying the stars get to explain our entire friendship. BUT every time I read about Gemini and Libra friendships, I'm like... alright, why are y'all in our business? 😂</p>
      </div>
      ${airSignFacts.map((item, index) => `
        <details class="sy-compare">
          <summary><span>${String(index + 1).padStart(2, "0")}</span>${item.title}<b>＋</b></summary>
          <div class="sy-compare-body"><p>${item.text}</p></div>
        </details>
      `).join("")}
      <div class="sy-quote">Friendship chemistry: suspiciously accurate. ♡</div>
      <p class="sy-disclaimer">Just for fun, Bunny Boo. The stars don't get credit for our sisterhood. 💋</p>
    `);
  }

  function quiz() {
    currentScreen = "quiz";
    quizIndex = 0;
    quizScore = 0;
    selectedAnswer = null;
    showQuestion();
  }

  function showQuestion() {
    const q = questions[quizIndex];
    if (!q) return showQuizResult();
    show(`
      ${header("Who Knows the Duo? 🎀", "No pressure, but I AM judging a little. 😂")}
      <div class="sy-progress">QUESTION ${quizIndex + 1} OF ${questions.length}</div>
      <div class="sy-progress-track"><div style="width:${((quizIndex + 1) / questions.length) * 100}%"></div></div>
      <div class="sy-paper sy-quiz-paper">
        <h3>${q.question}</h3>
        <div class="sy-answers">
          ${q.answers.map((answer, i) => `
            <button data-sy-answer="${i}">${answer}</button>
          `).join("")}
        </div>
        <div id="sy-feedback" aria-live="polite"></div>
      </div>
    `);
  }

  function answer(index) {
    if (selectedAnswer !== null) return;
    const q = questions[quizIndex];
    if (!q || index < 0 || index >= q.answers.length) return;

    selectedAnswer = index;
    const correct = index === q.correct;
    if (correct) quizScore++;

    document.querySelectorAll("[data-sy-answer]").forEach(button => {
      button.disabled = true;
      const i = Number(button.dataset.syAnswer);
      if (i === q.correct) button.classList.add("sy-correct");
      else if (i === index) button.classList.add("sy-incorrect");
    });

    const feedback = document.querySelector("#sy-feedback");
    if (feedback) {
      feedback.innerHTML = `
        <p class="sy-answer-reaction">${correct ? "YASSSS! 💋" : "GIRLLLL 😭"} ${q.reaction}</p>
        <button class="sy-primary" data-sy="next">
          ${quizIndex === questions.length - 1 ? "See My Results 👑" : "Next Question →"}
        </button>
      `;
    }
  }

  function nextQuestion() {
    quizIndex++;
    selectedAnswer = null;
    showQuestion();
  }

  function showQuizResult() {
    currentScreen = "result";
    const perfect = quizScore === questions.length;
    show(`
      ${header("The Results Are In 👑", "The Pretty Committee has spoken.")}
      <div class="sy-result">
        <span>💋</span>
        <div class="sy-result-score">${quizScore} / ${questions.length}</div>
        <h3>${perfect ? "CERTIFIED DUO EXPERT!" : quizScore >= 4 ? "OKAYYYY, YOU KNOW US!" : "BUNNY BOO, WE NEED A MEETING. 😭"}</h3>
        <p>${perfect ? "Not a single question missed. You understood the assignment!" : "Listen, whether you got every answer or not, you're still stuck with me. The contract is binding. 😂🤎"}</p>
      </div>
      <button class="sy-primary" data-sy="quiz">Play Again ♡</button>
      <button class="sy-secondary" data-sy="menu">Back to the Duo File</button>
    `);
  }

  function certificate() {
    currentScreen = "certificate";
    show(`
      ${header("Sisterhood Certificate 👑", "Official. Exclusive. Non-refundable.")}
      <div class="sy-certificate">
        <div class="sy-cert-stars">✦ ♡ ✦</div>
        <span>THE PRETTY COMMITTEE</span>
        <h3>CERTIFICATE OF<br>SISTERHOOD</h3>
        <p>This is to officially certify that</p>
        <strong>ANGEL “SASHA”<br>×<br>JAIYAH “YASMIN”</strong>
        <p>are permanently enrolled in a friendship full of love, random conversations, bookish chaos, and unlimited sisterhood.</p>
        <div class="sy-cert-seal">👑</div>
        <em>Valid forever · No refunds · No expiration</em>
        <div class="sy-cert-signature">Signed, Your Pretty Princess 💋</div>
      </div>
      <button class="sy-primary" data-sy="print">Print / Save Certificate ♡</button>
      <p class="sy-disclaimer">You can use your browser's print menu to save it as a PDF.</p>
    `);
  }

  function letter() {
    currentScreen = "letter";
    show(`
      ${header("One Last Thing... 💌", "From your Yasmin, to my Bunny Boo.")}
      <div class="sy-paper sy-letter">
        <span class="sy-chapter">A LITTLE NOTE FOR MY GIRL ♡</span>
        <h3>Angel, GIRLLLL. 😭🤎</h3>
        <p>Imagine joining a Discord server because you wanted to talk about books and ending up with a whole sister. Like be so serious right now. 😂</p>
        <p>But that's exactly why I appreciate what we have. We didn't have to force it. Somewhere between TBB and just doing life, you became my girl.</p>
        <p>I love that we can be two completely different people and still understand each other. I love that I don't have to explain every quiet moment or prove that I care by being available every second.</p>
        <p>And I hope you know that no matter how busy life gets, I am always rooting for you. For your happiness, your peace, your goals, and everything you're working toward.</p>
        <p>Now don't get too emotional because I still plan on getting on your nerves for the foreseeable future. 😭💋</p>
        <p>Love you, Bunny Boo. I'm really glad I found TBB. But I'm even more glad I found YOU.</p>
        <div class="sy-letter-signature">Your Yasmin ♡</div>
      </div>
    `);
  }

  function handleClick(event) {
    if (!active()) return;

    const answerButton = event.target.closest("[data-sy-answer]");
    if (answerButton) {
      answer(Number(answerButton.dataset.syAnswer));
      return;
    }

    const button = event.target.closest("[data-sy]");
    if (!button) return;

    const action = button.dataset.sy;
    if (action === "menu") menu();
    else if (action === "sasha" || action === "yasmin") profile(action);
    else if (action === "story") story();
    else if (action === "comparison") comparison();
    else if (action === "astrology") astrology();
    else if (action === "quiz") quiz();
    else if (action === "next") nextQuestion();
    else if (action === "certificate") certificate();
    else if (action === "letter") letter();
    else if (action === "print") window.print();
  }

  view.addEventListener("click", handleClick);

  return { menu };
})();
