var Color = {
    color: 'red',
    showColor: function () {
        document.getElementById('color').innerHTML = this.color;
    },
    showMultiColor: function () {
        var clor = 'blue';
        document.getElementById('color').innerHTML = this.color + ', ' + clor;
    }
};


var Song = {
    showLyrics: function() {
        var lyrics = "Đâu phải tình cờ anh bật khóc chỉ là phút chốc bị lỗi nhịp tim" Cơ bản anh biết mình là thằng ngốc ngoài chiếc vỏ bọc anh chưa kịp tìm"";
        document.getElementById('color').innerHTML = lyrics;
    }
};