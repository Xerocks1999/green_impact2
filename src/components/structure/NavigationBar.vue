<template>
    <div class="navigation">
        <div class="left-side" @click="goToHome()">
            <div class="logo">
            </div>
            <div class="namesite">
                <h2>Green Impact</h2>
            </div>
        </div>
        <div class="right-side">
            <div class="connectionfeatures" v-if="!currentUser.name">
                <router-link to="/login">Se connecter</router-link>
                <router-link to="/register">S'enregistrer</router-link>
            </div>
            <div class="connectedfeatures" v-else>
                <router-link to="/mesvoyages">Analyses</router-link>
                <router-link to="/login">Tableau de bord</router-link>
                <router-link to="/register">Récompenses</router-link>
                <router-link to="/register">Profil</router-link>
            </div>
            </div>
        </div>
</template>

<script>
import router from '@/router/router'

export default {
    props: {
        currentUser: Object
    },
    mounted : function(){
        console.log(this.currentUser.email)
    },
    methods:{
        goToHome(){
            router.push('/home')
        }
    }
}
</script>

<style scoped>
.navigation{
    color: rgb(0, 203, 0);
    min-height: 13vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.left-side{
    display: flex;
    flex-flow: row wrap;
    width: 275px;
}
.left-side:hover{
    cursor: pointer;
}
.right-side{
    display: flex;
    flex-flow: row wrap;
    justify-content: end;
    width: 60%;
}
.logo{
    width: 70px;
    height: 70px;
    margin: auto;
    background-image: url(../../assets/logo.jpg);
    background-size: 100% 100%;
}
.namesite{
    margin-top: auto;
    margin-bottom: auto;
}
.connectionfeatures{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: auto;
    margin-bottom: auto;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: 0;
    width: 300px;
}
.connectedfeatures{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: auto;
    margin-bottom: auto;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: 0;
    width: 500px;
}
a{
    color: rgb(0, 203, 0);
    text-decoration: none;
}
</style>