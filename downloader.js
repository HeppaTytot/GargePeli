const date = new Date().getTime();
const countDate = new Date(1671667200000).getTime();
function DownloadAndroid(){
    if(date < countDate){
        alert("Peli ei vielä saatavilla");
    }
    else{
        window.open('resources/games/Garge.apk')
    }
}
function DownloadWindows(){
    if(date < countDate){
        alert("Peli ei vielä saatavilla");
    }
    else{
        window.open('resources/games/Garge.exe')
    }
}
