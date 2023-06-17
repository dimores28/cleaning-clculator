function isValidPhone(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

function isValidEmail(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

function isValidLastName(value) {
  return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value);
}

function isValidName(value) {
  return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value);
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

const bookEmail = document.querySelector("#bookEmail");
const bookPhone = document.querySelector("#bookPhone");
const bookUserName = document.querySelector("#bookUserName");

bookPhone?.addEventListener("input", function () {
  if (!isValidPhone(bookPhone.value)) {
    bookPhone.classList.add("_notvalid");
  } else {
    bookPhone.classList.remove("_notvalid");
  }
});

bookEmail?.addEventListener("input", function () {
  if (!isValidEmail(bookEmail.value)) {
    bookEmail.classList.add("_notvalid");
  } else {
    bookEmail.classList.remove("_notvalid");
  }
});

bookUserName?.addEventListener("input", function () {
  if (!isValidName(bookUserName.value)) {
    bookUserName.classList.add("_notvalid");
  } else {
    bookUserName.classList.remove("_notvalid");
  }
});

const bookForm = document.querySelector("#bookForm");
bookForm?.addEventListener("submit", async function (e) {
  e.preventDefault();

  let error =
    isValidEmail(bookEmail.value) &&
    isValidPhone(bookPhone.value) &&
    isValidName(bookUserName.value);

  let formData = new FormData(bookForm);

  if (error) {
    bookForm.classList.add("_sending");

    let response = await fetch("mail.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      let alertMsg = document.querySelector(".book__alert");
      alertMsg.innerHTML =
        '<p class="alert__msg" >Your message has been sent!!!<p/>';
      alertMsg.classList.add("_show__success");
      bookForm.reset();
      bookForm.classList.remove("_sending");
    } else {
      let alertMsg = document.querySelector(".book__alert");
      alertMsg.innerHTML = '<p class="alert__msg" >Error!!!<p/>';
      alertMsg.classList.add("_show");
      console.log(response.data);
      bookForm.classList.remove("_sending");
    }
  } else {
    let alertMsg = document.querySelector(".book__alert");
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

calcPhone?.addEventListener("input", function () {
  if (!isValidPhone(calcPhone.value)) {
    calcPhone.classList.add("_notvalid");
  } else {
    calcPhone.classList.remove("_notvalid");
  }
});

calcEmail?.addEventListener("input", function () {
  if (!isValidEmail(calcEmail.value)) {
    calcEmail.classList.add("_notvalid");
  } else {
    calcEmail.classList.remove("_notvalid");
  }
});

calcFirstName?.addEventListener("input", function () {
  if (!isValidName(calcFirstName.value)) {
    calcFirstName.classList.add("_notvalid");
  } else {
    calcFirstName.classList.remove("_notvalid");
  }
});

calcLasttName?.addEventListener("input", function () {
  if (!isValidLastName(calcLasttName.value)) {
    calcLasttName.classList.add("_notvalid");
  } else {
    calcLasttName.classList.remove("_notvalid");
  }
});

calcZipCode?.addEventListener("input", function () {
  if (!isValidZipCode(calcZipCode.value)) {
    calcZipCode.classList.add("_notvalid");
  } else {
    calcZipCode.classList.remove("_notvalid");
  }
});

calcCityName?.addEventListener("input", function () {
  if (!isValidCityName(calcCityName.value)) {
    calcCityName.classList.add("_notvalid");
  } else {
    calcCityName.classList.remove("_notvalid");
  }
});

calcAdress?.addEventListener("input", function () {
  if (!isValidAdress(calcAdress.value)) {
    calcAdress.classList.add("_notvalid");
  } else {
    calcAdress.classList.remove("_notvalid");
  }
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
