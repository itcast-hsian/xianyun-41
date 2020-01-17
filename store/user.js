// state用于存放sotre/user用户数据
export const state = {
    userInfo: {}
}

// 给state的数据赋值的方法，mutations第一个参数必须是state；
export const mutations = {
    // setUserInfo给userInfo赋值的
    setUserInfo(state, data){
        state.userInfo = data;
    }
};

// 类似组件中computed
// export const getter = {};

// 异步修改state的数据
// export const actions = {
// }
