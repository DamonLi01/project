<?php

class PDOModel
{
    //属性
    private $link; //数据库连接资源
    private $DSN = 'mysql:host=sqld.duapp.com:4050;dbname=qivJbWMKYQPScFIngRao';
    private $stmt;

    //方法
    function __construct()
    {
        try {
            $this->link = new PDO($this->DSN, "552da3b7674c4960917730c19fa2c7dc", "5045f890664f4759b3cde9479b45cb91");
        } catch (PDOException $e) {
            die("连接错误：" . $e->getMessage());
        }
        $this->link->query("set names utf8");
    }

    /**
     * 公用的处理
     * @param unknown $sqlstr
     * @param unknown $params
     */
    private function common($sqlstr, $params = null)
    {
        $this->stmt = $this->link->prepare($sqlstr);//返回的是PDOStatement 对象
        //执行sql语句的预处理，提高效率，安全防止sql注入
        //$sqlstr=>SELECT * FROM goods WHERE gprice < ? AND cid = ?
        //$params=array(10000,1);
        $this->stmt->execute($params);//执行语句
        //防sql注入原理：execute($params)会把输入的语句转义
        //return $stmt;
    }

    /**
     * 查询
     * @param unknown $sqlstr
     * @param unknown $params
     */
    function getAll($sqlstr, $params = null)
    {
        $this->common($sqlstr, $params);
        $resarr = $this->stmt->fetchAll(PDO::FETCH_ASSOC);
        return $resarr;
    }

    /**
     * 增删改操作
     * @param unknown $sqlstr
     * @param unknown $params
     */
    function myexec($sqlstr, $params = null)
    {
        $this->common($sqlstr, $params);
        if ($this->stmt->rowCount()) {
            return true;
        }
        return false;
    }

    function __destruct()
    {
        $this->stmt = NULL;
        $this->link = NULL;
    }
}

?>