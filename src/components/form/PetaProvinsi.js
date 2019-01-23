import React from "react";
import { Form, Card, Row, Col, Cascader, Button } from "antd";
import "./signin.css";

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provinsi: [],
      selectedProvinsi: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (values.provinsi) {
        // console.log(values.provinsi);
        for (let k = 0; k < this.props.provinsi.length; k++) {
          if (values.provinsi[0] === this.props.provinsi[k].provinsi) {
            this.setState({
              selectedProvinsi: true,
              provinsi: this.props.provinsi[k]
            });
          }
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { selectedProvinsi, provinsi } = this.state;
    const dataProvinsi = [];
    this.props.provinsi.map(data => {
      dataProvinsi.push({
        id: data.key,
        value: data.provinsi,
        label: data.provinsi
      });
      return null;
    });

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Row type="flex" justify="center">
        <Col xs={24} md={12} lg={12} xl={10}>
          <Card
            title="Peta Dakwah Provinsi"
            headStyle={{
              fontWeight: 700,
              color: "#ba2644",
              textAlign: "center"
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="Pilih Provinsi">
                {getFieldDecorator("provinsi", {
                  rules: [
                    {
                      required: true,
                      message: "Pilih Provinsi!"
                    }
                  ]
                })(
                  <Cascader
                    options={dataProvinsi}
                    placeholder="Pilih Provinsi"
                  />
                )}
              </FormItem>

              <FormItem {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Cari
                </Button>
              </FormItem>
            </Form>
            {selectedProvinsi ? (
              <div>
                <p style={{ fontWeight: "bold" }}>
                  Provinsi: {provinsi.provinsi}
                </p>
                <hr />
                <p>
                  Jumlah Penduduk:{" "}
                  <span className="data-wilayah">{provinsi.populasi}</span>
                </p>
                <p>
                  Jumlah Dai:{" "}
                  <span className="data-wilayah">
                    {provinsi.jumlahDaiProvinsi}
                  </span>
                </p>
                <hr />
                <p>
                  Jumlah Sekolah Umum:{" "}
                  <span className="data-wilayah">{provinsi.sekolahUmum}</span>
                </p>
                <p>
                  Jumlah Sekolah Agama:{" "}
                  <span className="data-wilayah">{provinsi.sekolahAgama}</span>
                </p>
                <hr />
                <p>
                  Jumlah Mesjid:{" "}
                  <span className="data-wilayah">{provinsi.jumlahMesjid}</span>
                </p>
                <p>
                  Jumlah Mushola:{" "}
                  <span className="data-wilayah">{provinsi.jumlahMushola}</span>
                </p>
                <hr />
              </div>
            ) : null}
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
