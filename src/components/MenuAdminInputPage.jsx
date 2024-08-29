import React from 'react';

function MenuAdminInputPage(props) {

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        //체크안하면 "N"으로 설정해줌
        data.sayong = (data.sayong)?data.sayong:"N"
        console.log(data);

        let url = 'http://localhost:8080/menus'
        fetch( url , {
            method: 'POST', //새로운값 추가시 POST
            body: JSON.stringify(data),//추가할객체
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then((response) => response.json())
        .then((json) => {
            alert("등록완료")
            console.log(json)
        });
    }

    return (
        <div>
            <h1>메뉴등록</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    구분 : 
                    <select name="gubun">
                        <option>식사</option>
                        <option>간식</option>
                    </select>
                </label><br></br>
                <label>
                    메뉴명 : 
                    <input name='name'></input>
                </label><br></br>
                <label>
                    가격 : 
                    <input type="number" name='price'></input>
                </label><br></br>
                <label>
                    사용여부 : 
                    <input type="checkbox" name='sayong' value="Y"></input>
                </label><br></br>
                <input type='submit' value="등록"></input>
                <button>목록</button>
            </form>
        </div>
    );
}

export default MenuAdminInputPage;