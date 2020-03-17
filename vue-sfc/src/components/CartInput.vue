<template>
    <div>
        <p>{{ message }}</p>
        <input v-model="newItem"><button v-on:click="addItem">추가</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newItem: "", // cart-input > input 에 모델로 연결
            message: "" // newItem을 감시하고 있다가 변경되면 그에 상응하는 메세지를 저장
        }
    },
    methods: {
        addItem: function() {
            console.log("추가할 아이템: ", this.newItem);
            if(this.newItem.trim().length > 0) {
                // 아이템 추가 가능, 입력된 내용 newItem으로 새 상품을 생성하고 부모에게 리스트에 등록해 줄 것을 이벤트로 전달
                this.$emit("add-item", this.newItem);
                this.newItem = "";
            }
        }
    },
    watch: {
        newItem: function(item) {
            // 변경사항을 감시할 데이터 모델
            console.log("WATCH : ", item);
            // newItem (input 입력 내용)에 따라 length 체크해서 == 0 이면 상품을 입력하세요. > 0 이면 상품을 등록할 수 있습니다.
            if (item.trim().length > 0) {
                this.message = "상품을 등록하실 수 있습니다.";
            } else {
                this.message = "상품을 입력하세요.";
            }
        }
    }
}
</script>

<style>

</style>