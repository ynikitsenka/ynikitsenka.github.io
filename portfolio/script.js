document.addEventListener("DOMContentLoaded", function () {
    fetch("navigation.html") // Fetch the navigation file
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data); // Insert at the top of body
        })
        .catch(error => console.error("Error loading navigation:", error));
});
