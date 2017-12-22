//Declare variable
const $cont = document.querySelector('body')
const $timeline = document.querySelector('.timeline')
const $fillBar = $timeline.querySelector('.fillBar')
const $value = document.querySelector('.value')

let position = 0

//Window listen scroll
window.addEventListener('scroll', () => 
{
	const contHeight = $cont.clientHeight - window.innerHeight
	const scrollPos = window.pageYOffset

	const tlWidth = $timeline.offsetWidth

	position = (scrollPos / contHeight)

	$fillBar.style.transform =`scaleX(${position})`

	const valueInv = (position)
	$value.innerHTML = Math.round(216000 - (position * 216000))


})

//Rocket

const $rocket = document.querySelector('.rocket')
const $block1 = $rocket.querySelector('.index-1')

//Start timeline
const timeline = new TimelineMax()

window.timeline = timeline

//For the animation don't start in solo
timeline.pause()

//Change animation since the timeline
timeline.add(TweenLite.to($block1, 1, {opacity:1, yPercent: 120 }))


const loop = () =>
{
    window.requestAnimationFrame(loop)
    
    //Progression in the timeline
    timeline.progress(position)
}
window.requestAnimationFrame(loop)


