window.onload = function () {

    // --> 타겟 이동 요소 정리

    // 신랑쪽 정보 입력시 스크롤
    const groomInputs = [
        document.getElementById('GroomFirstNameInput'),
        document.getElementById('GroomLastNameInput'),
        document.getElementById('SelectGroomRelationship'),
        document.getElementById('GroomFatherFirstNameInput'),
        document.getElementById('GroomFatherLastNameInput'),
        document.getElementById('GroomMotherFirstNameInput'),
        document.getElementById('GroomMotherLastNameInput'),
        document.getElementById('groomfatherstatus'),
        document.getElementById('groommotherstatus')
      ];
    

      groomInputs.forEach(Grooms => {
        Grooms.addEventListener('click', () => {
        const targetElement = document.getElementById('scrollFamilyinfo');
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });
      
    // 신부쪽 정보 입력시 스크롤
    const BrideInputs = [
        document.getElementById('BrideFirstNameInput'),
        document.getElementById('BrideLastNameInput'),
        document.getElementById('SelectBrideRelationship'),
        document.getElementById('BrideFatherFirstNameInput'),
        document.getElementById('BrideFatherLastNameInput'),
        document.getElementById('BrideMotherFirstNameInput'),
        document.getElementById('BrideMotherLastNameInput'),
        document.getElementById('bridefatherstatus'),
        document.getElementById('bridemotherstatus')
      ];
    

      BrideInputs.forEach(Bride => {
        Bride.addEventListener('click', () => {
        const targetElement = document.getElementById('scrollFamilyinfo');
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });

    // 예식정보 입력시 스크롤
    const WeddingInputs = [
        document.getElementById('date'),
        document.getElementById('SelectAMPM'),
        document.getElementById('SelectTime'),
        document.getElementById('SelectMinute')
      ];
    

      WeddingInputs.forEach(Wedding => {
        Wedding.addEventListener('click', () => {
        const targetElement = document.getElementById('TextDateCalendar');
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });
    
    
    // 예식장 명, 층, 홀 입력시 스크롤
    const WeddingInfoInputs = [
        document.getElementById('WeddingLocateTitleInput'),
        document.getElementById('WeddingHallInfoInput'),
        document.getElementById('SearchAddressInput'),
        document.getElementById('SearchAddressBtn')
        ];
    

        WeddingInfoInputs.forEach(WeddingInfo => {
        WeddingInfo.addEventListener('click', () => {
        const targetElement = document.querySelector('.LocationSection');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
        });
        

    // 초대 글 작성시 스크롤
    const InviteInfoInputs = [
        document.getElementById('InviteTitleInput'),
        document.getElementById('TextBoxInput'),
        document.getElementById('custom-select-container-invite'),
        ];
    

        InviteInfoInputs.forEach(InviteInfo => {
        InviteInfo.addEventListener('click', () => {
        const targetElement = document.querySelector('.TabContent');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
        });

    // 신랑 아버지 상태값 체크박스 선택
    document.getElementById('groomfatherstatus').addEventListener("click", function () {
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
            selectBoxes.value = "故";
            selectedValue = "";
            document.getElementById('GroomFatherMum').style.display = "none";
        }
        // 신랑 아버지 상태값
        document.querySelector("#GroomFatherStatusInfo").innerText = selectedValue;

        // 선택시 신랑 어머니 상태값
        document.getElementById("groomfatherstatustype").addEventListener("change", function () {
            console.log(this.value);
            if(this.value === "국화꽃"){
                document.getElementById('GroomFatherMum').style.display = "block";
                document.querySelector("#GroomFatherStatusInfo").innerText = "";
            }if(this.value === "故"){
                document.getElementById('GroomFatherMum').style.display = "none";
                document.querySelector("#GroomFatherStatusInfo").innerText = "故";
            } else{
            }
            });
    });

    // 신랑 어머니 상태값 체크박스 선택
    document.getElementById('groommotherstatus').addEventListener("click", function () {
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
            selectBoxes.value = "故";
            selectedValue = "";
            document.getElementById('GroomMotherMum').style.display = "none";
        }
        // 신랑 어머니 상태값
        document.querySelector("#GroomMotherStatusInfo").innerText = selectedValue;

        // 선택시 신랑 어머니 상태값
        document.getElementById("groommotherstatustype").addEventListener("change", function () {
            console.log(this.value);
            if(this.value === "국화꽃"){
                document.getElementById('GroomMotherMum').style.display = "block";
                document.querySelector("#GroomMotherStatusInfo").innerText = "";
            }if(this.value === "故"){
                document.getElementById('GroomMotherMum').style.display = "none";
                document.querySelector("#GroomMotherStatusInfo").innerText = "故";
            } else{
            }
            });
    });


    // 신부 아버지 상태값 체크박스 선택
    document.getElementById('bridefatherstatus').addEventListener("click", function () {
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
            selectBoxes.value = "故";
            selectedValue = "";
            document.getElementById('BrideFatherMum').style.display = "none";
        }
        // 신부 아버지 상태값 체크시
        document.querySelector("#BridefatherStatusInfo").innerText = selectedValue;

        // 선택시 신부 아버지 상태값
        document.getElementById("bridefatherstatustype").addEventListener("change", function () {
        console.log(this.value);
        if(this.value === "국화꽃"){
            document.getElementById('BrideFatherMum').style.display = "block";
            document.querySelector("#BridefatherStatusInfo").innerText = "";
        }if(this.value === "故"){
            document.getElementById('BrideFatherMum').style.display = "none";
            document.querySelector("#BridefatherStatusInfo").innerText = "故";
        } else{
        }
        });
    });


    // 신부 어머니 상태값 체크박스 선택
    document.getElementById('bridemotherstatus').addEventListener("click", function () {
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
            selectBoxes.value = "故";
            selectedValue = "";
            document.getElementById('BrideMotherMum').style.display = "none";
        }

         // 신부 어머니 상태값 체크시
         document.querySelector("#BrideMotherStatusInfo").innerText = selectedValue;

        // 선택시 신부 어머니 상태값
        document.getElementById("bridemotherstatustype").addEventListener("change", function () {
            console.log(this.value);
            if(this.value === "국화꽃"){
                document.getElementById('BrideMotherMum').style.display = "block";
                document.querySelector("#BrideMotherStatusInfo").innerText = "";
            }if(this.value === "故"){
                document.getElementById('BrideMotherMum').style.display = "none";
                document.querySelector("#BrideMotherStatusInfo").innerText = "故";
            } else{
            }
            });
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
    accordion.addEventListener("click", function (e) {
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

    document.getElementById('copybtn').addEventListener('click', function () {
        var element = document.getElementById('accountinformation');
        if (element) {
            var value = element.innerText;
            navigator.clipboard.writeText(value).then(function () {
                alert('계좌번호가 복사되었습니다.');
            }, function (err) {
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
            $(".uploadsrc").attr('src', canvas.toDataURL("image/jpg"));
            $(".KaKaosrc").attr('src', canvas.toDataURL("image/jpg"));
            alert('선택하신 이미지로 대표이미지가 변경되었습니다.');
            $('.photo_them').css("display", "none");
            $('#complete').css("display", "none");
        });
    });

    // 클래스 영역 순서바꾸기

    $(function () {
        $('.ToggleArea').sortable({
          cursor: 'move',
          placeholder: 'highlight',
          start: function (event, ui) {
            ui.item.toggleClass('highlight');
          },
          stop: function (event, ui) {
            ui.item.toggleClass('highlight');
          },
          update: function (event, ui) {
            const inputArea = document.querySelector('.ToggleArea');
            const inputChildElements = Array.from(inputArea.querySelectorAll('.ToggleArea > *'));
            const contentsArea = document.querySelector('.side_contents');
            const contentsChildElements = Array.from(contentsArea.querySelectorAll('.side_contents > *:not(.TitleSection):not(.ShareSection):not(.footer)'));
                  
            // inputChildElements 배열의 순서에 따라 contentsChildElements 배열 순서를 동기화
            inputChildElements.forEach((inputChildElement, index) => {
              const inputId = inputChildElement.dataset.id;
              const contentsChildElement = contentsChildElements.find(contentsChildElement => contentsChildElement.dataset.id === inputId);
              console.log(inputId);
              console.log(contentsChildElement);
              if (contentsChildElement) {
                contentsArea.appendChild(contentsChildElement);
              }
            });
          },
          create: function () {
          }
        });
      });
      
      
      
      
      
      
      
      





    // 다중업로드한 사진 순서 바꾸기 이동
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
            update: function (event, ui) {
                // 현재 파일의 순서를 배열로 가져옵니다
                var currentOrder = $(this).sortable('toArray');
                console.log(currentOrder);
                // storedFiles 배열을 초기화합니다
                storedFiles = [];
                // .grid-container를 비웁니다
                $('.grid-container').empty();
                
                // 현재 순서대로 .grid-container에 파일을 추가하고, storedFiles 배열에 파일을 저장합니다
                for (var i = 0; i < currentOrder.length; i++) {
                    // FileReader 객체를 생성합니다.
                    var reader = new FileReader();
                    // File 객체를 생성하고, FileReader 객체에 전달합니다.
                    var file = new File([storedFiles[currentOrder[i]]], currentOrder[i]);
                    storedFiles.push(file);
                    
                    // 파일의 내용을 읽어오는 것이 완료되면 실행될 함수를 정의합니다.
                    reader.onload = (function (file) {
                        var imgElements = document.querySelectorAll('.img-thumb'); // 클래스명은 img-class로 가정
                        var dataUrl = imgElements[i].src;
                        console.log(dataUrl); // 선택된 각 img 요소의 src 값을 출력
                            $('.grid-container').css('display', 'grid');
                            $('.grid-container').append(
                                "<li class = 'grid-item' file = '" + file.name + "'>" +
                                "<img class = 'grid-thumb' file = '" + file.name + "' id = 'appendimg' src = '" + dataUrl + "' />" +
                                "</li>"
                            );
                    })(file);
                    // 파일의 내용을 data URL로 읽어옵니다.
                    reader.readAsDataURL(file);
                }   
            },
            create: function () {
            }
        });
    });
    
    
    // 끌어서 업로드
    const dropzone = document.querySelector(".ImgGroupUpload_Btn");
    console.log(dropzone);

    // 이미지 드래그해서 업로드
    dropzone.addEventListener("dragover", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropzone.style.backgroundColor = "#eff0f5";
    });

    // 이미지 드래그 놨을때
    dropzone.addEventListener("dragleave", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropzone.style.backgroundColor = "";
    });

    

    // 이미지 드래그 업로드 완료시
    dropzone.addEventListener("drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropzone.style.backgroundColor = "";
        let files = Array.from(event.dataTransfer.files);
        var i = 0;

        for (i = 0; i < files.length; i++) {
            var readImg = new FileReader();
            var file = files[i];
            console.log(file);
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

                // cvf_reload_order();

            });


            // 이미지 갯수 확인 후 최대갯수 안내팝업 노출
            img_count = files.length;
            if (img_count > 20) {
                alert("이미지는 20개까지 첨부하실 수 있습니다.");
                img_count = img_count - files.length;
                return;
            }

            // 이미지 타입 매칭 후 노출
            if (file.type.match('image.*')) {
                storedFiles.push(file);
                console.log(storedFiles);
                readImg.onload = (function (file) {
                    return function (e) {
                        console.log(e);
                        console.log(e.target.result)
                        $('.GalleryTitleArea').show();
                        $('.cvf_uploaded_files').append(
                            "<li class='multiimg' id='multiimg_" + file.name + "' file = '" + file.name + "'>" +
                            "<img class = 'img-thumb' src = '" + e.target.result + "' />" +
                            "<a href = '#' class = 'cvf_delete_image' id='deleteimg_" + file.name + "' file = '" + file.name + "' title = 'Cancel'><img class = 'delete-btn' src = '../Resource/assets/Icon/Delete.svg' /></a>" +
                            "</li>"
                        );
                        $('.cvf_uploaded_files').css('overflow-x', 'scroll');
                        $('.cvf_uploaded_files').css('overflow-y', 'hidden');
                        $('.grid-container').css('display', 'grid');
                        $('.grid-container').append(
                            "<li class = 'grid-item' file = '" + file.name + "'>" +
                            "<img class = 'grid-thumb' id = 'appendimg' src = '" + e.target.result + "' />" +
                            "</li>"
                        );

                        // 업로드한 이미지 상세보기

                        let thumbnail = document.querySelector(".grid-thumb");
                        let imageOverlay = document.querySelector(".BgDimmedImg");
                        let fullImage = document.querySelector(".full-image");
                        let closeButton = document.querySelector(".close-button");

                        thumbnail.addEventListener("click", function () {
                            imageOverlay.style.display = "block";
                            fullImage.src = this.src;
                            console.log(imageOverlay);
                        });

                        closeButton.addEventListener("click", function () {
                            imageOverlay.style.display = "none";
                        });

                        // Hover시 삭제버튼
                        var HoverImg = document.querySelector(".multiimg[file='" + file.name + "']");
                        console.log(HoverImg);
                        var DeleteImg = document.querySelector(".cvf_delete_image[file='" + file.name + "']");


                        HoverImg.onmouseover = function () {
                            if (DeleteImg) {
                                DeleteImg.style.opacity = "1";
                            }
                        };
                        HoverImg.onmouseout = function () {
                            if (DeleteImg) {
                                DeleteImg.style.opacity = "0";
                            }
                        };
                    };
                })(file);
                readImg.readAsDataURL(file);
            }
            else {
                alert('the file ' + file.name + ' is not an image<br/>');
            }

            // if (files.length === (i + 1)) {
            //     setTimeout(function () {
            //         cvf_add_order();
            //     }, 1000);
            // }

        }
    });


    // 버튼 눌러 다중이미지 업로드
    $('body').on('change', '.user_picked_files', function () {

        var files = this.files;
        var i = 0;

        for (i = 0; i < files.length; i++) {
            var readImg = new FileReader();
            var file = files[i];
            console.log(file);
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

                // cvf_reload_order();

            });


            // 이미지 갯수 확인 후 최대갯수 안내팝업 노출
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
                        $('.cvf_uploaded_files').css('overflow-x', 'scroll');
                        $('.cvf_uploaded_files').css('overflow-y', 'hidden');
                        $('.grid-container').css('display', 'grid');
                        $('.grid-container').append(
                            "<li class = 'grid-item' file = '" + file.name + "'>" +
                            "<img class = 'grid-thumb' id = 'appendimg' src = '" + e.target.result + "' />" +
                            "</li>"
                        );

                        // 업로드한 이미지 상세보기

                        let thumbnail = document.querySelector(".grid-thumb");
                        let imageOverlay = document.querySelector("BgDimmedImg");
                        // const fullImage = document.querySelector(".full-image");
                        let closeButton = document.querySelector(".close-button");

                        thumbnail.addEventListener("click", function () {
                            imageOverlay.style.display = "block";
                            fullImage.src = this.src;
                        });

                        closeButton.addEventListener("click", function () {
                            imageOverlay.style.display = "none";
                        });

                        // Hover시 삭제버튼
                        var HoverImg = document.querySelector(".multiimg[file='" + file.name + "']");
                        var DeleteImg = document.querySelector(".cvf_delete_image[file='" + file.name + "']");


                        HoverImg.onmouseover = function () {
                            if (DeleteImg) {
                                DeleteImg.style.opacity = "1";
                            }
                        };
                        HoverImg.onmouseout = function () {
                            if (DeleteImg) {
                                DeleteImg.style.opacity = "0";
                            }
                        };

                    };
                })(file);
                readImg.readAsDataURL(file);
            }
            else {
                alert('the file ' + file.name + ' is not an image<br/>');
            }
        }
    });


    // 카카오지도 API
    kakao.maps.load(() => {
        const mapDivs = document.querySelectorAll('.mapinfo');
        const mapoptions = {
            center: new kakao.maps.LatLng(37.559073, 126.91030),
            level: 3
        };

        const markers = []; // 마커 객체를 저장할 배열
        const infowindows = []; // 인포윈도우 객체를 저장할 배열

        const searchInput = document.getElementById('SearchAddressInput');
        const searchBtn = document.getElementById('SearchAddressBtn');
        const addressinfo = document.getElementById('WeddingAddress');

        searchBtn.addEventListener('click', () => {
            const postpopup = new daum.Postcode({
                oncomplete: function (data) {
                    searchInput.value = data.address;
                    addressinfo.innerText = searchInput.value;
                    const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
                    ps.keywordSearch(data.address, placesSearchCB);
                }
            });
            postpopup.open();
        });

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                const place = data[0];
                const bounds = new kakao.maps.LatLngBounds();
                const newCenter = new kakao.maps.LatLng(place.y, place.x);
                markers.forEach((marker) => {
                    marker.setPosition(newCenter);
                    bounds.extend(newCenter);
                    marker.getMap().setBounds(bounds);
                });
            } else {
                alert('해당 위치의 주소지를 검색할 수 없습니다. 마커 위치를 다시 배치해 주세요.');
            }
        }

        for (let i = 0; i < mapDivs.length; i++) {
            const map = new kakao.maps.Map(mapDivs[i], mapoptions);

            const marker = new kakao.maps.Marker({
                position: map.getCenter(),
                draggable: true
            });
            marker.setMap(map);
            markers.push(marker);

            kakao.maps.event.addListener(marker, 'dragend', function () {
                const position = marker.getPosition();
                const lat = position.getLat();
                const lng = position.getLng();
                const latlng = new kakao.maps.LatLng(lat, lng);
                marker.setPosition(latlng);
                alert('선택하신 위치로 장소가 변경되었습니다. 예식 장소가 정확한지 꼭 확인해 주세요!');

                const geocoder = new kakao.maps.services.Geocoder();
                geocoder.coord2Address(lng, lat, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const address = result[0].address.address_name;
                        const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
                        ps.keywordSearch(address, placesSearchCB);
                    } else {
                        alert('검색 결과가 없습니다.');
                    }
                });
            });
        }

        // 네이버 지도 길찾기

        // 'NaverNav' ID를 가진 클래스 선택
        const naverNav = document.getElementById('NaverNav');
        naverNav.addEventListener('click', () => {
            const geocoder = new kakao.maps.services.Geocoder();
            const position = markers[0].getPosition(); // Marker의 위치 가져오기
            const lat = position.getLat();
            const lng = position.getLng();

            // Marker의 위치를 기반으로 주소값 가져오기
            geocoder.coord2Address(lng, lat, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const address = result[0].address.address_name;

                    // 네이버지도 검색 경로 URL 생성
                    const naverUrl = 'https://map.naver.com/v5/search/' + encodeURIComponent(address);

                    // 새 창에서 네이버지도 검색 경로 열기
                    window.open(naverUrl);
                } else {
                    alert('주소를 찾을 수 없습니다.');
                }
            });
        });

        // 'KakaoNav' ID를 가진 클래스 선택
        const kakaoNav = document.getElementById('KakaoNav');
        kakaoNav.addEventListener('click', () => {
            const geocoder = new kakao.maps.services.Geocoder();
            const position = markers[0].getPosition(); // Marker의 위치 가져오기
            const lat = position.getLat();
            const lng = position.getLng();

            // Marker의 위치를 기반으로 주소값 가져오기
            geocoder.coord2Address(lng, lat, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const address = result[0].address.address_name;

                    // 카카오맵 URL 생성
                    const kakaoUrl = 'https://map.kakao.com/link/search/' + encodeURIComponent(address);

                    // 카카오네비게이션 앱이 설치되어 있는지 확인
                    const isKakaoNavi = (function () {
                        const ua = navigator.userAgent.toLowerCase();
                        return (ua.indexOf('kakaonavi') > -1);
                    })();

                    if (isKakaoNavi) {
                        // 카카오네비게이션 앱이 설치되어 있으면 앱을 열고 해당 위치로 길 안내
                        window.location.href = 'kakaonavi://route?ep=' + lat + ',' + lng + '&by=CAR&name=' + encodeURIComponent(address);
                    } else {
                        // 카카오네비게이션 앱이 없으면 웹페이지에서 해당 위치로 검색 결과 표시
                        window.open(kakaoUrl);
                    }
                } else {
                    alert('주소를 찾을 수 없습니다.');
                }
            });
        });



        // 'TmapNav' ID를 가진 클래스 선택
        const tmapNav = document.getElementById('TmapNav');
        tmapNav.addEventListener('click', () => {
            const geocoder = new kakao.maps.services.Geocoder();
            const position = markers[0].getPosition(); // Marker의 위치 가져오기
            const lat = position.getLat();
            const lng = position.getLng();

            // Marker의 위치를 기반으로 주소값 가져오기
            geocoder.coord2Address(lng, lat, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const address = result[0].address.address_name;

                    // 티맵네비게이션 URL 생성
                    const tmapUrl = 'tmap://route?goalx=' + lng + '&goaly=' + lat + '&goalname=' + encodeURIComponent(address);

                    // 티맵네비게이션 앱이 설치되어 있는지 확인
                    const isTmap = (function () {
                        const ua = navigator.userAgent.toLowerCase();
                        return (ua.indexOf('tmap') > -1);
                    })();

                    if (isTmap) {
                        // 티맵네비게이션 앱이 설치되어 있으면 앱을 열고 주소값으로 길 안내
                        window.location.href = tmapUrl;
                    } else {
                        // 티맵네비게이션 앱이 없으면 모바일에서 확인 안내
                        confirm('모바일에서 확인하실 수 있습니다.');
                    }
                } else {
                    alert('주소를 찾을 수 없습니다.');
                }
            });
        });
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

    // 초대 셀렉트 박스

    (function () {
        let selectInvite = document.querySelector('#custom-select-invite');
        let optionsContainerInvite = document.querySelector('#custom-options-invite');

        if (!selectInvite || !optionsContainerInvite) {
            console.error("One or more elements could not be found in the HTML");
            return;
        }

        let optionsInvite = optionsContainerInvite.querySelectorAll(".custom-option");

        selectInvite.addEventListener('click', toggleOptions);
        optionsInvite.forEach(option => option.addEventListener('click', selectOption));

        function toggleOptions() {
            if (optionsContainerInvite.style.display === 'grid') {
                optionsContainerInvite.style.display = 'none';
                optionsContainerInvite.style.animation = 'slideDown 0.2s ease';
            } else {
                optionsContainerInvite.style.display = 'none';
                optionsContainerInvite.style.display = 'grid';
                optionsContainerInvite.style.animation = 'slideUp 0.2s ease';
            }
        }

        function selectOption() {
            selectInvite.value = this.dataset.value;
            optionsContainerInvite.style.display = 'none';
            // 초대합니다 입력박스
            var inputBox = document.getElementById("TextBoxInput");
            var invitebody = document.getElementById("InviteBodyText");
            var childElement = this.querySelector(".optiondecription");
            var childElementText = childElement.innerText;
            inputBox.value = childElementText;
            invitebody.innerText = childElementText;
        }

        document.addEventListener('click', hideOptions);

        function hideOptions(event) {
            if (!optionsContainerInvite.contains(event.target) && !selectInvite.contains(event.target)) {
                optionsContainerInvite.style.display = 'none';
            }
        }


    })();



    // 계좌번호 그룹추가
    var accountitemIdx = 3;
    var accordionitemIdx = 3;
    document.getElementById("AddAccountBtn").addEventListener("click", function () {
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

    // 서체 변경 셀렉트박스

    const select = document.querySelector('.custom-select');
    const optionsContainer = document.querySelector('.custom-options');
    const options = optionsContainer.querySelectorAll(".custom-option");

    select.addEventListener('click', toggleOptions);
    options.forEach(option => option.addEventListener('click', selectOption));

    function toggleOptions() {
        if (optionsContainer.style.display === 'grid') {
            optionsContainer.style.display = 'none';
            optionsContainer.style.animation = 'slideDown 0.2s ease';
        } else {
            optionsContainer.style.display = 'none';
            optionsContainer.style.display = 'grid';
            optionsContainer.style.animation = 'slideUp 0.2s ease';
        }
    }

    function selectOption() {
        select.value = this.dataset.value;
        optionsContainer.style.display = 'none';
        changeFontFamily(select.value);
    }

    document.addEventListener('click', hideOptions);

    function hideOptions(event) {
        if (!optionsContainer.contains(event.target) && !select.contains(event.target)) {
            optionsContainer.style.display = 'none';
        }
    }

    function changeFontFamily(fontFamily) {
        const bodyTextElements = document.querySelectorAll('.WeddingBodyText');
        bodyTextElements.forEach(element => element.style.fontFamily = fontFamily);

        const titleTextElements = document.querySelectorAll('.WeddingTitleText');
        titleTextElements.forEach(element => element.style.fontFamily = fontFamily);

        const yearMonthElements = document.querySelectorAll('.year-month');
        yearMonthElements.forEach(element => element.style.fontFamily = fontFamily);

        const secCalElements = document.querySelectorAll('.sec_cal');
        secCalElements.forEach(element => element.style.fontFamily = fontFamily);

        const sideContentsElements = document.querySelectorAll('.side_contents');
        sideContentsElements.forEach(element => element.style.fontFamily = fontFamily);

        const btnIconElements = document.querySelectorAll('.BtnIcon');
        btnIconElements.forEach(element => element.style.fontFamily = fontFamily);
    }



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
        $('.WeddingTitleText').css("font-size", $(this).val() + 5 + "px");
        $('.sec_cal .cal_nav .year-month').css("font-size", $(this).val() + 5 + "px");
    });


}


