let search = document.querySelector(".search");
let origin = document.querySelector("#origin");
let goal = document.querySelector("#goal");
let date = document.querySelector("#date");

search.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!origin.value) {
        origin.parentElement.classList.add("danger");
        origin.focus();
        return 0;
    } else {
        origin.parentElement.classList.remove("danger");
    }

    if (!goal.value) {
        goal.parentElement.classList.add("danger");
        goal.focus();
        return 0;
    } else {
        goal.parentElement.classList.remove("danger");
    }

    if (!date.value) {
        date.parentElement.classList.add("danger");
        date.focus();
        return 0;
    } else {
        date.parentElement.classList.remove("danger");
    }

    let dontExist = document.querySelector(".dont-exist");
    let start = document.querySelector(".start");
    start.style.display = "none";

    if (origin.value == "تهران" && goal.value == "بیرجند") {
        let trips = document.querySelector(".trips");
        dontExist.style.display = "none";

        trips.innerHTML = `<div class="trips">
                    <div class="trip">
                        <div class="img">
                            <div><img src="/img/airplanes/IR.png" alt="IR"></div>
                            <p>ایران ایر</p>
                        </div>
                        <div class="od">
                            <div class="od-cities">
                                <h3>تهران</h3>
                                <span class="line"></span>
                                <h3>بیرجند</h3>
                            </div>

                            <div class="clock">
                                <i class="fad fa-clock"></i>
                                <p><span>ساعت پرواز</span><strong>22:00</strong></p>
                            </div>
                        </div>
                        <div class="info">
                            <p class="-w-100 -center price"><strong>9,850,000</strong> تومان</p>
                            <a href="http://127.0.0.1:5500/view/seat-selection.html" class="-w-100 -btn -btn-warning">انتخاب پرواز</a>
                            <small class="-w-100 -text-danger -center">9 صندلی باقی مانده</small>
                        </div>
                    </div>
                    <div class="trip">
                        <div class="img">
                            <div><img src="/img/airplanes/EP.png" alt="EP"></div>
                            <p>آسمان</p>
                        </div>
                        <div class="od">
                            <div class="od-cities">
                                <h3>تهران</h3>
                                <span class="line"></span>
                                <h3>بیرجند</h3>
                            </div>

                            <div class="clock">
                                <i class="fad fa-clock"></i>
                                <p><span>ساعت پرواز</span><strong>04:00</strong></p>
                            </div>
                        </div>
                        <div class="info">
                            <p class="-w-100 -center price"><strong>7,800,000</strong> تومان</p>
                            <a href="#" class="-w-100 -btn -btn-warning">انتخاب پرواز</a>
                            <small class="-w-100 -text-danger -center">1 صندلی باقی مانده</small>
                        </div>
                    </div>
                    <div class="trip">
                        <div class="img">
                            <div><img src="/img/airplanes/I3.png" alt="I3"></div>
                            <p>آتا</p>
                        </div>
                        <div class="od">
                            <div class="od-cities">
                                <h3>تهران</h3>
                                <span class="line"></span>
                                <h3>بیرجند</h3>
                            </div>

                            <div class="clock">
                                <i class="fad fa-clock"></i>
                                <p><span>ساعت پرواز</span><strong>20:30</strong></p>
                            </div>
                        </div>
                        <div class="info">
                            <p class="-w-100 -center price"><strong>9,005,000</strong> تومان</p>
                            <a href="#" class="-w-100 -btn -btn-warning">انتخاب پرواز</a>
                            <small class="-w-100 -text-danger -center">6 صندلی باقی مانده</small>
                        </div>
                    </div>
                    <div class="trip">
                        <div class="img">
                            <div><img src="/img/airplanes/SR.png" alt="SR"></div>
                            <p>سپهران</p>
                        </div>
                        <div class="od">
                            <div class="od-cities">
                                <h3>تهران</h3>
                                <span class="line"></span>
                                <h3>بیرجند</h3>
                            </div>

                            <div class="clock">
                                <i class="fad fa-clock"></i>
                                <p><span>ساعت پرواز</span><strong>22:00</strong></p>
                            </div>
                        </div>
                        <div class="info">
                            <p class="-w-100 -center price"><strong>3,850,000</strong> تومان</p>
                            <a href="#" class="-w-100 -btn -btn-warning">انتخاب پرواز</a>
                            <small class="-w-100 -text-danger -center">5 صندلی باقی مانده</small>
                        </div>
                    </div>
                    <div class="trip">
                        <div class="img">
                            <div><img src="/img/airplanes/W5.png" alt="W5"></div>
                            <p>ماهان</p>
                        </div>
                        <div class="od">
                            <div class="od-cities">
                                <h3>تهران</h3>
                                <span class="line"></span>
                                <h3>بیرجند</h3>
                            </div>

                            <div class="clock">
                                <i class="fad fa-clock"></i>
                                <p><span>ساعت پرواز</span><strong>22:00</strong></p>
                            </div>
                        </div>
                        <div class="info">
                            <p class="-w-100 -center price"><strong>9,850,000</strong> تومان</p>
                            <a href="#" class="-w-100 -btn -btn-warning">انتخاب پرواز</a>
                            <small class="-w-100 -text-danger -center">9 صندلی باقی مانده</small>
                        </div>
                    </div>
                </div>`;
    } else {
        dontExist.style.display = "flex";
    }
});

origin.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (!origin.value) {
        origin.parentElement.classList.add("danger");
        origin.focus();
    } else {
        origin.parentElement.classList.remove("danger");
        origin.parentElement.classList.add("success");
    }
});

goal.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (!goal.value) {
        goal.parentElement.classList.add("danger");
        goal.focus();
    } else {
        goal.parentElement.classList.remove("danger");
        goal.parentElement.classList.add("success");
    }
});

date.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (!date.value) {
        date.parentElement.classList.add("danger");
        date.focus();
    } else {
        date.parentElement.classList.remove("danger");
        date.parentElement.classList.add("success");
    }
});

$("#date").persianDatepicker();
