<template>
    <div class="header-wrapper">
        <el-row type="flex" justify="space-between" align="middle" class="header">
            <!-- logo -->
            <div class="logo">
                <img src="/logo.jpg" alt />
            </div>
            <!-- 菜单 -->
            <el-row type="flex" class="navs">
                <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotel">酒店</nuxt-link>
                <nuxt-link to="/air">国内机票</nuxt-link>
            </el-row>
            <!-- 登录注册 -->
            <div>
                <nuxt-link to="/user/login">登录/注册</nuxt-link>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.header-wrapper{
    height: 60px;
    background: #fff;
}

.header{
    width: 1000px;
    height: 60px;
    margin: 0 auto;

    .logo{
        img{
            width: 156px;
            height:42px;
            display: block;
        }
    }

    .navs{
        flex: 1;

        a{
            display: block;
            height: 60px;
            line-height: 60px;
            box-sizing: border-box;
            padding: 0 20px;

            &:hover{
                border-bottom: 5px #409eff solid;
                color: #409eff;
            }
        }  
    }
}
</style>