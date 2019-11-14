/*OLDJS
const popmotion=require('popmotion')//includes popmotion library
require('./useless.js')//importing a local .js file
// ./ means file in same directory
// code taken from one of the examples on popmotion.io
*/
import popmotion from "popmotion";//es6 way of doing it
import "./useless"
const ball = document.querySelector(".box");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(ball, "mousedown touchstart").start(function(e) {
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup").start(function() {
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200
    })
    .start(ballXY);
});
