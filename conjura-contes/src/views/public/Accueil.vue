<template>
    <div class="accueil">
        <h1>Bienvenue au Royaume des conjugaisons</h1>
        <router-link to="/carte-de-progression">Commencer</router-link>
    </div>

</template>

<script>
    export default{
        name:'Accueil'
    }
</script>

<style scoped>
    .accueil{
        text-align: center;
        background-image: url("../../assets/Moana.jpg") ;
        color : white;
    };
  

</style>