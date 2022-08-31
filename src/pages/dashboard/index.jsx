import React, {useState, useEffect} from 'react';
import styless from '../../styles/Dashboard.module.css';
import Input from '../../components/Input';
import { useSelector, useDispatch } from 'react-redux';
import {getCrypto} from './dashboardThunk';
import { useTable, useSortBy } from 'react-table';

function Table({columns,data}){

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  const firstPageRows = rows.slice(0, 15);

  return(
    <>
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th 
                style={{
                  background: 'rgba(50, 224, 196, 0.15)',
                  color: 'black',
                  fontWeight: 'bold',
                }}
                {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} 
                        style={{
                          padding: '10px',
                          background: 'rgba(50, 224, 196, 0.15)',
                        }}
                    > 
                        {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )}
        )}
      </tbody>
    </table>
    <br />
  </>
  );
};

const Dashboard = () => {

  const columns = React.useMemo(()=>([  
    {
      Header: 'Rank',
      accessor: 'rank',
      id: 1,
    },
    {
      Header: 'Name',
      accessor: 'name',
      id: 2,
    },
    {
      Header: 'Symbol',
      accessor: 'symbol',
      Cell: tableProps => (
        <a className={styless.wrapSymbol}  href={tableProps.row.original.websiteUrl}>
          <img
            src={tableProps.row.original.icon}
            width={30}
            alt='icon'
          />
        {tableProps.row.original.symbol}
        </a>
      ),
      id: 3,
    },
    {
      Header: 'Market cup',
      accessor: 'marketCap',
      id: 4,
    },
    {
      Header: 'Price',
      accessor: 'price',
      id: 5,
      Cell: tableProps => '$ ' + tableProps.row.original.price.toFixed(2),
    },
    {
      Header: 'Available supply',
      accessor: 'availableSupply',
      id: 6,
    },
    {
      Header: 'Volume 24h',
      accessor: 'volume',
      id: 7,
      Cell: tableProps => tableProps.row.original.volume.toFixed(0),
    },
]),
    []
);
  const [crypto, setCrypto] = useState('');
  const [formData, setFormData] = useState([]);
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.dashboardApp);
  const newData = data?.coins || [];
  
  useEffect(()=>{
    const array = newData.filter(item =>
      item.name.toLowerCase().includes(crypto.toLowerCase()) ||
      item.symbol.toLowerCase().includes(crypto.toLowerCase())
    );

    setFormData(array.length? array: newData)
  }, [crypto, data]);

  const handlerOnKayDown = (e) => {
    if(e.key === 'Enter') getDashboard();
  };

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = () => {
    dispatch(getCrypto());
  };

  return (
    <div className={styless.App}>
      <h1>Cryptocurrency</h1>
      <div className={styless.input_form}>
        <Input
          onChange={e=> setCrypto(e.target.value)}
          placeholder={'Search...'}
          onKeyDown={handlerOnKayDown}
        />
      </div>
      {formData.length ? <Table columns={columns} data={formData} /> : 'Fuck you'}
    </div>
  )
}

export default Dashboard;