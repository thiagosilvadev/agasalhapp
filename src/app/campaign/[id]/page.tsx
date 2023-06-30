import Image from "next/image";

import styles from "./page.module.css";
import { supabase } from "@/lib/supabase";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data: campaign } = await supabase
    .from("campaings")
    .select("*")
    .eq("id", Number(id))
    .single();
  return (
    <main className={styles.main}>
      <div className={styles.cover}>
        <Image src="/cover.png" fill alt={""} />
      </div>
      <div>
        <h1 className={styles.title}>{campaign.title}</h1>
        <h3 className={styles.organizer}>{campaign.organizer}</h3>
      </div>

      <p className={styles.description}>{campaign.description}</p>
      <section className={styles.list__section}>
        <h4 className={styles.list_section__title}>Pontos de Coleta</h4>
        <ul className={styles.list_section__list}>
          {campaign.collect_points
            .split(";")
            .map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
        </ul>
      </section>
      <section className={styles.list__section}>
        <h4 className={styles.list_section__title}>
          Instruções para Doadores:
        </h4>
        <p className={styles.description}>{campaign.instructions}</p>
      </section>
    </main>
  );
}
