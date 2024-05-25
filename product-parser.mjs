import data from './products.json' assert { type: 'json' };

function getAllProducts() {
    return data['products']
}

function getProductById(id) {
    var result = getAllProducts().find(elem => elem['id'] == id);
    return result == undefined ? null : result;
}

function getProductsByBrand(brand) {
    var result = getAllProducts().filter(elem => elem['brand'] == brand);
    return result == undefined ? null : result;
}
