function renderModal(){
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll('.abrirPost')
    
    for (let i = 0; i < buttons.length; i++){
        const button = buttons[i]
        
        button.addEventListener('click', () =>{
            const modalContent = creatModal(button.dataset.id)
            console.log(button.dataset.id)
           
           
            modal.innerHTML = ''
        
            modal.appendChild(modalGeral)

            
            modal.showModal()

            closemodal()
            
        })
        
    }
    modal.innerHTML = ''
}

function creatModal(id){
    const modal = document.querySelector('.modal__container')
    let elementUser = {}
    let elementPost = {}

    for(let i = 0; i < users.length; i++){
        if(users[i].id === Number(id)){
            elementUser = users[i]
        }
    }

    for(let i = 0; i < posts.length; i++){
        if(posts[i].user === Number(id)){
            elementPost = posts[i]
        }
    }

    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modaldiv')
    

    const modalImg = document.createElement('img')
    modalImg.classList.add('imgUsuario')
    modalImg.src = elementUser.img

    const modalContainer2 = document.createElement('div')
    

    const modalUsuario = document.createElement('h3')
    modalUsuario.innerText = elementUser.user

    const modalstak = document.createElement('p')
    modalstak.innerText = elementUser.stack

    const modalspan = document.createElement('span')
    modalspan.classList.add('fechaModal')
    modalspan.innerText = "X"

    const modalTitulo = document.createElement('h2')
    modalTitulo.innerText = elementPost.title
    modalTitulo.classList.add('title')

    const modalDescricao = document.createElement('p')
    modalDescricao.innerText = elementPost.text
    modalDescricao.classList.add("descricaoPost")

    modalContainer.append(modalImg, modalContainer2, modalspan)
    modalContainer2.append(modalUsuario, modalstak)
   
    modal.append(modalContainer,modalTitulo, modalDescricao)

    modalGeral = document.createElement('div')
    modalGeral.append(modalContainer,modalTitulo, modalDescricao)
    
    return modalGeral
    


}

function closemodal(){
    const modal = document.querySelector('.modal__container')
    const closeBtn = document.querySelector('.fechaModal')

    closeBtn.addEventListener('click', () => {
        modal.close()
    })
}

renderModal()