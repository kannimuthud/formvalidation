
function emailValidation() {
  var Emailid = document.getElementById("email").value;
  let span=document.getElementById("emailspan");
  var re=/^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
if(Emailid.length==0)
{
  span.innerText = " ";
}
else  if (re.test(Emailid)){
  span.innerText = " ";

}
else{
   span.innerText = "Enter valid Emailid";
}
}




function firstNameValidation() {
  var y = document.getElementById("firstname").value;
  var re=/^[a-zA-Z]+$/;
  var span6=document.getElementById("firstnamespan");

  if(y.length==0)
  {
    span6.innerText = " ";
  }
  else  if (re.test(y)){
  span6.innerHTML = " ";
}
else{
  span6.innerText=" Enter valid name";
}

}







function lastNameValidation() {
var y = document.getElementById("lastname").value;
var re=/^[a-zA-Z]+$/;
var span7=document.getElementById("lastnamespan");
if(y.length==0)
{
  span7.innerText = " ";
}
else if (re.test(y)){
span7.innerText = " ";
}
else{
span7.innerText = "Enter valid name";
}

}







function dateValidation() {
  var x = document.getElementById("dob").value;
  // let span1=document.getElementById("dobspan");
 

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
   if(dd<10){
          dd='0'+dd
      } 
      
      if(mm<10){
          mm='0'+mm
      } 
  
  date= yyyy+'-'+mm+'-'+dd;
  document.getElementById("dob").setAttribute("max",date);
  // console.log(d);
  // console.log(x);

  // if(d.length==0)
  // {
  //   spa.innerHTML = " ";
  // }

  //  else if(d <x){
    
  //   spa1.innerText = "Enter valid DOB";
  // }else{
  //   spa1.innerText=" ";
  // }
  

}










function urlValidation() {
    var url = document.getElementById("url").value;
    let span2=document.getElementById("urlspan");

    if(url.length==0)
    {
      span2.innerText = " ";
    }

   else if (url.startsWith('https://')){
    span2.innerText=" "; 

  }
  else{
    span2.innerText=" Enter Invalid URL";
      }
}








function passwordValidation() {
    var password = document.getElementById("password").value;
    var firstname = document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var fullname = firstname.concat(lastname);
    var q1=password.localeCompare(firstname);
    var q2=password.localeCompare(lastname);
    var q3=password.localeCompare(fullname);
  if (q1==0 || q2==0 ||q3==0  || (password.length==0)){
    alert("Please change your password.Password can't be the first name or last name");
    event.preventDefault();

  }

}






function mobileNumberValidation(){
    var a=document.getElementById("mobilenumber").value;
    let span3=document.getElementById("mobilenumberspan");
    if(a.length==0)
  {
    span3.innerText = " ";
  }

  else  if(isNaN(a) || a.length!=10){
        span3.innerText="Enter valid Mobilenumber";

     }
     else{
       span3.innerText=" ";
     }

}
