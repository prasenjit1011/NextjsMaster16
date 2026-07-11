// ================================
// Mobile Menu
// ================================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// ================================
// Sticky Navbar
// ================================
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});

// ================================
// Active Navigation
// ================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
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

// ================================
// Property Search Filter
// ================================
const searchInput = document.querySelector("#search");
const propertyCards = document.querySelectorAll(".property-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        propertyCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value)
                ? "block"
                : "none";

        });

    });

}

// ================================
// Counter Animation
// ================================
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ================================
// Fade In Animation
// ================================
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});

// ================================
// Scroll To Top Button
// ================================
const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ================================
// Testimonial Slider
// ================================
const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(index) {

    testimonials.forEach((item) => {

        item.style.display = "none";

    });

    if (testimonials.length > 0) {

        testimonials[index].style.display = "block";

    }

}

if (testimonials.length > 0) {

    showTestimonial(testimonialIndex);

    setInterval(() => {

        testimonialIndex++;

        if (testimonialIndex >= testimonials.length) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    }, 5000);

}

// ================================
// Property Favorite Button
// ================================
document.querySelectorAll(".favorite-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {

            btn.innerHTML = "❤";

        } else {

            btn.innerHTML = "♡";

        }

    });

});

// ================================
// Newsletter Form
// ================================
const newsletter = document.querySelector("#newsletterForm");

if (newsletter) {

    newsletter.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}