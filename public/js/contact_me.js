


$(document).ready(function(){
  var from,to,subject,text;
  $("#send_email").click(function(){

    from=$("#from").val();
    subject=$("#subject").val();
    text=$("#content").val();
    $("#message").text("Sending E-mail...Please wait");
    alert("Email is been sent to Aimila Maimaitijiang.");
    $.get("/send",{from:from,subject:subject,text:text},function(data){
    if(data=="sent")
    {
     $("#message").empty().html("<p>Email is been sent to Aimila Maimaitijiang. </p>");
    }; 


});
  });
});


  