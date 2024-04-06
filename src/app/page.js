import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "./Components/Navigation";
import ExampleWithProviders from "./Components/TableEdit";

export default function Home() {
  return (
    <main className="main-container">
      <ResponsiveAppBar></ResponsiveAppBar>
      <ExampleWithProviders></ExampleWithProviders>
    </main>
  );
}
