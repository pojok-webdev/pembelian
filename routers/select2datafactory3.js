getData = (obj,callback) => {
    switch(obj.params.model){
        case 'product':
            obj.i.products.gets({search:obj.params.search},result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                  })})
            })
        break
        case 'productparents':
            obj.i.productparents.gets({search:obj.params.search},result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                  })})
            })
        break
        case 'productdetail':
            obj.i.productdetail.gets({search:obj.params.search},result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                  })})
            })
        break
        case 'causecategory':
            obj.i.cause.getcategories({search:obj.params.search},result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })})
            })
        break
        case 'peruntukan':
            console.log('search param',obj.params.search)

            obj.i.con.doQuery(obj.i.crud.gets({
                tableName:'peruntukan',
                cols:["id","name","description"],
                orderby:[{key:"id",order:"desc"}],
                conditions:[{key:"1",val:"1"}]
            }),result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })
                .filter(f=>{
                    return f.text.toLowerCase().includes(obj.params.search.toLowerCase())
                })
                })
            })
        break
        case 'productparents':
            obj.i.con.doQuery(obj.i.crud.gets({
                tableName:'productparents',
                cols:["id","name","description"],
                orderby:[{key:"id",order:"desc"}],
                conditions:[{key:"1",val:"1"}]
            }),result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })
                .filter(f=>{
                    return f.text.toLowerCase().includes(obj.params.search.toLowerCase())
                })
                })
            })
        break
        case 'productdetails':
            obj.i.con.doQuery(obj.i.crud.gets({
                tableName:'productdetails',
                cols:["id","partnumber","description"],
                orderby:[{key:"id",order:"desc"}],
                conditions:[{key:"1",val:"1"}]
            }),result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.partnumber}
                })
                .filter(f=>{
                    return f.text.toLowerCase().includes(obj.params.search.toLowerCase())
                })
                })
            })
        break
        case 'proposedvendor':
            obj.i.con.doQuery(obj.i.crud.gets({
                tableName:'vendors',
                cols:["id","name","address"],
                orderby:[{key:"id",order:"desc"}],
                conditions:[{key:"1",val:"1"}]
            }),result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })
                .filter(f=>{
                    return f.text.toLowerCase().includes(obj.params.search.toLowerCase())
                })
                })
            })
        break
    }
}
module.exports = {
    getData:getData
}