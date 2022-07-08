<template>
    <div class="register">
        <div class="goback" @click="goBack()">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
        </div>
        <div class="registerform">
            <h1 class="registertitle">S'enregistrer</h1>
            <p>Déjà un compte ? <router-link to="/login">Connectez-vous</router-link></p>
            <div class="infosregist">
                <label for="checkbox">Vous êtes un :</label>
                <div class="checkbox" name="checkbox">
                    <input @click="getStatus(0)" class="employé" type="radio" name="radio">
                    <label class="employé" for="employé">Employé</label>
                    <input @click="getStatus(1)" class="admin" type="radio" name="radio">
                    <label class="admin" for="admin">Administrateur</label>
                </div>
                <div class="email">
                    <label class="label" for="email">Insérez votre adresse email :</label>
                    <input class="input" name="email" type="text" v-model="email">
                </div>
                <div class="mdp">
                    <label class="label" for="mdp">Insérez votre mot de passe (8 caractères minimum) :</label>
                    <input class="input" name="mdp" type="password" v-model="mdp">
                </div>
                <div class="mdpagain">
                    <label class="label" for="mdpagain">Insérez une seconde fois votre mot de passe :</label>
                    <input class="input" name="mdpagain" type="password" v-model="mdpagain">
                </div>
                <button @click="Register()">Valider</button>
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
            employe: false,
            admin: false,
            email: '',
            mdp: '',
            mdpagain: '',
            name: ''
        }
    },
    methods: {
        getStatus(status){
            if (status == 0){
                this.employe = true
                this.admin = false
            }
            else if (status ==1){
                this.employe = false
                this.admin = true
            }
        },
        Register(){
            if (this.mdpagain != '' && this.mdp != '' && this.mdp == this.mdpagain){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.mdp)
                .then(alert('Utilisateur enregistré'))
                .catch(err => alert(err.message))
                
                this.name = this.email.split('@')[0]

                if (this.employe == false && this.admin == true){
                    this.$emit('getRegistration', {
                    email: this.email,
                    mdp: this.mdp,
                    name: this.name,
                    status: 'admin'
                    })
                    //router.push('/home-admin')
                }
                else if (this.employe == true && this.admin == false){
                    this.$emit('getRegistration', {
                    email: this.email,
                    mdp: this.mdp,
                    name: this.name,
                    status: 'employé'
                    })
                    //router.push('/home-employe')
                }
                else{
                    alert("Veuillez selectionner un champ 'Administrateur' ou 'Employé' ")
                }
            }
            else {
                alert("Mot de passe vide ou ne correspond pas")
            }
        },
        goBack(){
            router.push('/')
        }
    }
}
</script>

<style scoped>
.register{
    min-height: 87vh;
    display: flex;
    flex-flow: column wrap;
    background-image: url(../../assets/jeune_pousse.jpg);
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
.registerform{
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
    margin-bottom: 60px;
}
.registertitle{
    margin-left: auto;
    margin-right: auto;
    color: rgb(0, 203, 0);
    font-weight: 600;
}
.infosregist{
    margin-top: 30px;
    display: flex;
    flex-flow: column nowrap;
}
.checkbox{
    display: flex;
    flex-flow: row wrap;
    margin-top: 10px;
    margin-bottom: 20px;
}
.employé{
    margin: auto;
}
.admin{
    margin: auto;
}
.email{
    display: flex;
    flex-flow: column wrap;
}
.mdp{
    display: flex;
    flex-flow: column wrap;
}
.mdpagain{
    display: flex;
    flex-flow: column wrap;
}
.label{
    margin-top: 2px;
    margin-bottom: 2px;
}
.input{
    margin-top: 10px;
    margin-bottom: 10px;
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