<template>
	<div class="error" >{{ errorMsg }}</div>
</template>
<script>
	export default{
		data(){
			return{
				msg: ''
			}	
		},
		props: ['errorMsg'],
		ready: function(){
			var app = this
			setTimeout(function(){
				app.$dispatch('showError', {"error":false,"msg":''})
			},1000)
		},
		events: {
			setErrorMsg: function(errormsg){
		      //this.msg = 'tttttttt'
		    }
		}
	}
</script>