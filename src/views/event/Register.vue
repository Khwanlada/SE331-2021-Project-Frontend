<template>
  <div class="row justify-content-center mt-md-3 mt-sm-2">
    <div class="col-md-8 col-sm-12 p-4 mt-3" id="content">
      <h3>❝ {{ event.name }}  {{ event.surname }} ❞</h3>
      <div class="container mt-5">
        <p>
          <strong id="title">Hometown:</strong>{{ event.hometown }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['event'],
  inject: ['GStore'],
};
</script>

<style scoped>
#content {
  border: 1px solid #4d3e00;
  border-radius: 50px;
  background-color: #ffd900;
  margin-top: 15px;
  color: rgb(95, 87, 16);
}
#title {

  margin-right: 5px;
  border-radius: 2px;
  padding-left: 5px;
}
</style>
