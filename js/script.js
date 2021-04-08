function initVue() {

    new Vue({

        el: "#app",

        data: {

            "todos" : [ "todo1" , "todo2", "todo3" , "todo4"],
            "newTodoText" : ""

        },

        methods: {

            addNewTodo: function() {

                if (this.newTodoText.length > 0) {   

                    this.todos.push(this.newTodoText);
                    this.newTodoText = "";
                }
            },

            removeTodo: function(index) {

                this.todos.splice(index,1);
            }
        }
    })
}

function init() {

    initVue();
}

document.addEventListener("DOMContentLoaded", init);
