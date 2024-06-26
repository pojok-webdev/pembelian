getInputDate = (obj,callback) => {
  switch(obj.format){
    case "bb/dd/YYYY HH:mm:ss bb/dd/YYYY HH:mm:ss":
      //console.log('format ')
      spliter = obj.ticketstart.split(' ')
      dtpart = obj.ticketstart.substring(1,10)
      tmpart = obj.ticketstart.substring(12,4)
      tmp = dtpart.split('/')
      dtout = tmp[2]+'-'+tmp[0]+'-'+tmp[1]
      tmout = spliter[1]  
    break
    case "YYYY-bb-dd HH:mm:ss":
      //console.log('format YYYY-bb-dd HH:mm:ss')
      spliter = obj.ticketstart.split(" ")
      dtout = spliter[0]
      tmout = spliter[1]
    break
  }
    callback(dtout+' '+tmout)
  }
diff_minutes = (dt2, dt1) =>  { 
   var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= 60;
   return Math.abs(Math.round(diff));
  }

// dt1 = new Date(2014,10,2);
// dt2 = new Date(2014,10,3);
// console.log(diff_minutes(dt1, dt2));
 

parseDate2 = obj => {
  switch(obj.format){
    case 'Y/d/m':
      console.log('Parsedate Obj got',obj)
      split1 = obj.dttime.split(' ')
      split2 = split1[0]
      console.log('Dates',split2)
      console.log('Time',split1[1])
      dates = split2.split('/')
      year = dates[2]
      month = dates[0]
      date = dates[1] 
      console.log('resu',year+"-"+month+'-'+date+' '+split1[1])
      return year+"-"+month+'-'+date+' '+split1[1]
    break
    case 'Y/m/d':
      console.log('Parsedate Obj got',obj)
      split1 = obj.dttime.split(' ')
      split2 = split1[0]
      console.log('Dates',split2)
      console.log('Time',split1[1])
      dates = split2.split('/')
      year = dates[2]
      month = dates[1]
      date = dates[0] 
      console.log('resu',year+"-"+month+'-'+date+' '+split1[1])
      return year+"-"+month+'-'+date+' '+split1[1]
      break
    }
}
parseDate = (obj)=>{
  dates = obj.split('/')
  year = dates[2]
  month = dates[1]
  date = dates[0] 
  return year+"-"+month+'-'+date
}
dt = {
  sqlToIdDate : obj => {
      dates = obj.split('-')
      year = dates[2]
      month = dates[1]
      date = dates[0] 
      return date+"/"+month+'/'+year
  },
  getElementsFromSQL : obj => {
      dates = obj.split('-')
      year = dates[0]
      month = dates[1] - 1
      date = dates[2] 
      return {date:date,month:month,year:year}
  }
}
extractDate = obj => {
  console.log('obj',obj)
  switch(obj.srcPattern){
    case 'm/d/Y':
      console.log('A',obj.srcval)
      srcdelimiter = '/'
      arr1 = obj.srcval.split(srcdelimiter)
      day = arr1[1]
      mnt = arr1[0]
      yr = arr1[2]
      console.log('dategot',yr+'-'+mnt+'-'+day)
      return yr+'-'+mnt+'-'+day
    break

  }
}
getDt = obj => {
  console.log('getDt obj',obj)
  switch(obj.format){
    case 'mysql':
      tmp = obj.date.split("/")
      out = tmp[2]+'-'+tmp[0]+'-'+tmp[1]
    break
    default:
      tmp = obj.date.split("/")
      out = tmp[2]+'-'+tmp[0]+'-'+tmp[1]
    break
  }
  return out
}