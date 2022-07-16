const messageInput = document.getElementById("message-contents");
const nicknameInput = document.getElementById("message-nickname");

let query = window.location.search;
let param = new URLSearchParams(query)
function postMessageToServer(){
    var _msg = messageInput.value;
    var _nickname = nicknameInput.value;

    if (_msg == "" | _nickname == ""){
        alert("닉네임 혹은 메세지를 확인하세요");
        return;
    }   
    fetch(`http://localhost:5000/message?cakeUser=${param.get("nickname")}`, {  // api 요청 보낼 url 아니면 우리가 백엔드에 url을 맞춰줄수도 있고 백엔드 관리상 저렇게 못하는 이유가 있을지도
        method: "POST",  // 백엔드에서 정해진 방식임
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nickname": _nickname,  // 붙여야함, json 규칙임
            "message": _msg
        })

    }).then((response) => response.json())  // 이제 명령 보내고, 그 다음 들어온 응답을 json으로 변환함
    .then((response) => {  // 이제 받은 응답을 사용해서 로그인 성공 실패 처리를 하는거임 뭔 개소린지 모르겠어 이렇게 해야 나중에 응답 사용 가능함
        if(response.rc == 200){
            alert("메세지를 보냈습니다")
            location.href= `cake.html?nickname=${param.get("nickname")}`  // 주소 바꾸는 기능
        }
        else{
            alert("서버 오료가 발생하였습니다")

        }
    })
    .catch((error) => {
        console.log(error)
            alert("서버 오료가 발생하였습니다")
    })  // fetch 에러날수도 있는데, 왜 에러났는지 콘솔에 로그로 남겨서 파악하는겅미

}