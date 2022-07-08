<template>
    <div class="login">
        <div class="goback" @click="goBack()">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
        </div>
        <div class="loginform">
            <h1 class="logintitle">Connexion</h1>
            <p>Nouvel arrivant ? <router-link to="/register">Inscrivez-vous</router-link></p>
            <div class="infoslogin">
                <label for="email">Email :</label>
                <input name="email" class="email" type="text" v-model="email">
                <label for="email">Mot de passe :</label>
                <input name="mdp" class="mdp" type="password" v-model="mdp">
                <button @click="Login()">Valider</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../../storage/firebase'
import 'firebase/auth'
import router from '@/router/router'

export default {
    data(){
        return{
            email: '',
            mdp: ''
        }
    },
    methods:{

        //Login à faire comme pour le register

        Login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.mdp)
            .then(alert("Vous êtes connecté"))
            .catch(err => alert(err.message))
        },
        goBack(){
            router.push('/')
        }
    }
}
</script>

<style scoped>
.login{
    min-height: 87vh;
    display: flex;
    flex-flow: column wrap;
    background-image: url(../../assets/grand_arbre.jpg);
    background-repeat: none;
    background-size: cover;
    background-position: center;
}
.goback{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-top: 20px;
    margin-left: 20px;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    border-style: hidden;
    background-color: black;
    box-shadow: 5px 5px 10px black;
}
.goback:hover{
    cursor: pointer;
}
svg{
    width: 50%;
    opacity: 1;
    margin-top: auto;
    margin-bottom: auto;
    color: white;
}
.loginform{
    width: 50%;
    max-width: 500px;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 20px;
    background-color: white;
    margin: auto;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 30px;
}
.logintitle{
    margin-left: auto;
    margin-right: auto;
    color: rgb(0, 203, 0);
    font-weight: 600;
}
.infoslogin{
    margin-top: 30px;
    display: flex;
    flex-flow: column nowrap;
}
input{
    margin-bottom: 20px;
    border-radius: 5px;
}
button{
    color: white;
    background-color: rgb(0, 203, 0);
    border: none;
    height: 30px;
    border-radius: 5px;
    margin-top: 20px;
}
p{
    margin-top: 20px;
    margin: auto;
    font-size: 14px;
}
a{
    text-decoration: none;
    color: rgb(0, 203, 0);
}
</style>