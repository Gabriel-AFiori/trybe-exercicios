let paizao = document.body
let insertH1 = document.createElement('h1')
insertH1.className = 'title'
insertH1.innerHTML = 'TrybeTrip - Agência de Viagens'
paizao.appendChild(insertH1)

let insertMain = document.createElement('main')
insertMain.className = 'main-content'
paizao.appendChild(insertMain)

let inserSection1 = document.createElement('section')
inserSection1.className = 'center-content'
insertMain.appendChild(inserSection1)

let insertP = document.createElement('p')
insertP.innerHTML = 'algum texto'
inserSection1.appendChild(insertP)

let inserSection2 = document.createElement('section')
inserSection2.className = 'left-content'
insertMain.appendChild(inserSection2)

let inserSection3 = document.createElement('section')
inserSection3.className = 'right-content'
insertMain.appendChild(inserSection3)

let insertImage = document.createElement('img')
insertImage.className = 'small-image'
insertImage.src = 'https://picsum.photos/200'
inserSection2.appendChild(insertImage)

let insertUl = document.createElement('ul')
inserSection3.appendChild(insertUl)

function li(array) {
    // 1 = um
    // 2 = dois
    // 3 = tres
    // 4 = quatro
    // 5 = cinco
    // 6 = seis
    // 7 = sete
    // 8 = oito
    // 9 = nove
    // 10 = dez
    for (let index = 0; index < array.length; index += 1) {
        let insertLi = document.createElement('li')
        insertLi.innerHTML = array[index];
        insertUl.appendChild(insertLi)
    }
}
li(['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito'])

function h3(quantity) {
    for (let index = 0; index < quantity; index += 1) {
        let insertH3 = document.createElement('h3')
        insertH3.className = 'description'
        insertMain.appendChild(insertH3)
    }  
}
h3(3)

insertMain.removeChild(inserSection2)
inserSection3.style.marginRight = 'auto'
inserSection1.style.backgroundColor = 'green'