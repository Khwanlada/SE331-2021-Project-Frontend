<template>
  <h1 style="color: #343A40;font-family:STIX Two Text; font-size:65px">WELCOME TO </h1>  
  <div class="Start">
       <div class="img">
         <img class="imgp" src="https://www.img.in.th/images/8a11a0b106ed2410df3fe77d703b7b43.png" alt="8a11a0b106ed2410df3fe77d703b7b43.png" border="0" width="325" height="325" />
        <!-- <img  class="imgp" src="https://i2.fpic.cc/file/img-b1/2021/08/14/IMG_2729.md.png" alt="IMG_2729.png" border="0" /> -->
      </div>
  <!-- <h1>WEBSITE</h1> -->
  <p class="subtit" style="color: #343A40; font-family:STIX Two Text; font-size:35px">This website is about the COVID-19 vaccine that will show who has been vaccinated.</p>
  <br><br><br><br>
      <button class="btstart btn btn-info" @click="GoHome"> Click to go to home page </button>
        <!-- <router-link :to="{ name: 'EventList' }">Home</router-link> -->
  </div>
  ⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  
  
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</template>⠀⠀⠀⠀⠀
<script>

export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    GoHome(){
      this.$router.push({
        name: 'EventList'
      })
    },
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

.subtit{
  color: white;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgp{
  max-width: 100%;
  height: auto!important;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.btstart{
    padding: 10px;
    border: none;
    background: #8dbfeb;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    font-size: inherit;
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 20%);
}
.btstart:hover{
    background: #5a92c2;
}
#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
