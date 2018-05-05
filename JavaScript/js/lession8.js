function getDate () {
    
    var currentTime = new Date();
    currentTime.setMonth(5);

    document.getElementById('current-time').value = currentTime;
    
}

function getRandomNumber() {

    var minObject = document.getElementById('min');
    var maxObject = document.getElementById('max');

    var min = parseFloat(minObject.value);
    var max = parseFloat(maxObject.value);

    var basicValue = Math.random(); // 0 -> 1
    var result = Math.round(basicValue * (max - min)) + min;
    
    document.getElementById('result').value = result;
}