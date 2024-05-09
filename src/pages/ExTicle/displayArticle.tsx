import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {marked} from 'marked';
import hljs from 'highlight.js';

function DisplayArticle() {
    const { articleFile } = useParams(); 
    const [articleContent, setArticleContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch and convert markdown
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/src/assets/exticle/texts/${articleFile}`);
                const text = await response.text();
                const html = await marked(text, { renderer: customRenderer });
                setArticleContent(html);
            } catch (error) {
                console.error('Failed to load article:', error);
                setArticleContent('<p>Error loading article.</p>');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [articleFile]);

    useEffect(() => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block as HTMLElement);
        });
    }, [articleContent]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='bg-[#1C465C] p-10'>
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
        </div>
    );
}

const customRenderer = new marked.Renderer();
customRenderer.heading = function(text, level) {
    
    if (level === 1) {
        return `<h1 style="t"><strong><span style="color: white; font-size: 40px; margin-top: 10px; margin-bottom: 10px;">${text}\n\n</span></strong></h1>`;
    } else {
        return `<h${level}><span style="font-weight: 600; color:lightgrey; margin-top: 20px; margin-bottom: 10px; font-size:20px">${text}\n</span></h${level}>\n\n`;
    }
};
customRenderer.paragraph = function(text) {
    return `<p style="color:white; margin-top: 10px; margin-bottom: 10px; font-size:18px">${text}</p>`;
}
customRenderer.image = function(href, title, text) {
    return `<img src="${href}" alt="${text}" title="${title}" style="width: 100%; height: auto; margin-top: 10px; margin-bottom: 10px; border-radius: 10px;">`;
}
customRenderer.list = function(body, ordered) {
    const tag = ordered ? 'ol' : 'ul';
    return `<${tag} style="color: white; padding-top: 10px; padding-bottom: 10px;">${body}</${tag}>`;
};

customRenderer.listitem = function(text) {
    return `<li style="color: white;">• ${text}</li>`;
};

customRenderer.code = function(code, language) {
    return `<pre><code class="language-${language}" style="border-radius: 10px; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); margin-top: 10px; margin-bottom: 10px;">${code}</code></pre>`;
};

export default DisplayArticle;
