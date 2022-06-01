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

export const deleteCartData = (dataToDelete) => {
  try {
    const localData = JSON.parse(localStorage.getItem('cartData'));
    const filteredData = localData.filter(value => value =! dataToDelete);
    localStorage.setItem('cartData', JSON.stringify(filteredData));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const getTotal = () => {
  try {
    const localData = JSON.parse(localStorage.getItem('cartData'));
    return localData.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
  } catch {
    return 0;
  }
}