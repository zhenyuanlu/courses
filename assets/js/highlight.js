// assets/js/highlight.js

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const scheduleRows = document.querySelectorAll('table tbody tr');
    let highlightApplied = false;
  
    scheduleRows.forEach(row => {
      const dateCell = row.querySelector('td:nth-child(5)'); // Assuming Date is the 5th column
      if (dateCell) {
        const courseDate = new Date(dateCell.textContent);
        if (courseDate > today && !highlightApplied) {
          row.classList.add('bg-yellow-100'); // Tailwind class for light yellow background
          highlightApplied = true;
        }
      }
    });
  });
  