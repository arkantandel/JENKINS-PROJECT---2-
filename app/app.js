const http = require('http');
const deploymentName = process.env.DEPLOYMENT_NAME || 'EC2';
const version = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <h1>🚀 CI/CD App Running</h1>
    <p>Version: ${version}</p>
    <p>Server: ${deploymentName}</p>
  `);
});

server.listen(3000);
