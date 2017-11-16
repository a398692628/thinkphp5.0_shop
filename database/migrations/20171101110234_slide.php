<?php

use think\migration\Migrator;
use think\migration\db\Column;

class Slide extends Migrator
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
        $table = $this->table('slide',array('engine'=>'MyISAM'));
        $table->setId('sid')->setPrimaryKey('sid')
            ->addColumn('title', 'string',array('limit' => 200,'default'=>'','comment'=>'图片标题'))
            ->addColumn('path', 'string',array('limit' => 200,'default'=>'','comment'=>'图片地址'))
            ->addColumn('url', 'string',array('limit' => 200,'default'=>'','comment'=>'图片连接'))
            ->addColumn('sort', 'integer',array('limit' => 11,'default'=>0,'comment'=>'图片排序'))
            ->addTimestamps()
            ->create();
    }
}
