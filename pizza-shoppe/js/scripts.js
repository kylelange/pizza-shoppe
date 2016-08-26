// Business Logic
var orders = [];
function Pizza (name, topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.cost = function() {
 if (this.size === "Small: good for NOT sharing. Like, ever."){
   return 8;
 } else {
   return 16;
 }
}


// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    //debugger;
    var inputName = $("#name-in").val();
    var inputTopping = $("#topping-in").val();
    var inputSize = $("#size-in").val();
    var newPizza = new Pizza(inputName, inputTopping, inputSize);
    orders.push(newPizza);

    $("#output").append("<h1> Okay "+newPizza.name+", here is your pie:</h1><ul></ul>");
    var totalCost = 0;  //will use to calculate cost of multiple pizzas
    var counter = 0;  //will use to label checkboxes generated in the .forEach display loop
    orders.forEach(function(order){
      if(order) {
        $("#output ul").append("<li><input type='checkbox' value'"+counter+"'>One "+order.topping+" That'll be: $"+order.cost()+", please.</li>");
        totalCost += order.cost();
      }
      counter++;
    });
    $("#output").append("<h2> Total Cost: $"+totalCost+"</h2>");
    $("#output").show();
    $("#delete").show();
    $("#nother").show();
    orders = [];

    //$("#output").empty();
  });
  $("#delete").click(function(){
    //debugger;
    var checkOn = $("#output input:checked").parent();
    checkOn.each(function(){
      var index = parseInt($(this).children("input").val());
      orders[index] = "";
    });
    checkOn.remove();
    totalCost += order.cost();
    console.log(totalCost);
  });
});
