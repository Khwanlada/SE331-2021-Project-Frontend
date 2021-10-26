<template>
<!-- <header class="d-flex justify-content-center py-3"> -->
  <div v-if="GStore.event" style="margin:center">
    <!-- <div class="link container justify-content-between"> -->
      <router-link :to="{ name: 'EventDetails' }" class="btn" id="button">
        ꒰ Profile ꒱
      </router-link>
      <router-link :to="{ name: 'EventRegister' }" class="btn" id="button">
        ꒰ Hometown ꒱
      </router-link>
      <router-link :to="{ name: 'EventEdit' }" class="btn" id="button">
        ꒰ Status ꒱
      </router-link>
      <!-- <span v-if="isAdmin"> -->
      <router-link :to="{ name: 'Doccom' }" class="btn" id="button">
        ꒰ Doctor's comment ꒱
      </router-link>
       <!-- </span> -->
  </div>
    <router-view :event="GStore.event" />
  <!-- </div> -->
<!-- </header> -->
</template>

<script>
export default {
  inject: ['GStore']
}
</script>
<style>
.pcontent {
  min-height: 84vh;
}
.link a {
  color: #25726f;
}
.link a:hover {
  color: rgb(0, 0, 0);
}

#button {
  background-color: #ffffff00;
  border: 2px solid rgba(115, 189, 189, 0);
  color: black;
}
</style>
