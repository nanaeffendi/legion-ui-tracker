import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Body,
  Button,
  Textfield,
  DynamicIcon,
  Badge,
} from "legion-ui";
import Image from "next/image";
import React from "react";

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    isError: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state, 'ooo')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === 'legion' && this.state.password === 'legion') {
      this.props.loginState(true);
    } else {
      console.log('salah bro')
      this.setState({
        isError: true,
      })
    }
  }

  render() {
    return (
      <div className="login--container">
        <Image src="/images/login-illus.png" width={550} height={550} />
        <Card variant="shadow" className="login--card">
          <CardHeader>
            <Body as="h5" size="lg_bold" color="tertiary800">
              Legion-Ui Component Tracker
            </Body>
          </CardHeader>
          <CardBody style={{ marginTop: '32px' }}>
            <Body size="sm_regular" color="tertiary500">
              <form onSubmit={this.handleSubmit}>
                <Textfield
                  placeholder="User Name"
                  iconLeft={<DynamicIcon name="User" />}
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Textfield
                  placeholder="Password"
                  type="password"
                  variant="error"
                  iconLeft={<DynamicIcon name="Key" />}
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </form>
              { this.state.isError && (
                <Badge size="small" variant="error" style={{marginBottom: '12px'}}>
                  Username or password is incorrect, please try again!
                </Badge>
              )}
            </Body>
          </CardBody>
          <CardFooter>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                type="submit"
                variant="solid"
                onClick={this.handleSubmit}
                iconLeft={<DynamicIcon name="LogIn" />}
              >
                Login
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default Login;