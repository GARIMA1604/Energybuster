document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    const noThanks = document.getElementById('noThanks');

    setTimeout(() => {
        popupOverlay.classList.add('popup-visible');
    }, 1000);

    closePopup.addEventListener('click', () => {
        popupOverlay.classList.remove('popup-visible');
    });

    noThanks.addEventListener('click', (event) => {
        event.preventDefault();
        popupOverlay.classList.remove('popup-visible');
    });

    document.getElementById('signUpForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert('Sign Up Successful');
            popupOverlay.classList.remove('popup-visible');
        } else {
            alert('Please enter a valid email address');
        }
    });
});
