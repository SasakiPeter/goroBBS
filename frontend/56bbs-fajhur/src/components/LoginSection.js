import React from 'react';
import { Form, Icon, input, Button, Checkbox, Input, Modal } from 'antd';

const FormItem = Form.Item;

class LoginSection extends React.Component {
    state = {
        username: "",
        password: "",
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    // このイベントはinputのこと
    // event.target.nameって書くと汎用性が上がる
    handleChange = event => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
        console.log([event.target.name])
        console.log(event.target.value)
        console.log(this.state)
    };

    handleSubmit = () => {
        // {}←この記述はobjectらしい
        const { username, password } = this.state
        // const {username}=this.state.username ←objectに値を入れようとしてる×
        console.log(this.state)
        console.log(this.state.password)
        // object取得
        console.log({ username })
        // 値取得
        console.log(username)

        this.props.getJWT(username, password)

    }

    logoutSubmit = () => {
        this.props.postLogout()
    }

    render() {
        // props,stateからそれぞれ取得する
        const { username, password, visible } = this.state
        console.log(this.props)
        return (
            <div>
                <a onClick={this.showModal}>Log in</a>
                <Modal
                    visible={visible}
                    title="LOGIN"
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button type="primary" onClick={this.handleSubmit}>Log in</Button>,
                        <Button type="secondary" onClick={this.logoutSubmit}>Log out</Button>,
                    ]}>
                    <Form>
                        <FormItem>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <a href="#">Forgot password</a>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default LoginSection;