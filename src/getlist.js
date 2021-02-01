import React, { Component } from 'react'
import axios from 'axios'
 class getlist extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errormsg:""
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(Response =>{
            console.log(Response);
            this.setState({posts:Response.data})
        })
        .catch(error =>{
        console.log(error);
        this.setState({errormsg:"Error retriving data"})
        })
    }
    render() {
        const {posts,errormsg} = this.state
        return (
            <div align="center">
                List of posts
                {
                    posts.length?
                posts.map(post => <div key={post.id}>{post.title}</div>):
                null
                }
                {errormsg ? <div>{errormsg}</div>:null}
            </div>
        )
    }
}
export default getlist;
