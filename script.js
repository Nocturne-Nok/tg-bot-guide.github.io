function register() {
    let email = document.getElementById("registerEmail").value;
    let username = document.getElementById("registerUsername").value;
    let lastname = document.getElementById("registerLastname").value;
    let firstname = document.getElementById("registerFirstname").value;
    let password = document.getElementById("registerPassword").value;
    let userData = {
        email: email,
        username: username,
        lastname: lastname,
        firstname: firstname,
        password: password
    };

    $.ajax({
        type: "POST",
        url: "/registerUser",
        contentType: "application/json",
        data: JSON.stringify(userData),
        success: function(response) {
            console.log("Користувач успішно зареєстрований");
            // Додатковий код, який ви хочете виконати після успішної реєстрації
        },
        error: function(xhr, status, error) {
            console.error("Помилка при реєстрації користувача: " + error);
        }
    });
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let userData = {
        email: email,
        password: password
    };

    $.ajax({
        type: "POST",
        url: "/loginUser",
        contentType: "application/json",
        data: JSON.stringify(userData),
        success: function(response) {
            console.log("Користувач успішно авторизований");
            // Додатковий код, який ви хочете виконати після успішної авторизації
        },
        error: function(xhr, status, error) {
            console.error("Помилка при авторизації користувача: " + error);
        }
    });
}
