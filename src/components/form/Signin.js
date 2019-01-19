import React from "react";
import { Form, Icon, Input, Checkbox, Row, Col, Button } from "antd";
// import { success, error } from "../basic/InformationModal";

// import { loginUser } from "../data/PostData";
import "./signin.css";

const FormItem = Form.Item;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // const email = values.email;
      // const password = values.password;
      if (!err) {
        // loginUser(this.props.URL, email, password).then(response => {
        //   const user = response.data[0];
        //   const code = response.data.code;
        //   if (code === 204) {
        //     error(
        //       "Email dan Password salah",
        //       "Silahkan masukkan email dan password yang benar"
        //     );
        //   } else if (code === 205) {
        //     error(
        //       "Email Tidak Terdaftar",
        //       "Silahkan masukkan email yang sudah terdaftar, atau silahkan register untuk membuat akun baru"
        //     );
        //   } else if (user.id) {
        //     success("Sukses", "Anda berhasil log in");
        //     this.props.loadUser(user);
        //     this.props.onRouteChange("dashboard");
        //   } else {
        //     alert(
        //       "Ada sesuatu yang salah dengan diri Anda :). Just Kidding. Mungkin internet Anda sedang error. Coba lagi ya!"
        //     );
        //   }
        // });
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    // const { onRouteChange } = this.props;

    return (
      <Row
        type="flex"
        justify="center"
        // align="middle"
        // style={{ height: "65vh" }}
      >
        <Col xs={24} sm={14} md={10} lg={8}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  { required: true, message: "Please input your Email!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Ingat Saya</Checkbox>)}
              <a className="login-form-forgot" href="/">
                Lupa password
              </a>{" "}
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Masuk
              </Button>
            </FormItem>
          </Form>
          {/* method ini harus diletakkan di luar Form, karena 
          clash dengan method Form Submit, lalu, method ini harus
          di bind, supaya tidak langsung dicall,
          atau bisa juga dengan (e)=>method(e,'register')
          Tapi dengan arrow akan re-render
          Dengan bind, tidak akan re-render
          */}
          <Button
            type="primary"
            className="register-form-button"
            onClick={this.props.onRouteChange.bind(this, "register")}
          >
            Daftar
          </Button>
        </Col>
      </Row>
    );
  }
}

const WrappedSignInForm = Form.create()(SignIn);

export default WrappedSignInForm;
