import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MenuItemList(props){
    const {title,dataList,onMenuClick} = props

    return <>
    <h2>{title}</h2>
    <ul style={{listStyle:"none"}}>
        {dataList.map((dt,index)=>{
            return <li key={index}><a href="#" onClick={(e)=>{
                e.preventDefault();
                onMenuClick(dt.no);
            }}>{dt.name}</a> / {dt.price} </li>
        })}
    </ul>
    </>
}
//주문현황
function OrderStatusPage(props){
    const {jumunList} = props
    const [tableNo, setTableNo] = useState(1)

    return <>
        <h1>주문현황 : 테이블번호 : {tableNo}</h1>

    </>
}




function MenuOrderPage(props) {
    const [siksaList, setSiksaList] = useState([])//식사류
    const [gansikList, setGansikList] = useState([])//간식류
    const [jumunList, setJumunList] = useState([])//주문현황목록
    const [ tableNo, setTable ] = useState(3) //테이블번호
    const [ seq, setSeq ] = useState(0) //화면갱신용변수
    //초기화코드
    useEffect(()=>{
        setSiksaList([
            {no : 1, name:"비빔밥", price:7000},
            {no : 2, name:"김치복음밥", price:7000},
        ])
        setGansikList([
            {no : 3, name:"라면", price:5000},
            {no : 4, name:"라볶이", price:6000},
        ])
    },[])

    //식사류,간식류 선택시 주문현황으로 데이터 전달
    function siksaJumun(menuno){
        for(let ss of siksaList){
            if(ss.no == menuno){
                //주문갯수변수 추가(amount)
                if(ss.amount){
                    ss.amount += 1
                    setSeq(prev=>prev+1)
                }
                else{
                    ss.amount = 1
                    setJumunList( [...jumunList, ss] )
                }
                break;
            }
        }
    }
    function gansikJumun(menuno){
        for(let ss of gansikList){
            if(ss.no == menuno){
                //주문갯수변수 추가(amount)
                if(ss.amount){
                    ss.amount += 1
                    setSeq(prev=>prev+1)
                }
                else{
                    ss.amount = 1
                    setJumunList( [...jumunList, ss] )
                }
                break;
            }
        }
    }

    return (
        <>
    <Container>
        <h1>주문화면</h1>
      <Row>
        <Col xs={3}>
        <h2>식사류</h2>
        <ul style={{listStyle:"none"}}>
            {siksaList.map((dt,index)=>{
                return <li key={index}><a href="#" onClick={(e)=>{
                    e.preventDefault();
                    siksaJumun(dt.no) //식사주문
                }}>{dt.name}</a> / {dt.price}</li>
            })}
        </ul>
        </Col>
        <Col xs={3}>간식류<MenuItemList 
                            title="간식류" 
                            dataList={gansikList}
                            onMenuClick={gansikJumun}/></Col>
                            
        <Col xs={6}>주문현황:{jumunList.length}
            <h2>주문현황 : 테이블 번호 : {tableNo}번</h2>
            <ul style={{listStyle:"none"}}>
                { jumunList.map((jm,index)=>{
                    return <li key={index}>
                        <button onClick={()=>{ //주문삭제
                            const idx = jumunList.findIndex(function(item) {return item.no === jm.no}) //
                            if (idx > -1) {
                                //삭제하기전에 amount변수를 삭제해야 다시 추가 가능함
                                delete jumunList[idx].amount
                                jumunList.splice(idx, 1)
                            }
                            setSeq(prev => prev+1)
                        }}>X</button>
                        {jm.name} {jm.price} 
                        <button onClick={(e)=>{
                            jm.amount += 1;
                            setSeq(prev => prev+1)
                        }} >증가</button>
                        <button onClick={(e)=>{
                            //갯수가 0인데 감소시킨경우
                            if(jm.amount==0) return;
                            jm.amount -= 1;
                            setSeq(prev => prev+1)
                        }} >감소</button>
                        {jm.amount}  {jm.amount*jm.price}
                    </li>
                })}
            </ul>
            <h3>총가지수 : {jumunList.length}</h3>
            <h3>총갯수 : {jumunList.reduce((acc, cur) => {
                            return acc + cur.amount;
                            }, 0)}</h3>
            <h3>총금액 : {jumunList.reduce((acc, cur) => {
                            return acc + (cur.price*cur.amount);
                            }, 0)}</h3>
        </Col>
      </Row>
    </Container>

        </>
    );
}

export default MenuOrderPage;