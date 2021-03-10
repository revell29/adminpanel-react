import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { createSiswa } from '../../../../services/siswa';
import { getAllKelas } from '../../../../services/kelas';

import { useHistory } from 'react-router-dom';
import { message, Select } from 'antd';

export default function Create() {
  const [data, setData] = React.useState({});
  const [kelas, setKelas] = React.useState([]);
  const { Option } = Select;
  const history = useHistory();
  const key = 'updatable';

  const requestHandler = async (e) => {
    e.preventDefault();
    message.loading({ content: 'Loading...', key });

    await createSiswa(data)
      .then((res) => {
        message.success({ content: 'Data berhasil ditambahkan', key, duration: 2 });
        history.push('/siswa');
      })
      .catch((err) => {
        message.error({ content: 'Harap isi semua input field yang ada', key, duration: 2 });
      });
  };

  const requestKelas = async () => {
    const data = await getAllKelas();
    setKelas(data.data);
  };

  React.useEffect(() => {
    requestKelas();
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <Form>
            <h4 className="mb-5 title-card">Informasi Siswa</h4>
            <Row className="mb-4">
              <Col md={6}>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Email</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="email"
                      type="email"
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Nama Lengkap</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="fullname"
                      onChange={(e) => setData({ ...data, fullname: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">NISN</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="nisn"
                      onChange={(e) => setData({ ...data, nisn: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">No Telp</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="no_telp"
                      onChange={(e) => setData({ ...data, no_telp: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Agama</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="agama"
                      onChange={(e) => setData({ ...data, agama: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Kelas</Form.Label>
                  <div className="col-sm-9">
                    <Select
                      defaultValue="Pilih Kelas"
                      onChange={(value) => setData({ ...data, kelas_id: value })}
                      className="w-100"
                    >
                      <Option value="Pilih Kelas">Pilih Kelas</Option>
                      {kelas.map((item, key) => (
                        <Option value={item.kelas_id}>{item.nama_kelas}</Option>
                      ))}
                    </Select>
                  </div>
                </Row>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <textarea
                    className="form-control"
                    rows={9}
                    name="address"
                    placeholder="Alamat Siswa"
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                  ></textarea>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h4 className="mb-5 title-card">Informasi Orang Tua Siswa</h4>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Nama Ayah</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="nama_ayah"
                      type="text"
                      onChange={(e) => setData({ ...data, nama_ayah: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Nama Ibu</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="nama_ibu"
                      type="text"
                      onChange={(e) => setData({ ...data, nama_ibu: e.target.value })}
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <Form.Label className="col-sm-3">Pekerjaan Orangtua</Form.Label>
                  <div className="col-sm-9">
                    <Form.Control
                      placeholder=""
                      name="pekerjaan_ortu"
                      type="text"
                      onChange={(e) => setData({ ...data, pekerjaan_ortu: e.target.value })}
                    />
                  </div>
                </Row>
              </Col>
            </Row>
            <Button className="pull-right" type="button" onClick={(e) => requestHandler(e)}>
              Simpan Data
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
