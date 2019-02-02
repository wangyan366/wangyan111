<template>

  <div>
      <!-- 11{{this.$store.state.count}}   -->
      <!-- 2299999==={{this.datalist}}   -->
   <header v-show="this.isShow">
       <ul>
           <router-link tag="li" to="/city">请选择<span></span></router-link>
          
           <li>电影</li>
           <li></li>
       </ul>
   </header>

   <Swiper1></Swiper1>

   <div id="top-bar" :class="this.isShow?'bar3':''">
       <ul>
            <!-- <router-link tag="li" to="/films/comingSoon" activeClass="active1">正在热映</router-link>
            <router-link tag="li" to="/films/nowPlaying" activeClass="active1">即将上映</router-link> -->
            <li @click="comingSoon()" :class="this.isTure?'active1':''">正在热映</li>
            <li @click="nowPlaying()" :class="this.isTure?'':'active1'">即将上映</li>
            <div :class="this.isTure?'bar1':'bar2'">
                <span></span>
            </div>
       </ul>
   </div>
      <router-view/>
     <!-- films -->
  </div>
</template>

<script>
import Swiper1 from "./swiper1"
import store from '../store'
export default {
    data(){
        return{
        isTure:true,
        isShow:false,
        datalist:0
        }
        
    },
   components:{
      Swiper1,
      store
    },
	mounted(){
        
        window.onscroll = this.handleonscroll
    },
    methods:{
        handleonscroll(){
        // this.datalist =this.$store.state.count
        //  console.log(this.$store.state.count,4545) 
    //    scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
        if(document.documentElement.scrollTop>=this.$store.state.count){
          this.isShow = true   
        }else{
            this.isShow = false   
        }
	// console.log(document.documentElement.scrollTop);
        
      
        },
        comingSoon(){
       this.$router.push("/films/comingSoon");
    //    className="active1"	
       this.isTure=true
    //    console.log(this.isTure,22222)
    
    },
    nowPlaying(){
         this.$router.push("/films/nowPlaying");
        //  className="active1"
         this.isTure=false	
        //  console.log(this.isTure,1111)
    }
    }
    
 
}
</script>

<style scoped lang="scss">
header{
    // display: none;
     position: fixed;
     top: 0;
    z-index: 1000;
    width: 100%;
    ul{
    display: flex;
    border-bottom: 1px solid #ededed;
    background: #fff;
    line-height: .5rem;
    height: .5rem;
    width: 100%;
    li:nth-child(1){
      width: .8rem;
      text-align: center;
      position: relative;
      span{
            width: 0; 
            height: 0;
            border-width: 5px;
            border-style: solid;
            border-color:rgb(29, 29, 29) transparent transparent transparent;
            position: absolute;
            top: 50%;
            right: 10%;
           
      }
   
    }
    li:nth-child(2){
      flex: 1;
      text-align: center;
      font-size: 16px;
      
    }
    li:nth-child(3){
      width: .8rem;
      text-align: center;
   
    }

}
}
.active1{
    
    color: #F60;
}
#top-bar{
    ul{
    text-align: center;
    display: flex;
    border-bottom: 1px solid #ededed;
    background: #fff;
    line-height: .5rem;
    height: .5rem;
    width: 100%;
    position: relative;
    li{
        flex: 1;
    }
    }
    div{
        width: 50%;
        height: 1px;
        // background: #cc0;
        position: absolute;
        bottom: 0;
        left: 0;
        // position: relative;
        span{
         width:90px;
         height: 1px; 
         background: #f60;  
         display: block;
         margin: auto;
        }
    }

}
.bar1{
 transform: translateX(0%);
transition: all .5s ease-in-out 0s;

}
.bar2{
 transform: translateX(100%);
 transition: all .5s ease-in-out 0s;
// background: #f00;

}
.isshow{
    display:block;
}
.bar3{
    position:fixed;
    top: .5rem;
    width: 100%;
}
</style>
