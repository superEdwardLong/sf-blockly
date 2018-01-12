/*
 * @fileoverview: functions for code generation of self-defined blocks.
 * @author: ZhiHuaWang2@sf-express.com (Wang Zhihua)
 */

Blockly.JavaScript['scan'] = function(block) {
	var OPERATORS = {
    'Bar': ['Bar'],
    'QR': ['QR'],
  };
  	var dropdown_codetype = OPERATORS[block.getFieldValue('codeType')];
  	// TODO: Assemble JavaScript into code variable.
  	code = dropdown_codetype;
  	
  	// TODO: Change ORDER_NONE to the correct strength.
  	return [code, Blockly.JavaScript.ORDER_NONE];
};