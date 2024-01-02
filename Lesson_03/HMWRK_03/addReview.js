function addReview() {
    const productNameInput = document.getElementById("productName");
    const reviewTextInput = document.getElementById("reviewText");

    const productName = productNameInput.value.trim();
    const reviewText = reviewTextInput.value.trim();

    if (!productName || !reviewText) {
        alert("Оба поля должны быть заполнены.");
        return;
    }

    const newReview = {id: Date.now(), productName, reviewText};

    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const existingProductIndex = existingReviews.findIndex((product) => product.productName === productName);

    if (existingProductIndex !== -1) {
        // Если продукт уже существует, добавим отзыв к существующему продукту
        existingReviews[existingProductIndex].reviews.push(newReview);
    } else {
        // Если продукт не существует, создадим новый продукт с отзывом
        const newProduct = {id: Date.now(), productName, reviews: [newReview]};
        existingReviews.push(newProduct);
    }

    localStorage.setItem("reviews", JSON.stringify(existingReviews));

    productNameInput.value = "";
    reviewTextInput.value = "";

    alert("Отзыв успешно добавлен!");
}