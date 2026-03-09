import { Container, Group, Burger, Image, Text } from '@mantine/core';
import Logo from "./../../images/StudiosLogo.svg";
import * as classes from './Header.module.css';
import React from 'react';
import { menuItems } from './menuItems';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

export function Header({ menuOpened, menuToggle }: { menuOpened: boolean, menuToggle: () => void }) {
  const location = useLocation();
  const items = menuItems.map((link) => (
    link.external ? (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        data-active={location.pathname.replace(/\/$/, "") === link.link || undefined}
      >
        {link.label}
      </Link>
    )
  ));

  return (
    
      <Container size="md" className={classes.inner}>
      <Group gap="xs" component={Link} to="/" style={{ textDecoration: 'none' }}>
        <Image src={Logo} h={40} />
        <Text fw={600} size="sm" c="dark" hiddenFrom="xs">Bithell Studios</Text>
      </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={menuOpened} onClick={menuToggle} hiddenFrom="xs" size="sm" />
      </Container>
  );
}