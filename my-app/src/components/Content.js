
import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: ''
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: "savedPosts"
            })
        }, 2000)
    }
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label>
                            <input 
                            onChange={(event) => }
                            type="search" 
                            id="searchInput" 
                            placeholder="My Author"/>
                        </label>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }

                    {/* Part 1: Creating the map function */}

                        {/* {
                    savedPosts.map((post)=>{
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random"/>
                                <p>{post.description}</p>
                                </div>
                        })
                    } */}


                    {/* Part 2: Creating a child component */}

                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        )
    }
}

export default Content
