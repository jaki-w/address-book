$(document).ready(function() {
  $("#blanks form").submit(function(event)( {
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var address = $("input#address").val();
    var emailAddress = $("input#email-address").val();
    var phoneNumber = $("input#phone-number").val();


    $(".first-name").text(firstName);
    $(".last-name").text(lastName);
    $(".address").text(address);
    $(".email-address").text(emailAddress);
    $(".phone-number").text(phoneNumber);
    $(".hide").toggle();
    event.preventDefault();
    $("button").click(function(){
      $("p").show();
    });
  });
});
