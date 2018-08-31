import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

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
				commit('setUserProfile', res.date())
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