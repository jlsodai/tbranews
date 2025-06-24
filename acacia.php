<?php

$users = [];
$company_id = 1102;
$company_code = sprintf("%02d", $company_id % 100);

foreach(User::where('company_id', $company_id)->withTrashed()->get() as $user) {

	$serial = Serial::firstOrCreate([
		'user_id' => $user->id,
		'company_id' => $company_id
	], [
		'plan_id' => $user->plan_id,
		'plan' => $user->plan->code,
	]);

	// Serial::where('user_id', $user->id)->first()->update(['plan' => $user->plan->code]);
}

foreach(User::where('company_id', $company_id)->withTrashed()->get() as $user) {
	$serial = Serial::where('user_id', $user->id)->first();

	$user->update(['prim_num' => $serial->id, 'member_num' => '', 'pnum' => '']);

	if ($user->isApproved) {
		$num = $company_code . $user->plan->code . sprintf("%04d", $user->prim_num) . "0" . $user->plan->code . "25";
		$user->update(['member_num' => $num, 'pnum' => $num]);
	}
}

// $serial = Serial::firstOrCreate([
// 	'user_id' => $user->id,
// 	'company_id' => $company_id
// ], [
// 	'plan_id' => $user->plan_id,
// 	'plan' => $user->plan->code,
// ]);

// foreach(Dependent::where('company_id', $company_id)->get() as $d)

// foreach(User::where('company_id', $company_id)->where('isApproved', 1)->get() as $user) {
// 	foreach ($user->dependents as $dependent) {
// 		$dependent->update(['member_num' => '']);
// 		if ($dependent->isApproved) {
// 			$num = $company_code . $dependent->plan->code . sprintf("%04d", $user->prim_num) . $dependent->dep_num . $dependent->plan->code . "25";
// 			$dependent->update(['member_num' => $num, 'pnum' => $num]);
// 		}
// 	}
// }



foreach(Dependent::where('company_id', $company_id)->where('isApproved', 1)->get() as $dependent) {
	$user = $dependent->user;
	$dependent->update(['member_num' => '']);
	if ($user->isApproved) {
		$num = $company_code . $dependent->plan->code . sprintf("%04d", $user->prim_num) . $dependent->dep_num . $dependent->plan->code . "25";
		$dependent->update(['member_num' => $num, 'pnum' => $num]);
	}
}



<?php
0246685931
 
$phones = ['0540242860', '0256327437', '0501208884', '0546106187', '0247492692', '0246475146', '0209594691', '0554664340', '0207986160', '0547857293', '0249208148', '0506322253', '0205042716', '0556364981', '0245414187', '0548423410', '0246685931', '0557291292', '0509530570', '0540464588', '0570747414', '0579262077', '0249546890', '0542330284', '0509465992', '0559242407', '0242651611', '0248604667', '0243942084', '0550229208', '0547980868', '0551253090', '0552828680', '0556592310', '0509765624', '0507070601', '0547048799', '0546269493', '0241058503', '0546813471', '0541398594', '0543597071', '0241050811', '0209889818', '0500165128', '0208556649', '0548850517', '0531773900', '0504992121', '0543115166', '0505382890', '0248630333', '0545103328', '0542884221', '0246771620', '0553674915', '0549796288', '0548882477', '0241045756', '0509519015', '0245223556', '0570908188', '0509291192', '0202816761', '0558769356', '0557192432', '0270058156', '0543282648', '0504701926', '0262104296', '0246833132', '0245417667', '0548846818', '0541288936', '0208920311', '0541991707', '0542779004', '0557617868', '0243124150', '0558574214', '0243184222', '0545783948', '0551453432', '0203592669', '0242765603', '0556592310', '0243979320', '0558188976', ];



foreach ($phones as $phone) {
	$user = User::where('phone', $phone)->first();
	$user->update(['prim_num' => 0]);

	if ($user->serial->id) {
        $user->update(['prim_num' => ($user->serial->id ?? 0), 'member_num' => '', 'pnum' => '']);
    }
    if ($user->isApproved) {
        $num = $company_code . $user->plan->code . sprintf("%04d", $user->prim_num) . "0" . $user->plan->code . "25";
        $user->update(['member_num' => $num, 'pnum' => $num]);
    }
}


foreach ($phones as $phone) {
	$user = User::where('phone', $phone)->first();

    foreach (($user?->dependents ?? [])as $dependent) {
        if ($dependent->isApproved) {
            $num = $company_code . $dependent->plan->code . sprintf("%04d", $user->prim_num) . $dependent->dep_num . $dependent->plan->code . "25";
            $dependent->update(['member_num' => $num, 'pnum' => $num]);
        }
    }
}