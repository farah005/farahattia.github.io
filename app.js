(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const editMode = new URLSearchParams(location.search).has("edit");

  let lang = "fr";
  try { lang = localStorage.getItem("lang") || "fr"; } catch (e) {}
  if (!window.I18N[lang]) lang = "fr";

  let projects = JSON.parse(JSON.stringify(window.PROJECTS));
  if (editMode) {
    try { const d = localStorage.getItem("draftProjects"); if (d) projects = JSON.parse(d); } catch (e) {}
  }
  let editingId = null;

  const tr = (o) => (o && (o[lang] || o.fr)) || "";
  const saveDraft = () => { try { localStorage.setItem("draftProjects", JSON.stringify(projects)); } catch (e) {} };

  function renderProjects() {
    $("#projectList").innerHTML = projects.map((p) => `
      <article class="border-t-2 border-ink pt-5">
        <h3 class="font-display font-bold text-xl leading-snug">${esc(tr(p.title))}</h3>
        <p class="mt-2 leading-relaxed">${esc(tr(p.desc))}</p>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${(p.tags || []).map((g) => `<span class="bg-mist px-2.5 py-1 rounded">${esc(g)}</span>`).join("")}</div>
        ${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener" class="inline-block mt-4 font-semibold text-brand underline underline-offset-4 hover:text-ink">${esc(window.I18N[lang].viewCode)}</a>` : ""}
        ${editMode ? `<div class="mt-4 flex gap-4 text-sm font-semibold">
          <button data-act="edit" data-id="${esc(p.id)}" class="underline underline-offset-4 hover:text-brand">Modifier</button>
          <button data-act="del" data-id="${esc(p.id)}" class="underline underline-offset-4 text-red-700 hover:text-red-900">Supprimer</button></div>` : ""}
      </article>`).join("");
  }

  function renderSkills() {
    $("#skillList").innerHTML = window.SKILLS.map((s) => `
      <div class="py-4 sm:grid sm:grid-cols-[12rem_1fr] gap-4">
        <dt class="font-semibold">${esc(tr(s.label))}</dt><dd class="text-ink/80">${esc(tr(s.value))}</dd>
      </div>`).join("");
  }

  function applyLang() {
    const t = window.I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { if (t[el.dataset.i18n] != null) el.textContent = t[el.dataset.i18n]; });
    document.title = t.docTitle;
    $('meta[name="description"]').setAttribute("content", t.docDesc);
    $("#photo").alt = t.photoAlt;
    const b = $("#langBtn");
    b.textContent = lang === "fr" ? "EN" : "FR";
    b.setAttribute("aria-label", t.langBtnLabel);
    renderProjects();
    renderSkills();
  }

  $("#langBtn").addEventListener("click", () => {
    lang = lang === "fr" ? "en" : "fr";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  });

  // Menu mobile
  const btn = $("#menuBtn"), menu = $("#mobileMenu");
  btn.addEventListener("click", () => { const open = menu.classList.toggle("hidden") === false; btn.setAttribute("aria-expanded", open); });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.add("hidden"); btn.setAttribute("aria-expanded", "false"); } });
  $("#year").textContent = new Date().getFullYear();

  // Mode édition (index.html?edit)
  if (editMode) {
    const inp = "w-full border border-ink/30 rounded px-3 py-2 bg-white";
    const panel = $("#editPanel");
    panel.classList.remove("hidden");
    panel.innerHTML = `
      <div class="border-2 border-sun bg-sun/10 rounded-md p-5">
        <p class="font-semibold">Mode édition</p>
        <p class="text-sm mt-1">Vos changements restent dans ce navigateur. Pour les publier, cliquez sur « Exporter projects.js » puis remplacez le fichier <code>projects.js</code> de votre site.</p>
        <form id="projForm" class="mt-4 grid sm:grid-cols-2 gap-3">
          <label class="text-sm font-medium">Titre (français)<input id="fTf" required class="${inp}"></label>
          <label class="text-sm font-medium">Titre (anglais)<input id="fTe" class="${inp}"></label>
          <label class="text-sm font-medium">Description (français)<textarea id="fDf" required rows="3" class="${inp}"></textarea></label>
          <label class="text-sm font-medium">Description (anglais)<textarea id="fDe" rows="3" class="${inp}"></textarea></label>
          <label class="text-sm font-medium">Technologies (séparées par des virgules)<input id="fTags" class="${inp}" placeholder="React, Docker"></label>
          <label class="text-sm font-medium">Lien GitHub ou démo (facultatif)<input id="fUrl" type="url" class="${inp}" placeholder="https://github.com/..."></label>
          <div class="sm:col-span-2 flex flex-wrap gap-3">
            <button id="fSubmit" type="submit" class="bg-brand text-white font-semibold px-4 py-2 rounded-md hover:bg-ink">Ajouter le projet</button>
            <button id="fCancel" type="button" class="hidden border-2 border-ink font-semibold px-4 py-2 rounded-md">Annuler la modification</button>
            <button id="fExport" type="button" class="border-2 border-brand text-brand font-semibold px-4 py-2 rounded-md hover:bg-brand hover:text-white">Exporter projects.js</button>
            <button id="fReset" type="button" class="text-sm underline underline-offset-4 ml-auto">Annuler tous mes changements</button>
          </div>
        </form>
      </div>`;
    const f = (id) => $("#" + id);
    const resetForm = () => { $("#projForm").reset(); editingId = null; f("fSubmit").textContent = "Ajouter le projet"; f("fCancel").classList.add("hidden"); };

    $("#projForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const tf = f("fTf").value.trim(), df = f("fDf").value.trim();
      const p = {
        id: editingId || "p" + Date.now(),
        title: { fr: tf, en: f("fTe").value.trim() || tf },
        desc: { fr: df, en: f("fDe").value.trim() || df },
        tags: f("fTags").value.split(",").map((s) => s.trim()).filter(Boolean),
        url: f("fUrl").value.trim()
      };
      if (editingId) projects = projects.map((x) => (x.id === editingId ? p : x));
      else projects.unshift(p);
      saveDraft(); resetForm(); renderProjects();
    });
    f("fCancel").addEventListener("click", resetForm);
    f("fExport").addEventListener("click", () => {
      const txt = "window.PROJECTS = " + JSON.stringify(projects, null, 2) + ";\n";
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([txt], { type: "text/javascript" }));
      a.download = "projects.js"; a.click(); URL.revokeObjectURL(a.href);
    });
    f("fReset").addEventListener("click", () => {
      if (confirm("Annuler tous les changements non exportés ?")) { try { localStorage.removeItem("draftProjects"); } catch (e) {} location.reload(); }
    });
    $("#projectList").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-act]"); if (!b) return;
      const p = projects.find((x) => x.id === b.dataset.id); if (!p) return;
      if (b.dataset.act === "del") {
        if (confirm("Supprimer ce projet ?")) { projects = projects.filter((x) => x.id !== p.id); saveDraft(); renderProjects(); }
      } else {
        editingId = p.id;
        f("fTf").value = p.title.fr || ""; f("fTe").value = p.title.en || "";
        f("fDf").value = p.desc.fr || ""; f("fDe").value = p.desc.en || "";
        f("fTags").value = (p.tags || []).join(", "); f("fUrl").value = p.url || "";
        f("fSubmit").textContent = "Enregistrer les modifications"; f("fCancel").classList.remove("hidden");
        panel.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  applyLang();
})();
