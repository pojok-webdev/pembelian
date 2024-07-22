describe ticketfollowupodoo;
select ticket_id,followUpDate,picname,position,picphone from ticketfollowupodoo order by createdate desc limit 0,10;

select createdate,clientname,status from ticketodoo where kdticket in ('202401003','202401004','202401005','202401006','202401008','202401009','202401011','202401012','202401013','202401014','202401015','202401016','202401017');

select distinct a.id,a.kdticket,a.clientname,a.reporter,group_concat(confirmationresult) confirmationresult,group_concat(conclusion) conclusion,date_format(ticketstart,'%H:%i:%s')ticketstart,a.complaint,a.status,case f.clientcategory when '1' then 'FFR' when '2' then 'Platinum' when '3' then 'Gold' when '4' then 'Bronze' when '5' then 'Silver' else 'Other' end category,case f.branch_id when  '1' then 'Surabaya' when '2' then 'Jakarta' when '3' then 'Malang' when '4' then 'Bali' end branch,c.name subcause,d.name maincause from ticketodoo a left outer join ticket_followups e on e.ticket_id=a.id left outer join ticketcauses c on c.id=a.cause_id left outer join ticketcausecategories d on d.id=c.category_id left outer join clients f on f.id=a.client_id where date(a.ticketstart)='2024-1-02' and f.branch_id in (1,3,4) group by a.id,a.kdticket,a.clientname,a.reporter,a.ticketstart,a.complaint,a.status,c.name,d.name;

select distinct a.id,a.kdticket,a.clientname,a.reporter,case e.clientcategory when '1' then 'FFR' when '2' then 'Platinum' when '3' then 'Gold' when '4' then 'Bronze' when '5' then 'Silver' else 'Other' end category,c.name subrootcause, d.name mainrootcause, date_format(ticketstart,'%d-%b-%Y %H:%i:%s')ticketstart,a.complaint,a.status from ticketodoo a left outer join ticketcauses c on c.id=a.cause_id left outer join ticketcausecategories d on d.id=c.category_id left outer join clients e on e.id=a.client_id where date(a.ticketstart)>='2024-4-16' and date(a.ticketstart)<='2024-4-1' and e.branch_id in (1,2,3,4) and d.id in (11,12,14,15);

select distinct a.id,a.kdticket,a.clientname,a.reporter,case e.clientcategory when '1' then 'FFR' when '2' then 'Platinum' when '3' then 'Gold' when '4' then 'Bronze' when '5' then 'Silver' else 'Other' end category,c.name subrootcause, d.name mainrootcause, date_format(ticketstart,'%d-%b-%Y %H:%i:%s')ticketstart,a.complaint,a.status from ticketodoo a left outer join ticketcauses c on c.id=a.cause_id left outer join ticketcausecategories d on d.id=c.category_id left outer join clients e on e.id=a.client_id where date(a.ticketstart)>='2024-4-01' and date(a.ticketstart)<='2024-4-17' and e.branch_id in (1,2,3,4) and d.id in (11,12,13,14,15);

select ticketstart from ticketodoo where date(ticketstart)>'2024-4-1';




