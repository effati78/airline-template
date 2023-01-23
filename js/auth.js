function auth() {
    // Modal
    let modal = document.querySelector("#auth");
    let showModal = document.querySelector("#authModal");
    let closeModal = document.querySelector("#closeAuthModal");

    showModal.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";
    };

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    let login = document.querySelector(".login-form");
    let mobile = document.querySelector("#phoneLogin");
    let password = document.querySelector("#passwordLogin");
    let regex = new RegExp("^(\\+98|0)?9\\d{9}$");

    login.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!mobile.value || !(regex.test(mobile.value))) {
            mobile.parentElement.classList.add("danger");
            mobile.focus();
            return 0;
        } else {
            mobile.parentElement.classList.remove("danger");
        }

        if (!password.value) {
            password.parentElement.classList.add("danger");
            password.focus();
            return 0;
        } else {
            password.parentElement.classList.remove("danger");
        }

        console.log(password.value);
        console.log(mobile.value);
        fetch(`http://127.0.0.1:8080/user?phone=${mobile.value}&password=${password.value}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("error!");
                }
            })
            .then(function (obj) {
                console.log(obj.name);
            })
            .catch((error) => console.log(error));

        if (mobile.value == "09156666794" && password.value == "admin") {
            window.open(
                "http://127.0.0.1:5500/view/adminPanel/admin/timing.html",
                "_self"
            );
        } else if (
            mobile.value == "09011189417" &&
            password.value == "123456"
        ) {
            window.open(
                "http://127.0.0.1:5500/view/adminPanel/user/tickets.html",
                "_self"
            );
        } else {
            swal.fire({
                title: "خطا",
                text: "شماره موبایل یا رمز عبور اشتباه است.",
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    });

    mobile.addEventListener("keyup", function (e) {
        e.preventDefault();

        if (!mobile.value || !(regex.test(mobile.value))) {
            mobile.parentElement.classList.add("danger");
            mobile.focus();
        } else {
            mobile.parentElement.classList.remove("danger");
            mobile.parentElement.classList.add("success");
        }
    });

    password.addEventListener("keyup", function (e) {
        e.preventDefault();
        if (!password.value) {
            password.parentElement.classList.add("danger");
            password.focus();
        } else {
            password.parentElement.classList.remove("danger");
            password.parentElement.classList.add("success");
        }
    });

    let registerBox = document.querySelector(".registerBox");
    let loginBox = document.querySelector(".loginBox");
    let btnRegister = document.querySelector("#btnRegister");
    let btnLogin = document.querySelector("#btnLogin");

    btnLogin.addEventListener("click", function () {
        loginBox.style.display = "block"; 
        registerBox.style.display = "none"; 
    });

    btnRegister.addEventListener("click", function () {
        loginBox.style.display = "none";
        registerBox.style.display = "block";
    });
}
