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
        commit("SEARCHLIST", result.data)
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.data.goodsList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}