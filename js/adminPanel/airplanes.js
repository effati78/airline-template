var airplanes = document.querySelector(".airplanes");
var items = "";

fetch("http://127.0.0.1:8080/company/all")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("error!");
        }
    })
    .then(function(obj) {
        for (let i = 0; i < obj.length; i++) {
            items += `<div class="airplane">
                        <a href="${(obj[i].name == "ایران ایر") ? "http://127.0.0.1:5500/view/adminPanel/admin/iranair.html" : "javascript:void(0)" }"></a>
                        <div class="image"><img src="${obj[i].image}" alt="${obj[i].name}"></div>
                        <h3 class="-f-900 -center">${obj[i].name}</h3>
                    </div>`;
        }
        airplanes.innerHTML = items;
    })
    .catch((error) => console.log(error));
