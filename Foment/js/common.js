window.onload = function () {

    // 신랑 아버지 상태값 체크박스 선택
    document.getElementById('groomfatherstatus').addEventListener("click", function() {
        let selectBoxes = document.getElementById("groomfatherstatustype");
        let selectedValue = selectBoxes.value;
        if (this.checked) {
            selectBoxes.removeAttribute("disabled");
            selectBoxes.style.cursor = 'pointer';
            selectBoxes.onmouseover = function () {
                selectBoxes.style.border = '1px solid var(--ColorTextPrimary)';
            }
            selectBoxes.onmouseout = function () {
                selectBoxes.style.border = '1px solid var(--ColorBorderSolid)';
            }
        } else {
            selectBoxes.setAttribute("disabled", "disabled");
            selectBoxes.style.cursor = 'not-allowed';
            selectedValue = "";
        }
        // 신랑 아버지 상태값
        document.querySelector("#GroomFatherStatusInfo").innerText = selectedValue;
    });
    // 신랑 아버지 상태값 입력
    document.getElementById("groomfatherstatustype").addEventListener("change", function() {
        console.log(this.value);
        document.querySelector("#GroomfatherStatusInfo").innerText = this.value;
    });

    // 신랑 어머니 상태값 체크박스 선택
    document.getElementById('groommotherstatus').addEventListener("click", function() {
        let selectBoxes = document.getElementById("groommotherstatustype");
        let selectedValue = selectBoxes.value;
        if (this.checked) {
            selectBoxes.removeAttribute("disabled");
            selectBoxes.style.cursor = 'pointer';
            selectBoxes.onmouseover = function () {
                selectBoxes.style.border = '1px solid var(--ColorTextPrimary)';
            }
            selectBoxes.onmouseout = function () {
                selectBoxes.style.border = '1px solid var(--ColorBorderSolid)';
            }
        } else {
            selectBoxes.setAttribute("disabled", "disabled");
            selectBoxes.style.cursor = 'not-allowed';
            selectedValue = "";
        }
        // 신랑 어머니 상태값
        document.querySelector("#GroomMotherStatusInfo").innerText = selectedValue;
    });
    // 신랑 어머니 상태값 입력
    document.getElementById("groommotherstatustype").addEventListener("change", function() {
        console.log(this.value);
        document.querySelector("#GroomMotherStatusInfo").innerText = this.value;
    });


    // 신부 아버지 상태값 체크박스 선택
    document.getElementById('bridefatherstatus').addEventListener("click", function() {
        let selectBoxes = document.getElementById("bridefatherstatustype");
        let selectedValue = selectBoxes.value;
        if (this.checked) {
            selectBoxes.removeAttribute("disabled");
            selectBoxes.style.cursor = 'pointer';
            selectBoxes.onmouseover = function () {
                selectBoxes.style.border = '1px solid var(--ColorTextPrimary)';
            }
            selectBoxes.onmouseout = function () {
                selectBoxes.style.border = '1px solid var(--ColorBorderSolid)';
            }
        } else {
            selectBoxes.setAttribute("disabled", "disabled");
            selectBoxes.style.cursor = 'not-allowed';
            selectedValue = "";
        }
        // 신부 아버지 상태값
        document.querySelector("#BridefatherStatusInfo").innerText = selectedValue;
    });
    // 신부 아버지 상태값 입력
    document.getElementById("bridefatherstatustype").addEventListener("change", function() {
        console.log(this.value);
        document.querySelector("#BridefatherStatusInfo").innerText = this.value;
    });


    // 신부 아버지 상태값 체크박스 선택
    document.getElementById('bridemotherstatus').addEventListener("click", function() {
        let selectBoxes = document.getElementById("bridemotherstatustype");
        let selectedValue = selectBoxes.value;
        if (this.checked) {
            selectBoxes.removeAttribute("disabled");
            selectBoxes.style.cursor = 'pointer';
            selectBoxes.onmouseover = function () {
                selectBoxes.style.border = '1px solid var(--ColorTextPrimary)';
            }
            selectBoxes.onmouseout = function () {
                selectBoxes.style.border = '1px solid var(--ColorBorderSolid)';
            }
        } else {
            selectBoxes.setAttribute("disabled", "disabled");
            selectBoxes.style.cursor = 'not-allowed';
            selectedValue = "";
        }
        // 신부 아버지 상태값
        document.querySelector("#BridemotherStatusInfo").innerText = selectedValue;
    });
    // 신부 아버지 상태값 입력
    document.getElementById("bridemotherstatustype").addEventListener("change", function() {
        console.log(this.value);
        document.querySelector("#BridemotherStatusInfo").innerText = this.value;
    });
      


    
    let toggleQR = document.getElementById('KakaoQR');
    toggleQR.onclick = () => {
        toggleQR.classList.toggle('active');
    }

    // D-Day 표시 토글 스위치
    let toggleDDay = document.getElementById('DDay');

    toggleDDay.onclick = () => {
        toggleDDay.classList.toggle('active');
        let DDayClass = document.querySelectorAll(".dday");

        DDayClass.forEach(DDayClass => {
            if (DDayClass.style.display === "none") {
                DDayClass.style.display = "block";
            } else {
                DDayClass.style.display = "none";
            }
        });
        }


    // 아코디언 메뉴& 토글버튼
    let toggleFold = document.getElementById('AccountFold'); // 토글버튼

    toggleFold.onclick = () => {
        toggleFold.classList.toggle('active');
        let accordions = document.querySelectorAll(".accordion-content");
        
        accordions.forEach(accordion => {
            if (accordion.style.display === "block") {
            accordion.style.display = "none";
            } else {
            accordion.style.display = "block";
            }
        });
        }
        
    var accordion = document.querySelector(".accordion"); //아코디언
        accordion.addEventListener("click", function(e) {
            e.preventDefault();
            var target = e.target;
            if (target.classList.contains("accordion-title")) {
            var content = target.nextElementSibling;
            if (content.style.display === "block") {
                $(content).slideUp();
            } else {
                $(content).slideDown();
            }
            }
        });



    // 계좌번호 복사

    document.getElementById('copybtn').addEventListener('click', function() {
        var element = document.getElementById('accountinformation');
        if(element){
        var value = element.innerText;
        navigator.clipboard.writeText(value).then(function() {
            alert('계좌번호가 복사되었습니다.');
        }, function(err) {
            console.error('Failed to copy: ', err);
        });
        }
    });

    // 대표 이미지 업로드 크롭
    $(function () {
        var cropper;
        // 사진 업로드 버튼
        $('#photoBtn').on('change', function () {
            $('.photo_them').css("display", "block");
            $('#complete').css("display", "block");
            $('.them_img').empty().append('<img id="image" src="">');
            var image = $('#image');
            var imgFile = $('#photoBtn').val();
            var fileForm = /(.*?)\.(jpg|jpeg|png)$/;

            let BG = document.querySelector('.BgDimmed');

            // 이미지가 확장자 확인 후 노출
            if (imgFile.match(fileForm)) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    image.attr("src", event.target.result);
                    cropper = image.cropper({
                        dragMode: 'move',
                        viewMode: 1,
                        aspectRatio: 200 / 300,
                        autoCropArea: 0.9,
                        minContainerWidth: 600,
                        minContainerHeight: 600,
                        restore: false,
                        guides: true,
                        center: true,
                        highlight: true,
                        cropBoxMovable: false,
                        cropBoxResizable: false,
                        toggleDragModeOnDblclick: false,
                    });
                };
                BG.classList.toggle('is-active');
                reader.readAsDataURL(event.target.files[0]);
            } else {
                alert("이미지 파일(jpg, png형식의 파일)만 올려주세요");
                $('#photoBtn').focus();
                $('.photo_them').css("display", "none");
                $('#complete').css("display", "none");
                return;
            }
        });

        // 대표이미지 업로드 버튼

        $('#complete').on('click', function () {
            var image = $('#image');
            var result = $('#preview-image');
            var canvas;
            var BG = document.querySelector('.BgDimmed');
            canvas = image.cropper('getCroppedCanvas', {
                width: 1000,
                height: 1000
            });
            BG.classList.toggle('is-active');
            result.attr('src', canvas.toDataURL("image/jpg"));
            $("#preview-image").attr('src', canvas.toDataURL("image/jpg"));
            alert('선택하신 이미지로 대표이미지가 변경되었습니다.');
            $('.photo_them').css("display", "none");
            $('#complete').css("display", "none");
        });
    });


    // 사진 다중업로드 JS

        var storedFiles = [];

        $(function () {
            $('.cvf_uploaded_files').sortable({
                cursor: 'move',
                placeholder: 'highlight',
                start: function (event, ui) {
                    ui.item.toggleClass('highlight');
                },
                stop: function (event, ui) {
                    ui.item.toggleClass('highlight');
                },
                update: function () {
                    //cvf_reload_order();
                },
                create: function () {
                    var list = this;
                    resize = function () {
                        $(list).css('height', 'auto');
                        $(list).height($(list).height());
                    };
                    // $(list).height($(list).height());
                    $(list).find('img').load(resize).error(resize);
                }
            });
            $('.cvf_uploaded_files').disableSelection();
        });

        const dropzone = document.querySelector(".ImgGroupUpload_Btn");
        console.log(dropzone);
        
        // Handle dragover event
        dropzone.addEventListener("dragover", function(event) {
          event.preventDefault();
          event.stopPropagation();
          dropzone.style.backgroundColor = "lightgray";
        });
        
        // Handle dragleave event
        dropzone.addEventListener("dragleave", function(event) {
          event.preventDefault();
          event.stopPropagation();
          dropzone.style.backgroundColor = "";
        });
        
        // Handle drop event
        dropzone.addEventListener("drop", function(event) {
          event.preventDefault();
          event.stopPropagation();
          dropzone.style.backgroundColor = "";
          
          // Get the dropped files
          let files = Array.from(event.dataTransfer.files);
          console.log(files);
        });
        

        
        $('body').on('change', '.user_picked_files', function () {

            var files = this.files;
            var i = 0;

            for (i = 0; i < files.length; i++) {
                var readImg = new FileReader();
                var file = files[i];

                // 이미지 삭제

                $('body').on('click', 'a.cvf_delete_image', function (e) {
                    e.preventDefault();
                    var file = $(this).parent().attr('file');
                    var viewimg = document.querySelector(".grid-item[file='" + file + "']");

                    $(this).parent().remove();
                    $(viewimg).remove();
                    
                    for (var i = 0; i < storedFiles.length; i++) {
                        if (storedFiles[i].name == file) {
                            storedFiles.splice(i, 1);
                            break;
                        }
                    }

                    cvf_reload_order();

                });


                // 이미지 갯수 확인 후 노출
                img_count = files.length;
                if (img_count > 20) {
                    alert("이미지는 20개까지 첨부하실 수 있습니다.");
                    img_count = img_count - files.length;
                    return;
                }

                // 이미지 타입 매칭 후 노출
                if (file.type.match('image.*')) {
                    storedFiles.push(file);
                    console.log();
                    readImg.onload = (function (file) {
                        return function (e) {
                            $('.GalleryTitleArea').show();
                            $('.cvf_uploaded_files').append(
                                "<li class='multiimg' id='multiimg_" + file.name + "' file = '" + file.name + "'>" +
                                "<img class = 'img-thumb' src = '" + e.target.result + "' />" +
                                "<a href = '#' class = 'cvf_delete_image' id='deleteimg_" + file.name + "' file = '" + file.name + "' title = 'Cancel'><img class = 'delete-btn' src = '../Resource/assets/Icon/Delete.svg' /></a>" +
                                "</li>"
                             );
                            $('.cvf_uploaded_files').css('overflow-x','scroll'); 
                            $('.grid-container').css('display','grid');
                            $('.grid-container').append(
                                "<li class = 'grid-item' file = '" + file.name + "'>" +
                                "<img class = 'grid-thumb' id = 'appendimg' src = '" + e.target.result + "' />" +
                                "</li>"
                            );
                            // Hover시 삭제버튼
                            var HoverImg = document.querySelector(".multiimg[file='" + file.name + "']");
                            var DeleteImg = document.querySelector(".cvf_delete_image[file='" + file.name + "']");

                
                            HoverImg.onmouseover = function () {
                                if (DeleteImg) {
                                    DeleteImg.style.opacity = "1";
                                    console.log('over');
                                }
                            };
                            HoverImg.onmouseout = function () {
                                if (DeleteImg) {
                                    DeleteImg.style.opacity = "0";
                                    console.log('out');
                                }
                            };
                        };
                    })(file);
                    readImg.readAsDataURL(file);
                }
                 else {
                    alert('the file ' + file.name + ' is not an image<br/>');
                }

                if (files.length === (i + 1)) {
                    setTimeout(function () {
                        cvf_add_order();
                    }, 1000);
                }

            }
        });

    // 지도

    //지도를 삽입할 HTML 요소 또는 HTML 요소의 id를 지정합니다.
    var mapDiv = document.getElementById('map'); // 'map'으로 선언해도 동일

    //옵션 없이 지도 객체를 생성하면 서울 시청을 중심으로 하는 16 레벨의 지도가 생성됩니다.
    var map = new naver.maps.Map(mapDiv);

    var map = new naver.maps.Map('map', {

        center: new naver.maps.LatLng(37.555073, 126.892030),

        zoom: 17

    });
    // 마커 위치 표시

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.555073, 126.892030),
        map: map
    });

    //--> 확대방지
    document.body.addEventListener('touchstart', function (e) {
        if ((e.touches.length > 1) || e.targetTouches.length > 1) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }, { passive: false });

    // --> 미리보기 팝업띄우기

    let PreviewTemplate1 = document.getElementById("template1");
    let PreviewTemplate2 = document.getElementById("template2");
    let BG = document.querySelector('.BgDimmed');
    if (PreviewTemplate1 != null) {
        PreviewTemplate1.addEventListener('click', function () {
            BG.classList.toggle('is-active');
        });
    }
    if (PreviewTemplate2 != null) {
        PreviewTemplate2.addEventListener('click', function () {
            BG.classList.toggle('is-active');
        });
    }
    if (BG != null) {
        BG.addEventListener('click', function () {
            // BG.classList.toggle('is-active');
        });
    }


    // 초대합니다 입력박스
    var selectBox = document.getElementById("SelectSampleInvite");
    var inputBox = document.getElementById("TextBoxInput");
  
    selectBox.addEventListener("change", function() {
      inputBox.value = selectBox.value;
    });

    // 계좌번호 그룹추가
    var accountitemIdx = 3;
    var accordionitemIdx = 3;
    document.getElementById("AddAccountBtn").addEventListener("click", function(){
        if (accordionitemIdx >= 7) {
            alert("최대 만들 수 있는 계좌그룹의 갯수를 초과하였습니다");
            return;
        }
        var accountGroup = document.getElementById("AccountGroup");
        var accountItem = document.createElement("div");
        accountItem.classList.add("AccountItem");
        accountItem.id = "AccointItem" + accountitemIdx;
        accountGroup.appendChild(accountItem);
        accountitemIdx++;
    
        var childDivs = document.querySelectorAll(".DetailItem");
        var firstChild = childDivs[0];
        accountItem.appendChild(firstChild.cloneNode(true));
    
        // Add the li element to the accordion
        var accordion = document.querySelector(".accordion");
        var newLi = document.createElement("li");
        newLi.classList.add("accordionitem");
        newLi.id = "accordionitem" + accordionitemIdx;
        accordion.appendChild(newLi);
        accordionitemIdx++;
    
        var childLi = document.querySelectorAll(".licontents");
        var firstChildLi = childLi[0];
        newLi.appendChild(firstChildLi.cloneNode(true));
    });

    // 서체 변경 JS

    $("#fs").change(function () {
        //alert($(this).val());
        $('.WeddingBodyText').css("font-family", $(this).val());
        $('.WeddingTitleText').css("font-family", $(this).val());
        $('.year-month').css("font-family", $(this).val());
        $('.sec_cal').css("font-family", $(this).val());
        $('.side_contents').css("font-family", $(this).val());
        $('.BtnIcon').css("font-family", $(this).val());
    });

    $("#size").change(function () {
        $('.WeddingBodyText').css("font-size", $(this).val() + "px");
        $('.WeddingTitleText').css("font-size", $(this).val() + "px");
        $('.sec_cal').css("font-size", $(this).val() + "px");
    });


    // 디자인 선택 탭
    $('ul.TabListDesign li').click(function () {							//선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.

        $('ul.TabListDesign li').removeClass('Active');     //선택 되있던 탭의 Active css를 제거하고 
        $(this).addClass('Active');							////선택된 탭에 Active class를 삽입해줍니다.

        if (this.id == 'DesignArch') {  // DesignArch 선택
            console.log('DesignArch');
            $('.TitleSection').show();
        } else if (this.id == 'DesignTrip') {  // DesignTrip 선택
            console.log('DesignTrip');
            $('.TitleSection').hide();
        } else if (this.id == 'DesignTogether') {  // DesignTogether 선택
            console.log('DesignTogether');
            $('.TitleSection').hide();
        }
        else {
            console.log('null');
        }
    });

    // 배경음악 탭
    $('ul.TabListBGM li').click(function () {							//선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.

        $('ul.TabListBGM li').removeClass('Active');     //선택 되있던 탭의 Active css를 제거하고 
        $(this).addClass('Active');							////선택된 탭에 Active class를 삽입해줍니다.

        if (this.id == 'NoneAudio') {  //BGM 미적용
            console.log('아무것도 선택안된상태');
            $('.audio').attr("src", "");
            console.log($('.audio').attr("src"));
        } else if (this.id == 'BaseAudio_1') {  //베이스오디오_1
            console.log('BaseAudio_1');
            $('.audio').attr("src", "../Resource/Audio/wedding_1.mp3");
            console.log($('.audio').attr("src"));
        } else if (this.id == 'BaseAudio_2') {  //베이스오디오_2
            console.log('BaseAudio_2');
            $('.audio').attr("src", "../Resource/Audio/wedding_2.mp3");
        } else if (this.id == 'BaseAudio_3') {  //베이스오디오_3
            console.log('BaseAudio_3');
            $('.audio').attr("src", "../Resource/Audio/wedding_3.mp3");
        }
        else {
            console.log('null');
        }
    });

    // 재생,일시정지 버튼

    var btn = document.querySelector(".AudioControl");
    var playing = false;
    
    btn.addEventListener("click", function () {
        var buttonplay = document.getElementById('button');
        var buttonpause = document.getElementById('buttonpause');
        // var music = new Audio("../Resource/Audio/wedding_1.mp3");
    
        if (!playing) {
            buttonpause.style.display = "block";
            buttonplay.style.display = "none";
            playing = true;
            // music.play();
        } else {
            buttonpause.style.display = "none";
            buttonplay.style.display = "block";
            playing = false;
            // music.pause();
        }
    });

    // 이펙트 탭
    $('ul.TabListEffect li').click(function () {							//선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.

        $('ul.TabListEffect li').removeClass('Active');     //선택 되있던 탭의 Active css를 제거하고 
        $(this).addClass('Active');							////선택된 탭에 Active class를 삽입해줍니다.

        if (this.id == 'NoneEffect') {  //효과 미적용
            console.log('아무것도 선택안된상태');
            $('.effects').attr("src", "");
        } else if (this.id == 'CherryblossomEffect') {  //벚꽃 효과 적용
            console.log('체리블라썸');
            $('.effects').attr("src", "../Resource/assets/Effect/effect_cherryblossom.png");
        } else if (this.id == 'SnowEffect') {  // 눈 효과 적용
            console.log('스노우');
            $('.effects').attr("src", "../Resource/effects/snow_00.mp4");
        }
        else {
            console.log('null');
        }
    });


    // 폰트 크기 탭

    $('ul.TabList li').click(function () {							//선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.
        var tab_id = $(this).attr('data-tab');
        console.log(tab_id);

        $('ul.TabList li').removeClass('Active');			//선택 되있던 탭의 Active css를 제거하고 
        $('.TabContent').removeClass('Active');

        $(this).addClass('Active');								////선택된 탭에 Active class를 삽입해줍니다.
        $("#" + tab_id).addClass('Active');
    });
    

    $('ul.TabListFont li').click(function () {							//선택자를 통해 tabs 메뉴를 클릭 이벤트를 지정해줍니다.

        $('ul.TabListFont li').removeClass('Active');			//선택 되있던 탭의 Active css를 제거하고 

        $(this).addClass('Active');								////선택된 탭에 Active class를 삽입해줍니다.
        $('.WeddingBodyText').css("font-size", $(this).val() + "px");
        $('.WeddingBodyTitle').css("font-size", $(this).val() + "px");
        $('.WeddingTitleText').css("font-size", $(this).val() + 5 +"px");
        $('.sec_cal .cal_nav .year-month').css("font-size", $(this).val() + 5 + "px");
    });


}



