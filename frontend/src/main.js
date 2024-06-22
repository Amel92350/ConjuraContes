const Login = {
    template: `
      <div class="login-container">
        <h2>Connexion</h2>
        <form @submit.prevent="login">
          <label for="username">Nom d'utilisateur:</label>
          <input type="text" id="username" v-model="username" required>
          
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required>
          
          <button type="submit">Se connecter</button>
        </form>
        <p>Pas encore de compte ? <router-link to="/register">S'inscrire</router-link></p>
      </div>
    `,
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          });
          if (response.ok) {
            alert('Connexion réussie');
            this.$router.push('/home');
          } else {
            alert('Identifiants invalides');
          }
        } catch (error) {
          alert('Erreur lors de la connexion');
        }
      }
    }
  };
  
  const Register = {
    template: `
      <div class="register-container">
        <h2>Inscription</h2>
        <form @submit.prevent="register">
          <label for="username">Nom d'utilisateur:</label>
          <input type="text" id="username" v-model="username" required>
          
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required>
          
          <label for="confirmPassword">Confirmer le mot de passe:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    `,
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          alert('Les mots de passe ne correspondent pas.');
          return;
        }
        try {
          const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          });
          if (response.ok) {
            alert('Inscription réussie');
            this.$router.push('/');
          } else {
            alert('Erreur lors de l\'inscription');
          }
        } catch (error) {
          alert('Erreur lors de l\'inscription');
        }
      }
    }
  };
  
  const Home = {
    template: `
      <div class="home-container">
        <h2>Bienvenue à ConjuraContes!</h2>
        <p>Apprenez la conjugaison de manière ludique.</p>
      </div>
    `
  };
  
  const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home }
  ];
  
  const router = new VueRouter({
    routes
  });
  
  new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>'
  });
  