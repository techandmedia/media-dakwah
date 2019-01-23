import React from "react";
import { Form, Card, Row, Col, Cascader, Button } from "antd";
import "./signin.css";

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: [],
      selectedKota: false
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (values.kota) {
        // console.log(values.kota)
        for (let i = 0; i < this.props.peta.length; i++) {
          if (values.kota[0] === this.props.peta[i].kota) {
            // console.log(this.props.peta[i].kota);
            this.setState({
              selectedKota: true,
              kota: this.props.peta[i]
            });
          }
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { selectedKota, kota } = this.state;
    // Gunakan array ini untuk membuat menu pilihan Cascader
    const petaProps = [];
    this.props.peta.map(data => {
      petaProps.push({
        id: data.key,
        value: data.kota,
        label: data.kota
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
            title="Peta Dakwah Kota"
            headStyle={{
              fontWeight: 700,
              color: "#ba2644",
              textAlign: "center"
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="Pilih Kota">
                {getFieldDecorator("kota", {
                  rules: [
                    {
                      required: true,
                      message: "Pilih Kota!"
                    }
                  ]
                })(<Cascader options={petaProps} />)}
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
            {selectedKota ? (
              <div>
                <p>{kota.kota}</p>
                <p>
                  Jumlah Dai:{" "}
                  <span className="data-wilayah">{kota.jumlahDai}</span>
                </p>
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
