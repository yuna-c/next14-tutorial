import clsx from "clsx";
import styles from "./main.module.scss";
// npm i sass clsx
export default function Home() {
  return (
    <main className={clsx(styles.main)}>
      <h1>메인페이지</h1>
    </main>
  );
}
