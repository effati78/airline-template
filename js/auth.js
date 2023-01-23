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
    let register = document.querySelector(".register-form");
    let mobile = document.querySelector("#phoneLogin");
    let password = document.querySelector("#passwordLogin");
    let regex = new RegExp("^(\\+98|0)?9\\d{9}$");

    let mobileReg = document.querySelector("#phoneRegister");
    let passwordReg = document.querySelector("#passwordRegister");
    let nameReg = document.querySelector("#nameRegister");
    let familyReg = document.querySelector("#familyRegister");
    // let password2Reg = document.querySelector("#password2Register");

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

        fetch(`http://127.0.0.1:8080/user?phone=${mobile.value}&password=${password.value}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("error!");
                }
            })
            .then(function (obj) {
                if (obj.name) {
                    if (obj.role == "admin") {
                        window.open("http://127.0.0.1:5500/view/adminPanel/admin/timing.html", "_self");
                    } else if (obj.role == "user") {
                        window.open("http://127.0.0.1:5500/view/adminPanel/user/tickets.html", "_self");
                    }
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
            })
            .catch((error) => console.log(error));
    });

    register.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log(nameReg.value);
        console.log(familyReg.value);
        console.log(mobileReg.value);
        console.log(passwordReg.value);

        if (!mobileReg.value || !(regex.test(mobileReg.value))) {
            mobileReg.parentElement.classList.add("danger");
            mobileReg.focus();
            return 0;
        } else {
            mobileReg.parentElement.classList.remove("danger");
        }

        if (!passwordReg.value) {
            passwordReg.parentElement.classList.add("danger");
            passwordReg.focus();
            return 0;
        } else {
            passwordReg.parentElement.classList.remove("danger");
        }

        fetch(`http://127.0.0.1:8080/user/register?name=${nameReg.value}&family=${familyReg.value}&phone=${mobileReg.value}&role=user&password=${passwordReg.value}&tickets=null`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("error!");
                }
            })
            .then(function (obj) {
                if (obj.success == "true") {
                    swal.fire({
                        title: "موفق",
                        text: "کاربر با موفقیت ثبت نام شد.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });

                    setTimeout(() => {
                        window.open("http://127.0.0.1:5500/view/adminPanel/user/tickets.html", "_self");
                    }, 2000);
                } else {
                    swal.fire({
                        title: "خطا",
                        text: "خطا در اتصال به پایگاه داده",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                }
            })
            .catch((error) => console.log(error));
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
