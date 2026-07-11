"use strict";

// ================================
// DOM Ready
// ================================
document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // Mobile Menu
    // ================================
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close menu after clicking link
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", e => {
            if (
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navMenu.classList.remove("active");
            }
        });
    }

    // ================================
    // Sticky Header
    // ================================
    const header = document.querySelector("header");

    if (header) {
        const onScroll = () => {
            header.classList.toggle("sticky", window.scrollY > 50);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);
    }

    // ================================
    // Active Navigation
    // ================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const updateActiveLink = () => {

        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {
                link.classList.add("active");
            }

        });

    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);

    // ================================
    // Fade-up Animation
    // ================================
    const animatedItems = document.querySelectorAll(
        ".feature,.property-card,.agent-card,.testimonial,.blog-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");
                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        animatedItems.forEach(item => observer.observe(item));

    }

    // ================================
    // Smooth Scroll Offset
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                80;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

        });

    });

});