select W.id,W.name,W.cnt from  (   select c.id,c.name, count(a.id) cnt from ticketodoo a   left outer join ticketcauses b on b.id=a.cause_id    left outer join ticketcausecategories c on c.id=b.category_id    left outer join clients d on d.id=a.client_id  left outer join backbones e on e.id=a.backbone_id  left outer join btstowers f on f.id=a.btstower_id  left outer join datacenters g on g.id=a.datacenter_id  left outer join ptps h on h.id=a.ptp_id  left outer join cores i on i.id=a.core_id  left outer join (   select a.id,b.branch_id from aps a    left outer join btstowers b   on b.id=a.btstower_id ) j on j.id=a.ap_id    where date(a.createdate)>="2024-3-01" and date(a.createdate)<="2024-4-17"    and (d.branch_id in (1,2,3,4) or d.branch_id in  (1,2,3,4)    or e.branch_id_ in  (1,2,3,4)   or f.branch_id in  (1,2,3,4)   or g.branch_id in  (1,2,3,4)   or h.branch_id in  (1,2,3,4)   or i.branch_id in  (1,2,3,4)   or j.branch_id in  (1,2,3,4)   )  and a.status in ("0','1")    and b.id is not null group by c.id,c.name )W 
left outer join 
(   select distinct cnt from(select c.id,c.name, count(a.id) cnt from ticketodoo a   left outer join ticketcauses b on b.id=a.cause_id    left outer join ticketcausecategories c on c.id=b.category_id    left outer join clients d on d.id=a.client_id  left outer join backbones e on e.id=a.backbone_id  left outer join btstowers f on f.id=a.btstower_id  left outer join datacenters g on g.id=a.datacenter_id  left outer join ptps h on h.id=a.ptp_id  left outer join cores i on i.id=a.core_id  left outer join (   select a.id,b.branch_id from aps a    left outer join btstowers b   on b.id=a.btstower_id ) j on j.id=a.ap_id    where date(a.createdate)>="2024-3-01" and date(a.createdate)<="2024-4-17"    and (d.branch_id in (1,2,3,4) or d.branch_id in  (1,2,3,4)    or e.branch_id_ in  (1,2,3,4)   or f.branch_id in  (1,2,3,4)   or g.branch_id in  (1,2,3,4)   or h.branch_id in  (1,2,3,4)   or i.branch_id in  (1,2,3,4)   or j.branch_id in  (1,2,3,4)   )  and a.status in ("0','1")    and b.id is not null group by c.id,c.name order by count(a.id) desc)a    limit 0,5  )X on X.cnt=W.cnt where X.cnt is not null order by W.cnt desc; 


##
select W.id,W.name,W.cnt from  (   select a.status,c.id,c.name, count(a.id) cnt from ticketodoo a   left outer join ticketcauses b on b.id=a.cause_id    left outer join ticketcausecategories c on c.id=b.category_id    left outer join clients d on d.id=a.client_id  left outer join backbones e on e.id=a.backbone_id  left outer join btstowers f on f.id=a.btstower_id  left outer join datacenters g on g.id=a.datacenter_id  left outer join ptps h on h.id=a.ptp_id  left outer join cores i on i.id=a.core_id  left outer join (   select a.id,b.branch_id from aps a    left outer join btstowers b   on b.id=a.btstower_id ) j on j.id=a.ap_id    where date(a.createdate)>="2024-3-01" and date(a.createdate)<="2024-4-17"    and (d.branch_id in (1,2,3,4) or d.branch_id in  (1,2,3,4)    or e.branch_id_ in  (1,2,3,4)   or f.branch_id in  (1,2,3,4)   or g.branch_id in  (1,2,3,4)   or h.branch_id in  (1,2,3,4)   or i.branch_id in  (1,2,3,4)   or j.branch_id in  (1,2,3,4)   )   and a.status in (0)  and b.id is not null group by c.id,c.name )W ;


select a.id,b.id, budgeting_number,b.itemname,c.category_id,d.name kategori,a.createdate,e.username from submissions a left outer join submission_details b on b.submission_id=a.id left outer join products c on c.id=b.product_id left outer join categories d on d.id=c.category_id left outer join users e on e.id=a.user_id  order by a.createdate desc limit 1,30;


select a.id,b.id, budgeting_number,b.itemname,c.category_id,d.name kategori,a.createdate,e.username from submissions a left outer join submission_details b on b.submission_id=a.id left outer join products c on c.id=b.product_id left outer join categories d on d.id=c.category_id left outer join users e on e.id=a.user_id  where d.name="Material";


select a.id,b.id, budgeting_number,b.itemname,c.category_id,d.name kategori,a.createdate,e.username from submissions a left outer join submission_details b on b.submission_id=a.id left outer join products c on c.id=b.product_id left outer join categories d on d.id=c.category_id left outer join users e on e.id=a.user_id  where d.name="Dijual";

select distinct d.name from submissions a left outer join submission_details b on b.submission_id=a.id left outer join products c on c.id=b.product_id left outer join categories d on d.id=c.category_id left outer join users e on e.id=a.user_id;

1. kategori dimunculkan
2. setelah received ditampilkan harga proposed dan realization
3. filter by nama barang





4. filter by pengaju
5. permudah search ketika entri (by kata kunci)
6. penamaan produk
7. Perlu segmentasi internal dan external 
8. data produk ambil dari Odoo 

