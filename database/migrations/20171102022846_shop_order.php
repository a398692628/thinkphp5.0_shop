<?php

use think\migration\Migrator;
use think\migration\db\Column;

class ShopOrder extends Migrator
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
        $table = $this->table('shop_order',array('engine'=>'MyISAM'));
        $table->setId('oid')->setPrimaryKey('oid')
            ->addColumn('uid', 'integer',array('limit' => 999999,'default'=>0,'comment'=>'用户编号'))
            ->addColumn('num', 'integer',array('limit' => 999999,'default'=>0,'comment'=>'商品数量'))
            ->addColumn('total_price', 'integer',array('limit' => 999999,'default'=>0,'comment'=>'商品单价'))
            ->addColumn('number', 'integer',array('limit' => 999999,'default'=>0,'comment'=>'商品编号'))
            ->addTimestamps()
            ->create();
    }
}
