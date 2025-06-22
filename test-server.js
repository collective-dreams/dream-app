const { createServer } = require('http');

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dream App - T3 + Solito</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background: #f5f5f5;
        }
        .container {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h1 { color: #1a1a1a; }
        .status { 
          background: #667eea; 
          color: white; 
          padding: 10px 20px;
          border-radius: 5px;
          display: inline-block;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from T3 + Solito v4! 🚀</h1>
        <p>This is a unified React Native + Next.js app</p>
        <div class="status">Server is working!</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Test server running on http://localhost:3000');
});