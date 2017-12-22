const $cont = document.querySelector('body')
// const $third = document.querySelector('.third')
const $timeline = document.querySelector('.timeline')
const $fillBar = $timeline.querySelector('.fillBar')
const $value = document.querySelector('.value')

let position = 0

// const $altitude = document.querySelector('.altitude')

window.addEventListener('scroll', () => 
{
	// const contHeight = $cont.clientHeight - window.innerHeight
	//const contHeight = document.body.clientHeight - window.innerHeight
	const contHeight = $cont.clientHeight - window.innerHeight
  	//const scrollPos = window.pageYOffset
	const scrollPos = window.pageYOffset

	const tlWidth = $timeline.offsetWidth

	console.log(window.pageYOffset)
	//const position = (scrollPos / contHeight) * 100
	position = (scrollPos / contHeight)

	$fillBar.style.transform =`scaleX(${position})`

	const valueInv = (position)
	$value.innerHTML = Math.round(216000 - (position * 216000))


	// if(scrollPos >= $third.offsetTop)
	// {
	// 	$altitude.style.display = 'block'
	// }
	// else
	// {
	// 	$altitude.style.display = 'none'
	// }




	// const contHeightThird = $third.offsetHeight 
	// const scrollPos2 = window.pageYOffset - contHeightThird//ici -
	// const position2 = (scrollPos2 / contHeightThird) * 100
	// // console.log(scrollPos2, $third.offsetTop)
	// console.log(position2)
	
	// const valueAltitude = position2
    // // $altitude.innerHTML = Math.round(2160 - (position2 * 2160))
    // $altitude.innerHTML = Math.round((position2 * 497))
})

//Rocket

const $rocket = document.querySelector('.rocket')
const $block1 = $rocket.querySelector('.index-1')

const timeline = new TimelineMax()

window.timeline = timeline

//Pour eviter que l'animation se lance solo au départ
timeline.pause()

//Mettre ici toutes les animations selon blocks, QUE ICI
timeline.add(TweenLite.to($block1, 1, {opacity:1, yPercent: 100 }))

if(MediaQueryList = true){
	timeline.add(TweenLite.to($block1, 1, {opacity:1, yPercent: 150 }))	
}

// timeline.add()TweenLite.to()
// timeline.add(TweenLite.to($block1, 1, {scaleX: 0.5, scaleY: 0.5}))
// timeline.add(TweenLite.to($block1, 1, {scaleX: 0.5, scaleY: 0.5}))
// timeline.add(TweenLite.to($block0, 1, {scaleX: 0.5, scaleY: 0.5}))
// timeline2.add(TweenLite.to($block2, 1, {scaleX: 0.5, scaleY: 0.5, yPercent: -35}))
// timeline2.add(TweenLite.to($block3, 1, {scaleX: 0.5, scaleY: 0.5, yPercent: -35 }))
// timeline2.insert(TweenLite.to($block2, 1, {xPercent: 225, opacity: 1, scaleX: 0.5, scaleY: 0.5}))
// timeline2.insert(TweenLite.to($block3, 1, {xPercent: -225, opacity:1, scaleX: 0.5, scaleY: 0.5}))
// timeline2.add(TweenLite.to($block0, 1, {scaleX: 0.5, scaleY: 0.5, yPercent: -35}))
// timeline.add(TweenLite.to($block0, 1, {scaleX: 0.5, scaleY: 0.5}))
// timeline.add(TweenLite.to($block4, 1, {yPercent: -124.711, opacity:1, scaleX: 0.5, scaleY: 0.5}))

window.addEventListener('scroll', () => 
{
    //Ne pas toucher, pour avoir position de la page selon scroll
	const contHeight = $cont.clientHeight - window.innerHeight
    const scrollPos = window.pageYOffset

	position = (scrollPos / contHeight)
    console.log(position)
})


const loop = () =>
{
    window.requestAnimationFrame(loop)
    
    //progression de la timeline selon le scroll
    timeline.progress(position)
}
window.requestAnimationFrame(loop)


