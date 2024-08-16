import { reqDetail ,reqAddOrUpdateCart} from "@/api"
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
    },
    async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateCart(skuId, skuNum);
        console.log("购物车",result);
        if (result.data.code == 200) {
            //如果加入购物车成功,返回promise即为成功
            return "ok";
       } else {
            //如果加入购物车失败，返回失败的Promise
            return Promise.reject();
       }
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