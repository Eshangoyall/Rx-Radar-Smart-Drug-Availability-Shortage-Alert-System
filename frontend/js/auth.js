// REGISTER USER

async function registerUserToDatabase(){

    const name = document
        .getElementById("registerName")
        .value
        .trim();

    const email = document
        .getElementById("registerEmail")
        .value
        .trim();

    const password = document
        .getElementById("registerPassword")
        .value
        .trim();

    // Validation

    if(name === "" || email === "" || password === ""){

        alert("Please fill all fields");
        return;

    }

    // Create form data

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    // Send request

    const response = await fetch(
        "http://localhost/Rx-Radar/backend/auth/register.php",
        {
            method: "POST",
            body: formData
        }
    );

    const result = await response.text();

    alert(result);

    // Redirect

    if(result === "Registration successful"){

        window.location.href = "login.html";

    }

}

function handleRegisterKey(event){

    if(event.key === "Enter"){

        registerUserToDatabase();

    }

}



// LOGIN USER

async function loginUserFromDatabase(){

    const email = document
        .getElementById("loginEmail")
        .value
        .trim();

    const password = document
        .getElementById("loginPassword")
        .value
        .trim();

    // Validation

    if(email === "" || password === ""){

        alert("Please fill all fields");
        return;

    }

    // Create form data

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    // Send login request

    const response = await fetch(
        "http://localhost/Rx-Radar/backend/auth/login.php",
        {
            method: "POST",
            body: formData
        }
    );

    const result = await response.text();

    alert(result);

    // Redirect

    if(result === "Login successful"){

        // Temporary frontend session

        localStorage.setItem(
            "loggedInUser",
            email
        );

        window.location.href = "dashboard.html";

    }

}

function handleLoginKey(event){

    if(event.key === "Enter"){

        loginUserFromDatabase();

    }

}

// ENTER KEY SUPPORT

document.addEventListener("DOMContentLoaded", () => {

    // Register Page

    const registerPassword =
        document.getElementById("registerPassword");

    if(registerPassword){

        registerPassword.addEventListener("keypress", (event) => {

            if(event.key === "Enter"){

                registerUserToDatabase();

            }

        });

    }


    // Login Page

    const loginPassword =
        document.getElementById("loginPassword");

    if(loginPassword){

        loginPassword.addEventListener("keypress", (event) => {

            if(event.key === "Enter"){

                loginUserFromDatabase();

            }

        });

    }

});