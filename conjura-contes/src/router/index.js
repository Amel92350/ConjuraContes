import { createRouter, createWebHistory,VueRouter } from 'vue-router'
import Vue, { compileToFunction } from 'vue'
import { Accueil,Boutique,
  CarteDeProgression,
  JeuxEtQuiz,
  QuetesQuotidiennes,
  SectionsDapprentissage } from '@/views/public'
import Present from '@/components/Present.vue'
import PasseCompose from '@/components/PasseCompose.vue'
import Quiz from '@/components/Quiz.vue'
import CompletionTexte from '@/components/CompletionTexte.vue'
import Auth from '@/views/auth/Auth.vue'
import Profil from '@/views/public/Profil.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil,meta:{requiresAuth:true}  },
  { path: '/carte-de-progression', name: 'CarteDeProgression', component: CarteDeProgression,meta:{requiresAuth:true}  },
  { path: '/sections-daprentissage', name: 'SectionsDaprentissage', component: SectionsDapprentissage,meta:{requiresAuth:true}  },
  { path: '/jeux-et-quiz', name: 'JeuxEtQuiz', component: JeuxEtQuiz, meta:{requiresAuth:true} },
  { path: '/quetes-quotidiennes', name: 'QuetesQuotidiennes', component: QuetesQuotidiennes,meta:{requiresAuth:true} },
  { path: '/boutique', name: 'Boutique', component: Boutique,meta:{requiresAuth:true} },
  { path: '/apprentissage/present', name: 'Present', component: Present },
  { path: '/apprentissage/passe-compose', name: 'PasseCompose', component:PasseCompose },
  { path: '/jeux/quiz', name: 'Quiz', component: Quiz },
  { path: '/jeux/completion-texte', name: 'CompletionTexte', component: CompletionTexte },
  { path: '/profil',name:'Profil',component: Profil,meta:{requiresAuth:true}},
  { path: '/auth',name:"Auth",component: Auth },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next)=>{
  const loggedIn = !!localStorage.getItem('user');

  if(to.matched.some(record=>record.meta.requiresAuth)&&!loggedIn){
    console.log("next");
    next('/auth');
  }
  else{
    next();
  }
});

export default router
