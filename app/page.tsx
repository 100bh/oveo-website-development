'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Download,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Music2,
  Search,
  Settings,
  Ticket,
  Users,
  X,
  Zap,
} from 'lucide-react'

const stats = [
  { label: 'Ticket revenue', value: '₹1,84,250', change: '+18.2%', tone: 'mint', icon: CreditCard },
  { label: 'Tickets sold', value: '1,248', change: '+12.4%', tone: 'lilac', icon: Ticket },
  { label: 'Audience', value: '8,491', change: '+8.2%', tone: 'peach', icon: Users },
  { label: 'Conversion rate', value: '6.8%', change: '+2.4%', tone: 'lime', icon: Zap },
]

const bars = [42, 55, 48, 68, 58, 78, 64, 84, 61, 73, 88, 76]

function ArrowButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <button className={`arrow-button ${dark ? 'arrow-button-dark' : ''}`}>
      <span>{children}</span>
      <span className="arrow-button-icon"><ArrowUpRight size={17} strokeWidth={2.4} /></span>
    </button>
  )
}

function Landing({ onDashboard }: { onDashboard: () => void }) {
  return (
    <main className="landing-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Ovéo home">
          <span className="brand-mark"><Music2 size={18} strokeWidth={2.5} /></span>
          <span>ovéo</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#why">Why Ovéo</a>
          <a href="#artists">For artists</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <button className="text-button" onClick={onDashboard}>Artist login</button>
          <ArrowButton>Request an invite</ArrowButton>
        </div>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Built for the independent scene</div>
          <h1>The infrastructure<br />behind <span className="highlight">live music.</span></h1>
          <p className="hero-subtitle">Ovéo gives selected artists the tools to run their events, understand their audience, and build communities that last.</p>
          <div className="hero-actions"><ArrowButton dark>Request an invite</ArrowButton><button className="quiet-link" onClick={onDashboard}>See the artist workspace <ChevronRight size={16} /></button></div>
          <div className="hero-note"><span className="tiny-check">✓</span> Artists pay ₹0 &nbsp;·&nbsp; Fans support the infrastructure</div>
        </div>
        <div className="hero-visual" aria-label="Ovéo artist analytics preview">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="floating-note note-top"><span className="note-dot mint-dot" /> Live audience <strong>+18.2%</strong></div>
          <div className="floating-note note-bottom"><CalendarDays size={15} /> Next show <strong>Fri, 14 Jun</strong></div>
          <div className="phone-card">
            <div className="phone-top"><span className="micro-label">OVÉO / 01</span><MoreHorizontal size={16} /></div>
            <div className="phone-art"><div className="art-ring ring-a" /><div className="art-ring ring-b" /><Music2 size={50} strokeWidth={1.1} /></div>
            <div className="phone-meta"><span>LIVE / MUMBAI</span><span>07:30 PM</span></div>
            <h3>Soft Signals<br /><em>Live at antiSOCIAL</em></h3>
            <div className="phone-footer"><span>82% sold</span><span className="mini-line"><i /></span></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" id="why"><p>One calm place to run the whole show.</p><div className="proof-items"><span>Events</span><span>Tickets</span><span>Audience</span><span>Community</span><span>Insight</span></div></section>

      <section className="statement-section" id="artists"><div className="section-kicker">A different kind of platform</div><h2>Your work is yours.<br /><span>We build the rails.</span></h2><p>From the first announcement to the last scan at the door, Ovéo keeps the focus where it belongs: on the artist and the people who show up for them.</p><ArrowButton>Explore the workspace</ArrowButton></section>

      <section className="dashboard-preview" id="events"><div className="preview-header"><div><span className="section-kicker">The artist workspace</span><h2>Everything in view.</h2></div><button className="preview-link" onClick={onDashboard}>Open dashboard <ArrowUpRight size={15} /></button></div><DashboardPanel compact /></section>

      <footer className="site-footer" id="about"><a className="brand" href="#top"><span className="brand-mark"><Music2 size={18} /></span><span>ovéo</span></a><span>Built for artists. Powered by their communities.</span><span>© 2026 Ovéo</span></footer>
    </main>
  )
}

