(function () {
    const homs = document.getElementsByClassName('homonym')
    const temp = document.getElementById('list-template')

    if('attachShadow' in homs[0])
        {
            let i, copy, shadow

            for(i = 0;i<homs.length;i++){
                copy = temp.content.cloneNode(true)
                shadow = homs[i].attachShadow({mode:'closed'})
                shadow.appendChild(copy)
            }
        }
})()