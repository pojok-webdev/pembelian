duplicate = obj => {
    sql = 'insert into fakesubmission_details (submission_id,product_id,vendor_id,itemname,brand,partnumber,description,amount,discountlevel,proposed_vendor,proposed_price,proposed_totalprice,vendor,price,totalprice,final_price,information,purchase_reason,placement_location,guarantee,ppn,ongkir,note,purchase_date,arrivaldate,verificationreason,reject_reason,suratjalan,createuser,createdate,status) select submission_id,product_id,vendor_id,itemname,brand,partnumber,description,amount,discountlevel,proposed_vendor,proposed_price,proposed_totalprice,vendor,price,totalprice,final_price,information,purchase_reason,placement_location,guarantee,ppn,ongkir,note,purchase_date,arrivaldate,verificationreason,reject_reason,suratjalan,createuser,createdate,status from submission_details where id = '+obj.id
    return sql
}
module.exports = {
    duplicate:duplicate
}