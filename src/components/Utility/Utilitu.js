const addToDb = (id) => {
    const storedCart = getCartInLocalStorage();
    const quantity = storedCart[id]
    if (!quantity) {
        storedCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        storedCart[id] = newQuantity;
    }
    localStorage.setItem('carts-stored', JSON.stringify(storedCart))

}

export { addToDb}