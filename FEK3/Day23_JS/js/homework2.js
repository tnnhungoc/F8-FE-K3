Number.prototype.getCurrency = function (currency) {
  return Intl.NumberFormat().format(this) + " " + currency;
};

var price = 789565695975;
console.log(price.getCurrency("d"));
