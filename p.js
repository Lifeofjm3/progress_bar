let progress = 0;
function updateProgress(action) {
    if (action ==='increase' && progress <100) {
        progress +=10; // increase the progress by 10%
    } else if(action ==='decrease' && progress >0) {
        progress -=10; // decrease the progress by 10%
    }
    document.getElementById('progress-bar').style.width=progress +'%';
    document.getElementById('progress-bar').textContent=progress +'%';
}