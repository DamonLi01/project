<?php
require_once "../Models/PDOModel.class.php";
$pdom=new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$type=$_POST['type'];
$sql="select * from fanwe_deal WHERE type=? ";
$res=$pdom->getAll($sql,array($type));

if($res){
    echo json_encode($res);
}else{
    echojson_encode(array("msg"=>"对不起没有符合条件的记录！"));
}


