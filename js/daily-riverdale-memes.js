import './common';
import Vue from 'vue';

var app = new Vue({
    el: "#app",
    data: {
        messages: []
    }
});

fetch("https://philbot.desdemonawren.com/daily-riverdale-memes", {
    "method": "GET"
})
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        console.log("Could not load daily-riverdale-meme.json, Server returned " + response.status + " : " + response.statusText);
    }
})
.then(response => {
    app.messages = response;
})
.catch(err => {
    console.log("Could not load daily-riverdale-meme.json, caught error: " + err);
});
