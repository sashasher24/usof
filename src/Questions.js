import {  useState,  useEffect } from 'react';
import axios from 'axios';

function Questions() {
    const [data, setData] = useState({});

    const url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((';
    useEffect(async () => {
        const result = await axios(url);
        setData(result.data.items);
    }, []);

    console.log(data);


    return (
        <>
        {data.map(item => (
            <div key={item.question_id}>
                <p>{item.title}</p>
            </div>
        ))}
        </>
    )
}

export default Questions
;