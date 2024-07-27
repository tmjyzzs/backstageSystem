import { getBaseCategoryList, reqGetBannerList, reqFloorList } from "@/api"
// state：仓库存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
// action：处理dispatch，可以书写自己的业务逻辑。也可以处理异步
const actions = {
    async categoryList({ commit }) {
        let result = await getBaseCategoryList();
        commit("CATEGORYLIST", result.data)
    },
    getBannerList({ commit }) {
        reqGetBannerList().then(res => {
            commit("BANNERLIST", res.data);
        });
    },
    async getReqFloorList({ commit }) {
        let floorList = await reqFloorList()
        commit("FLOORLIST", floorList.data.data)
    }
};
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}