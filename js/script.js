// DICHIARO VARIABILE DEL METODO createApp
const { createApp } = Vue;

// INIZIALIZZAZIONE createApp E CREAZIONE ISTANZA DELL'APPLICAZIONE VUE
createApp({
    // DEFINISCO IL METODO data () NEL QUALE INSERIRO' UN RETURN
    data() {
        return {
            mails: [],
        }
    }, // Chiusura data

    created() {
        for(let i=0; i<10; i++){
            // USO LIBRERIA AXIOS PER CONTATTARE L'API
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then( (res) => {
                this.mails.push(res.data.response);
            })        
        }
    }, // Chiusura created

    // DEFINISCO IL METODO methods {} NEL QUALE INSERIRO' LE FUNZIONI
    methods: {

    }, // Chiusura methods

    // CHIUSURA createApp CON .mount("ID")
}).mount('#app');