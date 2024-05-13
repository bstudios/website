import { Container, Group, Text } from '@mantine/core';
import * as classes from './Footer.module.css';
import React from 'react';
import { Link } from 'gatsby';

export function Footer() {
  return (
     <Container className={classes.inner}>
        <Text>&copy;{new Date().getFullYear()} Bithell Studios Ltd.</Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <Link to="https://find-and-update.company-information.service.gov.uk/company/11918238" target="_blank" className={classes.link}><Text>Registered in England and Wales &#x2116;11918238</Text></Link>
        </Group>
      </Container>
  );
}