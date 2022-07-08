<template>
  <div class="app">
    <navigation-bar :currentUser = "currentUser"></navigation-bar>
    <router-view 
    @getRegistration = "getRegistration"
    :currentUser = "currentUser"
    />
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavigationBar from '../src/components/structure/NavigationBar.vue'
import FooterBar from '../src/components/structure/FooterBar.vue'
import firebase from './storage/firebase'
import 'firebase/auth'
import 'firebase/firestore';
import router from './router/router' 


export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
  },
  data(){
    return {
      currentUser : {
        email: null,
        name: null,
        mdp: null,
        status: null
      }
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (!user){
        router.push('/')
      }
      else {
        const refUsers = firebase.firestore();

        const employe = refUsers.collection('employés').get().then(snapshot => {
          snapshot.forEach(doc => {
            if(doc.data().email == user.email){
              this.currentUser.email = doc.data().email,
              this.currentUser.mdp = doc.data().mdp,
              this.currentUser.name = doc.data().name
              this.currentUser.status = 'employe'
            }
          })
        })

        const admin = refUsers.collection('admins').get().then(snapshot => {
          snapshot.forEach(doc => {
            if(doc.data().email == user.email){
              this.currentUser.email = doc.data().email,
              this.currentUser.mdp = doc.data().mdp,
              this.currentUser.name = doc.data().name
              this.currentUser.status = 'admin'
            }
          })
        })

        employe.then(data => console.log(data))
        admin.then(data => console.log(data))
      }
    })
    /*
    if (this.currentUser.status == 'employe'){
      router.push('/home-employe')
    }
    else if (this.currentUser.status == 'admin'){
      router.push('/home-admin')
    }
    */
  },
  methods:{
    async getRegistration(user){
      this.currentUser.email = user.email
      this.currentUser.name = user.name
      this.currentUser.mdp = user.mdp
      this.currentUser.status = user.status

      const refUsers = firebase.firestore();

      if (user.status == 'employé'){
        refUsers.collection('employés').add({
          email: user.email,
          mdp: user.mdp,
          name: user.name
        })
      }
      else if (user.status == 'admin'){
        refUsers.collection('admins').add({
          email: user.email,
          mdp: user.mdp,
          name: user.name
        })
      }
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-flow: column nowrap;
  font-family: Laila;
  min-height: 100vh;
}
</style>
