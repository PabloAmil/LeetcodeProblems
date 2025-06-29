let s = "Hello, my name is John"; 
//let s = "                 "
//let s = "         a     b        "

var countSegments = function(s) {

    if (s.length === 0) {
        return 0;
    }

    let segmentedString = s.split(' ');
    let purifiedString = segmentedString.filter((char) => char !== '')

    return purifiedString.length;
};

countSegments(s);