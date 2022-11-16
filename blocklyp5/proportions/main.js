import {createTable,column,add_row,add_rows,copy_row,div_row,mul_row,showTable} from './functions.js'

function showCanvas(){
	document.getElementById('p5Canvas').className = 'collapse show'
}

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

let workspace = Blockly.inject('blocklyDiv', {toolbox: proportions_box,  zoom:
	{controls: true,
		wheel: false,
		startScale: 1.0,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2,
		pinch: true},
trashcan: true});
Blockly.serialization.workspaces.load(startBlocks,workspace);

function reloadScreen(){
	// if a canvas exists, then remove it
	let node = document.getElementById('defaultCanvas0');
	if (node != null){
		node.remove()
	}
}

var populate=[]

function fetchData(){
	var temp1
	fetch('http://localhost:8000/gettasks',{
				method: 'POST',
			}).then(res => {
			temp1 = res.json()
			temp1.then((data)=>populate[0] = (data))
			})
	// document.getElementById()
	console.log(typeof(populate),populate)
}

document.body.onload = fetchData()

function optionExists ( searchItem, listitems )
{
    var optionExists = false,
        optionsLength = listitems.length;
    while ( optionsLength-- )
    {
        if ( listitems.options[ optionsLength ].value === searchItem )
        {
            optionExists = true;
            break;
        }
    }
    return optionExists;
}

document.getElementById('settings').onclick = function(){
	fetchData();
	fetchBlocks();
	console.log(populate[0])
	console.log(populate[0][0])
	for (let i=0; i<= (populate[0]).length; i ++) {
		let listitem = new Option(populate[0][i],populate[0][i]);
		const templates = document.getElementById('templates')
		if (optionExists( populate[0][i], document.getElementById('templates') )===false){
			templates.add(listitem,undefined)
		}
	}
}

var blocksArray=[];

function changeBlockly(){
	console.log("code ran");
	fetchBlocks();
	console.log(blocksArray[0])
	// var temp3 = {
	// 	"kind":"flyoutToolbox",
	// 	"name": "Proportions",
	// 	"contents" : blocksArray[0]
	// }	
	// changeBlocks(temp3);
	// // changeBlocks();
}

document.getElementById('apply').addEventListener('click', function() {
	fetchBlocks
	console.log(blocksArray[0]);
	var temp3 = {
		"kind":"flyoutToolbox",
		"name": "Replaced",
		"contents" : blocksArray[0]
	}	
	changeBlocks(temp3);
})

function changeBlocks(param){
	let menu = document.getElementById('blocklyDiv');
	menu.removeChild(menu.lastElementChild);
	workspace = Blockly.inject('blocklyDiv', {toolbox: param,  zoom:
		{controls: true,
			wheel: false,
			startScale: 1.0,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2,
			pinch: true},
	trashcan: true});
	Blockly.serialization.workspaces.load(startBlocks,workspace);
}

function fetchBlocks(){
	var obj = {
		name : document.getElementById('templates').value
	}; 
	fetch('http://localhost:8000/serveblocks',{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(obj)
			}).then(res => {
			let temp2 = res.json();
			temp2.then((data)=>  blocksArray[0] = (data));
			})
}




document.getElementById('p5Run').onclick = function() {
	console.log(blocksArray[0])
	runCode();
	showCanvas();
	const hidebutton = document.createElement("button");
	hidebutton.innerHTML = 'Hide Canvas'
	hidebutton.id = 'hide'
	hidebutton.className = 'btn btn-light'
	if (document.getElementById('hide') == null ){
		document.getElementById('leftcol').appendChild(hidebutton);
		hidebutton.addEventListener('click', hideCanvas)
	}
};

function hideCanvas(){
	document.getElementById('p5Canvas').className = 'collapse'
	document.getElementById('hide').remove();
}

function runCode(){
	reloadScreen()
	const canvasLength = (document.getElementById('canvasSizes')).value
	const p5fontsize = parseInt((document.getElementById('fontSizes')).value)
	let code = Blockly.JavaScript.workspaceToCode(workspace);
	// get dimensions of p5 canvas div
	// getScreen()
	try {
		// non changing code | main part 
		const s = ( sketch) => 
				{
					sketch.setup = () => 
						{ 
							let canvas = sketch.createCanvas(canvasLength,canvasLength); 
							sketch.noLoop();
							canvas.parent('canvasArea');
							console.log(typeof(p5fontsize),"value", p5fontsize)
							sketch.textSize(p5fontsize);
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