// 연동할 캘린더

$(document).ready(function () {
    calendarInit();
});

function calendarInit() {

    var date = new Date();
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    var kstGap = 9 * 60 * 60 * 1000;
    var today = new Date(utc + kstGap);

    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    function renderCalendar(thisMonth) {
        // 렌더링 코드는 그대로 유지
        // 렌더링을 위한 데이터 정리
        currentYear = thisMonth.getFullYear(); //달력 연도
        currentMonth = thisMonth.getMonth(); //달력 월
        currentDate = thisMonth.getDate(); // 달력 일

        // 이번 달의 첫 날과 마지막 날 구하기
        var firstDay = new Date(currentYear, currentMonth, 1);
        var lastDay = new Date(currentYear, currentMonth + 1, 0);

        // 이번 달의 첫 날이 무슨 요일인지 구하기 (0 = 일요일, 1 = 월요일, ...)
        var firstDayOfWeek = firstDay.getDay();

        // 이전 달의 마지막 날 구하기
        var prevMonthLastDay = new Date(currentYear, currentMonth, 0);
        var prevMonthLastDate = prevMonthLastDay.getDate();

        // 다음 달의 첫 날 구하기
        var nextMonthFirstDay = new Date(currentYear, currentMonth + 1, 1);

        // 현재 월 표기
        $('.year-month').text((currentMonth + 1) + '월 ' + currentDate + '일');

        // 렌더링 html 요소 생성
        var calendar = document.querySelector('.dates');
        calendar.innerHTML = '';

        // 이전 달의 마지막 주
        for (var i = firstDayOfWeek - 1; i >= 0; i--) {
            var date = prevMonthLastDate - i;
            calendar.innerHTML += '<div class="day prev disable">' + date + '</div>';
        }

        // 이번 달
        for (var i = 1; i <= lastDay.getDate(); i++) {
            var dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
            var className = 'day current';
            if (dayOfWeek == 0) {
                className += ' sunday';
            } else if (dayOfWeek == 6) {
                className += ' saturday';
            }
            if (i == currentDate) {
                className += ' today';
            }
            calendar.innerHTML += '<div class="' + className + '">' + i + '</div>';
        }

        // 다음 달의 첫 주
        for (var i = 1; i <= 6 - lastDay.getDay(); i++) {
            var date = i;
            calendar.innerHTML += '<div class="day next disable">' + date + '</div>';
        }

        // 이번 달에 속하지 않는 날짜에 대한 클래스 지정
        var prevMonthDates = document.querySelectorAll('.day.prev');
        var nextMonthDates = document.querySelectorAll('.day.next');
        for (var i = 0; i < prevMonthDates.length; i++) {
            prevMonthDates[i].classList.add('disable');
        }
        for (var i = 0; i < nextMonthDates.length; i++) {
            nextMonthDates[i].classList.add('disable');
        }

        // 오늘 날짜 표기
        if (today.getMonth() == currentMonth) {
            var currentMonthDates = document.querySelectorAll('.dates .current');
            currentMonthDates[today.getDate() - 1].classList.add('today');

            let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
            var currentday = days[today.getDay()];
        
            document.getElementById("CalWeddingDayTitle").innerText = currentday
            document.getElementById("WeddingDateTitle").innerText = (currentMonth + 1) + '월 ' + currentDate + '일';
        }

    }

    // renderCalendar() 함수 호출
    renderCalendar(thisMonth);
}

