document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggleButton.textContent = savedTheme === "dark-theme" ? "🌞" : "🌜";
    }

    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        let currentTheme;
        if (body.classList.contains("dark-theme")) {
            themeToggleButton.textContent = "🌞";
            currentTheme = "dark-theme";
        } else {
            themeToggleButton.textContent = "🌜";
            currentTheme = "";
        }
        localStorage.setItem("theme", currentTheme);
    });
    const sectionsToAnimate = document.querySelectorAll('.fade-up');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const email = "plitvice@park.com"
    const subject = encodeURIComponent("New Message from Website");
    const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(mailtoLink);
  });
