var server = require('ws').Server;
var s = new server({port:5001});

s.on('connection',function(ws){
  ws.on('message',function(message){
    const ret = {
      type: message == "check_in" ? "type_a" : "type_b",
      message,
    }

    s.clients.forEach(function(client){
      client.send(JSON.stringify(ret));
    });
  });

  ws.on('close',function(){
    console.log('I lost a client');
  });

});