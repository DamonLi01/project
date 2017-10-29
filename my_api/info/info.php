<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$id = $_POST["id"];
$sql = "select * from fanwe_user where id=?";//
$resArr = $pdom->getAll($sql, array($id));
if ($resArr) {
    echo json_encode($resArr);
} else {
    echo json_encode(array("msg" => "对不起没有符合条件的记录！"));
}


