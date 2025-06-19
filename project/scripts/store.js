document.addEventListener('DOMContentLoaded', function() {
    const bookstoreName = "Independent Bookstore";
    const studentName = "Oyegoke Cornelius Oyetunji"; // Replace with your name
    const copyrightYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    const footerContent = `
        <div class="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><img src="images/facebook.svg" alt="Facebook"></a>
            <a href="https://https://x.com/" aria-label="Twitter"><img src="images/twitter-x.svg" alt="Twitter"></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><img src="images/linkedin.svg" alt="LinkedIn"></a>
            <a href="https://whatsapp.com" aria-label="WhatsApp"><img src="images/whatsapp.svg" alt="WhatsApp"></a>
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