document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the navigation
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            setupNavigation(); // Call function to set up the menu after insertion
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

// Function to set up the hamburger menu AFTER navigation is loaded
function setupNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("show");
            hamburger.classList.toggle("active");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("show");
                hamburger.classList.remove("active");
            }
        });
    }
}


