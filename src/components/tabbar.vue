<template>
  <div>
     <ul>
         <router-link tag="li" to="/films" activeClass="active">电影</router-link>
         <router-link tag="li" to="/center" activeClass="active">影院</router-link>
         <router-link tag="li" to="/home" activeClass="active">我的</router-link>
         <!-- <li>电影</li>
         <li>影院</li>
         <li>我的</li> -->
     </ul>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped lang="scss">
ul{
    display: flex;
    background: #fff;
    border-top: 1px solid #ededed;
    height: .5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    li{
      flex: 1;
      text-align: center;
      line-height: .5rem;
    }
    
}
</style>
