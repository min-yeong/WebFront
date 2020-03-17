<template>
    <div>
        <h2>산 물건들</h2>
        <ul>
            <li v-for="(item, index) in filteredItems" v-bind:key="index">{{ item.name }}
            <button v-on:click="removeItem(item)">삭제</button>
            <button v-on:click="cancelItem(item)">구매취소</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['shopping-items'],
    methods: {
        removeItem: function(item) {
        console.log("삭제할 항목 : ", item);
        this.$emit("remove-item", item);
        },
        cancelItem: function(item) {
            console.log("구매 취소할 항목 : ", item);
            item.buy = false;
        }
    },
    computed: {
        filteredItems: function() {
            return this.shoppingItems.filter(function(item){
                return item.buy; // item.buy == tru 인거만 필터링
            }); 
        }
    }
}
</script>

<style>

</style>