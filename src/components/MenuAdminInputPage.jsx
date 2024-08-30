import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuAdminInputPage(props) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        // 체크하지 않으면 "N"으로 설정
        data.sayong = data.sayong ? data.sayong : "N";
        console.log(data);

        let url = 'http://localhost:8080/menus';
        fetch(url, {
            method: 'POST', // 새로운 값을 추가시 POST
            body: JSON.stringify(data), // 추가할 객체
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("등록완료");
                console.log(json);
            });
    }

    return (
        <div>
            <h1 className='font-bold text-xl text-center mt-4'>메뉴 등록</h1>
            <div className='flex justify-center pt-6'>
                <form onSubmit={handleSubmit}>
                    <label>
                        구분:
                        <select name="gubun">
                            <option>식사</option>
                            <option>간식</option>
                        </select>
                    </label>
                    <br />
                    <label className='container mx-auto'>
                        메뉴명:
                        <input name='name' required />
                    </label>
                    <br />
                    <label>
                        가격:
                        <input type="number" name='price' required />
                    </label>
                    <br />
                    <label>
                        사용여부:
                        <input type="checkbox" name='sayong' value="Y" />
                    </label>
                    <br />
                    <input 
                        type='submit' 
                        value="등록" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mt-4" 
                    />
                    <button 
                        type="button"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            navigate("/list");
                        }}
                    >
                        목록
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MenuAdminInputPage;
