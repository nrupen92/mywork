var side;
var squre = function(side) {
	this.side = side;
}
squre.prototype.sqr = function(side) {
	return (side * side);
}

squre.prototype.enLarge = function(ds) {
	this.side += ds;
}
squre.prototype.area = function() {
	return (this.side*this.side);
}
squre.prototype.perimeter = function() {
	return (4 * this.side);
}
squre.prototype.getSide = function() {
	return this.side;
}
squre.prototype.setSide = function(side) {
	this.side = side;
}
squre.prototype.isLarge = function() {
	if (this.side < 10) {
		return false;
	} else if (this.side > 10) {
		return true;
	}
}
