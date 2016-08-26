// Business Logic

function Pizza (name, topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.cost = function() {

}

// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputName = $("").val();
    var inputTopping = $("").val();
    var inputSize = $("").val();
    var newPizza = new Pizza(inputName, inputTopping, inputSize);
  });
});
