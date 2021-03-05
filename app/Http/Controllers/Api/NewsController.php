<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsLikes;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->user = auth('apiUser')->user();
    }
    public function postAction(Request $request)
    {
        $news_action = NewsLikes::where(['news_title' => $request->news, 'user_id' => $this->user->id])->first();
        if (!$news_action) {
            $news_action = NewsLikes::create([
                'user_id' => $this->user->id,
                'type' => $request->like === true ? 'like' : 'dislike',
                'news_title' => $request->news
            ]);
        } else {
            $news_action->update([
                'type' => $request->like === true ? 'like' : 'dislike',
            ]);

            $news_action->refresh();
        }

        return response()->json(['success' => true, 'current_action' => $news_action]);
    }

    public function getNewsLikes()
    {
        $likes = NewsLikes::all();
        return response()->json(['data' => $likes]);
    }
}
