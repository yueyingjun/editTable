<?php
include "db.php";
//1. 属性  2. 值  3.id
$id=$_GET["id"];
$attr=$_GET["attr"];
$val=$_GET["val"];
$sql="update stu set $attr='{$val}' where id={$id}";
$db->query($sql);
if($db->affected_rows>0){
    echo "ok";
}