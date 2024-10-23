// Function to perform search based on the selected platform
function performSearch(platform, query) {
    // Check if the query is empty
    if (query.trim() === "") {
        alert("Please enter a search term.");
        return; // Exit the function if the input is empty
    }

    // Define base URLs for each platform
    let url = "";
    
    switch (platform) {
        case 'whatsapp':
            url = `https://chat.whatsapp.com/F8Tb28MO89aHE23P2F0UXb?text=${encodeURIComponent(query)}`;
            break;
        case 'googleScholar':
            url = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
            break;
        case 'ebsco':
            url = `https://search.ebscohost.com/?vid=0&sid=ebsco&bquery=${encodeURIComponent(query)}`;
            break;
        case 'google':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        default:
            alert("Invalid platform selected.");
            return; // Exit the function if an invalid platform is chosen
    }

    // Open the constructed URL in a new tab
    window.open(url, "_blank");
}

// Example of a possible initialization function
function init() {
    console.log("Online Library Search Initialized");
    // Add any additional initialization code here if necessary
}

// Call the init function when the window loads
window.onload = init;
const module = document.getElementById('module').value;
