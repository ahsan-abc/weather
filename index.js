
const apikey = "537bfbd4ec654421a01f9631b70849ef";
const url = "https://api.openweathermap.org/data/2.5/weather?";
var city = "sahibganj";

var inr = document.getElementById("in");

inr.addEventListener("keydown", async function (event) {
  console.log(event);
  if (event.key == "Enter") {
    var data = await fetch(url + `q=${inr.value}` + `&appid=${apikey}`);
    var obj = await data.json();

    var text = Number.parseFloat(obj.main.temp) - 273.31;
    inr.nextElementSibling.innerHTML = inr.value;
    inr.nextElementSibling.nextElementSibling.innerHTML =
      Number.parseInt(text) + "'C";
    setTimeout(() => {
      inr.nextElementSibling.nextElementSibling.classList.remove("an");
      inr.nextElementSibling.classList.remove("an");
    }, 2000);
    inr.nextElementSibling.nextElementSibling.classList.add("an");
    inr.nextElementSibling.classList.add("an");
  }
});
setInterval(() => {
  console.log(inr.value);
  if (inr.value == "") {
    inr.classList.add("write");
  } else {
    inr.classList.remove("write");
  }
}, 1000);
