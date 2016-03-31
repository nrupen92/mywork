var crcl;
var sqr;
var Coin = function(crcl, sqr) {
	this.crcl = crcl;
	this.sqr = sqr;
}
Coin.prototype.getCircleArea = function() {
	return crcl.area;

}
Coin.prototype.getSquareArea = function() {
	return sqr.area();
}

Coin.prototype.area = function() {
	return (crcl.area() - sqr.area());
};

Coin.prototype.getCrcl = function()
{
	return this.crcl;
};

Coin.prototype.setCrcl= function (c)
{
	this.crcl = c;
};
Coin.prototype.getsqr= function ()
{
	return this.sqr;
};

Coin.prototype.setsqr= function (s)
{
	this.sqr = s;
}
;
Coin.prototype.isNormal = function() {
	return (this.area() > 0);
};
