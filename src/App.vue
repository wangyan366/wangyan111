<template>
  <div id="app">
     <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar"
export default {
    components:{
      Tabbar
    }
}
</script>

<style>
/*公共样式--开始*/
html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
    margin: 0;
    padding: 0;
}
*{box-sizing: border-box;}
body {
    font-family: "Microsoft YaHei";
    font-size:14px;
    color:#333;
}
html {
  font-size: 26.67vw
}
h1, h2, h3, h4, h5, h6{font-weight:normal;}
ul,ol {
    list-style: none;
}

img {
    border: none;
    vertical-align: middle;
}

a {
    text-decoration: none;
    color: #232323;
}
@media screen and (min-width:321px) and (max-width:375px){body{font-size:11px}}
@media screen and (min-width:376px) and (max-width:414px){body{font-size:12px}}
@media screen and (min-width:415px) and (max-width:639px){body{font-size:15px}}
@media screen and (min-width:640px) and (max-width:719px){body{font-size:20px}}
@media screen and (min-width:720px) and (max-width:749px){body{font-size:22.5px}}
@media screen and (min-width:750px) and (max-width:799px){body{font-size:23.5px}}
@media screen and (min-width:800px){body{font-size:25px}}
.active{
     color: #F60;
    }
</style>
