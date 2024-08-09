import { reqDetail } from "@/api"
const state = {
    goodDetail: {}
};

const mutations = {

    REQDETAIL(state, goodDetail) {
        state.goodDetail = goodDetail
    }
};

const actions = {

    async getDetailInfo({ commit }, params) {
        console.log("请求参数",params);
        let result = await reqDetail(params);
        console.log("发送请求",result);
        commit("REQDETAIL", result.data.data)
    }
};

const getters = {
    spuSaleAttrList(state) {
        return state.goodDetail.spuSaleAttrList || []
    },
    skuInfo(state){
        return state.goodDetail.skuInfo || {}
    },
    categoryView(state){
        return state.goodDetail.categoryView || {}
    }

};


export default {
    state,
    mutations,
    actions,
    getters
}