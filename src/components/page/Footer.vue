<template>

	<footer class="footer">
	    <ul class="">
	      <li><a v-link="{path:'/home',activeClass:'active'}">首页 {{ footer }}</a></li>
	      <li><a v-link="'category'">分类</a></li>
	      <li><a v-link="'faxian'">发现</a></li>
	      <li><a v-link="'tuan'">两鲜团</a></li>
	      <li><a v-link="{path:'/account',activeClass:'active'}">我的两鲜</a></li>
	    </ul>
	  </footer>
</template>
<script>
	export default{
		props: ['hideError','showFooter333']
	}
</script>