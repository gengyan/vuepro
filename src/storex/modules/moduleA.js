export default {
    state:{
		count : 0,
    },
    mutations:{
		// 计数增加
		increment (state, data){
            state.count += data;
        },
		// 计数减少
        decrement(state, data){
			state.count -= data;
        }
    },
    actions:{
        incrementAction (context, pram) {
			// 模拟异步请求
            return new Promise(resolve=> {
                setTimeout(() => {
                    context.commit('increment', pram);
                    resolve();
                }, 500)
            });
        },
        
        decreatAction (context){
			context.commit('decrement', 1);
        }
    },
}