function initVue() {

    new Vue({

        el: "#app",

        data: {

            "test" : "Hello World!"
        }
    })
}

function init() {

    initVue();
}

document.addEventListener("DOMContentLoaded", init);
