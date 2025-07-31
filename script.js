// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const galleryItems = document.querySelectorAll('.gallery-item');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Married Since Timer
function updateMarriedTimer() {
    // Wedding date: February 22, 2023
    const weddingDate = new Date('2023-02-22T00:00:00');
    const now = new Date();
    
    // Calculate the difference more accurately using Date objects
    let years = now.getFullYear() - weddingDate.getFullYear();
    let months = now.getMonth() - weddingDate.getMonth();
    let days = now.getDate() - weddingDate.getDate();
    let hours = now.getHours() - weddingDate.getHours();

    // Adjust for negative values
    if (hours < 0) {
        hours += 24;
        days--;
    }
    
    if (days < 0) {
        // Get days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    
    if (months < 0) {
        months += 12;
        years--;
    }

    // Ensure non-negative values
    years = Math.max(0, years);
    months = Math.max(0, months);
    days = Math.max(0, days);
    hours = Math.max(0, hours);

    // Update the display
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    
    if (yearsElement) yearsElement.textContent = years.toString();
    if (monthsElement) monthsElement.textContent = months.toString();
    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    
    console.log(`Married for: ${years} years, ${months} months, ${days} days, ${hours} hours`);
}

// Update married timer every minute (60000 milliseconds) for more frequent updates
setInterval(updateMarriedTimer, 60000);

// Ensure timer starts after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting married timer...');
    updateMarriedTimer(); // Initial call
});

// Also call immediately in case DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateMarriedTimer);
} else {
    updateMarriedTimer();
}

// Gallery Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                item.classList.add('hidden');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Image Modal Functionality
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-img');
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling  
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00b894' : type === 'error' ? '#e17055' : '#74b9ff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 2001;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
        word-wrap: break-word;
    `;

    // Add animation keyframes if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .notification-close:hover {
                opacity: 0.7;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.story-item, .event-card, .family-member, .friend-member');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// Auto-resize images function
function autoResizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            const aspectRatio = width / height;
            
            // Remove existing size classes
            this.classList.remove('img-small', 'img-medium', 'img-large', 'img-xl', 'img-portrait', 'img-landscape', 'img-square', 'img-cover');
            
            // Determine appropriate size class based on aspect ratio and dimensions
            if (aspectRatio === 1) {
                // Square images
                if (width <= 200) this.classList.add('img-small');
                else if (width <= 400) this.classList.add('img-square');
                else this.classList.add('img-large');
            } else if (aspectRatio < 0.8) {
                // Portrait images
                this.classList.add('img-portrait');
            } else if (aspectRatio > 1.5) {
                // Landscape images
                this.classList.add('img-landscape');
            } else {
                // Standard images
                if (width <= 300) this.classList.add('img-small');
                else if (width <= 500) this.classList.add('img-medium');
                else if (width <= 700) this.classList.add('img-large');
                else this.classList.add('img-xl');
            }
        });
    });
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    autoResizeImages();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingElements = document.querySelector('.floating-elements');
    
    if (heroContent && floatingElements) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        floatingElements.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Touch gestures for mobile gallery
let startX = 0;
let endX = 0;

if (modal) {
    modal.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    });

    modal.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (endX < startX - 50) {
            // Swipe left - could implement next/previous image functionality
            console.log('Swiped left');
        }
        if (endX > startX + 50) {
            // Swipe right - could implement next/previous image functionality
            console.log('Swiped right');
        }
        if (Math.abs(endX - startX) < 10) {
            // Tap - close modal
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Share functionality
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'Nidhi & Chandan Wedding',
            text: 'Check out our beautiful wedding journey!',
            url: window.location.href
        });
    } else {
        // Fallback - copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Website URL copied to clipboard!', 'success');
        });
    }
}

// Add loading states
function showLoading() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;
    `;
    
    document.body.appendChild(loadingOverlay);
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}

// Performance optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(() => {
            if (originalScrollHandler) originalScrollHandler();
        });
    });
}

// Initialize performance optimizations
optimizePerformance();

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // Could implement error reporting here
});

// Service Worker registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Dynamic Friends Gallery Loader
let friendsGalleryLoaded = false; // Prevent multiple loads

function loadFriendsGallery() {
    const friendsGallery = document.getElementById('friendsGallery');
    if (!friendsGallery || friendsGalleryLoaded) return;
    
    friendsGalleryLoaded = true; // Mark as loaded to prevent duplicates
    
    // Clear any existing content
    friendsGallery.innerHTML = '';

    // Array of potential image names (start with many possibilities)
    const imageNumbers = Array.from({ length: 50 }, (_, i) => i + 1); // Check for image1.jpg to image50.jpg
    let loadedImages = 0;
    let loadPromises = [];

    imageNumbers.forEach(num => {
        const imagePath = `images/friends/groups/image${num}.jpg`;
        
        // Create a promise for each image check
        const imagePromise = new Promise((resolve, reject) => {
            const testImg = new Image();
            testImg.onload = function() {
                // Image exists, create the gallery item
                const friendPhoto = document.createElement('div');
                friendPhoto.className = 'friend-photo';
                
                friendPhoto.innerHTML = `
                    <img src="${imagePath}" alt="Friends and Relatives Group ${num}" class="friend-img">
                    <div class="friend-overlay">
                        <span class="friend-caption">Friends & Relatives</span>
                    </div>
                `;
                
                friendsGallery.appendChild(friendPhoto);
                loadedImages++;

                // Add click event for modal (if modal exists)
                const img = friendPhoto.querySelector('.friend-img');
                if (modal && modalImg) {
                    friendPhoto.addEventListener('click', () => {
                        modal.style.display = 'block';
                        modalImg.src = img.src;
                        modalImg.alt = img.alt;
                        document.body.style.overflow = 'hidden';
                    });
                }
                resolve(num);
            };
            
            testImg.onerror = function() {
                // Image doesn't exist, skip it
                reject(num);
            };
            
            testImg.src = imagePath;
        });
        
        loadPromises.push(imagePromise);
    });

    // Wait for all image checks to complete
    Promise.allSettled(loadPromises).then(() => {
        console.log(`Loaded ${loadedImages} friends photos dynamically! 📸`);
        if (loadedImages === 0) {
            friendsGallery.innerHTML = '<p style="text-align: center; color: #888; grid-column: 1/-1;">No photos found. Add images as image1.jpg, image2.jpg, etc. in the images/friends/groups/ folder.</p>';
        }
    });
}

// Initialize friends gallery when DOM is loaded (single event listener)
document.addEventListener('DOMContentLoaded', loadFriendsGallery);

console.log('Wedding website JavaScript loaded successfully! 🎉');
