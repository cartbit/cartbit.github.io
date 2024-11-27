"use strict";

function loadData() {
    var xhr = new XMLHttpRequest;
    var url = "https://localhost:6543";
    xhr.open("GET", url, true)
    xhr.onload = function () {
            handleData(JSON.parse(this.responseText));
    }
    xhr.send();
}

function handleData(data) {
   alert(data);
}
