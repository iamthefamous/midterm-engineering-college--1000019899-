// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // NAV TOGGLE (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (mainNav.style.display === 'block') {
        mainNav.style.display = '';
      } else {
        mainNav.style.display = 'block';
      }
    });
  }

  // PROGRAM FILTER (departments page)
  const filter = document.getElementById('programFilter');
  if (filter) {
    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.program-card');
      cards.forEach(card => {
        const keywords = (card.dataset.keywords || card.textContent).toLowerCase();
        card.style.display = q === '' || keywords.includes(q) ? '' : 'none';
      });
    });
  }

  // Registration form validation & behavior
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    const submitBtn = document.getElementById('submitBtn');
    const fields = {
      fullName: document.getElementById('fullName'),
      email: document.getElementById('email'),
      phone: document.getElementById('phone'),
      program: document.getElementById('program'),
      intakeDate: document.getElementById('intakeDate'),
      password: document.getElementById('password'),
      confirmPassword: document.getElementById('confirmPassword'),
      policy: document.getElementById('policyAgree')
    };

    const errors = {
      fullName: document.getElementById('fullNameError'),
      email: document.getElementById('emailError'),
      phone: document.getElementById('phoneError'),
      program: document.getElementById('programError'),
      studyMode: document.getElementById('studyModeError'),
      intakeDate: document.getElementById('intakeDateError'),
      password: document.getElementById('passwordError'),
      confirmPassword: document.getElementById('confirmPasswordError'),
      policy: document.getElementById('policyError'),
      formMessage: document.getElementById('formMessage')
    };

    function validateRegistration() {
      let ok = true;
      // name
      if (!fields.fullName.value.trim()) {
        errors.fullName.textContent = 'Please enter your full name.';
        ok = false;
      } else errors.fullName.textContent = '';
      // email
      if (!fields.email.checkValidity()) {
        errors.email.textContent = 'Enter a valid email address.';
        ok = false;
      } else errors.email.textContent = '';
      // phone
      const phonePattern = /^\+?\d{7,15}$/;
      if (!phonePattern.test(fields.phone.value.trim())) {
        errors.phone.textContent = 'Enter a valid phone (7–15 digits).';
        ok = false;
      } else errors.phone.textContent = '';
      // program
      if (!fields.program.value) {
        errors.program.textContent = 'Choose a program.';
        ok = false;
      } else errors.program.textContent = '';
      // study mode
      const studyChecked = document.querySelector('input[name="studyMode"]:checked');
      if (!studyChecked) {
        errors.studyMode.textContent = 'Select a study mode.';
        ok = false;
      } else errors.studyMode.textContent = '';
      // intake
      if (!fields.intakeDate.value) {
        errors.intakeDate.textContent = 'Choose an intake date.';
        ok = false;
      } else errors.intakeDate.textContent = '';
      // password
      if (fields.password.value.length < 8) {
        errors.password.textContent = 'Password must be at least 8 characters.';
        ok = false;
      } else errors.password.textContent = '';
      if (fields.password.value !== fields.confirmPassword.value) {
        errors.confirmPassword.textContent = 'Passwords do not match.';
        ok = false;
      } else errors.confirmPassword.textContent = '';
      // policy
      if (!fields.policy.checked) {
        errors.policy.textContent = 'You must accept the policy to continue.';
        ok = false;
      } else errors.policy.textContent = '';

      submitBtn.disabled = !ok;
      return ok;
    }

    regForm.addEventListener('input', validateRegistration);
    regForm.addEventListener('change', validateRegistration);

    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateRegistration()) return;

      // simulate server submission
      errors.formMessage.className = 'alert success';
      errors.formMessage.textContent = 'Thank you — your application has been received. We will contact you by email.';
      regForm.reset();
      submitBtn.disabled = true;
      errors.formMessage.focus?.();
    });
  }

  // Contact form (honeypot anti-spam)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const status = document.getElementById('contactMessage');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const honeypot = document.getElementById('website');
      if (honeypot && honeypot.value.trim()) {
        status.className = 'alert error';
        status.textContent = 'Spam detected — message not sent.';
        return;
      }
      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      if (!name.value.trim() || !email.checkValidity() || !subject.value.trim() || !message.value.trim()) {
        status.className = 'alert error';
        status.textContent = 'Please complete required fields.';
        return;
      }
      status.className = 'alert success';
      status.textContent = 'Your message has been sent. We will reply soon.';
      contactForm.reset();
      status.focus?.();
    });
  }

  // Enhance details (FAQ) to add toggle buttons for keyboard visible state (progressive)
  document.querySelectorAll('details.faq').forEach(d => {
    d.addEventListener('toggle', () => {
      // keep as progressive enhancement; no further behavior required
    });
  });
});
