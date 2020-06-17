function hello() {
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            var a = i;
            var b = j;
            var c = i * j;
            document.write(a + " X " + b + " = " + c + "<br />");
        }
    }
}