// 연동할 캘린더

$(document).ready(function () {
    calendarInit();
});
/*
    달력 렌더링 할 때 필요한 정보 목록 
 
    현재 월(초기값 : 현재 시간)
    금월 마지막일 날짜와 요일
    전월 마지막일 날짜와 요일
*/
// calendar init 에 인풋값이 대치
function calendarInit() {

    // 날짜 정보 가져오기
    var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
    var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
    var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // 달력에서 표기하는 날짜 객체


    var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
    var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
    var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

    // kst 기준 현재시간
    // console.log(thisMonth);

    // 캘린더 렌더링
    renderCalender(thisMonth);

    function renderCalender(thisMonth) {

        // 렌더링을 위한 데이터 정리
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        // 이전 달의 마지막 날 날짜와 요일 구하기
        var startDay = new Date(currentYear, currentMonth, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();

        // 이번 달의 마지막날 날짜와 요일 구하기
        var endDay = new Date(currentYear, currentMonth + 1, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

        // console.log(prevDate, prevDay, nextDate, nextDay);

        // 현재 월 표기
        $('.year-month').text((currentMonth + 1) + '월' + currentDate + '일');

        // 렌더링 html 요소 생성
        calendar = document.querySelector('.dates')
        calendar.innerHTML = '';

        // 지난달
        for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
        }
        // 이번달
        for (var i = 1; i <= nextDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>'
        }
        // 다음달
        for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
        }

        // 오늘 날짜 표기
        if (today.getMonth() == currentMonth) {
            todayDate = today.getDate();
            var currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate - 1].classList.add('today');
        }
    }

}

