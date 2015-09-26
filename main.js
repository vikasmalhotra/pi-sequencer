/* Initialize variables */
var splitFrom3, splitFrom2, iLength = jLength = count = 0;

splitFrom3 = piValue.split('3');
if (splitFrom3[splitFrom3.length] !== '') iLength = splitFrom3.length - 1;
else iLength = splitFrom3.length;
for (var i = 0; i < iLength; i++) {
    if (splitFrom3[i].indexOf('2') > -1 && splitFrom3[i].indexOf('1') > -1) {
        splitFrom2 = splitFrom3[i].split('2');
        if (splitFrom2[splitFrom2.length] !== '') jLength = splitFrom2.length - 1;
        else jLength = splitFrom2.length;
        for (var j = 0; j < jLength; j++) {
            if (splitFrom2[j].indexOf('1') > -1) {
                count++;
            } else {
                continue;
            }
        }
    } else {
        continue;
    }
}
alert('final:' + count);