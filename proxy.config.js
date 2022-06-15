const proxy = [
  {
  context: '/cadastrolimite',
  target:
      {
        "host": 'localhost',
        "protocol": "http:",
        "port": 8080
      },
      secure: false
    },

  ];

  //ng serve --proxy-config proxy.config.js 
  
  module.exports = proxy;


  //https://pxl1rwtbr002.dispositivos.bb.com.br:8762/