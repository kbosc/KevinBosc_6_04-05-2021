formModal1 = document.querySelector(".form");
wrapperModal1 = document.querySelector(".modal__wrapper");
errorMsgModal1 = document.querySelectorAll(".error--msg--modal");

function validateForm(event) {
  reset();
  let errors = [
    validateName(
      firstNameModal1,
      regexNameModal1,
      errorNameModal1,
      firstErrorMsg
    ),
    validateName(
      lastNameModal1,
      regexNameModal1,
      errorNameModal1,
      lastErrorMsg
    ),
    validateName(emailModal1, regexMailModal1, errorNameModal1, emailErrorMsg),
    validateName(textModal1, regexTextModal1, errorNameModal1, textErrorMsg),
  ];
  if (errors.includes(false)) {
    event.preventDefault();
    return false;
  } else {
    formModal1.innerHTML = "Votre message à correctement était envoyer";
    wrapperModal1.removeChild(wrapperModal1.lastElementChild);
  }
}

function reset() {
  errorMsgModal1.forEach((e) => {
    e.textContent = "";
  });
  firstNameModal1.style.border = "none";
  lastNameModal1.style.border = "none";
  emailModal1.style.border = "none";
  textModal1.style.border = "none";
}

firstNameModal1 = document.querySelector(".form__firstname__input");
lastNameModal1 = document.querySelector(".form__lastname__input");
emailModal1 = document.querySelector(".form__email__input");
textModal1 = document.querySelector(".form__text__input");
regexNameModal1 = /^.{2,}$/;
regexMailModal1 =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
regexTextModal1 = /^.{10,}$/;
firstErrorMsg = "Le champ doit contenir aux moins 2 caractères";
lastErrorMsg = "Le champ doit contenir aux moins 2 caractères";
emailErrorMsg = "L'email est invalide";
textErrorMsg = "Le champ doit contenir aux moins 10 caractères";

function validateName(name, character, error, errormsg) {
  if (character.test(String(name.value).toLowerCase())) {
    return true;
  } else {
    name.style.border = "2px solid red";
    error.call(name, errormsg);
    return false;
  }
}

function errorNameModal1(errormsg) {
  let text = "the fields entered are incorrect.";
  if (this.style.border === "2px solid red") {
    this.nextElementSibling.textContent = errormsg;
  }
}
