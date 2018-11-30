var inic = 0;
var fim = 0;
var tempexec = 0;


document.getElementById("inputNumber").autofocus;

var bubble = new Worker('bubble.js');
bubble.addEventListener('message', function(e) {
	$("#tempo").empty();
	$("#tempo").append("0");
    fim = new Date().getTime();
    tempexec = parseFloat((fim - inic)/1000);
    var tamanho = document.getElementById("inputNumber").value;
    document.getElementById("tempo").innerHTML = tempexec + " segundos para ordenar o vetor de " + tamanho + " posições";
    console.log('Worker said: ', e.data);
}, false);

function teste() {
    inic = new Date().getTime();
    var tamanho = document.getElementById("inputNumber").value;
    var array = [];
    for (var i = 0; i < tamanho; i++) {
        
        array[i] = randomNumber();
    }
    $(".tmp").empty();
    $(".tmp").append("<div class='donut'></div>");
    bubble.postMessage(array);

};

function randomNumber() {
    return parseInt((Math.random() * 100), 10)
}

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
