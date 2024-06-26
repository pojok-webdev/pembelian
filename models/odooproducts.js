const axios = require('axios');
gets = callback => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://odoo.padi.net.id/api/product.template?'
            +'query={id,display_name,categ_id{id,name},description,type}'
            +'&filter=[["type","=","product"]]',
        headers: { 
            'Cookie': 'session_id=a728a25989621bf46fc0f5965ed192e34d7d0a3b'
        }
    };
    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
        callback(response.data)
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    });
}
module.exports = {
    gets:gets
}