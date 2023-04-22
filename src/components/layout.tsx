import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <Container maxWidth="md">{children}</Container>;
}
