import { cubicOut } from 'svelte/easing'

export type EasingFunction = (t: number) => number

export interface TransitionConfig {
	delay?: number
	duration?: number
	easing?: EasingFunction
	css?: (t: number, u: number) => string
	tick?: (t: number, u: number) => void
}

export interface FlyParams {
	delay?: number
	duration?: number
	easing?: EasingFunction
	x?: number | string
	y?: number | string
	opacity?: number
}

/*
 * Drop in replacement for built-in fly with support for units (particularly `%`)
 * derived from: https://github.com/sveltejs/svelte/pull/6050
 */
export function fly(
	node: Element,
	{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 }: FlyParams = {},
): TransitionConfig {
	const style = getComputedStyle(node)
	const targetOpacity = +style.opacity
	const transform = style.transform === 'none' ? '' : style.transform

	const od = targetOpacity * (1 - opacity)

	let xValue: number
	let xUnit = 'px'
	if (typeof x === 'string') {
		const xMatch = x.match(/([-\d.]+)(\D+)/)
		if (xMatch) {
			xValue = Number(xMatch[1])
			xUnit = xMatch[2]
		}
	} else {
		xValue = x
	}

	let yValue: number
	let yUnit = 'px'
	if (typeof y === 'string') {
		const yMatch = y.match(/([-\d.]+)(\D+)/)
		if (yMatch) {
			yValue = Number(yMatch[1])
			yUnit = yMatch[2]
		}
	} else {
		yValue = y
	}

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
				transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
				opacity: ${targetOpacity - od * u}`,
	}
}
