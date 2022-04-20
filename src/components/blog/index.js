import PropTypes from "prop-types"
import * as React from "react"
import ReactMarkdown from "react-markdown"



const BlogPage = ({ blog }) => {
    return <div style={{ margin: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{blog.title}</h1>
        <ReactMarkdown>{blog.data}</ReactMarkdown>
    </div>
}

BlogPage.propTypes = {
    blog: PropTypes.objectOf({
        data: PropTypes.string,
        title: PropTypes.string,
    })
}

export default BlogPage;
