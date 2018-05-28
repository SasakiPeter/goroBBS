import React from 'react';

class LoginSection extends React.Component {
    state = {
        username: "",
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

    render() {
        // props,stateからそれぞれ取得する
        const { username, password } = this.state
        console.log(this.props)
        return (
            <div>
                <h2>Log in</h2>
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
                            <p>password</p>
                            <p><input
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            ></input></p>
                        </li>
                    </ul>
                    <button onClick={this.handleSubmit}>add</button>
                </div>
            </div>
        )
    }
}

export default LoginSection;