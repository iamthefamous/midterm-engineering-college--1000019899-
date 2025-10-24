# Engineering College Website

This project is a multi-page static website for a fictional Engineering College. It is designed to be a clean, responsive, and accessible information portal for prospective students, faculty, and the public. The design uses a professional, academic-inspired palette.

## Page Map

The site consists of the following pages:

- **Home (`index.html`)**: The main landing page with a hero section, key highlights, and recent news.
- **About (`about.html`)**: Information about the college's mission, history, and values.
- **Departments (`departments.html`)**: A filterable list of academic departments and programs offered.
- **Faculty (`faculty.html`)**: Profiles of key faculty members.
- **Research (`research.html`)**: Highlights of research projects and an FAQ section.
- **Registration (`registration.html`)**: A comprehensive form for prospective students to register their interest.
- **Admissions, Contact, etc.**: Other pages are linked in the navigation, forming a complete site structure.

## Features Implemented

The website is built with semantic HTML5, modern CSS, and vanilla JavaScript for interactivity. Key features include:

- **Responsive Design**: The layout adapts to different screen sizes, from mobile phones to desktops, ensuring a good user experience on all devices.
- **Sticky Navigation**: The header remains fixed at the top of the screen for easy access.
- **Mobile Navigation Menu**: On smaller screens, the navigation collapses into a toggleable vertical menu.
- **Live Department Filtering**: On the `departments.html` page, users can type into a search bar to instantly filter the list of academic programs by keywords.
- **Interactive Registration Form**: The form on `registration.html` features real-time, client-side validation. It checks for:
  - Required fields
  - Valid email and phone number formats
  - Password length and confirmation matching
  - The submit button is disabled until all required fields are valid, guiding the user to complete the form correctly.
- **Accessible Components**: The site uses ARIA attributes (`aria-expanded`, `aria-controls`, `aria-live`, etc.) and semantic elements (`<nav>`, `<main>`, `<details>`) to improve accessibility for screen reader users.

## Known Limitations

- The site is a static front-end prototype. The forms (registration, contact) do not connect to a real back-end server; they simulate a successful submission using JavaScript.
- The `student-life.html` page uses a different CSS framework (Bootstrap) and styling than the rest of the site, leading to an inconsistent user interface.

## Attribution & Credits

- **Fonts**:
  - `Libre Baskerville` and `Inter` are served via Google Fonts.
- **Images**:
  - The faculty photos (`AnnaSmith.png`, `JohnLee.png`, `MariaReviera.png`) are placeholder images.
  - The logo (`logo.png`) is from the University of Central Asia.

## Live URL & Navigation

**Live URL**: https://asylbek-auca.github.io/midterm-engineering-college--1000019899-/

### How to Navigate

1.  Open the Live URL in your browser to land on the **Home** page.
2.  Use the main navigation bar at the top to visit other pages like **Departments**, **Faculty**, and **Registration**.
3.  On the **Departments** page, try typing "robotics" or "civil" into the filter bar to see the program list update automatically.
4.  On the **Registration** page, try filling out the form. You will see error messages appear for invalid data and the "Submit application" button will only become active when the form is valid.
5.  Resize your browser window to a smaller width (or use a mobile device) to see the mobile-friendly navigation menu in action.