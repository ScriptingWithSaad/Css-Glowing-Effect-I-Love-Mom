// Targeting all buttons and light
const btns = document.querySelectorAll(".btn");

let glowTimeouts = {}; // Object to store individual timeout IDs for each button

// Function to start glowing a specific button
function startGlow(button) {
    button.classList.add("add");
    button.dataset.glowing = "true"; // Mark the button as glowing

    // Stop the glow automatically after 15 seconds
    glowTimeouts[button.id] = setTimeout(() => {
        stopGlow(button);
    }, 15000); // 15000 ms = 15 seconds
}

// Function to stop glowing a specific button
function stopGlow(button) {
    button.classList.remove("add");
    button.dataset.glowing = "false"; // Mark the button as not glowing

    // Clear the timeout if it exists
    clearTimeout(glowTimeouts[button.id]);
    delete glowTimeouts[button.id]; // Remove the timeout ID from the object
}

// Toggle glow effect for a specific button on click
function toggleGlow(button) {
    if (button.dataset.glowing === "true") {
        stopGlow(button); // Stop glowing on second click
    } else {
        startGlow(button); // Start glowing on first click
    }
}

// Add click event listener to each button
btns.forEach(button => {
    button.dataset.glowing = "false"; // Initialize each button's glow state as false
    button.addEventListener("click", () => toggleGlow(button));
});
