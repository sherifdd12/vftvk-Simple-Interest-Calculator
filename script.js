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
      //document.getElementById("result").innerText="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
      document.getElementById("result").innerText="If you deposit "+principal+"," 
      document.getElementById("result2").innerText="at an interest rate of "+rate+"%."
      document.getElementById("result3").innerText="You will receive an amount of "+interest+","
      document.getElementById("result4").innerText="in the year "+year
    }
     function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}   