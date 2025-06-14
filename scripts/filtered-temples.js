document.addEventListener('DOMContentLoaded', () => {
    // Temple Data Array (from the prompt, with additional temples)
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
       {
            templeName: "Johannesburg South Africa",
            location: "Johannesburg, South Africa",
           dedicated: "1985, August, 24-25",
           area: 19184,
           imageUrl:
               "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22479-thumb.jpg"
        },
       {
           templeName: "Accra Ghana",
           location: "Accra, Ghana",
           dedicated: "2004, January, 11",
           area: 17500,
          imageUrl:
              "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
        },
       {
          templeName: "Toronto Ontario",
          location: "Toronto, Ontario",
          dedicated: "1990, August, 25-27",
          area: 55558,
          imageUrl:
              "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"
        },
    ];

    const templeGrid = document.getElementById('temple-grid');
    const pageTitle = document.querySelector('.page-title');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.main-nav .nav-links');

    // Function to display temples
    function displayTemples(filteredTemples, title) {
        templeGrid.innerHTML = ''; // Clear existing temples
        pageTitle.textContent = title; // Update page title

        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');
            const name = document.createElement('strong');
            const location = document.createElement('p');
            const dedicated = document.createElement('p');
            const area = document.createElement('p');

            name.textContent = temple.templeName;
            location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
            dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
            area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`; // Format area

            img.src = temple.imageUrl; // Use actual image URL
            img.alt = temple.templeName;
            img.loading = "lazy"; // Native lazy loading

            figcaption.appendChild(name);
            figcaption.appendChild(location);
            figcaption.appendChild(dedicated);
            figcaption.appendChild(area);

            figure.appendChild(img);
            figure.appendChild(figcaption);
            templeGrid.appendChild(figure);
        });
    }

    // Initial display of all temples on page load
    displayTemples(temples, "Home");

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const filter = event.target.dataset.filter;
            let filteredList = [];
            let title = event.target.textContent;

            // Remove 'current' class from all links and add to clicked one
            navLinks.forEach(l => l.classList.remove('current'));
            event.target.classList.add('current');

            // Close mobile menu if open
            if (mobileNavLinks.classList.contains('active')) {
                mobileNavLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }


            switch (filter) {
                case 'old':
                    filteredList = temples.filter(temple => {
                        const dedicatedDate = new Date(temple.dedicated);
                        return dedicatedDate.getFullYear() < 1900;
                    });
                    break;
                case 'new':
                    filteredList = temples.filter(temple => {
                        const dedicatedDate = new Date(temple.dedicated);
                        return dedicatedDate.getFullYear() > 2000;
                    });
                    break;
                case 'large':
                    filteredList = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    filteredList = temples.filter(temple => temple.area < 10000);
                    break;
                case 'home':
                default:
                    filteredList = temples;
                    break;
            }
            displayTemples(filteredList, title);
        });
    });

    // Set 'Home' link as active by default on load
    document.querySelector('.nav-link[data-filter="home"]').classList.add('current');

    // Hamburger menu functionality (copied from previous)
    if (hamburgerMenu && mobileNavLinks) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Footer copyright year and date last modified
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});