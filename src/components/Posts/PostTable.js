import React, {Component} from 'react';
import PostList from "./PostList";
import Data from "../../data.json";

class PostTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            pageNumber: 0,
        };
    }

    componentDidMount() {

        console.log("data: ", Data.hits);
        this.fetchData();
    }

    fetchData = () => {
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageNumber}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({dataSource: result.hits})
                },
                (error) => {console.log("error: ", error);}
            )
    }

    render() {
        return (
            <div>
                <PostList dataSource={this.state.dataSource}/>
            </div>
        );
    }
}

export default PostTable;