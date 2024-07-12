doRoute = (obj,callback) => {
    console.log('obj doRoute',obj)
    switch(obj.type){
        case 'laporandowntime':
            callback('mainreportpage/'+obj.type)
        break
        case 'laporanticketterselesaikan':
            callback('mainreportpage/'+obj.type)
        break
        case 'laporanticketterbuka':
            callback('mainreportpage/'+obj.type)
        break
        case 'subscriptions':
            callback('mainreportpage/'+obj.type)
        break
        case 'locations':
            callback('mainreportpage/'+obj.type)
        break
        case 'SubmissionDetailVendor':

        break
    }
}
getPath = (obj,callback) => {
    switch(obj.type){
        case 'laporandowntime':
            callback('getpath/'+obj.type)
        break
        case 'laporanticketterselesaikan':
            callback('getpath/'+obj.type)
        break
        case 'laporanticketterbuka':
            callback('getpath/'+obj.type)
        break    
        case 'subscriptions':
            callback('getpath/'+obj.type)
        break
        case "locations":
            callback('getpath/'+obj.type)
        break
    }
}
getData = (obj,callback) => {
    switch(obj.type){
        case 'laporandowntime':
            obj.i.reports.laporanticketterbuka({},rpts=>{
                console.log('rpts',rpts)
                callback(rpts.map(row=>{
                    return [
                        row.kdticket,
                        row.clientname,
                        row.location_id,
                        row.cause,
                        row.requesttype
                    ]
                }))
            })
        break
        case 'laporanticketterselesaikan':
            obj.i.reports.laporanticketterbuka({},rpts=>{
                console.log('rpts',rpts)
                callback(rpts.map(row=>{
                    return [
                        row.kdticket,
                        row.clientname,
                        row.location_id,
                        row.cause,
                        row.requesttype
                    ]
                }))
            })
        break
        case 'laporanticketterbuka':
            obj.i.reports.laporanticketterbuka({},rpts=>{
                console.log('rpts',rpts)
                callback(rpts.map(row=>{
                    return [
                        row.kdticket,
                        row.clientname,
                        row.location_id,
                        row.cause,
                        row.requesttype
                    ]
                }))
            })
        break    
        case 'subscriptions':
            obj.i.modelsubscription.subscriptionLocs(obj,result=>{
                console.log('subscriptions result',result)
                callback(result.result.map(row=>{
                    return [
                        row.partner_id.id,
                        row.partner_id.name,
                        row.customer_number,
                        row.recurring_invoice_line_ids.map(site=>{return site.product_id.id}).join(),
                        row.recurring_invoice_line_ids.map(site=>{return site.product_id.name}).join(),
                        row.recurring_invoice_line_ids.map(site=>{return site.site_location_id.id}).join(),
                        row.recurring_invoice_line_ids.map(site=>{return site.site_location_id.address}).join(),
                        row.recurring_invoice_line_ids.map(site=>{return site.site_location_id.name}).join(),
                        row.user_id.id,
                        row.user_id.name,
                        row.name
                    ]
                }))
            })
        break
        case 'locations':
            obj.i.modellocation.gets(obj,result=>{
                callback(result.result.map(row=>{
                    return [
                        row.partner_id.customernumber,
                        row.partner_id.id,
                        row.partner_id.name,
                        row.name,
                        row.address,
                        row.code,
                        row.kelurahan_id.id,
                        row.kelurahan_id.name,
                        row.kecamatan_id.id,
                        row.kecamatan_id.name,
                        row.kota_id.id,
                        row.kota_id.name,
                        row.state_id.id,
                        row.state_id.name,
                    ]
                }))
            })
        break
        case 'submissiondetailvendor':
            filter = obj.filter.split('&')
            console.log('FIL',filter.map(f=>{
                ob = f.split('=')
                return {key : ob[0],val:ob[1]}
            }))
            //console.log('FILTER',filter)
            obj.i.con.doQuery(obj.i.oribudgeting.getSubmissionDetailVendor({
                submission_detail_id:15
            }),result=>{
                console.log('result',result)
                callback(result)
            })
        break

    }
}
getColumns = obj => {
    switch(obj.type){
        case 'laporanticketterbuka':
            return ["kdticket","nama","alamat","penyebab","type"]
        break
        case 'subscriptions':
            return ["id partner","partner","customer number","id produk","nama produk","id site","alamat","nama","ID AM","AM","nama"]
        break
        case 'locations':
            return ["customernumber","id partner","nama partner","nama","alamat","code","id kelurahan","nama kelurahan","id kecamatan","nama kecamatan","id kota","nama kota","id propinsi","nama propinsi"]
    }
}
module.exports = {
    doRoute:doRoute,getPath:getPath,getData:getData,getColumns
}