import Link from "next/link";
import styles from "./SidebarMenu.module.css";
import Typography from "@mui/material/Typography";

export default function SidebarItem({ link, name }) {
  return (
    <>
      <Typography variant="a" className={styles.item}>
        <Link href={link}>{name}</Link>
      </Typography>
    </>
  );
}
