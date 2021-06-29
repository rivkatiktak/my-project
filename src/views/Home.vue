<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div ><h3>Sunday</h3></div>
   <div v-for="(item,index) in hours" :key="item.id" class="day_div col-md-2" :item-data="item.id">
  <div class="row"> 
    <div>
      <h3 class="col-md-1">lesson {{item.hour}}</h3>
      </div>
       
    <cube :idhour="index"/></div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import cube from '@/components/cube.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    cube
  },
  computed: {
    ...mapGetters(['']),
    ...mapState(['classthis','hours'])
  },
  methods: {
    ...mapActions(['inputchange'])
  },
}
</script>
<style scoped>
.home{
  display: inline-grid;
}
.day_div{
  width:210px;
  display: list-item;
  list-style: none;
}
.row{
  display: -webkit-box;
}
.col-md-1{
  padding: 10px;
}
</style>
