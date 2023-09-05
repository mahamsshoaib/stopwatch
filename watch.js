// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Initialize variables to hold time values
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    // Initialize a variable to hold the interval ID
    let interval = 0;

    // Get references to the HTML elements
    const displayHours = document.getElementById("hours");
    const displayMinutes = document.getElementById("minutes");
    const displaySeconds = document.getElementById("seconds");
    const displayMilliSeconds = document.getElementById("milliseconds");
    const playButton = document.getElementById("play-button");
    const stopButton = document.getElementById("stop-button");
    const resetButton = document.getElementById("reset-button");

    // Function to update the display with current time values
    function updateDisplay() {
        displayHours.textContent = hours.toString().padStart(2, '0');
        displayMinutes.textContent = minutes.toString().padStart(2, '0');
        displaySeconds.textContent = seconds.toString().padStart(2, '0');
        displayMilliSeconds.textContent = milliseconds.toString().padStart(2, '0');
    }

    // Function to update the stopwatch time values
    function stopwatch() {
        milliseconds += 1; // Increment milliseconds by 1 for 1-millisecond interval

        if (milliseconds == 100) {
            seconds += 1;
            milliseconds = 0;

            if (seconds === 60) {
                minutes += 1;
                seconds = 0;

                if (minutes === 60) {
                    hours += 1;
                    minutes = 0;
                }
            }
        }

        // Update the display with the updated time values
        updateDisplay();
    }

    // Event listener for the "Play" button
    playButton.addEventListener("click", () => {
        // Clear any existing interval to avoid multiple intervals running simultaneously
        clearInterval(interval);

        // Start the stopwatch by setting up a new interval
        interval = setInterval(stopwatch, 10); // Update every 10 milliseconds
    });

    // Event listener for the "Stop" button
    stopButton.addEventListener("click", () => {
        // Clear the interval to pause the stopwatch
        clearInterval(interval);
    });

    // Event listener for the "Reset" button
    resetButton.addEventListener("click", () => {
        // Clear any existing interval to avoid multiple intervals running simultaneously
        clearInterval(interval);

        // Reset all the time values back to zero
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;

        // Update the display to show zeros
        updateDisplay();
    });
});
