<template>
    <div class="mesvoyages">
        <div class="titlevoyages">
            <div class="goback" @click="goBack()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
            </div>
            <div class="title">
                <svg id="svgtitle" width="60" height="60" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="98" height="98" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_20_188" transform="scale(0.00666667)"/>
                </pattern>
                <image id="image0_20_188" width="150" height="150" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
                <h1 class="h1title">Analyser ses voyages</h1>
            </div>
        </div>
        <div class="mon-impact-transport">
            <div class="onglets">
                <h2>Calculer son voyage :</h2>
            </div>
            <div class="buttons">
                <button id="distance">Distance</button>
                <button id="données">Itinéraire</button>
            </div>
            <div class="infoscalculs">
                <div class="distanceinfos">
                    <label for="inputdist">Insérer la distance à parcourir : </label>
                    <input type="number" min="0" id="inputdist" placeholder="Ex : 10km" v-model="distance">
                    <label for="inputtransport">Quel moyen de transport vous comptez utiliser ?</label>
                    <select name="inputtransport" id="inputtransport" v-model="selected" @click="getVehicles()">
                        <option disabled value="">Choisir</option>
                        <option value="voiture">Voiture</option>
                        <option value="train">Trains</option>
                        <option value="deux_roues">Deux roues</option>
                        <option value="avion">Avion</option>
                        <option value="autobus">Autobus</option>
                    </select>
                    <div class="precision">
                        <label for="inputtype">Quel type de véhicule ?</label>
                        <select name="inputtype" id="inputtype" v-model="selectedtype" @click="getVehiclesTypes()">
                            <option disabled value="">Choisir</option>
                            <option :value="actual.nom" v-for="actual in actuals" :key="actual.nom">{{actual.nom}}</option>
                        </select>
                    </div>
                </div>
                <div class="itininfos">

                </div>
            </div>
            <div class="calcul">
                <button class="btnclacul" @click="createChart()">Calculer ce voyage</button>
            </div>
            <div class="résultats">
                <h2>Résultats :</h2>
                <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../../storage/firebase'
import 'firebase/firestore';

export default {
    data(){
        return{
            voiture: [],
            train : [],
            deux_roues: [],
            avion: [],
            autobus: [],
            distance: null,
            selected: '',
            selectedtype: '',
            actuals: [],
            actualtypes: []
        }
    },
    mounted(){
        const ref = firebase.firestore();

        

        ref.collection('voiture').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.voiture.push({
                nom: doc.data().nom,
                emission: doc.data().emission
            })
          })
        })

        ref.collection('Transports en commun').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.train.push({
                nom: doc.data().nom,
                emission: doc.data().emission
            })
          })
        })

        ref.collection('Deux roues').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.deux_roues.push({
                nom: doc.data().nom,
                emission: doc.data().emission
            })
          })
        })

        ref.collection('Avion').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.avion.push({
                nom: doc.data().nom,
                emission: doc.data().emission
            })
          })
        })

        ref.collection('Autobus Car').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.autobus.push({
                nom: doc.data().nom,
                emission: doc.data().emission
            })
          })
        })
    },
    methods:{
        getVehicles(){
            this.actuals = []
            this.actualtypes = []
            if (this.selected == 'voiture'){
                for (let i=0;i<this.voiture.length;i++){
                    this.actuals.push({
                    nom: this.voiture[i].nom,
                    emission: this.voiture[i].emission
                    })
                }
            }
            if (this.selected == 'train'){
                for (let i=0;i<this.train.length;i++){
                    this.actuals.push({
                    nom: this.train[i].nom,
                    emission: this.train[i].emission
                    })
                }
            }
            if (this.selected == 'deux_roues'){
                for (let i=0;i<this.deux_roues.length;i++){
                    this.actuals.push({
                    nom: this.deux_roues[i].nom,
                    emission: this.deux_roues[i].emission
                    })
                }
            }
            if (this.selected == 'avion'){
                for (let i=0;i<this.avion.length;i++){
                    this.actuals.push({
                    nom: this.avion[i].nom,
                    emission: this.avion[i].emission
                    })
                }
            }
            if (this.selected == 'autobus'){
                for (let i=0;i<this.autobus.length;i++){
                    this.actuals.push({
                    nom: this.autobus[i].nom,
                    emission: this.autobus[i].emission
                    })
                }
            }
            console.log(this.actuals)
        },
        getVehiclesTypes(){
            this.actualtypes = []
            for (let i=0;i<this.actuals.length;i++){
                if (this.actuals[i].nom == this.selectedtype){
                    this.actualtypes.push({
                        nom: this.actuals[i].nom,
                        emission: this.actuals[i].emission
                    })
                }
            }
        },
        createChart(){
            
        }
    }
}
</script>

<style scoped>
.mesvoyages{
    min-height: 87vh;
    display: flex;
    flex-flow: column wrap;
    background-image: url(../../assets/environnement.jpg);
    background-repeat: none;
    background-size: cover;
    background-position: center;
}
.titlevoyages{
    display: flex;
    flex-flow: row wrap;
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
.title{
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    color: white;
    font-style: oblique;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
}
#svgtitle{
    margin-top: auto;
    margin-bottom: auto;
    width: 100px;
}
.h1title{
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
}
.mon-impact-transport{
    padding: 40px;
    margin-top: 50px;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 10px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.onglets{
    margin-bottom: 20px;
    display: flex;
    flex-flow: row wrap;
}
.buttons{
    margin: auto;
    max-width: 700px;
    display: flex;
    flex-flow: row wrap;
}
#distance{
    width: 50%;
}
#données{
    width: 50%;
}
.infoscalculs{
    margin: auto;
    max-width: 700px;
    background-color: rgb(235, 235, 235);
}
.distanceinfos{
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
}
.precision{
    display: flex;
    flex-flow: column wrap;
}
label{
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
input{
    margin-left: auto;
    margin-right: auto;
    max-width: 20%;
    border: none;
    border-radius: 5px;
    text-align: center;
    background-color: rgb(255, 255, 255);
}
select{
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 5px;
    padding: 3px;
}
.calcul{
    max-width: 150px;
    display: flex;
    flex-flow: column nowrap;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}
.résultats{
    margin-top: 100px;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column wrap;
}
.chart-container{
    width: 50%;
    margin: 20px;
}
</style>