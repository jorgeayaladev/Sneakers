let allContainerCart = document.querySelector('.container-items');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
//let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

loadEventListenrs();
function loadEventListenrs() {
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
        //console.log(e.target.parentElement);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');
        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce
                totalCard = totalCard.toFixed(2);
            }
        })
        buyThings = buyThings.filter(product => product.id !== deleteId);

       // countProduct--;
    }

    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        //amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('figure img').src,
        title: product.querySelector('div h2').textContent,
        price: product.querySelector('div b.price').textContent,
        id: product.querySelector('div a').getAttribute('data-id'),
        amount: 1

    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id == infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id == infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        //countProduct++;
    }

    loadHtml();
    //console.log(infoProduct);
}

function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, id, amount } = product;
        const row = document.createElement('div');
        row.classList.add('item-car');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="item-price">S/.${price}</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>

        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        //amountProduct.innerHTML = countProduct;
    });
}

function clearHtml() {
    containerBuyCart.innerHTML = '';
}

function showCart(x) {
  document.getElementById("products-id").style.display = "block";
}
function closeBtn() {
  document.getElementById("products-id").style.display = "none";
}
