import Image from "next/image";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.cover}>
        <Image src="/cover.png" fill alt={""} />
      </div>
      <div>
        <h1 className={styles.title}>
          Campanha do Agasalho &quot;Mãos Solidárias&quot;
        </h1>
        <h3 className={styles.organizer}>ONG Coração Quente</h3>
      </div>

      <p className={styles.description}>
        A Campanha do Agasalho &quot;Mãos Solidárias&quot; tem como objetivo
        proporcionar conforto e calor para aqueles que mais precisam durante o
        inverno. Nossa missão é arrecadar agasalhos e distribuí-los para pessoas
        em situação de vulnerabilidade social na comunidade Esperança,
        localizada na Cidade do Sol. Junte-se a nós e faça a diferença!
      </p>
      <section className={styles.list__section}>
        <h4 className={styles.list_section__title}>Pontos de Coleta</h4>
        <ul className={styles.list_section__list}>
          <li>
            <strong>Supermercado Amigo</strong> - Avenida Principal, 123
          </li>
          <li>
            <strong>Loja Solidária</strong> - Rua das Flores, 456
          </li>
          <li>
            <strong>Posto de Gasolina Fraterno</strong> - Praça da Paz, 789
          </li>
        </ul>
      </section>
      <section className={styles.list__section}>
        <h4 className={styles.list_section__title}>
          Instruções para Doadores:
        </h4>
        <ul className={styles.list_section__list}>
          <li>
            Doe roupas de frio em bom estado, como casacos, blusas, calças,
            meias e cobertores.
          </li>
          <li>
            As peças podem ser novas ou usadas, desde que estejam limpas e em
            condições adequadas de uso.
          </li>
          <li>
            Evite doar itens rasgados, manchados ou em más condições de
            conservação.
          </li>
          <li>
            Se possível, faça a doação em embalagens ou sacolas fechadas para
            facilitar o transporte.
          </li>
          <li>
            Agradecemos a sua generosidade! Sua doação fará uma grande diferença
            na vida de quem precisa.
          </li>
        </ul>
      </section>
    </main>
  );
}
