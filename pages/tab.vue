<template>
	<div style="padding:100px;">
		<div class="button">
			<span v-for="(item, index) in ['新闻', '娱乐', '体育']"
            :key="index"
            @click="handleClick(index)"
            :class="{ active: current === index }">
                {{item}}
            </span>
		</div>

		<div v-if="current === 0">
			<ul>
				<li>伊朗打客机</li>
				<li>伊朗打客机</li>
				<li>伊朗打客机</li>
			</ul>
		</div>
		<div v-if="current === 1">
			<ul>
				<li>爱情公寓5开播了</li>
				<li>爱情公寓5开播了</li>
				<li>爱情公寓5开播了</li>
			</ul>
		</div>
		<div v-if="current === 2">
			<ul>
				<li>国足夺冠了</li>
				<li>国足夺冠了</li>
				<li>国足夺冠了</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            // 当前高亮的状态索引
            current: 0,
        }
    },

    methods: {
        handleClick(index){
            this.current = index;
        }
    }
};
</script>

<style scoped>
.button span{
    cursor: pointer;
    padding-right: 20px;
}

.active{
    color: red;
}
</style>