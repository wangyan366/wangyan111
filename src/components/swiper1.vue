<template>
     <div class="swiper">
         <!-- 22222222 -->
           <!-- Swiper -->
  <div class="swiper-container a">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="data in datalist" :key="data.bannerId">
          <img :src="data.imgUrl" alt="">
      </div>
    
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
   
  </div>
   </div>

</template>

<script>
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'
import axios from "axios"
export default {
 data(){
        return{
        datalist:[]
        }
        
    },
       mounted(){
        axios({
                url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=442935",
				method: 'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457480728658654069100"}',
					'X-Host': 'mall.cfg.common-banner'
				}
 
   })
  .then(res=> {
        // console.log(res.data.data,111)
        this.datalist = res.data.data
        // console.log(this.datalist,3333)

        this.$nextTick(()=>{
              var swiper = new Swiper('.a', {
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                });

                var s = document.querySelector(".swiper").offsetHeight
                // console.log(s)
                this.$store.commit("swiperHeight",s)
          })
});

   
       
    },
    beforMount(){
        
}
}

</script>

<style scoped lang="scss">
 .swiper-container {
      width: 100%;
      height: 100%;

    }
    .swiper-slide {
        img{
            width: 100%;
        }
      text-align: center;
      font-size: 18px;
      background: #fff;}
</style>
