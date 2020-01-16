<template>
	<div>
		<!-- logo -->
		<div class="logo">
			<img src="/logo.jpg" alt />
		</div>
		<!-- 菜单 -->
		<div>
			<nuxt-link to="/">首页</nuxt-link>
			<nuxt-link to="/post">旅游攻略</nuxt-link>
			<nuxt-link to="/hotel">酒店</nuxt-link>
			<nuxt-link to="/air">国内机票</nuxt-link>
		</div>
        <!-- 登录注册 -->
		<div>
			<nuxt-link to="/user/login">登录、注册</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">

</style>