(function (){
    const dlog = document.getElementById('dlog')
    const info = document.getElementById('info')
    const show = document.getElementById('show')
    const cncl = document.getElementById('cncl')
    const conf = document.getElementById('conf')

    show.addEventListener('click', function(){
        dlog.showModal()
        info.innerText = 'Modal Dialog Open'})

    cncl.addEventListener('click', function(){
        dlog.close()
        info.innerText = 'Modal Dialog Canceled'})

    conf.addEventListener('click', function(){
        dlog.close()
        info.innerText = 'Modal Dialog Confirmed'})
})()
    