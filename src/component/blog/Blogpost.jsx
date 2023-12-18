import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from '../../constants/data.json';

function Blogpost({ }) {
    const { id } = useParams();
    useEffect(() => {
        document.title = `Blog #${id}`;
    }, []);

    const ind = id - 1;
    console.log(id);
    return (
        <>
            {id && <>
                <main className="blog">
                    <div className="intro">
                        <h3>{data[ind].title}</h3>
                        <span>{data[ind].author}</span>
                    </div>
                    <p>{data[ind].comments} Reacties <span>{data[ind].shares} gedeeld</span></p>
                </main>
            </>}
        </>
    );
}

export default Blogpost;
