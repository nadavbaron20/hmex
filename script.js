class Product {
  price;
  name;
  expirationDate;
  constructor(priceInput, nameInput, expirationDateInput) {
    this.price = priceInput;
    this.name = nameInput;
    this.expirationDate = expirationDateInput;
  }
}

class Shop {
  products;
  constructor() {
    this.Products = [];
    this.readMethod();
  }
  insertobject(product) {
    this.products.push(product);
    this.upDateJsonObject();
  }
  upDateJsonObject() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }
  readMethod() {
    if (localStorage.getItem("products") != null) {
      this.products = JSON.parse(localStorage.getItem("products"));
    } else {
      this.upDateJsonObject();
    }
  }
}

let newStore = new Shop();

let newProduct = new Product(10, "tomato", 01012023);
let newProduct2 = new Product(8, "appel", 01012023);
newStore.insertobject(newProduct);
newStore.insertobject(newProduct2);

document.getElementById("addProduct").addEventListener("click", () => {
  let price = document.getElementById("price").value;
  let productName = document.getElementById("productName").value;
  let expDate = document.getElementById("expDate").value;
  let newProduct = new Product(
    productprice,
    productName,
    productexpirationDate
  );
  newStore.insertobject(newProduct);
});

// class Render {
//   #users;
//   constructor() {
//     this.#users = JSON.parse(localStorage.getItem("usersStorage"));
//   }
//   renderHTML() {
//     this.#users.forEach((user) => {
//       let newContainer = document.createElement("div");
//       let leftSide = document.createElement("div");
//       let rightSide = document.createElement("div"); //create different divs.

//       newContainer.setAttribute("class", "newContainer");
//       leftSide.setAttribute("class", "leftSide");
//       rightSide.setAttribute("class", "rightSide"); //define classes for each div.

//       let text1 = document.createTextNode(
//         `First name: ${user.firstName}, Surname: ${user.lastName}`
//       );
//       let text2 = document.createTextNode(
//         `Password: ${user.password}, Nickname: ${user.nick}`
//       ); //define the texts.

//       leftSide.appendChild(text1);
//       rightSide.appendChild(text2); //inserting the texts into the divs.

//       newContainer.appendChild(leftSide);
//       newContainer.appendChild(rightSide); //inserting the small divs into a bigger one.

//       document.body.appendChild(newContainer);
//     });
//   }
// }

// let newUsers = new Render();
// newUsers.renderHTML();
