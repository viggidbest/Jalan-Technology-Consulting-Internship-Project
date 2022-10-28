var total = 0;
var totalEl = document.getElementById("total");
var listCoffee = ["Espresso", "Cappuccino", "Latte"]
var ul = document.getElementById("list")

function cal(i) {
  var form = document.forms[i]
  var milk = form.elements["Milk"].checked
  var cream = form.elements["Cream"].checked
  var latte = form.elements["Latte"].checked
  if (!milk && !cream && !latte) {
    alert("Please choose an addon")
    return
  }
  cup = new Cup(i, milk, cream, latte)
  total += cup.getPrice()
  // return false
  totalEl.innerText = total
  var li = document.createElement("li");
  var option = cup.getOptions()
  console.log(option)
  li.appendChild(document.createTextNode(listCoffee[i] + option+"  -cost: "+cup.getPrice()));
  ul.appendChild(li);
  console.log(total)
  console.log(total)
}
class Coffee {
  constructor(coffeeType) {



    this.milkPrice = coffeeType == 0 ? 60 : coffeeType == 1 ? 80 : 100
    this.creamPrice = coffeeType == 0 ? 75 : coffeeType == 1 ? 90 : 125
    this.latteePrice = coffeeType == 0 ? 100 : coffeeType == 1 ? 125 : 150
  }
}

class Cup extends Coffee {
  constructor(coffee, a, b, c) {
    super(coffee)
    this.milk = a || 0;
    this.cream = b || 0;
    this.lattee = c || 0;
  }
  getOptions() {
    var option = ""
    console.log(this.milk)
    if (this.milk == true) {
      option += " milk"
    }
    if (this.cream == 1) {
      option += " cream"
    }
    if (this.lattee == 1) {
      option += " latte"
    }
    return option
  }
  getPrice() {
    return this.milk * this.milkPrice + this.cream * this.creamPrice + this.lattee * this.latteePrice


  }
}
// const cup = new Cup(new Coffee("0"), 0,1,0);
// console.log(cup.getPrice())
