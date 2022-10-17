import {createTable,column,add_row,add_rows,copy_row,div_row,mul_row,showTable} from './functions.js'


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

const selectDiv = document.getElementById('selectDiv');

const workspace = Blockly.inject('selectDiv', {toolbox: proportions_box,  zoom:
	{controls: true,
		wheel: false,
		startScale: 1.0,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2,
		pinch: true,
       },
trashcan: true,
grid: {
    spacing: 20,
    length: 1,
    colour: '#888',
    snap: true
}});

Blockly.serialization.workspaces.load(startBlocks,workspace);
const saveBlocksbutton = document.getElementById('randomid')
saveBlocksbutton.addEventListener('click', (event) => {
	const selectedBlocks = [];
	var template1 = {};
	var contents = [];
	template1.contents = contents; 
    const streamBlocks = workspace.getAllBlocks(true);
    streamBlocks.forEach(Element => selectedBlocks.push(Element.type));
    selectedBlocks.forEach(Element => {
        let singleblock = {
            kind : "block",
            type : '' + Element
        }; 
        template1.contents.push(singleblock);
        })
		const body =  template1;
		const dataToSend = JSON.stringify(template1);
		console.log("should contain name", 	(JSON.parse(dataToSend)).name = "randomname")
		console.log(dataToSend) // <--- JSON array of selected blocks. 
		fetch('http://localhost:8000/save',{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			method: 'POST', 
			body: dataToSend
		}).then(response => {
			// handle the response
			console.log('here')
			console.log(response);
		})
		.catch(error => {
			// handle the error
			console.log(error);
		});     
});

const template_box = {
    "kind": "flyoutToolbox",
    "name": "Template1",
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




