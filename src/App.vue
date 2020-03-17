<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/index">Index</router-link>
		</div>
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">
					<el-row class="tac">
						<el-col>
							<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
								<el-submenu index="1">
									<template slot="title">
										<i class="el-icon-location"></i>
										<span>导航一</span>
									</template>
									
										<el-menu-item index="/app1">选项1</el-menu-item>
										<el-menu-item index="/app2">选项2</el-menu-item>
										<el-menu-item index="/app3">选项3</el-menu-item>
									
								</el-submenu>
								<el-menu-item index="/app4">
									<i class="el-icon-menu"></i>
									<span slot="title">导航二</span>
								</el-menu-item>
								<el-menu-item index="/app5" disabled>
									<i class="el-icon-document"></i>
									<span slot="title">导航三</span>
								</el-menu-item>
								<el-menu-item index="/app6">
									<i class="el-icon-setting"></i>
									<span slot="title">导航四</span>
								</el-menu-item>
							</el-menu>
						</el-col>

					</el-row>
				</el-aside>
				<el-container>
					<el-main>
						<router-view />
					</el-main>
					<el-footer>Footer</el-footer>
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
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
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

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
