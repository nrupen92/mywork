<?php


function test($arr){
	
	$max_end = $max_so_far =0;
	print "i  max_end  max_so_far <br>";
	foreach ($arr as $i){
		$max_end = max($i,$i+$max_end);
		$max_so_far = max ($max_so_far,$max_end);
		print "$i  $max_end  $max_so_far <br>";
	}
	return $max_so_far;
	
}
$a = array(-2,1,-3,4,-1,2,1,-5,4);
print test($a);


