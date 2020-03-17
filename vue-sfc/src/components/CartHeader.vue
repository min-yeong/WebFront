<template>
    <h1>{{ upperTitle }}</h1>
</template>

<script>
export default {
    data: function() {
        return {
            title: "Vue Cart"
        };
    },
    computed: {
        // 실제 모델 데이터를 필요할 때 계산해서 변경하는 고급 속성
        upperTitle: function() {
            return this.title.toUpperCase();
        }
    }
}
</script>

<style>
    h1 {
        font-size: 2.0em;
        color: blue;
    }
</style>