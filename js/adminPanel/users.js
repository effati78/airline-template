var tbody = document.querySelector("#tbody");
var items = "";

var tbodyAdmin = document.querySelector("#tbodyAdmin");
var itemsAdmin = "";

fetch("http://127.0.0.1:8080/user/all")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("error!");
        }
    })
    .then(function (obj) {
        let j = 0;
        let x = 0;
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].role == "user") {
                items += `<tr>
                        <td>${++j}</td>
                        <td>${obj[i].name} ${obj[i].family}</td>
                        <td>${obj[i].phone}</td>
                        <td>${obj[i].password}</td>
                        <td>مسافر</td>
                        <td><button data-phone="${obj[i].phone}" class="-btn -btn-primary changeRole">تغییر نقش</button></td>
                    </tr>`;
            } else if (obj[i].role == "admin") {
                itemsAdmin += `<tr>
                        <td>${++x}</td>
                        <td>${obj[i].name} ${obj[i].family}</td>
                        <td>${obj[i].phone}</td>
                        <td>${obj[i].password}</td>
                        <td>پرسنل فرودگاه</td>
                    </tr>`;
            }
        }
        tbody.innerHTML = items;
        tbodyAdmin.innerHTML = itemsAdmin;
    })
    .catch((error) => console.log(error));

setTimeout(() => {
    var buttons = document.querySelectorAll(".changeRole");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            console.log(e.target.getAttribute("data-phone"));
            fetch(`http://127.0.0.1:8080/user/changeRole?phone=${e.target.getAttribute("data-phone")}`)
                .then((response) => {
                    if (response.ok) {
                        swal.fire({
                            title: "موفق",
                            text: "سطح دسترسی کاربر با موفقیت بروزرسانی شد.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                        });

                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    } else {
                        throw new Error("error!");
                    }
                })
                .catch((error) => console.log(error));
        });
    }
}, 2000);
