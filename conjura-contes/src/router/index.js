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

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/carte-de-progression', name: 'CarteDeProgression', component: CarteDeProgression },
  { path: '/sections-daprentissage', name: 'SectionsDaprentissage', component: SectionsDapprentissage },
  { path: '/jeux-et-quiz', name: 'JeuxEtQuiz', component: JeuxEtQuiz },
  { path: '/quetes-quotidiennes', name: 'QuetesQuotidiennes', component: QuetesQuotidiennes },
  { path: '/boutique', name: 'Boutique', component: Boutique },
  { path: '/apprentissage/present', name: 'Present', component: Present },
  { path: '/apprentissage/passe-compose', name: 'PasseCompose', component:PasseCompose },
  { path: '/jeux/quiz', name: 'Quiz', component: Quiz },
  { path: '/jeux/completion-texte', name: 'CompletionTexte', component: CompletionTexte },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
