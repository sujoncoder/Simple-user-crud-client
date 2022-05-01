import React from 'react';
import CustomLink from '../../CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center space-x-4 uppercase text-xl my-6'>
            <CustomLink to="/users">Users</CustomLink>
            <CustomLink to="/add">Add-User</CustomLink>
            <CustomLink to="/update">Update-User</CustomLink>
        </nav>
    );
};

export default Header;