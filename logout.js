// Function to log out the user
function logout() {
    // Clear sessionStorage (if you're using it to store session info)
    sessionStorage.clear();

    // Clear localStorage (if you store tokens or user data here)
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    // Clear cookies (if you're using cookies for authentication)
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.trim().split("=")[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    });

    // Optionally, notify the server (if needed, e.g., invalidate session)
    // Example for logout API request:
    /*
    fetch('/api/logout', {
        method: 'POST',
        credentials: 'include'  // Include cookies (if using cookies for authentication)
    }).then(response => {
        if (response.ok) {
            console.log('Logout successful');
        }
    }).catch(error => {
        console.error('Error logging out:', error);
    });
    */

    // Redirect user to the login page
    window.location.href = '/login';  // Adjust the URL as necessary
}

// Attach the logout function to a button (if needed)
document.getElementById('logoutButton').addEventListener('click', logout);
