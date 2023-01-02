window.onload=function(){
    var fileInput = document.getElementById("fileInput");
    //값이 변경될때 호출 되는 이벤트 리스너
    fileInput.addEventListener('change',function(e){
    var file = e.target.files[0]; //선택된 파일
    var reader = new FileReader();
    reader.readAsDataURL(file); //파일을 읽는 메서드 

    reader.onload = function(){
        var photoFrame = document.createElement("div");
        photoFrame.style = `background : url(${reader.result}); background-size : cover`;
        photoFrame.className = "photoFrame";
        document.getElementById("pictures").appendChild(photoFrame);
        e.target.value = "";

        // 이미지 삭제 코드
        // photoFrame.addEventListener("click",function(){
        // document.getElementById("pictures").removeChild(photoFrame);
        // })
    }
    })
}

