
const title = document.querySelector('.header-description__title ')
let text = 'Ali Sayed’s <span>Web Designing</span> Project'
let text2 = 'Ali Sayed’s Web Designing Project'
let count = 0
let text1 = ''
let timer;

function a() {
	timer = setTimeout(function () {
		if (count < text2.length){
		text1 = text2[count]
		title.innerHTML += text1 
		count++
		a()
		}
		else {
			clearTimeout(timer)
			title.innerHTML = text
		}

	}, getRandom(getRandom(500 * 2.5)))
}

function getRandom(max) {
	return Math.floor(Math.random() * Math.floor(max))
}

a()
