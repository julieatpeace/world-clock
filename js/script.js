
function updateTime(){
let elSalvador = document.querySelector("#el-salvador");
let dateElSalvador = elSalvador.querySelector(".date");
let timeElSalvador = elSalvador.querySelector(".time");
let  time = moment().tz("America/Guatemala");


dateElSalvador.innerHTML = time.format("[<strong>]dddd[</strong><br/>]MMM Do YYYY");
timeElSalvador.innerHTML = time.format("h:mm:ss[<small>]A[</small>]");
setInterval
}

setInterval(updateTime,1000);
