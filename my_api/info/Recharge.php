<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$money = $_POST["money"];
$id = $_POST['id'];
$sql = "UPDATE  fanwe_user set money=? where id=?";//
$resArr = $pdom->myexec($sql, array($money, $id));
if ($resArr) {
    echo json_encode(array("msg" => "充值成功", "Re" => "1"));
} else {
    echo json_encode(array("msg" => "充值失败", "Re" => "0"));
}


