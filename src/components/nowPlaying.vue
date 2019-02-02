<template>
  <div class="list">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false">
            <ul v-for="data in datalist" :key="data.filmId">
                    <li>
                        <img :src="data.poster" alt="">
                    </li>
                    <li>
                        <h1>{{data.name}}</h1>
                        <p>{{data.category}}</p>
                        <p>主演:{{data.director}}</p>
                        <p>内容:{{data.synopsis}}</p>
                    </li>
                </ul>
      </div>
      
    <!-- {{datalist}} -->
  </div>
</template>

<script>
import axios from "axios"
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
            datalist:[],
            loading:false,
            cur:1,
            total:0
        }
    },
 mounted(){
     Indicator.open('Loading...');
        axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=2522148",
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457480728658654069100"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
 
   })
  .then(res=> {
            // console.log(res.data.data.films,111)
            this.datalist = res.data.data.films
            this.total = res.data.data.total
            // console.log(this.datalist,3333)
         
                            Indicator.close();//
                        

});

   
       
    },
    methods:{
        loadMore(){
            if(this.total === this.datalist.length){
                
                return this.loading = true
            }
            // console.log("到底")
            this.cur++
             axios({
                url:`https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.cur}&pageSize=10&type=2&k=2522148`,
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457480728658654069100"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
 
   })
  .then(res=> {
            // console.log(res.data.data.films,111)
             this.datalist = [...this.datalist,...res.data.data.films]
            // console.log(this.datalist,3333)
           
                            Indicator.close();//
                            

});

        }
    }

   
    
}
</script>

<style scoped lang="scss">
.list{
    margin-bottom: 50px;
    ul{
        display: flex;
        
        margin: 5px;
        li:nth-child(1){
            img{
                    width:.8rem;
                }
                margin-right:.1rem;
        }
         
        li:nth-child(2){
            flex: 1;
            h1{
              // color: #0f0;
              line-height: .35rem;
              font-size: .2rem;
            }
            p{
              line-height: .2rem;
            }
            p:nth-child(4){
              width: 2rem;
              // color: #f08;
              line-height: .2rem;
              // background: #ff0;
              height: .2rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
        }
    }
    
}
</style>
