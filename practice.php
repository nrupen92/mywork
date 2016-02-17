<?php


function test($arr){
	
	$max_end = $max_so_far =0;

	foreach ($arr as $i){
		$max_end = max($i,$i+$max_end);
		$max_so_far = max ($max_so_far,$max_end);
	}
	return $max_so_far;
	
}
$a = array(-2,1,-3,4,-1,2,1,-5,4);
echo "Given array :";
echo "<pre>";print_r($a);echo "</pre>";

print "Anser : ".test($a);


