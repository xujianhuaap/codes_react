import React from 'react'
import './blog.css'
const contentTable = function (arr) {
    const items=arr.map((item)=>{
        return <li className='item-content'> {item.title}</li>
    })
    return <ul> {items}</ul>
}
class Blog extends React.Component{

    constructor(props){
        super(props);
        this.setState ({
            data: []
        })
    }
    componentWillMount(){
        this.setState({
            data: [{title: '苟日新,日日新',tag:'求新',date:'2017-12-10',content:'保持新鲜，是保持战斗力的唯一途径'},
                {title: '格物致知',tag:'求新',date:'2017-12-10',content:'保持新鲜，是保持战斗力的唯一途径'},
                {title: '文胜质则史,质胜文则史',tag:'求新',date:'2017-12-10',content:'保持新鲜，是保持战斗力的唯一途径'}]
        })
    }
    render(){
        return  <div className="container">
            <div className="blog-content-table">
                {contentTable(this.state.data)}
            </div>

            <div className="blog-main">
                <div className="blog-title">{this.state.data[0].title}</div>
                <div className='container-tag-date'>
                    <div className= 'blog-tag'>{this.state.data[0].tag}</div>
                    <div className = 'blog-date'>{this.state.data[0].date}</div>
                </div>
                <div className='blog-content'>{this.state.data[0].content}</div>
            </div>

        </div>
    }
}

export default Blog;