    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                if (navLinks.classList.contains('active')) navLinks.classList.remove('active');
            }
        });
    });
    // Contact form simple alert (demo)
    const form = document.getElementById('demoForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out! Xthena Limited will contact you soon.');
            form.reset();
        });
    }
    // Hero video fallback notice (optional, but fine)
    console.log("Ready — replace video & images in /images folder");
