import React from 'react';
import { useNavigate } from 'react-router-dom';


function MainPage(props) {
  const navigate = useNavigate();
  return (
    <div className="md:container md:mx-auto">
      <h1 className='font-bold'>메뉴판 관리 메인</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={() => navigate("/")}
      >메뉴판</button>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/list")}>메뉴관리</button>
      <button 
      onClick={() => navigate("/manage")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">주문관리</button>
    </div>
  );
}

export default MainPage;