// 인풋 캘린더

var dateChange = () => {
    let dateInput = document.getElementById("date");
    let dateArr = dateInput.value.split('-');
    let selectedDate = new Date(Date.UTC(dateArr[0], dateArr[1]-1, dateArr[2]));
    selectedDate.setHours(selectedDate.getHours() + 9);  // 한국 표준시의 오프셋은 9시간
    let todaydate = new Date();
    let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let dayName = days[selectedDate.getDay()];

    if (selectedDate < todaydate) {
        alert("오늘 날짜 이전의 날짜는 선택할 수 없습니다.");
        return;
    }

    let monthDisplay = (parseInt(dateArr[1]) < 10) ? dateArr[1].replace("0", "") : dateArr[1];
    let dateDisplay = (parseInt(dateArr[2]) < 10) ? dateArr[2].replace("0", "") : dateArr[2];

    document.getElementById("TextDateCalendar").innerText = `${monthDisplay}월 ${dateDisplay}일`;
    document.getElementById("WeddingDateTitle").innerText = `${monthDisplay}월 ${dateDisplay}일`;
    document.getElementById("WeddingDayTitle").innerText = dayName;

    let currentMonthDates = document.querySelectorAll('.dates .current');
    currentMonthDates.forEach(date => {
        date.classList.remove('today');
    });

    let today = new Date();
    let dDay = selectedDate - today;
    let dDayInDays = Math.floor(dDay / (1000 * 60 * 60 * 24));
    document.getElementById("dday").innerText = '결혼식이 '+ `${dDayInDays}` + '일 남았습니다.';

    currentMonthDates[parseInt(dateInput.value.split('-')[2]) - 1].classList.add('today');
};







