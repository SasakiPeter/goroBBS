import React from 'react';
import { Form, Icon, input, Button, Checkbox, Input, Modal } from 'antd';

const FormItem = Form.Item;

class UserCreator extends React.Component {
    state = {
        username: "",
        email: "",
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
        const { username, email, password } = this.state
        // const {username}=this.state.username ←objectに値を入れようとしてる×
        console.log(this.state)
        console.log(this.state.password)
        // object取得
        console.log({ username })
        // 値取得
        console.log(username)

        // ここをuser/createのAPIにPOSTするcontainerにつなげばいい
        this.props.createUser(username, email, password)

    }

    render() {
        // props,stateからそれぞれ取得する
        const { username, email, password, visible } = this.state
        console.log(this.props)
        return (
            <div>
                <a onClick={this.showModal}>Create User</a>
                <Modal
                    visible={visible}
                    title="CreateUser"
                    onCancel={this.handleCancel}
                    footer={[
                        <Button type="primary" onClick={this.handleSubmit}>新規登録</Button>,
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
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                                name="email"
                                value={email}
                                type="email"
                                onChange={this.handleChange}
                            />
                        </FormItem>
                        <FormItem><Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default UserCreator;