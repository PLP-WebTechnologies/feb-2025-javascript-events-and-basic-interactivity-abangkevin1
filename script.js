// Event Handling: Button click
document.getElementById('changeTextButton').addEventListener('click', () => {
    document.getElementById('textToChange').textContent = 'The text has been changed!';
});

// Interactive Elements: Image gallery hover effect
const images = document.querySelectorAll('#imageGallery img');
images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Form Validation: Real-time feedback
const form = document.getElementById('userForm');
form.addEventListener('submit', (e) => {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (!email.validity.valid || !message.validity.valid) {
        e.preventDefault();
        alert('Please fill out the form correctly.');
    }
});