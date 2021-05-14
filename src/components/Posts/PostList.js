import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
    },
    {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
    },
];
const PostList = ({dataSource}) => {
    return (
        <Table dataSource={dataSource} columns={columns} />
    );
};

export default PostList;