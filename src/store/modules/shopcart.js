import { reqShopCart } from '@/api'
import { SET_USERID } from '@/utils/USER_ID';
let state = {
    USER_ID: SET_USERID(),
    shopCartInfo: []
};
let mutations = {
    GETSHOPCART(state, payload) {
        state.shopCartInfo = payload;
    }
};
let actions = {
    // 获取用户购物车得数据
    async getShopCart({ commit }) {
        let result = await reqShopCart();
        console.log(result);
        
        if (result.data.code == 200) {
            commit('GETSHOPCART', result.data.data);
        }
    }
};
let getters = {
    CartInfo(state) {
        return state.shopCartInfo[0] || {};
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}