getData = (obj,callback) => {
    switch(obj.type){
        case 'odooproducts':
            obj.i.odooproducts.gets(result=>{
                //console.log('ReSulT',result)
                callback(result.result.map(o=>{
                    return [
                      o.id,
                      o.display_name,
                      o.categ_id.name
                    ]
                  }))
            })
        break
        case 'odooproductcategories':
            obj.i.odooproductcategories.gets(result=>{
                //console.log('ReSulT',result)
                callback(result.result.map(o=>{
                    return [
                      o.id,
                      o.display_name,
                      o.name
                    ]
                  }))
            })
        break
        }
}
module.exports = {
    getData:getData
}