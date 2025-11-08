// run: npm run seed
require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/Product')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shoppyglobe'

const products = [
  { name:'Wireless Headphones', description:'Comfortable over-ear wireless headphones', price:2499, image:'https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dwa9f9a593/images/hi-res/a/378ce28721edbae8_AUD005btBLK_SoundFormAdaptHeadset_Shot2.jpg?sw=700&sh=700&sm=fit&sfrm=png' },
  { name:'Smart Watch', description:'Track fitness and notifications', price:3999, image:'https://hammeronline.in/cdn/shop/files/Hammerfit.webp?v=1694859121' },
  { name:'Bluetooth Speaker', description:'Portable speaker with rich bass', price:1999, image:'https://media.wired.com/photos/683a782e13687d4580a2c63a/4:3/w_640%2Cc_limit/StormBox%25202%2520ryan%2520waniata.png' },
  { name:'Gaming Mouse', description:'Ergonomic mouse with RGB', price:899, image:'https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg' },
  { name:'Mechanical Keyboard', description:'Tactile switches keyboard', price:2999, image:'https://images-cdn.ubuy.co.in/63400c68afe02d2b0c7aeb85-mechanical-gaming-keyboard-87-keys-small.jpg' },
  { name:'USB-C Hub', description:'Expand your ports', price:1299, image:'https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw7592b3f6/images/hi-res/8/24ab26877cf66a7a_AVI207-UsbC5in1Adapter-Front-Ortho-Webgg01.jpg?sfrm=png' },
  { name:'4K Monitor', description:'27-inch 4K UHD display', price:15999, image:'https://i.pcmag.com/imagery/roundups/01Y9bqNdRmGOzHcetHQG2FW-36.fit_lim.size_1050x.webp' },
  { name:'External SSD', description:'Fast portable storage', price:4999, image:'https://cdn.mos.cms.futurecdn.net/oABv64aMWxHAnm6nMLustH.jpg' }
]

mongoose.connect(MONGODB_URI).then(async ()=> {
  console.log('Connected, seeding...')
  await Product.deleteMany({})
  await Product.insertMany(products)
  console.log('Seed done')
  process.exit(0)
}).catch(err=> {
  console.error(err)
  process.exit(1)
})
