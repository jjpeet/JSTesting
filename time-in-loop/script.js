function output (x) {
    console.log(x);
}

for (var i = 1; i <= 5; i++) {
    setTimeout(function(x) { return function() { console.log(x); }; }(i), 1000*i);
    // 1 2 3 4 5
}