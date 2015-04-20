mplate
var tpl = _.template("<h1>Yo, I am <%= name %>! My favorite movie is <%= movie %>. I love visiting <%= city %> because <%= reason %>.</h1>");
// some data object
var data = {
  name: "Dakoda",
  movie: "Harold and Maude",
  city: "Maui",
  reason: "the lack of people.",
};
// replace $('body')'s html with it
console.log("first pass");
var rendered_template = tpl(data);
$('body').html(rendered_template);

// can also be written as this.. and changed the data
console.log("second pass");
data.food = "Sunflower butter & lignon berry sandwiches";
$('body').html(tpl(data));


mplate
var tpl = _.template("Dad's Gone Crazy");
// some data object
var data = {
  name: "Dad's Gone Crazy",
};

console.log("Dad's Gone Crazy");
data.name = "Dad's Gone Crazy";

this.$el.html(renderedTemplate);
$('body').append(this.$el);
