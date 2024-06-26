function addStar(hotel){
    const temp = document.getElementById('star')
    const copy = temp.content.cloneNode(true)
    hotel.appendChild(copy)
}

function removeStars( ){
    const hotel = document.getElementById('hotel')
    while(hotel.childElementCount > 0)
        {
            hotel.removeChild(hotel.lastChild)
        }
}

