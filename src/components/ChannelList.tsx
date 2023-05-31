import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

const channels = ['general', 'random'];

const ChannelListNav = () => {
    return ( 
        <Menu inverted vertical fixed={'left'}>
            <Menu.Item as={Link} to={'/'}>
                HOME<Icon name='home' />
            </Menu.Item>
            <Menu.Item>
                Channels<Icon name='list' />
                <Menu.Menu>
                    {channels.map(channel => 
                    <Menu.Item 
                        key={channel}
                        name={channel}
                        as={NavLink}
                        to={{pathname: `/channels/${channel}`}}
                        >
                        {channel}
                    </Menu.Item>
                    )}
                </Menu.Menu>
            </Menu.Item>
        </Menu>
    );
}
 
export default ChannelListNav;