var express = require('express'),
    app     = express(),
    mysql   = require('mysql'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    connectionPool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'simple_catalog'
    });

app.use(bodyParser.json());
app.use(cors());
app.listen(8000);

app.post('/products', function(request, response) {
    var product = request.body;

    connectionPool.getConnection(function(err, connection) {
        var query = {
            name: product.name,
            description: product.description,
            price: product.price
        };

        connection.query('INSERT INTO products SET ?', query, function(err, rows) {
            connection.release();
        });
    });

    response.send();
});

app.get('/products', function(request, response) {
    var product = request.body;

    connectionPool.getConnection(function(err, connection) {
        connection.query("SELECT   p.id, p.name, p.description, p.price, " +
                         "GROUP_CONCAT(pc.comment SEPARATOR '|||') AS 'comments' " +
                         "FROM     products p " +
                         "LEFT JOIN product_comments pc ON pc.product_id = p.id " +
                         "GROUP BY p.id", function(err, rows) {
            connection.release();

            response.send({
                products: rows
            });
        });
    });
});

app.post('/products/:id/comments', function(request, response) {
    var comment = request.body.commentText,
        productId = request.params.id;

    connectionPool.getConnection(function(err, connection) {
        var query = {
            comment: comment,
            product_id: productId
        };

        connection.query('INSERT INTO product_comments SET ?', query, function(err, rows) {
            connection.release();
        });
    });

    response.send();
});

console.log('Simple Catalog Rest API Running On Port 8000');