// --> 셀렉트 박스 선택시 출력되는 값 정리

function handleOnChange(e, target) {

    // 신랑 신부 관계
    let relationship = e.options[e.selectedIndex].text;
    let RelationText = "의 " + "" + relationship

    // 선택된 셀렉트박스의 값이, 해당 아이디값과 일치하는지 검사
    if (e.id === "SelectGroomRelationship") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("GroomRelationship").innerText = RelationText;
    } else if (e.id === "SelectBrideRelationship") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("BrideRelationship").innerText = RelationText;
    }

    // 예식 시간 및 요일
    let AMPM = e.options[e.selectedIndex].text;

    if (e.id === "SelectAMPM") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("AMPM").innerText = AMPM;
    } else if (e.id === "SelectTime") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("WeddingTime").innerText = AMPM;
    } else if (e.id === "SelectMinute") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("WeddingMinute").innerText = AMPM;
    }
    
}

// 예식장 명 입력
function WeddingLocationInput(){
    var WeddingLocateTitle = document.getElementById("WeddingLocateTitleInput").value;
    document.getElementById("WeddingLocateTitle").innerText = WeddingLocateTitle;
}


// 청첩장 제목 입력
function InvitationTitleInput(){
    var inputTitleBox = document.getElementById("InvitationTitleInput");
    document.title = inputTitleBox.value;
}

