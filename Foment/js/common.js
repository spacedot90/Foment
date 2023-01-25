window.onload = function () {

    // 토글 스위치
    let $toggle = document.querySelector(".toggleSwitch");

    $toggle.onclick = () => {
    $toggle.classList.toggle('active');
    }

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
            alert('선택하신 이미지로 대표이미지가 변경되었습니다.');
            $('.photo_them').css("display", "none");
            $('#complete').css("display", "none");
            var image = $('#image');
            var result = $('#preview-image');
            var canvas;
            var BG = document.querySelector('.BgDimmed');

            if ($('input[type="file"]').val() != "") {
                canvas = image.cropper('getCroppedCanvas', {
                    width: 1000,
                    height: 1000,
                });
                BG.classList.toggle('is-active');
                result.attr('src', canvas.toDataURL("image/jpg"));
                $("#preview-image").attr('src', canvas.toDataURL("image/jpg"));
            } else {
                console.log('오류가 있군..');
            }
        });
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





    // 아코디언 메뉴
    var accModule = function () {

        // private member (비공개 멤버, 고유멤버)
        let acc_wrap = $('.accodian'),
            question = acc_wrap.find('h3'),
            answer = question.next('div');

        // privilieged member(공용 인터페이스)
        return {
            runInit: function () {
                this.accHandler();
            },
            accHandler: function () {
                let accodian = {
                    targetClick: function (e) {
                        var eTarget = $(e.currentTarget);
                        if (eTarget.next().is(':visible')) {
                            eTarget.next().slideUp();
                            return;
                        }
                        // answer.slideUp();
                        eTarget.next().slideDown();
                    }
                };
                question.on('click', accodian.targetClick);
            }
        }
    }();

    // 실행
    accModule.runInit();


    // 서체 변경 JS

    $("#fs").change(function () {
        //alert($(this).val());
        $('.WeddingBodyText').css("font-family", $(this).val());
        $('.WeddingBodyTitle').css("font-family", $(this).val());
        $('.sec_cal').css("font-family", $(this).val());
    });

    $("#size").change(function () {
        $('.WeddingBodyText').css("font-size", $(this).val() + "px");
        $('.WeddingBodyTitle').css("font-size", $(this).val() + "px");
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
        $('.sec_cal').css("font-size", $(this).val() + "px");
    });

    // PlayButton
    $(document).ready(function () {
        var btn = $(".button");
        btn.click(function () {
            if (this.id == 'button') {
                $('#button').hide();
                $('#buttonpause').show();
                console.log("잘 숨겨짐");
            } else if (this.id == 'buttonpause') {
                $('#button').show();
                $('#buttonpause').hide();
            } else {
                console.log("포즈버튼");
            }
        });
    });


    // 사진 다중업로드 JS

    var storedFiles = [];
    //$('.cvf_order').hide();

    // Apply sort function 
    function cvf_reload_order() {
        var order = $('.cvf_uploaded_files').sortable('toArray', { attribute: 'item' });
        $('.cvf_hidden_field').val(order);
    }

    function cvf_add_order() {
        $('.cvf_uploaded_files li').each(function (n) {
            $(this).attr('item', n);
        });
    }


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

    $('body').on('change', '.user_picked_files', function () {

        var files = this.files;
        var i = 0;

        for (i = 0; i < files.length; i++) {
            var readImg = new FileReader();
            var file = files[i];

            // // 이미지 확장자 확인 후 노출
            //     var image = $('#ImgBtn');
            //     var imgFile = $('.cvf_uploaded_files').val();
            //     var fileForm = /(.*?)\.(jpg|jpeg|png)$/;

            //     if(imgFile.match(fileForm)) {
            //         var reader = new FileReader(); 
            //         reader.onload = function(event) { 
            //             imgFile.attr("src", event.target.result);
            //         }; 
            //         reader.readAsDataURL(event.target.files[0]);

            //     } else{
            //     alert("이미지 파일(jpg, png형식의 파일)만 올려주세요");
            //     return; 
            //     }


            // 이미지 삭제

            $('body').on('click', 'a.cvf_delete_image', function (e) {
                e.preventDefault();
                var file = $(this).parent().attr('file');
                var viewimg = document.getElementById('appendimg');

                $(this).parent().remove('');
                // $(viewimg).parent().remove('');
                $(viewimg).remove(e.target.result);

                var file = $(this).parent().attr('file');
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
                readImg.onload = (function (file) {
                    return function (e) {
                        $('.GalleryTitleArea').show();
                        $('.cvf_uploaded_files').append(
                            "<li id='multiimg' file = '" + file.name + "'>" +
                            "<img class = 'img-thumb' src = '" + e.target.result + "' />" +
                            "<a href = '#' class = 'cvf_delete_image' id='deleteimg' title = 'Cancel'><img class = 'delete-btn' src = '../Resource/assets/Icon/Delete.svg' /></a>" +
                            "</li>"
                        );
                        
                        $('.grid-container').css('display','grid');
                        $('.grid-container').append(
                            "<li class = 'grid-item' file = '" + file.name + "'>" +
                            "<img class = 'grid-thumb' id = 'appendimg' src = '" + e.target.result + "' />" +
                            "</li>"
                        );
                        // Hover시 삭제버튼
                        var HoverImg = document.getElementById('multiimg');
                        var DeleteImg = document.getElementById('deleteimg');

                        HoverImg.onmouseover = function () {
                            DeleteImg.style.opacity = "1";
                        }
                        HoverImg.onmouseout = function () {
                            DeleteImg.style.opacity = "0";
                        }
                    };
                })(file);
                readImg.readAsDataURL(file);

            } else {
                alert('the file ' + file.name + ' is not an image<br/>');
            }

            if (files.length === (i + 1)) {
                setTimeout(function () {
                    cvf_add_order();
                }, 1000);
            }

        }
    });



    //   // AJAX Upload
    //   $('body').on('click', '.cvf_upload_btn', function(e){

    //       e.preventDefault();
    //       cvf_reload_order();

    //       //$(".cvf_uploaded_files").html('<p><img src = "loading.gif" class = "loader" /></p>');
    //       var data = new FormData();

    //       var items_array = $('.cvf_hidden_field').val();
    //       var items = items_array.split(',');
    //       for (var i in items){
    //           var item_number = items[i];
    //           data.append('files' + i, storedFiles[item_number]);
    //       }

    //       $.ajax({
    //           url: 'upload.php',
    //           type: 'POST',
    //           contentType: false,
    //           data: data,
    //           processData: false,
    //           cache: false,
    //           success: function(response, textStatus, jqXHR) {
    //               //$(".cvf_uploaded_files").html('');                                               
    //               //bootbox.alert('<br /><p class = "bg-success">File(s) uploaded successfully.</p>');
    //               alert(jqXHR.responseText);
    //           }
    //       });

    //   });  

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
    let date_input = document.getElementById("date");
    let arr = date_input.value.split('-');

    // document.getElementById("DateTitle").innerText = arr[1] + "/" + arr[2];
    // document.getElementById("TextDate").innerText = "추가할데이터 " + date_input.value + " 추가할데이터";
    // document.getElementById("TextDateCalendar").innerText = arr[1] + "월" + arr[2] + "일";

    // 여기에다가 추가
    let currentMonthDate = document.querySelectorAll('.dates .current');
    currentMonthDate.forEach(r => {
        r.classList.remove('today');
    });

    currentMonthDate[parseInt(date_input.value.split('-')[2]) - 1].classList.add('today');
    console.log(date_input.value);
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
};

//--> 셀렉트 박스 선택
function handleOnChange(e, target) {
    // 선택된 데이터의 텍스트값 가져오기
    const text = e.options[e.selectedIndex].text;

    console.log(e.options);

    // 선택한 텍스트 출력
    document.getElementById(target).innerText
        = text;
}

// Input 값 타이핑시 출력
function printGroom() {
    let GroomFirstName = document.getElementById('GroomFirstNameInput').value;
    let GroomLastName = document.getElementById('GroomLastNameInput').value;

    document.getElementById("GroomFirstName").innerText = GroomFirstName;
    document.getElementById("GroomLastName").innerText = GroomLastName;
};

function printBride() {
    let BrideFirstName = document.getElementById('BrideFirstNameInput').value;
    let BrideLastName = document.getElementById('BrideLastNameInput').value;

    document.getElementById("BrideFirstName").innerText = BrideFirstName;
    document.getElementById("BrideLastName").innerText = BrideLastName;
};
