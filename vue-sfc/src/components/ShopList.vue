<template>
    <div><h2>살 물건들</h2>
        <ul>
            <!--Loop를 돌면서 여러개의 item을 출력-->
            <!--item.buy가 false인(구매 안한)것만 출력-->
            <!--computed된 filteredItems를 사용-->
            <li v-for='(item, index) in filteredItems' v-bind:key="index">{{ item.name }}
                <button v-on:click="buyItem(item)">구매</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['shopping-items'], // 부모가 v-bind:shopping-items로 전달해준 객체
    methods: {
        buyItem: function(item) {
                console.log("구매아이템 : ", item);
                item.buy = true;
            }
        },
        // 모델을 미리 전처리해두고 필요할 때 호출하여 사용
    computed: {
        filteredItems: function() {
            // 부모로부터 전달받은 shoppingItems를 미리 필터링
            return this.shoppingItems.filter(function(item){
                // 필터링 조건을 true/false로 반환
                return !item.buy; // item.buy == false 인 것들만 필터링
            });
        }
    }
}
</script>

<style>

</style>