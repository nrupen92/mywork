crcl = new Circle(2);
sqr = new squre(2);
console.log(crcl.getRadius());
console.log(sqr.getSide());
aCoin = new AncientCoin(crcl, sqr, 2000);

document.getElementById("coinObjArea").innerHTML = "The area of coin is "
		+ aCoin.area();
if (aCoin.isNormal()) {
	document.getElementById("isNormal").innerHTML = "The given coin is normal coin";
} else {
	document.getElementById("isNormal").innerHTML = "The given coin is not normal coin";
}

if(aCoin.isOld()){
	document.getElementById("isOld").innerHTML = "The given coin is old coin";
	
}else {
	document.getElementById("isOld").innerHTML = "The given coin is not old coin";
}


console.log(aCoin.area());
console.log(aCoin.isNormal());
console.log(aCoin.isOld());
