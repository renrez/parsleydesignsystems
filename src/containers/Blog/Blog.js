import React, { Component } from 'react';
import axios from 'axios';
//import SectionContainer from '../../hoc/SectionContainer/SectionContainer';


class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get( 'http://www.parsleypatterns.com.au/wp-json/wp/v2/posts' )
            .then( response => {

                this.setState({posts: response.data});

                console.log(this.state);
            } );
    }

    render() {

        document.title = 'Blog - Parsley Design Systems';




        return (
                <div>
                    {this.state.posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.title.rendered}</h2>
                            {post.content.rendered}
                        </div>
                    ))}
                </div>

        )
    }
}

export default Blog;