1 Dijual
5 perangkat material (dijual) 





		sql = "select a.id,a.kdticket,a.clientname,d.address,a.reporter,";
		sql += "date_format(ticketstart,'%d %b %Y')ticketdatestart,date_format(ticketstart,'%H:%i:%s')tickettimestart,";
		sql += "a.complaint,a.status,case a.status when '1' then 'selesai' when '0' then 'belum selesai' end textstatusx, b.description,b.conclusion, ";
		sql += "case  when c.status is null then case a.status when  '0' then 'belum selesai' when '1' then 'selesai' end  else case c.status when '0'  then 'Progress' when '1' then 'Solved' when '2' then 'Monitoring'  end  end textstatus , ";
		sql += "case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else datediff(downtimeend,downtimestart) end downtimeday,case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else date_format(timediff(downtimeend,downtimestart),'%i') end  downtimetime,solution,b.confirmationresult ";
		sql += "from tickets a left outer join ticket_followups b on b.ticket_id=a.id ";
		sql += " left outer join troubleshoot_requests c on c.ticket_id=a.id  ";
		sql += " left outer join client_sites d on d.id=a.client_site_id ";
		sql += "where a.client_id='$client_id' ";
		$data['extendsegment'] = "";
		$data['dt1'] = "";
		$data['dt2'] = "";
		$data['monthchecked'] = "";
		$data['allchecked'] = 'checked="checked"';
		if($this->uri->total_segments()===6){
			sql += "and ticketstart>'".getticketdate($this->uri->segment(5)). "' ";
			sql += "and ticketstart<'".getticketdate($this->uri->segment(6)). "' ";
			$data['extendsegment'] = $this->uri->segment(5).'/'.$this->uri->segment(6);
			$data['dt1'] = $this->common->sql_to_human_date(getticketdate($this->uri->segment(5)));
			$data['dt2'] = $this->common->sql_to_human_date(getticketdate($this->uri->segment(6)));
			$data['monthchecked'] = 'checked="checked"';
			$data['allchecked'] = "";
		};
		sql +="order by d.address asc,ticketstart ".$ordertype."; ";




select a.id,b.id,a.clientname,count(a.id)cnt from ticketodoo a left outer join clients b on b.id=a.client_id group by b.id;





		sql = "select a.id,a.kdticket,a.clientname,d.address,a.reporter,";
		sql += "date_format(ticketstart,'%d %b %Y')ticketdatestart,date_format(ticketstart,'%H:%i:%s')tickettimestart,";
		sql += "a.complaint,a.status,case a.status when '1' then 'selesai' when '0' then 'belum selesai' end textstatusx, b.description,b.conclusion, ";
		sql += "case  when c.status is null then case a.status when  '0' then 'belum selesai' when '1' then 'selesai' end  else case c.status when '0'  then 'Progress' when '1' then 'Solved' when '2' then 'Monitoring'  end  end textstatus , ";
		sql += "case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else datediff(downtimeend,downtimestart) end downtimeday,case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else date_format(timediff(downtimeend,downtimestart),'%i') end  downtimetime,solution,b.confirmationresult ";
		sql += "from tickets a left outer join ticket_followups b on b.ticket_id=a.id ";
		sql += " left outer join troubleshoot_requests c on c.ticket_id=a.id  ";
		sql += " left outer join client_sites d on d.id=a.client_site_id ";
		sql += "where a.client_id='$client_id' ";
		sql +="order by d.address asc,ticketstart "


		select a.id,a.kdticket,a.clientname,d.address,a.reporter,date_format(ticketstart,'%d %b %Y')ticketdatestart,date_format(ticketstart,'%H:%i:%s')tickettimestart,a.complaint,a.status,case a.status when '1' then 'selesai' when '0' then 'belum selesai' end textstatusx, b.description,b.conclusion, case  when c.status is null then case a.status when  '0' then 'belum selesai' when '1' then 'selesai' end  else case c.status when '0'  then 'Progress' when '1' then 'Solved' when '2' then 'Monitoring'  end  end textstatus , case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else datediff(downtimeend,downtimestart) end downtimeday,case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else date_format(timediff(downtimeend,downtimestart),'%i') end  downtimetime,solution,b.confirmationresult 
		from 
		tickets a left outer join ticket_followups b on b.ticket_id=a.id  
		left outer join troubleshoot_requests c on c.ticket_id=a.id   
		left outer join client_sites d on d.id=a.client_site_id 
		where a.client_id='10664' order by d.address asc,ticketstart ;





