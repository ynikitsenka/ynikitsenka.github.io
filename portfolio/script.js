document.addEventListener("DOMContentLoaded", function () {
    fetch("navigation.html") // Fetch the navigation file
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data); // Insert at the top of body
        })
        .catch(error => console.error("Error loading navigation:", error));
});

 fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading footer:", error));
});
