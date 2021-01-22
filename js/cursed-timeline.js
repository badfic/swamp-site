import './common';
import Vue from 'vue';

var app = new Vue({
    el: "#app",
    data: {
        messages: []
    }
});

fetch("https://philbot.desdemonawren.com/how-we-became-cursed", {
    "method": "GET"
})
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        console.log("Could not load how-we-became-cursed.json, Server returned " + response.status + " : " + response.statusText);
    }
})
.then(response => {
    app.messages = response;
})
.catch(err => {
    console.log("Could not load how-we-became-cursed.json, caught error: " + err);
});
