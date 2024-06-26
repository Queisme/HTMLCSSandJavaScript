(function (){
    const ctx = document.getElementById('canvas').getContext('2d')
    ctx.lineWidth = 2
    ctx.font = '5em Fantasy'
    
    ctx.fillStyle = 'Bisque'
    ctx.fillRect(0,0,550,150)
    ctx.strokeStyle = 'Red'
    ctx.strokeRect(0,0,550,150)

    ctx.fillStyle = 'Orange'
    ctx.fillText('HTML Canvas',30,100)
    ctx.strokeStyle = 'Black'
    ctx.strokeText('HTML Canvas',30,100)
})()
