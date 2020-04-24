import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import './MenuTop.scss'

export default function MenuTop() {
    return (
        <div className='menu-top' style={{ placeContent: 'space-between' }}>
            <React.Fragment >
                <Link to='/' className='menu-top__logo'>
                    <Logo />
                </Link>
            </React.Fragment>
            <Menu
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={[1]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key='1' >
                    <Link to='/'  ><Icon type="home" theme="filled" /> Home</Link>
                </Menu.Item>
                <Menu.Item key='2' >
                    <Link to='/new-movies'><Icon type="up-square" theme="filled" />Ultimos Lanzamientos</Link>
                </Menu.Item>
                <Menu.Item key='3' >
                    <Link to='/popular-movies'  ><Icon type="like" theme="filled" />Populares</Link>
                </Menu.Item>
                <Menu.Item key='4' >
                    <Link to='/search' ><Icon type="search" />Buscador</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
