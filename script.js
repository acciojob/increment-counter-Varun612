const counterEl=document.getElementById('counter')
const buttonEl=document.getElementById('incrementBtn')
let count=0
buttonEl.addEventListener('click',()=> {
	alert(count)
	count++
	counterEl.textContent=count
})
