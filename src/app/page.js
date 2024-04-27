import Image from "next/image";
import styles from "./page.module.css";
import ExampleWithProviders from "../Components/TableEdit";

export default function Home() {
  return (
    <main className="main-container">
      <ExampleWithProviders></ExampleWithProviders>
    </main>
  );
}
