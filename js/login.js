const login_id_input = document.getElementById("login-id")
const login_passwd_input = document.getElementById("login-password")
const join_id_input = document.getElementById("join-id")
const join_passwd_input = document.getElementById("join-password")
const join_nickname_input = document.getElementById("join-nickname")

function login(){
    var loginIdValue = login_id_input.value
    var loginPassValue = login_passwd_input.value
    fetch("http://localhost:5000/login", {  // api 요청 보낼 url ㅇㅇ아니면 우리가 백엔드에 url을 맞춰줄수도 있고 백엔드 관리상 저렇게 못하는 이유가 있을지도 oo
        method: "POST",  // 백엔드에서 정해진 방식임
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user-id": loginIdValue,  // 붙여야함, json 규칙임
            "user-passwd": loginPassValue
        })

    }).then((response) => response.json())  // 이제 명령 보내고, 그 다음 들어온 응답을 json으로 변환함
    .then((response) => {  // 이제 받은 응답을 사용해서 로그인 성공 실패 처리를 하는거임  그런갑다해 나도 이해 안가 몰라 뭔 개소린지 모르겠어 이렇게 해야 나중에 응답 사용 가능함
        if(response.rc == 200){
            alert("로그인에 성공하셨습니다")
            location.href= `cake.html?nickname=${response.nickname}`  // 주소 바꾸는 기능
        }
        else{
            alert("로그인에 실패하셨습니다")

        }
    })
    .catch((error) => console.log(error))  // fetch 에러날수도 있는데, 왜 에러났는지 콘솔에 로그로 남겨서 파악하는겅미
}

function register(){ // 끝. 이 함수도 만들건데 위에랑 거의 비슷할거임 
    var joinIdValue = join_id_input.value
    var joinPassValue = join_passwd_input.value
    var joinNicknameValue = join_nickname_input.value 
    fetch("http://localhost:5000/join", {  // api 요청 보낼 url ㅇㅇ아니면 우리가 백엔드에 url을 맞춰줄수도 있고 백엔드 관리상 저렇게 못하는 이유가 있을지도 oo
        method: "POST",  // 백엔드에서 정해진 방식임
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user-id": joinIdValue,  // 붙여야함, json 규칙임
            "user-passwd": joinPassValue,
            "user-nickname": joinNicknameValue,
        })

    }).then((response) => response.json())  // 이제 명령 보내고, 그 다음 들어온 응답을 json으로 변환함
    .then((response) => {  // 이제 받은 응답을 사용해서 로그인 성공 실패 처리를 하는거임  그런갑다해 나도 이해 안가 몰라 뭔 개소린지 모르겠어 이렇게 해야 나중에 응답 사용 가능함
        if(response.rc == 200){
            alert("회원가입에 성공하셨습니다")
        }
        else if(response.rc == 400){
            alert("이미 존재하는 id입니다.")

        }
    })
    .catch((error) => console.log(error))  // fetch 에러날수도 있는데, 왜 에러났는지 콘솔에 로그로 남겨서 파악하는겅ㅇ

}