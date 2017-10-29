<?php
$tmpname=$_FILES["myfile"]["tmp_name"];
$dir="./public/attachment/";
$ls=$dir.date('Ym')."/".date('d')."/".date('H')."/";
$filedir=$ls.time().".jpg";


if (is_dir($ls)) {
    $res=move_uploaded_file($tmpname,$filedir);//接收文件
} else {
    if(!is_dir($ls)){
        mkdir($dir.date('Ym')."/");
        mkdir($dir.date('Ym')."/".date('d')."/");
        mkdir($dir.date('Ym')."/".date('d')."/".date('H')."/");
    }

    $res=move_uploaded_file($tmpname,$filedir);//接收文件
}

if($res){
    echo json_encode(array("code"=>"ok","msg"=>$filedir));
}else{
    echo json_encode(array("code"=>"error","msg"=>"文件上传失败！"));
}
?>