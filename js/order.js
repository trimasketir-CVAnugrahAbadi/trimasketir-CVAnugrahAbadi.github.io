const getTableBody = (productData) => {
    let tableBody = ``;

    productData.forEach(product => {
        tableBody += `
            <tr>
                <td>${product}</td>
                <td>
                    <input class="form-control" type="number" id="${product}" value="0">
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
                    <th scope="col">Jumlah</th>
                </tr>
            </thead>
            <tbody>
                ${tableBody}
            </tbody>
        </table>
    `;
}
