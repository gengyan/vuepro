<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="fun">+1</button>
    <button @click="fun">-1</button>
  </div>
</template>

<script>
import { mapGetters,  } from 'vuex'//mapActions
export default {
  name: 'HelloWorld',
  props: {
    msg: Number
  },
  computed: mapGetters([
    'count',
  ]),
  methods : {
    fun : function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
