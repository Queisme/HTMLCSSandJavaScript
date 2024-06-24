function toggle(){
    const chart = document.getElementById('chart')
    let hid = (chart.style.visibility !== 'visible')
    chart.style.visibility = (hid) ? 'visible' : 'hidden'
    chart.style.height = (hid) ? 'auto' : '0px'
}