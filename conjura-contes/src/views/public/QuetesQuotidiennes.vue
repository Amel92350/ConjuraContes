<template>
    <div class="quetes-quotidiennes">
        <h2>Quêtes Quotidiennes</h2>
        <div v-for="(quest,index) in dailyQuests" :key="index" class="quest">
            <h3>{{quest.title}}</h3>
            <p>{{quest.description}}</p>
            <p v-if="quest.completed" class="completed">Terminée</p>
            <p v-else class="in-progress">En cours</p>
            <button @click="completeQuest(index)" :disabled="quest.completed">Terminer</button>
            <p v-if="quest.reward" class="reward">Récompense : {{quest.reward}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name:"QuetesQuotidiennes",
        data(){
            return{
                dailyQuests:[
                    {
                        title: 'Conjuguer 10 verbes au passé composé',
                        description:'Pratiquez vos compétences de conjugaison au passé composé',
                        completed: false,
                        reward:'10 pièces d\'or',
                    },
                    {
                        title: 'Quiz rapide sur le présent de l\'indicatif',
                        description: 'Répondez à 5 questions de conjugaison au présent de l\'indicatif',
                        completed: true,
                        reward:'5 pièces d\'or',
                    },
                ],
            };
        },
        methods:{
            completeQuest(index){
                //Logique pour marquer une quête comme complétée
                this.dailyQuests[index].completed=true;
            }
        }
    };

</script>

<style scoped>

    .quetes-quotidiennes{
        padding: 20px;
    }
    .quest{
        background: #f0f0f0;
        border-radius: 10px;
        margin:20px 0; 
        padding:20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .quest h3{
        margin:0;
    }

    .quest p{
        margin:10px 0;
    }

    .quest button{
        padding: 10px 20px;
        background-color: #333;
        color:white;
        border:none;
        border-radius:5px;
        cursor:pointer;
    }

    .quest button:disabled{
        background-color: #888;
        cursor: not-allowed;
    }

    .quest button:hover{
        background-color: #555;
    }

</style>