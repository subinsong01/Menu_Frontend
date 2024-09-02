import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

function MenuAdminUpdatePage(props) {
    const { menuno } = props;

    const [menuData, setMenuData] = useState({});

    const upf = useRef(0);

    let menuno2 = 6; // 테스트용 번호. 통합할경우 지워야함

    function fetchOne() {
        let url = 'http://localhost:8080/menus/' + menuno2;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log("fetchOne: ", json);
                setMenuData(json.data);
                upf.current.no.value = json.data.no;
                upf.current.gubun.value = json.data.gubun;
                upf.current.name.value = json.data.name;
                upf.current.price.value = json.data.price;
                upf.current.sayong.value = json.data.sayong;
            });
    }

    function deleteOne() {
        let url = 'http://localhost:8080/menus/' + menuno2;
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    }

    useEffect(fetchOne, []);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        // 체크 안하면 "N"으로 설정해줌
        data.sayong = data.sayong ? data.sayong : "N";
        console.log(data);

        let url = 'http://localhost:8080/menus';
        fetch(url, {
            method: 'POST', // 새로운 값 추가시 POST
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
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-center mt-10">메뉴수정</h1>
            <form ref={upf} onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <label className="w-full text-center">
                        메뉴번호 {menuData.no}
                        <input type="hidden" name="no" />
                    </label>
                    <label className="w-full text-center">
                        구분:
                        <select name="gubun" className="mt-1 block w-full border-solid border-2 border-indigo-200">
                            <option>식사</option>
                            <option>간식</option>
                        </select>
                    </label>
                    <label className="w-full text-center  ">
                        메뉴명
                        <input name="name" className="mt-1 block w-full border-solid border-2 border-indigo-200" />
                    </label>
                    <label className="w-full text-center">
                        가격
                        <input type="number" name="price" className="mt-1 block w-full border-solid border-2 border-indigo-200" />
                    </label>
                    <label className="w-full text-center">
                        사용여부:
                        <input type="checkbox" name="sayong" value="Y" className="mt-1 mr-6 ml-4" />
                    </label>
                    <div className="flex justify-center space-x-4 mt-4">
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="등록" />
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">목록</button>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={deleteOne}>삭제</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MenuAdminUpdatePage;
