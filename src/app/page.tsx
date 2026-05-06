import Link from "next/link";
import PROJECTS from "./constant/projects";
import EXPIERENCE from "./constant/work-expierence";
import EDUCATION from "./constant/education";
import INTRO from "./constant/intro";

export default function PortfolioHome() {
  return (
    <main className="container intro-main">
      <header>
        <h1>
          안녕하십니까,<br />
          프론트엔드 개발자 <span className="color-highlight">최성수</span>입니다.
        </h1>
      </header>

      <section className="section-values">
        {
          INTRO.map((item, idx) => (
            <div className="value-item" key={idx}>
              <h4>
                {item.title}
              </h4>
              <ul>
                {
                  item.description.map((desc, descIdx) => (
                    <li key={`${idx}-${descIdx}`}>
                      {desc}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>

      <section className="section-experience">

        <h2>경력 기술서</h2>
        {
          EXPIERENCE.map((item, idx) => (
            <div
              key={idx}
              className="experience-area"
            >
              <div className="experience-item">
                <figure>
                  <img
                    src={`/images/logo/${item.thumbnail}`}
                    alt={item.company_name}
                  />
                </figure>
                <div className="experience-info">
                  <h4>
                    {item.company_name}
                  </h4>
                  <p className="color-lowlight">
                    {item.job}
                  </p>
                  <p className="color-lowlight small">
                    {item.start_date} ~ {item.end_date}
                  </p>
                </div>

              </div>

              <ul className="experience-list">
                {
                  item.work.map((workItem, workIdx) => (
                    <li key={`${idx}-${workIdx}`}>
                      {workItem.title}
                      {
                        workItem.description.length > 0
                        &&
                        <ul>
                          {workItem.description.map((desc, descIdx) => (
                            <li key={`${idx}-${workIdx}-${descIdx}`}>
                              {desc}
                            </li>
                          ))
                          }
                        </ul>

                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>
      <section className="section-education">
        <h2>교육 및 자격증</h2>

        <div className="education-wrapper">
          <div className="education-area">
            {
              EDUCATION.filter((v) => v.type === 'university').map((item, idx) => (
                <div className="education-item" key={idx}>
                  <h4>
                    {item.title}
                  </h4>
                  <p className="education-date small">
                    {item.start_date} - {item.end_date}
                  </p>
                  <p className="education-major">
                    {item.major}
                    <span className={`education-status ${item.status}`}>
                      {{
                        graduated: '졸업',
                        dropout: '중퇴',
                      }[item.status as 'graduated' | 'dropout'] || item.status}
                    </span>
                  </p>
                </div>
              ))
            }
          </div>
          <div className="education-area">
            {
              EDUCATION.filter((v) => v.type === 'certificate').map((item, idx) => (
                <div className="education-item" key={idx}>
                  <h4>
                    {item.title}
                  </h4>
                  <p className="education-date small">
                    {item.start_date}
                  </p>
                  <p className="education-major">
                    {item.major}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="section-projects">
        <h2>프로젝트</h2>

        <div className="projects-area">
          {
            PROJECTS.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item"
              >
                <figure>
                  {
                    item.thumbnail &&
                    <img src={`/images/project/${item.thumbnail}`} alt="프로젝트 이미지" />
                  }
                  <div className="project-content">
                    <h3 className="project-label">{item.label}</h3>
                    <p className="project-desc">{item.description}</p>
                  </div>
                </figure>
              </Link>
            ))
          }
        </div>

      </section>
    </main >
  );
}

