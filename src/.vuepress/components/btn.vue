<template>
	<span class="btn btn-sm" :class="`btn-${variant}`">
		<slot></slot>
	</span>
</template>
<script lang="ts">
	export default {
		props: {
			variant: { type: String, default: "secondary" }
		}
	};
</script>
<style lang="scss">
	$secondary: #fff;
	$enable-shadows: true;

	@import "bootstrap/scss/_functions";
	@import "bootstrap/scss/_variables";
	@import "bootstrap/scss/_mixins";

	.btn {
		border-radius: 0.2rem;
		padding: 0 0.5rem;
		font-size: 0.875rem;
		display: inline-block;
		border: 1px solid transparent;
	}

	.btn-link {
		padding: 0;
	}

	.btn-item {
		$btn-color: #fff;
		$border: darken($btn-color, 14%);
		$shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);

		border-color: $border;
		@include box-shadow($shadow);
		color: color-yiq($btn-color);
	}

	@each $color, $btn-color in $theme-colors {
		.btn-#{$color} {
			$border: darken($btn-color, 14%);
			$shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);

			@include gradient-y($start-color: $btn-color, $end-color: darken($btn-color, 12%));
			border-color: $border;
			@include box-shadow($shadow);
			color: color-yiq($btn-color);
		}
	}

	/* .bb-btn {
		background: #eee;
		border: 1px solid #ddd;
		padding: 0 0.15em;
	} */
</style>