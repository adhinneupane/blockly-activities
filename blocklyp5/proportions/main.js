import {createTable,column,add_row,add_rows,copy_row,div_row,mul_row,showTable} from './functions.js'



// function getScreen(){
// 	let canvasHeight = window.outerHeight/2; 
// 	var canvasWidth = window.outerWidth/3;
// 	let canvasArea = document.getElementById('canvasArea');
// 	canvasArea.style.height = canvasHeight + 2; // border 
// 	canvasArea.style.width = canvasWidth + 2; // border 
// }
// canvasArea Element


const proportions_box = {
    "kind": "flyoutToolbox",
    "name": "Proportions",
    "contents": [
	    {
	        "kind": "block",
	        "type":"create_table"
	    },
	    {
	        "kind": "block",
	        "type" :"input_header"
	    },
	    {
	        "kind": "block",
	        "type" :"add_row"
	    },
	    {
	        "kind": "block",
	        "type" :"copy_row"
	    },
	    {
	        "kind": "block",
	        "type" :"add_rows"
	    },
	    {
	        "kind": "block",
	        "type" : "mul_row"
	    },
	    {
	        "kind": "block",
	        "type" : "div_row"
	    },
	    {
	        "kind": "block",
	        "type" :"show_table"
	    },
	    {
            "kind": "block",
            "type": "controls_repeat"
        },

        ]
    };

    const topbox = {
        "kind": "categoryToolbox",
        "contents": [
            proportions_box
        ]
    }


	const startBlocks = {
		"blocks": {
			"languageVersion": 0,
			"blocks": [
				{
					"type": "create_table",
					"id": "C5OYl*aI}i8])%!z!~O%",
					"x": 115,
					"y": 171,
					"next": {
						"block": {
							"type": "input_header",
							"id": "$qrtuV6v.:NuvADnR-O8",
							"fields": {
								"column": "caterpillar",
								"value": "2"
							},
							"next": {
								"block": {
									"type": "input_header",
									"id": "mcd@]W/g/2wVOd%%t@g,",
									"fields": {
										"column": "leaves",
										"value": "5"
									},
									"next": {
										"block": {
											"type": "mul_row",
											"id": "Xo9.VqDRnUl.f}Qjmq6B",
											"fields": {
												"multiplier": "2"
											},
											"next": {
												"block": {
													"type": "copy_row",
													"id": "](97Z{Hg[@sT8*TWp-/n",
													"fields": {
														"row_to_be_copied": "1"
													},
													"next": {
														"block": {
															"type": "copy_row",
															"id": "G-n?F@l0ygWfWU*)H9}O",
															"fields": {
																"row_to_be_copied": "1"
															},
															"next": {
																"block": {
																	"type": "show_table",
																	"id": "XYFK5V73j^{N$#$:v!KK"
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			]
		}
	}
	const blocklyArea = document.getElementById('blocklyArea');
    const blocklyDiv = document.getElementById('blocklyDiv');
    const workspace = Blockly.inject('blocklyDiv', {toolbox: proportions_box});
	Blockly.serialization.workspaces.load(startBlocks,workspace);

    function reloadScreen(){
        // if a canvas exists, then remove it
        let node = document.getElementById('defaultCanvas0');
        if (node != null){
	        node.remove()
        }
    }

    document.getElementById('p5Run').onclick = function() {
        runCode();
    };

    function runCode(){
        reloadScreen()
        let code = Blockly.JavaScript.workspaceToCode(workspace);
		
		// get dimensions of p5 canvas div
		// getScreen()
        try {
	        // non changing code | main part 
			let canvasLength = 450; 
	        const s = ( sketch) => 
	              {
		              sketch.setup = () => 
		                  { 
			                  let canvas = sketch.createCanvas(800,800); 
			                  sketch.noLoop();
			                  canvas.parent('canvasArea')
		                  };
		              sketch.draw = () => 
		                  {
			                  // Adding user generated code to p5 program
			                  sketch.background(255);
			                  try{
			                      // execute Blockly generated p5 code
			                      eval(code);
			                  }
			                  catch(e){
			                      alert(e);
			                  }
		                  }

	              }; 
	        // create canvas on screen
	        const drawp5 = new p5(s, document.getElementById("canvasArea"));
        } catch (e) {
	        console.log(e);
        }
    }



