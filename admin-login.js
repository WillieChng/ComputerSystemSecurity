// Get the form element
const loginForm = document.getElementById('loginForm');

// Add an event listener to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are empty
    if (username === '' || password === '') {
        alert('Please fill out both the username and password fields.');
    } else {
        // Simulate login process 
        if (username === 'admin' && password === 'password123') {
            alert('Login successful!');
            // Redirect to admin dashboard or another page 
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    }
});
