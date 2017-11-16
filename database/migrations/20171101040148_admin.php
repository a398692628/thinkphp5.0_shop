<?php

use think\migration\Migrator;
use think\migration\db\Column;

class Admin extends Migrator
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
        $table = $this->table('admin',array('engine'=>'MyISAM'));
        $table->addColumn('username', 'string',array('limit' => 15,'default'=>'admin','comment'=>'用户名，登陆使用'))
              ->addColumn('password', 'string',array('limit' => 32,'default'=>md5('admin888'),'comment'=>'用户密码'))
              ->addIndex(array('username'), array('unique' => true))
              ->create();
    }
}
