import mock from '../mock'
/* eslint-disable */
// ** Utils
import { paginateArray, sortCompare, randomDate, getRandomInt } from '../utils'

// Images Imports
import product1 from '@src/assets/images/pages/eCommerce/1.png'
import product2 from '@src/assets/images/pages/eCommerce/2.png'
import product3 from '@src/assets/images/pages/eCommerce/3.png'
import product4 from '@src/assets/images/pages/eCommerce/4.png'
import product5 from '@src/assets/images/pages/eCommerce/5.png'
import product6 from '@src/assets/images/pages/eCommerce/6.png'
import product7 from '@src/assets/images/pages/eCommerce/7.png'
import product8 from '@src/assets/images/pages/eCommerce/8.png'
import product9 from '@src/assets/images/pages/eCommerce/9.png'
import product10 from '@src/assets/images/pages/eCommerce/10.png'
import product11 from '@src/assets/images/pages/eCommerce/11.png'
import product12 from '@src/assets/images/pages/eCommerce/12.png'
import product13 from '@src/assets/images/pages/eCommerce/13.png'
import product14 from '@src/assets/images/pages/eCommerce/14.png'
import product15 from '@src/assets/images/pages/eCommerce/15.png'
import product16 from '@src/assets/images/pages/eCommerce/16.png'
import product17 from '@src/assets/images/pages/eCommerce/17.png'
import product18 from '@src/assets/images/pages/eCommerce/18.png'
import product19 from '@src/assets/images/pages/eCommerce/19.png'
import product20 from '@src/assets/images/pages/eCommerce/20.png'
import product21 from '@src/assets/images/pages/eCommerce/21.png'
import product22 from '@src/assets/images/pages/eCommerce/22.png'
import product23 from '@src/assets/images/pages/eCommerce/23.png'
import product24 from '@src/assets/images/pages/eCommerce/24.png'
import product25 from '@src/assets/images/pages/eCommerce/25.png'
import product27 from '@src/assets/images/pages/eCommerce/27.png'
import product26 from '@src/assets/images/pages/eCommerce/26.png'

const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
const nextWeek = new Date(nextDay.getTime() + 7 * 24 * 60 * 60 * 1000)

