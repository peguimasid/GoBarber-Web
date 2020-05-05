import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo.svg';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/profile">
              <img
                src={
                  profile.avatar.url ||
                  'https://skywarehouse.s3.amazonaws.com/staticfiles/warehouse/img/nouser.png'
                }
                alt="Ver perfil"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
