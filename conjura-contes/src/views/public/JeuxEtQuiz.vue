<template>
    <div class="jeux-et-quiz">
        <h2>Jeux et Quiz</h2>
        <div v-for="(game,index) in games" :key="index" class="game">
            <h3>{{game.title}}</h3>
            <p>{{game.description}}</p>
            <button @click="goToGame(game.path)">Commencer</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:"JeuxEtQuiz",
        data(){
            return{
                games:[
                    {
                        title:'Quiz à choix multiple',
                        description: 'Associez les verbes correctement conjugués.',
                        path: '/jeux/quiz',
                    },
                    {
                        title: 'Complétion de texte',
                        description: 'Complétez les passages de contes célèbres.',
                        path: '/jeux/completion-texte',
                    },
                ],
                
            };
        },
        methods:{
            goToGame(path){
                this.$router.push(path);
            },
        },
    };

</script>

<style scoped>

    .jeux-et-quiz{
        padding: 20px;
        text-align: center;
    }

    .game{
        background: #f0f0f0;
        border-radius: 10px;
        margin: 20px;
        padding:20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .game h3{
        margin:0;
    }

    .game p{
        margin: 10px 0 20px;
    }

    .game button {
        padding: 10px 20px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .game button:hover{
        background-color: #555;
    }

</style>