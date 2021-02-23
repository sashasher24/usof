import {  useState,  useEffect } from 'react';
import axios from 'axios';

function Questions() {
    const [data, setData] = useState({});

    const url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
        }
        fetchData();
    }, []);

    console.log(data);


    return (
        <>
        {(data.length) ? 
            data.items.map(item => (
                <div key={item.question_id}>
                    <p>{item.title}</p>
                </div>
            ))
        :
            <h1>PRIVET</h1>
        }
        {/* {data.items.map(item => (
            <div key={item.question_id}>
                <p>{item.title}</p>
            </div>
        ))} */}
        {/* <h1>PRIVET</h1> */}
        </>
    )
}

export default Questions;