// Get logged in user

const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);


// Protect dashboard

if(!loggedInUser){

    alert("Please login first");

    window.location.href = "login.html";
}


// Show welcome text

document.getElementById("welcomeText").innerText =
    `Welcome, ${loggedInUser.name}`;


// Logout function

function logoutUser(){

    localStorage.removeItem("loggedInUser");

    alert("Logged out successfully");

    window.location.href = "login.html";

}