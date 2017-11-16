<?php

use think\migration\Migrator;
use think\migration\db\Column;

class Address extends Migrator
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
        $table = $this->table('address',array('engine'=>'MyISAM'));
        $table->setId('id')->setPrimaryKey('id')
            ->addColumn('name', 'string',array('limit' => 200,'default'=>'','comment'=>'姓名'))
            ->addColumn('email', 'string',array('limit' => 200,'default'=>'','comment'=>'邮箱'))
            ->addColumn('adress', 'string',array('limit' => 300,'default'=>'','comment'=>'收货地址'))
            ->addColumn('tel', 'integer',array('limit' => 20,'default'=>0,'comment'=>'电话'))
            ->addColumn('uid', 'integer',array('limit' => 99999,'default'=>0,'comment'=>'关联'))
            ->addTimestamps()
            ->create();
    }
}
