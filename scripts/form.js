// Data for product names
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener('DOMContentLoaded', function() {
    // Populate product names in the select element
    populateProducts();

    // Set last modification date
    setLastModified();

    // Set current year in footer
    setCurrentYear();
});

/**
 * Populates the product select element with options from the products array.
 */
function populateProducts() {
    const productNameSelect = document.getElementById('productName');
    
    // Ensure the placeholder option exists if JS loads before HTML
    // This check prevents duplicate placeholders if the HTML already has one
    if (productNameSelect.options.length === 0 || productNameSelect.options[0].value !== "") {
        const placeholderOption = document.createElement('option');
        placeholderOption.value = "";
        placeholderOption.textContent = "Select a Product ...";
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        productNameSelect.appendChild(placeholderOption);
    }

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use product ID as value
        option.textContent = product.name; // Use product name for display
        productNameSelect.appendChild(option);
    });
}

/**
 * Sets the last modified date in the footer.
 */
function setLastModified() {
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        // Format the date and time from document.lastModified
        const date = new Date(document.lastModified);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Use 24-hour format
        };
        lastModifiedSpan.textContent = date.toLocaleString('en-US', options);
    }
}

/**
 * Sets the current year in the footer.
 */
function setCurrentYear() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}
