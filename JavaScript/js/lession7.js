// toString()
	var year = 1999;
	var yearString = year.toString();
	console.log(typeof yearString);

// toFixed()
	var rateAvegare = 7.73274362842;
	var rateAvarageFix = rateAvegare.toFixed(3);
	console.log(rateAvegare + ' - ' + rateAvarageFix);

// Number()
	var year = Number(true);
	console.log(year);

	var not = Number(false);
	console.log(not);

	var time =  new Date();
	console.log(Number(time));

	var name = 'tien dat';
	console.log(Number(name));

	var birthYear = '1999';
	console.log(Number(birthYear));

	var birthDay = '01 03 1999';
	console.log(Number(birthDay));

// parseInt()
	var year = parseInt(true);
	console.log(year);

	var not = parseInt(false);
	console.log(not);

	var time =  new Date();
	console.log(parseInt(time));

	var birthYear = '1999';
	console.log(parseInt(birthYear));

	var stringNum = 'haha 1999';
	console.log(parseInt(stringNum));

// parseFloat()
	var year = parseFloat(true);
	console.log(year);

	var birthYear = '1999';
	console.log(parseFloat(birthYear));

	var floatNum = '25.333';
	console.log(parseFloat(floatNum));
	console.log(parseInt(floatNum));

// MAX_VALUE
	var maxNum = Number.MAX_VALUE;
	console.log(maxNum);

	var minNum = Number.MIN_VALUE;
	console.log(minNum);

// isInteger()
	var a = '1999';
	console.log(Number.isInteger(a));

	var b = 1999;
	console.log(Number.isInteger(b));

// isNan() gia tri trong ham isNan bi ep kieu number
	var a = '1999';
	console.log(isNaN(a));

	var b = 'Hello';
	console.log(isNaN(b));



//bai tap
	document.write ("5e+9 se bang voi :" + (5e+9) + "<br>");
	document.write ("5e-6 se bang voi :" + (5e-6) + "<br>");
	document.write ("145e+2 se bang voi: " + (145e+2) + "<br>");
	document.write ("145.55e+5 se bang voi: " + (145.55e+5) + "<br>" );
	document.write ("145.55e-6 se bang voi: " + (145.55e-6) + "<br>");

//
var a = 99999999999999;
var b = 999999999999999;
var c = 9999999999999999;
var d = 99999999999999999;
    document.write(a + "<hr>");
    document.write(b + "<hr>");
    document.write(c + "<hr>");
    document.write(d + "<hr>");


//
 var e = 0.999999999999999;
        var f= 0.9999999999999999;
        var g = 0.99999999999999999;
        var h = 0.999999999999999999;
        document.write(e + "<hr>");
        document.write(f + "<hr>");
        document.write(g + "<hr>");
        document.write(h + "<hr>");

//
 var a = 35 + 5;
        var b = 35 - 5;
        var c = 35 * 5;
        var d = 35 / 5;
        document.write(a + "<hr>");
        document.write(b + "<hr>");
        document.write(c + "<hr>");
        document.write(d + "<hr>");
//
var a = 35 + "5";
        var b = "72" + 3;
        var c = "16" + "4";
        document.write(a + "<hr>");
        document.write(b + "<hr>");
        document.write(c + "<hr>");
//
  var a = 1993 - "Lập Trình Web";
        var b = 1993 * "Lập Trình Web";
        var c = 1993 / "Lập Trình Web";
        document.write(a + " có kiểu dữ liệu là " + typeof a + "<hr>");
        document.write(b + " có kiểu dữ liệu là " + typeof b + "<hr>");
        document.write(c + " có kiểu dữ liệu là " + typeof c + "<hr>");
        //
var number = 2;
		while (number != Infinity) {
			number = number * number;
document.write(number + "<br>");
}
//
var number = 2;
        while (number != -Infinity) {
            number = -(number * number);
document.write(number + "<br>");
}

//
 var a = 5/0;
        var b = -5/0;
        document.write(a);
        document.write("<hr>");
        document.write(b+"<br>");
//
var a = typeof Infinity;
        var b = typeof -Infinity;
        document.write(a);
        document.write("<hr>");
        document.write(b+"<br>");
//
 var a = 1993;
        var b = a.toString();

        document.write(a + " có kiểu dữ liệu là: " + typeof a);

        document.write("<hr>");

        document.write(b + " có kiểu dữ liệu là: " + typeof b);

//
 var a = 1993;
        var b = a.toString(2);
        var c = a.toString(8);
        var d = a.toString(16);

        document.write(b + "<br>");
        document.write(c + "<br>");
        document.write(d + "<br>");

//
 var a = 1993;
        var b = a.toExponential();
        document.write(b);
//
var a = 111111111;
        document.write(a.toExponential());
        document.write("<hr>");
        document.write(a.toExponential(1));
        document.write("<hr>");
        document.write(a.toExponential(2));
        document.write("<hr>");
        document.write(a.toExponential(3));
        document.write("<hr>");
        document.write(a.toExponential(4));
        document.write("<hr>");
        document.write(a.toExponential(5));
   
//
 var a = 1993.123456789;

        document.write(a.toFixed(1));

        document.write("<hr>");

        document.write(a.toFixed(3));

        document.write("<hr>");

        document.write(a.toFixed(5));
//
var a = Number(true);
        var b = Number(false);
        var c = Number(new Date());
        var d = Number("1993");
        var e = Number("19 93");

        document.write(a + "<br>");
        document.write(b + "<br>");
        document.write(c + "<br>");
        document.write(d + "<br>");
        document.write(e + "<br>");
//
 var a = parseInt("20");
        var b = parseInt("20.55");
        var c = parseInt("20 40");
        var d = parseInt(" 20 ");
        var e = parseInt("20 years");
        var f = parseInt("years 20");

        document.write(a + "<br>");
        document.write(b + "<br>");
        document.write(c + "<br>");
        document.write(d + "<br>");
        document.write(e + "<br>");
        document.write(f + "<br>");
//
 var a = parseFloat("20");
        var b = parseFloat("20.44");
        var c = parseFloat("20 44");
        var d = parseFloat(" 20.55 ");
        var e = parseFloat("20.66 years");
        var f = parseFloat("years 20.66");

        document.write(a + "<br>");
        document.write(b + "<br>");
        document.write(c + "<br>");
        document.write(d + "<br>");
        document.write(e + "<br>");
        document.write(f + "<br>");
//