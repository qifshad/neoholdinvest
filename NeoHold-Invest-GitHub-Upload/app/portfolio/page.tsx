import { ArrowRight, Check, MapPin } from "lucide-react";
import { Header, Footer, ContactSection } from "../site-components";

export const metadata = {
  title: "Лозана | Инвестиционен проект край Пловдив",
  description: "Проект Лозана — комплекс от градски къщи край Пловдив, представян от NeoHold Invest пред потенциални инвеститори.",
};

const specs = [
  "Монолитна стоманобетонна конструкция, изпълнена съгласно съвременните европейски стандарти",
  "Високоефективна топлоизолационна система",
  "PVC или алуминиева дограма от висок клас с троен стъклопакет",
  "Хидроизолирани покривни системи с дълъг експлоатационен живот",
  "Енергоспестяващо LED осветление в общите части",
  "Възможност за фотоволтаични системи и технологии за „умен дом“",
  "Озеленяване с автоматизирани системи за напояване",
];

const projectMedia = [
  "729c673b00821015", "fa7d5e16feaee55a", "68431bb22e024637", "b6d81ce8fbb2f449",
  "fc05d22b851f23ee", "73b449a5610356c2", "0284391704179ef9", "46fc6c02c722e998",
  "a677249467e7cb4d", "3731b529b304bc2c",
];

export default function Portfolio() {
  return <><Header/><main>
    <section className="project-hero"><div className="container">
      <div className="eyebrow light"><span/> Инвестиционен проект</div>
      <h1>Лозана.<br/><em>Градски къщи с гледка към Пловдив.</em></h1>
      <div className="project-intro"><p>NeoHold Invest предлага проекта „Лозана“ на потенциални инвеститори. Проектът представлява жилищен комплекс от двуетажни и триетажни градски къщи в непосредствена близост до Пловдив.</p><span><MapPin size={17}/> в близост до Пловдив</span></div>
    </div></section>

    <section className="project-gallery"><div className="container gallery-grid"><img src="/projects/bdbe02ed4254b056.avif" alt="Модерни градски къщи" decoding="async"/><img src="/projects/b661d5aae4f5db1b.avif" alt="Проектна визуализация" decoding="async"/></div></section>
    <section className="project-facts"><div className="container facts-grid"><div><span>Тип</span><strong>Двуетажни и триетажни градски къщи</strong></div><div><span>Локация</span><strong>В непосредствена близост до Пловдив</strong></div><div><span>Изложение</span><strong>Южно, с панорамни гледки</strong></div><div><span>Паркиране</span><strong>Собствен гараж към всяко жилище</strong></div></div></section>
    <section className="representation"><div className="container representation-inner"><strong>Участници в проекта</strong><p>NeoHold Invest представя „Лозана“ пред потенциални инвеститори, предоставя наличната проектна информация и координира комуникацията. Строителната компания по проекта е партньорът „НЕОБИЛД ИНВЕСТ“ ЕООД.</p></div></section>

    <section className="section project-story"><div className="container story-grid"><div><div className="eyebrow"><span/> Концепция</div><h2>Лозана.<br/><em>Съвременна жилищна среда.</em></h2></div><div><p className="lead">Жилищен комплекс в непосредствена близост до Пловдив, с панорамни гледки към града и околните зелени хълмове.</p><p>Всяко жилище разполага със собствен гараж, просторни тераси, озеленени площи и оптимално разпределени вътрешни пространства. Южното изложение, големите витринни прозорци и изчистените фасадни линии осигуряват светлина и простор.</p></div></div></section>

    <section className="specs section"><div className="container specs-grid"><div><div className="eyebrow light"><span/> Заявен стандарт на изпълнение</div><h2>Материали и<br/><em>технологии.</em></h2><p>Решения, посочени в предоставеното представяне на проекта. Окончателните параметри се потвърждават в договорната и техническата документация.</p></div><div className="spec-list">{specs.map(s=><div key={s}><Check size={17}/><span>{s}</span></div>)}</div></div></section>

    <section className="media-section section"><div className="container"><div className="section-head"><div><div className="eyebrow"><span/> Галерия</div><h2>Визуализации и<br/><em>проектни материали.</em></h2></div><p>Всички налични изображения от оригиналната галерия на проекта.</p></div><div className="media-grid">{projectMedia.map((id,i)=><figure key={id}><img src={`/projects/${id}.avif`} alt={`Оригинален проектен материал ${i+1}`} loading="lazy" decoding="async"/><figcaption>Проектен материал {String(i+1).padStart(2,"0")}</figcaption></figure>)}</div></div></section>

    <section className="investment section"><div className="container investment-card"><div><div className="eyebrow"><span/> За инвеститори</div><h2>Информация за<br/><em>проект „Лозана“.</em></h2></div><div><p>При интерес NeoHold Invest предоставя наличните материали за проекта и координира разговорите относно възможностите за участие. Конкретните условия се разглеждат индивидуално и се потвърждават с официалната документация.</p><a href="/#contact" className="btn btn-dark">Запитване за проекта <ArrowRight size={17}/></a></div></div></section>
    <section className="faq section"><div className="container faq-layout"><div><div className="eyebrow"><span/> Информация</div><h2>Често задавани<br/><em>въпроси.</em></h2></div><div className="faq-list"><details open><summary>Каква е ролята на NeoHold Invest?</summary><p>NeoHold Invest предлага проекта „Лозана“ на потенциални инвеститори, предоставя наличната проектна информация и координира комуникацията.</p></details><details><summary>Коя е строителната компания?</summary><p>Строителната компания по проекта е „НЕОБИЛД ИНВЕСТ“ ЕООД — партньор на NeoHold Invest.</p></details><details><summary>Къде се намира проектът?</summary><p>В представянето е посочено, че комплексът е в непосредствена близост до Пловдив. Точната локация може да бъде предоставена при директно запитване.</p></details><details><summary>Какво включва всяко жилище?</summary><p>Според проектното представяне всяка жилищна единица разполага със собствен гараж, просторни тераси, озеленени площи и функционално разпределени вътрешни пространства.</p></details><details><summary>Как се потвърждават техническите параметри?</summary><p>Окончателните материали, параметри и условия се потвърждават в официалната техническа и договорна документация.</p></details></div></div></section>
    <ContactSection/>
  </main><Footer/></>;
}
