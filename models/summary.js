gets = (obj) => {
    sql = 'select budgeting_number, '
    sql+= 'date_format(submission_date,"%d-%m-%Y")submission_date, '
    sql+= 'date_format(implementation_target,"%d-%m-%Y")implementation_target, '
    sql+= 'date_format(purchase_target,"%d-%m-%Y")purchase_target, '
    sql+= 'price,proposed_price, placement_location,proposed_totalprice,amount,'
    sql+= 'case b.status '
    sql+= 'when "1" then "Pending" '
    sql+= 'when "2" then "Approved Only" '
    sql+= 'when "3" then "Rejected" '
    sql+= 'when "4" then "Approved Bought and Paid" '
    sql+= 'when "5" then "Approved Bought and Termin" '
    sql+= 'when "6" then "Pre Approval" '
    sql+= 'when "7" then "Deal Price" '
    sql+= 'when "8" then "Received" '
    sql+= 'when "9" then "Verified" '
    sql+= 'end status,'
    sql+= 'd.name category,' 
    sql+= 'final_price, '
    sql+= 'totalprice, '
    sql+= 'itemname, '
    sql+= 'a.createuser from submissions a '
    sql+= 'left outer join submission_details b on b.submission_id=a.id '
    sql+= 'left outer join products c on c.id=b.product_id '
    sql+= 'left outer join categories d on d.id=c.category_id '
    sql+= 'order by b.createdate desc '
    return sql
}
module.exports = {
    gets:gets
}