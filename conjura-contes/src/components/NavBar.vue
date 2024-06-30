<template>
    <nav class="navbar">
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/carte-de-progression">Carte de Progression</router-link></li>
            <li><router-link to="/sections-daprentissage">Sections d'Apprentissage</router-link></li>
            <li><router-link to="/jeux-et-quiz">Jeux et Quiz</router-link></li>
            <li><router-link to="/quetes-quotidiennes">Quêtes Quotidiennes</router-link></li>
            <li><router-link to="/boutique">Boutique</router-link></li>
        
        </ul>
    </nav>
</template>

<script>
    export default{
        name: 'NavBar'
    };
    
</script>

<style scoped>
    .navbar{
        background-color: #333;
        padding: 1rem;
    }

    .navbar ul{
        list-style-type: none;
        padding:0;
        display: flex;
        justify-content: space-around;
    }

    .navbar li {
        margin:0 1rem;
    }

    .navbar a {
        color:white;
        text-decoration: none;
    }

    .navbar a:hover{
        text-decoration: underline;
    }

</style>