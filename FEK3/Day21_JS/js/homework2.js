var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  customers.forEach((e) => {
    var firstLast = e.name.split(" ");
    e.shortName = firstLast[0] + " " + firstLast[firstLast.length - 1];
  });
  return customers.sort((a, b) => a.age - b.age);
}

var result = createCustomers(customers);

console.log(result);
