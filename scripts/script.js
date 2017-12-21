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



