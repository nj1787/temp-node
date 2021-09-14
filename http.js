const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Welcome To Our Homepage')
    res.end()
})


server.listen(5000)

