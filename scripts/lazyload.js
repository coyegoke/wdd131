document.addEventListener('DOMContentLoaded', () => {
    // Footer dynamic content
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Lazy Loading and Fade-in Animation for Images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    // Function to replace placeholder src with data-src and add 'loaded' class
    const loadAndAnimateImage = (img) => {
        img.src = img.dataset.src; // Replace placeholder with actual image
        img.onload = () => {
            img.classList.add('loaded'); // Add class when image fully loads
        };
        // Fallback for images that might already be in viewport or cached before Intersection Observer kicks in
        // or if loading="lazy" is not fully supported
        if (img.complete) {
            img.classList.add('loaded');
        }
    };

    // Check if Intersection Observer is supported (for robust lazy loading)
    if ('IntersectionObserver' in window) {
        let lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadAndAnimateImage(img);
                    observer.unobserve(img); // Stop observing once loaded
                }
            });
        });

        lazyImages.forEach(img => {
            lazyLoadObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        // (Native loading="lazy" should handle most cases, but this covers older browsers if needed)
        lazyImages.forEach(loadAndAnimateImage);
    }
});