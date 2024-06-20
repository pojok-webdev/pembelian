getData = (obj,callback) => {
    console.log('getData obj model',obj.model)
    switch(obj.model){
        case 'lastmile':
            obj.i.lastmile.gets({search:obj.search},result=>{
                console.log('result getdata lastmile',result)
                callback({results:result.map(obj=>{return {id:obj.id,text:obj.name}})})
            })
        break
        case 'causeselect2':
            obj.i.cause.gets({search:params.search,category_id:params.category_id},result=>{
                res.send({results:result.map(obj=>{
                  return {id:obj.id,text:obj.name}
                })})
            })
        break
    }
}

module.exports = {
    getData:getData
}