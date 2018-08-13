// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBt8pqQSaSUGsIaVwObkGFswF-wAAXEo_0',
  authDomain: 'fir-auth-b8215.firebaseapp.com',
  databaseURL: 'https://fir-auth-b8215.firebaseio.com',
  projectId: 'fir-auth-b8215',
  storageBucket: 'fir-auth-b8215.appspot.com',
  messagingSenderId: '1051592714464'
}
firebase.initializeApp(config)

let app

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
