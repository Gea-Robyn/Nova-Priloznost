//// Modules ////

import $ from 'jquery';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Swiper from 'swiper/bundle'

import Expandable from './exports/expandable';
import Menu from './exports/menu'
import SetScreenHeight from './exports/screenHeight'
import scrollAnimations from './exports/scrollAnimations'
import { triggerOnWindowBreak } from './exports/helpers'
import { exampleProps } from './exports/swiperProps'

//// GSAP ////

gsap.registerPlugin(ScrollTrigger)
const scrollAnimations = new ScrollAnimations()

/* Refresh ScrollTrigger */
ScrollTrigger.refresh()

//// Menu ////

// const menu = new Menu()

//// Sliders ////

// const exampleSlider = new Swiper('.swiper-example-container', exampleProps)

//// DOC load ////

document.addEventListener('DOMContentLoaded', function() {
  /* Remove preload class to allow transitions */
  document.body.classList.remove('loading')
})
