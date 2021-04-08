function initVue() {

    new Vue({

        el: "#app",

        data: {

            "todos" : [ 
                {
                    "name" : "todo1",
                    "done" : false
                }, 
                {
                    "name" : "todo2",
                    "done" : false
                },

                { 
                    "name" : "todo3",
                    "done" : false
                },

                {
                    "name" : "todo4",
                    "done" : false
                }
            ],

            "newTodoText" : "",

        },

        methods: {

            addNewTodo: function() {

                if (this.newTodoText.length > 0) {   

                    const newTodo = {
                        "name" : this.newTodoText,
                        "done" : false
                    }

                    this.todos.push(newTodo);
                    this.newTodoText = "";
                }
            },

            removeTodo: function(index) {

                this.todos.splice(index,1);
            },

            test: function(index) {

                this.todos[index].done = !this.todos[index].done
            }
        }
    })
}

function init() {

    initVue();
}

document.addEventListener("DOMContentLoaded", init);
