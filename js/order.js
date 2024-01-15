const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
}

const getTableBody = (productData) => {
    let tableBody = ``;

    productData.forEach(product => {
        tableBody += `
            <tr>
                <td>${product.name}</td>
                <td>${formatRupiah(product.price)}</td>
                <td>
                    <input class="form-control" type="number" id="${product.name}" value="0" min="0" pattern="[0-9]+">
                </td>
            </tr>
        `;
    });

    return tableBody;
}

const getTableForm = (productData) => {
    const tableBody = getTableBody(productData);

    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Produk</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Jumlah</th>
                </tr>
            </thead>
            <tbody>
                ${tableBody}
            </tbody>
        </table>
    `;
}
