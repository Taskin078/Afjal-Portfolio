// ===============================
// Smooth Scroll for Navbar Links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Typing Effect
// ===============================

const roles = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "DevOps Enthusiast",
    "Java Programmer"
];

const typingElement = document.querySelector(".home-text h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(typingEffect, speed);

}

typingEffect();

// ===============================
// Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// Hamburger Mobile Menu
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinksEl.classList.toggle("active");

});

navLinksEl.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinksEl.classList.remove("active");

    });

});

// ===============================
// Light / Dark Theme Toggle
// ===============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light-theme");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    } else {

        document.body.classList.remove("light-theme");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }

}

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {

    const isLight = document.body.classList.contains("light-theme");
    const newTheme = isLight ? "dark" : "light";

    applyTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);

});

// ===============================
// Scroll Progress Bar
// ===============================

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    scrollProgress.style.width = progress + "%";

});

// ===============================
// Animated Stat Counters
// ===============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const el = entry.target;
            const target = parseInt(el.getAttribute("data-target"), 10);
            let current = 0;
            const duration = 1500;
            const stepTime = Math.max(Math.floor(duration / target), 15);

            const timer = setInterval(() => {

                current++;
                el.textContent = current;

                if (current >= target) {
                    clearInterval(timer);
                    el.textContent = target;
                }

            }, stepTime);

            counterObserver.unobserve(el);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===============================
// Animated Skill Bars
// ===============================

const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const level = entry.target.getAttribute("data-level");
            const fill = entry.target.querySelector(".skill-fill");

            if (fill) {
                fill.style.width = level + "%";
            }

            skillObserver.unobserve(entry.target);

        }

    });

}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

// ===============================
// Project Detail Modal
// ===============================

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const modalGithub = document.getElementById("modalGithub");
const modalLive = document.getElementById("modalLive");

document.querySelectorAll(".btn-details").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".project-card");

        modalTitle.textContent = card.getAttribute("data-title");
        modalDesc.textContent = card.getAttribute("data-desc");
        modalTech.textContent = card.getAttribute("data-tech");
        modalGithub.href = card.getAttribute("data-github");
        modalLive.href = card.getAttribute("data-live");

        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});

function closeModal() {

    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {

    if (e.target === modalOverlay) {
        closeModal();
    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeModal();
    }

});

// ===============================
// Toast Notification Helper
// ===============================

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

const fields = {

    name: {
        input: document.getElementById("nameInput"),
        error: document.getElementById("nameError"),
        validate: v => v.trim().length >= 2,
        message: "Please enter your name (min 2 characters)."
    },

    email: {
        input: document.getElementById("emailInput"),
        error: document.getElementById("emailError"),
        validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
        message: "Please enter a valid email address."
    },

    subject: {
        input: document.getElementById("subjectInput"),
        error: document.getElementById("subjectError"),
        validate: v => v.trim().length >= 3,
        message: "Subject should be at least 3 characters."
    },

    message: {
        input: document.getElementById("messageInput"),
        error: document.getElementById("messageError"),
        validate: v => v.trim().length >= 10,
        message: "Message should be at least 10 characters."
    }

};

function validateField(field) {

    const value = field.input.value;

    if (!field.validate(value)) {

        field.input.classList.add("invalid");
        field.error.textContent = field.message;
        return false;

    } else {

        field.input.classList.remove("invalid");
        field.error.textContent = "";
        return true;

    }

}

Object.values(fields).forEach(field => {

    field.input.addEventListener("blur", () => validateField(field));

    field.input.addEventListener("input", () => {

        if (field.input.classList.contains("invalid")) {
            validateField(field);
        }

    });

});

const submitBtn = document.getElementById("submitBtn");

const EMAILJS_SERVICE_ID = "service_zwlztk7";
const EMAILJS_TEMPLATE_ID = "template_lb5mrm1";

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let allValid = true;

    Object.values(fields).forEach(field => {

        if (!validateField(field)) {
            allValid = false;
        }

    });

    if (!allValid) {

        showToast("Please fix the errors before submitting.");
        return;

    }

    if (typeof emailjs === "undefined") {

        showToast("Email service failed to load. Check your connection.");
        console.error("emailjs is not defined — check that the EmailJS <script> tag loaded before script.js.");
        return;

    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
        .then(() => {

            showToast("Thank you! Your message has been sent.");
            contactForm.reset();

        })
        .catch((error) => {

            console.error("EmailJS error:", error);
            showToast("Something went wrong. Please try again or email me directly.");

        })
        .finally(() => {

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";

        });

});

// ===============================
// Console Message
// ===============================

console.log("Welcome to Afjal Ansari Portfolio 🚀");