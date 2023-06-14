// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getToDb();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('id', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getToDb();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('id', JSON.stringify(shoppingCart));
    }
}

const getToDb = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('id');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteFormDb = () => {
    localStorage.removeItem('id');
}

export {
    addToDb,
    removeFromDb,
    getToDb,
    deleteFormDb
}
