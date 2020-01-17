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
            <div v-if="!$store.state.user.userInfo.token">
                <nuxt-link to="/user/login">登录/注册</nuxt-link>
            </div>
            <el-dropdown v-else>
                <span class="el-dropdown-link">
                    <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar">
                    {{$store.state.user.userInfo.user.nickname}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </div>
</template>

<script>
export default {
    mounted(){
        // console.log(this.$store.state.user.name)
    }
};
</script>

<style scoped lang="less">
.header-wrapper{
    height: 60px;
    background: #fff;
    border-bottom:1px #eee solid;
    box-shadow: 0 3px 2px #f6f6f6;
    min-width: 1000px;
    position: relative;
    z-index:2;
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
        margin-left: 20px;
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

        .nuxt-link-exact-active{
            background: #409eff;
            color: #fff;

            &:hover{
                color: #fff;
            }
        }
    }
}

.el-dropdown-link{
    img{
        width:36px;
        height:36px;
        border-radius: 50px;
        vertical-align: middle
    }
}
</style>