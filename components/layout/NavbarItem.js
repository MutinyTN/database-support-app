import Link from "next/link";
import styles from "./NavbarItem.module.css";
import Typography from "@mui/material/Typography";

export default function NavbarItem({ link, name }) {
  return (
    <>
      <Typography variant="a" className={styles.item}>
        <Link href={link}>{name}</Link>
      </Typography>
    </>
  );
}
