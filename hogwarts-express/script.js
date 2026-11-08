const expressNav = [
  { label: "Departure", href: "departure.html", page: "departure" },
  { label: "Boarding Instructions", href: "boarding.html", page: "boarding" },
  { label: "Instructions for Prefects", href: "prefects.html", page: "prefects" },
  { label: "Employee Login", href: "employee-login.html", page: "employee-login" }
];

function buildExpressHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const currentPage = document.body.dataset.page || "";

  header.innerHTML = `
    <div class="express-header-inner">
      <a class="express-brand" href="departure.html" aria-label="Hogwarts Express home">
        <span class="express-emblem" aria-hidden="true">H</span>
        <span class="express-brand-copy">
          <strong>Hogwarts Express</strong>
          <small>Magical Railway &amp; Transportation</small>
        </span>
      </a>
      <button class="express-menu-toggle" type="button"
              aria-expanded="false" aria-controls="express-navigation">
        <span></span><span></span><span></span>
        <span class="sr-only">Toggle navigation</span>
      </button>
      <nav class="express-nav" id="express-navigation" aria-label="Main navigation">
        ${expressNav.map(item => `
          <a href="${item.href}"
             ${currentPage === item.page ? 'aria-current="page" class="active"' : ""}>
            ${item.label}
          </a>
        `).join("")}
      </nav>
    </div>
  `;

  const toggle = header.querySelector(".express-menu-toggle");
  const nav = header.querySelector(".express-nav");
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });
}

function buildExpressFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="express-footer-emblem">H</div>
    <h2>Hogwarts Express</h2>
    <p>Connecting the wizarding world since 1830.</p>
    <small>Hogwarts School of Witchcraft and Wizardry · Magical Railway Services</small>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  buildExpressHeader();
  buildExpressFooter();

  const loginForm = document.getElementById("employee-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();

      const errorMessage = document.getElementById("login-error");
      errorMessage.textContent = "Incorrect username or password.";
    });
  }
});
