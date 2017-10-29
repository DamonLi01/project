<?php
require_once "../Models/PDOModel.class.php";
$pdom = new PDOModel();

$sql = "select * from fanwe_goods_cate WHERE is_effect=?";
$res = $pdom->getAll($sql, array(1));

if ($res) {
    echo $_GET["callback"] . "(" . json_encode($res) . ")";//为json字符串加入callback协议
} else {
    echo $_GET["callback"] . "(" . json_encode(array("msg" => "对不起没有符合条件的记录！")) . ")";
}


