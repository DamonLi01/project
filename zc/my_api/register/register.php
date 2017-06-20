<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
//users
$_POST["user_pwd"] = md5($_POST["user_pwd"]);
//$callback=array_shift($_GET);
$keys = array_keys($_POST);
$values = array_values($_POST);
$keyStr = join(",", $keys);
$sql = "insert into fanwe_user($keyStr) values(?,?)";//
//echo $sql;
$res = $pdom->myexec($sql, $values);
//var_dump($values[0],md5($values[1]));
if ($res) {
//        echo $callback."(".json_encode(array("msg"=>"注册成功")).")";//为json字符串加入callback协议
    echo json_encode(array("msg" => "注册成功"));
} else {
    echo json_encode(array("msg" => "注册失败"));
//        echo $callback."(".json_encode(array("msg"=>"注册失败")).")";
}


