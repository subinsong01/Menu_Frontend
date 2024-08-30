import React from 'react';
import { useNavigate } from 'react-router-dom';


function MainPage(props) {
  const navigate = useNavigate();
  return (
    <div className="md:container md:mx-auto">
      <h1 className='font-bold text-xl text-center mt-4'>메뉴판 관리 메인</h1>
      <div className='flex justify-center pt-6'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={() => navigate("/")}
      >메뉴판</button>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={() => navigate("/list")}>메뉴관리</button>
      <button 
      onClick={() => navigate("/manage")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">주문관리</button>
      </div>
    </div>
  );
}

export default MainPage;