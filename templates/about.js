// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const resourcesDiv = document.getElementById('resources');
    
    // Initially hide the resources section
    resourcesDiv.classList.add('hidden');

    // Add event listener to the "Learn More" button
    learnMoreBtn.addEventListener('click', function() {
        // Toggle the visibility of the resources section
        resourcesDiv.classList.toggle('hidden');
        
        // Change the button text based on the state
        if (resourcesDiv.classList.contains('hidden')) {
            learnMoreBtn.textContent = "Learn More";
        } else {
            learnMoreBtn.textContent = "Hide Resources";
        }
    });
});
