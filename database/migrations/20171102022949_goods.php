<?php

use think\migration\Migrator;
use think\migration\db\Column;

class Goods extends Migrator
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
        $table = $this->table('goods',array('engine'=>'MyISAM'));
        $table->setId('gid')->setPrimaryKey('gid')
            ->addColumn('gname', 'string',array('limit' => 200,'default'=>'','comment'=>'商品名'))
            ->addColumn('list_img', 'string',array('limit' => 200,'default'=>'','comment'=>'列表图片'))
            ->addColumn('big_img', 'string',array('limit' => 200,'default'=>'','comment'=>'大图片'))
            ->addColumn('mid_img', 'string',array('limit' => 200,'default'=>'','comment'=>'中图片'))
            ->addColumn('small_img', 'string',array('limit' => 200,'default'=>'','comment'=>'小图片'))
            ->addColumn('details', 'string',array('limit' => 300,'default'=>'','comment'=>'图片描述'))
            ->addColumn('attr', 'string',array('limit' => 300,'default'=>'','comment'=>'图片属性'))
            ->addColumn('price', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'商品价格'))
            ->addColumn('total', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'商品库存'))
            ->addColumn('cate_id', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'分类id'))
            ->addTimestamps()
            ->create();
    }
}
