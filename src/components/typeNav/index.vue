<template>
    <div class="type-nav">
        <div class="container">
            <!-- <h1>hhhh{{ categoryList }}</h1> -->
            <h2 class="all">全部商品分类</h2>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
            <transition name="sort">
                <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                            :class="{ cut: mouseIndex == index }">
                            <h3 @mouseenter="changeIndex(index)" @mouseleave="clearIndex">
                                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{
                                    c1.categoryName }}</a>
                                <div class="item-list clearfix"
                                    :style="{ display: mouseIndex == index ? 'block' : 'none' }">
                                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName"
                                                    :data-category2Id="c2.categoryId">{{
                                                        c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId">{{
                                                            c3.categoryName }}</a>
                                                </em>

                                            </dd>
                                        </dl>
                                    </div>

                                </div>
                            </h3>

                        </div>

                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import throttle from 'lodash/throttle'
export default {
    name: "typeNav",
    mounted() {
        this.$store.dispatch('categoryList')
        if (this.$route.path != "/home") {
            this.show = false
        }
    },
    data() {
        return {
            mouseIndex: -1,
            show: true
        }
    },
    computed: {
        ...mapState({
            categoryList: state =>
                state.home.categoryList.data
            // categoryList: (state) => {
            //     console.log("jisuan", state);
            // }
        })
    },
    methods: {
        // changeIndex(index) {
        //     this.mouseIndex = index
        // },
        changeIndex: throttle(function (index) {
            this.mouseIndex = index
            if (this.$route.path == "/search") {
                this.show = true
            }
        }, 500),


        clearIndex() {
            this.mouseIndex = -1;
            if (this.$route.path != "/home") {
                this.show = false
            }

        },
        goSearch(event) {
            let { categoryname, category1id, category2id, category3id } = event.target.dataset
            if (categoryname) {
                let localtion = { name: "search" };
                let query = { categoryName: categoryname };
                if (category1id) {
                    query.category1Id = category1id
                } else if (category2id) {
                    query.category2Id = category2id
                } else {
                    query.category3Id = category3id
                }
                localtion.query = query
                console.log("请求参数", localtion);
                this.$router.push(localtion)

            }
        }
    }

}
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        // display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }

                .cut {
                    background: red;
                }

                // .item:hover{
                //     background: red;
                // }
            }
        }

        // 过度动画样式
        // 过度动画开始状态（进入）
        .sort-enter {
            height: 0px;
        }

        // 过度动画结束状态(进入)
        .sort-enter-to {
            height: 461px;
        }

        // 定义动画时间。速率
        .sort-enter-active {
            transition: all .5s linear;
        }
    }
}
</style>
