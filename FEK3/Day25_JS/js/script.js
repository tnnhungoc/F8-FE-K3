var showOverlay = document.querySelector(".show-overlay");
var button = showOverlay.querySelector("button");
var email = document.getElementById("email");
var name_field = document.getElementById("name");
var password = document.getElementById("password");
var overlay = document.getElementById("overlay");
var login_button = document.getElementById("login");
var register_button = document.getElementById("register");

//toggle overlay
button.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("login-register").style.display = "block";
});

overlay.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("login-register").style.display = "none";
});

//validate email
email.addEventListener("keydown", function () {
  if (!validate_email(email.value)) {
    document.getElementById("email-error").style.display = "block";
  } else {
    document.getElementById("email-error").style.display = "none";
  }
});

function validate_email(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//validate password
password.addEventListener("keydown", function () {
  if (!password.value) {
    document.getElementById("password-error").style.display = "block";
  } else {
    document.getElementById("password-error").style.display = "none";
  }
});

//validate name field
name_field.addEventListener("keydown", function () {
  if (!name_field.value) {
    document.getElementById("name-error").style.display = "block";
  } else {
    document.getElementById("name-error").style.display = "none";
  }
});

//update form depending on which button is active
update_tabs();

function update_tabs() {
  if (check_active(login_button)) {
    name_field.style.display = "none";
    document.getElementById("name_label").style.display = "none";
    document.getElementById("login-register").style.height = "400px";
  }
  if (check_active(register_button)) {
    name_field.style.display = "block";
    document.getElementById("name_label").style.display = "block";
    document.getElementById("login-register").style.height = "450px";
  }
  clear_form();
}

function clear_form() {
  email.value = "";
  password.value = "";
  name_field.value = "";
  document.getElementById("account-error").display = "none";
}

//toggle form type buttons
login_button.addEventListener("click", function () {
  if (!check_active(login_button) && check_active(register_button)) {
    register_button.classList.remove("active");
    login_button.classList.add("active");
    update_tabs();
  }
});

register_button.addEventListener("click", function () {
  if (!check_active(register_button) && check_active(login_button)) {
    login_button.classList.remove("active");
    register_button.classList.add("active");
    update_tabs();
  }
});

function check_active(element) {
  if (element.classList.contains("active")) {
    return true;
  } else {
    return false;
  }
}

//Submit button
var submit_button = document.getElementById("submit-btn");

submit_button.addEventListener("click", function () {
  document.getElementById("account-error").display = "block";
});

// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
