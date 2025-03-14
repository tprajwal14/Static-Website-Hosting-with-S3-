document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('successMessage');
  
    if (!name || !email || !message) {
      successMessage.style.display = 'block';
      successMessage.style.color = 'red';
      successMessage.innerText = 'Please fill in all fields!';
      return;
    }
  
    // Simulate form submission
    setTimeout(() => {
      successMessage.style.display = 'block';
      successMessage.style.color = 'green';
      successMessage.innerText = 'Your message has been sent!';
      
      // Clear form
      document.getElementById('contactForm').reset();
    }, 500);
  });
  