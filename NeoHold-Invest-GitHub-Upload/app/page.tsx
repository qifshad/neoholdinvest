import { ArrowRight, Building2, CheckCircle2, FileText, MessageSquare, MoveUpRight } from "lucide-react";
import { Header, Footer, ContactSection } from "./site-components";

const roles = [
  { icon: FileText, title: "Проектна информация", text: "Представяме наличните архитектурни материали, технически характеристики и параметри на имотите." },
  { icon: MessageSquare, title: "Координирана комуникация", text: "Събираме въпросите на заинтересованите страни и координираме необходимите уточнения по проекта." },
  { icon: CheckCircle2, title: "Ясни следващи стъпки", text: "Съдействаме при запитване, оглед и получаване на официалната проектна и договорна документация." },
];

const partners = [
  { mark: "image", title: "IZO-TERMSTROY", role: "Хидро- и топлоизолационни дейности", detail: "Специализиран партньор" },
  { mark: "BB", title: "Берту Билдинг ООД", role: "Строителство и строително-монтажни дейности", detail: "ЕИК 207767220", href: "https://papagal.bg/eik/207767220/69b6" },
  { mark: "NI", title: "НЕОБИЛД ИНВЕСТ ЕООД", role: "Строителна компания по проект „Лозана“", detail: "ЕИК 207783177", href: "https://papagal.bg/eik/207783177/0a49" },
  { mark: "mm-image", title: "М И М КОНСУЛТ ЕООД", role: "Консултантска дейност, представителство, строителство и предприемачество", detail: "ЕИК 200336558", href: "https://papagal.bg/eik/200336558/5913" },
];

export default function Home() {
  return <><Header />
    <main>
      <section className="hero hero-v2">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="eyebrow light"><span /> Инвестиционна компания</div>
            <h1>Инвестиции в <strong>съвременна жилищна среда.</strong></h1>
            <p className="hero-copy">NeoHold Invest създава и развива модерни жилищни сгради, редови къщи и бутикови комплекси.</p>
            <div className="hero-actions">
              <a className="btn btn-copper" href="/portfolio">Проект „Лозана“ <ArrowRight size={18}/></a>
              <a className="text-link light-link" href="#about">За компанията <ArrowRight size={15}/></a>
            </div>
          </div>
          <aside className="project-dossier" aria-label="Инвестиционен паспорт на проект Лозана">
            <div className="dossier-head"><span>Актуален проект</span><MoveUpRight size={18}/></div>
            <div className="dossier-title"><small>Проект</small><strong>Лозана</strong></div>
            <dl>
              <div><dt>Предназначение</dt><dd>Предложение за инвеститори</dd></div>
              <div><dt>Тип</dt><dd>Градски къщи</dd></div>
              <div><dt>Локация</dt><dd>В близост до Пловдив</dd></div>
              <div><dt>Строител</dt><dd>НЕОБИЛД ИНВЕСТ ЕООД</dd></div>
            </dl>
            <a href="/portfolio">Отворете проектното представяне <ArrowRight size={16}/></a>
          </aside>
        </div>
      </section>

      <section className="company-intro section" id="about"><div className="container intro-layout">
        <div className="intro-heading"><div className="eyebrow"><span/> За NeoHold Invest</div><h2>От проекта до<br/>информираното решение.</h2></div>
        <div className="intro-copy"><p className="lead">Представяме жилищни проекти пред потенциални инвеститори и осигуряваме ясна връзка с отговорните страни.</p><p>Работим с наличните проектни материали и технически данни. Строителните дейности се изпълняват от строителната компания на съответния проект, а окончателните параметри се потвърждават в официалната документация.</p></div>
      </div></section>

      <section className="role-section section" id="principles"><div className="container">
        <div className="section-head compact"><div><div className="eyebrow"><span/> Нашата роля</div><h2>Ясна информация.<br/>Точна координация.</h2></div><p>Практичен процес за хора, които търсят конкретика, без ненужна сложност.</p></div>
        <div className="role-grid">{roles.map(({icon:Icon,title,text})=><article key={title}><Icon size={23}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="featured-v2"><div className="container featured-shell">
        <div className="featured-visual"><img src="/projects/bdbe02ed4254b056.avif" alt="Проект Лозана — градски къщи край Пловдив" loading="lazy" decoding="async"/><span>Проектна визуализация</span></div>
        <div className="featured-copy"><div className="eyebrow light"><span/> Предложение за инвеститори</div><p className="project-index">01 / Актуален проект</p><h2>Лозана</h2><p className="featured-lead">Комплекс от двуетажни и триетажни градски къщи в непосредствена близост до Пловдив.</p><ul><li>Собствен гараж към всяко жилище</li><li>Просторни тераси и озеленени площи</li><li>Южно изложение и панорамни гледки</li></ul><a className="btn btn-light" href="/portfolio">Вижте всички материали <ArrowRight size={17}/></a></div>
      </div></section>

      <section className="process section"><div className="container process-layout">
        <div><div className="eyebrow"><span/> Процес</div><h2>Три ясни стъпки.</h2><p>От първоначалния интерес до прегледа на официалните документи.</p></div>
        <ol><li><span>01</span><div><h3>Получавате информация</h3><p>Изпращаме наличното описание, визуализации и заявени характеристики.</p></div></li><li><span>02</span><div><h3>Уточняваме въпросите</h3><p>Координираме отговорите за проекта, наличността и възможния оглед.</p></div></li><li><span>03</span><div><h3>Преглеждате документите</h3><p>Параметрите и условията се потвърждават с официалната документация.</p></div></li></ol>
      </div></section>

      <section className="partners section" id="partners"><div className="container">
        <div className="section-head compact"><div><div className="eyebrow"><span/> Партньорска мрежа</div><h2>Компании, с които работим.</h2></div><p>Партньорският статус е потвърден от NeoHold Invest. Фирмените данни са от публични регистърни източници.</p></div>
        <div className="partners-list">{partners.map(p=><article key={p.title}><div className={`partner-id${p.mark==="mm-image"?" partner-id-dark":""}`}>{p.mark==="image"?<img src="/partners/izo-termstroy.png" alt="IZO-TERMSTROY"/>:p.mark==="mm-image"?<img src="/partners/mm-konsult.png" alt="М И М КОНСУЛТ"/>:<span>{p.mark}</span>}</div><div><small>{p.detail}</small><h3>{p.title}</h3><p>{p.role}</p></div>{p.href?<a href={p.href} target="_blank" rel="noreferrer" aria-label={`Фирмена информация за ${p.title}`}><ArrowRight size={18}/></a>:<Building2 size={19}/>}</article>)}</div>
      </div></section>
      <ContactSection />
    </main><Footer /></>;
}
