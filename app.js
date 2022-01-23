const axios = require('axios');

const args = process.argv.slice(2)
if (args.length < 2) {
  console.log("need to pass in an amount and token (e.g. npx coincalc 100 bitcoin)")
  process.exit(1)
}

const amount = args[0]
const token = args[1]
const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${token}`

axios.get(url)
  .then(function (response) {

    const name = response.data[0].name
    const price = '\$' + response.data[0].current_price * amount
    console.log(`${amount} ${name} = ${price}`)
  })

  .catch(function (error) {
    console.log('token not supported by this api');
  })