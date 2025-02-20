document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the navigation
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Add event listener for the hamburger menu
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('nav ul');

            if (hamburger) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('menu-active');
                });
            }
        })
        .catch(error => console.error("Error loading navigation:", error));

    // Fetch and insert the footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));
});
