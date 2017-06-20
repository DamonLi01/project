<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();
header('Access-Control-Allow-Origin: *'); //服务器端跨域设置
header('Access-Control-Allow-Headers: X-Requested-With');//服务器端跨域设置
$id = $_POST['id'];
$img = $_POST['img'];
$releaseId = $_POST['releaseId'];
$Return_time = $_POST['Return_time'];
$Return_content = $_POST['Return_content'];
$Support_amount = $_POST['Support_amount'];
$type = $_POST['type'];
$day = $_POST['day'];
$fundraising = $_POST['fundraising'];
$title_a = $_POST['title_a'];
$begin_time = time();
$end_tiem = 24 * 60 * 60;
$is_effect = 1;

$sql = "insert into fanwe_deal(name,image,deal_days,begin_time,end_time,is_effect,limit_price,type,user_id)
 values(?,?,?,?,?,?,?,?,?)";
$res = $pdom->myexec($sql, array($title_a, $img, $day, $begin_time, $day * $end_tiem + $begin_time, $is_effect, $fundraising, $releaseId, $id));

if ($res) {
    $sql_id = "select id from fanwe_deal where image=?";
    $res_id = $pdom->getAll($sql_id, array($img));

    if ($res_id) {
        $sql_item = "insert into fanwe_deal_item(deal_id,price,description,repaid_day,type) values(?,?,?,?,?)";
        $res_item = $pdom->myexec($sql_item, array($res_id[0]["id"], $Support_amount, $Return_content, $Return_time, $type));
        if ($res_item) {
            echo json_encode(array("msg" => "发布成功", "code" => "1"));
        } else {
            echo json_encode(array("msg" => "发布失败", "code" => "0"));
        }
    }
}

