import { useState } from "react";

const Icon = ({ children, tone = "" }) => (
  <span className={`icon-box ${tone}`} aria-hidden="true">{children}</span>
);

function Header({ title, subtitle, onBack, showBack = false }) {
  return (
    <header className="app-header">
      <div className="status-row"><span>09.41</span><span>▮▮▮　◉　▰</span></div>
      <div className="brand-row">
        <span className="brand">Aladin</span>
        <div className="header-actions" aria-label="Akun dan notifikasi"><span>♧</span><span>♙</span></div>
      </div>
      {title && (
        <div className="heading-row">
          {showBack && <button className="back-button" onClick={onBack} aria-label="Kembali">‹</button>}
          <div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
        </div>
      )}
    </header>
  );
}

function BottomNav({ active = "home", onHome, onPayment }) {
  return (
    <nav className="bottom-nav" aria-label="Navigasi utama">
      <button className={`nav-item ${active === "home" ? "active" : ""}`} onClick={onHome}>
        <span className="nav-symbol">⌂</span><span>Beranda</span>
      </button>
      <button className={`nav-qris ${active === "qris" ? "active" : ""}`} onClick={onPayment}>
        <span>▣</span><small>QRIS</small>
      </button>
      <button className="nav-item" onClick={() => window.alert("Menu Keuangan ini hanya elemen navigasi konseptual untuk prototype.")}>
        <span className="nav-symbol">Rp</span><span>Keuangan</span>
      </button>
    </nav>
  );
}

function Home({ goPayment }) {
  return (
    <>
      <Header />
      <main className="home-content">
        <section className="wallet-card">
          <div className="wallet-label"><span>Ala Dompet</span><button onClick={() => window.alert("Informasi saldo tidak ditampilkan karena ini prototype.")}>Detail</button></div>
          <div className="wallet-balance">Rp •••••• <span>◉</span></div>
          <div className="wallet-shortcuts">
            <button onClick={() => window.alert("Simulasi menu Transfer.")}><b>➤</b><span>Transfer</span></button>
            <button onClick={goPayment}><b>▤</b><span>Bayar &amp; Beli</span></button>
            <button onClick={() => window.alert("Simulasi menu Tarik.")}><b>↓</b><span>Tarik</span></button>
            <button onClick={() => window.alert("Simulasi menu Setor.")}><b>↑</b><span>Setor</span></button>
          </div>
        </section>

        <section className="service-row" aria-label="Layanan">
          <button onClick={goPayment}><Icon>▣</Icon><span>Ala Deposito</span></button>
          <button onClick={goPayment}><Icon>★</Icon><span>Ala Impian</span></button>
          <button onClick={goPayment}><Icon>♥</Icon><span>Donasi</span></button>
          <button onClick={goPayment}><Icon>▰</Icon><span>E-Wallet</span></button>
        </section>

        <section className="promo-section">
          <div className="section-heading"><h2>Temukan Berkah</h2><button onClick={goPayment}>Lihat Semua</button></div>
          <button className="promo-banner" onClick={goPayment}>
            <span className="promo-kicker">PENGALAMAN PEMBAYARAN</span>
            <strong>Belanja online lebih mudah</strong>
            <span>Kenali pilihan pembayaran di Aladin</span>
            <b>Jelajahi Bayar &amp; Beli　›</b>
          </button>
        </section>

        <section className="savings-section">
          <h2>Banyak cara menabung di Aladin</h2>
          <div className="saving-card"><div><strong>Ala Deposito</strong><p>Informasi produk simpanan</p></div><span>▣</span></div>
          <div className="saving-card"><div><strong>Ala Impian</strong><p>Rencanakan tujuan tabungan</p></div><span>★</span></div>
        </section>
      </main>
      <BottomNav active="home" onHome={() => {}} onPayment={goPayment} />
    </>
  );
}

