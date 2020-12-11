import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import Aux from "../../../hoc/_Aux";
import "./styles.scss";

function Langganan({ stateAccount }) {
  const [data, setData] = useState({});

  const dataPaket = [
    {
      id: 1,
      nama: "5Mbps",
      price: "1655000",
      label: "Rp 165.500/Bln",
    },
    {
      id: 2,
      nama: "10Mbps",
      price: "2255000",
      label: "Rp 225.500/Bln",
    },
    {
      id: 3,
      nama: "20Mbps",
      price: "2585000",
      label: "Rp 258.500/Bln",
    },
    {
      id: 4,
      nama: "30Mbps",
      price: "3355000",
      label: "Rp 335.500",
    },
    {
      id: 5,
      nama: "60Mbps",
      price: "5005000",
      label: "Rp 500.500/Bln",
    },

    {
      id: 6,
      nama: "100Mbps",
      price: "9405000",
      label: "Rp 940.500/Bln",
    },
  ];

  console.log(data);
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col md={8}>
              <Card>
                <Card.Header>
                  <h4>Registrasi Langganan Baru</h4>
                </Card.Header>
                <Card.Body>
                  <h4 className="mb-3">Pilih Paket</h4>
                  <Row className="mb-3">
                    {dataPaket.map((item, key) => (
                      <Col sm={6} lg={4} className="mb-3" key={item.id}>
                        <div
                          className="table-price"
                          onClick={() => setData({ ...data, paket: item })}
                        >
                          <h4 className="table-price__title">{item.nama}</h4>
                          <label>{item.label}</label>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <h4 className="mb-3">Data Personal</h4>
                  <Row>
                    <Col lg={6}>
                      <Form.Group>
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control
                          defaultValue={stateAccount?.fullname}
                          onChange={(e) => setData({ ...data, fullname: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>NO Handphone</Form.Label>
                        <Form.Control
                          defaultValue={stateAccount?.no_hp}
                          onChange={(e) => setData({ ...data, no_hp: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control
                          defaultValue={stateAccount?.alamat}
                          placeholder="Contoh (Jl XXX )"
                          onChange={(e) => setData({ ...data, alamat: e.target.value })}
                        />
                      </Form.Group>
                      <Row>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>RT</Form.Label>
                            <Form.Control
                              value={data.rt}
                              onChange={(e) => setData({ ...data, rt: e.target.value })}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>RW</Form.Label>
                            <Form.Control
                              value={data.rw}
                              onChange={(e) => setData({ ...data, rw: e.target.value })}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label>Provinsi</Form.Label>
                        <Form.Control
                          value={data.provinsi}
                          onChange={(e) => setData({ ...data, provinsi: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group>
                        <Form.Label>Kota</Form.Label>
                        <Form.Control
                          value={data.kota}
                          onChange={(e) => setData({ ...data, kota: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Kelurahan</Form.Label>
                        <Form.Control
                          value={data.kota}
                          onChange={(e) => setData({ ...data, kota: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Kode POS</Form.Label>
                        <Form.Control
                          value={data.kodepos}
                          onChange={(e) => setData({ ...data, kodepos: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Catatan (Optional)</Form.Label>
                        <Form.Control
                          value={data.notes}
                          onChange={(e) => setData({ ...data, notes: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="box-paket mb-3">
                    <label>Paket yang dipilih</label>
                    <h4>{data.paket?.nama}</h4>
                    <label>{data.paket?.label}</label>
                  </div>
                  <div className="box-paket mb-3">
                    <label>Konfirmasi</label>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <label className="ml-4">
                        Saya setuju dengan <a href="#">Syarat & Ketentuan</a> yang berlaku di dalam
                        aplikasi myIndiHome
                      </label>
                    </div>
                  </div>
                  <Button className="btn btn-primary btn-block btn-lg" type="button">
                    Submit Data
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    stateAccount: state.authReducer.user?.data,
  };
};

export default connect(mapStateToProps)(Langganan);
