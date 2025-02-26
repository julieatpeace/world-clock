
function updateTime() {
    const timezones = {
        "el-salvador": "America/Guatemala",
        "spain": "Europe/Madrid",
        "netherlands": "Europe/Amsterdam",
        "romania": "Europe/Bucharest"
    };

    Object.keys(timezones).forEach(id => {
        
        let element = document.querySelector(`#${id}`);
        
        if (element){
        let dateElement = element.querySelector(".date");
        let timeElement = element.querySelector(".time");
        let time = moment().tz(timezones[id]);

        dateElement.innerHTML = time.format("dddd, Do MMM YYYY");
        timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
        }
    });
}
updateTime();
setInterval(updateTime, 1000);


function updateCity(event) {
    let countryTimezone = event.target.value;
    if (countryTimezone === "current") {
        countryTimezone = moment.tz.guess()
    }

    let countryTime = moment().tz(countryTimezone);
    let cityName = countryTimezone.replace("_"," ").split("/")[1];
    
    if (cityName === "Guatemala") {
        cityName = "San Salvador";
    }
    if (cityName === "Madrid") {
        cityName = "Barcelona";
    }

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `       <div class="city" style="border:none;">
                <h1>🌎</h1>
                <h2>${cityName}</h2>
                <div class="date">${countryTime.format("dddd, Do MMM YYYY")}</div>
                <div class="time">${countryTime.format("h:mm:ss [<small>]A[</small>]")}</div>
            </div>
            <a href="/">All cities</a>`;
            

};

let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", function(event) {
    setInterval(function() {
        updateCity(event);
    }, 1000);
});