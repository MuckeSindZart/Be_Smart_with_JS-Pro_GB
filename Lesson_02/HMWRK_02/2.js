"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    id: Date.now(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];


const productsContainer = document.getElementById("products-container");

function createReviewElement(review) {
  const li = document.createElement("li");
  li.textContent = review.text;
  return li;
}

function createReviewForm(product) {
  const form = document.createElement("form");
  const textarea = document.createElement("textarea");
  textarea.placeholder = "от 50 до 500 символов";
  const submitButton = document.createElement("button");
  submitButton.textContent = "Добавить";

  form.appendChild(textarea);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = textarea.value.trim();
    if (text.length < 50 || text.length > 500) {
      alert("Отзыв должен содержать от 50 до 500 символов.");
      return;
    }

    const newReview = { id: Date.now(), text };
    product.reviews.push(newReview);

    renderListProducts(initialData);
  });

  return form;
}

function renderProduct(product) {
  const productContainer = document.createElement("div");
  const productName = document.createElement("h2");
  productName.textContent = product.product;

  const reviewsList = document.createElement("ul");
  product.reviews.forEach((review) => {
    reviewsList.appendChild(createReviewElement(review));
  });

  const reviewForm = createReviewForm(product);

  productContainer.appendChild(productName);
  productContainer.appendChild(reviewsList);
  productContainer.appendChild(reviewForm);

  return productContainer;
}

function renderListProducts(products) {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    productsContainer.appendChild(renderProduct(product));
  });
}

renderListProducts(initialData);