'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
// var ripplyScott =  {
//     init: function(target, timing) {
//       let _this = this;
//       var button = document.getElementById(target);
//       button.addEventListener('click', function(event) {
//         rippleAnimation.call(_this, event, timing);
//       });
//     }
// };
function rippleAnimation(target, event, timing) {
    // var tl = new TimelineMax();
    var tl = new TimelineLite();
    var x = event.offsetX,
        y = event.offsetY,
        w = event.target.offsetWidth,
        h = event.target.offsetHeight,
        offsetX = Math.abs(w / 2 - x),
        offsetY = Math.abs(h / 2 - y),
        deltaX = w / 2 + offsetX,
        deltaY = h / 2 + offsetY,
        scale_ratio = Math.sqrt(Math.pow(deltaX, 1.2) + Math.pow(deltaY, 1.2));
    // console.log('x is:' + x);
    // console.log('y is:' + y);
    // console.log('offsetX is:' + offsetX);
    // console.log('offsetY is:' + offsetY);
    // console.log('deltaX is:' + deltaX);
    // console.log('deltaY is:' + deltaY);
    // console.log('width is:' + w);
    // console.log('height is:' + h);
    // console.log('scale ratio is:' + scale_ratio);

    tl.fromTo(target, timing, {
        x: x,
        y: y,
        transformOrigin: '50% 50%',
        scale: 0,
        opacity: 1,
        ease: Linear.easeIn
    }, {
        scale: scale_ratio,
        opacity: 0
    });
    return tl;
}
exports.default = rippleAnimation;
// ripplyScott.init('navBtn', 0.75);