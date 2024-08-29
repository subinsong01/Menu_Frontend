import React, { useEffect, useState } from 'react';

function MenuAdminListPage(props) {

    const [ listData, setListData ] = useState([])

    function fetchList(){
        let url = 'http://localhost:8080/menus'
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log("fetchList : ",json)
            setListData(json.data)
        });
    }
    
    useEffect(fetchList,[])

    return (
        <>
            <h1>메뉴목록</h1>
            <div>
                <select name='gubun'>
                    <option>전체</option>
                    <option>식사</option>
                    <option>간식</option>
                </select>
                <button onClick={fetchList}>새로고침</button>
                <button>메인</button>
                <button>목록</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>메뉴명</th>
                            <th>단가</th>
                            <th>사용</th>
                            <th>주문수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map((dt,index)=>{
                            return (
                        <tr key={index}>
                            <td>{dt.gubun}</td>
                            <td><a href="#" onClick={(e)=>{
                                e.preventDefault();
                                
                            }}>{dt.name}</a></td>
                            <td>{dt.price}</td>
                            <td>{dt.sayong}</td>
                            <td></td>
                        </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MenuAdminListPage;