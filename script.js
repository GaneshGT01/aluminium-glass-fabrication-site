document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Mock submission and response
    setTimeout(() => {
        document.getElementById('response').textContent = 
            `Thank you, ${name}! We'll get back to you at ${email} shortly.`;
    }, 1000);
});
