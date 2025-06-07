document.addEventListener('DOMContentLoaded', () => {
    // 1. Footer dynamic information
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // 2. Windchill Factor Calculation
    // Define static variables for temperature and wind speed (matching HTML)
    const temperatureCelsius = parseFloat(document.getElementById('temp').textContent); // 28
    const windSpeedKmh = parseFloat(document.getElementById('windspeed').textContent); // 15

    // Function to calculate windchill (Metric: Celsius and km/h)
    // Formula for Celsius and km/h: WC = 13.12 + 0.6215 * T - 11.37 * V^0.16 + 0.3965 * T * V^0.16
    // Where T is temperature in Celsius and V is wind speed in km/h
    function calculateWindChill(temp, wind) {
        // Return 0 if wind is too low to prevent issues with Math.pow(0, 0.16)
        if (wind === 0) return temp;
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);
    }

    // Conditions to display windchill
    const windChillElement = document.getElementById('windchill');

    // Temperature: Metric <= 10 °C and Imperial(English) <= 50 °F
    // Wind speed: Metric > 4.8 km/h and Imperial(English) > 3 mph
    // Using metric values for the conditions as per the problem description for consistency with provided static values
    const tempConditionMet = temperatureCelsius <= 10; // For Nigeria, 28°C doesn't meet this
    const windSpeedConditionMet = windSpeedKmh > 4.8;

    if (windChillElement) {
        if (tempConditionMet && windSpeedConditionMet) {
            const windChillValue = calculateWindChill(temperatureCelsius, windSpeedKmh);
            windChillElement.textContent = `${windChillValue}°C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});