<?php
include "db.php";
$id=$_GET["id"];
$sql="delete from stu where id={$id}";

$db->query($sql);

if($db->affected_rows>0){
    echo "ok";
}
