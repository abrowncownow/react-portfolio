import { useEffect, useRef } from 'react'
import { layoutWithLines, prepareWithSegments } from '@chenglou/pretext'
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profile from './assets/profile.png'
import './app.css'

const impact = [
  { number: '80+', label: 'integrations supported in a high-volume connector service' },
  { number: 'Multi-account', label: 'AWS networking, DNS, security, and workload architecture' },
  { number: '2012 R2 → 2022', label: 'Windows modernization with deployment and TLS hardening' },
]

const capabilities = [
  {
    index: '01',
    title: 'Cloud platforms',
    copy: 'I build and operate AWS foundations across workload and environment accounts—from data lakes and private application architectures to the networking that connects them.',
    tags: ['AWS CDK', 'Terraform', 'ECS / Fargate', 'RDS', 'CloudFront', 'Route 53'],
  },
  {
    index: '02',
    title: 'Network architecture',
    copy: 'I design multi-account patterns with Transit Gateway, private hosted zones, cross-account DNS, security group referencing, and controlled on-premises connectivity.',
    tags: ['Transit Gateway', 'Private DNS', 'ALB / NLB', 'VPC', 'Equinix', 'WAF'],
  },
  {
    index: '03',
    title: 'Delivery systems',
    copy: 'I turn deployment knowledge into repeatable pipelines and reusable constructs, giving application teams paved roads instead of infrastructure puzzles.',
    tags: ['GitHub Actions', 'Jenkins', 'Azure DevOps', 'CodeBuild', 'PowerShell', 'IaC'],
  },
  {
    index: '04',
    title: 'Reliability & security',
    copy: 'I troubleshoot production across application, IAM, database, network, and operating-system boundaries while translating control requirements into practical, auditable engineering.',
    tags: ['Least privilege', 'Secrets Manager', 'FedRAMP', 'SOC 2', 'StateRAMP', 'SPARC'],
  },
]

const work = [
  {
    eyebrow: 'Ownership',
    title: 'AWS data lake platform',
    copy: 'Assumed ownership of a large AWS data lake and its CDK estate after the senior engineer departed. Led knowledge transfer, architecture review, operational support, and the platform’s continued evolution.',
  },
  {
    eyebrow: 'Architecture',
    title: 'Environment-level networking',
    copy: 'Designed a scalable internal DNS and networking model that delegates namespaces by environment while enabling teams to request private service endpoints through reusable CDK constructs.',
  },
  {
    eyebrow: 'Modernization',
    title: 'Legacy Windows to modern delivery',
    copy: 'Modernized Windows Server 2012 R2 workloads to Server 2022, including IIS, deployment pipelines, TLS hardening, compatibility testing, and production validation—while advocating for containers where they fit.',
  },
  {
    eyebrow: 'Automation',
    title: 'Version-aware S3 exports',
    copy: 'Automated large-scale S3 exports—including every object version—with concurrency controls, safe filenames, and guardrails designed around limited AWS SSO sessions.',
  },
  {
    eyebrow: 'Production engineering',
    title: 'High-concurrency connector service',
    copy: 'Investigated SQLite contention in a service handling more than 80 integrations, evaluating WAL mode, transaction locking, busy timeouts, concurrency limits, and write serialization.',
  },
  {
    eyebrow: 'Security',
    title: 'Secure-by-default infrastructure',
    copy: 'Remediated TLS, IAM, database-driver, secrets, and network findings while building least-privilege access patterns and supporting environments shaped by FedRAMP, SOC 2, StateRAMP, and SPARC expectations.',
  },
]

const principles = [
  ['Start with the system', 'Trace the full path—from DNS and routing to identity, runtime, storage, and deployment—before treating a symptom as the problem.'],
  ['Make the fix reusable', 'Turn one-off production work into a construct, pipeline, guardrail, runbook, or platform capability.'],
  ['Design for operators', 'Infrastructure should be observable, explainable, and safe to change when the pressure is real.'],
]

