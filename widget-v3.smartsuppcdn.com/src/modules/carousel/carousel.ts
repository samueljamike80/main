import { testIds } from '@/constants'

import { isDraging } from './store'

interface PageInterface {
	[key: number]: number
}

interface CarouselOptions {
	selector?: string | HTMLElement
	easing?: string
	perPage?: number | PageInterface
	startIndex?: number
	draggable?: boolean
	multipleDrag?: boolean
	threshold?: number
	rtl?: boolean
	onInit?(): void
	onChange?(): void
}

const ITEMS_GAP = 16

export class Carousel {
	private config
	private selector: HTMLElement | null
	private selectorWidth: number
	public innerElements: Node[]
	public currentSlide: number
	public perPage = 0
	private sliderFrame: HTMLElement = document.createElement('div')
	private pointerDown = false
	private drag?: {
		startX: number
		endX: number
		startY: number
		letItGo: boolean | null
		preventClick: boolean
	}

	constructor(options: CarouselOptions) {
		// Merge defaults with user's settings
		this.config = this.mergeSettings(options)

		// Resolve selector's type
		this.selector =
			typeof this.config.selector === 'string' ? document.querySelector(this.config.selector) : this.config.selector

		// Early throw if selector doesn't exists
		if (!this.selector) {
			throw new Error('Something wrong with your selector 😭')
		}

		// update perPage number dependable of user value
		this.resolveSlidesNumber()

		// Create global references
		this.selectorWidth = this.selector.offsetWidth
		this.innerElements = [].slice.call(this.selector.children)
		this.currentSlide = Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage))

		// Build markup and apply required styling to elements
		this.init()
	}

	mergeSettings = (options: CarouselOptions) => {
		const settings = {
			selector: '.carousel',
			easing: 'ease-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			rtl: false,
			onInit: () => void 0,
			onChange: () => void 0,
		}

		return { ...settings, ...options }
	}

	attachEvents = () => {
		if (!this.selector) return

		// If element is draggable / swipable, add event handlers
		if (this.config.draggable) {
			// Keep track pointer hold and dragging distance
			this.pointerDown = false
			this.drag = {
				startX: 0,
				endX: 0,
				startY: 0,
				letItGo: null,
				preventClick: false,
			}

			// Touch events
			this.selector.addEventListener('touchstart', this.touchstartHandler)
			this.selector.addEventListener('touchend', this.touchendHandler)
			this.selector.addEventListener('touchmove', this.touchmoveHandler)

			// Mouse events
			this.selector.addEventListener('mousedown', this.mousedownHandler)
			this.selector.addEventListener('mouseup', this.mouseupHandler)
			this.selector.addEventListener('mouseleave', this.mouseleaveHandler)
			this.selector.addEventListener('mousemove', this.mousemoveHandler)

			// Click
			this.selector.addEventListener('click', this.clickHandler)
		}
	}

	detachEvents = () => {
		if (!this.selector) return
		this.selector.removeEventListener('touchstart', this.touchstartHandler)
		this.selector.removeEventListener('touchend', this.touchendHandler)
		this.selector.removeEventListener('touchmove', this.touchmoveHandler)
		this.selector.removeEventListener('mousedown', this.mousedownHandler)
		this.selector.removeEventListener('mouseup', this.mouseupHandler)
		this.selector.removeEventListener('mouseleave', this.mouseleaveHandler)
		this.selector.removeEventListener('mousemove', this.mousemoveHandler)
		this.selector.removeEventListener('click', this.clickHandler)
	}

	init = () => {
		if (!this.selector) return
		this.attachEvents()

		// rtl or ltr
		this.selector.style.direction = this.config.rtl ? 'rtl' : 'ltr'

		// build a frame and slide to a currentSlide
		this.buildSliderFrame()

		this.config.onInit.call(this)
	}

	buildSliderFrame = () => {
		if (!this.selector) return
		const widthItem = this.selectorWidth / this.perPage

		// Create frame and apply styling
		this.sliderFrame.style.width = `${widthItem * this.innerElements.length}px`
		this.sliderFrame.style.display = 'flex'
		this.sliderFrame.style.gap = `${ITEMS_GAP}px`
		this.enableTransition()
		this.sliderFrame.setAttribute('data-testid', testIds.productCardCarousel)

		if (this.config.draggable) {
			this.selector.style.cursor = '-webkit-grab'
		}

		// Create a document fragment to put slides into it
		const docFragment = document.createDocumentFragment()

		for (let i = 0; i < this.innerElements.length; i++) {
			const element = this.buildSliderFrameItem(this.innerElements[i])
			docFragment.appendChild(element)
		}

		// Add fragment to the frame
		this.sliderFrame.appendChild(docFragment)

		// Clear selector (just in case something is there) and insert a frame
		this.selector.innerHTML = ''
		this.selector.appendChild(this.sliderFrame)

		// Go to currently active slide after initial build
		this.slideToCurrent()
	}

	buildSliderFrameItem = (elm: Node) => {
		const elementContainer = document.createElement('div')
		elementContainer.style.display = `flex`
		elementContainer.style.cssFloat = this.config.rtl ? 'right' : 'left'
		elementContainer.style.float = this.config.rtl ? 'right' : 'left'
		elementContainer.style.width = `${100 / this.innerElements.length}%`
		elementContainer.appendChild(elm)
		return elementContainer
	}

	resolveSlidesNumber = () => {
		if (typeof this.config.perPage === 'number') {
			this.perPage = this.config.perPage
		} else if (typeof this.config.perPage === 'object') {
			this.perPage = 1
			for (const viewport in this.config.perPage) {
				if (window.innerWidth >= parseInt(viewport)) {
					this.perPage = this.config.perPage[viewport]
				}
			}
		}
	}

	prev = (howManySlides = 1, callback?: () => void) => {
		// early return when there is nothing to slide
		if (this.innerElements.length <= this.perPage) {
			return
		}

		const beforeChange = this.currentSlide

		this.currentSlide = Math.max(this.currentSlide - howManySlides, 0)

		if (beforeChange !== this.currentSlide) {
			this.slideToCurrent()
			this.config.onChange.call(this)
			if (callback) {
				callback.call(this)
			}
		}
	}

	next = (howManySlides = 1, callback?: () => void) => {
		// early return when there is nothing to slide
		if (this.innerElements.length <= this.perPage) {
			return
		}

		const beforeChange = this.currentSlide

		this.currentSlide = Math.min(this.currentSlide + howManySlides, this.innerElements.length - this.perPage)

		if (beforeChange !== this.currentSlide) {
			this.slideToCurrent()
			this.config.onChange.call(this)
			if (callback) {
				callback.call(this)
			}
		}
	}

	disableTransition = () => {
		this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`
	}

	enableTransition = () => {
		this.sliderFrame.style.transition = `all 200ms ${this.config.easing}`
	}

	goTo = (index: number, callback?: () => void) => {
		if (this.innerElements.length <= this.perPage) {
			return
		}
		const beforeChange = this.currentSlide
		this.currentSlide = Math.min(Math.max(index, 0), this.innerElements.length - this.perPage)
		if (beforeChange !== this.currentSlide) {
			this.slideToCurrent()
			this.config.onChange.call(this)
			if (callback) {
				callback.call(this)
			}
		}
	}

	slideToCurrent = (enableTransition?: boolean) => {
		const offset =
			(this.config.rtl ? 1 : -1) * this.currentSlide * (this.selectorWidth / this.perPage + ITEMS_GAP / this.perPage)

		if (enableTransition) {
			// This one is tricky, I know but this is a perfect explanation:
			// https://youtu.be/cCOL7MC4Pl0
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					this.enableTransition()
					this.sliderFrame.style.transform = `translate3d(${offset}px, 0, 0)`
				})
			})
		} else {
			this.sliderFrame.style.transform = `translate3d(${offset}px, 0, 0)`
		}
	}

	updateAfterDrag = () => {
		if (!this.drag) return
		const movement = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX)
		const movementDistance = Math.abs(movement)
		const howManySliderToSlide = this.config.multipleDrag
			? Math.ceil(movementDistance / (this.selectorWidth / this.perPage))
			: 1

		const slideToNegativeClone = movement > 0 && this.currentSlide - howManySliderToSlide < 0
		const slideToPositiveClone =
			movement < 0 && this.currentSlide + howManySliderToSlide > this.innerElements.length - this.perPage

		if (movement > 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {
			this.prev(howManySliderToSlide)
		} else if (movement < 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {
			this.next(howManySliderToSlide)
		}
		this.slideToCurrent(slideToNegativeClone || slideToPositiveClone)
	}

	clearDrag = () => {
		this.drag = {
			startX: 0,
			endX: 0,
			startY: 0,
			letItGo: null,
			preventClick: this.drag?.preventClick || false,
		}
	}

	touchstartHandler = (e: TouchEvent) => {
		// Prevent dragging / swiping on inputs, selects and textareas
		const ignore = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf((e.target as Element)?.nodeName) !== -1
		if (ignore) {
			return
		}

		e.stopPropagation()
		this.pointerDown = true
		if (!this.drag) return
		this.drag.startX = e.touches[0].pageX
		this.drag.startY = e.touches[0].pageY
	}

	touchendHandler = (e: TouchEvent) => {
		e.stopPropagation()
		this.pointerDown = false
		this.enableTransition()
		if (this.drag?.endX) {
			this.updateAfterDrag()
		}
		this.clearDrag()
	}

	touchmoveHandler = (e: TouchEvent) => {
		e.stopPropagation()
		if (!this.drag) return

		if (this.drag.letItGo === null) {
			this.drag.letItGo =
				Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)
		}

		if (this.pointerDown && this.drag.letItGo) {
			e.preventDefault()
			this.drag.endX = e.touches[0].pageX
			this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`
			this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`

			const currentOffset = this.currentSlide * (this.selectorWidth / this.perPage)
			const dragOffset = this.drag.endX - this.drag.startX
			const offset = this.config.rtl ? currentOffset + dragOffset : currentOffset - dragOffset
			this.sliderFrame.style.transform = `translate3d(${(this.config.rtl ? 1 : -1) * offset}px, 0, 0)`
		}
	}

	mousedownHandler = (e: MouseEvent) => {
		// Prevent dragging / swiping on inputs, selects and textareas
		const ignore = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf((e.target as Element)?.nodeName) !== -1
		if (ignore) {
			return
		}

		e.preventDefault()
		e.stopPropagation()
		this.pointerDown = true
		if (!this.drag) return
		this.drag.startX = e.pageX
	}

	mouseupHandler = (e: MouseEvent) => {
		if (!this.selector) return
		e.stopPropagation()
		this.pointerDown = false
		this.selector.style.cursor = '-webkit-grab'
		this.enableTransition()
		if (this.drag?.endX) {
			this.updateAfterDrag()
		}
		this.clearDrag()
	}

	mousemoveHandler = (e: MouseEvent) => {
		if (!this.selector) return
		e.preventDefault()
		if (this.pointerDown && this.drag) {
			isDraging.set(true)
			this.drag.preventClick = true

			this.drag.endX = e.pageX
			this.selector.style.cursor = '-webkit-grabbing'
			this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`
			this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`

			const currentOffset = this.currentSlide * (this.selectorWidth / this.perPage)
			const dragOffset = this.drag.endX - this.drag.startX
			const offset = this.config.rtl ? currentOffset + dragOffset : currentOffset - dragOffset
			this.sliderFrame.style.transform = `translate3d(${(this.config.rtl ? 1 : -1) * offset}px, 0, 0)`
		}
	}

	mouseleaveHandler = (e: MouseEvent) => {
		if (this.pointerDown && this.selector && this.drag) {
			this.pointerDown = false
			this.selector.style.cursor = '-webkit-grab'
			this.drag.endX = e.pageX
			this.drag.preventClick = false
			this.enableTransition()
			this.updateAfterDrag()
			this.clearDrag()
		}
	}

	/**
	 * click event handler
	 */
	clickHandler = (e: Event) => {
		if (!this.drag) return
		// if the dragged element is a link
		// prevent browsers from folowing the link
		if (this.drag.preventClick) {
			e.preventDefault()
		}
		this.drag.preventClick = false
		isDraging.set(false)
	}

	remove = (index: number, callback?: () => void) => {
		if (index < 0 || index >= this.innerElements.length) {
			throw new Error("Item to remove doesn't exist 😭")
		}

		// Shift sliderFrame back by one item when:
		// 1. Item with lower index than currenSlide is removed.
		// 2. Last item is removed.
		const lowerIndex = index < this.currentSlide
		const lastItem = this.currentSlide + this.perPage - 1 === index

		if (lowerIndex || lastItem) {
			this.currentSlide--
		}

		this.innerElements.splice(index, 1)

		// build a frame and slide to a currentSlide
		this.buildSliderFrame()

		if (callback) {
			callback.call(this)
		}
	}

	insert = (item: HTMLElement, index: number, callback?: () => void) => {
		if (index < 0 || index > this.innerElements.length + 1) {
			throw new Error('Unable to inset it at this index 😭')
		}
		if (this.innerElements.indexOf(item) !== -1) {
			throw new Error('The same item in a carousel? Really? Nope 😭')
		}

		// Avoid shifting content
		const shouldItShift = index <= this.currentSlide && this.currentSlide > 0 && this.innerElements.length
		this.currentSlide = shouldItShift ? this.currentSlide + 1 : this.currentSlide

		this.innerElements.splice(index, 0, item)

		// build a frame and slide to a currentSlide
		this.buildSliderFrame()

		if (callback) {
			callback.call(this)
		}
	}

	prepend = (item: HTMLElement, callback?: () => void) => {
		this.insert(item, 0)
		if (callback) {
			callback.call(this)
		}
	}

	append = (item: HTMLElement, callback?: () => void) => {
		this.insert(item, this.innerElements.length + 1)
		if (callback) {
			callback.call(this)
		}
	}

	destroy = (restoreMarkup = false, callback?: () => void) => {
		if (!this.selector) return
		this.detachEvents()

		this.selector.style.cursor = 'auto'

		if (restoreMarkup) {
			const slides = document.createDocumentFragment()
			for (let i = 0; i < this.innerElements.length; i++) {
				slides.appendChild(this.innerElements[i])
			}
			this.selector.innerHTML = ''
			this.selector.appendChild(slides)
			this.selector.removeAttribute('style')
		}

		if (callback) {
			callback.call(this)
		}
	}
}
