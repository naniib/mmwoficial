// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            // Here you would implement actual search functionality
            // For now, we'll just show an alert
            alert(`Searching for: ${query}`);
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Smooth scrolling for anchor links
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

// Add glow effect on card hover
document.addEventListener('DOMContentLoaded', function() {
    const cryptoCards = document.querySelectorAll('.crypto-card');
    
    cryptoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Simulate real-time price updates
function updatePrices() {
    const priceElements = document.querySelectorAll('.price');
    const changeElements = document.querySelectorAll('.change');
    
    priceElements.forEach((priceEl, index) => {
        const currentPrice = parseFloat(priceEl.textContent);
        const changeEl = changeElements[index];
        
        // Simulate small price fluctuations
        const fluctuation = (Math.random() - 0.5) * 0.02; // ±1% max change
        const newPrice = currentPrice * (1 + fluctuation);
        
        // Update price with animation
        priceEl.style.transition = 'color 0.3s ease';
        priceEl.textContent = newPrice.toFixed(currentPrice < 1 ? 4 : 2);
        
        // Update change percentage
        const changePercent = (fluctuation * 100).toFixed(1);
        const changeText = changePercent > 0 ? `+${changePercent}%` : `${changePercent}%`;
        
        // Update change class and text
        changeEl.className = 'change';
        if (fluctuation > 0.005) {
            changeEl.classList.add('positive');
            priceEl.style.color = '#00ff88';
        } else if (fluctuation < -0.005) {
            changeEl.classList.add('negative');
            priceEl.style.color = '#ff6b6b';
        } else {
            changeEl.classList.add('neutral');
            priceEl.style.color = '#ffa726';
        }
        
        changeEl.textContent = changeText;
        
        // Reset price color after animation
        setTimeout(() => {
            priceEl.style.color = '#ffffff';
        }, 1000);
    });
}

// Update prices every 5 seconds
setInterval(updatePrices, 5000);

// Add loading animation for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.crypto-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Add click handlers for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // CTA link handler
    const ctaLink = document.querySelector('.cta-link');
    ctaLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🚀 Ready to pump? Feature coming soon!');
    });
    
    // Category click handlers
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            console.log(`Filtering by category: ${categoryName}`);
            // Here you would implement category filtering
        });
    });
    
    // Card click handlers
    const cryptoCards = document.querySelectorAll('.crypto-card');
    cryptoCards.forEach(card => {
        card.addEventListener('click', function() {
            const coinName = this.querySelector('.coin-name').textContent;
            console.log(`Viewing details for: ${coinName}`);
            // Here you would implement detailed view
        });
    });
});