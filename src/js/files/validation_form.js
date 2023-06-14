function isValidPhone(p) {
  var phoneRe = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

function isValidEmail(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

function isValidName(value) {
  return /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(value);
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

    let response = await fetch("sendmailg.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      bookForm.reset();
      bookForm.classList.remove("_sending");
    } else {
      alert("Ошибка");
      bookForm.classList.remove("_sending");
    }
  } else {
    alert("Заполните обязательные поля!");
  }
});
