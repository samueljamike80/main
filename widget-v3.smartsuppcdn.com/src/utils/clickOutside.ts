import { getOwnerDocument } from './window'

export const clickOutside = (el: HTMLElement, callbackFn: () => void): { destroy: () => void } => {
	const doc = getOwnerDocument(el)

	const handleClick = (event: MouseEvent) => {
		el && !el.contains(event.target as HTMLElement) && !event.defaultPrevented && callbackFn()
	}

	doc.addEventListener('click', handleClick, true)
	return {
		destroy() {
			doc.removeEventListener('click', handleClick, true)
		},
	}
}
