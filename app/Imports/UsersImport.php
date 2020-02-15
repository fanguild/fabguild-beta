<?php

namespace App\Imports;

use App\Chara_title;
use Maatwebsite\Excel\Concerns\ToModel;

class UsersImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Chara_title([
            //
            'name'     => $row[0],
            'categoryid'    => $row[1],
            'deleteflg'     =>  0
        ]);
    }
}