select a.id,a.kdticket,a.clientname,d.address,a.reporter,date_format(ticketstart,'%d %b %Y')ticketdatestart,date_format(ticketstart,'%H:%i:%s')tickettimestart,a.complaint,a.status,case a.status when '1' then 'selesai' when '0' then 'belum selesai' end textstatusx, b.description,b.conclusion, case  when c.status is null then case a.status when  '0' then 'belum selesai' when '1' then 'selesai' end  else case c.status when '0'  then 'Progress' when '1' then 'Solved' when '2' then 'Monitoring'  end  end textstatus , case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else datediff(downtimeend,downtimestart) end downtimeday,case when (a.downtimestart = '0000-00-00 00:00:00' or a.downtimeend = '0000-00-00 00:00:00') then '0' else date_format(timediff(downtimeend,downtimestart),'%i') end  downtimetime,solution,b.confirmationresult from ticketodoo a left outer join ticket_followups b on b.ticket_id=a.id  left outer join troubleshoot_requests c on c.ticket_id=a.id   left outer join client_sites d on d.id=a.client_site_id where a.client_id='273' and ticketstart>=2023-09-01 and ticketend<=2024-05-22 order by d.address asc,ticketstart 



select a.id,a.kdticket,a.clientname,date_format(ticketstart,'%d %b %Y')ticketdatestart,date_format(ticketstart,'%H:%i:%s')tickettimestart,a.complaint,a.status from ticketodoo a left outer join ticket_followups b on b.ticket_id=a.id  left outer join troubleshoot_requests c on c.ticket_id=a.id   left outer join client_sites d on d.id=a.client_site_id where a.client_id='273';


select a.id,a.kdticket,a.clientname,date_format(ticketstart,'%d %b %Y')ticketdatestart,date_format(ticketstart,'%H:%i:%s')tickettimestart,a.complaint,a.status from ticketodoo a left outer join ticket_followups b on b.ticket_id=a.id  left outer join troubleshoot_requests c on c.ticket_id=a.id   left outer join client_sites d on d.id=a.client_site_id where a.client_id='273' and ticketstart>="2022-09-01" and ticketend<="2024-05-22" order by d.address asc,ticketstart;


