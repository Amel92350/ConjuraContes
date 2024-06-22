<template>
    <div class="register-container">
        <h2>Inscription</h2>
        <form @submit.prevent="register">
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" v-model="username" required>

            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="password" required>

            <label for="confirmPassword">Confirmer le mot de passe :</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>

            <button type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
export default{
    datat(){
        return{
            username:'',
            password:'',
            confirmPassword:''
        };
    },
    methods:{
        async register(){
            if(this.password!==this.confirmPassword){
                alert("Les mots de passes ne corresspondent pas.");
                return;
            }
            try{
                const response = await fetch('http://localhost:5000/api/auth/register',{
                    method:POST,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        username:this.username,
                        password:this.password
                    })
                });
                if (response.ok){
                    alert("Inscription réussie");
                    this.$router.push('/');
                }else{
                    alert("Erreur lors le de l\'inscription")
                }
            }catch(error){
                alert("Erreur lors de l\'inscription")
            }
        }
    }
}
</script>
