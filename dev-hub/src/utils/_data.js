export const cartData = () => {
  try {
    return JSON.parse(localStorage.getItem('cartData'));
  } catch {
    return;
  }
}

export const addCartData = (data) => {
  try {
    let localData = JSON.parse(localStorage.getItem('cartData'));
    localData.push(data);
    localStorage.setItem('cartData', JSON.stringify(localData));
  } catch {
    localStorage.setItem('cartData', JSON.stringify([data]));
  }
}