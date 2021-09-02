const ws = require('ws');

const webServer = new ws.Server({ port: 7000 });

webServer.on("connection", connectionS => {

    let clientName = "";


    connectionS.on("message", data => {
        let totalParticipants = [];
        clientName = data;
        console.log(`client Registered Name : ${data} `);
        console.log(` ${clientName} client connected`);

        connectionS.send(` Hey ${data} Hi!!! `);
        totalParticipants.push(data);
        connectionS.send(`Total participants ${totalParticipants.length}`);
    })

    connectionS.on("close", () => {
        console.log(`${clientName} has disconnected`)
    })
});

console.log("wow")