/**
 * Created by Sudhir on 3/1/2016.
 */

function functionDisplayDate() {
    console.log(today.getDate() + 30);
    console.log(today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear());
}

function checkDateGreaterOrLessThan(validateDate){
    var date = new Date(validateDate);
    if((Math.ceil((date.getTime()-today.getTime())/one_day))==0){
        console.log("Date is Today's Date");
    }else if((Math.ceil((date.getTime()-today.getTime())/one_day))>0){
        console.log("Date is Greater Than Today's Date");
    }else{
        console.log("Date is Less Than Today's Date");
    }
}

function isValidDate(dateString) {
    debugger;
    var dateStringSplit;
    var formatDate;

    if (dateString.length >= 8 && dateString.length<=10) {
        try {
            dateStringSplit = dateString.split('/');
            var validateDate = new Date(parseInt(dateStringSplit[2]),parseInt(dateStringSplit[0]),parseInt(dateStringSplit[1]));
            var validateDateMilliSec = validateDate.getTime();
            var date = new Date();
            date.setTime(validateDateMilliSec);
            if (date.getFullYear() !== parseInt(dateStringSplit[2]) ||
                date.getMonth() !== parseInt(dateStringSplit[0]) ||
                date.getDate() !== parseInt(dateStringSplit[1])) {
                return false;
            }else{
                return true;
            }
        } catch (e) {
            return false;
        }
    }
    return false;
}

var one_day=1000*60*60*24;
var today = new Date();

functionDisplayDate();

today.setHours(0,0,0);

checkDateGreaterOrLessThan(new Date(2016,2,1));

if(isValidDate("04/05/2006")){
    console.log("Date Provided is a Valid Date");
}else {
    console.log("Date Provided is NOT a Valid Date");
}