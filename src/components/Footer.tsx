import Link from "next/link";
import { Box, Container, Stack, Group, Anchor } from "@mantine/core";
import LogoSVG from "@/assets/logo.svg";

import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box mt="auto" py="md">
      <Container size="lg">
        <Stack>
          <Link href="/" style={{ width: "max-content" }}>
            <LogoSVG height={56} />
          </Link>

          <Group gap="xs">
            <Anchor c="dark" href="https://twitter.com/RoochNetwork">
              <IconBrandX />
            </Anchor>
            <Anchor c="dark">
              <IconBrandInstagram />
            </Anchor>
            <Anchor c="dark">
              <IconBrandYoutubeFilled />
            </Anchor>
            <Anchor c="dark">
              <IconBrandLinkedin />
            </Anchor>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
