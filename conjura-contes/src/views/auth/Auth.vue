<template>
    <div class="auth">
        <h2>Connexion / Inscription</h2>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required/>
            <input v-model="password" type="password" placeholder="Mot de passe" required/>
            <button type="submit">Connexion</button>
        </form>
        <button @click="signup">Inscription</button>
    </div>

</template>

<script>
    import {loginUser,registerUser} from '../../api';

    export default{
        name: 'Auth',
        data(){
            return {
                email: '',
                password: '',
            };
        },
        methods:{
            async login(){
                try{
                    const user = await loginUser(this.email,this.password);
                    this.$router.push('/profil');
                    localStorage.setItem('user',JSON.stringify(user));
                }catch(error){
                    console.error('Erreur de connexion:',error);
                }
            },
            async signup(){
                try{
                    const user = await registerUser(this.email,this.password);
                    this.$router.push('/profil');
                    localStorage.setItem('user',JSON.stringify(user));
                }catch(error){
                    console.error('Erreur d\'inscription : ',error);
                }
            },
        },
    };
</script>

<style scoped>

    .auth{
        padding:20px;
    }

    form{
        display:flex;
        flex-direction: column;
    }

    input{
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        border:1px solid #ccc;
    }

    button{
        padding:10px 20px;
        background-color: #333;
        color:white;
        border:none;
        border-radius:5px;
        cursor:pointer;
    }

    button:hover{
        background-color: #555;
    }
</style>