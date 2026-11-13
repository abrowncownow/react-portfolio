import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profile from './assets/profile.webp'
import './app.css'

const impact = [
  { number: '4', label: 'product families under primary DevOps ownership' },
  { number: '1,400+', label: 'databases in an automated disaster recovery environment' },
  { number: '100+', label: 'migration tasks in a data platform I own and develop' },
]

const work = [
  { category: 'Disaster recovery', title: 'Recovery at database scale', challenge: 'A legacy SQL production environment containing more than 1,400 databases.', contribution: 'Designed and implemented automated disaster recovery, including replication, a documented recovery plan and a recovery test.', result: 'A tested recovery approach built around the constraints of the existing environment.' },
  { category: 'Platform ownership', title: 'An expanding AWS data lake', challenge: 'An established data platform with roughly 25 migration tasks when I took ownership.', contribution: 'Led architecture review and continued development of the CDK infrastructure across a wide range of replication instances and endpoint types.', result: 'The platform now supports well over 100 migration tasks. Nested-stack refactoring also unblocked staging deployments.' },
  { category: 'Network architecture', title: 'Reusable private networking', challenge: 'Connecting services across AWS accounts, commercial and GovCloud partitions, and on-premises environments.', contribution: 'Designed environment-level DNS delegation and private-service access patterns using reusable CDK constructs.', result: 'Application teams can request private endpoints through a shared infrastructure pattern.' },
  { category: 'Reliability', title: 'Scaling around queue age', challenge: 'An incident review identified the need to respond to processing backlogs more effectively.', contribution: 'Implemented scaling based on the age of the oldest queued message, added queue-age alarms and contributed reusable step-scaling support to a shared library.', result: 'The incident follow-up became both a workload improvement and a capability other teams can use.' },
  { category: 'Modernization', title: 'Windows Server 2012 R2 to 2022', challenge: 'Legacy application infrastructure with runtime and delivery dependencies.', contribution: 'Modernized Windows Server workloads, including IIS, deployment pipelines, TLS hardening and compatibility testing.', result: 'Validated the upgraded workloads in production.' },
  { category: 'Automation', title: 'Version-aware S3 exports', challenge: 'Exporting large S3 datasets while retaining every object version and working within AWS session limits.', contribution: 'Built export automation with concurrency controls, safe filenames and session-aware guardrails.', result: 'A repeatable export process that preserves object-version history.' },
]

