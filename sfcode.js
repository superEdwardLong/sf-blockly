var blocklyArea = document.getElementById('blocklyArea');
	var blocklyDiv = document.getElementById('blocklyDiv');
	var workspacePlayground = Blockly.inject(blocklyDiv,
		{media: 'media/', 
		toolbox: document.getElementById('toolbox')});
	/*function showCode() {
		// Generate JavaScript code and display it.
		var code = Blockly.JavaScript.workspaceToCode(blocklyArea);
		alert(code);
	}
	Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
						   blocklyArea);
	*/
	var onresize = function(e) {
		// Compute the absolute coordinates and dimensions of blocklyArea.
		var element = blocklyArea;
		var x = 0;
		var y = 0;
		do {
			x += element.offsetLeft;
			y += element.offsetTop;
			element = element.offsetParent;
		} while (element);
		// Position blocklyDiv over blocklyArea.
		blocklyDiv.style.left = x + 'px';
		blocklyDiv.style.top = y + 'px';
		blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
		blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
	};
	window.addEventListener('resize', onresize, false);
	onresize();
	Blockly.svgResize(workspacePlayground);