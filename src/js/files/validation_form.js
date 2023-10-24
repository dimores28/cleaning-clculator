function isValidPhone(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

function isValidEmail(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

function isValidLastName(value) {
  return /^[a-zA-Z\-]+$/.test(value);
}

function isValidName(value) {
  return /^[a-zA-Z\-]+$/.test(value);
}

function isValidZipCode(value) {
  return /^(?:[0-9a-zA-Z]+([- ]?[0-9a-zA-Z]+)*)?$/.test(value);
}

function isValidAdress(value) {
  return /^(?![ -.&,_'":?!/])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!/]{2})[a-zA-Z0-9- .#@&,_'":.?!/]+$/.test(
    value
  );
}

function isValidCityName(value) {
  return /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$/.test(value);
}

const popupEmail = document.querySelector("#popupEmail");
const popupPhone = document.querySelector("#popupPhone");
const popupUserName = document.querySelector("#popupUserName");

popupPhone?.addEventListener("input", function () {
  if (!isValidPhone(popupPhone.value)) {
    popupPhone.classList.add("_notvalid");
  } else {
    popupPhone.classList.remove("_notvalid");
  }
});

popupEmail?.addEventListener("input", function () {
  if (!isValidEmail(popupEmail.value)) {
    popupEmail.classList.add("_notvalid");
  } else {
    popupEmail.classList.remove("_notvalid");
  }
});

popupUserName?.addEventListener("input", function () {
  if (!isValidName(popupUserName.value)) {
    popupUserName.classList.add("_notvalid");
  } else {
    popupUserName.classList.remove("_notvalid");
  }
});

const popupForm = document.querySelector("#popupForm");
popupForm?.addEventListener("submit", async function (e) {
  e.preventDefault();

  let error =
    isValidEmail(popupEmail.value) &&
    isValidPhone(popupPhone.value) &&
    isValidName(popupUserName.value);

  let formData = new FormData(popupForm);

  if (error) {
    popupForm.classList.add("_sending");

    let response = await fetch("https://www.tivacleaners.com/mail.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      let alertMsg = document.querySelector(".popup__alert");
      alertMsg.innerHTML =
        '<p class="alert__msg" >Your message has been sent!!!<p/>';
      alertMsg.classList.add("_show__success");
      popupForm.reset();
      popupForm.classList.remove("_sending");
    } else {
      let alertMsg = document.querySelector(".popup__alert");
      alertMsg.innerHTML = '<p class="alert__msg" >Error!!!<p/>';
      alertMsg.classList.add("_show");
      console.log(response.data);
      popupForm.classList.remove("_sending");
    }
  } else {
    let alertMsg = document.querySelector(".popup__alert");
    alertMsg.innerHTML =
      '<p class="alert__msg" >Fill in required fields!!!<p/>';
    alertMsg.classList.add("_show");
    // alert("Fill in required fields!");
  }
});

const calcFirstName = document.querySelector("#firstName");
const calcLasttName = document.querySelector("#lastName");
const calcEmail = document.querySelector("#userEmail");
const calcPhone = document.querySelector("#userPhone");
const calcZipCode = document.querySelector("#zipCode");
const calcCityName = document.querySelector("#userCity");
const calcAdress = document.querySelector("#userAddres");

let PhoneCF7 = document.querySelector("#PhoneCF7");
calcPhone?.addEventListener("input", function () {
  if (!isValidPhone(calcPhone.value)) {
    calcPhone.classList.add("_notvalid");
  } else {
    calcPhone.classList.remove("_notvalid");
  }
  PhoneCF7.value = calcPhone.value;
});

let EmailCF7 = document.querySelector("#EmailCF7");
calcEmail?.addEventListener("input", function () {
  if (!isValidEmail(calcEmail.value)) {
    calcEmail.classList.add("_notvalid");
  } else {
    calcEmail.classList.remove("_notvalid");
  }
  EmailCF7.value = calcEmail.value;
});

const FirstNameCF7 = document.querySelector('#FirstNameCF7');
calcFirstName?.addEventListener("input", function () {
  if (!isValidName(calcFirstName.value)) {
    calcFirstName.classList.add("_notvalid");
  } else {
    calcFirstName.classList.remove("_notvalid");
  }
  FirstNameCF7.value = calcFirstName.value;
});

const LastNameCF7 = document.querySelector('#LastNameCF7');
calcLasttName?.addEventListener("input", function () {
  if (!isValidLastName(calcLasttName.value)) {
    calcLasttName.classList.add("_notvalid");
  } else {
    calcLasttName.classList.remove("_notvalid");
  }
  LastNameCF7.value = calcLasttName.value;
});

const ZipCodeCF7 = document.querySelector("#ZipCodeCF7");
calcZipCode?.addEventListener("input", function () {
  if (!isValidZipCode(calcZipCode.value)) {
    calcZipCode.classList.add("_notvalid");
  } else {
    calcZipCode.classList.remove("_notvalid");
  }
  ZipCodeCF7.value = calcZipCode.value;
});

const CityCF7 = document.querySelector("#CityCF7");
calcCityName?.addEventListener("input", function () {
  if (!isValidCityName(calcCityName.value)) {
    calcCityName.classList.add("_notvalid");
  } else {
    calcCityName.classList.remove("_notvalid");
  }
  CityCF7.value = calcCityName.value;
});

const AddressCF7 = document.querySelector("#AddressCF7");
calcAdress?.addEventListener("input", function () {
  if (!isValidAdress(calcAdress.value)) {
    calcAdress.classList.add("_notvalid");
  } else {
    calcAdress.classList.remove("_notvalid");
  }
  AddressCF7.value = calcAdress.value;
});

const AptSuiteCF7 = document.querySelector("#AptSuiteCF7");
const aptSuite = document.querySelector("#aptSuite");
aptSuite?.addEventListener("input", function () {
  AptSuiteCF7.value = aptSuite.value;
});


const calcForm = document.querySelector("#calcForm");
calcForm?.addEventListener("submit", async function (e) {
  e.preventDefault();

  let error =
    isValidEmail(calcEmail.value) &&
    isValidPhone(calcPhone.value) &&
    isValidName(calcFirstName.value) &&
    isValidLastName(calcLasttName.value) &&
    isValidZipCode(calcZipCode.value) &&
    isValidCityName(calcCityName.value) &&
    isValidAdress(calcAdress.value);

  let formData = new FormData(calcForm);

  if (error) {
    calcForm.classList.add("_sending");
    $('#submitCF7').trigger("click");

    let response = await fetch("calcmail.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      let alertMsg = document.querySelector(".calculator__alert");
      alertMsg.innerHTML =
        '<p class="alert__msg" >Your message has been sent!!!<p/>';
      alertMsg.classList.add("_show__success");
      calcForm.reset();
      calcForm.classList.remove("_sending");

      if ($(e.target).hasClass("payment")) {
        $('.stripe-form input[type="submit"]').trigger("click");
        return;
      }

      window.location.href ='https://www.tivacleaners.com/confirmation/';

    } else {
      let alertMsg = document.querySelector(".calculator__alert");
      alertMsg.innerHTML = '<p class="alert__msg" >Error!!!<p/>';
      alertMsg.classList.add("_show");
      calcForm.classList.remove("_sending");
    }
  } else {
    let alertMsg = document.querySelector(".calculator__alert");
    alertMsg.innerHTML =
      '<p class="alert__msg" >Fill in required fields!!!<p/>';
    alertMsg.classList.add("_show");
  }
});
