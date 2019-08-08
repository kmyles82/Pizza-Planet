import {firebaseAction} from 'vuexfire'

const state = {
        menuItems: []
    }

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
    setMenuRef: firebaseAction(({bindFirebaseRef}, {ref}) => {
        // this will unbind any previously bound ref to 'menuItem'
        bindFirebaseRef('menuItems', ref)
    })
}

export default {
    state,
    mutations,
    getters,
    actions
}