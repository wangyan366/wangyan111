<template>
  <div class="list">
      <div>
            <ul v-for="data in this.$store.state.datalist" :key="data.filmId" @click="handleClick(data.filmId)">
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
// import { Indicator } from 'mint-ui';
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
     if(this.$store.state.datalist.length === 0){
      this.$store.dispatch("getComingsoon")
      this.datalist = this.$store.state.datalist
     }else{
        // this.datalist = this.$store.state.datalist
     }
       
 
       
    },
  computed:{

        },
  methods:{
            handleClick(id){
                console.log("hhhh",id)
                this.$router.push(`/detail/${id}`)
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
