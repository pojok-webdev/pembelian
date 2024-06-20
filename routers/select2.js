getData = (obj,callback) => {
    console.log('getData obj model',obj.model)
    switch(obj.model){
        case 'locationbysubscriptionline':
            obj.i.modelsubscription.productbysubscription({
                subscription_id:params.subscription_id,
                i:i,
                session_id:req.cookies.session_id
            },result=>{
                console.log('RESULT',result.result[0].recurring_invoice_line_ids.map(obj=>{return {id:obj.id,text:obj.name}}))
                callback({results:result.result[0].recurring_invoice_line_ids.map(obj=>{return {id:obj.id,text:obj.name}})})
            })
        break
        case 'productbyrecurring_invoice_line_id':
            obj.i.modelsubscription.productbysubscriptionline({
                line_id:obj.params.recurring_invoice_line_id,
                i:obj.i,
                session_id:obj.session_id
            },result=>{
                console.log('route RESULT',result.result.map(obj=>{return {id:obj.site_location_id.id,text:obj.site_location_id.name}}))
                callback({results:result.result.map(obj=>{return {id:obj.site_location_id.id,text:obj.site_location_id.name}})})
            })
        break
        /*case 'productbysubscription':
            obj.i.modelsubscription.productbysubscription({
                subscription_id:params.subscription_id,
                i:i,
                session_id:req.cookies.session_id
              },result=>{
                console.log('RESULT',result.result[0].recurring_invoice_line_ids.map(obj=>{return {id:obj.id,text:obj.name}}))
                res.send({results:result.result[0].recurring_invoice_line_ids.map(obj=>{return {id:obj.id,text:obj.name}})})
              })
        break
        case 'lastmile':
            console.log('routetr obj',obj)
            obj.i.lastmile.gets({search:obj.search},result=>{
                res.send({results:result.map(obj=>{return {id:obj.id,text:obj.name}})})
            })
        break*/
        case 'subscription':
            obj.i.subscription.gets({session_id:req.cookies.session_id,search:params.search}
                ,partners=>{
                //console.log('RESULT of getpartners',partners)
                console.log('Partnerszz',JSON.parse(partners).result)
                callback({results:JSON.parse(partners).result.map(obj=>{
                  return {id:obj.id,text:obj.customer_number+' - '+obj.partner_id.name}
                })})
            
              })
        break
    }
}

module.exports = {
    getData:getData
}