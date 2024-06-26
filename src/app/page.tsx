import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Box, Card, Grid, Typography } from "@mui/joy";

export default function Home() {
  const links = [
    {
      href: "portal/manager",
      coverImg: "/assets/manager.png",
      label: "Manager",
    },
    {
      href: "public/items",
      coverImg: "/assets/public.png",
      label: "Public",
    },
  ];

  return (
    <main>
      <Box marginY={3} sx={{ textAlign: "center" }}>
        <Typography level="h2">Roles</Typography>
      </Box>
      <Grid container sx={{ paddingX: { lg : 30 } }}>
        {links.map((link, i) => (
          <Grid key={i} xs={12} padding={2} sm={6}>
            <Link href={link.href}>
              <Card className={styles.card}>
                <Image src={link.coverImg} alt={link.label} layout="fill" />
                <Typography level="title-sm" className={styles.label}>
                  {link.label}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
