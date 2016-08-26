// Business Logic

function Pizza (name, topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size;
  console.log(this.name);
}

Pizza.prototype.cost = function() {

}

// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputName = $("#name-in").val();
    var inputTopping = $("#topping-in").val();
    var inputSize = $("#size-in").val();
    var newPizza = new Pizza(inputName, inputTopping, inputSize);

    //return info in a hidden div "#output"
    $("#output").show();
  });
});
