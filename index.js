const fs = require('fs')
// const { aesEncrypt, aesDecrypt } = require('./algorithms/aes')
const { RSAEncrypt, RSADecrypt } = require('./algorithms/rsa')

const test = () => new Promise((resolve, reject) => {
  (async () => {
    try {
      const publicKey = fs.readFileSync('./kuda.PUBLIC.xml').toString()
      const privateKey = fs.readFileSync('./0udafeQMc8rvwZm2Lq4b.xml').toString()

      const e = await RSAEncrypt(JSON.stringify({
        name: 'jalasem',
        email: 'kgasta@gmail.com'
      }), publicKey)

      const d = await RSADecrypt(e, privateKey)
      resolve({
        e,
        d: JSON.parse(d)
      })
    } catch (err) {
      resolve(err)
    }
  })()
})

test().then(r => {
  console.log(JSON.stringify(r, null, 2))
}).catch(e => {
  console.log(e)
})
