(function() {
    const snd = document.getElementById('snd')
    const ctl = document.getElementById('ctl')
    const bar = document.getElementById('bar')
    const num = document.getElementById('num')
    let run = true

    ctl.onclick = function(){
        ( run ) ? snd.play():snd.pause()
        run = !run
    }

    snd.ontimeupdate = function(){
        bar.value = ( snd.currentTime / snd.duration )
        num.innerHTML = Math.floor( 100 * bar.value) + '%'
    }
})()