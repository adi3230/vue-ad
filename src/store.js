import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fb = require('./firebaseConfig');

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