duplicate = obj => {
    sql = 'insert into fakesubmissions (user_id,division_id,city_id,quarter,year,subject,submission_date,staff_name,implementation_target,purchase_target,scanpo,nopo,createuser,createdate,status) select user_id,division_id,city_id,quarter,year,subject,submission_date,staff_name,implementation_target,purchase_target,scanpo,nopo,createuser,createdate,status from submissions where id = '+obj.id
    return sql
}
module.exports = {
    duplicate:duplicate
}