// 신랑 성
function printGroomFirst() {
    let GroomFirstName = document.getElementById('GroomFirstNameInput').value;
    document.getElementById("GroomFirstName").innerText = GroomFirstName;
    document.getElementById("GroomFirstName2").innerText = GroomFirstName;
};
// 신랑 이름
function printGroomLast() {
    let GroomLastName = document.getElementById('GroomLastNameInput').value;
    document.getElementById("GroomLastName").innerText = GroomLastName;
    document.getElementById("GroomLastName2").innerText = GroomLastName;
};

// 신랑 아버님 성
function printGroomFatherFirst() {
    let GroomFirstName = document.getElementById('GroomFatherFirstNameInput').value;
    document.getElementById("GroomFatherFirstName").innerText = GroomFirstName;
};
// 신랑 아버님 이름
function printGroomFatherLast() {
    let GroomLastName = document.getElementById('GroomFatherLastNameInput').value;
    document.getElementById("GroomFatherLastName").innerText = GroomLastName;
};

// 신랑 어머님 성
function printGroomMotherFirst() {
    let GroomFatherFirstName = document.getElementById('GroomMotherFirstNameInput').value;
    document.getElementById("GroomMotherFirstName").innerText = GroomFatherFirstName;
};
// 신랑 어머님 이름
function printGroomMotherLast() {
    let GroomMotherLastName = document.getElementById('GroomMotherLastNameInput').value;
    document.getElementById("GroomMotherLastName").innerText = GroomMotherLastName;
};


