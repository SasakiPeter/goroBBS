import React from 'react';

class UserCreator extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
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
        const { username, email, password } = this.state
        console.log(this.props)
        return (
            <div>
                <h2>Create User</h2>
                <div>
                    <ul>
                        <li>
                            <p>username</p>
                            <p><input
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                            ></input></p>
                        </li>
                        <li>
                            <p>email</p>
                            <p><input
                                name="email"
                                value={email}
                                type="email"
                                onChange={this.handleChange}
                            ></input></p>
                        </li>
                        <li>
                            <p>password</p>
                            <p><input
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            ></input></p>
                        </li>
                    </ul>
                    <button onClick={this.handleSubmit}>新規登録</button>
                </div>
            </div>
        )
    }
}

export default UserCreator;