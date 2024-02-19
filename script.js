document.addEventListener('DOMContentLoaded', function () {
  // Set the target date to September 26, 2023
  const targetDate = new Date('2023-09-26T00:00:00').getTime();

  // Function to update the timer
  function updateTimer() {
    const currentTime = new Date().getTime();
    const timeDifference = Math.floor((currentTime - targetDate) / 1000);

    const timerElement = document.getElementById('timer');
    const seconds = timeDifference % 60;
    const minutes = Math.floor((timeDifference / 60) % 60);
    const hours = Math.floor(timeDifference / 3600);

    timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }

  // Update the timer every second
  setInterval(updateTimer, 1000);

  // Initial update
  updateTimer();
});
