if (window.SCRIPT_IS_DYNAMICALLY_LOADED) {
    domContentLoadedListener();
} else {
    document.addEventListener(
        "DOMContentLoaded",
        domContentLoadedListener,
        false
    );
}

function domContentLoadedListener() {
    let hour = document.querySelector(".hour");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");
    let dateElement = document.querySelector(".header-content-date span");

    function clock() {
        let time = new Date();

        if (time.getHours() < 10) hour.innerHTML = "0" + time.getHours();
        else hour.innerHTML = time.getHours();

        if (time.getMinutes() < 10) minutes.innerHTML = "0" + time.getMinutes();
        else minutes.innerHTML = time.getMinutes();

        if (time.getSeconds() < 10) seconds.innerHTML = "0" + time.getSeconds();
        else seconds.innerHTML = time.getSeconds();
    }

    clock();
    setInterval(clock, 1000);

    const now = new Date();
    const option = {
        day: "numeric",
        month: "long",
        weekday: "long",
        year: "numeric",
    };

    dateElement.innerHTML = new Intl.DateTimeFormat("fa-IR", option).format(
        now
    );
}
