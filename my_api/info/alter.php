<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$values = array_values($_POST);
$sql = "UPDATE  fanwe_user set city=?,province=?,sex=?,mobile=?,identify_number=?,
 identify_name=?,email=?,user_name=?  where id=?";//
$resArr = $pdom->myexec($sql, $values);
if ($resArr) {
    echo json_encode(array("msg" => "已更新信息", "code" => "1"));
} else {
    echo json_encode(array("msg" => "信息没修改", "code" => "0"));
}


