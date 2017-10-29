<?php
session_start();//开启会话
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置

$_POST["user_pwd"] = md5($_POST["user_pwd"]);
$reIP=$_SERVER["REMOTE_ADDR"];




$values = array_values($_POST);

$sql = "select * from fanwe_user where user_name=? and user_pwd=?";//

$resArr = $pdom->getAll($sql, $values);

if ($resArr) {
    $_SESSION['uname'] = $_POST["user_name"];
    $_SESSION['uid'] = $resArr[0]["id"];
    $token = time() . "_" . rand(1000, 9999);
    $_SESSION['token'] = $token;//用于前端与后台认证的会话令牌
    echo json_encode(array("msg" => "登录成功", 'money' => $resArr[0]["money"], "uid" => $resArr[0]["id"], "token" => $token,"ip"=>$reIP));
} else {
    echo json_encode(array("msg" => "登录失败", "uid" => 0));
}



