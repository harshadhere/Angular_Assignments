function SecondMaximum(Arr) {
    var i = 0;
    var Max2 = Arr[0];
    var Max = Arr[0];
    for (i = 1; i < Arr.length; i++) {
        if (Max < Arr[i]) {
            Max = Arr[i];
        }
    }
    for (i = 0; i < Arr.length; i++) {
        if (Max > Arr[i]) {
            if (Max2 < Arr[i]) {
                Max2 = Arr[i];
            }
        }
    }
    return Max2;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var iRet = 0;
iRet = SecondMaximum(Arr);
console.log("Second Maximum Element from array is : " + iRet);
