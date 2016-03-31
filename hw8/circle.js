var radius = 0;
var Circle = function (r) {
	this.radius = r;
}
Circle.prototype.pie=function () {
	return (3.1416);
}

Circle.prototype.enLarge =function (dr) {
	this.radius += dr;
}
Circle.prototype.area = function() {
	
	return (this.pie() * this.radius * this.radius);
}
Circle.prototype.circumference =function() {
	return (2 * this.pie() * this.radius);
}
Circle.prototype.getRadius = function () {
	//console.log(this.radius);
	return (this.radius);
}
Circle.prototype.setRadius= function (radius) {
	this.radius = radius;
}
Circle.prototype.isLarge =function () {
	if (this.radius < 10) {
		return false;
	} else if (this.radius >= 10) {
		return true;
	}
}
