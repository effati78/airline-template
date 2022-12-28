// Include HTML;
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "محتوا مورد نظر پیدا نشد.";
                    }
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();

            return;
        }
    }
}

includeHTML();

document.addEventListener("DOMContentLoaded", (event) => {
    // Modal
    var modal = document.querySelector(".modal");
    var showModal = document.querySelector(".showModal");
    var closeModal = document.querySelector(".closeModal");
    console.log(showModal);
    console.log(modal);
    console.log(closeModal);

    showModal.onclick = function (e) {
        e.preventDefault();
        console.log("hello");
        modal.style.display = "block";
    };

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        console.log(event.target);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
