<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsLikes extends Model
{
    use HasFactory;

    protected $fillable = ['news_title', 'user_id', 'type'];
}
