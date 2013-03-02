var isIE = document.all?true:false;

var mathLogic;
var gridSet;
var gridViewer;

function main()
{
	mathLogic = new MathLogic();
	gridSet = new GridSet(3);
	gridViewer = new GridViewer();
	
	gridViewer.update(gridSet);
}