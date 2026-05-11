// ===== Page map =====
const pages = {
  home:     "page/main/lore.html",
  charge:   "page/Chargecase/case.html",
  student:  "page/potion/potion.html",
  monsters: "page/monsters/monsters.html",
};

// ===== Load page with active state + loading animation =====
function loadPage(page) {
  const viewer  = document.getElementById("viewer");
  const content = document.querySelector(".content");

  if (!pages[page]) return;

  // Swap active class on sidebar items
  document.querySelectorAll(".sidebar li").forEach(el => {
    el.classList.toggle("active", el.dataset.page === page);
  });

  // Flash loading indicator
  content.classList.remove("loading");
  void content.offsetWidth; // reflow to restart animation
  content.classList.add("loading");

  viewer.src = pages[page];

  viewer.addEventListener("load", () => {
    content.classList.remove("loading");
  }, { once: true });
}

// ===== Init: mark first item active + inject footer =====
document.addEventListener("DOMContentLoaded", () => {
  // Attach data-page to each li
  const items = document.querySelectorAll(".sidebar li");
  const keys  = Object.keys(pages);
  items.forEach((li, i) => {
    if (keys[i]) li.dataset.page = keys[i];
  });

  // Mark home active on load
  const homeItem = document.querySelector('[data-page="home"]');
  if (homeItem) homeItem.classList.add("active");

  // Inject sidebar footer
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    const footer = document.createElement("div");
    footer.className = "sidebar-footer";
    footer.innerHTML = `
      <span><span class="status-dot"></span>SYSTEM ONLINE</span>
      <span>v2.4.1 · CYNTIA OS</span>
    `;
    sidebar.appendChild(footer);
  }
});
