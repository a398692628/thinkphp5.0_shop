<?php

use think\migration\Migrator;
use think\migration\db\Column;

class OrderList extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('order_list',array('engine'=>'MyISAM'));
        $table->setId('id')->setPrimaryKey('id')
            ->addColumn('goods_name', 'string',array('limit' => 200,'default'=>'','comment'=>'商品名称'))
            ->addColumn('price', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'价格'))
            ->addColumn('num', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'数量'))
            ->addColumn('oid', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'关联订单表'))
            ->addTimestamps()
            ->create();
    }
}
