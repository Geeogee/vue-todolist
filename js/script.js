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
            "filters" : [
                {
                    "name" : "All",
                    "value" : "All",
                }, 

                { 
                    "name" : "Done",
                    "value" : true
                }, 

                {
                    "name" : "Undone",
                    "value" : false
                }
            ],

            "selected" : "All"
        

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

            checkTodoDone: function(index) {

                this.todos[index].done = !this.todos[index].done
            },

            filterTodo: function(todos) {

                if (this.selected != "All") {
                    
                    let filterKey;
                    this.filters.forEach(filter => {

                        if(this.selected == filter.name) {
                            filterKey = filter.value
                        }
                    });

                    let todoCopy = [...this.todos];
                    console.log(todoCopy, "copiato!");

                    todoCopy = todoCopy.filter(todo => todo.done == filterKey);
                    return todoCopy
                } else {

                    console.log(this.todos)
                    return this.todos
                }
            }
        }
    })
}

function init() {

    initVue();
}

document.addEventListener("DOMContentLoaded", init);
