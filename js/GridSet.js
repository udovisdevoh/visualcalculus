function GridSet(depth) {
	this.depth = depth;
	this.gridList = new Array();
	
	this.gridList.push(new Grid(0));//f(x)

	for (var i = 1; i <= depth; i++) {
		this.gridList.push(new Grid(i)); //f'(x)
		this.gridList.push(new Grid(-i)); //ʃ(x)
	}
}