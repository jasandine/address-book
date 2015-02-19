$("#show-contact").hide();

$("form#new-contact").submit(function(event) {
  var firstName = $("input#new-first-name").val(),
      lastName = $("input#new-last-name").val();

  var newContact = { firstName: firstName, lastName: lastName, addresses: [] };

  $("ul#contacts").append("<li class='list-group-item'><span class='contact'>" + newContact.firstName + " "
    + newContact.lastName + "</span></li>");

  $(".new-address").each(function() {
    var streetInput = $(this).find("input.new-street").val();
    var cityInput = $(this).find("input.new-city").val();
    var stateInput = $(this).find("input.new-state").val();

    var newAddress = { street: streetInput, city: cityInput, state: stateInput };

    newContact.addresses.push(newAddress);
  });

  $(".contact").last().click(function() {
    $("#show-contact").show("slow");

    $("#show-contact h2").text(newContact.firstName);
    $("li#first-name").text("First Name: " + newContact.firstName);
    $("li#last-name").text("Last Name: " + newContact.lastName);

    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.street + address.city + address.state + "</li>");
    });
  });


  $("#new-contact").trigger("reset");

  event.preventDefault();
});
