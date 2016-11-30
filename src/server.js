import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import io from 'socket.io';
import { generateData } from './data';


const PORT = 1212;
const HEARTBEAT = 3000;

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, 'static')));

const ioServer = io(server);

setInterval(() => {
    ioServer.emit('data', { data: generateData() });
}, HEARTBEAT);

app.get('/data', function(req, res) {
    res.json({ data: generateData() })
});

server.listen(PORT, function(){
    console.log(`listening on *:${PORT}`);
});

