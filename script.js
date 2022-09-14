document.getElementById("read__more").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content");
    var btn = document.getElementById("read__more");
    content.classList.toggle('show');
    
    if (content.classList.contains("show")) {
            btn.innerHTML = "Show Less..";
        } else {
            btn.innerHTML = "Show More..";
        }
}