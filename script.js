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

const numCursors = 2; // Adjust the number of trailing cursors
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    // Update the position of the cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
