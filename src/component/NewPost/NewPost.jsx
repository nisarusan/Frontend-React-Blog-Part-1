
import React, { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./NewPost.css";

    function NewPost() {

        const [formState, setFormState ] = useState( {
            title: "",
            subtitle: "",
            author: "",
            content: "",
            created: "",
            comments: "",
            shares: 0
        });
    
        function handleChange(e) {
            const { id, value } = e.target;
    
            setFormState({
                ...formState,
                [id]: value,
            });
        }
    
        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState)

        }
        return (
            <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Titel</label>
                    <input type="text" onChange={handleChange} id={"title"} value={formState.title}/>
                </div>
                <div>
                    <label>Subtitel</label>
                    <input type="text" onChange={handleChange} id={"subtitle"} value={formState.subtitle}/>
                </div>
                <div>
                    <label>Auteur</label>
                    <input type="text" onChange={handleChange} id={"author"} value={formState.author}/>
                </div>
                <div>
                    <label>Bericht</label>
                    <input type="text" onChange={handleChange} id={"content"} value={formState.content}/>
                </div>
                <button type="submit">Verzenden</button>
            </form>
        </>
        );
    }

export default NewPost;