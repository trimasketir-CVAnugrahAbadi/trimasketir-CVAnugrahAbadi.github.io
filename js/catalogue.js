const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
}

const getCard = (product) => {
    return`
        <div class="col">
            <div class="card mt-2 mb-2" style="width: 18rem;">
                <img src="img/products/${product.image}" class="card-img-top" alt="${product.image}" style="width:286px;height:160px;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${formatRupiah(product.price)}</p>
                    <a href="order.html" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
    `;
}

const getCatalogue = (productData) => {
    const fillerCards = `
        <div class="col">
            <div class="card mt-2 mb-2" style="width: 18rem; visibility: hidden;"></div>
        </div>
    `;

    let catalogueCards = `<div class="container">`;

    for (let i = 0; i < productData.length; i += 4) {
        catalogueCards += `<div class="row">`;

        if(productData.hasOwnProperty(i)) {
            catalogueCards += getCard(productData[i]);
        } else {
            catalogueCards += fillerCards;
        }

        if(productData.hasOwnProperty(i+1)) {
            catalogueCards += getCard(productData[i+1]);
        } else {
            catalogueCards += fillerCards;
        }

        if(productData.hasOwnProperty(i+2)) {
            catalogueCards += getCard(productData[i+2]);
        } else {
            catalogueCards += fillerCards;
        }

        if(productData.hasOwnProperty(i+3)) {
            catalogueCards += getCard(productData[i+3]);
        } else {
            catalogueCards += fillerCards;
        }

        catalogueCards += `</div>`;

    }

    catalogueCards += `</div>`;

    return catalogueCards;
}
