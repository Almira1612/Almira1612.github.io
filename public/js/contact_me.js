


$(document).ready(function(){
  var From,to,subject,text;
  $("#send_email").click(function(){

    From=$("#from").val();
    subject=$("#subject").val();
    text=$("#content").val();
    
    alert("Email is been sent to Aimila Maimaitijiang.");
    $.get("/send",{from:From,subject:subject,text:text},function(data){
    if(data=="sent")
    {
     $("#message").empty().html("<p>Email is been sent to Aimila Maimaitijiang. </p>");
    }; 


});
  });
});


  