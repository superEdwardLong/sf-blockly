function RunApp(){
	var ac_code = $("#codes").val();
	if (ac_code.length > 0) {
		ac_code = ac_code.replace(/^\s+|\s+$/g,'');
		eval(ac_code);
	}
}

function openFile(){
	$("#appFile").trigger('click');
}
$(function(){});