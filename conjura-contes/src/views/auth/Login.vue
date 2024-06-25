<template>
    <div>
        <h1>Connexion</h1>

        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_login">Username</label>
                <input type="text" id="user_login" v-model="user.login">
            </div>
            <div class="formGroup">
                <label for="password">Mot de passe</label>
                <input type="password" id="user_password" v-model="user.password"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Bouton</button>
            </div>
        </form>
    </div>
        
</template>

<script>
    export default{
        name:'Login',
        data(){
            return{
                user:{
                    login:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                console.log('stop form')
                console.log(this.user)
            }
        }
    }
</script>

<style>
    
</style>