var saveVendor = obj => {
    sql = 'insert into vendors ';
    sql+= '(name,address,phone,bankaccount,namecard,offeringsample,invoicesample,receiptsample,createuser)';
    sql+= 'values ';
    sql+= '(';
    sql+= '"'+removeQuotes(obj.name)+'",';
    sql+= '"'+obj.address+'",';
    sql+= '"'+obj.phone+'",';
    sql+= '"'+obj.bankaccount+'",';



    sql+= '"'+obj.namecard+'",';
    sql+= '"'+obj.offeringsample+'",';
    sql+= '"'+obj.invoicesample+'",';
    sql+= '"'+obj.receiptsample+'",';



    sql+= '"'+obj.createuser+'"';
    sql+= ')';
    sql+= 'on duplicate key update ';
    sql+= 'name="'+obj.name+'",';
    sql+= 'address="'+obj.address+'",'
    sql+= 'phone="'+obj.phone+'",';
    sql+= 'bankaccount="'+obj.bankaccount+'", '




    sql+= 'namecard="'+obj.namecard+'",';
    sql+= 'offeringsample="'+obj.offeringsample+'",'
    sql+= 'invoicesample="'+obj.invoicesample+'",';
    sql+= 'receiptsample="'+obj.receiptsample+'", '

    sql+= 'createuser="'+obj.createuser+'" '
    console.log('saveVendor SQL',sql)
    return sql;
},
updateVendor = obj => {
    sql = 'update vendors ';
    sql+= 'set name="'+obj.name+'",';
    sql+= 'address="'+obj.address+'",';
    sql+= 'phone="'+obj.phone+'",';
    sql+= 'bankaccount="'+obj.bankaccount+'",';

    sql+= 'namecard="'+obj.namecard+'",';
    sql+= 'offeringsample="'+obj.offeringsample+'",';
    sql+= 'invoicesample="'+obj.invoicesample+'",';
    sql+= 'receiptsample="'+obj.receiptsample+'",';




    sql+= 'createuser="'+obj.createuser+'"';
    sql+= 'where id ="'+obj.id+'" '
    console.log('updateVendor SQL',sql)
    return sql;
},
getVendor = obj => {
    sql = 'select id,name,address,phone,bankaccount,namecard,offeringsample,invoicesample,receiptsample from vendors ';
    sql+= 'where id="'+obj.id+'" '
    sql+= 'order by name asc '
    console.log('getVendor SQL',sql)
    return sql;
},
getVendornames = () => {
    sql = 'select id,name,address from vendors ';
    sql+= 'where status="1" '
    sql+= 'order by name asc '
    console.log('getVendorNames SQL',sql)
    return sql;
},
getVendors = () => {
    sql = 'select id,name,address,phone,bankaccount,namecard,offeringsample,invoicesample,receiptsample from vendors ';
    sql+= 'where status="1" '
    sql+= 'order by name asc '
    console.log('getVendors SQL',sql)
    return sql;
},
getVendorpage = obj => {
    sql = 'select id,name,address,phone,bankaccount,namecard,offeringsample,invoicesample,receiptsample from vendors ';
    sql+= 'where status="1" '
    sql+= 'order by name asc '
    sql+= 'limit '+obj.page+','+obj.pageSize+' '
    console.log('getVendorpage SQL',sql)
    return sql;
},
getVendorCount = () => {
    sql = 'select count(id)cnt from vendors ';
    sql+= 'where status="1" '
    console.log('getVendorCount SQL',sql)
    return sql;
}
setVendorActive = obj => {
    sql = "update vendors set status='"+obj.status+"' "
    sql+= "where id="+obj.id+ " "
    console.log('setVendorActive SQL',sql)
    return sql
},
searchVendor = obj => {
    sql = 'select id,name,address,phone,bankaccount,namecard,offeringsample,invoicesample,receiptsample from vendors '
    sql+= 'where status="1" '
    sql+= 'and ('
    sql+= 'name like "%'+obj.searchData+'%" '
    sql+= 'or address like "%'+obj.searchData+'%" '
    sql+= 'or phone like "%'+obj.searchData+'%" '
    sql+= 'or bankaccount like "%'+obj.searchData+'%" '
    sql+= ') '
    sql+= 'order by name asc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    console.log('searchVendor SQL',sql)
    return sql
},
searchVendorCount = obj => {
    sql = 'select count(id) cnt from vendors '
    sql+= 'where status="1" '
    sql+= 'and ('
    sql+= 'name like "%'+obj.searchData+'%" '
    sql+= 'or address like "%'+obj.searchData+'%" '
    sql+= 'or phone like "%'+obj.searchData+'%" '
    sql+= 'or bankaccount like "%'+obj.searchData+'%" '
    sql+= ') '
    console.log('searchVendorCount SQL',sql)
    return sql
},
updatePrice = obj => {
    sql = 'update products_vendors '
    sql+= 'set price='+obj.price+' '
    sql+= 'where product_id='+obj.product_id+' and vendor_id='+obj.vendor_id+' '
    console.log('sql update price ',sql)
    return sql
},
saveProduct = obj => {
    console.log("OBJ",obj)
    sql = 'insert into products ';
    sql+= '(name,category_id,partnumber,unit,createuser)';
    sql+= 'values ';
    sql+= '(';
    sql+= '"'+removeQuotes(obj.name)+'",';
    sql+= '"'+obj.category_id+'",';
    sql+= '"'+obj.partnumber+'",';
    sql+= '"'+obj.unit+'",';
    sql+= '"'+obj.createuser+'") ';
    console.log('saveProduct SQL',sql)
    return sql;
},
updateProduct = obj => {
    console.log("OBJ",obj)
    sql = 'update products ';
    sql+= 'set name="'+removeQuotes(obj.name)+'",';
    sql+= 'partnumber="'+obj.partnumber+'",';
    sql+= 'category_id="'+obj.category_id+'",';
    sql+= 'unit="'+obj.unit+'" ';
    sql+= 'where id="'+obj.id+'"';
    console.log('updateProduct SQL',sql)
    return sql;
},
getProduct = obj => {
    sql = 'select a.id,a.category_id,a.name,b.name category_name,a.partnumber,a.unit,a.lastupdate from products a ';
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'where a.id="'+obj.id+'" ';
    sql+= 'order by a.name asc '
    console.log('getProduct SQL',sql)
    return sql;
},
getProducts = () => {
    sql = 'select a.id,a.category_id,b.name category_name,a.name,a.partnumber,a.unit,a.lastupdate from products a ';
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'where a.status="1" '
    sql+= 'order by a.name asc '
    console.log('getProducts SQL',sql)
    return sql;
},
getProductpage = obj => {
    sql = 'select a.id,a.category_id,a.name,b.name category_name,a.partnumber,a.unit,'
    sql+= 'date_format(c.lastupdate,"%d/%m/%Y %H:%i") lastupdate from products a ';
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'left outer join '
    sql+= '('
    sql+= ' select product_id,max(lastupdate)lastupdate from products_vendors group by product_id'
    sql+= ') c on c.product_id=a.id '
    sql+= 'where a.status="1" '
    sql+= 'order by a.name asc '
    sql+= 'limit '+obj.page+','+obj.pageSize
    console.log('getProductpage SQL',sql)
    return sql;
},
getProductCount = obj => {
    sql = 'select count(id)cnt from products a ';
    sql+= 'where a.status="1" '
    console.log('getProductCount SQL',sql)
    return sql;
},
setProductActive = obj => {
    sql = "update products set status='"+obj.status+"' "
    sql+= "where id="+obj.id+ " "
    console.log('setProductActive SQL',sql)
    return sql
},
searchProduct = obj => {
    console.log("searchProduct OBJ",obj)
    sql = 'select a.id,a.name,b.name category_name,a.partnumber,a.unit,a.lastupdate from products a '
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'where  '
    sql+= ' ('
    sql+= 'a.name like "%'+obj.searchData+'%" '
    sql+= 'or a.partnumber like "%'+obj.searchData+'%" '
    sql+= 'or a.unit like "%'+obj.searchData+'%" '
    sql+= 'or b.name like "%'+obj.searchData+'%" '
    sql+= ') '
    sql+= 'and a.status="1" '
    sql+= 'order by a.name asc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    console.log('searchProduct SQL',sql)
    return sql
},
searchProductCount = obj => {
    sql = 'select count(a.id)cnt from products a '
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'where  '
    sql+= ' ('
    sql+= 'a.name like "%'+obj.searchData+'%" '
    sql+= 'or a.partnumber like "%'+obj.searchData+'%" '
    sql+= 'or a.unit like "%'+obj.searchData+'%" '
    sql+= 'or b.name like "%'+obj.searchData+'%" '
    sql+= ') '
    sql+= 'and a.status="1" '
    console.log('searchProductCount SQL',sql)
    return sql
},
saveCategory = obj => {
    console.log("OBJ",obj)
    sql = 'insert into categories ';
    sql+= '(name,description,createuser)';
    sql+= 'values ';
    sql+= '(';
    sql+= '"'+removeQuotes(obj.name)+'",';
    sql+= '"'+removeQuotes(obj.description)+'",';
    sql+= '"'+obj.createuser+'")';
    sql+= 'on duplicate key update ';
    sql+= 'name="'+removeQuotes(obj.name)+'",';
    sql+= 'description="'+removeQuotes(obj.description)+'",';
    sql+= 'createuser="'+obj.createuser+'" ';
    console.log("saveCategory Query",sql)
    return sql;
},
updateCategory = obj => {
    console.log("OBJ",obj)
    sql = 'update categories ';
    sql+= 'set name="'+removeQuotes(obj.name)+'",';
    sql+= 'description="'+removeQuotes(obj.description)+'" ';
    sql+= 'where id="'+obj.id+'"';
    console.log("updateCategory Query",sql)
    return sql;
},
getCategory = obj => {
    sql = 'select id,name,description,status,createuser,createdate from categories ';
    sql+= 'where id="'+obj.id+'" ';
    sql+= 'and status="1" '
    sql+= 'order by name asc '
    console.log("getCategory Query",sql)
    return sql;
},
getCategories = () => {
    sql = 'select id,name,description,status,createuser,createdate from categories ';
    sql+= 'where status="1" '
    sql+= 'order by name asc '
    console.log("getCategories Query",sql)
    return sql;
},
getCategorypage = obj => {
    sql = 'select id,name,description,status,createuser,createdate from categories ';
    sql+= 'where status="1" '
    sql+= 'order by name asc '
    sql+= 'limit '+obj.page+','+obj.pageSize
    console.log("getCategorypage Query",sql)
    return sql;
},
getCategoryCount = () => {
    sql = 'select count(id) cnt from categories ';
    sql+= 'where status="1" '
    console.log("getCategoryCount Query",sql)
    return sql;
},
searchCategory = obj => {
    sql = 'select id,name,description,status,createuser,createdate from categories '
    sql+= 'where '
    sql+= 'status="1" '
    sql+= 'and '
    sql+= 'name like "%'+obj.searchData+'%" '
    sql+= 'order by name asc '
    console.log("searchCategory Query",sql)
    return sql
},
searchCategoryCount = obj => {
    sql = 'select count(id) cnt from categories '
    sql+= 'where '
    sql+= 'status="1" '
    sql+= 'and '
    sql+= 'name like "%'+obj.searchData+'%" '
    console.log("searchCategoryCount Query",sql)
    return sql
},
setCategoryActive = obj => {
    sql = 'update categories '
    sql+= 'set status="'+obj.status+'" '
    sql+= 'where id='+obj.id+' '
    console.log('setCategoryActive Query',sql)
    return sql
},
saveSubmission = obj => {
  console.log("savesubmission params",obj)
    sql = 'insert into submissions ';
    sql+= '('
    sql+= ' subject,'
    sql+= ' budgeting_number,'
    sql+= ' submission_date,'
    sql+= ' staff_name,'
    sql+= ' implementation_target,'
    sql+= ' purchase_target,'
    sql+= ' createuser,'
    sql+= ' user_id,'
    sql+= ' division_id,',
    sql+= ' city_id,'
    sql+= ' quarter,'
    sql+= ' year '
    sql+= ')';
    sql+= 'values ';
    sql+= '("'
    sql+= obj.subject+'","'
    sql+= obj.budgeting_number+'","'
    sql+= obj.submission_date+'","'
    sql+= obj.staff_name+'","'
    sql+= obj.implementation_target+'","'
    sql+= obj.purchase_target+'","'
    sql+= obj.createuser+'","'
    sql+= obj.user_id+'","'
    sql+= obj.division_id+'", "'
    sql+= obj.city_id+'", "'
    sql+= obj.quarter+'", "'
    sql+= obj.year+'")';
    console.log("saveSubmission",sql)
    return sql;
},
getSubmissions = () => {
    sql = 'select a.id submission_id,a.submission_date,a.budgeting_number,a.subject,a.user_id,a.createuser,a.city_id,'
    sql+= 'b.status detailstatus, '
    sql+= 'case b.status '
    sql+= 'when "1" then "Pending" '
    sql+= 'when "2" then "Approved only" '
    sql+= 'when "3" then "Rejected" '
    sql+= 'when "4" then "Approved, bought and paid" '
    sql+= 'when "5" then "Approved, bought and termin" '
    sql+= 'when "6" then "Pre-Approval"  '
    sql+= 'when "7" then "Deal Price"  '
    sql+= 'when "8" then "Received" '
    sql+= 'when "9" then "Verified" end stat, '
    sql+= 'b.id, '
    sql+= 'b.itemname, '
    sql+= 'b.description, '
    sql+= 'b.amount, '
    sql+= 'b.placement_location, '
    sql+= 'b.proposed_totalprice, '
    sql+= 'a.division_id, '
    sql+= 'group_concat(d.division_id) userdivisions '
    sql+= 'from submissions a '
    sql+= 'left outer join ('
    sql+= ' select distinct '
    sql+= ' id,'
    sql+= ' submission_id,'
    sql+= ' amount,'
    sql+= ' itemname,'
    sql+= ' description,'
    sql+= ' placement_location,'
    sql+= ' proposed_totalprice,'
    sql+= ' status from submission_details'
    sql+= ') b '
    sql+= 'on b.submission_id=a.id '
    sql+= 'left outer join users c on c.username=a.createuser '
    sql+= 'left outer join divisions_users d on d.user_id=c.id '
    sql+= 'group by a.id,a.submission_date,a.budgeting_number,a.createuser,a.city_id, '
    sql+= 'b.status,b.id,b.itemname,b.amount,b.placement_location,b.proposed_totalprice,b.description '
    sql+= 'order by a.createdate desc '
    console.log("getSubmissions",sql)
    return sql;
},
getFlexibleSubmissions = (obj) => {
    sql = 'select a.id submission_id,a.submission_date,a.budgeting_number,a.subject,a.user_id,a.createuser,a.city_id,'
    sql+= 'b.status detailstatus, '
    sql+= 'case b.status '
    sql+= 'when "1" then "Pending" '
    sql+= 'when "2" then "Approved only" '
    sql+= 'when "3" then "Rejected" '
    sql+= 'when "4" then "Approved, bought and paid" '
    sql+= 'when "5" then "Approved, bought and termin" '
    sql+= 'when "6" then "Pre-Approval"  '
    sql+= 'when "7" then "Deal Price"  '
    sql+= 'when "8" then "Received" '
    sql+= 'when "9" then "Verified" end stat, '
    sql+= 'b.id, '
    sql+= 'b.itemname, '
    sql+= 'b.description, '
    sql+= 'b.amount, '
    sql+= 'b.placement_location, '
    sql+= 'b.proposed_totalprice, '
    sql+= 'a.division_id, '
    sql+= 'group_concat(d.division_id) userdivisions '
    sql+= 'from submissions a '
    sql+= 'left outer join ('
    sql+= ' select distinct '
    sql+= ' id,'
    sql+= ' submission_id,'
    sql+= ' amount,'
    sql+= ' itemname,'
    sql+= ' description,'
    sql+= ' placement_location,'
    sql+= ' proposed_totalprice,'
    sql+= ' status from submission_details'
    sql+= ') b '
    sql+= 'on b.submission_id=a.id '
    sql+= 'left outer join users c on c.username=a.createuser '
    sql+= 'left outer join divisions_users d on d.user_id=c.id '
    sql+= ''
    sql+= 'where '
    sql+= ' (submission_date="'+obj.submission_date+'" or if(0='+obj.submission_date+',1,0)=1) '
    //sql+= 'and (division_id="'+obj.division_id+'" or if(0='+obj.division_id+',1,0)=1) '
    //sql+= 'and (city_id="'+obj.city_id+'" or if(0='+obj.city_id+',1,0)=1) '
    //sql+= 'group by a.city_id,a.quarter,b.name,a.year,a.budgetused,a.budgetlimit '

    sql+= 'group by a.id,a.submission_date,a.budgeting_number,a.createuser,a.city_id, '
    sql+= 'b.status,b.id,b.itemname,b.amount,b.placement_location,b.proposed_totalprice,b.description '
    sql+= 'order by a.createdate desc '
    console.log("getSubmissions",sql)
    return sql;
},
getSubmissionByRole = (params) => {
  //roleids = (params.params).join();
  console.log("PARAMS",(params));
    sql = 'select a.id submission_id,a.submission_date,a.budgeting_number,a.subject,a.user_id,a.createuser,a.city_id,h.name kategori,'
    sql+= 'b.status detailstatus, '
    sql+= 'case b.status '
    sql+= 'when "1" then "Pending" '
    sql+= 'when "2" then "Approved only" '
    sql+= 'when "3" then "Rejected" '
    sql+= 'when "4" then "Approved, bought and paid" '
    sql+= 'when "5" then "Approved, bought and termin" '
    sql+= 'when "6" then "Pre-Approval"  '
    sql+= 'when "7" then "Deal Price"  '
    sql+= 'when "8" then "Received" '
    sql+= 'when "9" then "Verified" end stat, '
    sql+= 'b.id, '
    sql+= 'b.description, '
    sql+= 'b.itemname, '
    sql+= 'b.amount, '
    sql+= 'f.name placement_location, '
    sql+= 'b.proposed_totalprice, '
    sql+= 'a.division_id, '
    sql+= 'group_concat(d.division_id) userdivisions '
    sql+= 'from submissions a '
    sql+= 'left outer join ('
    sql+= ' select distinct '
    sql+= ' id,'
    sql+= ' submission_id,'
    sql+= ' amount,'
    sql+= ' itemname,'
    sql+= ' description,'
    sql+= ' placement_location,'
    sql+= ' proposed_totalprice,product_id,'
    sql+= ' status from submission_details'
    sql+= ') b '
    sql+= 'on b.submission_id=a.id '
    sql+= 'left outer join users c on c.username=a.createuser '
    sql+= 'left outer join divisions_users d on d.user_id=c.id '
    sql+= 'left outer join roles_submissions e on e.submission_status_id=a.status '
    sql+= 'left outer join cities f on f.id=a.city_id '
    sql+= 'left outer join products g on g.id=b.product_id '
    sql+= 'left outer join categories h on h.id=category_id '
    sql+= 'where e.role_id in ('+params.params+') or a.user_id='+params.user_id+' '
    sql+= 'group by a.id,a.submission_date,a.budgeting_number,a.createuser,a.city_id,f.name,  '
    sql+= 'b.status,b.id,b.itemname,b.amount,b.placement_location,b.proposed_totalprice,b.description '
    sql+= 'order by a.createdate desc '
    console.log("getSubmissions",sql)
    return sql;
},
getSubmissionById = obj => {
    sql = 'select '
    sql+= 'a.id,a.subject,date_format(a.submission_date,"%Y-%m-%d")submission_date,a.user_id,a.staff_name,c.email creatoremail,'
    sql+= 'date_format(a.implementation_target,"%Y-%m-%d")implementation_target,'
    sql+= 'date_format(a.purchase_target,"%Y-%m-%d")purchase_target,a.city_id,'
    sql+= 'a.createuser,a.budgeting_number, group_concat(itemname)itemname,'
    sql+= 'sum(b.totalprice)totalprice,sum(b.final_price)final_price, '
    sql+= 'b.purchase_reason,a.scanpo,a.nopo,'
    sql+= 'b.verificationreason, b.reject_reason   '
    sql+= 'from submissions a '
    sql+= 'left outer join submission_details b on b.submission_id=a.id '
    sql+= 'left outer join users c on c.id=a.user_id '
    sql+= 'where a.id="'+ obj.id +'" '
    sql+= 'group by a.id,a.subject,a.submission_date,a.staff_name,a.implementation_target,'
    sql+= 'a.purchase_target,a.city_id,a.createuser,a.budgeting_number,b.purchase_reason,b.description, '
    sql+= 'b.verificationreason,b.reject_reason ';
    sql+= 'order by a.createdate desc '
    console.log('getSubmissionById sql',sql)
    return sql
},
getSubmissionpage = obj => {
    sql = 'select '
    sql+= 'id,subject,submission_date,staff_name,implementation_target,purchase_target,createuser,city_id,budgeting_number '
    sql+= 'from submissions '
    sql+= 'where status="'+obj.status+'" '
    sql+= 'order by createdate desc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    return sql
},
getSubmissioncount = obj => {
    sql = 'select count(id) cnt from submissions '
    sql+= 'where status="'+obj.status+'" '
    console.log('getSubmissioncount sql',sql)
    return sql
},
getUserRole = obj => {
  sql = 'select role_id from roles_users '
  sql+= 'where user_id =' + obj.user_id + ' '
  console.log('getUserRole',sql)
  return sql
},
getUsersByRoles = obj => {
    sql = 'select group_concat(c.username)username,a.id,a.name role from roles a '
    sql+= 'left outer join roles_users b on a.id=b.user_id '
    sql+= 'left outer join users c on c.id=b.role_id '
    sql+= 'group by a.id,a.name '
    sql+= 'order by a.id '
    console.log('getUserByRoles',sql)
    return sql
},
getRoleMembers = obj => {
    sql = 'select a.id,a.name,c.id,c.username from roles a '
    sql+= 'left outer join roles_users b on a.id=b.user_id '
    sql+= 'left outer join users c on c.id=b.role_id '
    sql+= 'where a.id='+obj.id+' '
    sql+= 'order by a.id '
    console.log('getRoleMembers',sql)
    return sql
},
getRoles = () => {
    sql = 'select name,id from roles '
    console.log('Get Roles',sql)
    return sql
},
getRealizationDetails = obj => {
    sql = 'select '
    sql+= ' a.id, a.submission_id, a.product_id, a.vendor_id, a.itemname, a.brand, a.partnumber, '
    sql+= ' a.description, a.amount, a.discountlevel, a.proposed_vendor, a.final_price,'
    sql+= ' case when a.proposed_price is null then 0 else a.proposed_price end proposed_price, '
    sql+= ' case when a.proposed_totalprice is null then 0 else a.proposed_totalprice end proposed_totalprice, '
    sql+= ' a.vendor,'
    sql+= ' case when a.final_price is null then (a.totalprice-a.proposed_totalprice) else (a.final_price-a.proposed_totalprice) end  difference,'
    sql+= ' case when a.price is null then 0 else a.price end price , '
    sql+= ' case when a.totalprice is null then 0 else a.totalprice end totalprice , '
    sql+= ' a.information, a.purchase_reason, a.placement_location, '
    sql+= ' a.guarantee, a.ppn, a.ongkir, a.note, a.purchase_date, a.reject_reason, a.createuser, a.createdate, a.status, '
    sql+= 'b.category_id,'
    sql+= 'case b.category_id '
    sql+= ' when "13" then "Kendaraan" '
    sql+= ' when "12" then "Non-teknis" '
    sql+= ' when "10" then "Teknis (BTS)" '
    sql+= ' when "11" then "Teknis (Office)" '
    sql+= 'end category_name, '
    sql+= '(case when c.amount is null then a.final_price-0 when a.final_price>c.amount then a.final_price-c.amount else 0 end) sisa, '
    sql+= '(case when c.amount is null then 0  when a.final_price<c.amount then c.amount-a.final_price else 0 end) lebihbayar, '
    sql+= 'c.amount totalpayment, '
    sql+= 'd.subject,d.submission_date,d.implementation_target,purchase_target,d.staff_name,d.user_id '
    sql+= 'from submission_details a '
    sql+= 'left outer join products b on b.id=a.product_id '
    sql+= 'left outer join '
    sql+= '('
    sql+= ' select submission_detail_id,sum(amount) amount from payments group by submission_detail_id'
    sql+= ') c '
    sql+= 'on c.submission_detail_id = a.id '
    sql+= 'left outer join submissions d on d.id=a.submission_id '
    sql+= 'where a.submission_id='+obj.submission_id+' '
    sql+= 'order by a.createdate desc '
    console.log("getRealizationDetails",sql)
    return sql
},
searchSubmission = obj => {
    sql = 'select '
    sql+= 'distinct a.id,a.subject,a.submission_date,a.staff_name,a.implementation_target,a.purchase_target,a.createuser, b.description,'
    sql+= 'a.budgeting_number '
    sql+= 'from submissions a '
    sql+= 'left outer join submission_details b on b.submission_id=a.id '
    sql+= 'where '
    sql+= 'a.status="'+obj.status+'" '
    sql+= 'and ('
    sql+= 'a.staff_name like "%'+obj.searchData+'%" '
    sql+= 'or a.subject like "%'+obj.searchData+'%" '
    sql+= 'or b.itemname like "%'+obj.searchData+'%" '
    sql+= 'or b.brand like "%'+obj.searchData+'%" '
    sql+= 'or b.description like "%'+obj.searchData+'%" '
    sql+= 'or b.partnumber like "%'+obj.searchData+'%" '
    sql+= 'or b.proposed_vendor like "%'+obj.searchData+'%" '
    sql+= 'or b.vendor like "%'+obj.searchData+'%" '
    sql+= 'or b.information like "%'+obj.searchData+'%" '
    sql+= 'or b.placement_location like "%'+obj.searchData+'%" '
    sql+= ')'
    sql+= 'order by a.createdate desc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    console.log('searchSubmission SQL',sql)
    return sql
},
searchSubmissioncount = obj => {
    sql = 'select count(a.id) cnt '
    sql+= 'from submissions a '
    sql+= 'left outer join submission_details b on b.submission_id=a.id '
    sql+= 'where a.status="'+obj.status+'" '
    sql+= 'and ('
    sql+= 'a.staff_name like "%'+obj.searchData+'%" '
    sql+= 'or a.subject like "%'+obj.searchData+'%" '
    sql+= 'or b.itemname like "%'+obj.searchData+'%" '
    sql+= 'or b.brand like "%'+obj.searchData+'%" '
    sql+= 'or b.description like "%'+obj.searchData+'%" '
    sql+= 'or b.partnumber like "%'+obj.searchData+'%" '
    sql+= 'or b.proposed_vendor like "%'+obj.searchData+'%" '
    sql+= 'or b.vendor like "%'+obj.searchData+'%" '
    sql+= 'or b.information like "%'+obj.searchData+'%" '
    sql+= 'or b.placement_location like "%'+obj.searchData+'%" '
    sql+= ')'
    sql+= 'order by a.createdate desc '

    console.log('searchsubmissioncount',sql)
    return sql
},
setSubmissionStatus = obj => {
    sql = 'update submissions '
    sql+= 'set status="'+obj.status+'" '
    sql+= 'where id='+obj.id+' '
    console.log('SetSubmissionStatus',sql)
    return sql
},
updateSubmission = obj => {
    sql = 'update submissions '
    sql+= 'set submission_date="'+obj.submission_date+'",'
    sql+= 'budgeting_number="'+obj.budgeting_number+'",'
    sql+= 'subject="'+removeQuotes(obj.subject)+'",'
    sql+= 'staff_name="'+obj.staff_name+'",'
    sql+= 'implementation_target="'+obj.implementation_target+'",'
    sql+= 'purchase_target="'+obj.purchase_target+'" '
    sql+= 'where id='+obj.id+' '
    console.log('update submission SQL',sql)
    return sql
},
getSubmissionDetails = obj => {
    sql = 'select '
    sql+= ' a.id, a.submission_id, a.product_id, a.vendor_id, a.itemname, a.brand, a.partnumber, '
    sql+= ' a.description, a.amount, a.discountlevel, a.proposed_vendor, a.final_price,'
    sql+= ' case when a.proposed_price is null then 0 else a.proposed_price end proposed_price, '
    sql+= ' case when a.proposed_totalprice is null then 0 else a.proposed_totalprice end proposed_totalprice, '
    sql+= ' a.vendor,d.nopo,d.scanpo,'
    sql+= ' case when a.final_price is null then (a.totalprice-a.proposed_totalprice) else (a.final_price-a.proposed_totalprice) end  difference,'
    sql+= ' case when a.price is null then 0 else a.price end price , '
    sql+= ' case when a.totalprice is null then 0 else a.totalprice end totalprice , '
    sql+= ' a.information, a.purchase_reason, a.placement_location, '
    sql+= ' a.guarantee, a.ppn, a.ongkir, a.note, a.purchase_date, a.reject_reason, a.createuser, a.createdate, a.status, '
    sql+= 'b.category_id,a.placement_location,'
    sql+= 'case b.category_id '
    sql+= ' when "13" then "Kendaraan" '
    sql+= ' when "12" then "Non-teknis" '
    sql+= ' when "10" then "Teknis (BTS)" '
    sql+= ' when "11" then "Teknis (Office)" '
    sql+= 'end category_name, '
    sql+= '(case when c.amount is null then a.final_price-0 when a.final_price>c.amount then a.final_price-c.amount else 0 end) sisa, '
    sql+= '(case when c.amount is null then 0  when a.final_price<c.amount then c.amount-a.final_price else 0 end) lebihbayar, '
    sql+= 'c.amount totalpayment, '
    sql+= 'd.subject,d.budgeting_number,d.submission_date,d.implementation_target,purchase_target,d.staff_name,d.user_id '
    sql+= 'from submission_details a '
    sql+= 'left outer join products b on b.id=a.product_id '
    sql+= 'left outer join '
    sql+= '('
    sql+= ' select submission_detail_id,sum(amount) amount from payments group by submission_detail_id'
    sql+= ') c '
    sql+= 'on c.submission_detail_id = a.id '
    sql+= 'left outer join submissions d on d.id=a.submission_id '
    sql+= 'where a.id='+obj.submission_id+' '
    sql+= 'order by a.createdate desc '
    console.log("getSubmissionDetails",sql)
    return sql
},
getSubmissionDetail = obj => {
    sql = 'select a.*,b.nopo,b.budgeting_number,b.scanpo,b.subject,b.purchase_target,b.implementation_target,c.email creatormail,b.city_id '
    sql+= 'from submission_details a '
    sql+= 'left outer join submissions b on b.id=a.submission_id '
    sql+= 'left outer join users c on c.id=b.user_id '
    sql+= 'where a.id = ' + obj.id + ' '
    sql+= 'order by createdate desc '
    console.log("getSubmissionDetail",sql)
    return sql
},
getSubmissionDetailBySubmissionId = obj => {
    sql = 'select a.*,c.email creatormail,b.budgeting_number,b.city_id,b.nopo,b.scanpo from submission_details a '
    sql+= 'left outer join submissions b on b.id=a.submission_id '
    sql+= 'left outer join users c on c.id=b.user_id '
    sql+= 'where submission_id = ' + obj.submissionid + ' '
    sql+= 'order by createdate desc '
    console.log("getSubmissionDetailBySubmissionId",sql)
    return sql
},
saveSubmissionDetail = obj => {
    sql = 'insert into submission_details '
    sql+= '('
    sql+= 'submission_id,'
    sql+= 'product_id,'
    sql+= 'vendor_id,'
    sql+= 'itemname,'
    sql+= 'brand,'
    sql+= 'partnumber,'
    sql+= 'description,'
    sql+= 'proposed_vendor,'
    sql+= 'amount,'
    sql+= 'discountlevel,',
    sql+= 'proposed_price,'
    sql+= 'proposed_totalprice,'
    sql+= 'price,'
    sql+= 'totalprice,'
    sql+= 'information,'
    sql+= 'purchase_reason,'
    sql+= 'placement_location,'
    sql+= 'guarantee,'
    sql+= 'ppn,'
    sql+= 'ongkir,'
    sql+= 'note,'
    sql+= 'createuser'
    sql+= ') '
    sql+= 'values '
    sql+= '('
    sql+= obj.submission_id+','
    sql+= obj.product_id+','
    sql+= obj.vendor_id+',"'
    sql+= removeQuotes(obj.itemname)+'","'
    sql+= obj.brand+'","'
    sql+= obj.partnumber+'","'
    sql+= obj.description+'","'
    sql+= obj.proposed_vendor+'",'
    sql+= obj.amount+',"'
    sql+= obj.discountlevel+'","'
    sql+= obj.proposed_price+'","'
    sql+= obj.proposed_totalprice+'","'
    sql+= obj.price+'","'
    sql+= obj.totalprice+'","'
    sql+= obj.information+'","'
    sql+= removeQuotes(obj.purchase_reason)+'","'
    sql+= obj.placement_location+'","'
    sql+= obj.guarantee+'",'
    sql+= obj.ppn+','
    sql+= obj.ongkir+',"'
    sql+= obj.note+'","'
    sql+= obj.createuser
    sql+= '") '
    console.log('saveSubmissionDetail SQL',sql)
    return sql
},
updateSubmissionDetail = obj => {
    sql = 'update submission_details '
    sql+= 'set itemname="'+removeQuotes(obj.itemname)+'",'
    sql+= 'brand="'+obj.brand+'",'
    sql+= 'partnumber="'+obj.partnumber+'",'
    sql+= 'description="'+removeQuotes(obj.description)+'",'
    sql+= 'proposed_vendor="'+obj.proposed_vendor+'",'
    sql+= 'amount="'+obj.amount+'",'
    sql+= 'discountlevel="'+obj.discountlevel+'",'
    sql+= 'proposed_price="'+obj.proposed_price+'",'
    sql+= 'proposed_totalprice="'+obj.proposed_totalprice+'",'
    sql+= 'vendor="'+obj.vendor+'",'
    sql+= 'price="'+obj.price+'",'
    sql+= 'totalprice="'+obj.totalprice+'",'
    sql+= 'information="'+obj.information+'",'
    sql+= 'purchase_reason="'+removeQuotes(obj.purchase_reason)+'",'
    if(obj.purchase_date != null){
        sql+= 'purchase_date="'+obj.purchase_date+'",'
    }
    sql+= 'placement_location="'+obj.placement_location+'",'
    sql+= 'guarantee="'+obj.guarantee+'",'
    sql+= 'ppn="'+obj.ppn+'",'
    sql+= 'ongkir="'+obj.ongkir+'",'
    sql+= 'reject_reason="'+obj.reject_reason+'",'
    sql+= 'note="'+obj.note+'"'
    sql+= 'where id='+obj.id+' '
    console.log('update submissiondetail SQL',sql);
    return sql
},
updateSalesSubmissionDetail = obj => {
  console.log('UPDATESALESSUBMISSIONDETAIL PARAMS',obj)
  sql = 'update submission_details '
  sql+= 'set itemname="'+removeQuotes(obj.itemname)+'",'
  sql+= 'product_id='+obj.product_id+', '
  sql+= 'amount='+obj.amount+', '
  sql+= 'totalprice='+obj.totalprice+', '
  sql+= 'partnumber="'+obj.partnumber+'",'
  sql+= 'purchase_reason="'+removeQuotes(obj.purchase_reason)+'",'
  sql+= 'placement_location="'+obj.placement_location+'",'
  sql+= 'description="'+removeQuotes(obj.description)+'" '
  sql+= 'where id='+obj.id+' '
  console.log('update submissiondetail sales',sql)
  return sql
},
removeQuotes = obj=>{
  console.log("replaced",obj.replace('"','&quote;').replace("'","\'"))
  return (obj.replace('"','\\"').replace("'","\'"));
},
updateSalesSubmission = obj => {
  console.log("updateSalesSubmission invoked")
  sql = 'update submissions '
  sql+= 'set subject="'+removeQuotes(obj.subject)+'",'
  sql+= 'nopo="'+obj.nopo+'",'
  sql+= 'scanpo="'+obj.scanpo+'",'
  sql+= 'purchase_target="'+obj.purchase_target+'", '
  sql+= 'implementation_target="'+obj.implementation_target+'" '
  sql+= 'where id='+obj.id+' '
  console.log('update submission sales',sql)
  return sql
},
getSubmissiondetailpage = obj => {
    sql = 'select '
    sql+= 'id,submission_id,itemname,brand,partnumber,description,proposed_vendor,final_price,'
    sql+= 'amount,proposed_price,proposed_totalprice,information,purchase_reason,'
    sql+= 'placement_location,guarantee,ppn,ongkir,reject_reason,note,purchase_date,reject_reason,createuser '
    sql+= 'from submission_details '
    sql+= 'where submission_id='+obj.submission_id+' '
    sql+= 'and status!="0" '
    sql+= 'order by createdate desc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    console.log("getSubmissionDetailPage",sql)
    return sql
},
getAllSubmissiondetails = () => {
    sql = 'select '
    sql+= 'id,submission_id,itemname,brand,partnumber,description,proposed_vendor,'
    sql+= 'amount,proposed_price,proposed_totalprice,information,purchase_reason,'
    sql+= 'placement_location,guarantee,ppn,ongkir,reject_reason,note,purchase_date,createuser '
    sql+= 'from submission_details '
    sql+= 'where status!="0" '
    sql+= 'order by createdate desc '
    console.log("getAllSubmissionDetail",sql)
    return sql
}
getAllSubmissiondetailpage = obj => {
    sql = 'select '
    sql+= 'id,submission_id,itemname,brand,partnumber,description,proposed_vendor,'
    sql+= 'amount,proposed_price,proposed_totalprice,information,purchase_reason,'
    sql+= 'placement_location,guarantee,ppn,ongkir,reject_reason,note,purchase_date,reject_reason,createuser '
    sql+= 'from submission_details '
    sql+= 'where status="'+obj.status+'" '
    sql+= 'order by createdate desc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    console.log("getAllSubmissionDetailPage",sql)
    return sql
},
getAllSubmissiondetailcount = obj => {
    sql = 'select '
    sql+= 'count(submission_id) cnt '
    sql+= 'from submission_details '
    sql+= 'where status="'+obj.status+'" '
    console.log("getAllSubmissionDetailCount",sql)
    return sql
},
getSubmissiondetailcount = obj => {
    sql = 'select count(id) cnt from submission_details '
    sql+= 'where submission_id='+obj.submission_id+' '
    sql+= 'and status!="0" '
    console.log("getSubmissionDetailcount",sql)
    return sql
},
searchSubmissiondetail = obj => {
    sql = 'select '
    sql+= 'id,submission_id,itemname,brand,partnumber,description,proposed_vendor,'
    sql+= 'amount,proposed_price,proposed_totalprice,information,purchase_reason,'
    sql+= 'placement_location,guarantee,ppn,ongkir,reject_reason,note,purchase_date,reject_reason,createuser '
    sql+= 'from submission_details '
    sql+= 'where status='+obj.status+' '
    sql+= 'and ('
    sql+= 'itemname like "%'+obj.searchData+'%" '
    sql+= 'or brand like "%'+obj.searchData+'%" '
    sql+= 'or partnumber like "%'+obj.searchData+'%" '
    sql+= 'or description like "%'+obj.searchData+'%" '
    sql+= ')'
    sql+= 'order by createdate desc '
    sql+= 'limit '+obj.pageIndex+','+obj.pageSize+' '
    console.log('searchsubmissiondetail',sql)
    return sql
},
searchSubmissiondetailcount = obj => {
    sql = 'select count(submission_id)cnt '
    sql+= 'from submission_details '
    sql+= 'where status='+obj.status+' '
    sql+= 'and ('
    sql+= 'itemname like "%'+obj.searchData+'%" '
    sql+= 'or brand like "%'+obj.searchData+'%" '
    sql+= 'or partnumber like "%'+obj.searchData+'%" '
    sql+= 'or description like "%'+obj.searchData+'%" '
    sql+= ')'
    console.log('searchsubmissiondetailcount',sql)
    return sql
},
setSubmissionDetailStatus = obj => {
    sql = 'update submission_details '
    sql+= 'set status="'+obj.status+'" '
    sql+= 'where id='+obj.id+' '
    console.log('SetSubmissionDetailStatus',sql)
    return sql
},
setSubmissionDetailStatusBySubmissionId = obj => {
    sql = 'update submission_details '
    sql+= 'set status="'+obj.status+'" '
    sql+= 'where submission_id='+obj.id+' '
    console.log('SetSubmissionDetailStatusBySubmissionId',sql)
    return sql
}
getUsers = () => {
    sql = 'select '
    sql+= 'a.id,'
    sql+= 'a.salt,'
    sql+= 'a.password,'
    sql+= 'a.defaultRoute,'
    sql+= 'a.email,'
    sql+= 'a.username,'
    sql+= 'a.level,c.name role,'
    sql+= 'c.rclass roleclass,'
    sql+= 'd.division_id '
    sql+= 'from users a '
    sql+= 'left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    sql+= 'left outer join divisions_users d on d.user_id = a.id '

    sql+= 'order by username asc '
    console.log("getUsers",sql)
    return sql
},
getUser = obj => {
    sql = 'select '
    sql+= 'a.id,'
    sql+= 'a.salt,'
    sql+= 'a.password,'
    sql+= 'a.defaultRoute,'
    sql+= 'a.email,'
    sql+= 'a.username,'
    sql+= 'a.level,c.name role,'
    sql+= 'c.rclass roleclass,'
    sql+= 'd.division_id '
    sql+= 'from users a '
    sql+= 'left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    sql+= 'left outer join divisions_users d on d.user_id = a.id '

    sql+= 'where a.id = ' + obj.id + ' '
    console.log("getUser",sql)
    return sql
},
getUserByName = obj => {
    sql = 'select * from users '
    sql = 'select '
    sql+= 'a.id,'
    sql+= 'a.salt,'
    sql+= 'a.password,'
    sql+= 'a.defaultRoute,'
    sql+= 'a.email,'
    sql+= 'a.username,'
    sql+= 'a.level,c.name role,'
    sql+= 'c.rclass roleclass,'
    sql+= 'd.division_id '
    sql+= 'from users a '
    sql+= 'left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    sql+= 'left outer join divisions_users d on d.user_id = a.id '

    sql+= 'where username="' + obj.username + '" '
    console.log("getUserByName",sql)
    return sql
},
getUserImage = obj => {
    sql = 'select image from users '
    sql+= 'where id = ' + obj.id + ' '
    console.log('getUserImage SQL',sql)
    return sql
}
getVendorImage = obj => {
    switch(obj.type){
        case 'namecard':
        imagetype = 'namecard'
        break
        default:
        imagetype = 'namecard'
    }
    sql = 'select '+obj.type+' image from vendors '
    sql+= 'where id='+obj.id+' '
    console.log('VendorImage SQL',sql)
    return sql
}
saveUser = obj => {
    sql = 'insert into users '
    sql+= '(username,email,salt,password,level,createuser) '
    sql+= 'values '
    sql+= '("'+obj.username+'","'+obj.email+'","'+obj.salt+'","'+obj.password+'","'+obj.level+'","'+obj.createuser+'")'
    console.log("saveUser",sql)
    return sql;
},
updateUser = obj => {
    sql = 'update users '
    sql+= 'set username="' + obj.username + '",'
    sql+= 'email="' + obj.email + '",'
    sql+= 'image="' + obj.image + '",'
    sql+= 'level="' + obj.level + '",'
    sql+= 'active="' + obj.active + '" '
    sql+= 'where id=' + obj.id
    console.log('update user',sql)
    return sql
},
getUserByEmail = email => {
    sql = 'select * from users '
    sql+= 'where email="'+email+'"'
    console.log("getUserByEmail",sql)
    return sql
},
changePassword = (email,password) => {
    sql = 'update users set password="'+password+'" '
    sql+= 'where email="'+email+'"'
    console.log("changePassword",sql)
    return sql
},
login = obj => {
    sql = 'select '
    sql+= 'a.id,'
    sql+= 'a.salt,'
    sql+= 'a.password,'
    sql+= 'a.defaultRoute,'
    sql+= 'a.email,'
    sql+= 'a.username,'
    sql+= 'a.level,c.name role,'
    sql+= 'c.rclass roleclass,'
    sql+= 'd.division_id '
    sql+= 'from users a '
    sql+= 'left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    sql+= 'left outer join divisions_users d on d.user_id = a.id '
    sql+= 'where a.email="'+obj.email+'" '
    console.log("Login",sql)
    return sql
},
updatePassword = (obj,password) => {
    sql = 'update users set password="'+password+'" '
    sql+= 'where email = "' + obj.email + '" '
    console.log("updatePassword",sql)
    return sql
},
activateUser = (obj,active) => {
    sql = 'update users set active="'+active+'" '
    sql+= 'where email = "' + obj.email + '" '
    console.log("activateUser",sql)
    return sql
},
createUser = obj => {
    sql = 'insert into users '
    sql+= '(username,email,password,salt) '
    sql+= 'values '
    sql+= '("'+obj.username+'","'+obj.email+'","'+obj.password+'","'+obj.salt+'")'
    console.log("createUser",sql)
    return sql
},
associate_product_vendor = obj => {
    sql = 'insert into products_vendors '
    sql+= '(product_id,vendor_id,price,createuser) '
    sql+= 'values '
    sql+= '('+obj.product_id+','+obj.vendor_id+','+obj.price+',"'+obj.createuser+'")'

    sql+= 'on duplicate key update ';
    sql+= 'price="'+obj.price+'"';
    console.log("associate product vendor",sql)
    return sql
},
disassociate_product_vendor = obj => {
    sql = 'delete from products_vendors '
    sql+= 'where product_id=' + obj.product_id+' '
    sql+= 'and vendor_id = ' + obj.vendor_id + ' '
    console.log("disassociate product vendor",sql)
    return sql
},
remove_all_associated_vendor = obj => {
    sql = "delete from products_vendors "
    sql+= "where product_id="+obj.product_id+" "
    console.log("remove all associated vendors",sql)
    return sql
},
remove_all_associated_product = obj => {
    sql = "delete from products_vendors "
    sql+= "where vendor_id="+obj.vendor_id+" "
    console.log("remove all associated products",sql)
    return sql
},
getProductByCategory = obj => {
    sql = 'select a.id,a.name,a.partnumber,a.unit,b.name category from products a '
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'where b.id = '+ obj.category_id+' '
    sql+= 'order by a.name asc '
    console.log('getProductByCategory',sql)
    return sql
},
getProductByVendor = obj => {
    sql = 'select b.id,b.name,b.partnumber,b.unit,c.name category,a.price,a.lastupdate from products_vendors a '
    sql+= 'left outer join products b on b.id=a.product_id '
    sql+= 'left outer join categories c on c.id=b.category_id '
    sql+= 'where a.vendor_id = '+ obj.vendor_id+' '
    sql+= 'order by b.name asc '
    console.log('getProductByVendor',sql)
    return sql
},
getProductByVendorCategory = obj => {
    sql = 'select b.id,b.name,b.partnumber,b.unit,c.name category,a.price,a.lastupdate from products_vendors a '
    sql+= 'left outer join products b on b.id=a.product_id '
    sql+= 'left outer join categories c on c.id=b.category_id '
    sql+= 'where a.vendor_id = '+ obj.vendor_id+' '
    sql+= 'and c.id = ' + obj.category_id + ' '
    sql+= 'order by b.name asc '
    console.log('getProductByVendor',sql)
    return sql
}
disassociateProductsByVendor = obj => {
    sql = 'delete from products_vendors '
    sql+= 'where vendor_id = ' + obj.vendor_id + ' '
    console.log('delete associated products by vendor')
    return sql
},
getVendorByProduct = obj => {
    sql = 'select b.id,b.name,b.address,b.phone,b.bankaccount,b.namecard,a.price from products_vendors a '
    sql+= 'left outer join vendors b on b.id=a.vendor_id '
    sql+= 'where a.product_id = '+ obj.product_id+' '
    sql+= 'order by b.name asc '
    console.log('getVendorByProduct',sql)
    return sql
},
disassociateVendorsByProduct = obj => {
    sql = 'delete from products_vendors '
    sql+= 'where product_id = ' + obj.product_id + ' '
    console.log('delete associated vendors by product',sql)
    return sql
},
savePurchaseHistory = obj => {
    sql = 'insert into purchasehistories '
    sql+= '(submission_detail_id,product_name,vendor_name,submission_date,implementation_target,createuser) '
    sql+= 'values '
    sql+= '('
    sql+= obj.submission_detail_id+',"'
    sql+= obj.product_name+'","'
    sql+= obj.vendor_name+'","'
    sql+= obj.submission_date+'","'
    sql+= obj.implementation_target+'","'
    sql+= obj.createuser+'")'
    console.log('savepurchasehistory',sql)
    return sql
},
getPurchaseHistory = obj => {
    sql = 'select * from purchasehistories '
    sql+= 'where submission_detail_id='+obj.submission_detail_id+' '
    sql+= 'order by createdate desc '

    console.log('getpurchasehistory',sql)
    return sql
},
getPurchaseHistoryBySubmission = obj => {
    sql = 'select b.* from submission_details a '
    sql+= 'left outer join purchasehistories b on b.submission_detail_id=a.id '
    sql+= 'where a.submission_id = ' + obj.submission_id + ' '
    sql+= 'order by b.createdate desc '
    console.log('getpurchasehistorybysubmission',sql)
    return sql
},
savePayment = obj => {
    sql = 'insert into payments '
    sql+= '(submission_detail_id,payment_type,amount,payment_date,createuser) '
    sql+= 'values '
    sql+= '("'
    sql+= obj.submission_detail_id+'","'
    sql+= obj.payment_type+'","'
    sql+= obj.amount+'","'
    sql+= obj.payment_date+'","'
    sql+= obj.createuser
    sql+= '")'
    console.log('savepayment',sql)
    return sql
},
updatePayment = obj => {
    sql = 'update payments '
    sql+= 'set '
    sql+= 'submission_detail_id="'+obj.submission_detail_id+'", '
    sql+= 'payment_type="'+obj.payment_type+'", '
    sql+= 'amount="'+obj.amount+'", '
    sql+= 'payment_date="'+obj.payment_date+'", '
    sql+= 'createuser="'+obj.createuser+'" '
    sql+= 'where id='+obj.id+' '
    console.log('updatepayment',sql)
    return sql
},
getPayments = obj => {
    sql = 'select * from payments '
    console.log('getpayments',sql)
    return sql
},
getPayment = obj => {
    sql = 'select * from payments '
    sql+= 'where id='+obj.id+' '
    console.log('getpayment',sql)
    return sql
},
getPaymentsBySubmissionId = obj => {
    sql = 'select c.* from submissions a '
    sql+= 'left outer join submission_details b on b.submission_id=a.id '
    sql+= 'left outer join payments c on c.submission_detail_id = b.id '
    sql+= 'where a.id = ' + obj.id + ' '
    console.log('getpaymentbysubmissionid:',sql)
    return sql
},
getPaymentsBySubmissionDetailId = obj => {
    sql = 'select b.* from submission_details a '
    sql+= 'left outer join payments b on b.submission_detail_id = a.id '
    sql+= 'where a.id = ' + obj.id + ' '
    console.log('getpaymentbysubmissiondetailid:',sql)
    return sql
},
submission_detail_from_purchase_history = obj => {
    sql = 'SELECT purchasehistories.id, purchasehistories.submission_detail_id, purchasehistories.product_name, '
    sql+= 'purchasehistories.vendor_name, submission_details.purchase_date, '
    sql+= 'submission_details.amount, submission_details.price, submission_details.totalprice, '
    sql+= 'submissions.staff_name FROM `purchasehistories`, `submission_details`, `submissions` '
    sql+= 'WHERE purchasehistories.submission_detail_id=submission_details.id AND submissions.id=submission_details.submission_id '
    console.log("submission_detail_from_purchase_history",sql)
    return sql
    comment = 'query by Raka'
},
updatepurchasehistory = obj => {
    sql = 'UPDATE `purchasehistories` '
    sql+= 'SET `product_name`="'+obj.product_name+'",'
    sql+= '`vendor_name`="'+obj.vendor_name+'",'
    sql+= '`submission_date`="'+obj.submission_date+'",'
    sql+= '`implementation_target`="'+obj.implementation_target+'",'
    sql+= '`createuser`="'+obj.createuser+'" '
    sql+= 'WHERE `submission_detail_id`='+obj.submission_detail_id+''
    console.log('update purchase history',sql)
    return sql
    comment = 'query by raka'
},
updateVendorImage = obj => {
    sql = 'update vendors set '+obj.imagetype+' = "'+obj.image+'" '
    sql+= 'where id='+obj.id +' '
    console.log('update vendor image query',sql)
    return sql
},
updateRejectReason = obj => {
    sql = 'update submission_details '
    sql+= 'set reject_reason = "'+obj.reject_reason+'" '
    sql+= 'where id = ' + obj.id + ' '
    console.log('update reject_reason sql',sql)
    return sql
},
updateRejectReasonBySubmissionId = obj => {
    sql = 'update submission_details '
    sql+= 'set reject_reason = "'+obj.reject_reason+'" '
    sql+= 'where submission_id = ' + obj.submissionId + ' '
    console.log('update reject_reason sql',sql)
    return sql
},
updateVerificationReasonBySubmissionId = obj => {
    sql = 'update submission_details '
    sql+= 'set verificationreason = "'+obj.verificationreason+'" '
    sql+= 'where submission_id = ' + obj.submissionId + ' '
    console.log('update verificationreason sql',sql)
    return sql
},
savePlafon = obj => {
    sql = 'insert into budgets '
    sql+= '(division_id,city_id,year,quarter,budgetlimit,budgetused) '
    sql+= 'values '
    sql+= '("'+obj.division+'","'+obj.city+'","'+obj.year+'","'+obj.quarter+'","'+obj.budget_limit+'","'+obj.budgetused+'")'
    sql+= 'on duplicate key update ';
    sql+= 'budgetlimit="'+obj.budget_limit+'",budgetused="'+obj.budgetused+'",';
    console.log("Save plafon",sql)
    return sql
},
getPlafons = () => {
    sql = 'select * from plafons '
    console.log('Get plafons',sql)
    return sql
},
getPlafon = obj => {
    sql = 'select * from plafons '
    sql+= 'where id=' + obj.id + ' '
    console.log("Get plafon",sql)
    return sql
},
updatePlafon = obj => {
    sql = 'update plafons '
    sql+= 'set division = ' + obj.division + ', '
    sql+= 'city = "' + obj.city + '", '
    sql+= 'year = "' + obj.year + '", '
    sql+= 'quarter = ' + obj.quarter + ', '
    sql+= 'budgetused = ' + obj.budgetused + ', '
    sql+= 'budgetlimit = ' + obj.budget_limit + ' '
    sql+= 'where id = ' + obj.id + ' '
    console.log("Update plafon",sql)
    return sql
},
removePlafon = obj => {
    sql = 'delete from plafons '
    sql+= 'where id = ' + obj.id + ' '
    console.log('Remove plafon',sql)
    return sql
},
saveBudgetHistory = obj => {
    sql = 'insert into budgethistories '
    sql+= '(year,quarter,city_id,division,transtype,amount,description,user_id) '
    sql+= 'values '
    sql+= '("'+obj.year+'",'+obj.quarter+',"'+obj.city_id+'",'+obj.division+',"'+obj.transtype+'",'+obj.amount+',"'+obj.description+'",'+obj.user_id+')'
    console.log('insert budgethistories',sql)
    return sql
},
getUsersByDivisionId = obj => {
    sql = 'select a.*,c.name division from users a '
    sql+= 'left outer join divisions_users b on b.user_id=a.id '
    sql+= 'left outer join divisions c on c.id=b.division_id '
    sql+= 'where c.id=' + obj.division_id + ' '
    console.log("Get User By Division Id",sql)
    return sql
},
getDivisionsByUserId = obj => {
    sql = 'select c.name division from users a '
    sql+= 'left outer join divisions_users b on b.user_id=a.id '
    sql+= 'left outer join divisions c on c.id=b.division_id '
    sql+= 'where a.id=' + obj.user_id + ' '
    console.log("Get DIvision By User ID",sql)
    return sql
},
getVendorPics = obj => {
    sql = 'select * from vendor_pics '
    sql+= 'where vendor_id = ' + obj.vendor_id + ' '
    console.log('get vendor pics',sql)
    return sql
},
saveVendorPic = obj => {
    sql = 'insert into vendor_pics '
    sql+= '(vendor_id,name,phone,email,role) '
    sql+= 'values '
    sql+= '('+obj.vendor_id+',"'+obj.name+'","'+obj.phone+'","'+obj.email+'","'+obj.role+'") '
    console.log('save vendor pic',sql)
    return sql
},
updateVendorPic = obj => {
    sql = 'update vendor_pics '
    sql+= 'set name = "' + obj.name + '", '
    sql+= 'phone="' + obj.phone + '", '
    sql+= 'email="' + obj.email + '", '
    sql+= 'role="' + obj.role + '" '
    sql+= 'where id = ' + obj.id + ' '
    console.log('update vendor pic',sql)
    return sql
},
deleteVendorPic = obj => {
    sql = 'delete from vendor_pics '
    sql+= 'where id = ' + obj.id
    console.log('delete vendor pic',sql)
    return sql
},
getSuratJalanImage = obj => {
    sql = 'select suratjalan from submission_details '
    sql+= 'where submission_id='+obj.submission_id+' '
    console.log('SuratJalanImage SQL',sql)
    return sql
},
getProductImage = obj => {
    sql = 'select image from product_images '
    sql+= 'where id='+obj.id+' '
    console.log('ProductImage SQL',sql)
    return sql
},
getProductImages = obj => {
    sql = 'select * from product_images '
    sql+= 'where product_id = ' + obj.product_id + ' '
    console.log('get product image',sql)
    return sql
},
saveProductImage = obj => {
    sql = 'insert into product_images '
    sql+= '(product_id,image) '
    sql+= 'values '
    sql+= '("'+obj.product_id+'","'+obj.image+'")'
    console.log("save product image",sql)
    return sql
},
updateProductImage = obj => {
    sql = 'update product_images '
    sql+= 'set '
    sql+= 'image = "' + obj.image + '" '
    sql+= 'where id = ' + obj.id + ' '
    console.log("update product image",sql)
    return sql
},
deleteProductImage = obj => {
    sql = 'delete from product_images '
    sql+= 'where id = ' + obj.id
    console.log('remove product_image',sql)
    return sql
},
saveSubmissionDetailVendor = obj => {
    sql = 'insert into submissiondetails_vendors '
    sql+= '(submission_detail_id,vendor_id,createuser,price,ppn,ongkir) values '
    sql+= '("'+obj.submission_detail_id+'","'+obj.vendor_id+'","'+obj.createuser+'","'+obj.price+'","'+obj.ppn+'","'+obj.ongkir+'")'
    console.log("save submissiondetailvendor",sql)
    return sql
},
removeSubmissionDetailVendor = obj => {
    sql = 'delete from submissiondetails_vendors '
    sql+= 'where submission_detail_id= "'+obj.submission_detail_id+'" and vendor_id="'+obj.vendor_id+'" '
    console.log("remove submissiondetailvendor",sql)
    return sql
},
getSubmissionDetailVendor = obj => {
    sql = 'select a.*,b.name,c.id from submissiondetails_vendors a '
    sql+= 'left outer join vendors b on b.id=a.vendor_id '
    sql+= 'left outer join submission_details c on c.id=a.submission_detail_id '
    sql+= 'where submission_detail_id = ' + obj.submission_detail_id + ' '
    console.log('getSubmissionDetailVendor sql',sql)
    return sql
},
isMemberOf = obj => {
    sql = 'select * from roles_users '
    sql+= 'where role_id = "'+obj.role_id+'" and user_id = "'+obj.user_id+'" '
    console.log('isMemberOf',sql)
    return sql
},
isMemberOfClass = obj => {
    sql = 'select a.user_id from roles_users a '
    sql+= 'left outer join roles b on b.id=a.role_id '
    sql+= 'where b.rclass = "'+obj.rclass+'" and user_id = "'+obj.user_id+'" '
    console.log('isMemberOfClass',sql)
    return sql
},
isMemberOfDivision = obj => {
  sql = 'select count(b.id)cnt from divisions_users a '
  sql+= 'left outer join users b on b.id=a.user_id '
  sql+= 'left outer join divisions c on c.id=a.division_id '
  sql+= 'where b.id='+obj.user_id+' and c.id='+obj.division_id+' '
  console.log('isMemberOfDivision >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',sql)
  return sql
}
getPadiSubmissions = obj => {
    sql = 'select '
    sql+= 'a.id,a.subject,a.submission_date,a.staff_name,a.implementation_target,'
    sql+= 'a.purchase_target,a.createuser,a.budgeting_number, '
    sql+= 'count(b.id) amount,'
    sql+= 'sum(b.proposed_price) proposed_price, '
    sql+= 'case a.status '
    sql+= 'when "1" then "Pending" '
    sql+= 'when "2" then "Approved only" '
    sql+= 'when "3" then "Rejected" '
    sql+= 'when "4" then "Approved, bought and paid" '
    sql+= 'when "5" then "Approved, bought and termin" '
    sql+= 'when "6" then "Pre-Approval"  '
    sql+= 'when "7" then "Deal Price"  '
    sql+= 'when "8" then "Received"  '
    sql+= 'when "9" then "Verified" end stat, '
    sql+= 'from submissions a '
    sql+= 'left outer join submission_details b on b.submission_id=a.id '
    sql+= 'group by a.id,a.subject,a.submission_date,a.staff_name,a.implementation_target,a.purchase_target,a.createuser,a.budgeting_number '
    sql+= 'order by a.createdate desc '
    console.log("getPadiSubmissions",sql)
    return sql
},
getbudget = obj => {
  console.log("getbudget Param",obj)
    sql = 'select b.name division,'
    sql+= 'case city_id '
    sql+= 'when "1" then "Surabaya" '
    sql+= 'when "2" then "Jakarta" '
    sql+= 'when "3" then "Malang" '
    sql+= 'when "4" then "Bali" end city, '
    sql+= 'budgetlimit,(budgetlimit-budgetused)budgetbeforeapprove,budgetused from budgets a '
    sql+= 'left outer join divisions b on b.id=a.division_id '
    sql+= 'where city_id = "' + obj.city_id + '" '
    sql+= 'and year = ' + obj.year + ' '
    sql+= 'and quarter = ' + obj.quarter + ' '
    sql+= 'and division_id = ' + obj.division_id + ' '
    console.log("Getbudget",sql)
    return sql
},
getcitybudgetlimit = obj => {
  console.log("getbudget limit Param",obj)
    sql = 'select sum(budgetlimit)budgetlimit,'
    sql+= 'sum(budgetused)budgetused,'
    sql+= '(sum(budgetlimit)-sum(budgetused))budgetbeforeapprove '
    sql+= 'from budgets '
    sql+= 'where city_id = "' + obj.city_id + '" '
    sql+= 'and year = ' + obj.year + ' '
    sql+= 'and quarter = ' + obj.quarter + ' '
    console.log("getcitybudgetlimit",sql)
    return sql
},
getCityApprovedBudgets = obj => {
    sql = 'select sum(totalprice)totalprice from submission_details a '
    sql+= 'left outer join users b on b.username=a.createuser '
    sql+= 'left outer join divisions_users c on c.user_id=b.id '
    sql+= 'left outer join ('
    sql+= ' select id,'
    sql+= ' case '
    sql+= ' when date_format(purchase_target,"%m")>0 and date_format(purchase_target,"%m")<4 then "1" '
    sql+= ' when date_format(purchase_target,"%m")>3 and date_format(purchase_target,"%m")<7 then "2" '
    sql+= ' when date_format(purchase_target,"%m")>6 and date_format(purchase_target,"%m")<10 then "3" '
    sql+= ' when date_format(purchase_target,"%m")>9 and date_format(purchase_target,"%m")<=12 then "4" '
    sql+= ' end purchase_target '
    sql+= ' from submissions'
    sql+= ') e on e.id=a.submission_id '
    sql+= 'where a.status in (2,4,5) '
    sql+= 'and date_format(purchase_target,"%Y") = ' + obj.year + ' '
    sql+= 'and e.purchase_target = ' + obj.quarter + ' '
    sql+= 'and a.placement_location = ' + obj.city + ' '
    console.log("getCityApprovedBudgets",sql)
    return sql
},
getDivisionApprovedBudgets = obj => {
    sql = 'select sum(totalprice)totalprice from submission_details a '
    sql+= 'left outer join users b on b.username=a.createuser '
    sql+= 'left outer join divisions_users c on c.user_id=b.id '
    sql+= 'left outer join divisions d on d.id=c.division_id '
    sql+= 'left outer join ('
    sql+= ' select id,'
    sql+= ' case '
    sql+= ' when date_format(purchase_target,"%m")>0 and date_format(purchase_target,"%m")<4 then "1" '
    sql+= ' when date_format(purchase_target,"%m")>3 and date_format(purchase_target,"%m")<7 then "2" '
    sql+= ' when date_format(purchase_target,"%m")>6 and date_format(purchase_target,"%m")<10 then "3" '
    sql+= ' when date_format(purchase_target,"%m")>9 and date_format(purchase_target,"%m")<=12 then "4" '
    sql+= ' end purchase_target '
    sql+= ' from submissions'
    sql+= ') e on e.id=a.submission_id '
    sql+= 'where a.status in (2,4,5) '
    sql+= 'and date_format(purchase_target,"%Y") = ' + obj.year + ' '
    sql+= 'and e.purchase_target = ' + obj.quarter + ' '
    sql+= 'and a.placement_location = ' + obj.city + ' '
    sql+= 'and d.id = ' + obj.division_id + ' '
    console.log("getDivisionApprovedBudgets",sql)
    return sql
},
getRoleEmail = obj => {
  sql = 'select id,name,email from roles '
  sql+= 'where id = "' + obj.identifier + '" '
  sql+= 'or name = "' + obj.identifier + '" '
  console.log('getRoleEmail',sql);
  return sql
},
getRoleEmails = obj => {
    sql = 'select c.id,c.username,c.email from roles a '
    sql+= 'left outer join roles_users b on b.role_id=a.id '
    sql+= 'left outer join users c on c.id=b.user_id '
    sql+= 'where a.id = "' + obj.identifier + '" '
    sql+= 'or a.name = "' + obj.identifier + '" '
    console.log('getRoleEmails',sql);
    return sql
  },
  getRolesEmails = obj => {
    sql = 'select c.id,c.username,c.email from roles a '
    sql+= 'left outer join roles_users b on b.role_id=a.id '
    sql+= 'left outer join users c on c.id=b.user_id '
    sql+= 'where a.id in (' + obj.identifiers + ') '
    sql+= 'or a.name in (' + obj.identifiers + ') '
    console.log('getRolesEmails',sql);
    return sql
  }
  updateFinalPrice = obj => {
    sql = 'update submission_details set final_price='+obj.final_price+' '
    sql+= 'where id = '+ obj.id + ' '
    console.log('update Final Price',sql)
    return sql
},
updateFinalPriceBySubmissionId = obj => {
    sql = 'update submission_details set final_price='+obj.final_price+' '
    sql+= 'where submission_id = '+ obj.submissionId + ' '
    console.log('update Final Price By Submission Id',sql)
    return sql
},
getNotesBySubmissionId = obj => {
    sql = 'select id,description,state,createuser,createdate from notes '
    sql+= 'where submission_id=' + obj.submission_id + ' '
    console.log('getNotesBySubmissionId',sql)
    return sql
},
addNote = obj => {
    sql = 'insert into notes '
    sql+= '(description,createuser,submission_id,state) '
    sql+= 'values '
    sql+= '("'+obj.description+'","'+obj.createuser+'",'+obj.submission_id+',"'+obj.state+'")'
    console.log('addNote',sql)
    return sql
},
uploadItemReceived = obj => {
    sql = 'update submission_details set suratjalan = "'+obj.suratjalan+'" '
    sql+= 'where id='+obj.id +' '
    console.log('uploadItemReceived',sql)
    return sql
},
uploadItemReceivedBySubmissionId = obj => {
    sql = 'update submission_details set suratjalan = "'+obj.suratjalan+'" '
    sql+= 'where submission_id='+obj.submission_id +' '
    console.log('uploadItemReceived',sql)
    return sql
},
checkRole = obj => {
    sql = 'select * from roles_users where user_id = '+obj.user_id+' '
    sql+= 'and role_id ='+obj.role_id +' '
    console.log('checkRole sql',sql)
    return sql
},
getDivisions = () => {
  sql = 'select * from divisions '
  console.log('get Divisions sql',sql)
  return sql
}
getBudgetsCityPeriod = (obj) => {
  sql = 'select c.id city_id,c.name city,a.quarter,b.id division_id,b.name division,a.year,'
  sql+= 'sum(a.budgetused)budgetused,'
  sql+= 'sum(a.budgetlimit)budgetlimit,'
  sql+= 'sum(a.budgetlimit-a.budgetused)restof  '
  sql+= 'from budgets  a '
  sql+= 'left outer join divisions b on b.id=a.division_id '
  sql+= 'left outer join cities c on c.id=a.city_id '
  sql+= 'where year="'+obj.year+'" '
  sql+= 'and (quarter="'+obj.quarter+'" or if(0='+obj.quarter+',1,0)=1) '
  sql+= 'and (division_id="'+obj.division_id+'" or if(0='+obj.division_id+',1,0)=1) '
  sql+= 'and (city_id="'+obj.city_id+'" or if(0='+obj.city_id+',1,0)=1) '
  sql+= 'group by c.id,c.name,a.city_id,a.quarter,b.id,b.name,a.year,a.budgetused,a.budgetlimit '
  console.log("Get Budgets",sql)
  return sql
}
getBudgetsCityPeriodBudgetLimitSum = (obj) => {
  sql = 'select sum(budgetused)budgetused,sum(a.budgetlimit)budgetlimit,sum(a.budgetlimit-a.budgetused)restof  from budgets  a '
  sql+= 'left outer join divisions b on b.id=a.division_id '
  sql+= 'where year="'+obj.year+'" '
  sql+= 'and (quarter="'+obj.quarter+'" or if(0='+obj.quarter+',1,0)=1) '
  sql+= 'and (division_id="'+obj.division_id+'" or if(0='+obj.division_id+',1,0)=1) '
  sql+= 'and (city_id="'+obj.city_id+'" or if(0='+obj.city_id+',1,0)=1) '
  console.log("Get Budgets",sql)
  return sql
}
budgetSave = obj => {
  sql = 'insert into budgets '
  sql+= '(division_id,city_id,quarter,year,budgetlimit) '
  sql+= 'values '
  sql+= '("'+obj.division_id+'","'+obj.city_id+'","'+obj.quarter+'","'+obj.year+'","'+obj.budget_limit+'")'
  sql+= 'on duplicate key update '
  sql+= 'budgetlimit='+obj.budget_limit+' '
  sql+= ''
  console.log("Budget Save",sql)
  return sql
}
getCities = ()=>{
  sql = 'select a.id,a.name from cities a '
  return sql
}
comparePlafonPayments = () =>{
  sql = 'select A.division,A.city_id,A.city,A.quarter,A.year,A.budgetlimit,A.budgetused,sum(B.amount)bamount from plafons A left outer join (select a.amount,c.year,c.quarter,c.division_id,c.city_id from payments a left outer join submission_details b on b.id=a.submission_detail_id left outer join submissions c on c.id=b.submission_id) B on B.year=A.year and B.quarter=A.quarter and B.division_id=A.division and B.city_id=A.city_id group by A.division,A.city_id,A.city,A.quarter,A.year,A.budgetlimit,A.budgetused'
  return sql
}
reCalculatePlafon = () =>{
  sql = 'update plafons A left outer join (select sum(a.amount)bamount,c.year,c.quarter,c.division_id,c.city_id from payments a   '
  sql+= 'left outer join submission_details b on b.id=a.submission_detail_id '
  sql+= 'left outer join submissions c on c.id=b.submission_id group by c.year,c.quarter,c.division_id,c.city_id) B '
  sql+= 'on B.year=A.year and B.quarter=A.quarter and B.division_id=A.division and B.city_id=A.city_id '
  sql+= 'set A.budgetused=B.bamount '
  sql = 'update plafons X left outer join ('
  sql+= 'select A.*,case when B.bamount is null then 0 else B.bamount end bamount '
  sql+= 'from plafons A left outer join '
  sql+= '(select sum( a.amount)bamount,c.year,c.quarter,c.division_id,c.city_id from payments a '
  sql+= 'left outer join submission_details b on b.id=a.submission_detail_id '
  sql+= 'left outer join submissions c on c.id=b.submission_id group by c.year,c.quarter,c.division_id,c.city_id) B '
  sql+= 'on B.year=A.year and B.quarter=A.quarter and B.division_id=A.division and B.city_id=A.city_id) Y '
  sql+= 'on Y.year=X.year and Y.quarter=X.quarter and Y.division=X.division and Y.city_id=X.city_id set X.budgetused=Y.bamount '
  console.log("Recalculateplafon",sql)
  return sql
}
reCalculateBudget = () =>{
  sql = 'update budgets A left outer join (select sum(a.amount)bamount,c.year,c.quarter,c.division_id,c.city_id from payments a   '
  sql+= 'left outer join submission_details b on b.id=a.submission_detail_id '
  sql+= 'left outer join submissions c on c.id=b.submission_id group by c.year,c.quarter,c.division_id,c.city_id) B '
  sql+= 'on B.year=A.year and B.quarter=A.quarter and B.division_id=A.division and B.city_id=A.city_id '
  sql+= 'set A.budgetused=B.bamount '
  sql = 'update budgets X left outer join ('
  sql+= 'select A.*,case when B.bamount is null then 0 else B.bamount end bamount '
  sql+= 'from budgets A left outer join '
  sql+= '(select sum( a.amount)bamount,c.year,c.quarter,c.division_id,c.city_id from payments a '
  sql+= 'left outer join submission_details b on b.id=a.submission_detail_id '
  sql+= 'left outer join submissions c on c.id=b.submission_id group by c.year,c.quarter,c.division_id,c.city_id) B '
  sql+= 'on B.year=A.year and B.quarter=A.quarter and B.division_id=A.division_id and B.city_id=A.city_id) Y '
  sql+= 'on Y.year=X.year and Y.quarter=X.quarter and Y.division_id=X.division_id and Y.city_id=X.city_id set X.budgetused=Y.bamount '
  console.log("Recalculatebudget",sql)
  return sql
}
getBudgetHistories = () => {
    sql = 'select a.id,a.createdate,'
    sql+= 'case transtype when "0" then "Kredit" when "1" then "Debit" else "Undefined" end transttype,'
    sql+= 'case a.city_id when "1" then "Surabaya" when "2" then "Jakarta" when "3" then "Malang" when "4" then "Bali" else "Undefined" end city ,'
    sql+= 'b.name,a.quarter,a.year,a.amount,a.description,c.username '
    sql+= 'from budgethistories a '
    sql+= 'left outer join divisions b on b.id=a.division '
    sql+= 'left outer join users c on c.id=a.user_id '

    console.log('getbudgethistories',sql)
    return sql
}
getBudgetHistoriesByFilter = obj => {
    sql = 'select a.id,a.createdate,'
    sql+= 'case transtype when "0" then "Kredit" when "1" then "Debit" else "Undefined" end transttype,'
    sql+= 'case a.city_id when "1" then "Surabaya" when "2" then "Jakarta" when "3" then "Malang" when "4" then "Bali" else "Undefined" end city ,'
    sql+= 'b.name,a.quarter,a.year,a.amount,a.description,c.username '
    sql+= 'from budgethistories a '
    sql+= 'left outer join divisions b on b.id=a.division '
    sql+= 'left outer join users c on c.id=a.user_id '
    sql+= 'where '
    sql+= ''+obj.filterkey+'='+obj.filterval+' '
    console.log('getbudgethistoriesbyfilter',sql)
    return sql
}
getUsers = () => {
    sql = 'select a.id,a.username,c.id roleid,c.name '
    sql+= 'from users a left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    console.log('getusers',sql)
    return sql
}
disassociateProductsByVendor = obj => {
  sql = 'delete from products_vendors '
  sql+= 'where vendor_id='+obj.vendor_id+' '
  console.log('disassociate product vendor',sql)
  return sql
},
setGoodReceived = obj => {
    sql = 'update submission_details '
    sql+= 'set status="8",arrivaldate= "'+obj.arrivaldate+'" '
    sql+= 'where submission_id='+obj.id+' '
    console.log("setgoodreceived",sql)
    return sql
},
getPurchasingMonthlyReport = obj => {
    sql = 'select a.id,a.budgeting_number,a.subject,a.createdate,b.itemname,b.arrivaldate, '
    sql+= 'final_price ';
    sql+= 'from submissions a left outer join submission_details b '
    sql+= 'on b.submission_id=a.id '
    sql+= 'where 1=1 '
    if(obj.filterbycreatedate=='1'){
        sql+= 'and month(a.createdate) = ' + obj.month + ' '
        sql+= 'and year(a.createdate) = ' + obj.year + ' '
    }
    if(obj.filterbyarrivaldate=='1'){
        sql+= 'and month(a.arrivaldate) = ' + obj.month + ' '
        sql+= 'and year(a.arrivaldate) = ' + obj.year + ' '
    }
    console.log('PurchasingMonthly Report sql',sql)
    return sql
},
createLog = obj => {
    sql = 'insert into activitylog '
    sql+= '(email ,module ,description) '
    sql+= 'values '
    sql+= '("'+obj.email+'" ,"'+obj.module+'" ,"'+obj.description+'")'
    console.log('createLog',sql)
    return sql
},
getLogs = () => {
    sql = 'select * from activitylog '
    console.log('getlogs',sql)
    return sql
},
updatePO = obj => {
  sql = 'update submissions set nopo="'+obj.nopo+'",scanpo="'+obj.scanpo+'" '
  sql+= 'where id='+obj.id+' '
  console.log('updatePO',sql)
  return sql
},
moveRejectDetail = obj => {
    sql = 'insert into canceledsubmissiondetails '
    sql+= 'select * from submission_details '
    sql+= 'where submission_id='+obj.submission_id+' '
    console.log('rejectVerified',sql)
    return sql
}
removeRejectDetail = obj => {
  sql = 'delete from submission_details '
  sql+= 'where submission_id = ' + obj.submission_id + ' '
  console.log('Apply rejectVerified',sql)
  return sql
},
moveReject = obj => {
    sql = 'insert into canceledsubmissions '
    sql+= 'select * from submissions '
    sql+= 'where id='+obj.id+' '
    console.log('moveReject',sql)
    return sql
},
removeReject = obj => {
  sql = 'delete from submissions '
  sql+= 'where id = ' + obj.id + ' '
  console.log('Apply removeReject',sql)
  return sql
},
getCountBudgetingNumThisYear = obj => {
  sql = 'select count(id) cnt from submissions where date_format(createdate,"%Y")=date_format(now(),"%Y") '
  console.log('getCountBudgetingNumThisYear',sql)
  return sql
},
getMaxBudgetingNumThisYear = obj => {
  sql = 'select max(substr(budgeting_number,12,5))maxnum from submissions '
  sql+= 'where date_format(createdate,"%Y")=date_format(now(),"%Y")'
  console.log('getMaxBudgetingNumThisYear',sql)
  return sql
},
budgetupdate = obj => {
    sql = 'update budgets set budgetlimit='+obj.budgetlimit+' '
    sql+= 'where city_id = '+obj.city_id+' '
    sql+= 'and quarter=' + obj.quarter+ ' '
    sql+= 'and division_id='+obj.division_id+' '
    sql+= 'and year='+obj.year+' '
    console.log('budgetupdate',sql)
    return sql
}
moveToTrash = obj => {
    sql = "insert into deleted"+obj.tableName+" "
    sql+= "select * from "+obj.tableName+" "
    sql+= "where id="+obj.id+" "
    return sql
}
deleteTransaction = obj => {
    sql = "delete from "+obj.tableName+" "
    sql+= "where id="+obj.id+" "
    return sql
}
module.exports = {
    moveToTrash:moveToTrash,
    deleteTransaction:deleteTransaction,
  budgetupdate:budgetupdate,
  getCountBudgetingNumThisYear:getCountBudgetingNumThisYear,
  getMaxBudgetingNumThisYear:getMaxBudgetingNumThisYear,
  moveRejectDetail:moveRejectDetail,
  removeRejectDetail:removeRejectDetail,
  moveReject:moveReject,
  removeReject:removeReject,
  updateSalesSubmission:updateSalesSubmission,
  updateSalesSubmissionDetail:updateSalesSubmissionDetail,
  updatePO:updatePO,
  isMemberOfDivision:isMemberOfDivision,
  getLogs:getLogs,
  createLog:createLog,
  getPurchasingMonthlyReport:getPurchasingMonthlyReport,
  setGoodReceived:setGoodReceived,
  getRolesEmails:getRolesEmails,
  disassociateProductsByVendor:disassociateProductsByVendor,
  getUsers:getUsers,
  getRoles:getRoles,
  getRoleMembers:getRoleMembers,
  getUsersByRoles:getUsersByRoles,
  getRealizationDetails:getRealizationDetails,
  getBudgetHistories:getBudgetHistories,
  getBudgetHistoriesByFilter:getBudgetHistoriesByFilter,
  saveBudgetHistory:saveBudgetHistory,
  reCalculateBudget:reCalculateBudget,
  updateVerificationReasonBySubmissionId:updateVerificationReasonBySubmissionId,
  comparePlafonPayments:comparePlafonPayments,
  reCalculatePlafon:reCalculatePlafon,
  budgetSave:budgetSave,
  getCities:getCities,
  getBudgetsCityPeriodBudgetLimitSum:getBudgetsCityPeriodBudgetLimitSum,
  getBudgetsCityPeriod:getBudgetsCityPeriod,
  getSuratJalanImage:getSuratJalanImage,
  getDivisions:getDivisions,
  getSubmissionByRole:getSubmissionByRole,
  checkRole:checkRole,
  uploadItemReceived:uploadItemReceived,
  uploadItemReceivedBySubmissionId:uploadItemReceivedBySubmissionId,
  getSubmissionDetailBySubmissionId:getSubmissionDetailBySubmissionId,
  getNotesBySubmissionId:getNotesBySubmissionId,
  addNote:addNote,
  updateFinalPrice:updateFinalPrice,
  updateFinalPriceBySubmissionId:updateFinalPriceBySubmissionId,
  getRoleEmail:getRoleEmail,
  getRoleEmails:getRoleEmails,
  getProductByVendorCategory:getProductByVendorCategory,
  disassociateProductsbyVendor:disassociateProductsByVendor,
  disassociateVendorsByProduct:disassociateVendorsByProduct,
  setSubmissionDetailStatusBySubmissionId:setSubmissionDetailStatusBySubmissionId,
  getCityApprovedBudgets:getCityApprovedBudgets,
  getDivisionApprovedBudgets:getDivisionApprovedBudgets,
  getcitybudgetlimit:getcitybudgetlimit,
  getbudget:getbudget,
  updatePrice:updatePrice,
  isMemberOfClass:isMemberOfClass,
  isMemberOf:isMemberOf,
  getSubmissionDetailVendor:getSubmissionDetailVendor,
  saveSubmissionDetailVendor:saveSubmissionDetailVendor,
  removeSubmissionDetailVendor:removeSubmissionDetailVendor,
  getVendorPics:getVendorPics,
  saveVendorPic:saveVendorPic,
  updateVendorPic:updateVendorPic,
  deleteVendorPic:deleteVendorPic,
  saveProductImage:saveProductImage,
  updateProductImage:updateProductImage,
  deleteProductImage:deleteProductImage,
  getUserByName:getUserByName,
  getUsersByDivisionId:getUsersByDivisionId,
  getDivisionsByUserId:getDivisionsByUserId,
  savePlafon:savePlafon,
  getPlafons:getPlafons,
  getPlafon:getPlafon,
  getUserRole:getUserRole,
  updatePlafon:updatePlafon,
  removePlafon:removePlafon,
  updateRejectReason:updateRejectReason,
  updateRejectReasonBySubmissionId:updateRejectReasonBySubmissionId,
  updateVendorImage:updateVendorImage,
  remove_all_associated_product:remove_all_associated_product,
  remove_all_associated_vendor:remove_all_associated_vendor,
  updatepurchasehistory:updatepurchasehistory,
  getProductByCategory:getProductByCategory,
  submission_detail_from_purchase_history:submission_detail_from_purchase_history,
  getPaymentsBySubmissionDetailId:getPaymentsBySubmissionDetailId,
  getPaymentsBySubmissionId:getPaymentsBySubmissionId,
  getPayment:getPayment,
  getPayments:getPayments,
  updatePayment:updatePayment,
  savePayment:savePayment,
  getPurchaseHistory:getPurchaseHistory,
  getPurchaseHistoryBySubmission:getPurchaseHistoryBySubmission,
  savePurchaseHistory:savePurchaseHistory,
  getVendorByProduct:getVendorByProduct,
  getProductByVendor:getProductByVendor,
  disassociate_product_vendor:disassociate_product_vendor,
  associate_product_vendor:associate_product_vendor,
  saveVendor: saveVendor,
  getVendor: getVendor,
  getVendornames:getVendornames,
  getVendors:getVendors,
  setVendorActive:setVendorActive,
  saveProduct:saveProduct,
  getProduct:getProduct,
  getProducts:getProducts,
  getProductpage : getProductpage,
  getProductCount : getProductCount,
  getProductImage:getProductImage,
  getProductImages:getProductImages,
  updateProduct:updateProduct,
  searchProduct : searchProduct,
  searchProductCount : searchProductCount,
  setProductActive:setProductActive,
  updateVendor:updateVendor,
  getVendorpage : getVendorpage,
  getVendorCount : getVendorCount,
  searchVendor : searchVendor,
  searchVendorCount : searchVendorCount,
  getVendorImage:getVendorImage,
  saveSubmission:saveSubmission,
  getSubmissions:getSubmissions,
  getPadiSubmissions:getPadiSubmissions,
  setSubmissionStatus:setSubmissionStatus,
  updateSubmission:updateSubmission,
  getUsers:getUsers,
  getUser:getUser,
  getUserImage:getUserImage,
  saveUser:saveUser,
  updateUser:updateUser,
  getUserByEmail:getUserByEmail,
  changePassword:changePassword,
  getSubmissionDetails:getSubmissionDetails,
  getSubmissionDetail:getSubmissionDetail,
  saveSubmissionDetail:saveSubmissionDetail,
  getAllSubmissiondetails:getAllSubmissiondetails,
  getAllSubmissiondetailpage:getAllSubmissiondetailpage,
  getAllSubmissiondetailcount:getAllSubmissiondetailcount,
  updateSubmissionDetail:updateSubmissionDetail,
  getSubmissiondetailpage:getSubmissiondetailpage,
  getSubmissiondetailcount:getSubmissiondetailcount,
  searchSubmissiondetail:searchSubmissiondetail,
  searchSubmissiondetailcount:searchSubmissiondetailcount,
  setSubmissionDetailStatus:setSubmissionDetailStatus,
  getSubmissionpage:getSubmissionpage,
  getSubmissionById: getSubmissionById,
  getSubmissioncount:getSubmissioncount,
  searchSubmission:searchSubmission,
  searchSubmissioncount:searchSubmissioncount,
  getCategories:getCategories,
  getCategory:getCategory,
  saveCategory:saveCategory,
  updateCategory:updateCategory,
  getCategoryCount:getCategoryCount,
  getCategorypage:getCategorypage,
  searchCategory : searchCategory,
  searchCategoryCount : searchCategoryCount,
  setCategoryActive : setCategoryActive,
  login:login,
  updatePassword:updatePassword,
  activateUser:activateUser,
  createUser:createUser
}
