mplate
var tpl = _.template("<h1>I like the taste of <%= name %>! But, only from a <%= bottle %>. Drowning would <%= idea %> because <%= reason %>.</h1>");
// some data object
var data = {
  name: "water",
  bottle: "glass",
  idea: "suck",
  reason: "dying.",
};
// replace $('body')'s html with it
console.log("first pass");
var rendered_template = tpl(data);
$('body').html(rendered_template);

// can also be written as this.. and changed the data
console.log("second pass");
data.food = "Sunflower butter & lignon berry sandwiches";
$('body').html(tpl(data));
