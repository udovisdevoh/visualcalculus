function GridViewer(gridSet) {
	//constants
	this.pixelSize = 1.0;
	
	//fields
	this.width;
	this.height;
	this.gridHeight;
	this.gridWidth;
	this.padding;
	
	//dom elements
	this.body;
	this.canvas;
	this.context;
	this.buildDomElementsAndStyles();
	this.setViewPort(gridSet);
}

GridViewer.prototype.buildDomElementsAndStyles = function GridViewer_buildDomElementsAndStyles() {
	//body
	this.body = document.getElementsByTagName('body')[0];
	this.body.style.padding = '0px';
	this.body.style.margin = '0px';
	this.body.style.height = '100%';
	this.body.style.backgroundColor = '#FFF';
	this.body.style.overflow = 'hidden';
	//canvas
	this.canvas = document.createElement('canvas');
	this.canvas.style.width = '100%';
	this.canvas.style.height = '100%';
	this.body.appendChild(this.canvas);
	//context
	 this.context = this.canvas.getContext('2d');
}

GridViewer.prototype.setViewPort = function GridViewer_setViewPort(gridSet) {
	if (document.body && document.body.offsetWidth)
	{
		this.width = document.body.offsetWidth;
		this.height = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth)
	{
		this.width = document.documentElement.offsetWidth;
		this.height = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight)
	{
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}
	
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	
	this.gridHeight = Math.round(this.height / (gridSet.depth + 1));
	this.gridWidth = Math.round(this.width / 2);
	this.padding = Math.round(this.height / 60);
}

GridViewer.prototype.updateGridSet = function GridViewer_updateGridSet(gridSet) {
	for (var i = 0; i < gridSet.gridList.length; i++) {
		var grid = gridSet.gridList[i];
		this.updateGrid(grid, gridSet.gridList.length, gridSet.depth);
	}
}

GridViewer.prototype.updateGrid = function GridViewer_updateGrid(grid, gridCount, derivativeDepth) {
	var currentGridOffset = (grid.derivativeDepth + derivativeDepth-1) * this.gridHeight;
	var currentGridOffsetCenter = currentGridOffset + this.gridHeight / 2;
	
	this.context.lineWidth = 1;
	if (grid.derivativeDepth == 0)
		this.context.strokeStyle = '#000000';
	else
		this.context.strokeStyle = '#888888';

	//X axis
	this.context.beginPath();
	this.context.moveTo(this.padding, currentGridOffsetCenter);
	this.context.lineTo(this.gridWidth - this.padding, currentGridOffsetCenter);
	/*this.context.closePath();*/
	this.context.stroke();
	
	//Y axis
	this.context.beginPath();
	this.context.moveTo(this.padding, currentGridOffset + this.padding);
	this.context.lineTo(this.padding, currentGridOffset + this.gridHeight - this.padding);
	/*this.context.closePath();*/
	this.context.stroke();
}