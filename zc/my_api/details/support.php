<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$id = $_POST['id'];
$uid = $_POST['uid'];
$b_id = $_POST['b_id'];
$b_support_count = $_POST['b_support_count'];
$b_price = $_POST['b_price'];
$b_support_amount = $_POST['b_support_amount'];
$support_count = $_POST['support_count'];
$money = $_POST['money'];
$support_amount = $_POST['support_amount'];
$difference = $money - $b_price;
$sql = "UPDATE fanwe_user set money=? where id=?";
$res = $pdom->myexec($sql, array($difference, $uid));
if ($res) {
    $sql = "UPDATE fanwe_deal set support_count=?,support_amount=? where id=?";
    $res_deal = $pdom->myexec($sql, array(++$support_count, $support_amount + $b_price, $id));
    if ($res_deal) {
        $sql = "UPDATE fanwe_deal_item set support_count=?,support_amount=? where id=?";
        $res_deal_item = $pdom->myexec($sql, array(++$b_support_count, $b_support_amount + $b_price, $b_id));
        if ($res_deal_item) {
            echo json_encode(array("msg" => "支付成功", "pay" => "1"));
        } else {
            echo json_encode(array("msg" => "支付失败", "pay" => "0"));
        }
    }
}




// if($res){
// //    echo $_GET["callback"]."(".json_encode($res).")";//为json字符串加入callback协议
//     echo json_encode($res);
// }else{
//     echo json_encode(array("msg"=>"对不起没有符合条件的记录！"));
// //    echo $_GET["callback"]."(".json_encode(array("msg"=>"对不起没有符合条件的记录！")).")";
// }


