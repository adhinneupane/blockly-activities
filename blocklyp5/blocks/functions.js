export function setup(){
    var program = 'const s = ( sketch ) => { sketch.setup = () => { sketch.createCanvas(500, 500); }; sketch.draw = () => { sketch.background(153) ' + code + ' }}; let myp5 = new p5(s, document.getElementById("canvasArea"));'
    return program
}

