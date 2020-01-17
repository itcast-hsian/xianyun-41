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
