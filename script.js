 class HamburgerMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navContainer = document.getElementById('navContainer');
        this.mobileClose = document.getElementById('mobileClose');
        this.body = document.body;
        this.isOpen = false;

        this.init();
    }

    init() {
        
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.mobileClose.addEventListener('click', () => this.closeMenu());
        
        // Close menu when clicking on nav links
        const navLinks = this.navContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navContainer.contains(e.target) && 
                !this.hamburger.contains(e.target) && 
                this.isOpen) {
                this.closeMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isOpen) {
                this.closeMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.hamburger.classList.add('active');
        this.navContainer.classList.add('active');
        this.body.classList.add('menu-open');
        
        // Set focus to close button for accessibility
        setTimeout(() => {
            this.mobileClose.focus();
        }, 300);
    }

    closeMenu() {
        this.isOpen = false;
        this.hamburger.classList.remove('active');
        this.navContainer.classList.remove('active');
        this.body.classList.remove('menu-open');
    }
}

// Initialize hamburger menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HamburgerMenu();
});

function orderProduct(productName) {
    alert(`Thank you for your interest in ${productName}! We'll contact you soon.`);
}

function orderProducts(productName) {
    alert(`Thank you for your interest in ${productName}! We'll contact you soon.`);
}

function changeReview(direction) {
    
    console.log(`Changing review by ${direction}`);
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.faq-icon');

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    answer.style.display = "block";
    icon.textContent = "−";
  }
};

const reviews = documents.querySelectorAll(".review-card");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentReview = 0;

function showReview(index) {
  reviews.forEach((card, i) => {
    card.classlist.remove("active");
    if (i === index) {
      card.classlist.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentReview = (currentReview-1 + reviews.length) %
  reviews.length;
  showReview(currentReview);
});

nextBtn.addEventListener("click", () => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
});