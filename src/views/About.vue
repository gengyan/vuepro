<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>count is: {{ counts }}</h1>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>

    <br/>
  </div>
</template>
<script>
// import { mapActions } from 'vuex'//mapGetters
export default {
  name: 'About',
  props: {
    msg: String
  },
  computed:{
	counts () {
		return this.$store.state.moduleA.count;
	},
  },
  methods:{
	increment(val){
		this.$store.dispatch('incrementAction', val);
	},
	decrement(val){
		this.$store.dispatch('decreatAction', val);
	},                      
  },
  mounted () {
	// this.dat = 1;
  }
}
</script>