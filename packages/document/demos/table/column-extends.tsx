import React from 'react'
import { Table, ColumnProps } from 'yuuki-design'

const columns: ColumnProps<DataType>[] = [
  {
    title: '商品编号',
    dataIndex: 'no'
  },
  {
    title: '商品名',
    dataIndex: 'name',
    ellipsis: true, // 默认为true
    width: 180
  },
  {
    title: '商品价格',
    dataIndex: 'price',
    valueType: 'digit'
  },
  {
    title: '创建时间',
    valueType: 'date',
    dataIndex: 'createTime'
  },
  {
    title: '送货地址',
    dataIndex: 'address'
  }
]

interface DataType {
  key: React.Key
  no: string
  name: string
  createTime: string
  address: string
  email: string
}

const data: DataType[] = Array.from(new Array(20).keys()).map((item) => ({
  key: item,
  no: `ISBN${Date.now() + item}`,
  name: `超长超长超长超长超长名字超长超长超长名字${item + 1}`,
  price: Number(10000 + 10000 * Math.random()),
  createTime: new Date(Date.now() + item * 24 * 3600 * 1000).toDateString(),
  address: `番斗大街番斗花园${item + 1}号`,
  email: `name${item + 1}@example.com`
}))

const App: React.FC = () => {
  return (
    <>
      <div style={{ height: 400 }}>
        <Table columns={columns} data={data} scroll={{ y: 'auto' }} />
      </div>
    </>
  )
}

export default App
