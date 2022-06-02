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
    const filteredData = localData.filter(value => value === dataToDelete);
    console.log(dataToDelete, localData, filteredData);
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

export const websiteTypes = [
  {
    shortName: 'news',
    price: 1000.00,
    currency: 'USD',
    name: 'News Site',
    description: "There's nothing fake about this site!",
    imageUrl:
      'https://i.dailymail.co.uk/i/pix/2014/12/18/24258DAD00000578-0-image-a-55_1418922050147.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
  {
    shortName: 'ecommerce',
    price: 2000.00,
    currency: 'USD',
    name: 'Ecommerce Site',
    description: 'This site will take you out of this world!',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/46aXsGGkRgC4zT9zL5_E5s4FGEU=/0x0:1010x673/1200x800/filters:focal(0x0:1010x673)/cdn.vox-cdn.com/uploads/chorus_image/image/45176182/Screen_Shot_2015-01-07_at_11.05.22_PM.0.0.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
  {
    shortName: 'social',
    price: 3000.00,
    currency: 'USD',
    name: 'Social Media Site',
    description: 'Built so good, Elon Musk will want to buy it!',
    imageUrl:
      'https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/docs/tweet-like-intent.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
  },
  {
    shortName: 'food',
    price: 750.00,
    currency: 'USD',
    name: 'Food Blog',
    description: 'Share all your mouth watering delights!',
    imageUrl:
      'https://i.ibb.co/v1FJq11/food-Display1.png&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
  },
];