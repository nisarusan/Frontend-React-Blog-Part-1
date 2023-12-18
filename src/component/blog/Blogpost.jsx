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


// If u want url-slug
// function Blogpost() {

//     function convertToSlug(text) {
//         return text
//             .toLowerCase()
//             .replace(/ /g, '-')        // Replace spaces with dashes
//             .replace(/[^\w-]+/g, ''); // Remove non-word characters except dashes
//     }
    
//     // Usage:
    
//     const { title } = useParams();

//     useEffect(() => {
//         document.title = `Blog: ${title}`;
//     }, [title]);

//     const slug = title.toLowerCase().replace(/ /g, '-');

//     // Find the blog post based on the slug
//     const blog = data.find(post => convertToSlug(post.title) === slug);

//     if (blog) {
//         return (
//             <main className="blog">
//                 <div className="intro">
//                     <h3>{blog.title}</h3>
//                     <span>{blog.author}</span>
//                 </div>
//                 <p>{blog.comments} Reacties <span>{blog.shares} gedeeld</span></p>
//             </main>
//         );
//     } else {
//         // Handle case when the blog post with that title is not found
//         return <p>Blog Not Found</p>;
//     }
// }

