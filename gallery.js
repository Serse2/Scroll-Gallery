const slider = document.querySelector('.items');
const items = document.querySelectorAll('.item')
//flag tester
let click = false;
let cordX;
let scrollLeft;


//click del mouse verso il basso
slider.addEventListener('mousedown', (e) => {
    click = true
    slider.classList.add('active')
    //salvo la posizione del cursone al momento del clicl premuto
    cordX = e.pageX
    //usando la proprietà scrollLeft rappresenta il numero di pixel che elementsono stati fatti scorrere dal bordo sinistro
    scrollLeft = slider.scrollLeft
    console.log(e)
});
//movimento del mouse
slider.addEventListener('mousemove', (e) => {
    //se click è false esci dalla funzione
    if(!click) return
    e.preventDefault()
    let x = e.pageX
    //ricalcolo il movimento del cursore sottraendo il primo valore all'evento del mousedow
    let walk = (x - cordX) * 2

    slider.scrollLeft = scrollLeft - walk
    console.log(slider.scrollLeft)
});
//rilascio del click del mouse
slider.addEventListener('mouseup', () => {
    click = false
    slider.classList.remove('active')
});
//uscita del mouse dal perimetro di slider
slider.addEventListener('mouseleave', () => {
    click = false
    slider.classList.remove('active')
});


function zoom(){
    this.classList.toggle('zoom')
}

items.forEach(item => item.addEventListener('click', zoom));