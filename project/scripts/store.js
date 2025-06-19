document.addEventListener('DOMContentLoaded', function() {
    const bookstoreName = "Independent Bookstore";
    const studentName = "Oyegoke Cornelius Oyetunji"; // Replace with your name
    const copyrightYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    const footerContent = `
        <div class="social-icons">
            <a href="#" aria-label="Facebook"><img src="https://via.placeholder.com/24/fff/000?text=F" alt="Facebook"></a>
            <a href="#" aria-label="Twitter"><img src="https://via.placeholder.com/24/fff/000?text=T" alt="Twitter"></a>
            <a href="#" aria-label="Instagram"><img src="https://via.placeholder.com/24/fff/000?text=I" alt="Instagram"></a>
        </div>
        <p>&copy; ${copyrightYear} ${bookstoreName}. All rights reserved.</p>
        <p>Student: ${studentName}</p>
        <p>Last Modified: ${lastModified}</p>
    `;

    // Select all elements with the ID 'footer-content' and update them
    const footerDivs = document.querySelectorAll('#footer-content');
    footerDivs.forEach(div => {
        div.innerHTML = footerContent;
    });

    console.log("Interactive map placeholder loaded. For full functionality, integrate a map API.");
});