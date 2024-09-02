import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuAdminListPage() {
    const [listData, setListData] = useState([]);
    const navigate = useNavigate();

    function fetchList() {
        let url = 'http://localhost:8080/menus';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log("fetchList: ", json);
                setListData(json.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }

    useEffect(fetchList, []);

    return (
        <div>
            <h1 className='font-bold text-xl text-center mt-4'>메뉴목록</h1>
            <div className='flex justify-center pt-6'>
                <select name='gubun' className='flex justify-center mr-4'>
                    <option>전체</option>
                    <option>식사</option>
                    <option>간식</option>
                </select>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={fetchList}>새로고침</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={() => navigate("/")}>메인</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={() => navigate("/input")}>등록</button>
                </div>
            </div>
            <div className='flex justify-center'>
            <table className="border-collapse border border-slate-400 mt-6">
                <thead>
                    <tr>
                        <th className="border border-slate-300 bg-sky-500/75 text-white font-bold">구분</th>
                        <th className="border border-slate-300 bg-sky-500/75 text-white font-bold">메뉴명</th>
                        <th className="border border-slate-300 bg-sky-500/75 text-white font-bold">단가</th>
                        <th className="border border-slate-300 bg-sky-500/75 text-white font-bold">사용</th>
                        <th className="border border-slate-300 bg-sky-500/75 text-white font-bold">주문수</th>
                    </tr>
                </thead>
                <tbody>
                        {listData.map((dt,index)=>{
                            return (
                        <tr key={index}>
                            <td>{dt.gubun}</td>
                            <td><button onClick={(e)=>{
                                e.preventDefault();
                                navigate('/update')
                            }}>{dt.name}</button></td>
                            <td>{dt.price}</td>
                            <td>{dt.sayong}</td>
                            <td></td>
                        </tr> 
                        )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MenuAdminListPage;
