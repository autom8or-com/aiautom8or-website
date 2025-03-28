// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Industry carousel controls
    const carousel = document.querySelector('.industry-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (carousel && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: 330,
                behavior: 'smooth'
            });
        });
        
        prevBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: -330,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Create images folder and placeholder for illustration
    createImagesFolder();
});

// Animation enhancements
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.service-card, .benefit-item, .pricing-card, .process-step, .tech-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.8) {
            element.classList.add('in-view');
        }
    });
});

// Function to handle form submission (can be expanded for actual form handling)
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;
    
    // Add your form submission logic here
    // For now, just display a confirmation message
    alert(`Thank you ${name} for your message! We will get back to you at ${email} soon.`);
    form.reset();
}

// Add form submission event listener
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Placeholder function for creating images folder (this would be server-side)
function createImagesFolder() {
    // This is just a placeholder, as this would typically be done server-side
    console.log('Images folder and placeholders would be created server-side');
}
