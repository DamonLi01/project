<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置

$values = array_values($_POST);

$sql = "select SUM(money) money,userName,MAX(addTime) addtime from fanwe_supports where dealid=?   GROUP BY userID ORDER BY money DESC  limit 15";//
//echo $sql;
$res = $pdom->getAll($sql, $values);
if ($res) {
//    echo $_GET["callback"]."(".json_encode($res).")";//为json字符串加入callback协议
    echo json_encode($res);
} else {
    echo json_encode(array("msg" => "没有数据"));
//    echo $_GET["callback"]."(".json_encode(array("msg"=>"对不起没有符合条件的记录！")).")";
}


