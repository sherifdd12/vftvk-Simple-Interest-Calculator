function compute()
{
    //Assign inputs to variables
   var principal = document.getElementById("principal").value;
   //check if amount value less than or empty 1
    if (principal<1 ){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false;
   }
    var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
      var year = new Date().getFullYear()+parseInt(years);
      document.getElementById("result").innerText="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+principal+",\<br\>in the year "+year+"\<br\>"
}
     function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}   