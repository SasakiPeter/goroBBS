import React from 'react';
import CLoginSection from '../containers/CLoginSection';
import CUserCreator from '../containers/CUserCreator';
import { Menu, Icon } from 'antd';

class NavigationBar extends React.Component {
    state = {
        current: 'top',
    }

    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="LOGIN">
                    <CLoginSection />
                </Menu.Item>
                <Menu.Item key="CreateUser">
                    <CUserCreator />
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavigationBar;