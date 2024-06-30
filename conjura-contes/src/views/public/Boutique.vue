<template>
    <div class="boutique">
        <h2>Boutique</h2>
        <div class="items">
            <div v-for="(item,index) in shopItems" :key="index" class="item">
                <h3>{{item.name}}</h3>
                <p>{{item.description}}</p>
                <p>Coût : {{item.price}} pièces d'or</p>
                <button @click="buyItem(index)" :disabled="item.purchased">Acheter</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Boutique",
        data(){
            return{
                shopItems:[
                    {
                        name:'Indice magique',
                        description: 'Révèle la première lettre de la réponse correcte.',
                        price:10,
                        purchase:false,
                    },
                    {
                        name:'Guide de la sorcière',
                        description : 'Fournit une règle de conjugaison utile.',
                        price:20,
                        purchased:false,
                    },
                    {
                        name: 'Thème de la Forêt Enchantée',
                        description: 'Change l\'arrière plan de l\'application.',
                        price:50,
                        purchase:false,
                    },
                    {
                        name:'Musique de la Belle au Bois dormant',
                        description:'Ajoute une musique de fond personnalisée.',
                        price:30,
                        purchase:false,
                    },
                ],
            };
        },
        methods:{
            buyItem(index){
                //Logique pour acheter un article
                this.shopItems[index].purchased=true;
                //Ajoutez ici la logique pour déduire les pièces d'or du compte utilisateur
            },
        },
    };

</script>

<style scoped>

    .boutique{
        padding: 20px;
    }

    .items{
        display:flex;
        flex-wrap:wrap;
        gap:20px;
    }

    .item{
        background:#f0f0f0;
        border-radius: 10px;
        width: 300px;
        padding:20px;
        box-shadow:0 4px 8px rgba(0,0,0,0.1);
    }

    .item h3{
        margin:0;
    }

    .itemp p{
        margin: 10px 0;
    }

    .item button{
        padding: 10px 20px;
        background-color: #333;
        color:white;
        border:none;
        border-radius: 5px;
        cursor:pointer;
    }

    .item button:disabled{
        background-color: #888;
        cursor: not-allowed;
    }

    .item button:hover{
        background-color: #555;
    }
</style>