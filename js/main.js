var isIE = document.all?true:false;

var mathLogic;
var gridSet;
var gridViewer;

function main()
{
	mathLogic = new MathLogic();
	gridSet = new GridSet(2);
	gridViewer = new GridViewer(gridSet);
	
	window.onresize = resizeHandler;
	
	gridViewer.updateGridSet(gridSet);
}

function resizeHandler(e) {
	gridViewer.setViewPort(gridSet);
	gridViewer.updateGridSet(gridSet);
}