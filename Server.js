const http=require('http');
const app=require('./app');
const port=process.env.PORT||3001;
const server=http.createServer(app);
console.log("Listning on port 3000 .......")
server.listen(port);