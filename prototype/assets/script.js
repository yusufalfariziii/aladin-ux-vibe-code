const content = document.getElementById("screenContent");
const title = document.getElementById("pageTitle");
const subtitle = document.getElementById("pageSubtitle");
const backButton = document.getElementById("backButton");
let historyStack = [];
let currentScreen = "home";
let selectedMethod = "QRIS";

const screens = {
 home: {
  title:"Bayar & Beli", subtitle:"Bayar kebutuhan dan belanja online dengan mudah.",
  html: () => `
   <div class="search">⌕ &nbsp; Cari layanan pembayaran...</div>
   <h2 class="section-title">Kategori Layanan</h2>
   <div class="category-grid">
    <div class="category"><div class="category-icon">▣</div>Pulsa &amp; Data</div>
    <div class="category"><div class="category-icon">ϟ</div>PLN</div>
    <div class="category"><div class="category-icon">▤</div>E-Commerce</div>
    <div class="category"><div class="category-icon">▦</div>E-Wallet</div>
   </div>
   <h2 class="section-title">Pembayaran E-Commerce</h2>
   <button class="card primary row" style="width:100%;text-align:left" data-go="vaAvailable">
    <span class="icon-box">▤</span><span class="grow"><h3>Virtual Account (VA)</h3><p>Bayar dengan nomor VA dari marketplace atau merchant</p></span><span class="chevron">›</span>
   </button>
   <div class="card row"><span class="icon-box">▣</span><span class="grow"><h3>E-Wallet</h3><p>DANA, OVO, GoPay, ShopeePay, dan lainnya</p></span><span class="chevron">›</span></div>
   <div class="card row"><span class="icon-box">▥</span><span class="grow"><h3>Transfer Bank</h3><p>Transfer ke rekening merchant</p></span><span class="chevron">›</span></div>
   <div class="info-box">ⓘ &nbsp;Pilih Virtual Account untuk melihat contoh status ketersediaan VA.</div>
   <button class="btn" data-go="vaAvailable">Coba skenario VA tersedia</button>
   <button class="btn secondary" data-go="vaUnavailable">Simulasikan VA tidak tersedia</button>`
 },
 vaAvailable: {
  title:"Virtual Account", subtitle:"Cek ketersediaan metode pembayaran.",
  html: () => `
   <div class="card row"><span class="icon-box">▣</span><span class="grow"><h3>Belanja Online</h3><p>Tokopedia • Data transaksi simulasi</p></span><strong class="amount">Rp249.000</strong></div>
   <div class="status-box"><strong>✓ Virtual Account tersedia</strong><p>Pembayaran dapat dilanjutkan melalui VA pada skenario prototype ini.</p></div>
   <div class="field"><label>Nomor Virtual Account (simulasi)</label><strong>3901 8329 3712 4056</strong></div>
   <div class="field"><label>Total Pembayaran</label><strong>Rp249.000</strong></div>
   <div class="info-box">Pastikan data transaksi sesuai sebelum melanjutkan. Nomor dan nominal di atas hanya contoh.</div>
   <button class="btn" data-go="confirm">Lanjutkan Pembayaran</button>
   <button class="btn secondary" data-go="home">Kembali</button>`
 },
 confirm: {
  title:"Konfirmasi Pembayaran", subtitle:"Periksa informasi sebelum melanjutkan.",
  html: () => `
   <div class="card"><h3>Ringkasan Belanja Online</h3><p>Merchant: Tokopedia (simulasi)</p></div>
   <div class="field"><label>Nomor Virtual Account</label><strong>3901 8329 3712 4056</strong></div>
   <div class="field"><label>Nominal Pembayaran</label><strong>Rp249.000</strong></div>
   <div class="field"><label>Status</label><strong>Menunggu konfirmasi (simulasi)</strong></div>
   <div class="info-box">Prototype ini tidak mengirim pembayaran dan tidak terhubung ke rekening atau layanan Aladin.</div>
   <button class="btn" data-action="finish">Konfirmasi (Simulasi)</button>
   <button class="btn secondary" data-go="vaAvailable">Kembali</button>
   <div id="feedback" aria-live="polite"></div>`
 },
 vaUnavailable: {
  title:"Pembayaran", subtitle:"Informasi ketika metode yang dibutuhkan tidak tersedia.",
  html: () => `
   <div class="card row"><span class="icon-box">▣</span><span class="grow"><h3>Belanja Online</h3><p>Merchant dan nilai transaksi merupakan data simulasi.</p></span></div>
   <div class="status-box error"><strong>ⓘ Virtual Account tidak tersedia</strong><p>Saat ini metode Virtual Account belum dapat digunakan untuk transaksi pada skenario ini. Silakan pilih metode pembayaran lain.</p></div>
   <h2 class="section-title">Metode Pembayaran Lain</h2>
   <div class="card row"><span class="icon-box">▣</span><span class="grow"><h3>QRIS</h3><p>Bayar dengan scan kode QR.</p></span></div>
   <div class="card row"><span class="icon-box">▥</span><span class="grow"><h3>Transfer Bank</h3><p>Transfer ke rekening tujuan.</p></span></div>
   <div class="card row"><span class="icon-box">▣</span><span class="grow"><h3>E-Wallet</h3><p>Pembayaran melalui dompet digital.</p></span></div>
   <button class="btn" data-go="alternatives">Pilih Metode Lain</button>
   <button class="btn secondary" data-go="home">Kembali</button>`
 },
 alternatives: {
  title:"Metode Pembayaran", subtitle:"Pilih metode untuk menyelesaikan transaksi.",
  html: () => `
   <div class="card"><h3>Pembayaran Belanja Online</h3><p>Contoh transaksi • Rp150.000</p></div>
   <h2 class="section-title">Metode Pembayaran Lain</h2>
   <button class="option selected" data-method="QRIS"><span class="icon-box">▣</span><span class="grow"><h3>QRIS</h3><p>Bayar dengan scan kode QR</p></span><span class="radio">●</span></button>
   <button class="option" data-method="Transfer Bank"><span class="icon-box">▥</span><span class="grow"><h3>Transfer Bank</h3><p>Transfer ke rekening tujuan</p></span><span class="radio">○</span></button>
   <button class="option" data-method="E-Wallet"><span class="icon-box">▣</span><span class="grow"><h3>E-Wallet</h3><p>DANA, OVO, GoPay, dan lainnya</p></span><span class="radio">○</span></button>
   <div class="info-box">Pilihan metode menyesuaikan ketersediaan layanan. Ini hanya simulasi pemilihan metode.</div>
   <button class="btn" data-action="selectMethod">Lanjutkan dengan <span id="methodLabel">QRIS</span></button>
   <button class="btn secondary" data-go="vaUnavailable">Kembali</button>
   <div id="feedback" aria-live="polite"></div>`
 }
};

