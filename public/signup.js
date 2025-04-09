document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Validate password strength (optional)
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        // Create user object
        const userData = {
            name: name,
            email: email,
            password: password // In production, you should hash this on the client or ensure HTTPS
        };
        
        // Show loading state
        const submitButton = document.getElementById('submit-button');
        submitButton.disabled = true;
        submitButton.textContent = 'Creating Account...';
        
        try {
            // Send data to server
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Success - redirect or show success message
                alert('Account created successfully!');
                window.location.href = '/dashboard.html'; // Redirect to dashboard
            } else {
                // Show error message
                alert(data.message || 'Signup failed');
                submitButton.disabled = false;
                submitButton.textContent = 'Sign Up';
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during signup');
            submitButton.disabled = false;
            submitButton.textContent = 'Sign Up';
        }
    });
});