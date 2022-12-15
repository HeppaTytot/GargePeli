const date = new Date().getTime();
const countDate = new Date(1671667200000).getTime();
function DownloadAndroid(){
    if(date < countDate){
        alert("Game not yet available");
    }
}
function DownloadWindows(){
    if(date < countDate){
        alert("Game not yet available");
    }
    else{
        window.open('resources/games/Garge.exe')
    }
}