function PaymentMethods({ go, onBack }) {
  return (
    <>
      <Header title="Bayar & Beli" subtitle="Bayar kebutuhan dan belanja online dengan mudah." onBack={onBack} showBack />
      <main className="screen-content">
        <div className="search-box">⌕　Cari layanan pembayaran...</div>
        <h2 className="section-title">Kategori Layanan</h2>
        <div className="category-grid">
          <div><Icon>▣</Icon><span>Pulsa &amp; Data</span></div>
          <div><Icon>ϟ</Icon><span>PLN</span></div>
          <div><Icon>▤</Icon><span>E-Commerce</span></div>
          <div><Icon>▦</Icon><span>E-Wallet</span></div>
        </div>
        <h2 className="section-title">Pembayaran E-Commerce</h2>
        <button className="method-card featured" onClick={() => go("va")}>
          <Icon>▤</Icon><span className="method-copy"><strong>Virtual Account (VA)</strong><small>Bayar dengan nomor VA dari marketplace atau merchant</small></span><span className="chevron">›</span>
        </button>
        <button className="method-card" onClick={() => go("alternatives")}>
          <Icon>▰</Icon><span className="method-copy"><strong>E-Wallet</strong><small>DANA, OVO, GoPay, ShopeePay, dan lainnya</small></span><span className="chevron">›</span>
        </button>
        <button className="method-card" onClick={() => go("alternatives")}>
          <Icon>▥</Icon><span className="method-copy"><strong>Transfer Bank</strong><small>Transfer ke rekening merchant</small></span><span className="chevron">›</span>
        </button>
        <div className="info-banner"><b>ⓘ Belum tahu metode pembayaran?</b><span>Kenali pilihan metode pembayaran sebelum melanjutkan.</span></div>
        <div className="demo-switch">
          <span>Jalur demonstrasi prototype</span>
          <button className="text-link" onClick={() => go("unavailable")}>Lihat contoh VA tidak tersedia</button>
        </div>
      </main>
      <BottomNav active="qris" onHome={onBack} onPayment={() => {}} />
    </>
  );
}

function VirtualAccount({ go, onBack }) {
  return (
    <>
      <Header title="Virtual Account" subtitle="Periksa status dan informasi pembayaran." onBack={onBack} showBack />
      <main className="screen-content">
        <div className="order-card">
          <div className="order-icon">▣</div>
          <div className="method-copy"><strong>Belanja Online</strong><small>Merchant contoh untuk simulasi</small></div>
          <strong className="price">Rp249.000</strong>
        </div>
        <div className="status-card success"><b>✓　Virtual Account tersedia</b><p>Status ini merupakan skenario simulasi untuk demonstrasi prototype.</p></div>
        <section className="detail-card">
          <h2>Informasi Virtual Account</h2>
          <div className="bank-row"><span className="bank-mark">BANK</span><strong>Virtual Account</strong></div>
          <div className="va-number"><div><small>Nomor VA (data simulasi)</small><strong>3901 8329 3712 4056</strong></div><button onClick={() => {navigator.clipboard?.writeText("3901832937124056"); window.alert("Nomor VA simulasi disalin.");}}>Salin</button></div>
          <div className="total-row"><span>Total Pembayaran</span><strong>Rp249.000</strong></div>
          <div className="total-row"><span>Status</span><strong className="text-green">Menunggu (simulasi)</strong></div>
        </section>
        <section className="instruction-card">
          <h2>Cara Pembayaran</h2>
          <ol><li>Periksa kembali nomor VA contoh di atas.</li><li>Periksa nominal pembayaran pada ringkasan.</li><li>Lanjutkan ke layar konfirmasi simulasi.</li></ol>
        </section>
        <button className="primary-button" onClick={() => go("confirm")}>Lanjutkan Pembayaran</button>
        <button className="secondary-button" onClick={() => go("unavailable")}>Lihat skenario VA tidak tersedia</button>
      </main>
      <BottomNav active="qris" onHome={onBack} onPayment={() => {}} />
    </>
  );
}

function Confirmation({ onBack, onFinish }) {
  return (
    <>
      <Header title="Konfirmasi Pembayaran" subtitle="Periksa informasi sebelum melanjutkan." onBack={onBack} showBack />
      <main className="screen-content">
        <div className="order-card"><div className="order-icon">▣</div><div className="method-copy"><strong>Belanja Online</strong><small>Merchant contoh (simulasi)</small></div></div>
        <div className="detail-card">
          <h2>Ringkasan Pembayaran</h2>
          <div className="total-row"><span>Nomor VA</span><strong>3901 8329 3712 4056</strong></div>
          <div className="total-row"><span>Nominal</span><strong>Rp249.000</strong></div>
          <div className="total-row"><span>Biaya admin</span><strong>—</strong></div>
          <div className="total-row total-emphasis"><span>Total</span><strong>Rp249.000</strong></div>
        </div>
        <div className="info-banner"><b>Perhatian</b><span>Ini adalah layar konfirmasi simulasi. Tidak ada pembayaran yang dikirim atau diproses.</span></div>
        <button className="primary-button" onClick={onFinish}>Konfirmasi (Simulasi)</button>
        <button className="secondary-button" onClick={onBack}>Kembali</button>
      </main>
      <BottomNav active="qris" onHome={onBack} onPayment={() => {}} />
    </>
  );
}

