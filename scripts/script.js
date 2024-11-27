"use strict";

function loadData() {
    var xhr = new XMLHttpRequest;
    var url = "http://localhost:6543";
    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status === 200) {
            handleData(JSON.parse(this.responseText));
        }
        else
            alert("Something Went Wrong! Error: " + this.status);
    }
    xhr.send();
}

function handleData(data) {
   alert(data);
}
