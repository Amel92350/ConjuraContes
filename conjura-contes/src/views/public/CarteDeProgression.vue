<template>
    <div class="carte-de-progression">
        <h2>Votre Carte de progression</h2>
        <div class="progress-container">
            <div v-for="(level,index) in levels"
            :key="index"
            class="level"
            :class="{completed:level.completed}"
            >
                <div class="level-icon">
                    <img :src="level.icon" alt="Level Icon"/>
                </div>
                <div class="level-info">
                    <h3>{{level.title}}</h3>
                    <p>{{level.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"CarteDeProgression",
        data(){
            return{
                levels:[
                    {
                        title:'Niveau 1',
                        description:'Introduction aux contes',
                        icon: require('@/assets/niveau-1.png'),
                        completed:true,
                    },
                    {
                        title:'Niveau 2',
                        description:'Le Petit Chaperon Rouge',
                        icon: require('@/assets/niveau-2.png'),
                        completed:false,
                    },
                    
                ],
            };
        },
    };
</script>

<style scoped>

    .carte-de-progression{
        padding: 20px;
        text-align: center;
    }

    .progress-container{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        gap:20px;
    }

    .level{
        background: #f0f0f0;
        border-radius: 10px;
        width:100px;
        padding:10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .level.completed{
        background:#d4edda;
    }

    .level-icon img{
        width:50px;
        height:50px;
    }

    .level-info{
        margin-top:10px ;
    }

    .level h3{
        margin:0;
    }

    .level p{
        margin: 5px 0 0;
    }

</style>