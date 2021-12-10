const http = require('http')

const data = JSON.stringify([
    {
        nome: 'nome teste11111111111111', 
        email: 'email111111111111111111@email.com.br'
    },
    {
        nome: 'nome teste22222222222222222222', 
        email: 'email222222222222222222@email.com.br'
    }
]);

const options = { 
  hostname: 'localhost',
  port: 8081,
  path: '/associados',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()