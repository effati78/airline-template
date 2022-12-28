let chairs = document.querySelectorAll(".chair");
let modalPayment = document.querySelector("#payment");
let closeModalPayment = document.querySelector("#closePaymentModal");
let paymentForm = document.querySelector("#paymentForm");
let myChair;

closeModalPayment.onclick = function () {
    modalPayment.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalPayment) {
        modalPayment.style.display = "none";
    }
};

paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    swal.fire({
        title: "موفق",
        text: "بلیط شما با موفقیت خریداری شد.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });

    modalPayment.style.display = "none";
    myChair.classList.add("active");
});

for (i = 0; i < chairs.length; i++) {
    chairs[i].addEventListener("click", function (e) {
        let chair = e.target.classList.value;
        
        if (chair.search("blocked") < 0 && chair.search("reserved") < 0 && chair.search("active") < 0) {
            myChair = e.target;

            modalPayment.style.display = "block";
        }
    });
}