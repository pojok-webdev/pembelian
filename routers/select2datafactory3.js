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
        case 'odooproductparents':
            obj.i.odoorouter.getData({i:obj.i,type:'odooproductcategories'},result=>{
                callback({results:result.map(r=>{
                  return {id:r[0],text:r[1]}
                }).filter(f=>{
                    return f.text.toLowerCase().includes(obj.params.search.toLowerCase())
                })
              })
            })
        break
        case 'odooproductdetails':
            obj.i.odoorouter.getData({
                i:obj.i,type:'odooproducts',
                category_id:obj.params.category_id
            },result=>{
                callback({results:result.map(r=>{
                    console.log('R',r)
                  return {id:r[0],text:r[1]}
                })
              })
            })
        break
        case 'productparentspanji':
            obj.i.con.doQuery(obj.i.crud.gets({
                tableName:'productparentspanji',
                cols:["pcategory","categorypath"],
                orderby:[{key:"id",order:"desc"}],
                conditions:[{key:"1",val:"1"}]
            }),result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.pcategory,text:ob.categorypath}
                })
                .filter(f=>{
                    return f.text.toLowerCase().includes(obj.params.search.toLowerCase())
                })
                })
            })
        break
        case 'productspanji':
            obj.i.con.doQuery(obj.i.crud.gets({
                tableName:'productspanji',
                cols:["id","nama"],
                orderby:[{key:"id",order:"desc"}],
                conditions:[{key:"pcategory",val:obj.params.category_id}]
            }),result=>{
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.nama}
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