var buttons = document.querySelectorAll("button");
var price   = document.querySelector("#price");

function getPrice(btn) { 
  var XHR = new XMLHttpRequest(); 
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText).bpi;
      renderPrice(data, btn);
    }
  }  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
}

function renderPrice(data, btn) {
  var currency = btn.target.innerText || "USD";
  price.innerText = data[currency].rate + " " + currency;
}

buttons.forEach(function(button){
  button.addEventListener("click", getPrice)
});

window.addEventListener("load", getPrice);
