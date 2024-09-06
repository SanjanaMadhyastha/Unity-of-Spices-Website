document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');
    const reserveButton = document.querySelector('.reserve-btn'); 
    const reserveForm = document.querySelector('#reserve form'); 
    const contactForm = document.querySelector('#contact form'); 

    
    const reserveModal = document.getElementById('reserveModal');
    const contactModal = document.getElementById('contactModal');
    
    
    const closeReserveModal = document.getElementById('closeReserve');
    const closeContactModal = document.getElementById('closeContact');

    // Function to show a page
    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Event listener for the Reserve Now button in Chef's Special
    if (reserveButton) {
        reserveButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('reserve'); 
        });
    }

    // Handle Reserve form submission
    if (reserveForm) {
        reserveForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            reserveModal.style.display = 'block'; 
            reserveForm.reset(); 
        });
    }

    // Handle Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            contactModal.style.display = 'block';
            contactForm.reset(); 
        });
    }

    // Close the Reserve modal when the close button is clicked
    closeReserveModal.addEventListener('click', function() {
        reserveModal.style.display = 'none';
    });

    // Close the Contact modal when the close button is clicked
    closeContactModal.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });

    // Close the modal if the user clicks anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === reserveModal) {
            reserveModal.style.display = 'none';
        } else if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Show the Home page by default
    showPage('home');

    // Countdown timer for Chef's Special
    function startCountdown() {
        const targetTime = new Date().setHours(23, 59, 59); 
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            const currentTime = new Date().getTime();
            const timeLeft = targetTime - currentTime;

            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);

            // Display the timer
            timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

            // Stop the timer when it reaches 0
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                timerElement.innerHTML = "Chef's Special is no longer available!";
            }
        }

        // Update the countdown every second
        const countdownInterval = setInterval(updateTimer, 1000);
    }

    // Start the countdown for Chef's Special
    startCountdown();
});








