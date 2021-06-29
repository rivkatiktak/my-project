import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classthis:'',
    hours: [ { day: '1', hour: '1', id: '1_1',check:false,class:'color-green' },{ day: '1', hour: '2', id: '1_2' ,check:false,class:'color-green'},
    { day: '1', hour: '3', id: '1_3' ,check:false,class:'color-green'},{ day: '1', hour: '4', id: '1_4' ,check:false,class:'color-green'},
    { day: '1', hour: '5', id: '1_5' ,check:false,class:'color-green'},{ day: '1', hour: '6', id: '1_6' ,check:false,class:'color-green'},
  ]
  },
  mutations: {
    inputchange:function(state,$event) {
     // state.classthis= $event.target.checked?'color-red':'color-green';
     state.hours[$event].check=!state.hours[$event].check;
     state.hours[$event].class=state.hours[$event].check?'color-red':'color-green';
  }
},
  actions: {
  },
  modules: {
  },
})
