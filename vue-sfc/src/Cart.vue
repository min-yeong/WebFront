<template>
    <div id="app">
        <cart-header></cart-header>
        <shop-list v-bind:shopping-items="items"></shop-list>
        <cart-input v-on:add-item="addItem"></cart-input>
        <bought-list v-on:remove-item="removeItem" v-bind:shopping-items="items"></bought-list>
        <cart-footer></cart-footer>
    </div>
</template>

<script>
// 외부 모듈 불러오기
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import ShopList from "./components/ShopList";
import BoughtList from "./components/BoughtList";
import CartInput from "./components/CartInput";

export default {
    data: function() {
        return {
            items: [
                {name: "무", buy: false},
                {name: "배추", buy: false},
                {name: "쪽파", buy: true},
                {name: "고춧가루", buy: false},
            ]
        }
    },
    components: {
        "cart-header": CartHeader,
        "cart-footer": CartFooter,
        "shop-list": ShopList,
        "bought-list": BoughtList,
        "cart-input": CartInput
    },
    methods: {
        addItem: function(item) {
            this.items.push({
                name: item,
                buy: false
            });
        },
        removeItem: function(item) {
            var index = this.items.indexOf(item);
            if(index > -1) {
                // 삭제할 수 있다
                this.items.splice(index, 1);
            }
        }
    }
}
</script>

<style>
    li {
        list-style: none;
        height: 30px;
    }
    li button {
        float: right;
    }
    ul > li:nth-child(2n) {
        background-color: rgba(0, 0, 255, 0.5);
    }
    ul > li:nth-child(2n+1) {
        background-color: rgba(127, 127, 127, 0.2)
    }
</style>