const items = [
    {name: 'Kho Báu' , src: 'assets/images/item_qua/event-khobau.png'},
    {name: 'Thẻ Gosu 20K' , src: 'assets/images/item_qua/event-gosu-20k.png'},
    {name: 'Giftcode' , src: 'assets/images/item_qua/event-code.png'},
    {name: 'Giftcode' , src: 'assets/images/item_qua/event-code.png'},
    {name: 'Thẻ Gosu 50K' , src: 'assets/images/item_qua/event-gosu-50k.png'},
    {name: 'Huyền Thoại' , src: 'assets/images/item_qua/event-huyen-thoai.png'},
    {name: 'Thẻ Gosu 50K' , src: 'assets/images/item_qua/event-gosu-50k.png'},
    {name: 'Giftcode' , src: 'assets/images/item_qua/event-code.png'},
    {name: 'Giftcode' , src: 'assets/images/item_qua/event-code.png'},
    {name: 'Thẻ Gosu 20K' , src: 'assets/images/item_qua/event-gosu-20k.png'},
]
document.getElementById('bg-quay').addEventListener('click',event);
document.getElementById('img2').addEventListener('click',event);
document.getElementById('popup').addEventListener('click',removePopupItem);
document.getElementById('bt-play').addEventListener('click',activeVideo);
document.getElementById('copy').addEventListener('click',fcopy);

let soClick = 0;
let choquay = true;
function event(){
    if(choquay){
        soClick++;
        let img1 = document.getElementById('img1');
        let hieuUngVongQuay = 3600 *soClick;
        randomViTriStop =  Math.floor(Math.random() * 10);
        let quayso = -randomViTriStop *36 + hieuUngVongQuay + 18;
        img1.style.transform = `rotate(${quayso}deg)`;
        if (randomViTriStop ==1 || randomViTriStop ==4 ||randomViTriStop ==6 ||randomViTriStop ==9) {
            document.querySelector('.item-render-image').classList.add('update');
        }else{
            document.querySelector('.item-render-image').classList.remove('update');
        }
        choquay = false;
        setTimeout(() =>{
            render(randomViTriStop);
            activePopupItem();
            addHistory();
            choquay = true;
        },3500);
    }
}

function fcopy(){
    let inputCopy = document.getElementById('inputCopy');
    inputCopy.select();
    document.execCommand("copy");
}

function addpopup(){
    document.getElementById('popup').classList.add('show');
}
function removepopup(){
    document.getElementById('popup').classList.remove('show');
    removeVideo();
    fremoveEventPopup();
}
function showEvent(){
    document.querySelector('.popup-gift').classList.add('active');
}
function removeEvent(){
    document.querySelector('.popup-gift').classList.remove('active');
}
function addVideo(){
    document.getElementById('video').classList.add('show');
    document.getElementById('video').src = 'assets/video/Vua-Hải-Tặc-H5.mp4';
}
function removeVideo(){
    document.getElementById('video').classList.remove('show');
}
function fremoveEventPopup(){
    let eventPopup = document.getElementsByClassName('event-popup');
    for (let index = 0; index < eventPopup.length; index++) {
        eventPopup[index].classList.remove('active');
    }
}

function activePopupItem(){
    addpopup();
    showEvent();
}
function activeVideo(){
    addpopup();
    addVideo();
}
function removePopupItem(){
    removepopup();
    removeEvent();
    // removeEventPopup();

}
// render item popup event
function render(i){
    document.querySelector('.item-render-image').src = items[i].src;
    document.querySelector('.item-render-name').innerHTML = items[i].name;
}

function addHistory(){
    let day = new Date();
    let stt = document.querySelectorAll('#add-history tr').length +1;
    if (stt < 10) {
        stt = `0${stt}`;
    }
    let renderDay;
    if(day.getMonth()+1 < 10 && day.getMonth()+1 < 10){
        renderDay = `0${day.getDay()}/0${day.getMonth()+1}/${day.getFullYear()}`;
    }else if (day.getDay() < 10) {
        renderDay = `0${day.getDay()}/${day.getMonth()+1}/${day.getFullYear()}`;
    }else if(day.getMonth()+1 < 10 ){
        renderDay = `${day.getDay()}/0${day.getMonth()+1}/${day.getFullYear()}`;
    }
    let renderFullDay = `${day.getHours()}:${day.getMinutes()} ngày ${renderDay}`;
    document.getElementById('add-history').innerHTML += `<tr>
        <td>${stt}</td>
        <td>Giftcode: ABASDCXZVCZXDFSA</td>
        <td>${renderFullDay}</td>
    </tr>`;
}

// những class exit-popup khi click sẽ removePopupItem
let exitPopup = document.getElementsByClassName('exit-popup');
for (let index = 0; index < exitPopup.length; index++) {
    exitPopup[index].addEventListener('click',removePopupItem);
    exitPopup[index].addEventListener('click',removeEventPopup);
    function removeEventPopup(){
        console.log(this.parentElement.parentElement);
        this.parentElement.parentElement.classList.remove('active');
    }
}

let openPopupEvent = document.getElementsByClassName('event-btn');
for (let index = 0; index < openPopupEvent.length; index++) {
    openPopupEvent[index].addEventListener('click',fopenPopupEvent);
    function fopenPopupEvent(){
        this.nextElementSibling.classList.add('active');
        addpopup();
    }
}