const data = {
  products: [
    {
      id: 1,
      nom: 'VicTsing Wireless Mouse,',
      description:
        'After thousands of samples of palm data, we designed this ergonomic mouse. The laptop mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the laptop mouse.',
      type: 'VicTsing',
      prix: 10.99,
      image: product27,
      hasFreeShipping: true,
      duree: 2
    },
    {
      id: 2,
      nom: 'Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses',
      description:
        'Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen',
      type: 'Bose',
      prix: 249.0,
      image: product26,
      hasFreeShipping: false,
      duree: 5
    },
    {
      id: 3,
      nom: 'Willful Smart Watch for Men Women 2020,',
      description:
        'Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.',
      type: 'Willful',
      prix: 29.99,
      image: product25,
      hasFreeShipping: false,
      duree: 5
    },
    {
      id: 4,
      nom: 'Ronyes Unisex College Bag Bookbags for Women',
      description:
        'Made of high quality water-resistant material; padded and adjustable shoulder straps; external USB with built-in charging cable offers a convenient charging',
      type: 'Ronyes',
      prix: 23.99,
      image: product24,
      hasFreeShipping: false,
      duree: 2
    },
    {
      id: 5,
      nom: 'Toshiba Canvio Advance 2TB Portable External Hard Drive',
      description: 'Up to 3TB of storage capacity to store your growing files and content',
      type: 'Toshiba',
      prix: 69.99,
      image: product23,
      hasFreeShipping: false,
      duree: 2
    },
    {
      id: 6,
      nom: 'Tile Pro - High Performance Bluetooth Tracker',
      description:
        'FIND KEYS, BAGS & MORE -- Pro is our high-performance finder ideal for keys, backpacks, luggage or any other items you want to keep track of. The easy-to-use finder and free app work with iOS and Android.',
      type: 'Tile',
      prix: 29.99,
      image: product22,
      hasFreeShipping: false,
      duree: 4
    },
    {
      id: 7,
      nom: 'Bugani M90 Portable Bluetooth Speaker',
      description:
        'Bluetooth Speakers-The M90 Bluetooth speaker uses the latest Bluetooth 5.0 technology and the latest Bluetooth ATS chip, Connecting over Bluetooth in seconds to iPhone, iPad, Smart-phones, Tablets, Windows, and other Bluetooth devices.',
      type: 'Bugani',
      prix: 56.0,
      image: product21,
      hasFreeShipping: false,
      duree: 3
    },
    {
      id: 8,
      nom: 'PlayStation 4 Console',
      description:
        'All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.',
      type: 'Sony',
      prix: 339.95,
      image: product20,
      hasFreeShipping: false,
      duree: 1
    },
    {
      id: 9,
      nom: 'Giotto 32oz Leakproof BPA Free Drinking Water',
      description:
        'With unique inspirational quote and time markers on it,this water bottle is great for measuring your daily intake of water,reminding you stay hydrated and drink enough water throughout the day.A must have for any fitness goals including weight loss,appetite control and overall health.',
      type: '3M',
      prix: 16.99,
      image: product19,
      hasFreeShipping: false,
      duree: 5
    },
    {
      id: 10,
      nom: 'Oculus Quest All-in-one VR',
      description:
        'All-in-one VR: No PC. No wires. No limits. Oculus quest is an all-in-one gaming system built for virtual reality. Now you can play almost anywhere with just a VR headset and controllers. Oculus touch controllers: arm yourself with the award-winning Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game',
      type: 'Oculus',
      prix: 645.0,
      image: product18,
      hasFreeShipping: false,
      duree: 1
    },
    {
      id: 11,
      nom: 'Handbags for Women Large Designer bag',
      description:
        'Classic Hobo Purse: Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business',
      type: 'Hobo',
      prix: 39.99,
      image: product17,
      hasFreeShipping: false,
      duree: 3
    },
    {
      id: 12,
      nom: 'Adidas Mens Tech Response Shoes',
      description:
        'Comfort + performance.  Designed with materials that are durable, lightweight and extremely comfortable. Core performance delivers the perfect mix of fit, style and all-around performance.',
      type: 'Adidas',
      prix: 54.59,
      image: product16,
      hasFreeShipping: false,
      duree: 5
    },
    {
      id: 13,
      nom: 'Laptop Bag',
      description:
        'TSA FRIENDLY- A separate DIGI SMART compartment can hold 15.6 inch Laptop as well as 15 inch, 14 inch Macbook, 12.9 inch iPad, and tech accessories like charger for quick TSA checkpoint when traveling',
      type: 'TAS',
      prix: 29.99,
      image: product15,
      hasFreeShipping: false,
      duree: 5
    },
    {
      id: 14,
      nom: 'Wireless Charger 5W Max',
      description:
        'Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.',
      type: '3M',
      prix: 10.83,
      image: product14,
      hasFreeShipping: false,
      duree: 3
    },
    {
      id: 15,
      nom: 'Vankyo leisure 3 mini projector',
      description:
        'SUPERIOR VIEWING EXPERIENCE: Supporting 1920x1080 resolution, VANKYO Leisure 3 projector is powered by MStar Advanced Color Engine, which is ideal for home entertainment. 2020 upgraded LED lighting provides a superior viewing experience for you.',
      type: 'Vankyo Store',
      prix: 99.99,
      image: product13,
      hasFreeShipping: false,
      duree: 2
    },
    {
      id: 16,
      nom: 'New Apple iPad Pro',
      description:
        'Up to 10 hours of surﬁng the web on Wi‑Fi, watching video, or listening to music. Up to 9 hours of surﬁng the web using cellular data network, Compatible with Smart Keyboard Folio and Bluetooth keyboards',
      type: 'Apple',
      prix: 799.99,
      image: product12,
      hasFreeShipping: false,
      duree: 3
    },
    {
      id: 17,
      nom: 'Nike Air Max',
      description:
        'With a bold application of colorblocking inspired by modern art styles, the Nike Air Max 270 React sneaker is constructed with layers of lightweight material to achieve its artful look and comfortable feel.',
      type: 'Nike',
      prix: 98.95,
      image: product11,
      hasFreeShipping: false,
      duree: 1
    },
    {
      id: 18,
      nom: 'Logitech K380 Wireless Keyboard',
      description:
        'Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.',
      type: 'Logitech',
      prix: 81.99,
      image: product10,
      hasFreeShipping: false,
      duree: 4
    }
  ],
  userWishlist: [
    { id: 1, productId: 26 },
    { id: 2, productId: 23 }
  ],
  userCart: [
    { id: 1, productId: 27, qty: 1 },
    { id: 2, productId: 21, qty: 1 },
    { id: 3, productId: 26, qty: 1 },
    { id: 4, productId: 25, qty: 1 },
    { id: 5, productId: 23, qty: 1 }
  ]
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/products').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', sortBy = 'featured', perPage = 9, page = 1 } = config.params

  const queryLowered = q.toLowerCase()

  const filteredData = data.products.filter(product => product.nom.toLowerCase().includes(queryLowered))

  let sortDesc = false
  const sortByKey = (() => {
    if (sortBy === 'prix-desc') {
      sortDesc = true
      return 'prix'
    }
    if (sortBy === 'prix-asc') {
      return 'prix'
    }
    sortDesc = true
    return 'id'
  })()

  const sortedData = filteredData.sort(sortCompare(sortByKey))
  if (sortDesc) sortedData.reverse()

  const paginatedData = JSON.parse(JSON.stringify(paginateArray(sortedData, perPage, page)))

  paginatedData.forEach(product => {
    /* eslint-disable no-param-reassign */
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1
    /* eslint-enable */
  })

  return [
    200,
    {
      products: paginatedData,
      total: filteredData.length,
      userWishlist: data.userWishlist,
      userCart: data.userCart
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Product
// ------------------------------------------------
mock.onGet(/\/apps\/ecommerce\/products\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.products.findIndex(p => p.id === productId)
  const product = data.products[productIndex]

  if (product) {
    // Add data of wishlist and cart
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1

    // * Add Dummy data for details page
    product.colorOptions = ['primary', 'success', 'warning', 'danger', 'info']

    return [200, { product }]
  }
  return [404]
})

// ------------------------------------------------
// GET: Return Wishlist Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/wishlist').reply(() => {
  const products = data.userWishlist.map(wishlistProduct => {
    const product = data.products.find(p => p.id === wishlistProduct.productId)
    product.isInCart = data.userCart.findIndex(p => p.productId === wishlistProduct.productId) > -1
    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// GET: Return Cart Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/cart').reply(() => {
  const products = data.userCart.map(cartProduct => {
    const product = data.products.find(p => p.id === cartProduct.productId)

    // Other data
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === cartProduct.productId) > -1
    product.qty = cartProduct.qty
    product.shippingDate = randomDate(nextDay, nextWeek)
    product.offers = getRandomInt(1, 4)
    product.discountPercentage = getRandomInt(3, 20)

    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// POST: Add Item in user Cart
// ------------------------------------------------
mock.onPost('/apps/ecommerce/cart').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userCart
  let lastId = 0
  if (length) lastId = data.userCart[length - 1].i

  data.userCart.push({
    id: lastId + 1,
    productId,
    qty: 1
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Cart
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/cart\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userCart.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userCart.splice(productIndex, 1)

  return [200]
})

// ------------------------------------------------
// POST: Add Item in user Wishlist
// ------------------------------------------------
mock.onPost('/apps/ecommerce/wishlist').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userWishlist
  let lastId = 0
  if (length) lastId = data.userWishlist[length - 1].i

  data.userWishlist.push({
    id: lastId + 1,
    productId: Number(productId)
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Wishlist
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/wishlist\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userWishlist.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userWishlist.splice(productIndex, 1)

  return [200]
})
