document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Footer dynamic content
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        // Format the last modified date to MM/DD/YYYY
        const lastModDate = new Date(document.lastModified);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        lastModifiedElement.textContent = lastModDate.toLocaleDateString('en-US', options);
    }
});