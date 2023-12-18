import data from '../../constants/data.json';
import './Blog.css';

function Blog() {
    return (
        <>
            <h1>Bekijk alle {data.length} posts op het platform</h1>
            <section>
                {data.map((blogs) => (
                    <main key={blogs.id} className="blog">
                        <div className="intro">
                            <h3>{blogs.title}</h3><span>{blogs.author}</span>
                        </div>
                        <p>{blogs.comments} Reacties <span>{blogs.shares} gedeeld</span></p>
                    </main>
                ))}
            </section>

        </>
    )
}

export default Blog;


