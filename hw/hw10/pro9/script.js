id = prompt('아이디를 입력하세요');

if (id == 'std01' || id == 'std02' || id == 'std03') {
    password = prompt('비밀번호를 입력하세요');

    if (id == 'std01') {
        if (password === '1111') {
            location.href = "./login.html"
        } else {
            location.href = "./error.html"
        }
    } else if (id == 'std02') {
        if (password === '2222') {
            location.href = "./login.html"
        } else {
            location.href = "./error.html"
        }
    } else if (id == 'std03') {
        if (password === '3333') {
            location.href = "./login.html"
        } else {
            location.href = "./error.html"
        }
    }
} else {
    location.href = "./error.html"
}