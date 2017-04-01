var mediator = new Mediator();

// module1
mediator.subscribe("uppercaser", function (arg) {
  mediator.publish("splitter", arg.toUpperCase());
  mediator.publish("log", "module1 done");
});

// module2
mediator.subscribe("splitter", function (arg) {
  var array1 = arg.split("");
  mediator.publish("length", array1);
  mediator.publish("log", "module2 done " + new Date());
});

// module3 
mediator.subscribe("length", function (arg) {
  var l = arg.length;
  mediator.publish("log", l + " module3 done " + new Date());
});

// log
mediator.subscribe("log", function (arg) {
  var log = [];
  log.push(arg);
  document.write(log.toString().split(""));
});


// start
var var1 = "xcxxcxc";
mediator.publish("uppercaser", var1);