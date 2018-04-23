function getMyProFile (name, age, job) {
	var MyProFile = 'toi ten la '+ name + ',toi' + age + 'toi . toi la mot' + job;
	document.getElementById('MyProFile').innerHTML = MyProFile;
}
function hideMyProFile() {
	document.getElementById('MyProFile').innerHTML = '';
}

function getNameStudent(student){
	var name = student.name;
	document.getElementById('student').innerHTML = name;
}
function getAgeStudent(student){
	var age = student.age;
	document.getElementById('student').innerHTML = age;
}
function learning(student) {
	student.learn();
} 
