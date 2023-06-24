import Link from "next/link";
import styles from "./page.module.css";

const campaigns = [
  {
    name: 'Campanha do Agasalho "Mãos Solidárias"',
    organizer: "ONG Coração Quente",
    location: "Comunidade Esperança, Cidade do Sol",
  },
  {
    name: "Aquecendo Corações: Campanha de Inverno",
    organizer: "Empresa Solidariedade S.A.",
    location: "Centro Comunitário da Vila Nova, Rua das Flores",
  },
  {
    name: "Inverno Sem Frio: Doe Agasalhos!",
    organizer: "Prefeitura Solidária",
    location: "Praça da Solidariedade, Centro da Cidade",
  },
  {
    name: "Abraço Quentinho: Campanha de Agasalhos",
    organizer: "ONG Amor Fraterno",
    location: "Bairro do Amor, Rua da Paz",
  },
  {
    name: "Campanha Calor Humano",
    organizer: "Empresa Cuidado e Compaixão Ltda.",
    location: "Abrigo Esperança, Avenida das Flores",
  },
  {
    name: "Aconchego na Estação: Doe Agasalhos!",
    organizer: "Prefeitura Solidária",
    location: "Ginásio Municipal, Rua do Esporte",
  },
  {
    name: "Inverno Fraterno: Campanha do Agasalho",
    organizer: "ONG Mãos Estendidas",
    location: "Escola Solidária, Rua da Generosidade",
  },
  {
    name: "Compartilhe o Calor: Campanha de Inverno",
    organizer: "Empresa Solidariedade em Ação",
    location: "Centro de Assistência Social, Avenida da Esperança",
  },
  {
    name: "Agasalhe com Amor: Campanha do Frio",
    organizer: "Prefeitura Solidária",
    location: "Parque da Cidadania, Praça da União",
  },
  {
    name: "União Quentinha: Campanha de Agasalhos",
    organizer: "ONG Amor Sem Fronteiras",
    location: "Centro Cultural Solidário, Rua da Fraternidade",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <form className={styles.location}>
        <label className={styles.location__label}>Localização</label>
        <div className={styles.location__input_wrapper}>
          <input
            className={styles.location__input}
            type="text"
            value="Rio de Janeiro"
          />
          <svg
            className={styles.location__icon}
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.72922 19.5965C1.05352 11.3684 0 10.5239 0 7.5C0 3.35785 3.35785 0 7.5 0C11.6421 0 15 3.35785 15 7.5C15 10.5239 13.9465 11.3684 8.27078 19.5965C7.89832 20.1345 7.10164 20.1345 6.72922 19.5965ZM7.5 10.625C9.2259 10.625 10.625 9.2259 10.625 7.5C10.625 5.7741 9.2259 4.375 7.5 4.375C5.7741 4.375 4.375 5.7741 4.375 7.5C4.375 9.2259 5.7741 10.625 7.5 10.625Z"
              fill="#F14E24"
              fill-opacity="0.6"
            />
          </svg>
        </div>
      </form>

      <section className={styles.campaings}>
        <h2 className={styles.campaings__title}>Campanhas Próximas</h2>

        <div className={styles.campaings__list}>
          {campaigns.map((campaign, index) => (
            <div key={index} className={styles.campaings__card}>
              <div className={styles.campaing__title}>
                <h3>{campaign.name}</h3>
                <span>{campaign.organizer}</span>
              </div>
              <h4 className={styles.campaing__location}>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.72922 19.5965C1.05352 11.3684 0 10.5239 0 7.5C0 3.35785 3.35785 0 7.5 0C11.6421 0 15 3.35785 15 7.5C15 10.5239 13.9465 11.3684 8.27078 19.5965C7.89832 20.1345 7.10164 20.1345 6.72922 19.5965ZM7.5 10.625C9.2259 10.625 10.625 9.2259 10.625 7.5C10.625 5.7741 9.2259 4.375 7.5 4.375C5.7741 4.375 4.375 5.7741 4.375 7.5C4.375 9.2259 5.7741 10.625 7.5 10.625Z"
                    fill="#F14E24"
                    fill-opacity="0.6"
                  />
                </svg>
                {campaign.location}
              </h4>

              <div className={styles.campaing__donators}>
                <div className={styles.campaing__donators_list}>
                  <div className={styles.campaing_donator}></div>
                  <div className={styles.campaing_donator}></div>
                  <div className={styles.campaing_donator}></div>
                </div>
                <span className={styles.campaing_donators_count}>
                  {
                    // random number of 50 to 1000
                    Math.floor(Math.random() * 1000) + 50
                  }{" "}
                  doadores
                </span>
              </div>
              <Link href="/campaing" className={styles.campaning__button}>
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
