<?php
include "db.php";

$sql="insert into stu (name,age,sex) VALUES ('','','')";
$db->query($sql);

if($db->affected_rows>0){
    echo $db->insert_id;
}