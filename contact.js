// to navigate between games using dropdown
var select = document.getElementById("games-dropdown");
select.addEventListener("change", function() {
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption) {
        window.location.href = selectedOption + ".html";
    }
});

// to highlight the active screen button
const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

// to validate the user name
function validateName(input) {
    const name = input.value;
    const namePattern = /^[A-Za-z ]+$/; // Regular expression to allow only alphabets and spaces

    if (!namePattern.test(name)) {
        document.getElementById("name-error").textContent =
            "Please enter a valid name.";
    }
}