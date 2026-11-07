const pages = [
  ["About Hogwarts", "index.html"],
  ["The Four Houses", "houses.html"],
  ["Classes and Courses", "classes.html"],
  ["Staff Directory", "staff.html"],
  ["Student Login", "login.html"],
  ["Transportation", "transportation.html"]
];

const header = document.querySelector("#site-header");
if (header) {
  header.innerHTML = `
    <div class="brand">
      <div class="crest">School of Witchcraft and Wizardry</div>
      <h1>Hogwarts</h1>
      <p>Draco Dormiens Nunquam Titillandus</p>
    </div>
    <div class="nav-wrap">
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
        ☰ Menu
      </button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        ${pages.map(([label, href]) => {
          const current = document.body.dataset.page === href;
          return `<a href="${href}" ${current ? 'aria-current="page"' : ""}>${label}</a>`;
        }).join("")}
      </nav>
    </div>
  `;
  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const footer = document.querySelector("#site-footer");
if (footer) {
  footer.innerHTML = `For any questions, please contact via owl to Hogwarts`;
}

const loginForm = document.querySelector("#student-login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#login-message");
    message.textContent = "Demo only: student authentication is not connected.";
  });
}