function render(id, push=true){
 if(!screens[id]) return;
 if(push && currentScreen!==id) historyStack.push(currentScreen);
 currentScreen=id;
 title.textContent=screens[id].title;
 subtitle.textContent=screens[id].subtitle;
 content.innerHTML=screens[id].html();
 backButton.style.visibility=historyStack.length?"visible":"hidden";
}
content.addEventListener("click", e=>{
 const go=e.target.closest("[data-go]");
 if(go){render(go.dataset.go);return;}
 const method=e.target.closest("[data-method]");
 if(method){
  selectedMethod=method.dataset.method;
  content.querySelectorAll("[data-method]").forEach(el=>{
   el.classList.toggle("selected",el.dataset.method===selectedMethod);
   const radio=el.querySelector(".radio"); if(radio) radio.textContent=el.dataset.method===selectedMethod?"●":"○";
  });
  const label=document.getElementById("methodLabel"); if(label) label.textContent=selectedMethod;
  return;
 }
 const action=e.target.closest("[data-action]");
 if(action){
  const feedback=document.getElementById("feedback");
  if(action.dataset.action==="finish" && feedback) feedback.innerHTML='<div class="toast">Konfirmasi berhasil ditampilkan. Ini simulasi, tidak ada pembayaran yang dikirim.</div>';
  if(action.dataset.action==="selectMethod" && feedback) feedback.innerHTML='<div class="toast">Metode '+selectedMethod+' dipilih untuk simulasi. Transaksi belum dilakukan.</div>';
 }
});
backButton.addEventListener("click",()=>{if(historyStack.length)render(historyStack.pop(),false);});
document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",e=>e.preventDefault()));
render("home",false);