// 인풋 캘린더

var dateChange = () => {
    let dateInput = document.getElementById("date");
    let dateArr = dateInput.value.split('-');
    let selectedDate = new Date(Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2]));
    selectedDate.setHours(selectedDate.getHours() + 9);  // 한국 표준시의 오프셋은 9시간
    let todaydate = new Date();
    let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let dayName = days[selectedDate.getDay()];

    console.log(selectedDate);

    // 선택한 연,월,일 정리
    // var KorDate = selectedDate.setHours(selectedDate.getHours() + 9);
    var SelectYear = selectedDate.getFullYear();
    var SelectMonth = selectedDate.getMonth();
    var SelectDate = selectedDate.getDate();

    console.log(SelectYear);
    console.log(SelectMonth);
    console.log(SelectDate);

    // 선택한 달의 첫 날과 마지막 날 구하기
    var SelectfirstDay = new Date(SelectYear, SelectMonth, 1);
    var SelectlastDay = new Date(SelectYear, SelectMonth + 1, 0);
    console.log(SelectfirstDay);
    console.log(SelectlastDay);

    // 선택한 달의 첫 날이 무슨 요일인지 구하기 (0 = 일요일, 1 = 월요일, ...)
    var firstDayOfWeek = SelectfirstDay.getDay();

    // 선택한 달의 마지막 날 구하기
    var prevMonthLastDay = new Date(SelectYear, SelectMonth, 0);
    var prevMonthLastDate = prevMonthLastDay.getDate();

    // 선택한 다음 달의 첫 날 구하기
    var nextMonthFirstDay = new Date(SelectYear, SelectMonth + 1, 1);

    // 렌더링 html 요소 생성
    var calendar = document.querySelector('.dates');
    calendar.innerHTML = '';

    // 선택한 달의 마지막 주
    for (var i = firstDayOfWeek - 1; i >= 0; i--) {
        var date = prevMonthLastDate - i;
        calendar.innerHTML += '<div class="day prev disable">' + date + '</div>';
    }

    // 선택한 이번 달
    for (var i = 1; i <= SelectlastDay.getDate(); i++) {
        var dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
        var className = 'day current';
        if (dayOfWeek == 0) {
            className += ' sunday';
        } else if (dayOfWeek == 6) {
            className += ' saturday';
        }
        if (i == currentDate) {
            className += ' today';
        }
        calendar.innerHTML += '<div class="' + className + '">' + i + '</div>';
    }

    // 다음 달의 첫 주
    for (var i = 1; i <= 6 - SelectlastDay.getDay(); i++) {
        var date = i;
        calendar.innerHTML += '<div class="day next disable">' + date + '</div>';
    }


    if (selectedDate < todaydate) {
        alert("오늘 날짜 이전의 날짜는 선택할 수 없습니다.");
        return;
    }

    // 날짜 표기 방법에 대한 정의 : 10보다 작으면 20 -> 2로 표기
    let monthDisplay = (parseInt(dateArr[1]) < 10) ? dateArr[1].replace("0", "") : dateArr[1];
    let dateDisplay = (parseInt(dateArr[2]) < 10) ? dateArr[2].replace("0", "") : dateArr[2];

    // 영역별 월/일/요일 표기
    document.getElementById("TextDateCalendar").innerText = `${monthDisplay}월 ${dateDisplay}일`;
    document.getElementById("WeddingDateTitle").innerText = `${monthDisplay}월 ${dateDisplay}일`;
    document.getElementById("CalWeddingDayTitle").innerText = dayName;
    document.getElementById("WeddingDayTitle").innerText = dayName;

    // 갱신될때마다 Today 초기화
    let currentMonthDates = document.querySelectorAll('.dates .current');
    currentMonthDates.forEach(date => {
        date.classList.remove('today');
    });

    // 디데이 관련 코드
    let today = new Date();
    let dDay = selectedDate - today;
    let dDayInDays = Math.floor(dDay / (1000 * 60 * 60 * 24));
    let dDaycount = document.getElementById('dday');
    dDaycount.innerText = `${dDayInDays}` + '일';

    // 선택한 일자 표기
    currentMonthDates[parseInt(dateInput.value.split('-')[2]) - 1].classList.add('today');
};




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
        document.getElementById("CalAMPM").innerText = AMPM;
    } else if (e.id === "SelectTime") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("WeddingTime").innerText = AMPM;
        document.getElementById("CalWeddingTime").innerText = AMPM;
    } else if (e.id === "SelectMinute") {
        // 선택된 ID에 텍스트 출력
        document.getElementById("WeddingMinute").innerText = AMPM;
        document.getElementById("CalWeddingMinute").innerText = AMPM;
    }

}

// 예식장 명 입력
function WeddingLocationInput() {
    var WeddingLocateTitle = document.getElementById("WeddingLocateTitleInput").value;
    document.getElementById("WeddingLocateTitle").innerText = WeddingLocateTitle;
    document.getElementById("WeddingLocateTitleMap").innerText = WeddingLocateTitle;
}

// 예식장 층,홀 입력
function WeddingHallInfoInput() {
    var WeddingLocateTitle = document.getElementById("WeddingHallInfoInput").value;
    document.getElementById("WeddingHallInfo").innerText = WeddingLocateTitle;
    document.getElementById("WeddingHallInfoMap").innerText = WeddingLocateTitle;
}


// 청첩장 제목 입력
function InvitationTitleInput() {
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

    document.getElementById("accountinformation").innerText = PrintAccount;
};

// 신랑측 은행
function printBankGroom() {
    let PrintAccount = document.getElementById('BankGroomInput').value;

    document.getElementById("bankinfo").innerText = PrintAccount;
};

// 신랑측 예금주
function printHolderGroom() {
    let PrintAccount = document.getElementById('HolderGroomInput').value;

    document.getElementById("holderinfo").innerText = PrintAccount;
};

