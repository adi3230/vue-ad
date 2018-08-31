import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fb = require('./firebaseConfig');

fb.auth.onAuthStateChanged(user => {
	if (user) {
			store.commit('setCurrentUser', user)
			store.dispatch('fetchUserProfile')
	}
})

export const store = new Vuex.Store({
    state: {
			currentUser: null,
			userProfile: {}
    },
    actions: {
				fetchUserProfile({commit, state}) {
					fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
					commit('setUserProfile', res.data())
				})
				/* eslint-disable */
				.catch(err => console.log(err))
			},
			clearData({ commit }) {
					commit('setCurrentUser', null)
					commit('setUserProfile', {})

			}
    }, 
    mutations: {
        setCurrentUser(state, val) {
				state.currentUser = val
			},
			setUserProfile(state, val) {
				state.userProfile = val
			}
    }
})