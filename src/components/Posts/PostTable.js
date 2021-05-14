import React, {Component} from 'react';
import PostList from "./PostList";

class PostTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            pageNumber: 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(this.fetchData, 10000);
        this.fetchData();

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    fetchData = () => {
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageNumber}`)
            .then(res => res.json())
            .then(
                (result) => {
                    let oldData = this.state.dataSource;
                    let newData = [...oldData, ...result.hits];
                    this.setState({dataSource: newData,
                        pageNumber: this.state.pageNumber+1})
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