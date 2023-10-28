function navigateToPage(pageURL) {
    window.location.href = pageURL;
}
function openNav() {
    document.getElementById("mySidebar").style.width = "450px"; // Width for larger screens
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const password = passwordInput.value;

    if (password === "Micheal098") {
        navigateToPage("projects.html");
    } else {
        errorMessage.textContent = "Incorrect Password. Try again.";
        passwordInput.value = "";
    }
}

document.getElementById("password-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        validatePassword();
    });
