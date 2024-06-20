doSendWa = obj => {
    console.log("Should sendawa")
    var settings = {
        "url": "https://multichannel.qiscus.com/whatsapp/v1/idmsw-g4y2wgpk6uv4vql/2687/messages",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Qiscus-Secret-Key": "58a8ac62fac448d33ab6978e16b372dd",
          "Qiscus-App-Id": "idmsw-g4y2wgpk6uv4vql",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        "data": JSON.stringify({
          "to": "+628813272107",
          "type": "template",
          "template": {
            "name": "notifikasi_maintenance_rev2",
            "language": {
              "policy": "deterministic",
              "code": "id"
            },
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "text",
                    "text": "01"
                  }
                ]
              },
              {
                "type": "body",
                "parameters": [
                  {
                    "type": "text",
                    "text": "Ticket 001"
                  },
                  {
                    "type": "text",
                    "text": "Ticket 002"
                  },
                  {
                    "type": "text",
                    "text": "Ticket 003"
                  },
                  {
                    "type": "text",
                    "text": "Ticket 004"
                  },
                  {
                    "type": "text",
                    "text": "Ticket 005"
                  },
                  {
                    "type": "text",
                    "text": "Ticket 006"
                  },
                  {
                    "type": "text",
                    "text": "Ticket 007"
                  }
                ]
              }
            ]
          }
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
send_notifikasi_maintenance_rev2 = obj => {
  console.log("Should sendawa")
  var settings = {
      "url": "https://multichannel.qiscus.com/whatsapp/v1/idmsw-g4y2wgpk6uv4vql/2687/messages",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Qiscus-Secret-Key": "58a8ac62fac448d33ab6978e16b372dd",
        "Qiscus-App-Id": "idmsw-g4y2wgpk6uv4vql",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      "data": JSON.stringify({
        "to": "+628813272107",
        "type": "template",
        "template": {
          "name": "notifikasi_maintenance_rev2",
          "language": {
            "policy": "deterministic",
            "code": "id"
          },
          "components": [
            {
              "type": "header",
              "parameters": [
                {
                  "type": "text",
                  "text": obj.header
                }
              ]
            },
            {
              "type": "body",
              "parameters": [
                {
                  "type": "text",
                  "text": obj.date
                },
                {
                  "type": "text",
                  "text": obj.hour
                },
                {
                  "type": "text",
                  "text": obj.activity
                },
                {
                  "type": "text",
                  "text": obj.priority
                },
                {
                  "type": "text",
                  "text": obj.impact
                },
                {
                  "type": "text",
                  "text": obj.clientName
                },
                {
                  "type": "text",
                  "text": obj.location
                }
              ]
            }
          ]
        }
      }),
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}