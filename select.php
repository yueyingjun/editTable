<?php
include "db.php";
$sql="select * from stu";
$result=$db->query($sql);
$array=array();
while ($row=$result->fetch_assoc()){
        $array[]=$row;
}
echo json_encode($array);



