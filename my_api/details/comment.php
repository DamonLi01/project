<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$keys = array_keys($_POST);
$values = array_values($_POST);
$keyStr = join(",", $keys);
$sql = "insert into fanwe_comment($keyStr) values(?,?,?)";//
//echo $sql;
$res = $pdom->myexec($sql, $values);
if ($res) {
//    echo $_GET["callback"]."(".json_encode($res).")";//为json字符串加入callback协议
    echo json_encode(array("msg" => "评价成功"));
} else {
    echo json_encode(array("msg" => "评价失败"));
//    echo $_GET["callback"]."(".json_encode(array("msg"=>"对不起没有符合条件的记录！")).")";
}


