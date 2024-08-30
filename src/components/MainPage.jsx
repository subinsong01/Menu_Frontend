import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>메뉴판 관리 메인</h1>
      <button onClick={() => navigate("/")}>메뉴판</button>
      <button onClick={() => navigate("/list")}>메뉴관리</button>
      <button onClick={() => navigate("/manage")}>주문관리</button>
    </div>
  );
}

export default MainPage;