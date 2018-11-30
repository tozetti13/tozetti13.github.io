function bubbleSort(a) {
    var ord;
    do {
        ord = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                ord = true;
            }
        }
    } while (ord);
}


self.addEventListener('message', function(e) {
    var array = e.data;
    bubbleSort(array);
 	self.postMessage(array);
}, false);