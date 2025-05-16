// Form Validation & Submission Feedback
document.getElementById('investor-form').addEventListener('submit', function(e) {
  const form = e.target;
  const phoneInput = form.querySelector('input[name="phone"]');
  
  // Basic phone validation (if provided)
  if (phoneInput.value && !/^[\d\s\-()+]{10,}$/.test(phoneInput.value)) {
    alert('Please enter a valid phone number (at least 10 digits)');
    e.preventDefault();
    return;
  }
  
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  // For demo purposes - remove in production
  console.log('Form data:', new FormData(form));
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.75) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initialize animations
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease';
});
