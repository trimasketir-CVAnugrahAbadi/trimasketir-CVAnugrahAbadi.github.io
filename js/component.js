class ItemCard extends HTMLElement {
    constructor() {
        super();
    }
    
    get image() {
        return this.getAttribute('image');
    }

    set image(val) {
        this.setAttribute('image', val);
    }
    
    get title() {
        return this.getAttribute('title');
    }

    set title(val) {
        this.setAttribute('title', val);
    }
    
    get price() {
        return this.getAttribute('price');
    }

    set price(val) {
        this.setAttribute('price', val);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let item = `
            <div class="card m-2" style="width: 18rem;">
                <img src="img/products/${this.image}" class="card-img-top" alt="${this.image}">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">Rp. ${this.price}</p>
                    <a href="order.html" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        `;

        this.innerHTML = item;
    }
}

customElements.define('item-card', ItemCard);
