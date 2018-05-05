var students = ["An", "Hanh", "Dat"];

var length = students.length;

for (var i = 0; i < length; i++) {

    var _value = students[i];
    if(_value === "An"){
        console.log("An buon ngu!");
    }

    if(_value === "Hanh"){
        console.log("Hanh di choi");
    }
    
    if(_value === "Dat"){
        console.log("Dat di lam");
    }

}

// toString
var text = students.toString();
console.log(text);

// push()
students.push("Thanh");
console.log(students);

// pop()
students.pop();
console.log(students);

// unshift()
students.unshift("Thanh");
console.log(students);

// shift()
students.shift();
console.log(students);

// concat()
var newStudents = ["A", "B", "C"];
var totalStudens = students.concat(newStudents, ["E", "F"]);
console.log(totalStudens);

// slice()
var newStudents = students.slice(-3,-1);
console.log(newStudents);


//
 var city = "ha noi";

    var SinhVien = [
        "lai Huu Hanh",
        'Nam',
        1999,
        city
    ];

    document.write("Giá trị phần tử thứ nhất: " + SinhVien[0] + "<hr>");

    document.write("Giá trị phần tử thứ hai: " + SinhVien[1] + "<hr>");

    document.write("Giá trị phần tử thứ ba: " + SinhVien[2] + "<hr>");

    document.write("Giá trị phần tử thứ tư: " + SinhVien[3] + "<hr>");

 //
     var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.write("Giá trị của phần tử thứ ba là: " + mobile[2]);
 //
     var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

     document.write("Mảng mobile trước khi cập nhật: " + mobile + "<hr>");

     mobile[3] = "Lenovo";

     document.write("Mảng mobile sau khi cập nhật: " + mobile + "<hr>");
//
	var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

     document.write("Mảng mobile là: " + mobile);
//
	var SinhVien = [];
    SinhVien["name"] = "lai Huu Hanh";
    SinhVien["year"] = 1999;
    SinhVien["city"] = "ha noi";
    document.write("Giá trị phần tử có tên name là: " + SinhVien["name"]);

   document.write("<hr>");

   document.write("Giá trị phần tử có tên year là: " + SinhVien["year"]);

   document.write("<hr>");

   document.write("Giá trị phần tử có tên city là: " + SinhVien["city"]);
//
	var SinhVien = [];
    SinhVien["name"] = "lai Huu Hanh";
    SinhVien["year"] = 1999;
    SinhVien["city"] = "ha noi";
	document.write("Giá trị phần tử có tên city là: " + SinhVien["city"]);
	
//
 	var motorbike = ["Honda",["Jupiter", "Exciter", "Sirius", "Nouvo"],"Suzuki","SYM","Piaggio"];
       document.write(motorbike[1][3]);
       document.write("<hr>MỘT SỐ VÍ DỤ KHÁC<hr>");
       document.write(motorbike + "<hr>");
       document.write(motorbike[1] + "<hr>");
       document.write(motorbike[2] + "<hr>");
//
	var motorbike = ["Honda",["Jupiter","Exciter",["Sirius phanh cơ", "Sirius phanh đĩa"],"Nouvo"],"Suzuki","SYM","Piaggio"]
      document.write(motorbike[1][2][0])
      document.write("<hr>MỘT SỐ VÍ DỤ KHÁC<hr>")
      document.write(motorbike + "<hr>")
      document.write(motorbike[1] + "<hr>")
      document.write(motorbike[1][2] + "<hr>")
      document.write(motorbike[3] + "<hr>");

//
	var motorbike = ["Honda",["Jupiter","Exciter",["Sirius phanh cơ", "Sirius phanh đĩa"],"Nouvo"],"Suzuki","SYM","Piaggio"]
	for(var i = 0; i < motorbike.length; i++){
        document.write("- " + motorbike[i] + "<br>");
//
var data = [["HTC", "Nokia", "SamSung", "LG", "Apple"],["Honda", "Suzuki", "Yamaha"],["Nguyễn Thành Nhân", "Nam", 1993, "Cần Thơ"]];

        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < data[i].length; j++){
                document.write("- " + data[i][j] + "<br>");
            }
            document.write("<hr>");
	}
//
 var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

    var text = mobile.toString();

    document.write(text);
    
    document.write("<hr>Kiểu dữ liệu của biến text là: " + typeof text);

//
	var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

    var text = mobile.join("- - -");

    document.write(text);
    
    document.write("<hr>Kiểu dữ liệu của biến text là: " + typeof text);
//
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];
document.getElementById("demo1").innerHTML = mobile;
mobile.push("Lenovo");
document.getElementById("demo2").innerHTML = mobile;
//
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.getElementById("demo1").innerHTML = mobile;

        var x = mobile.push("Lenovo");

        document.getElementById("demo2").innerHTML = mobile;

        document.getElementById("demo3").innerHTML = x;
//
 var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.getElementById("demo1").innerHTML = mobile;

        mobile.pop();

        document.getElementById("demo2").innerHTML = mobile;

//
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.getElementById("demo1").innerHTML = mobile;

        mobile.unshift("Lenovo");

        document.getElementById("demo2").innerHTML = mobile;

//
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.getElementById("demo1").innerHTML = mobile;

        var x = mobile.unshift("Lenovo");

        document.getElementById("demo2").innerHTML = mobile;

        document.getElementById("demo3").innerHTML = x;

//
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.getElementById("demo1").innerHTML = mobile;

        mobile.shift();

        document.getElementById("demo2").innerHTML = mobile;
