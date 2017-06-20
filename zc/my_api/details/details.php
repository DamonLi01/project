<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$id = $_POST['id'];
$sql = "select a.*,b.price b_price,b.description b_description,
b.support_count b_support_count,b.repaid_day b_repaid_day,b.id b_id,b.support_amount b_support_amount
 from fanwe_deal a ,fanwe_deal_item b WHERE a.id=? and a.id=b.deal_id";
$res = $pdom->getAll($sql, array($id));
if ($res) {
//    echo $_GET["callback"]."(".json_encode($res).")";//为json字符串加入callback协议
    echo json_encode($res);
} else {
    echo json_encode(array("msg" => "对不起没有符合条件的记录！"));
//    echo $_GET["callback"]."(".json_encode(array("msg"=>"对不起没有符合条件的记录！")).")";
}


