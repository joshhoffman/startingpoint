express = require 'express'
app = express()
http = require 'http'

testf = () -> console.log('test ' + app.get('port'))
tests = (req, res) ->
    res.end('test')

http.createServer (req, res) ->
    res.writeHead 200,
        {'Content-Type': 'text/plain'}
    res.end 'Hello from coffeescript'
.listen(3000, testf)