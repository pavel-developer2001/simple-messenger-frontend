import React, { FC } from "react";
import styles from "./NavbarGroup.module.scss";

interface NavbarGroupProps {
  name: string;
  count: number;
  whom: string;
}

const NavbarGroup: FC<NavbarGroupProps> = ({ name, count, whom }) => {
  return (
    <div className={styles.navbar}>
      <strong>{name}</strong>
      <span>
        {count} {whom}
      </span>
    </div>
  );
};

export default NavbarGroup;
