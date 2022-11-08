// const modal_one = document.querySelector('.modal_one')
// const modal_two = document.querySelector('.modal_two')
const plus_one = document.querySelector('.plus_one')
const plus_two = document.querySelector('.plus_two')
const cover = document.querySelectorAll('.cover')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')



let percent = 0

  if (percent === 0) prev.classList.add('displayNone')
  next.onclick = () => { 
    if(percent === -200) return 
    percent -= 100
    cover.forEach(el => {
      el.style.left = `${percent}%`
    })
    if (percent !== 0) prev.classList.remove('displayNone')
    if (percent == -200) next.classList.add('displayNone')
  }
  
  prev.onclick = () => { 
    if(percent === 0) return 
    percent += 100
    cover.forEach(el => {
      el.style.left = percent + '%'
    })
    if (percent === 0) prev.classList.add('displayNone')
    if (percent !== -200) next.classList.remove('displayNone')
  }


const blue = document.querySelector('#blue')
const midnight = document.querySelector('#midnight')
const pink = document.querySelector('#pink')
const starlight = document.querySelector('#starlight')
const red = document.querySelector('#red')
const h4color = document.querySelector('.h4color')

const arrColors = [blue, midnight, pink, starlight, red]

function blabla(arr) {

  let col = h4color.innerHTML

  arr.forEach(el => {
      el.onclick = () => {

        arr.forEach((x) => {
          x === el ? x.style.border = `2px solid ${
            x === blue ? '#0b4268' : x === midnight ? '#42474d' : 
            x === pink ? '#fbe2dd' : x === starlight ? '#fbf7f4' : 'red'
          }` : x.style.border = ''
        })


        cover.forEach((y,i)=> {
          if (el === purple && i !== 0) {
            y.classList.add('displayNone')
            cover[0].classList.remove('displayNone')
            col = 'Color - Deep Purple'
          }
          if (el === gold && i !== 1) {
            y.classList.add('displayNone')
            cover[1].classList.remove('displayNone')
            col = 'Color - Gold'
          }
          if (el === silver && i !== 2) {
            y.classList.add('displayNone')
            cover[2].classList.remove('displayNone')
            col = 'Color - Silver'
          }
          if (el === black && i !== 4) {
            y.classList.add('displayNone')
            cover[4].classList.remove('displayNone')
            col = 'Color - Space Black'
          }
        })
      }

      
      el.onmouseenter = () => {
          if(el === blue) {
            h4color.innerHTML = 'Color - Deep Purple'
          }
          if(el === midnight) {
            h4color.innerHTML = 'Color - Gold'
          }
          if(el === pink) {
            h4color.innerHTML = 'Color - Silver'
          }
          if(el === starlight) {
            h4color.innerHTML = 'Color- Space Black'
          }
      }

      el.onmouseleave = () => {
        h4color.innerHTML = col
    }
  })
}

blabla(arrColors)

const closeBtn = document.querySelector('.closeBtn')
const modal_wrapper = document.querySelector('.modal_wrapper')
const see_modal = document.querySelector('#see_modal')

see_modal.onclick = () => modal_wrapper.classList.remove('displayNone')
closeBtn.onclick = () => modal_wrapper.classList.add('displayNone')