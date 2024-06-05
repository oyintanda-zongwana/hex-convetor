// Function to convert hex color code to RGB
function convertHexToRGB() {
    // Get the hex color input value
    const hexInput = document.getElementById('hexInput').value;
    // Regular expression to validate hex code format
    const hexRegex = /^#?([a-fA-F0-9]{6})$/;
    // Check if the hex code is valid
    if (hexRegex.test(hexInput)) {
        // Extract the hex digits
        const hex = hexInput.replace('#', '');
        // Convert hex to RGB values
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        // Display the RGB result
        document.getElementById('rgbOutput').innerText = `RGB(${r}, ${g}, ${b})`;
    } else {
        // Display an error message if the hex code is invalid
        document.getElementById('rgbOutput').innerText = 'Invalid hex code';
    }
}
