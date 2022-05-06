<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('User/Index', [
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Create', []);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|confirmed',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'validator' => $validator->errors(),
                'status' => 400
            ]);
        }

        $stored = User::create($request->all());
        return response()->json([
            'status' => 200,
        ]);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $deleted = $user->delete();
        return response()->json([
            'status' => $deleted ? 200 : 300,
        ]);
    }

    public function getAll($page)
    {
        $users = User::orderby('id', 'desc');
        return $users->paginate(5, ['*'], 'page', $page);
    }
}
