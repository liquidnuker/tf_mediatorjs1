var mediator = new Mediator();

// module1
mediator.subscribe("uppercaser", function (arg) {
  console.log(arg.toUpperCase());
});

// module2
mediator.subscribe("message", function (arg) {
  console.log(arg);
});

mediator.publish("message", "message1");
mediator.publish("uppercaser", "ytruytuy");

// mediator.remove("message"); 
mediator.publish("message", "message1");