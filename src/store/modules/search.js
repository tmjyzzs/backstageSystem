import { reqGetSearchInfo } from "@/api"
const state = {
    searchList: []
}
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    async searchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        commit("SEARCHLIST", result.data.data)
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(){
        return state.searchList.attrsList || []
    }

};
export default {
    state,
    mutations,
    actions,
    getters
}