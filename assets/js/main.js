/*
---PROBLEMA---
Descrizione:
Rifare l'esercizio della to do list.

Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

// INTESTAZIONE VUE
const {createApp} = Vue

createApp({
    // VARIABILI
    data() {
        return{
            // GENERALE
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
            ],

            // INPUT UTENTE
            newToDo: ''
        }
    },

    created(){

    },

    // FUNZIONI
    methods: {
        // AGGIUNTA TO DO ALLA LISTA
        createToDo(){
            if(this.newToDo != ''){
                this.todos.unshift(
                    {
                        text: this.newToDo,
                        done: false
                    }
                )

                this.newToDo = ''
            }
        },

        // CHANGE VALORE BOOLEANO (NO)
        changeDone(i){
            if(this.todos[i].done==true){
                this.todos[i].done=false
            } else if(this.todos[i].done==false){
                this.todos[i].done=true
            }
        },

        // ELIMINAZIONE TO DO DALLA LISTA
        deleteToDo(i){
            this.todos.splice(i,1)
        }
    }
}).mount('#app')