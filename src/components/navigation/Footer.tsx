import { Container, Group, Text, Anchor } from '@mantine/core';
import * as classes from './Footer.module.css';
import React from 'react';

export function Footer() {
  return (
     <Container className={classes.inner}>
        <Text size="sm">&copy;{new Date().getFullYear()} Bithell Studios Ltd.</Text>
        <Group gap="md" className={classes.links} justify="flex-end" wrap="wrap">
          <Anchor href="https://find-and-update.company-information.service.gov.uk/company/11918238" target="_blank" className={classes.link} size="sm">Registered in England and Wales &#x2116;11918238</Anchor>
          <Anchor href="https://github.com/bstudios" target="_blank" className={classes.link} size="sm">GitHub</Anchor>
        </Group>
      </Container>
  );
}