const capabilities = [
  { title: 'Cloud & infrastructure as code', copy: 'Application, database and serverless infrastructure across AWS commercial and GovCloud environments.', tags: ['AWS / GovCloud', 'CDK', 'CloudFormation', 'Terraform', 'ECS / Fargate', 'Lambda', 'RDS / DocumentDB', 'Windows / Linux / IIS'] },
  { title: 'Hybrid cloud networking', copy: 'Cross-account and cross-partition connectivity, on-premises integration, routing, DNS and private service access.', tags: ['Transit Gateway', 'Route 53 / DNS', 'VPC', 'ALB / NLB', 'Network segmentation', 'SSL / TLS certificates'] },
  { title: 'CI/CD & release engineering', copy: 'Reusable deployment pipelines and infrastructure components, including iOS and Android app-store releases.', tags: ['Jenkins', 'CircleCI', 'Azure DevOps', 'CodePipeline', 'CodeBuild', 'CodeDeploy', 'PowerShell'] },
  { title: 'Observability & APM', copy: 'Monitoring, logging, alerting and performance analysis across applications and infrastructure.', tags: ['Datadog', 'AppDynamics', 'CloudWatch', 'Dashboards', 'Root-cause analysis'] },
  { title: 'DevSecOps & vulnerability management', copy: 'Security scanning, CVE remediation and quality gates throughout the SDLC. Infrastructure work supporting FedRAMP, StateRAMP and SOC 2 requirements, including FIPS-compatible TLS configuration.', tags: ['Secure SDLC', 'FedRAMP / StateRAMP', 'SOC 2', 'FIPS', 'Aikido / Mend', 'SonarQube', 'CrowdStrike Falcon', 'Secrets rotation', 'WAF'] },
]

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Alex Brown, home">AB<span>/</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#capabilities">Expertise</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="topbar__contact" href="https://www.linkedin.com/in/abrowncownow/">LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
      </header>
      <main id="main">
        <section className="hero section-pad" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Alex Brown · Cloud & platform engineer</p>
            <h1>Cloud engineering across applications, networks and data.</h1>
            <p className="hero__lede">I’m the primary DevOps owner for four product families at NEOGOV. I design AWS commercial and GovCloud infrastructure, build complex hybrid networks, and automate deployment and recovery across applications, databases and serverless services.</p>
            <div className="hero__actions"><a className="button button--solid" href="#work">Selected work <FiArrowDownRight aria-hidden="true" /></a><a className="button" href="https://www.linkedin.com/in/abrowncownow/">LinkedIn <FiArrowUpRight aria-hidden="true" /></a></div>
          </div>
          <div className="hero__portrait"><div className="hero__status"><span /> Yelm, Washington</div><img src={profile} alt="Alex Brown" width="1333" height="2000" fetchPriority="high" decoding="async" /><div className="hero__monogram" aria-hidden="true">AB</div></div>
        </section>
        <section className="impact-strip" aria-label="Career highlights">{impact.map(item => <div className="impact" key={item.number}><strong>{item.number}</strong><span>{item.label}</span></div>)}</section>
        <section className="work section-pad" id="work">
          <div className="section-intro section-intro--wide"><p className="eyebrow">Selected engineering work</p><h2>Decisions, delivery<br />and results.</h2><p>Examples from production infrastructure, platform development and reliability work.</p></div>
          <div className="work-grid">{work.map((item, index) => <article className="work-card" key={item.title}><div className="work-card__top"><span>{String(index + 1).padStart(2, '0')}</span><p>{item.category}</p></div><h3>{item.title}</h3><dl><div><dt>Challenge</dt><dd>{item.challenge}</dd></div><div><dt>My contribution</dt><dd>{item.contribution}</dd></div><div><dt>Result</dt><dd>{item.result}</dd></div></dl></article>)}</div>
        </section>
        <section className="capabilities section-pad" id="capabilities"><div className="section-intro"><p className="eyebrow">Technical expertise</p><h2>Areas I work in.</h2></div><div className="capability-list">{capabilities.map((item,index) => <article className="capability" key={item.title}><span className="capability__index">0{index+1}</span><div><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div></section>
        <section className="principles section-pad"><div className="section-intro"><p className="eyebrow">How I work</p><h2>Fix the system,<br />not just the incident.</h2></div><div className="principles__copy"><p>I trace problems across networking, identity, applications and data rather than stopping at the first symptom. Then I look for the change that prevents the same work from landing on the next engineer.</p><p>That might be a shared scaling component, a safer deployment workflow or a recovery plan someone else can follow. The queue-age scaling work above is one example of turning an incident into a reusable improvement.</p></div></section>
        <section className="about section-pad" id="about"><div className="about__title"><p className="eyebrow">About Alex</p><h2>Engineering is<br />part of the story.</h2></div><div className="about__copy"><p className="about__lead">Outside work, I perform classical piano publicly several times a year and volunteer in local community theater.</p><p>I also mentor college students through CodeDay, helping them work through open-source software issues.</p><h3>Responsibility over time</h3><p>Before cloud engineering, I worked hands-on with datacenter hardware across Washington and Oregon and served as an Army All-Source Intelligence Analyst. I held a Top Secret clearance during my Army service.</p><p>Those roles taught me to handle sensitive information carefully, explain technical decisions clearly and take responsibility for the work people depend on.</p></div></section>
        <section className="contact section-pad" id="contact"><p className="eyebrow">Contact</p><h2>Let’s <em>talk.</em></h2><p>Connect about cloud engineering, platform work or a shared interest.</p><a href="mailto:abrowncownow@gmail.com" className="contact__email">abrowncownow@gmail.com <FiArrowUpRight aria-hidden="true" /></a><div className="contact__links"><a className="button" href="https://www.linkedin.com/in/abrowncownow/">LinkedIn <FiArrowUpRight aria-hidden="true" /></a><a className="button" href="https://github.com/abrowncownow">GitHub <FiArrowUpRight aria-hidden="true" /></a></div></section>
      </main>
      <footer><p>Alex Brown © {new Date().getFullYear()}</p><div><a href="https://github.com/abrowncownow" aria-label="GitHub"><FiGithub /></a><a href="https://www.linkedin.com/in/abrowncownow/" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:abrowncownow@gmail.com" aria-label="Email"><FiMail /></a></div><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
export default App
