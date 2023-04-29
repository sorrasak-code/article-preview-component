const shareButton = document.querySelector('#button')
const shareOptions = document.querySelector('.share-options')

shareButton.addEventListener('click', () =>{
  shareOptions.classList.toggle('active')
  shareButton.classList.toggle('active')
})