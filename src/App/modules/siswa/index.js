import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { getAllSiswa } from '../../../services/siswa';
import TableSiswa from './table';
function Siswa() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const getData = async () => {
    const data = await getAllSiswa(page, pageSize);
    setData(data);
  };

  const handleTable = async (val) => {
    const data = await getAllSiswa(val.current, val.pageSize);
    setData(data);
  };

  const searchData = _.debounce(async (query) => {
    const data = await getAllSiswa(page, pageSize, query);
    setData(data);
  }, 250);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card>
        <Card.Header className="m-auto d-flex justify-content-between w-100">
          {/* Card Title */}
          <Card.Title className="my-auto">
            <input
              className="form-control"
              placeholder="Cari siswa"
              onChange={(e) => searchData(e.target.value)}
            />
          </Card.Title>
          <Link className="btn btn-primary" to={`/siswa/create`}>
            Create{' '}
            <span className="pcoded-micon">
              <i className="feather icon-plus"></i>
            </span>
          </Link>

          {/* Bulk Action Buttons */}
        </Card.Header>
        <Card.Body>
          <TableSiswa data={data} handleTable={handleTable} />
        </Card.Body>
      </Card>
    </>
  );
}

export default Siswa;
