$.fn.stairUp = function(options){
	var settings = $.extend({
		level:1
	},options);
	out=$(this);
	for(i=0;i<settings.level;i++){
		out=out.parent();
	}
	return out;
}
checkEmpty = obj => {
	if((obj.val()).trim()===""){
		return false
	}else{
		return true
	}
}
getTodayDate = _ => {
	d = new Date()
	return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,'0')+"-"+String(d.getDate()).padStart(2,"0")
}
convertDate = (obj) => {
	switch(obj.srcForm){
		case "dd/mm/yyyytoyyyy-mm-dd":
			
	}
}
writeLog = (obj) => {
	$.ajax({
		url:'/crud',
		type:'post',
		data:{
			tableName:'applogs',
			crudtype:'create',
			cols:[
				{key:"subject",val:obj.subject},
				{key:"description",val:obj.description},
				{key:"createuser",val:obj.createuser}
			],
			conditions:[]
		}
	})
}