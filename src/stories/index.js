import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import SignUp from '../components/SignUp.js'
import Login from '../components/Login.js'
import Footer from '../containers/Footer.js'
import Button from '../components/Button.js'
import HomeLawyer from '../containers/HomeLawyer.js'
import HomeLawyerMissions from '../containers/HomeLawyerMissions.js'
import HomeLawyerHeader from '../containers/HomeLawyerHeader.js'
import HomeLawyerNewMission from '../containers/HomeLawyerNewMission.js'

storiesOf('Inscription', module)
  .add('Page globale', () => <SignUp />)

storiesOf('Connexion', module)
  .add('Page globale', () => <Login />)

storiesOf('Footer', module)
  .add('Footer', () => <Footer />)

storiesOf('Button', module)
  .add('Button', () => <Button>text button</Button>)

storiesOf('Homepage avocats', module)
  .add('Page globale', () => <HomeLawyer />)
  .add('Header', () => <HomeLawyerHeader />)
  .add('Nouvelle mission', () => <HomeLawyerNewMission />)
  .add('Missions en cours', () => <HomeLawyerMissions />)
