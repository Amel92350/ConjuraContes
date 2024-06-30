<template>
    <div class="present">
        <h2>Présent de l'indicatif</h2>
        <p>Explications et exercices sur le présent de l'indicatif.</p>
        <div class="exercise">
            <h3>Excercice 1</h3>
            <p>Conjuguez le verbe <em>parler</em> au présent pour le sujet <em>nous</em> : </p>
            <input v-model="response" @input="checkAnswer"/>
            <p v-if="isCorrect" class="correct">Bonne réponse !</p>
            <p v-else-if="response !== ''" class="incorrect">Réessayez.</p>
        </div>
    </div>
</template>

<script>

    export default{
        name:'Present',
        data(){
            return{
                response:'',
                isCorrect:'false',

            };
        },
        methods:{
            checkAnswer(){
                this.isCorrect = this.response.toLowerCase() === 'parlons';
            },

        },
    };

</script>

<style scoped>
    .present{
        padding:20px;
    }

    .correct{
        color:green;
    }
    .incorrect{
        color:red;

    }
    

</style>    