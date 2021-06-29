<template>
  <div v-bind:class="hours[idhour].class" class="cube">
   
      <input type="checkbox" value="true" name="thisButton" @change="inputchange(idhour)" 
      />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cube',
  props:{
     idhour :Number,
     classthis1 :String,
  },
  computed: {
    ...mapState(['classthis','hours'])
  },
  methods: {
      ...mapMutations(['inputchange'])
  }
  //components: {HelloWorld}
}
</script>
<style scoped>
.color-green{
  background-color:green;
}
.color-red{
  background-color:red;
}
.cube{
  width:120px;
  height: 120px;
}
.cube {
    margin:10px;
}
.cube input{
    margin-top:20px;
}
</style>