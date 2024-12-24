// Set the target date for the countdown
const targetDate = new Date('2024-12-31T23:59:59').getTime(); // Change this date as needed

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the DOM
  document.getElementById('days').textContent = days
    .toString()
    .padStart(2, '0');
  document.getElementById('hours').textContent = hours
    .toString()
    .padStart(2, '0');
  document.getElementById('minutes').textContent = minutes
    .toString()
    .padStart(2, '0');
  document.getElementById('seconds').textContent = seconds
    .toString()
    .padStart(2, '0');

  // Stop the countdown when the target date is reached
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').textContent = 'EXPIRED';
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown immediately
updateCountdown();
