<template>
    <div class="profil">
        <h2>Profil utilisateur</h2>
        <p>Nom: {{user.email}}</p>
        <p>Pièce d'or: {{user.coins}}</p>
        <p>Progression: {{user.progression}}</p>
        <button @click="logout">Déconnexion</button>
    </div>
</template>

<script>
    import {getUser} from '../../api';

    export default{
        name:'Profil',
        data(){
            return{
                user:JSON.parse(localStorage.getItem('user')),
            };
        },
        async created(){
            try{
                const user= await getUser(this.user._id);
                this.user=user;
            }catch(error){
                console.error("Erreur de chargement du profil: ",error);
            }
        },
        methods:{
            logout(){
                localStorage.removeItem('user');
                this.$router.push('/');
            },
        },
    };
</script>

<style scoped>
    .profil{
        padding:20px;
    }
</style>