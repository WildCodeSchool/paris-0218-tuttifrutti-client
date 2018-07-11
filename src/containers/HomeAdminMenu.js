import React from 'react'
import { Link } from 'react-router-dom'
import MenuTitle from '../components/MenuTitle.js'
import './style/HomeAdminMenu.css'

const HomeAdminMenu = () => (
	<div>
		<div className='home-admin-menu'>
			<Link className='home-admin-menu-linkto-block1' to={`/admin/studentlist`}>
				<div className='home-admin-studentlist'>
					<MenuTitle text='Etudiants' />
				</div></Link>
		</div>
		<div className='home-admin-menu'>
			<Link className='home-admin-menu-linkto' to={`/admin`}>
				<div className='home-admin-lawyerlist'>
					<MenuTitle text='Avocats / A venir' />
				</div></Link>
			<Link className='home-admin-menu-linkto' to={`/admin`}>
				<div className='home-admin-fields'>
					<MenuTitle text='Domaines de droit - A venir' />
				</div>
			</Link>
		</div>
	</div>
)

export default HomeAdminMenu
