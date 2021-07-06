<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todos['title'] = 'Todos';
        $todos['items'] = Todo::query()
            ->where([
                ['in_progress', '0'],
                ['is_completed', '0'],
            ])
            ->get();

        $in_progress_todos['title'] = 'In Progress';
        $in_progress_todos['items'] = Todo::query()
            ->where([
                ['in_progress', '1'],
                ['is_completed', '0'],
            ])
            ->get();

        $is_completed_todos['title'] = 'Completed';
        $is_completed_todos['items'] = Todo::query()
            ->where([
                ['in_progress', '1'],
                ['is_completed', '1'],
            ])
            ->get();

        return response()->json(
            [
                'message' => 'success',
                'data' => [
                    'todos' => $todos,
                    'in_progress' => $in_progress_todos,
                    'is_completed' => $is_completed_todos,
                ]
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'title' => 'required|string|max:250',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors, 404);
        }
        $todo = Todo::create([
            'title' => $request->input('title'),
            'in_progress' => 0,
            'is_completed' => 0,
        ]);
        return response()->json(['message' => 'Created!', 'todo' => $todo], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateInTodo($id)
    {
        $todo = Todo::findOrfail($id);
        $todo->in_progress = 0;
        $todo->is_completed = 0;
        $todo->save();
        return response()->json(['message' => 'Updated!', 'todo' => $todo], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateToInProgress($id)
    {
        $todo = Todo::findOrfail($id);
        $todo->in_progress = 1;
        $todo->is_completed = 0;
        $todo->save();
        return response()->json(['message' => 'Updated!', 'todo' => $todo], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateToDone($id)
    {
        $todo = Todo::findOrfail($id);
        $todo->in_progress = 1;
        $todo->is_completed = 1;
        $todo->save();
        return response()->json(['message' => 'Updated!', 'todo' => $todo], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = Todo::findOrfail($id);
        $todo->delete();
    }
}