function Unavailable({ go, onBack }) {
  return (
    <>
      <Header title="Pembayaran" subtitle="Informasi metode yang belum tersedia." onBack={onBack} showBack />
      <main className="screen-content">
        <div className="order-card"><div className="order-icon">▣</div><div className="method-copy"><strong>Belanja Online</strong><small>Contoh transaksi • data simulasi</small></div><strong className="price">Rp150.000</strong></div>
        <div className="status-card unavailable"><b>ⓘ　Virtual Account tidak tersedia</b><p>Pada skenario ini, metode Virtual Account belum dapat digunakan. Kamu masih dapat melihat pilihan pembayaran lain.</p></div>
        <h2 className="section-title">Metode Pembayaran Lain</h2>
        <div className="alternative-row"><Icon>▣</Icon><span className="method-copy"><strong>QRIS</strong><small>Bayar dengan scan kode QR</small></span><span>›</span></div>
        <div className="alternative-row"><Icon>▥</Icon><span className="method-copy"><strong>Transfer Bank</strong><small>Transfer ke rekening tujuan</small></span><span>›</span></div>
        <div className="alternative-row"><Icon>▰</Icon><span className="method-copy"><strong>E-Wallet</strong><small>Pembayaran melalui dompet digital</small></span><span>›</span></div>
        <button className="primary-button" onClick={() => go("alternatives")}>Pilih Metode Lain</button>
        <button className="secondary-button" onClick={onBack}>Kembali</button>
      </main>
      <BottomNav active="qris" onHome={onBack} onPayment={() => {}} />
    </>
  );
}

function Alternatives({ onBack }) {
  const [selected, setSelected] = useState("QRIS");
  const [message, setMessage] = useState("");
  const methods = [
    {name:"QRIS", description:"Bayar dengan scan kode QR", icon:"▣"},
    {name:"Transfer Bank", description:"Transfer ke rekening tujuan", icon:"▥"},
    {name:"E-Wallet", description:"DANA, OVO, GoPay, dan lainnya", icon:"▰"}
  ];
  return (
    <>
      <Header title="Metode Pembayaran" subtitle="Pilih metode untuk simulasi berikutnya." onBack={onBack} showBack />
      <main className="screen-content">
        <div className="order-card"><div className="order-icon">▣</div><div className="method-copy"><strong>Belanja Online</strong><small>Contoh transaksi</small></div><strong className="price">Rp150.000</strong></div>
        <h2 className="section-title">Pilih Metode Pembayaran</h2>
        {methods.map(method => (
          <button key={method.name} className={`selectable-method ${selected === method.name ? "selected" : ""}`} onClick={() => {setSelected(method.name);setMessage("");}}>
            <Icon>{method.icon}</Icon><span className="method-copy"><strong>{method.name}</strong><small>{method.description}</small></span><span className="radio">{selected === method.name ? "●" : "○"}</span>
          </button>
        ))}
        <div className="info-banner"><b>Informasi</b><span>Pilihan di atas hanya untuk menunjukkan bagaimana pengguna dapat memilih alternatif saat VA tidak tersedia.</span></div>
        <button className="primary-button" onClick={() => setMessage(`${selected} dipilih. Ini hanya simulasi dan belum melakukan transaksi.`)}>Lanjutkan</button>
        {message && <div className="feedback-message" role="status">{message}</div>}
        <button className="secondary-button" onClick={onBack}>Kembali</button>
      </main>
      <BottomNav active="qris" onHome={onBack} onPayment={() => {}} />
    </>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [history, setHistory] = useState([]);
  const [notice, setNotice] = useState("");

  const go = (next) => {
    setHistory(prev => [...prev, screen]);
    setScreen(next);
    setNotice("");
    window.scrollTo({top:0,behavior:"smooth"});
  };
  const back = () => {
    setHistory(prev => {
      if (!prev.length) { setScreen("home"); return []; }
      const copy = [...prev];
      setScreen(copy.pop());
      return copy;
    });
    setNotice("");
    window.scrollTo({top:0,behavior:"smooth"});
  };
  const finish = () => setNotice("Konfirmasi simulasi ditampilkan. Tidak ada transaksi nyata yang diproses.");

  let view;
  switch(screen) {
    case "home": view = <Home goPayment={() => go("payment")} />; break;
    case "payment": view = <PaymentMethods go={go} onBack={back} />; break;
    case "va": view = <VirtualAccount go={go} onBack={back} />; break;
    case "confirm": view = <Confirmation onBack={back} onFinish={finish} />; break;
    case "unavailable": view = <Unavailable go={go} onBack={back} />; break;
    case "alternatives": view = <Alternatives onBack={back} />; break;
    default: view = <Home goPayment={() => go("payment")} />;
  }

  return <div className="app-shell">{view}{notice && <div className="global-feedback" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Tutup">×</button></div>}</div>;
}
