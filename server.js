const { Socket } = require("socket.io");
const app = require("./src/app");
const { log } = require("console");




const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', Socket => {
    console.log('Connected');
    
    Socket.on('disconnect',()=>{
        console.log('Disconnected');
});   
});
server.listen(3000,() =>{
    console.log('This server is running on port 3000')
});
