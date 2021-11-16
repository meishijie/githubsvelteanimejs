<script>
	import {
		beforeUpdate,
		afterUpdate
	} from 'svelte';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

	let myswiper;
	let myAnimation1,myAnimation2;
	onMount(() => {
		if (browser) {
			myAnimation1 = anime({
				targets: ['.bg11','.bg12'],
				easing: 'linear',
				'-webkit-mask-position-y': 0,
				duration: function(el,i){return(i+1)*2000},
				delay:function(el,i){return i*1000},
				autoplay: false,
				loop: false,
				complete: function(anim) {
				}
			})
			Swiper.use([Autoplay, Navigation, Pagination]);
			myswiper = new Swiper('.swiper', {
				autoplay: false, //可选选项，自动滑动,
				direction: 'vertical',
				on: {
					init: function() {
						myAnimation1.play();
						console.log('swiper initialized');
					},
					transitionEnd: function() {
						console.log('end');
					}
				}
			});

		}
	});

	function handleClick () {
		myAnimation1.play();
	}

	afterUpdate(() => {
		// myAnimation.play();
	});
</script>
<svelte:head>
	<title>显示app名字</title>
	<meta charSet='UTF-8' />
	<meta
		content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
		name='viewport'
	/>
	<meta content='telephone=no, email=no' name='format-detection' />
	<meta content='yes' name='apple-mobile-web-app-capable' />
	<meta ame='apple-mobile-web-app-status-bar-style' content='black' />
	<meta content='no-transform' http-equiv='Cache-Control' />
	<meta content='no-siteapp' http-equiv='Cache-Control' />
</svelte:head>


<!-- 内容区 start -->

<div class='swiper'>
	<div class='swiper-wrapper' style='width: 100%;height: 100vh; textAlign:center'>
		<div class='swiper-slide' style='width: 100%;height: 100%;textAlign: center'>
			<div class='page0'>
				<img alt='favicon' class='bg1' src='/img/act1/page0-bg.gif' />
				<img alt='favicon' class='bg11' src='/img/act1/page0-1.png' />
				<img alt='favicon' class='bg12' src='/img/act1/page0-2.png' />
			</div>
		</div>
		<div class='swiper-slide' style='width:100%;height: 100%; textAlign: center'>
			<div class='page0'>
				<img alt='favicon' class='bg1' src='/img/act1/page0-bg.gif' />

			</div>
		</div>
		<div class='swiper-slide' style='width: 100%;height:100%; textAlign:center'>
			<div class='page0'></div>
		</div>
	</div>
	<!-- <div class="swiper-pagination"></div> -->
	<!-- <div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div> -->
</div>

<!-- 内容区 end -->
<style>
  .bg11 {
    position: absolute;
    width: 90%;
    top: 10%;
    left: 0;
    -webkit-mask: -webkit-gradient(
      linear,
      50% 70%,
      50% 100%,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    -webkit-mask-size: 100%;
    -webkit-mask-repeat: no-repeat no-repeat;
    -webkit-mask-position-y: -100px;
    -webkit-mask-clip: border;
  }
  .bg12 {
    position: absolute;
    width: 300px;
    top: 25%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    -webkit-mask: -webkit-gradient(
      linear,
      50% 50%,
      50% 100%,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    -webkit-mask-size: 100% 200%;
    -webkit-mask-repeat: no-repeat no-repeat;
    -webkit-mask-position-y: -1000px;
    -webkit-mask-clip: border;
  }
</style>
