const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';
    
    switch (req.url) {
        case '/users':
            filePath = path.join(__dirname, 'user.html');
            break;
        case '/home':
        case '/':
            filePath = path.join(__dirname, 'home.html');
            break;
        case '/about':
            filePath = path.join(__dirname, 'about.html');
            break;
        case '/contact':
            filePath = path.join(__dirname, 'contact.html');
            break;
        default:
            filePath = path.join(__dirname, 'file_not_found.html');
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
