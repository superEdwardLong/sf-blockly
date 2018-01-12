/*
 * @fileoverview functions for the self-definition of blocks.
 * @author ZhiHuaWang2@sf-express.com (Wang Zhihua)
 */
 
 
'use strict';
//goog.provide('Blockly.JavaScript.bar');
//goog.require('Blockly.JavaScript');

Blockly.Blocks['scan'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField(new Blockly.FieldDropdown([["Bar","b"], ["QR","q"]]), "code");
		this.setOutput(true, "String");
		this.setColour(165);
	this.setTooltip("");
	this.setHelpUrl("");
	}
};
