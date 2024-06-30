<template>
    <div class="sections-dapprentissage">
        <h2>Apprenez les Conjugaisons</h2>
        <div v-for="(section,index) in sections" :key="index" class="section">
            <h3>{{section.title}}</h3>
            <p>{{section.description}}</p>
            <button @click="goToSection(section.path)">Commencer</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:"SectionsDapprentissage",
        data(){
            return{
                sections:[
                    {
                        title: 'Présent de l\'indicatif',
                        description: 'Apprenez les conjugaisons au présent de l\'indicatif.',
                        path:'/apprentissage/present',
                    },
                    {
                        title:'Passé Composé',
                        description: 'Apprenez les conjugaisons du passé composé.',
                        path:'/apprentissage/passe-compose',
                    },
                ],
            };
        },
        methods:{
            goToSection(path){
                this.$router.push(path);
            },
        },
    };

</script>

<style scoped>

    .sections-dapprentissage{
        padding: 20px;
        text-align: center;
    }

    .section{
        background: #f0f0f0;
        border-radius: 10px;
        margin:20px;
        padding:20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .section h3{
        margin:0;
    }

    .section p{
        margin: 10px 0 20px;
    }

    .section button{
        padding: 10px 20px;
        background-color: #333;
        color:white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .section button:hover{
        background-color: #555;
    }
</style>