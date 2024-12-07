import Image from "next/image";
import styles from './page.module.css';
import PrayerTimes from "./components/prayercomponent";

export default function Home() {
  return (
    <div className="bg-amber-50 min-h-screen ">
      <PrayerTimes />
    </div>
  );
}
