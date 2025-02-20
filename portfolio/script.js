document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    // Fetch and insert the navigation
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading navigation:", error));

    // Toggle the navigation menu and hamburger icon
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    // Fetch and insert the footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));
});
