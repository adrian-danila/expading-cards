const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('click',() => {
        // This line was addes after active
        removeActiveClasses()
        // -------
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}