function DashboardPanel({ compact = false }: { compact?: boolean }) {
  return <div className={`dashboard-window ${compact ? 'dashboard-compact' : ''}`}>
    <aside className="dashboard-sidebar">
      <div className="dashboard-logo"><span className="brand-mark"><Music2 size={17} /></span><span>ovéo</span></div>
      <div className="sidebar-group"><span className="sidebar-label">Workspace</span><button className="sidebar-item active"><LayoutDashboard size={16} />Overview</button><button className="sidebar-item"><CalendarDays size={16} />Events</button><button className="sidebar-item"><Ticket size={16} />Tickets</button><button className="sidebar-item"><Users size={16} />Audience</button><button className="sidebar-item"><BarChart3 size={16} />Analytics</button></div>
      <div className="sidebar-group lower"><span className="sidebar-label">Manage</span><button className="sidebar-item"><Settings size={16} />Settings</button><button className="sidebar-item"><CircleHelp size={16} />Help centre</button></div>
      <div className="profile-chip"><div className="avatar">AS</div><span><b>Arjun S.</b><small>Artist account</small></span><ChevronDown size={14} /></div>
    </aside>
    <section className="dashboard-main">
      <div className="dashboard-top"><div><span className="dashboard-kicker">Friday, 14 June 2026</span><h2>Good morning, Arjun</h2></div><div className="dashboard-tools"><button className="search-box"><Search size={15} />Search</button><button className="icon-button"><Download size={16} /></button><div className="avatar small">AS</div></div></div>
      <div className="dashboard-summary"><div><span>Current balance</span><strong>₹1,84,250</strong><small className="positive">↑ 18.2% <em>vs last month</em></small></div><div className="summary-line"><span>Next event</span><strong>Soft Signals</strong><small>Fri, 14 Jun · 82% sold</small></div></div>
      <div className="metric-grid">{stats.map(({ label, value, change, tone, icon: Icon }) => <div className="metric-card" key={label}><div className={`metric-icon ${tone}`}><Icon size={18} /></div><span>{label}</span><strong>{value}</strong><small className="positive">↑ {change}</small></div>)}</div>
      <div className="dashboard-grid"><div className="panel chart-panel"><div className="panel-heading"><div><h3>Ticket sales</h3><p>Confirmed sales across your events</p></div><button className="select-button">Last 12 months <ChevronDown size={13} /></button></div><div className="chart"><div className="chart-y"><span>₹40k</span><span>₹30k</span><span>₹20k</span><span>₹10k</span><span>₹0</span></div><div className="bars">{bars.map((height, index) => <div className="bar-column" key={index}><div className={`bar ${index === 7 ? 'selected' : ''}`} style={{ height: `${height}%` }} /><span>{['J','F','M','A','M','J','J','A','S','O','N','D'][index]}</span></div>)}</div></div></div><div className="panel activity-panel"><div className="panel-heading"><div><h3>Recent activity</h3><p>Latest updates from your workspace</p></div><MoreHorizontal size={17} /></div><div className="activity-list"><div><span className="activity-badge mint">✓</span><p><b>Ticket sale confirmed</b><small>2 tickets · Soft Signals</small></p><time>2m</time></div><div><span className="activity-badge lavender">↗</span><p><b>Campaign is performing</b><small>Instagram · 184 visits</small></p><time>1h</time></div><div><span className="activity-badge peach">●</span><p><b>Event is 82% sold</b><small>Soft Signals · 246 tickets left</small></p><time>3h</time></div></div></div></div>
      <div className="panel event-panel"><div className="panel-heading"><div><h3>Upcoming events</h3><p>Your next live moments</p></div><button className="select-button">View all <ArrowUpRight size={13} /></button></div><div className="event-row"><div className="event-date"><strong>14</strong><span>JUN</span></div><div className="event-info"><b>Soft Signals</b><span>antiSOCIAL, Mumbai · 07:30 PM</span></div><div className="event-progress"><span><b>82%</b> sold</span><div><i style={{ width: '82%' }} /></div></div><button className="row-more"><MoreHorizontal size={17} /></button></div></div>
    </section>
  </div>
}

function Dashboard({ onBack }: { onBack: () => void }) {
  return <main className="dashboard-shell"><div className="dashboard-mobile-header"><button onClick={onBack} className="mobile-back"><X size={19} /></button><span>Artist workspace</span><Menu size={19} /></div><DashboardPanel /></main>
}

export default function Page() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing')
  return view === 'landing' ? <Landing onDashboard={() => setView('dashboard')} /> : <Dashboard onBack={() => setView('landing')} />
}
