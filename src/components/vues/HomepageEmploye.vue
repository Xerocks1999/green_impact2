<template>
    <div class="home">
        <div class="profile">
            <h1 class="titleprofile">Bienvenue sur votre espace employé Green Impact</h1>
            <h6 class="contentprofile">
                <svg id="contentsvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                <p class="contentp">Accéder à mon espace personnel</p>
            </h6>
        </div>
        <div class="analysis">
            <div class="voyages">
                <svg width="60" height="60" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="98" height="98" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_20_188" transform="scale(0.00666667)"/>
                </pattern>
                <image id="image0_20_188" width="150" height="150" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
                <h2 class="titlecard">Analyser ses voyages</h2>
            </div>
            <div class="tbp">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                </svg>
                <h2 class="titlecard">Consulter le tableau de bord</h2>
            </div>
        </div>
        <div class="awards">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
            <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
            </svg>
            <h2 class="titlecard">Découvrir les récompenses disponibles</h2>
        </div>
    </div>
</template>

<script>
//import firebase from '../../storage/firebase'
import 'firebase/auth'
//import { onBeforeMount } from 'vue'
//import router from '@/router/router'

export default {
    props: {
        currentUser: Object
    },
    data(){
        return{

        }
    },
    mounted : function(){}
}
</script>

<style scoped>
.home{
    display: flex;
    flex-flow: column wrap;
    background-color: rgb(228, 228, 228);
    padding-top: 30px;
    padding-bottom: 30px;
}
.profile{
    display: flex;
    flex-flow: column wrap;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    background-image: url(../../assets/environnement.jpg);
    min-height: 350px;
    background-repeat: none;
    background-size: cover;
    background-position: center;
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
}
.titleprofile{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5%;
    color: white;
    width: 50%;
    font-style: oblique;
}
.contentprofile{
    display: flex;
    flex-flow: row nowrap;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5%;
    color: white;
    width: 240px;
    font-style: oblique;
}
#contentsvg{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0;
}
.contentp{
    margin-top: auto;
    margin-bottom: auto;
}
.analysis{
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    min-height: 350px;
}
.voyages{
    font-style: oblique;
    display: flex;
    flex-flow: column wrap;
    width: 49%;
    background-image: url(../../assets/voyages.jpg);
    background-repeat: none;
    background-size: cover;
    background-position: center;
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
}
.tbp{
    font-style: oblique;
    display: flex;
    flex-flow: column wrap;
    width: 49%;
    background-image: url(../../assets/tableau-de-bord.jpeg);
    background-repeat: none;
    background-size: cover;
    background-position: center;
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
}
.titlecard{
    text-align: center;
    color: white;
    margin-bottom : auto;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10px;
}
svg{
    color: white;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}
.awards{
    font-style: oblique;
    display: flex;
    flex-flow: column wrap;
    margin: 30px;
    background-image: url(../../assets/recompense.png);
    min-height: 350px;
    background-repeat: none;
    background-size: cover;
    background-position: center;
    -webkit-transition: all 1s ease; /* Safari et Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* Internet Explorer 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
}
.profile:hover{
    cursor: pointer;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
}
.voyages:hover{
    cursor: pointer;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
}
.tbp:hover{
    cursor: pointer;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
}
.awards:hover{
    cursor: pointer;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
}
</style>