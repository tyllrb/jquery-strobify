jquery-strobify
===============

jQuery plugin for creating a strobe effect. Essentially continuously changes the background color of an element. 


Usage
===============

To turn strobe effect on

$("body").strobify ('on');

To turn the effect off

$("body").strobify ('off');

Effect can also take two arguments. One being an array of the colors to use in the strobe effect and the other to control the speed (in milliseconds) in which the colors change. 

$("body").strobify ('on', {colors: ['#ff0000', '#00ff00', '#0000ff'], speed: 1000});
