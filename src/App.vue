<template>
	<div id="app">

		<el-container>
			<el-aside width="200px">

				<!-- <el-avatar shape="square" :size="100" fit="fit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar> -->


				<el-row class="tac">
					<el-col>
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
							<el-menu-item index="/index">
								<i class="el-icon-s-home"></i>
								<span slot="title">首页概览</span>
							</el-menu-item>

							<el-menu-item index="/order">
								<i class="el-icon-s-order"></i>
								<span slot="title">订单管理</span>
							</el-menu-item>
							<el-menu-item index="/setting">
								<i class="el-icon-menu"></i>
								<span slot="title">预约设置</span>
							</el-menu-item>
							<el-menu-item index="/usersetting">
								<i class="el-icon-user-solid"></i>
								<span slot="title">用户设置</span>
							</el-menu-item>


						</el-menu>
					</el-col>
				</el-row>

			</el-aside>
			<el-container>
				<el-container>
					<el-header height="250">Header</el-header>
					<el-main>
						<router-view />
					</el-main>

				</el-container>
			</el-container>
		</el-container>




	</div>
</template>


<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>


<style>
	body{
		margin: 0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.el-header {
		background-color: #ffffff;
		color: #333;
		text-align: center;
		line-height: 60px;
		/* overflow:auto; */
		/* position:fixed; */
	}


	.el-aside {
		background-color: #ffffff;
		color: #ffffff;
		overflow:auto;
		position:fixed;
		/* text-align: center; */
		/* line-height: 200px; */
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		overflow:auto;
		/* line-height: 160px; */
	}

	body>.el-container {
		margin-bottom: 0px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}

	/* .el-container:nth-child(5) .el-aside, */
	/* .el-container:nth-child(6) .el-aside { */
		/* line-height: 260px; */
	/* } */

	/* .el-container:nth-child(7) .el-aside { */
		/* line-height: 320px; */
	/* } */
</style>
