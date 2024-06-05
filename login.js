var submitButton = document.getElementById("submit");

submitButton.onclick = function () {
  var cN = document.getElementById("cardNumber").value;
  var pin = document.getElementById("pinNumber").value;

  const cardNumber = '123456789';
  const pinNumber = '123456';

  if (cardNumber === cN && pinNumber === pin) {
    window.location.href = "processATM.html";
  } else {
    alert("Incorrect card number or PIN");
  }
};
