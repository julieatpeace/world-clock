
function updateTime() {
    const timezones = {
        "el-salvador": "America/Guatemala",
        "spain": "Europe/Madrid",
        "netherlands": "Europe/Amsterdam",
        "romania": "Europe/Bucharest"
    };

    Object.keys(timezones).forEach(id => {
        let element = document.querySelector(`#${id}`);
        let dateElement = element.querySelector(".date");
        let timeElement = element.querySelector(".time");
        let time = moment().tz(timezones[id]);

        dateElement.innerHTML = time.format("dddd, Do MMM YYYY");
        timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
    });
}
updateTime();
setInterval(updateTime, 1000);


function updateCity(event) {
    let countryTimezone = event.target.value;
    let countryTime = moment().tz(countryTimezone);

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `       <div class="city">
                <h1>🇸🇻</h1>
                <h2>${countryTimezone}</h2>
                <div class="date">${countryTime.format("dddd, Do MMM YYYY")}</div>
                <div class="time">${countryTime.format("h:mm:ss [<small>]A[</small>]")}</div>
            </div>`;  

};


let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", updateCity)
setInterval(updateCity,1000);