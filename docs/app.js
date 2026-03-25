const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const stepsList = document.getElementById("stepsList");
const contentMap = document.getElementById("contentMap");
const viewer = document.getElementById("viewer");
const docTitle = document.getElementById("docTitle");
const docPath = document.getElementById("docPath");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

const owner = window.location.hostname.split(".")[0] || "";
const repo = window.location.pathname.split("/").filter(Boolean)[0] || "";

async function fetchMarkdown(path) {
  const localTry = `../${path}`;
  const candidates = [
    localTry,
    `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`,
    `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`
  ];

  for (const url of candidates) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.text();
      }
    } catch (error) {
      // Try next candidate source.
    }
  }
  throw new Error("Failed to load markdown file");
}

function renderSteps(steps) {
  stepsList.innerHTML = "";
  steps.forEach((step, index) => {
    const li = document.createElement("li");
    li.style.animation = `rise 250ms ease ${index * 40}ms both`;
    li.textContent = step;
    stepsList.appendChild(li);
  });
}

function renderMap(groups) {
  contentMap.innerHTML = "";
  groups.forEach((group) => {
    const wrap = document.createElement("div");
    wrap.className = "group";

    const h3 = document.createElement("h3");
    h3.textContent = group.name;
    wrap.appendChild(h3);

    group.files.forEach((file) => {
      const btn = document.createElement("button");
      btn.className = "file-btn";
      btn.textContent = file.label;
      btn.addEventListener("click", async () => {
        docTitle.textContent = file.label;
        docPath.textContent = file.path;
        viewer.innerHTML = "<p>Loading content...</p>";
        try {
          const markdown = await fetchMarkdown(file.path);
          viewer.innerHTML = marked.parse(markdown);
          if (window.innerWidth < 980) {
            sidebar.classList.remove("open");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (error) {
          viewer.innerHTML = `<p>Could not load this file. Please verify path and branch.</p>`;
        }
      });
      wrap.appendChild(btn);
    });

    contentMap.appendChild(wrap);
  });
}

async function init() {
  try {
    const res = await fetch("content-index.json");
    const index = await res.json();
    renderSteps(index.steps || []);
    renderMap(index.groups || []);
  } catch (error) {
    viewer.innerHTML = "<p>Could not load dashboard index. Check docs/content-index.json.</p>";
  }
}

init();