// 신부 성
function printBrideFirst() {
    let BrideFirstName = document.getElementById('BrideFirstNameInput').value;
    document.getElementById("BrideFirstName").innerText = BrideFirstName;
    document.getElementById("BrideFirstName2").innerText = BrideFirstName;
};
// 신부 이름
function printBrideLast() {
    let BrideLastName = document.getElementById('BrideLastNameInput').value;
    document.getElementById("BrideLastName").innerText = BrideLastName;
    document.getElementById("BrideLastName2").innerText = BrideLastName;
};

// 신부 아버님 성
function printBrideFatherFirst() {
    let BrideFatherFirstName = document.getElementById('BrideFatherFirstNameInput').value;
    document.getElementById("BrideFatherFirstName").innerText = BrideFatherFirstName;
};
// 신부 아버님 이름
function printBrideFatherLast() {
    let BrideFatherLastName = document.getElementById('BrideFatherLastNameInput').value;
    document.getElementById("BrideFatherLastName").innerText = BrideFatherLastName;
};

// 신부 어머님 성
function printBrideMotherFirst() {
    let BrideMotherFirstName = document.getElementById('BrideMotherFirstNameInput').value;
    console.log(BrideMotherFirstName);
    document.getElementById("BrideMotherFirstName").innerText = BrideMotherFirstName;
};
// 신부 어머님 이름
function printBrideMotherLast() {
    let BrideMotherLastName = document.getElementById('BrideMotherLastNameInput').value;
    console.log(BrideMotherLastName);
    document.getElementById("BrideMotherLastName").innerText = BrideMotherLastName;
};


// URL 입력필드
function printURL() {
    let PrintURL = document.getElementById('InputURL').value;

    document.getElementById("CustomUrl").innerText = PrintURL;
};

// 초대 제목
function printInvite() {
    let PrintInvite = document.getElementById('InviteTitleInput').value;

    document.getElementById("InviteTitle").innerText = PrintInvite;
};

// 초대 문구
function printInviteBody() {
    let PrintInvite = document.getElementById('TextBoxInput').value;

    document.getElementById("InviteBodyText").innerText = PrintInvite;
};

// 신랑측 계좌번호
function printAccountGroom() {
    let PrintAccount = document.getElementById('AccountGroomInput').value;

    document.getElementById("accodion-content").innerText = PrintAccount;
};


  