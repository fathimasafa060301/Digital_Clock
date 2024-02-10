function updateClock(){
    const now= new Date();
    // const hours = now.getHours().toString().padStart(2,0);
    let hours=now.getHours();
    let mermaids= hours>=12? 'PM': 'AM';
    hours=hours % 12 || 12;
    hours=hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0)
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString= `${hours}:${minutes}:${seconds}:${mermaids}`;
    document.getElementById("clock").textContent= timeString ;   
}
updateClock();
setInterval(updateClock,1000)