import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MyCarousel from './MyCarousel';

class Home extends Component {
    state = {
        posts: []
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No post yet</div>
            )
        return (
            <div className="container">
                <Typography variant="h4" className="center">Welcome to Urban Save</Typography>
                <MyCarousel />
                <Typography variant="h4" className="center">Our Products</Typography>
                {postList}
            </div >
        )
    }
}

export default Home 