select * from (select a.id,a.kdticket,a.create_date,a.ticketstart,a.ticketend,a.createuser,a.status,a.cause, case a.status when '0' then 'open' when '1' then 'close' end ticketStatus,case a.status when '0' then '-' when '1' then ticketend end ticket_End,a.clientname,a.reporterphone,a.requesttype,a.parentid,b.id cid,c.id backboneid,d.id btsid,e.id dcid,f.id ptpid,reporter,i.trid,j.hastroubleshoot,case when b.id is not null then b.brnid when c.id is not null then c.brnid when d.id is not null then d.brnid when e.id is not null then e.brnid when f.id is not null then f.brnid when g.id is not null then g.brnid when h.id is not null then h.brnid else '-' end brnid, case when b.id is not null then b.brn when c.id is not null then c.brn when d.id is not null then d.brn when e.id is not null then e.brn when f.id is not null then f.brn when g.id is not null then g.brn when h.id is not null then h.brn else '-' end brn, case when ticketend is null then datediff(now(),ticketstart) when ticketend='0000-00-00 00:00:00' then datediff(now(),ticketstart) else datediff(ticketend,ticketstart) end  hari ,concat(case when ticketend is null then datediff(now(),ticketstart) when ticketend='0000-00-00 00:00:00' then datediff(now(),ticketstart) else datediff(ticketend,ticketstart) end,' hari ',time_format(case when ticketend is null then timediff(now(),ticketstart) when ticketend='0000-00-00 00:00:00' then timediff(now(),ticketstart) else timediff(ticketend,ticketstart) end,'%H') % 24, time_format(case when ticketend is null then timediff(now(),ticketstart) when ticketend='0000-00-00 00:00:00' then timediff(now(),ticketstart) else timediff(ticketend,ticketstart) end,'  jam %i menit %s detik')) duration3  from (select * from tickets  where status='0' ) a left outer join (select distinct a.id,c.id brnid,c.name brn from client_sites a left outer join branches_client_sites b on b.client_site_id=a.id left outer join branches c on c.id=b.branch_id where c.id in ("1","2","3","4") ) b on b.id=a.client_site_id left outer join (select distinct a.id,c.id brnid,c.name brn from backbones a left outer join backbones_branches b on b.backbone_id=a.id left outer join branches c on c.id=b.branch_id where c.id in ("1","2","3","4") ) c on c.id=a.backbone_id left outer join (select distinct a.id,b.id brnid,b.name brn from btstowers a left outer join branches b on b.id=a.branch_id where b.id in ("1","2","3","4") ) d on d.id=a.btstower_id left outer join (select distinct a.id,b.id brnid,b.name brn from datacenters a left outer join branches b on b.id=a.branch_id where b.id in ("1","2","3","4") ) e on e.id=a.datacenter_id left outer join (select distinct a.id,b.id brnid,b.name brn from ptps a left outer join branches b on b.id=a.branch_id where b.id in ("1","2","3","4") ) f on f.id=a.ptp_id left outer join (select distinct a.id,b.id brnid,b.name brn from cores a left outer join branches b on b.id=a.branch_id where b.id in ("1","2","3","4") ) g on g.id=a.core_id left outer join (select distinct a.id,c.id brnid,c.name brn from aps a left outer join btstowers b on b.id=a.btstower_id left outer join branches c on c.id=b.branch_id where c.id in ("1","2","3","4") ) h on h.id=a.ap_id left outer join (select id trid,ticket_id from troubleshoot_requests where status='0') i on i.ticket_id=a.id left outer join (select id hastroubleshoot,ticket_id from troubleshoot_requests) j on j.ticket_id=a.id where b.id is not null or c.id is not null or d.id is not null or e.id is not null or f.id is not null or g.id is not null or h.id is not null )q 


select a.id,a.kdticket,a.client_id,a.location_id,substring(locationtext,1,0)locationtext,substring(a.clientname,0,10)clientname,customer_number,a.cause_id, case when requesttype is null then "uncategorized" else trim(upper(requesttype)) end requesttype,c.id causecategory_id, ou,case a.status when "0" then "Open" when "1" then "Closed" end status, case when c.id is null then "not-defined"  when c.id =11 then "-Core-"  when c.id =12 then "-BTS-"  when c.id =13 then "-Lastmile-"  when c.id =14 then "-Local-Pelanggan-"  when c.id =15 then "-Non-Teknis-Padinet-"  else c.name end cause_category from ticketodoo a left outer join ticketcauses b on b.id=a.cause_id left outer join ticketcausecategories c on c.id=b.category_id where a.id>=42000 order by id desc



select a.id,a.kdticket,a.client_id,a.location_id,substring(locationtext,1,10)locationtext,substring(a.clientname,1,10)clientname,customer_number,a.cause_id, case when requesttype is null then "uncategorized" else trim(upper(requesttype)) end requesttype,c.id causecategory_id, ou from ticketodoo a left outer join ticketcauses b on b.id=a.cause_id left outer join ticketcausecategories c on c.id=b.category_id where a.id>=42000 order by id desc ;



mysql> select id,username,email,password,salt from users where username like '%felix%';
+----+----------+-------------------+--------------------------------------------------------------------------+----------------------------------+
| id | username | email             | password                                                                 | salt                             |
+----+----------+-------------------+--------------------------------------------------------------------------+----------------------------------+
|  6 | felix    | felix@padi.net.id | kxW6faxHKsiHWP3uM9LUcDqU9Fk7Os9Qe05b3612d9cf6e8ce707046ba6afed4319b4964a | kxW6faxHKsiHWP3uM9LUcDqU9Fk7Os9Q |
+----+----------+-------------------+--------------------------------------------------------------------------+----------------------------------+
1 row in set (0.03 sec)
roles:
3, 8, 9, 10
select * from roles where id in (3, 8, 9, 10);
