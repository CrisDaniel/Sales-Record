import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "./Components/Navigation";
import CustomizedTables from "./Components/Table";
import ExampleWithProviders from "./Components/TableEdit";

export default function Home() {
  return (
    <main className="main-container">
      <ResponsiveAppBar></ResponsiveAppBar>
      {/* <CustomizedTables></CustomizedTables> */}
      <ExampleWithProviders></ExampleWithProviders>
    </main>
  );
}
