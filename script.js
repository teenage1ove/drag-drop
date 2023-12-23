const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)

}

function dragstart(event) { //  возникает в момент начала захвата элемента.
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragend(event) { // возникает в момент отпускания элемента.
    event.target.className = 'item';

}

function dragenter(event) { // наступает при заходе курсора перетаскиваемого элемента на принимающий блок.
    event.target.classList.add('hovered')
}

function dragover(event) { // наступает в процессе движения перемещаемого элемента внутри целевого.
    event.preventDefault()
}

function dragleave(event) { // наступает когда перетаскиваемый элемент покидает целевой блок.
    event.target.classList.remove('hovered')
    
}
function dragdrop(event) { // Событие drop наступает, когда мы отпускаем элемент при одном условии, что у события dragover должен быть прописан метод preventDefault()
    event.target.classList.remove('hovered')
    event.target.append(item) // перетаскивание блока item
}