//
var mobile = ["HTC", "Nokia"];

        var motorbike = ["Honda", "Yamaha", "Suzuki"];

        var SinhVien = ["Nguyễn Thành Nhân", 1993];

        var city = ["Cần Thơ", "Vĩnh Long"];

        var data = motorbike.concat(city, SinhVien, mobile);
    
        document.write(data);
    
        document.write("<hr>MỘT SỐ VÍ DỤ KHÁC<hr>");
    
        document.write(motorbike.concat(city, SinhVien));

        document.write("<br>");
    
        document.write(motorbike.concat(city));
//
var data = ["HTC", "Nokia", "Apple", "LG", "Honda", "SYM", "Suzuki"];

  var abc = data.slice(1,5);

  document.write(abc);

//
var data = ["HTC", "Nokia", "Apple", "LG", "Honda", "SYM", "Suzuki"];

  var abc = data.slice(-6,-3);

  document.write(abc);
//
 var data = ["HTC", "Nokia", "Apple", "LG", "Honda", "SYM", "Suzuki"];

  data.splice(1,4);

  document.write(data);
//
var data = ["HTC", "Nokia", "Apple", "LG", "Honda", "SYM", "Suzuki"];

  data.splice(1);

  document.write(data);
//
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        mobile.splice(2, 0, " a ", " b ", " c ", " d ");

        document.write(mobile);
//
 var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        var a = mobile.length;

        document.write(a);
//
var fruits = ["Orange", "Mango", "Banana", "Apple"];

        document.getElementById("demo1").innerHTML = fruits;

        fruits.sort();

        document.getElementById("demo2").innerHTML = fruits;
//
 var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];

        document.getElementById("demo1").innerHTML = mobile;

        mobile.reverse();

        document.getElementById("demo2").innerHTML = mobile;
//
var score = [40, 100, 1, 6, 35, 10];

        document.getElementById("demo1").innerHTML = score;

        score.sort();

        document.getElementById("demo2").innerHTML = score;
//
var score = [40, 100, 1, 6, 35, 10];

        document.getElementById("demo1").innerHTML = score;

        score.sort(function(a, b){return a - b});

        document.getElementById("demo2").innerHTML = score;
//
var score = [40, 100, 1, 6, 35, 10];

        document.getElementById("sapXep1").innerHTML = score;

        function SapXepNgauNhien(){
            score.sort(function(){return 0.5 - Math.random()});
            document.getElementById("sapXep2").innerHTML = score;
        
//
var score = [40, 100, 1, 6, 35, 10];

  score.sort(function(a, b){return a - b});

  var min = score[0];

  var max = score[score.length - 1];

  document.getElementById("demo1").innerHTML = "Giá trị nhỏ nhất: " + min;

  document.getElementById("demo2").innerHTML = "Giá trị lớn nhất: " + max;
//
var score = [40, 100, 1, 6, 35, 10];

        function GiaTriLonNhat(arr) {
            return Math.max.apply(null, arr);
        }

        var max = GiaTriLonNhat(score);

        document.write("Giá trị lớn nhất trong mảng là: " + max);
//
var score = [40, 100, 1, 6, 35, 10];

        function GiaTriNhoNhat(arr) {
            return Math.min.apply(null, arr);
        }

        var min = GiaTriNhoNhat(score);

        document.write("Giá trị nhỏ nhất trong mảng là: " + min);
//
var score = [40, 100, 1, 6, 35, 10];

        function GiaTriLonNhat(arr) {
            var len = arr.length
            var max = -Infinity;
            while (len--) {
                if (arr[len] > max) {
                    max = arr[len];
                }
            }
            return max;
        }

        var max = GiaTriLonNhat(score);

        document.write("Giá trị lớn nhất trong mảng là: " + max);

//
var score = [40, 100, 1, 6, 35, 10];

        function GiaTriNhoNhat(arr) {
            var len = arr.length
            var min = Infinity;
            while (len--) {
                if (arr[len] < min) {
                    min = arr[len];
                }
            }
            return min;
        }

        var min = GiaTriNhoNhat(score);

        document.write("Giá trị nhỏ nhất trong mảng là: " + min);
//
var student = [
        {name:"Chung", age:17},
        {name:"Anh", age:18},
        {name:"Bao", age:15}
    ];
  
    document.write("<hr>MẢNG BAN ĐẦU<hr>");
  
    document.write("<p>" + student[0].name + " - " + student[0].age + "</p>");
  
    document.write("<p>" + student[1].name + " - " + student[1].age + "</p>");
  
    document.write("<p>" + student[2].name + " - " + student[2].age + "</p>");
  
    student.sort(function(a, b){return a.age - b.age});
  
    document.write("<hr>MẢNG SAU KHI SẮP XẾP LẠI<hr>");
  
    document.write("<p>" + student[0].name + " - " + student[0].age + "</p>");
  
    document.write("<p>" + student[1].name + " - " + student[1].age + "</p>");
  
    document.write("<p>" + student[2].name + " - " + student[2].age + "</p>");
//
var student = [
        {name:"Chung", age:17},
        {name:"Anh", age:18},
        {name:"Bao", age:15}
    ];
  
    document.write("<hr>MẢNG BAN ĐẦU<hr>");
  
    document.write("<p>" + student[0].name + " - " + student[0].age + "</p>");
  
    document.write("<p>" + student[1].name + " - " + student[1].age + "</p>");
  
    document.write("<p>" + student[2].name + " - " + student[2].age + "</p>");
  
    student.sort(function(a, b){
        if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
        if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
        return 0;});