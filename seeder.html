<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Application;
use App\Models\Result;
use App\Models\Submission;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $c = 1;
        $levels = [
            [
                "name" => "Professional Law Course 1",
                "abbr" => "PLC 1",
            ], [
                "name" => "Professional Law Course 2",
                "abbr" => "PLC 2",
            ], [
                "name" => "Post Call",
                "abbr" => "Post-Call"
            ],
            [
                "name" => "Entrance",
                "abbr" => "Entrance"
            ],
        ];

        $roles = [
            'marker' => ['see marker', 'set marker', 'upload results', 'set score'],
            'moderator' => ['see marker', 'see moderator', 'set moderator', 'upload results', 'set score'],
            'iec' => ['see marker', 'see moderator', 'see iec', 'set iec', 'upload results', 'set score'],
            'admin' => ['see marker', 'see moderator', 'see iec', 'assign examiner'],
            'accountant' => ['see accounts'],
            'gsl' => [],
            'glc' => [],
            'finance' => [],
            'Super Admin' => []
        ];

        foreach ($roles as $name => $permissions) {
            $role = Role::create(compact('name'));
            foreach ($permissions as $name) {
                $permission = Permission::firstOrCreate(compact('name'));
                $permission->assignRole($role);
            }
        }

        foreach (["Accra", "Kumasi"] as $venue) {
            \App\Models\Venue::create(['name' => $venue]);
        }

        foreach (["entrance", "exam", "referral", "remarking", "retallying"] as $transaction) {
            \App\Models\Transaction::create(['name' => $transaction]);
        }

        foreach ($levels as $level) {
            \App\Models\Level::create([
                'name' => $level["name"],
                'abbr' => $level["abbr"],
            ]);
        }

        foreach (['Part 1', 'Part 2', 'Post-Call', 'Entrance'] as $level) {
            foreach (plcCourses($level) as $course) {
                \App\Models\Course::create([
                    'name' => $course,
                    'level_id' => $c
                ]);
            }
            $c++;
        }

        foreach (\App\Models\Transaction::all() as $transaction) {
            if ($transaction->name == "exam") continue;

            foreach (\App\Models\Level::all() as $level) {
                if ($transaction->name == "application" && !$level->name != "entrance") continue;
                if ($transaction->name == "referral" && $level->name != "entrance") continue;
                \App\Models\Fee::create([
                    'name' => "$transaction->name Fee for $level->abbr",
                    'transaction_id' => $transaction->id,
                    'level_id' => $level->id,
                    'amount' => mt_rand(200, 2000)
                ]);
            }
        }

        foreach (range(2, 4) as $i) {
            if ($i == 2) {
                \App\Models\Application::create([
                    'name' => "202$i PLC 1 Examination",
                    'year' => "202$i",
                    'transaction_id' => 2,
                    'level_id' => 1,
                    'start_date' => "202$i-09-15",
                    'end_date' => "202$i-10-15",
                    'amount' => mt_rand(400, 1000)
                ]);

                \App\Models\Application::create([
                    'name' => "202$i PLC 2 Examination",
                    'year' => "202$i",
                    'transaction_id' => 2,
                    'level_id' => 2,
                    'start_date' => "202$i-09-15",
                    'end_date' => "202$i-10-15",
                    'amount' => mt_rand(400, 1000)
                ]);

                \App\Models\Application::create([
                    'name' => "202$i Post-Call Examination",
                    'year' => "202$i",
                    'transaction_id' => 2,
                    'level_id' => 3,
                    'start_date' => "202$i-09-15",
                    'end_date' => "202$i-10-15",
                    'amount' => mt_rand(400, 1000)
                ]);
            }
            \App\Models\Application::create([
                'name' => "202$i Entrance Application",
                'year' => "202$i",
                'transaction_id' => 1,
                'level_id' => 4,
                'start_date' => "202$i-09-15",
                'end_date' => "202$i-10-15",
                'amount' => mt_rand(400, 1000)
            ]);
        }

        Transaction::where('name', 'remarking')->first()->applications()->create([
            'name' => 'Remarking',
            'amount' => 1500
        ]);

        Transaction::where('name', 'retallying')->first()->applications()->create([
            'name' => 'Retallying',
            'amount' => 1500
        ]);

        Transaction::where('name', 'referral')->first()->applications()->create([
            'name' => 'Referral',
            'amount' => 1500
        ]);

        foreach (['admin', 'gsl', 'glc'] as $admin) {
            $maestro = \App\Models\User::create([
                'first_name' => fake()->firstName,
                'last_name' => fake()->lastName,
                "email" => "$admin@gmail.com",
                "start_level" => 3,
                "password" => bcrypt('password')
            ]);

            $maestro->assignRole($admin);
        }

        foreach (range(1, 30) as $id) {
            $role = $id <= 10 ? 'marker' : ($id <= 20 ? 'moderator' : 'iec');

            $user = \App\Models\User::create([
                'first_name' => fake()->firstName,
                'last_name' => fake()->lastName,
                "email" => $role . $id . "@gmail.com",
                "start_level" => 3,
                "password" => bcrypt('password')
            ]);

            $user->assignRole($role);
        }

        foreach (range(1, 100) as $i) {
            $student_id = "GSL" . str_pad($i, 4, "0", STR_PAD_LEFT);
            $user = \App\Models\User::create([
                'first_name' => fake()->firstName,
                'last_name' => fake()->lastName,
                'venue_id' => mt_rand(1, 2),
                "email" => strtolower($student_id) . "@gmail.com",
                "student_id" => $student_id,
                "start_level" => fake()->randomElement([1, 2, 3]),
                "password" => bcrypt('password')
            ]);

            $application = \App\Models\Application::where('year', 2022)->where('level_id', $user->start_level)->first();

            foreach ($application->courses as $course) {
                \App\Models\Result::create([
                    "student_id" => $student_id,
                    'application_id' => $application->id,
                    'course_id' => $course->id,
                    'level_id' => $course->level_id,
                    'marker_score' => mt_rand(40, 80),
                    'moderator_score' => mt_rand(40, 80),
                    // 'iec_score' => mt_rand(20, 100),
                    'isPublished' => 1,
                    'marker_id' => User::role('marker')->inRandomOrder()->first()->id,
                    'moderator_id' => User::role('moderator')->inRandomOrder()->first()->id,
                ]);
            }
        }


        \App\Models\Submission::factory(400)->create();


        foreach (Submission::where('year', 2022)->where('status', 1)->get() as $student) {

            $application = \App\Models\Application::where('year', 2022)->where('level_id', 4)->first();

            foreach ($application->courses as $course) {
                \App\Models\EntranceResult::create([
                    "student_id" => $student->student_id,
                    'application_id' => $application->id,
                    'course_id' => $course->id,
                    'level_id' => $course->level_id,
                    'marker_que_one' => mt_rand(20, 50),
                    'marker_que_two' => mt_rand(20, 50),
                    'moderator_que_one' => mt_rand(20, 50),
                    'moderator_que_two' => mt_rand(20, 50),
                    'marker_id' => User::role('marker')->inRandomOrder()->first()->id,
                    'moderator_id' => User::role('moderator')->inRandomOrder()->first()->id,
                ]);
            }
        }
    }
}
