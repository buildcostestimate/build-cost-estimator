// Script to handle form submission
document.getElementById('cost-estimate-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const projectSize = document.getElementById('projectSize').value;
    const buildType = document.getElementById('buildType').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;

    // Validate the email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return; // Stop the form submission if email is invalid
    }

    // Basic calculation logic (extend as needed)
    let baseCost = projectSize * (buildType === 'economy' ? 1000 : buildType === 'standard' ? 1500 : 2500);
    let locationFactor = parseFloat(location);
    let totalCost = baseCost * locationFactor;

    // Display the result (you can replace the alert with a more user-friendly display)
    alert(`Your estimated build cost is £${totalCost.toLocaleString()}.`);

    // Clear the form fields after the estimate is generated
    document.getElementById('cost-estimate-form').reset();
});

// Function to validate email using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

