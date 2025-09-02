function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 100;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Navigation functionality
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show selected section
            document.getElementById(sectionId).classList.add('active');

            // Update navigation links
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');

            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const nav = document.querySelector('nav');
            const navLinks = document.getElementById('navLinks');
            if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

    function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Hide menu and set active link on click
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active from all
            links.forEach(l => l.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            // Hide menu (only on mobile)
            navLinks.classList.remove('active');
        });
    });
});