function KineticStatement() {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const context = canvas.getContext('2d')
    const statements = [
      'Ambiguity in. Reliable platforms out.',
      'Multi-account AWS. Private networks. Clear boundaries.',
      'Automate the hard parts. Observe everything.',
      'Fix the system—not just the incident.',
      'Trusted with the keys. Accountable for the outcome.',
      'Complex infrastructure. Boringly reliable outcomes.',
    ]
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationId
    let width = 0
    let height = 0
    let fontSize = 44
    let lineHeight = 48
    let scenes = []
    let animationStart = null
    let isVisible = false

    const noiseFor = (index) => ((index * 9301 + 49297) % 233280) / 233280

    const recalculate = () => {
      const rect = wrap.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const nextWidth = Math.round(Math.max(rect.width, 280))
      const nextHeight = Math.round(Math.max(rect.height, 260))

      // The canvas must never affect the dimensions being observed. Skipping
      // identical measurements also prevents redundant backing-store resets.
      if (nextWidth === width && nextHeight === height) return

      width = nextWidth
      height = nextHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      fontSize = width < 520 ? 31 : 44
      lineHeight = fontSize * 1.08
      const font = `600 ${fontSize}px Arial`
      context.font = font
      scenes = statements.map((statement, sceneIndex) => {
        const prepared = prepareWithSegments(statement, font, { letterSpacing: -1.2 })
        const lines = layoutWithLines(prepared, width - 52, lineHeight).lines
        const startY = (height - lines.length * lineHeight) / 2 + fontSize
        const glyphs = []
        let glyphIndex = 0

        lines.forEach((line, lineIndex) => {
          let x = 24
          for (const char of line.text) {
            const advance = context.measureText(char).width - 1.2
            const noise = noiseFor(glyphIndex + sceneIndex * 97)
            if (char.trim()) {
              glyphs.push({
                char,
                x,
                targetY: startY + lineIndex * lineHeight,
                startY: -fontSize * (2 + noise * 8),
                delay: lineIndex * 75 + glyphIndex * 14 + noise * 230,
                exitDelay: glyphIndex * 7 + noise * 90,
                color: lineIndex === lines.length - 1 ? '#d8ff68' : '#f2f5ec',
                noise,
              })
            }
            x += advance
            glyphIndex += 1
          }
        })

        return glyphs
      })

      if (reduceMotion) draw(0)
    }

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height)
      context.textBaseline = 'alphabetic'

      const sceneDuration = 5200
      const totalDuration = sceneDuration * scenes.length
      const elapsed = reduceMotion || animationStart === null ? 2400 : (time - animationStart) % totalDuration
      const sceneIndex = reduceMotion ? 0 : Math.floor(elapsed / sceneDuration)
      const sceneTime = reduceMotion ? 2400 : elapsed % sceneDuration
      const glyphs = scenes[sceneIndex] || []

      glyphs.forEach((glyph) => {
        const rawProgress = Math.max(0, Math.min(1, (sceneTime - glyph.delay) / 620))
        if (rawProgress <= 0) return

        const exitProgress = reduceMotion
          ? 0
          : Math.max(0, Math.min(1, (sceneTime - 3650 - glyph.exitDelay) / 480))

        const c1 = 1.45
        const c3 = c1 + 1
        const progress = 1 + c3 * Math.pow(rawProgress - 1, 3) + c1 * Math.pow(rawProgress - 1, 2)
        const settledY = glyph.startY + (glyph.targetY - glyph.startY) * progress
        const y = settledY + Math.pow(exitProgress, 2) * (110 + glyph.noise * 80)
        const x = glyph.x
          + Math.sin(time / 35 + glyph.noise * 12) * (1 - rawProgress) * 8
          + Math.sin(time / 24 + glyph.noise * 18) * exitProgress * 10

        if (rawProgress < 0.94) {
          context.fillStyle = '#d8ff68'
          for (let trail = 4; trail > 0; trail -= 1) {
            context.globalAlpha = (1 - rawProgress) * (0.13 / trail)
            context.fillText(glyph.char, x, y - trail * 18)
          }
        }

        context.globalAlpha = (rawProgress < 1 ? 0.72 + rawProgress * 0.28 : 1) * (1 - exitProgress)
        context.fillStyle = rawProgress < 0.78 ? '#d8ff68' : glyph.color
        context.fillText(glyph.char, x, y)
      })
      context.globalAlpha = 1

      if (!reduceMotion && isVisible) animationId = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(recalculate)
    observer.observe(wrap)
    recalculate()

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && !reduceMotion) {
        if (animationStart === null) animationStart = performance.now()
        cancelAnimationFrame(animationId)
        animationId = requestAnimationFrame(draw)
      } else if (!isVisible) {
        cancelAnimationFrame(animationId)
      }
    }, { threshold: 0.25 })
    visibilityObserver.observe(wrap)

    return () => {
      observer.disconnect()
      visibilityObserver.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="kinetic" ref={wrapRef}>
      <span className="eyebrow kinetic__label">Pretext / glyph rain</span>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="sr-only">
        <p>Ambiguity in. Reliable platforms out.</p>
        <p>Multi-account AWS. Private networks. Clear boundaries.</p>
        <p>Automate the hard parts. Observe everything.</p>
        <p>Fix the system—not just the incident.</p>
        <p>Trusted with the keys. Accountable for the outcome.</p>
        <p>Complex infrastructure. Boringly reliable outcomes.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Alex Brown, home">AB<span>/</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </nav>
        <a className="topbar__contact" href="mailto:abrowncownow@gmail.com">Let’s talk <FiArrowUpRight /></a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero__copy">
            <p className="eyebrow">Cloud & platform engineer · Pacific Northwest</p>
            <h1>Building the cloud foundations teams can trust.</h1>
            <p className="hero__lede">I design, automate, and operate secure AWS platforms—specializing in multi-account networking, infrastructure as code, delivery systems, and hard production problems.</p>
            <div className="hero__actions">
              <a className="button button--solid" href="#work">Explore my work <FiArrowDownRight /></a>
              <a className="button" href="https://github.com/abrowncownow" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
            </div>
          </div>
          <div className="hero__portrait" aria-label="Portrait of Alex Brown">
            <div className="hero__status"><span /> Available for the next hard problem</div>
            <img src={profile} alt="Alex Brown" />
            <div className="hero__monogram">AB</div>
          </div>
        </section>

        <section className="impact-strip" aria-label="Career highlights">
          {impact.map((item) => (
            <div className="impact" key={item.number}>
              <strong>{item.number}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="statement section-pad">
          <div className="section-intro">
            <p className="eyebrow">How I work</p>
            <h2>Systems thinking, applied.</h2>
            <p>I’m most useful where application delivery, cloud infrastructure, networking, security, and operations meet.</p>
          </div>
          <KineticStatement />
        </section>

        <section className="work section-pad" id="work">
          <div className="section-intro section-intro--wide">
            <p className="eyebrow">Selected impact / 2023—2026</p>
            <h2>Platform work that holds up in production.</h2>
          </div>
          <div className="work-grid">
            {work.map((item, index) => (
              <article className="work-card" key={item.title}>
                <div className="work-card__top"><span>{String(index + 1).padStart(2, '0')}</span><p>{item.eyebrow}</p></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="section-intro">
            <p className="eyebrow">Capabilities</p>
            <h2>Wide context.<br />Deep ownership.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability" key={item.index}>
                <span className="capability__index">{item.index}</span>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="principles section-pad">
          <div className="section-intro"><p className="eyebrow">Engineering principles</p><h2>Fix the system,<br />not just the incident.</h2></div>
          <div className="principles__list">
            {principles.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </section>

        <section className="trust section-pad">
          <div className="trust__title">
            <p className="eyebrow">Integrity / access / accountability</p>
            <h2>Trusted with<br />the keys.</h2>
          </div>
          <div className="trust__body">
            <p className="trust__lead">My work has repeatedly placed me close to systems and information where judgment matters as much as technical ability.</p>
            <p>In platform engineering, that means privileged production access, sensitive infrastructure, secrets, and changes where a careless action can carry real consequences. During my U.S. Army service, I was entrusted with Top Secret classified information. In both environments, integrity means restraint, clear communication, auditability, and owning the outcome.</p>
            <p>I also bring experience working with security and compliance expectations including FedRAMP, SOC 2, StateRAMP, and SPARC—turning controls into concrete practices across IAM, logging, change management, vulnerability remediation, secrets, and network boundaries.</p>
            <ul className="trust__tags" aria-label="Security and compliance experience">
              {['Privileged production access', 'FedRAMP', 'SOC 2', 'StateRAMP', 'SPARC', 'Top Secret — U.S. Army service'].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="about__title"><p className="eyebrow">About</p><h2>Calm in the complex.</h2></div>
          <div className="about__copy">
            <p className="about__lead">I became a go-to engineer for AWS networking, CDK, IAM, pipelines, Windows modernization, and cross-account infrastructure by following problems all the way through.</p>
            <p>Over the last three years, I’ve taken ownership of systems designed by more senior engineers, developed the architectural context to evolve them, and helped application teams make better decisions about cloud-native design, secrets, networking, and deployment.</p>
            <p>Before cloud engineering, I served as a U.S. Army All-Source Intelligence Analyst—experience that still shapes how I synthesize incomplete information, identify risk, brief decisions, and operate in high-accountability environments.</p>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="eyebrow">Have a difficult system?</p>
          <h2>Let’s make it<br /><em>boringly reliable.</em></h2>
          <a href="mailto:abrowncownow@gmail.com" className="contact__email">abrowncownow@gmail.com <FiArrowUpRight /></a>
        </section>
      </main>

      <footer>
        <p>Alex Brown © {new Date().getFullYear()}</p>
        <div><a href="https://github.com/abrowncownow" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com/in/abrowncownow" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:abrowncownow@gmail.com" aria-label="Email"><FiMail /></a></div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
