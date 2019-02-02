<template>
  <div>
      <div class="top">
          <div class="return" v-on:click="back">
              ＜
          </div>
          <img :src="this.datalist.poster" alt="">
      </div>
      <ul>
          <li>{{this.datalist.name}}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      <div class="swiper">
            <p>演职人员</p>
      </div>
      <div class="pic">
            <p>剧照</p>
      </div>
      <footer>
          选座购票
      </footer>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
     return {
         datalist : []
     }
    },
    beforeMount(){
        console.log(this.$route.params,777)
    // this.$store.statr.isHid = false
   this.$store.commit("hideMaizuoTabbar","1111");

              axios({
                        url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=8075397`,
                        method: 'get',
                        headers:{
                            'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457480728658654069100"}',
                            'X-Host': 'mall.film-ticket.film.info'
                        }
                    }).then(res=> {
                        // console.log(res.data.data.film,1222)
                        // store.commit("setDatalist",res.data.data.films)
                        this.datalist = res.data.data.film

                       });

    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    beforeDestroy(){
			//修改store中state里isshow  true
			// this.$store.state.isShow = true
			this.$store.commit("showMaizuoTabbar");
		}
}
</script>

<style scoped lang="scss">
.top{
    .return{
        width: .3rem;
        height: .3rem;
        background: rgba($color: #ffffff, $alpha: .5);
        border-radius: 50%;
        text-align: center;
        line-height: .3rem;
        font-size: .25rem;
        position: fixed;
        top:.05rem;
        left: .05rem;
    }
    img{
        width: 100%;
    }
}
</style>
