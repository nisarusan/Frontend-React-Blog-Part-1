import React, { useState } from "react";
import axios from "axios";

function Index() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
    const [objectData, setObjectData] = useState('');

    async function postObject() {
        try {
            const response = await axios.post('https://localhost:3000/posts/', {
                "title": "San",
                "subtitle": "hello",
                "content": "Hello",
                "created": "2023-09-21T09:30:00Z",
                "author": "Nu",
                "readTime": 4,
                "comments": 4,
                "shares": 4
            });
            setObjectData(response.data); // Update objectData state with the response data
        } catch (error) {
            console.error("Error posting object:", error);
        }
    }

    async function getObject() {
        try {
            const response = await axios.get('https://localhost:3000/posts');
            setData(response.data); // Update data state with the response data or response.data.someKey
        } catch (error) {
            console.error("Error getting object:", error);
        }
    }

    console.log(objectData); // Log inside a useEffect or use it within the component
    console.log(data); // Log inside a useEffect or use it within the component

    return (
        <>
            <button type="button" onClick={postObject}>Post</button>
            <button type="button" onClick={getObject}>Get Object</button>
            <button type="button" onClick={() => setCount((count) => count + 1)}>Count + {count}</button>
        </>
    );
}

export default Index;
