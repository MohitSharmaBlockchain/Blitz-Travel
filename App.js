var info_content = document.getElementById('information-section-h1')
var info_section = document.getElementById('information-section')
var timeline = document.getElementById('timeline')

var counter = 1;
var counter_2 = 4;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    document.getElementById('radio' + counter_2).checked = true;

    if (counter == 1) {
        timeline.style.width = '20%'
    }
    if(counter == 2){
        timeline.style.width = '50%'
    }
    if (counter == 3) {
        timeline.style.width = '80%'
    }

    if (counter_2 == 4) {
        info_content.textContent = "Book Flight Tickets"
        info_section.style.backgroundColor = "rgba(232, 90, 79, 0.6)"
    }
    if (counter_2 == 5) {
        info_content.textContent = "Compare Hotels"
        info_section.style.backgroundColor = "rgba(212, 129, 102, 0.6)"
    }
    if (counter_2 == 6) {
        info_content.textContent = "Tour Packages"
        info_section.style.backgroundColor = "rgba(186 ,18 ,0 , 0.6)"
    }


    counter++;
    counter_2++;
    if (counter > 3) {
        counter = 1;
    }
    if (counter_2 > 6) {
        counter_2 = 4;
    }
}, 7000);


document.getElementById('radio1').addEventListener('click', () => {
    timeline.style.width = '20%'
})
document.getElementById('radio2').addEventListener('click', () => {
    timeline.style.width = '50%'
})
document.getElementById('radio3').addEventListener('click', () => {
    timeline.style.width = '80%'
})

document.getElementById('radio4').addEventListener('click',()=>{
    info_content.textContent = "Book Flight Tickets"
    info_section.style.backgroundColor = "rgba(232, 90, 79, 0.6)"
})
document.getElementById('radio5').addEventListener('click', () => {
    info_content.textContent = "Compare Hotels"
    info_section.style.backgroundColor = "rgba(212, 129, 102, 0.6)"
})
document.getElementById('radio6').addEventListener('click', () => {
    info_content.textContent = "Tour Packages"
    info_section.style.backgroundColor = "rgba(186 ,18 ,0 , 0.6)"
})




