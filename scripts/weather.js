const weatherData = [
    { city: "Seoul", temp: "24°C", desc: "맑음" },
    { city: "Busan", temp: "20°C", desc: "흐림" },
    { city: "Jeju", temp: "22°C", desc: "비" },
];

const weatherBtn = document.querySelector('.weatherbtn'); /* 버튼 */
const img = document.querySelector('.img p'); /* 이미지 */
const area = document.querySelector('.area');



weatherBtn.addEventListener('click',btnFunc);
function btnFunc(){
    const  weatherR = Math.floor(Math.random()*3)+1;
    img.style.backgroundImage=`url(../image/0${weatherR}.png)`
}
