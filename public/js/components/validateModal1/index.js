formModal1 = document.querySelector(".form");
wrapperModal1 = document.querySelector(".modal__wrapper");
errorMsgModal1 = document.querySelectorAll(".error--msg--modal");

function validateForm(event) {
  reset();
  if (
    validateName(firstNameModal1, regexNameModal1, errorNameModal1()) &&
    validateName(lastNameModal1, regexNameModal1, errorNameModal1()) &&
    validateName(emailModal1, regexMailModal1, errorNameModal1()) &&
    validateName(textModal1, regexTextModal1, errorNameModal1())
  ) {
    formModal1.innerHTML = "Votre message à correctement était envoyer";
    wrapperModal1.removeChild(wrapperModal1.lastElementChild);
  } else {
    event.preventDefault();
    return false;
  }
}

function reset() {
  errorMsgModal1.textContent = "";
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

function validateName(name, character, error) {
  if (character.test(String(name.value).toLowerCase())) {
    return true;
  } else {
    name.style.border = "2px solid red";
    error;
    return false;
  }
}

function errorNameModal1() {
  // errorMsgModal1 = this.errorMsgModal1
  //   errorMsgModal1.textContent =
  //     "Please enter 2 or more characters for the name field.";
  // "the fields entered are incorrect.";
  let text = "the fields entered are incorrect.";
  errorMsgModal1.forEach((div) => {
    if (firstNameModal1.style.border === "2px solid red") {
      div.textContent = text;
    } else {
      div.textContent = "";
    }
    return div;
    // div.textContent = text;
  });
}

// photographerNameModal1 = document.querySelector(".modal__wrapper__title span")
