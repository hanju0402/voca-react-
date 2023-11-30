import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { useRef } from "react";

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    const plusDay = Number(days.length) + 1;


    // const dayRef = useRef(days.length);

    function addDay() {
        fetch(`http://localhost:3001/days/`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                day : plusDay
            }),
        })
        .then(res => {
            if (res.ok) {
                alert('생성이 완료 되었습니다.');
                navigate(`/`);
            }
        });

    }

    return <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
}