<template>
    <div class="main">
        <div class="connexion">
            <h4 class="contitle"><strong>Habitué ? Je me connecte !</strong></h4>
            <button class="conbtn" @click="goToLogin()">Connexion</button>
        </div>
        <div class="enregistrer">
            <h4 class="contitle"><strong>Nouvel arrivant ? Je m'inscris !</strong></h4>
            <button class="conbtn" @click="goToRegister()">S'enregistrer</button>
        </div>
    </div>
</template>

<script>
import router from '../../router/router.js'

export default {
    methods:{
        goToLogin(){
            router.push('/login')
        },
        goToRegister(){
            router.push('/register')
        }
    }
}
</script>

<style scoped>
.main{
    min-height: 87vh;
    display: flex;
    flex-flow: row wrap;
}
.connexion{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 50%;
    background-image: url(../../assets/grand_arbre.jpg);
    background-repeat: none;
    background-size: cover;
    background-position: center;
}
.enregistrer{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 50%;
    background-image: url(../../assets/jeune_pousse.jpg);
    background-repeat: none;
    background-size: cover;
    background-position: center;
}
.contitle{
    color: white;
    margin-left: auto;
    margin-right: auto;
}
.conbtn{
    background-color: white;
    font-size: 18px;
    color: rgb(0, 203, 0);
    border: none;
    border-radius: 10px;
    min-height: 7%;
    min-width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
</style>