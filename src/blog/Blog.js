import React from 'react'
import './blog.css'
import titleImg from './blog.svg'

class Blog extends React.Component{
    contentTable(arr) {
        const items=arr.map((item,index)=>{
            return <li className='item-content' key={index} onClick={(e)=>this.handleClick(item,e)}> {item.title}</li>
        })
        return <ul className='wrapper-content'> {items}</ul>
    }

    handleClick(item,e){
        console.log(item.title)
        this.setState({selectedData:item})
    }

    constructor(props){
        super(props);
        this.contentTable=this.contentTable.bind(this)

    }
    componentWillMount(){
        this.setState({
            data: [{title: '苟日新,日日新',tag:'求新',date:'2017-12-10',content:'保持新鲜，是保持战斗力的唯一途径'},
                {title: '格物致知',tag:'探索',date:'2017-12-11',content:'探索是让我们获得巨大的满足'},
                {title: '文胜质则史,质胜文则史',tag:'中庸',date:'2017-12-13',content:'平心静气,顺势而起'}],
            selectedData: {title: '文胜质则史,质胜文则史',tag:'求新',date:'2017-12-10',content:'保持新鲜，是保持战斗力的唯一途径'}
        })
    }
    render(){
        return  <div className="container">
            <div className="blog-content-table" >
                <div>目录</div>
                {this.contentTable(this.state.data)}
            </div>

            <div className="blog-main">
                <img src={titleImg}/>
                <div className="blog-title">{this.state.selectedData.title}</div>
                <div className='container-tag-date'>
                    <div className= 'blog-tag'>{this.state.selectedData.tag}</div>
                    <div className = 'blog-date'>{this.state.selectedData.date}</div>
                </div>
                <div className='blog-content'>{this.state.selectedData.content}</div>
            </div>

        </div>
    }
}
export default Blog;