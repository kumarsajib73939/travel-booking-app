// Get all the package cards
function searchDestinations() {
    // Get the search input value and convert to lowercase for case-insensitive search
    const searchInput = document.querySelector('.form-control').value.toLowerCase();
    
    // Get all package cards
    const packageCards = document.querySelectorAll('.packages .card');
    
    // Loop through each card and check if it matches the search
    packageCards.forEach(card => {
        // Get the destination name from the card's h3 element
        const destinationName = card.querySelector('h3').textContent.toLowerCase();
        
        // Get the card's parent element (col-md-4)
        const cardContainer = card.closest('.col-md-4');
        
        // Show/hide based on search match
        if (destinationName.includes(searchInput)) {
            cardContainer.style.display = ''; // Show the card
        } else {
            cardContainer.style.display = 'none'; // Hide the card
        }
    });
}

// Add event listener to search button
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.btn-primary');
    searchButton.addEventListener('click', searchDestinations);
    
    // Add event listener for Enter key in search input
    const searchInput = document.querySelector('.form-control');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            searchDestinations();
        }
    });
});