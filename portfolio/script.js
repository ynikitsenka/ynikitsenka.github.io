document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the navigation
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading navigation:", error));

    // Fetch and insert the footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('active');
    });
});

