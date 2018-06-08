import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'


import SignUp from '../components/SignUp.js'
import HomeLawyer from '../containers/HomeLawyer.js'
import Footer from '../containers/Footer.js'
import LawyerTitle from '../components/LawyerTitle.js'
import Login from '../components/Login.js'


storiesOf('HomeLawyer', module).add('Home account lawyer', () => <HomeLawyer showApp={linkTo('Home Lawyer')} />)

storiesOf('Footer', module).add('Footer', () => <Footer showApp={linkTo('Footer')} />)

storiesOf('SignUp', module).add('Global page', () => <SignUp showApp={linkTo('SignUp')} />)

storiesOf('LawyerTitle', module).add('Title Lawyer', () => <LawyerTitle showApp={linkTo('LawyerTitle')} />)

storiesOf('Login', module).add('Global page', () => <Login showApp={linkTo('Login')} />)

