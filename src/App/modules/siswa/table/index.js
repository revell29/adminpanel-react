import React from 'react';
import { Table } from 'antd';

export default function TableSiswa({ data, handleTable }) {
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Fullname',
      dataIndex: 'fullname',
    },
    {
      title: 'NISN',
      dataIndex: 'nisn',
    },
    {
      title: 'No Telp',
      dataIndex: 'no_telp',
    },
    {
      title: 'Agama',
      dataIndex: 'agama',
    },
  ];

  const pagination = {
    pageSize: data.pageSize,
    current: data.page,
    total: data.totalCount,
  };

  return (
    <Table
      columns={columns}
      dataSource={data.data}
      pagination={pagination}
      onChange={handleTable}
    />
  );
}
