getData = (obj,callback) => {
    console.log('ObeJe',obj)
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
        case 'ap':
            obj.i.aps.gets({search:params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })})
              })
        break
        case 'backbone':
            obj.i.backbone.gets({search:params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                }).filter(ob=>{
                    return ob.text.toLowerCase().includes(params.search.toLowerCase())
                })})
              })
        break
        case 'bts':
            obj.i.bts.gets({search:params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                }).filter(ob=>{
                    return ob.text.toLowerCase().includes(params.search.toLowerCase())
                })})
              })
        break
        case 'core':
            obj.i.cores.gets({search:params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })})
              })
        break
        case 'datacenter':
            obj.i.datacenters.gets({search:params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })})
              })
        break
        case 'lastmile':
            console.log('Lastmile Params',params)
            obj.i.lastmile.gets({search:obj.params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                }).filter(ob=>{
                    return ob.text.toLowerCase().includes(params.search.toLowerCase())
                })})
              })
        break        
        case 'ptp':
            obj.i.ptp.gets({search:params.search},result=>{
                console.log('Result',result)
                callback({results:result.map(ob=>{
                    return {id:ob.id,text:ob.name}
                })})
              })
        break
        case 'vendor':
                str = obj.i.crud.gets({
                    tableName:obj.params.tableName,
                    cols:obj.params.cols,
                    conditions:obj.params.conditions
                  })
                  console.log('query str',str)
                  doQuery(str,result=>{
                    callback({results:result.map(ob=>{
                        return {id:ob.id,text:ob.alias+" ("+ob.name+")"}
                    })})
                })
        break

    }
}
module.exports = {
    getData:getData
}