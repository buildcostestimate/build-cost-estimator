// Script to handle form submission
document.getElementById('cost-estimate-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const projectSize = document.getElementById('projectSize').value;
    const buildType = document.getElementById('buildType').value;
    const location = document.getElementById('location').value;

    // Basic calculation logic (extend as needed)
    let baseCost = projectSize * (buildType === 'economy' ? 1000 : buildType === 'standard' ? 1500 : 2500);
    let locationFactor = parseFloat(location);
    let totalCost = baseCost * locationFactor;

    // For demo purposes, alert the user (replace with actual emailing logic)
    alert(`Your estimated build cost is £${totalCost.toLocaleString()}.`);

        // Clear the form fields after the estimate is generated
    document.getElementById('cost-estimate-form').reset();
});
