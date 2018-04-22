	function introProfile() {
		var name = 'Hanh';
		var age = 21;
		var job = 'long bong';

		return 'toi ten la '+ name + ',toi' + age + 'toi . toi la mot' + job;
	}
	function introProfile2 (name, age, job ) {
		return 'toi ten la '+ name + ', toi ' + age + ' tuoi . toi la mot ' + job;
	}
	var result = introProfile();
	document.getElementById('my-profile').innerHTML = result;
	var result = introProfile2( 'Hanh',22, 'hoc vien' );
	document.getElementById('my-profile').innerHTML = result;
