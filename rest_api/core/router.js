var restify = require('restify'),
        fs = require('fs')

// Find all controllers
var controllers = {}
    , controllers_path = process.cwd() + '/rest_api/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

// Creare server
var server = restify.createServer({ name: 'recapture-api' });

server
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    
// Cart routes
server.post("/cart", controllers.cart.createCart)
//server.put("/articles/:id", controllers.article.updateArticle)
//server.del("/articles/:id", controllers.article.deleteArticle)


var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})