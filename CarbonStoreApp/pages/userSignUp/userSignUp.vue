<template>
	<view>
		<view class="img-a">
			<view class="t-b">
				注册，
				<br />
				欢迎加入碳中和商城
			</view>
		</view>
		<view class="login-view" style="">
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<text class="txt">手机号</text>
						<input type="number" name="phone" placeholder="请输入您的手机号" maxlength="11" v-model="phone" />
					</view>
					<view class="t-a">
						<text class="txt">密码</text>
						<input type="password" name="pwd" :maxlength="passwordMaxLength" placeholder="请输入您的密码"
							v-model="pwd" />
					</view>
					<view class="t-a">
						<text class="txt">验证码</text>
						<input type="number" name="code" placeholder="请输入手机验证码" v-model="code" />
						<button class="getCode" @click="getCodeButton()"
							:disabled="codeButtonDasible">{{codeButtonText}}</button>
					</view>
					<button @click="signUp()">注 册</button>
				</form>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
	} from 'vuex';
	import _ from "lodash";
	import {
		baseUrl
	} from '../../config/config';
	export default {
		data() {
			return {
				phone: '', //手机号码
				pwd: '', //密码
				code: "", //验证码
				codeButtonText: "发送验证码",
				codeButtonDasible: false,
				timer: 1
			};
		},
		mounted() {
			this.$store.dispatch("userLogin/getUserPasswordLength");
		},
		computed: {
			...mapState("userLogin", ["passwordMaxLength", "passwordMinLength"])
		},
		methods: {
			//当前登录按钮操作
			signUp: _.debounce(async function() {
				var that = this;
				if (!that.phone) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return;
				}
				if (!uni.$u.test.mobile(that.phone)) {
					uni.showToast({
						title: '请输入正确手机号',
						icon: 'none'
					});
					return;
				}
				if (!that.pwd) {
					uni.showToast({
						title: '请输入您的密码',
						icon: 'none'
					});
					return;
				}
				if (that.pwd.length < that.passwordMinLength || that.pwd.length > that.passwordMaxLength) {
					uni.showToast({
						title: `密码长度应为${that.passwordMinLength}-${that.passwordMaxLength}位英文、数字和.的混合体`,
						icon: "none"
					})
					return;
				}
				if (!that.code) {
					uni.showToast({
						title: "请输入验证码",
						icon: "none"
					})
					return;
				}
				uni.request({
					url: `${baseUrl}/user/login`,
					data: {
						"phone": this.phone,
						"password": this.pwd
					},
					success: res => {
						if (res.data.code == 200) {
							uni.showToast({
								title: "登陆成功！",
								icon: "checkbox-mark"
							})
							uni.setStorageSync("token", res.data.token);
							uni.reLaunch({
								url: "/pages/index/index"
							})
						} else {
							uni.showToast({
								title: res.data.message,
								icon: "none"
							})
						}
					}
				})

			}, 200),
			getCodeButton: _.debounce(async function() {
				var that = this;
				if (!that.phone) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return;
				}
				if (!uni.$u.test.mobile(that.phone)) {
					uni.showToast({
						title: '请输入正确手机号',
						icon: 'none'
					});
					return;
				}
				let a = 30;
				that.codeButtonDasible = true;
				that.codeButtonText = a + "S";
				uni.showToast({
					title: "验证码发送成功！",
					icon: "none"
				})
				that.timer = setInterval(function() {
					a--;
					if (a > 0) {
						that.codeButtonText = a + "S";
					} else {
						that.codeButtonText = "重新发送验证码";
						that.codeButtonDasible = false;
						clearInterval(that.timer);
					}
				}, 1000)
			}, 100)
		}
	};
</script>
<style lang="less">
	.txt {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
	}

	.img-a {
		width: 100%;
		height: 450rpx;
		background-image: url("../../static/head.png");
		background-size: 100%;
	}

	.reg {
		font-size: 28rpx;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
		background: #f5f6fa;
		color: #000000;
		text-align: center;
		margin-top: 30rpx;
	}

	.login-view {
		width: 100%;
		position: relative;
		margin-top: -120rpx;
		background-color: #ffffff;
		border-radius: 8% 8% 0% 0;
	}

	.t-login {
		width: 600rpx;
		margin: 0 auto;
		font-size: 28rpx;
		padding-top: 80rpx;
	}

	.t-login button {
		font-size: 28rpx;
		background: #2796f2;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
	}

	.t-login input {
		height: 90rpx;
		line-height: 90rpx;
		margin-bottom: 50rpx;
		border-bottom: 1px solid #e9e9e9;
		font-size: 28rpx;
	}

	.t-login .t-a {
		position: relative;
	}

	.t-b {
		text-align: left;
		font-size: 42rpx;
		color: #ffffff;
		padding: 130rpx 0 0 70rpx;
		font-weight: bold;
		line-height: 70rpx;
	}

	.t-login .t-c {
		position: absolute;
		right: 22rpx;
		top: 22rpx;
		background: #5677fc;
		color: #fff;
		font-size: 24rpx;
		border-radius: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
	}

	.t-login .t-d {
		text-align: center;
		color: #999;
		margin: 80rpx 0;
	}

	.t-login .t-e {
		text-align: center;
		width: 250rpx;
		margin: 80rpx auto 0;
	}

	.t-login .t-g {
		float: left;
		width: 50%;
	}

	.t-login .t-e image {
		width: 50rpx;
		height: 50rpx;
	}

	.t-login .t-f {
		text-align: center;
		margin: 150rpx 0 0 0;
		color: #666;
	}

	.t-login .t-f text {
		margin-left: 20rpx;
		color: #aaaaaa;
		font-size: 27rpx;
	}

	.t-login .uni-input-placeholder {
		color: #aeaeae;
	}

	.cl {
		zoom: 1;
	}

	.cl:after {
		clear: both;
		display: block;
		visibility: hidden;
		height: 0;
		content: '\20';
	}

	.getCode {
		position: absolute;
		z-index: 100000000;
		// background-color: #999 !important;
		right: 0;
		bottom: 15%;
		height: 60rpx !important;
		line-height: 60rpx !important;
		border-radius: 10rpx !important;
		font-size: 20rpx !important;
	}
</style>
