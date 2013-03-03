var isIE = document.all?true:false;

var mathLogic;
var gridSet;
var gridViewer;
var isPressMouse = false;

function main()
{
	mathLogic = new MathLogic();
	gridSet = new GridSet(2);
	gridViewer = new GridViewer(gridSet);
	window.onresize = resizeHandler;
	gridViewer.updateGridSet(gridSet);
	
	$('canvas').mousedown(function() {
		isPressMouse = true;
	}).mouseup(function(){
		isPressMouse = false;
    }).mousemove(function(event) {
		
		if (gridViewer.isInVisibleBoundOfMainGrid(event.pageX, event.pageY)) {
			$('canvas').css( 'cursor', 'crosshair' );
		} else {
			$('canvas').css( 'cursor', 'default' );
		}
		
		if (isPressMouse) {
		}
	});
}

function resizeHandler(e) {
	gridViewer.setViewPort(gridSet);
	gridViewer.updateGridSet(gridSet);
}