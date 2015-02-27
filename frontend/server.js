var express = require('express'),
    staticServer = express();

staticServer.use(express.static(__dirname));

staticServer.listen(8001);

console.log('Frontend Server Running On Port 8001');
