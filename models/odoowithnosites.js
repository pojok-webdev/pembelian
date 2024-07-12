const axios = require('axios');

gets = (obj,callback) => {

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://odoo.padi.net.id/api/sale.subscription?query={id,stage_id,stage_category,name,customer_number,prev_fb,user_id{id,name},partner_id{id,name,operatingunit_id{id,name}},site_location_id{id,name},recurring_invoice_line_ids{id,name,site_location_id{id,name,address},product_id{id,name,product_tmpl_id{id,name,default_code}}}}&filter=["%26","%26",["stage_category","!=","closed"],["stage_category","!=","draft"],["recurring_invoice_line_ids.site_location_id","=",false]]',

  url_: 'https://odoo.padi.net.id/api/sale.subscription?query='
        +'{id,name,customer_number,'
        +'partner_id{id,name,operatingunit_id{id,name}},'
        +'recurring_invoice_line_ids{id,name}}'
        +'&filter=["%26","%26",["stage_category","!=","closed"],["stage_category","!=","draft"],'
        +'["recurring_invoice_line_ids.site_location_id","=",false]]',
  headers: { 
    'Cookie': 'session_id=2d136c66ee9e0aa24bc0431a1cf1a1de9840a836'
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
getwithsites = (obj,callback) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://odoo.padi.net.id/api/sale.subscription?query={id,stage_id,stage_category,name,customer_number,prev_fb,user_id{id,name},partner_id{id,name,operatingunit_id{id,name}},site_location_id{id,name},recurring_invoice_line_ids{id,name,site_location_id{id,name,address},product_id{id,name,product_tmpl_id{id,name,default_code}}}}&filter=["%26","%26",["stage_category","!=","closed"],["stage_category","!=","draft"],["recurring_invoice_line_ids.site_location_id","!=",false]]',
    headers: { 
      'Cookie': 'session_id=2d136c66ee9e0aa24bc0431a1cf1a1de9840a836'
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
getall = (obj,callback) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://odoo.padi.net.id/api/sale.subscription?query={id,stage_id,stage_category,name,customer_number,prev_fb,user_id{id,name},partner_id{id,name,operatingunit_id{id,name}},site_location_id{id,name},recurring_invoice_line_ids{id,name,site_location_id{id,name,address},product_id{id,name,product_tmpl_id{id,name,default_code}}}}&filter=["%26",["stage_category","!=","closed"],["stage_category","!=","draft"]]',
    headers: { 
      'Cookie': 'session_id=2d136c66ee9e0aa24bc0431a1cf1a1de9840a836'
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
    gets:gets,getwithsites:getwithsites,getall:getall
}