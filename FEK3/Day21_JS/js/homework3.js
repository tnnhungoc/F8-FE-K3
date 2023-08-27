var data = [];
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var dataLogin = handleLogin("Nguyen Van B", "1234567");

function handleRegister(name, password, email) {
  if (name && password && email) {
    if (validateEmail(email)) {
      this.data.push({
        name: name,
        password: password,
        email: email,
        role: "user",
      });
    }
  } else {
    return console.log("error!");
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

console.log(data);

function handleLogin(name, password) {
  var found = this.data.find((e) => e.name === name);
  if (found && found.password === password) {
    console.log(found);
  } else {
    return console.log(`Thông tin đăng nhập không hợp lệ`);
  }
}
