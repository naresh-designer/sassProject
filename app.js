let listProductHtml = document.querySelector(".listProduct");

let listProducts = [];

const addDataToHtml = () => {
  listProductHtml.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("items");
      newProduct.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
            <h4>"${product.name}"</h4>
            <p>"${product.company}"</p>
            <p>"${product.category}"</p>
            <p style="background-color:${product.colors[0]}; width:20px; height:20px;" >

            </>
      `;
      listProductHtml.appendChild(newProduct);
    });
  }
};

const initApp = () => {
  fetch("https://api.pujakaitem.com/api/products")
    .then((res) => res.json())
    .then((data) => {
      listProducts = data;
      addDataToHtml();
    });
};

initApp();
