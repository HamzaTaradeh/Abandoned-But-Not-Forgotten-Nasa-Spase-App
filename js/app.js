(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const root = document.body.dataset.root || "";
  const page = document.body.dataset.page || "home";
  let lang = localStorage.getItem("abnf-lang") || "en";
  if (!window.TRANSLATIONS[lang]) lang = "en";

  const t = () => window.TRANSLATIONS[lang];
  const url = (path) => root + path;
  const text = (key) => key.split(".").reduce((value, part) => value?.[part], t());
  const interpolate = (value, values = {}) => value.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
  const artifactText = (artifact) => lang === "ar" ? (window.ARTIFACT_TRANSLATIONS[artifact.id] || artifact) : artifact;

  function applyStaticTranslations() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t().documentTitle[page] || t().documentTitle.home;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = text(element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = text(element.dataset.i18nHtml);
      if (typeof value === "string") element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = text(element.dataset.i18nPlaceholder);
      if (typeof value === "string") element.placeholder = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = text(element.dataset.i18nAria);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const value = text(element.dataset.i18nTitle);
      if (typeof value === "string") element.title = value;
    });
  }

  function header() {
    const names = t().nav;
    const links = [
      ["index.html", names[0], "home"],
      ["pages/moon.html", names[1], "moon"],
      ["pages/mars.html", names[2], "mars"],
      ["pages/beyond.html", names[3], "beyond"],
      ["pages/timeline.html", names[4], "timeline"],
      ["pages/about.html", names[5], "about"]
    ];
    const host = $("#site-header");
    if (!host) return;
    host.innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="${url("index.html")}"><span class="brand-mark">✦</span><span>ABANDONED<br><small style="color:var(--muted);font-size:9px;letter-spacing:2px">BUT NOT FORGOTTEN</small></span></a><nav class="nav-links" id="nav-links" aria-label="${t().a11y.mainNav}">${links.map(([href, name, key]) => `<a class="${page === key ? "active" : ""}" href="${url(href)}">${name}</a>`).join("")}</nav><div class="nav-tools"><button class="lang-btn" id="lang-btn" type="button">${lang === "en" ? "العربية" : "English"}</button><button class="menu-btn" id="menu-btn" type="button" aria-label="${lang === "ar" ? "القائمة" : "Menu"}">☰</button></div></div></header>`;
    $("#lang-btn").onclick = () => {
      lang = lang === "en" ? "ar" : "en";
      localStorage.setItem("abnf-lang", lang);
      render();
    };
    $("#menu-btn").onclick = () => $("#nav-links").classList.toggle("open");
  }

  function footer() {
    const host = $("#site-footer");
    if (host) host.innerHTML = `<footer class="site-footer"><div class="container footer-inner"><span>✦ ABANDONED BUT NOT FORGOTTEN · NASA SPACE APPS CHALLENGE</span><span>${t().footer}</span></div></footer>`;
  }

  function card(artifact) {
    const a = artifactText(artifact);
    const imagePath = artifact.image ? url("images/" + artifact.image) : "";
    const visual = artifact.image
      ? `<img class="artifact-image" src="${imagePath}" alt="${a.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="machine-icon" style="display:none">${artifact.icon}</span>`
      : `<span class="machine-icon">${artifact.icon}</span>`;

    return `
      <article class="artifact-card">
        <div class="card-art">${visual}</div>
        <div class="card-body">
          <div class="card-meta">
            <span class="tag">${t().locations[artifact.location]}</span>
            <span class="status ${artifact.status}">${t().statuses[artifact.status]}</span>
          </div>
          <h3>${a.name}</h3>
          <p>${a.summary}</p>
          <div class="card-bottom">
            <span>${artifact.year} · ${a.site}</span>
            <a href="${url("pages/artifact.html?id=" + artifact.id)}">${t().common.details} ↗</a>
          </div>
        </div>
      </article>
    `;
  }

  function explorer() {
    const grid = $("#artifact-grid");
    if (!grid) return;
    const draw = () => {
      const search = $("#search-input");
      const loc = $("#location-filter");
      const status = $("#status-filter");
      const sort = $("#sort-filter");
      if (!search || !loc || !status || !sort) return;
      const query = search.value.trim().toLocaleLowerCase(lang === "ar" ? "ar" : "en");
      const results = window.ARTIFACTS.filter((artifact) => {
        const translated = artifactText(artifact);
        const searchable = [artifact.name, artifact.summary, artifact.site, translated.name, translated.summary, translated.site].join(" ").toLocaleLowerCase(lang === "ar" ? "ar" : "en");
        return (loc.value === "all" || artifact.location === loc.value) &&
          (status.value === "all" || artifact.status === status.value) && searchable.includes(query);
      });
      results.sort((a, b) => sort.value === "year" ? a.year - b.year : artifactText(a).name.localeCompare(artifactText(b).name, lang === "ar" ? "ar" : "en"));
      grid.innerHTML = results.map(card).join("");
      const count = $("#result-count");
      if (count) count.textContent = interpolate(t().explorer.result, { shown: results.length, total: window.ARTIFACTS.length });
      const empty = $("#empty-state");
      if (empty) empty.classList.toggle("hidden", results.length > 0);
    };
    ["search-input", "location-filter", "status-filter", "sort-filter"].forEach((id) => {
      const control = $("#" + id);
      if (control) control.addEventListener("input", draw);
    });
    draw();
  }

  function quiz() {
    const host = $("#quiz-card");
    if (!host) return;
    let index = 0;
    const answers = [];
    function show() {
      const sourceQuestion = window.QUIZ[index];
      if (index >= window.QUIZ.length) {
        const score = answers.reduce((total, answer, i) => total + (answer === window.QUIZ[i].a ? 1 : 0), 0);
        host.innerHTML = `<h3 class="quiz-question">${t().quiz.complete}</h3><p>${t().quiz.score} <strong>${score} / ${window.QUIZ.length}</strong>.</p><button class="btn btn-primary" id="restart" type="button">${t().quiz.tryAgain}</button>`;
        $("#restart", host).onclick = () => { index = 0; answers.length = 0; show(); };
        return;
      }
      const question = lang === "ar" ? window.QUIZ_TRANSLATIONS[index] : sourceQuestion;
      const percent = Math.round(index / window.QUIZ.length * 100);
      host.innerHTML = `<div class="card-meta"><span class="tag">${interpolate(t().quiz.question, { n: index + 1, total: window.QUIZ.length })}</span><span class="result-count">${interpolate(t().quiz.progress, { percent })}</span></div><h3 class="quiz-question">${question.q}</h3><div class="quiz-options">${question.o.map((option, i) => `<button class="quiz-option ${answers[index] === i ? "selected" : ""}" data-answer="${i}" type="button">${option}</button>`).join("")}</div><div class="quiz-actions"><button class="btn btn-primary" id="next" type="button" ${answers[index] === undefined ? "disabled" : ""}>${index === window.QUIZ.length - 1 ? t().quiz.finish : t().quiz.next}</button><span class="quiz-feedback" id="quiz-feedback" aria-live="polite"></span></div>`;
      host.querySelectorAll("[data-answer]").forEach((button) => {
        button.onclick = () => { answers[index] = Number(button.dataset.answer); show(); };
      });
      $("#next", host).onclick = () => {
        if (answers[index] === undefined) return;
        const feedback = $("#quiz-feedback", host);
        const explanation = lang === "ar" ? window.QUIZ_TRANSLATIONS[index].e : sourceQuestion.e;
        feedback.textContent = (answers[index] === sourceQuestion.a ? t().quiz.correct : t().quiz.incorrect) + " " + explanation;
        index++;
        window.setTimeout(show, 1400);
      };
    }
    show();
  }

  function listing(location) {
    const host = $("#listing");
    if (host) host.innerHTML = window.ARTIFACTS.filter((artifact) => artifact.location === location).map(card).join("");
  }

  function detail() {
    const host = $("#detail");
    if (!host) return;
    const id = new URLSearchParams(location.search).get("id");
    const artifact = window.ARTIFACTS.find((item) => item.id === id);
    if (!artifact) {
      host.innerHTML = `<p>${t().common.notFound} <a href="${url("index.html")}">${t().explorer.title}</a>.</p>`;
      return;
    }
    const a = artifactText(artifact);
    const sources = (window.ARTIFACT_SOURCES?.[artifact.id] || []).map(([label, href]) => `<li><a class="text-link" href="${href}" target="_blank" rel="noopener noreferrer">${label} ↗</a></li>`).join("");
    const detailVisual = artifact.image
      ? `<img class="detail-image" src="${url("images/" + artifact.image)}" alt="${a.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="detail-fallback" style="display:none">${artifact.icon}</span>`
      : `<span class="detail-fallback">${artifact.icon}</span>`;
    host.innerHTML = `<div class="detail-layout"><div class="detail-panel"><div class="detail-visual">${detailVisual}</div><div class="card-meta" style="margin-top:18px"><span class="tag">${t().locations[artifact.location]}</span><span class="status ${artifact.status}">${t().statuses[artifact.status]}</span></div><h2>${a.name}</h2><p style="color:var(--muted)">${a.summary}</p><p><strong>${t().common.referenceYear}:</strong> ${artifact.year}<br><strong>${t().common.location}:</strong> ${a.site}</p><p class="form-note">${lang === "ar" ? "تصف الحالة وضع الجسم بعد انتهاء مهمته؛ ولا تعني بالضرورة أنه يتحرك بحرية في الفضاء." : "Status describes the object after its mission; it does not necessarily mean it is freely drifting in space."}</p><h3>${t().common.sources}</h3><ul class="source-list">${sources}</ul></div><div class="content-panel"><span class="eyebrow">${t().common.storyLabel}</span><h2>${t().common.fourChapters}</h2><div class="story-chapters">${a.story.map((chapter, i) => `<article class="chapter"><h3>${i + 1}. ${t().chapters[i]}</h3><p>${chapter}</p></article>`).join("")}</div><button class="btn btn-outline" id="speak" type="button" style="margin-top:18px">${t().common.readAloud}</button></div></div>`;
    $("#speak").onclick = () => {
      if (!("speechSynthesis" in window)) { alert(t().common.speechUnsupported); return; }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(a.name + ". " + a.story.join(" "));
      utterance.lang = lang === "ar" ? "ar" : "en-US";
      window.speechSynthesis.speak(utterance);
    };
  }

  function timeline() {
    const host = $("#timeline");
    if (!host) return;
    host.innerHTML = [...window.ARTIFACTS].sort((a, b) => a.year - b.year).map((artifact) => {
      const a = artifactText(artifact);
      return `<article class="timeline-item"><time>${artifact.year} · ${t().locations[artifact.location]}</time><h3>${a.name}</h3><p>${a.summary}</p><a class="text-link" href="${url("pages/artifact.html?id=" + artifact.id)}">${t().common.explore} ←</a></article>`;
    }).join("");
  }

  function about() {
    const form = $("#contact-form");
    if (form) form.onsubmit = (event) => {
      event.preventDefault();
      const message = $("#form-message");
      if (message) { message.textContent = t().common.thankYou; message.dataset.formSubmitted = "true"; }
      form.reset();
    };
  }

  function render() {
    applyStaticTranslations();
    header();
    footer();
    if (page === "home") { explorer(); quiz(); }
    if (["moon", "mars", "beyond"].includes(page)) listing(page);
    if (page === "details") detail();
    if (page === "timeline") timeline();
    if (page === "about") {
      const formMessage = $("#form-message");
      if (formMessage?.dataset.formSubmitted === "true") formMessage.textContent = t().common.thankYou;
      about();
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
