import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "FII Code",
    src: "https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/274951917_1942176015964670_2513082435091866671_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H3-ECziCR8QAX9nU4_J&_nc_ht=scontent.fias1-1.fna&oh=00_AfBVOljem0pHVIumYCl97xIwpYQvrByzoOC4575J_bAHPA&oe=6438A121",
    description: (
      <>
        FIICode este un proiect organizat de ASII și de Facultatea de
        Informatică din Iași, ce are la bază dezvoltarea abilităților pe partea
        de programare la nivel competitiv.
      </>
    ),
  },
  {
    title: "FII Practic",
    src: "https://scontent.fias1-2.fna.fbcdn.net/v/t39.30808-6/238653512_320529843080726_5612991002787164409_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZPUuefjYlFYAX8JwhzU&_nc_ht=scontent.fias1-2.fna&oh=00_AfAikbBNFbS6-VaWAsZnzgohMtErMpc_OBBY09tN40hQ9w&oe=64391B18",
    description: (
      <>
        FII Practic este o provocare adusă vouă, atât elevi și studenți, cât și
        persoane din mediul corporatist, care are drept țintă dezvoltarea unor
        noi abilități prin sesiunile de învatare practică alături de specialiști
        ai domeniului.
      </>
    ),
  },
  {
    title: "FII IT-ist",
    src: "https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/217663496_108955168135606_2569858810269874563_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MbXsiG-E26QAX8WYdKo&_nc_ht=scontent.fias1-1.fna&oh=00_AfC3tQM-_6uiNDPZeoqbjUdN0CPYnmf1Q9SCQdoi_9-NOA&oe=643959B3",
    description: <>N-am gasit descriere</>,
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
