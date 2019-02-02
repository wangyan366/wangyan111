import Vue from 'vue'//引入vue
import Vuex from 'vuex'//引入vuex
import axios from 'axios'
// import store from './store' //引入状态管理 store

Vue.use(Vuex); //使用 vuex
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0,
      height:"1112222",
      isShow:true,
      datalist:[]
    },
    actions:{
        getComingsoon(store){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3875545",
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457480728658654069100"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
 
   })
            .then(res=> {
                        // console.log(res.data.data.films,1222)
                        store.commit("setDatalist",res.data.data.films)
                        // this.total = res.data.data.total                        // console.log(this.datalist,3333)
                    
                                
                                    

            });

        }
    },
    mutations: {
      swiperHeight(state, payload){
        //   console.log(payload)
          this.state.count = payload
        //   console.log(this.state.count)
      },
      setDatalist(state, payload){
        state.datalist = payload
        // console.log(state.datalist,67)
        // console.log(payload,60)

      }
    }
  })


export default store  