var age;

function trace(s) {
	alert(s);
}
var AncientCoin = function(crcl, sqre, age1) {
	this.age = age1;
	Coin.call(crcl, sqre);
}
AncientCoin.prototype = Object.create(Coin.prototype);
AncientCoin.prototype.constructor = AncientCoin;

AncientCoin.prototype.melt = function() {
	this.age = 0;
}
AncientCoin.prototype.getAge = function() {
	return this.age;
}
AncientCoin.prototype.setAge = function(age) {
	this.age = age;
}
AncientCoin.prototype.isOld = function() {
	if (this.age < 1000) {
		return false;
	} else if (this.age > 1000) {
		return true;
	}
}
