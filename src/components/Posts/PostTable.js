import React, {Component} from 'react';
import PostList from "./PostList";
import Data from "../../data.json";

class PostTable extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: []};
    }

    componentDidMount() {
        console.log("data: ", Data.hits);
        this.setState({dataSource: Data.hits})
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