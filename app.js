const products = [
  {id:1,name:'قفازات فحص طبية نيتريل خالية من البودرة',en:'Powder-Free Nitrile Examination Gloves',code:'TG-NIT-904',category:'consumables',categoryLabel:'مستهلكات طبية',price:79000,unit:'100 علبة',stock:250,rating:4.9,supplier:'مستودع النور للمستلزمات الطبية',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuAHMP-tn1Ls0QALjhdaWBCGfMZSMzK4c8vDq5o9Tq0RYk0cVykTbjta1QDE3OlShe6PWUj_OyIH1Us8uGqQAdt-nLBWEzc5ZNVcCPDhBQHHMANyGf2JZX90ia-RNo1gLzx1y-aZQH1qQtvfe-4NJZBW6IDCMWvnYyuMXTRPm2-OqLwfL0MmsOmqY2LI2pZNgd3gedaB__KlCF8jMot__FJgzzY_PdffoMRuGXDnGgpEuSem-P2AGsbMOg'},
  {id:2,name:'سرنجات طبية معقمة 5 مل بإبرة',en:'Sterile Luer-Lock Syringes',code:'ISO-7886-1',category:'consumables',categoryLabel:'مستهلكات طبية',price:6200,unit:'كرتون',stock:86,rating:4.7,supplier:'مستودع الشفاء الطبي',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDihBxlzZQvjHfR9v94YHc0DsXVLNWovTJCJJ15leVjeqrIBqmiSndaIAMmUddJlLMVZnvkzZ4ZBNlDuZSuVsLjZK4oMChSXZr2gHtbJi-1APnx42F1L2BkIb9SxzLpjV9Z3Gpm_Gq52veb8mvaacI3H2ni8H6Wt7QriPNnHdGMhL7EOCeBxHsiZtma6XcsruzwW5XxFD18R9uqJ1a6FNMoubK9INpwLt1SbU-P0GCDXlnVYPR3mOiMPQ'},
  {id:3,name:'شاش طبي جراحي معقم 10×10 سم',en:'Sterile Surgical Gauze — 8 ply',code:'BP-ST-1010',category:'consumables',categoryLabel:'مستهلكات طبية',price:12000,unit:'علبة',stock:8,rating:4.8,supplier:'المستودع السوري الحديث',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuCyrp-MaSeJKLr5lj-eYJj4j_eDui0_UJxFvtyODY1MrBs9b1vTRRkIql2WoaRxjREVkdYvT7q_UYFwsrViGI_G198NYLrGBtCg12-aLsFGU3WCZlU-yVGPttI4RV3ZRe7Sou39k1h2R0tQEVY05db0hHz2DBRv1ngc46sNzEF1mpwfpHGJK_lN1wr29TnZqY2NirPUdSgeIzK-q8T-JsyWjzeRXbQ5s8-Rtp_eJ0rcvq3aiEwiefv7Hg'},
  {id:4,name:'خيوط جراحية ممتصة Vicryl 3-0 مع إبرة',en:'Absorbable Surgical Sutures',code:'CE-0123',category:'consumables',categoryLabel:'جراحة وتعقيم',price:48500,unit:'علبة',stock:42,rating:4.8,supplier:'شركة الحياة الدوائية',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuCj_dqoiPRo7uSkFK-sgt48edP_pM69bzRRXZN5j9p7olr-hd9bqfuKqejrHxxWzwCiFfikIOZAsbgguIUDNjjgZjGxaZwqBS8kcuq053RbgjasTYxMHF51ZzcJ2q85859BosgKRwdQggpMvS6zqHMbYu5vS19BfNJ1cDYAjZiT7hExIS2B3ywYgL6CGx7AiOsOxwp8Yum5vtduMaGateMx4_oHB0CPF_9oPV_LNDMXb44DTvWTjkr0Pg'},
  {id:5,name:'كاشف كيمياء الدم الشامل 100 اختبار',en:'Clinical Chemistry Reagent Panel',code:'LAB-CC-100',category:'lab',categoryLabel:'مخبريات وكواشف',price:34200,unit:'طقم',stock:34,rating:4.6,supplier:'شركة المدار للمختبرات',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDiC2uOljYwzRhuPc_po87CUnx-OjoirTsIAZlyTO_Vf-RQTrrYRsL39OvsY_x-7Ea9x2pQCyBrxzwNwI1QfTmJFCdrpYA4AIKLLMC4rcvEtHda_E4qFfs39fUKQTpGvtMFV4l-gve2iqUYRn3caE1HgVjTF3c1y14HZr9JDq1WStvyjs_XkS3Ac0Z4f8UXTGhnMqN4xS8u-WQwK4al_RRGd2zEvLKtP_WEjQS2tyi3C3fPfcZyMFpa0g'},
  {id:6,name:'جهاز قياس ضغط رقمي احترافي',en:'Professional Digital Blood Pressure Monitor',code:'MD-BP-22',category:'equipment',categoryLabel:'أجهزة ومعدات',price:250000,unit:'جهاز',stock:12,rating:4.9,supplier:'شركة النور للأجهزة والمعدات',image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBw3Id1ZATMgDK-eNCyl7mjKeQshgnLgth14mJvvAdyw_DFnktWTBj8Z1Onh7cRKrGH9Ugy-gBb9Gq24Soh-VxhrJz6kqz4BOn8WyTBlMN3oBfurIwOyQ6AhqYySGgE_WFBk7aHMiiInb0rwJ5hSUUQitJ5q0mW8CSrcQOYi5pKjzP3bq2PoaY00ZnGbkA9O9RnsxcXcLFtqo8QjBd2TP7hS1VJrekeVKblfla6MtIu3TnIx6ASqz4GYw'}
];

const suppliers = [
  {name:'مستودع النور للمستلزمات الطبية',initial:'نور',rating:'4.9',delivery:'ساعتان',orders:'148',specialties:['مستهلكات طبية','جراحة','سلسلة تبريد']},
  {name:'شركة الحياة الدوائية المتحدة',initial:'حياة',rating:'4.8',delivery:'4 ساعات',orders:'126',specialties:['أدوية','لقاحات','محاليل وريدية']},
  {name:'مستودع الشفاء للمستلزمات',initial:'شفاء',rating:'4.7',delivery:'3 ساعات',orders:'96',specialties:['تعقيم','مستهلكات','معدات عيادات']},
  {name:'شركة النور للأجهزة والمعدات',initial:'N',rating:'4.9',delivery:'يوم واحد',orders:'84',specialties:['أجهزة طبية','صيانة','تركيب']},
  {name:'شركة المدار للمختبرات',initial:'M',rating:'4.6',delivery:'6 ساعات',orders:'72',specialties:['كواشف','تحاليل','أجهزة مخبرية']},
  {name:'المستودع السوري الحديث',initial:'س',rating:'4.8',delivery:'5 ساعات',orders:'110',specialties:['جراحة','ضمادات','مستهلكات']}
];

const orders = [
  {id:'MP-1048',date:'5 أكتوبر 2026',supplier:'3 موردين',items:4,total:286400,status:'processing',label:'قيد التجهيز'},
  {id:'MP-1043',date:'3 أكتوبر 2026',supplier:'مستودع النور',items:2,total:158000,status:'shipping',label:'قيد التوصيل'},
  {id:'MP-1039',date:'1 أكتوبر 2026',supplier:'شركة الحياة الدوائية',items:6,total:412800,status:'pending',label:'بانتظار التأكيد'},
  {id:'MP-1035',date:'28 سبتمبر 2026',supplier:'مستودع الشفاء',items:3,total:97000,status:'delivered',label:'تم إيصال الطلبية'},
  {id:'MP-1032',date:'27 سبتمبر 2026',supplier:'شركة المدار',items:5,total:184600,status:'processing',label:'قيد التجهيز'},
  {id:'MP-1028',date:'25 سبتمبر 2026',supplier:'شركة النور للأجهزة',items:1,total:250000,status:'pending',label:'بانتظار التأكيد'},
  {id:'MP-1024',date:'22 سبتمبر 2026',supplier:'المستودع السوري',items:7,total:334200,status:'shipping',label:'قيد التوصيل'},
  {id:'MP-1018',date:'18 سبتمبر 2026',supplier:'مورد متعدد',items:4,total:121000,status:'processing',label:'قيد التجهيز'}
];

let cart = JSON.parse(localStorage.getItem('medprocure-cart') || '[]');
let favorites = new Set(JSON.parse(localStorage.getItem('medprocure-favorites') || '[]'));
let currentCategory = 'all';
const money = n => new Intl.NumberFormat('ar-SA').format(n) + ' ر.س';

function routeTo(route){
  const safe = ['dashboard','catalog','orders','suppliers','rfq'].includes(route) ? route : 'dashboard';
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.dataset.view === safe));
  document.querySelectorAll('[data-route]').forEach(b => b.classList.toggle('active', b.dataset.route === safe));
  const titles={dashboard:'لوحة المشتريات',catalog:'كتالوج المنتجات',orders:'الطلبات والشحنات',suppliers:'الموردون المعتمدون',rfq:'طلبات التسعير'};
  document.getElementById('pageTitle').textContent=titles[safe];
  history.replaceState(null,'','#'+safe);
  document.querySelector('.sidebar').classList.remove('open');
  document.getElementById('mainContent').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'smooth'});
}

function productCard(p){
  const fav=favorites.has(p.id);
  const glyph={consumables:'medical_services',lab:'biotech',equipment:'monitor_heart',pharma:'medication'}[p.category]||'health_and_safety';
  return `<article class="product-card"><div class="product-visual"><div class="product-glyph" aria-hidden="true"><span class="material-symbols-rounded">${glyph}</span><i></i><i></i></div><span class="product-code">${p.code}</span><button class="product-favorite ${fav?'active':''}" data-favorite="${p.id}" aria-label="${fav?'إزالة من المفضلة':'إضافة إلى المفضلة'}"><span class="material-symbols-rounded">favorite</span></button></div><div class="product-body"><span class="product-category">${p.categoryLabel}</span><h3>${p.name}</h3><p class="product-desc">${p.en} • مورد معتمد وتوريد موثّق</p><div class="product-meta"><div class="product-price"><small>يبدأ من</small><strong>${money(p.price)}</strong></div><div class="product-stock"><small>المتوفر</small><strong>${p.stock} ${p.unit}</strong></div></div><div class="product-actions"><button class="primary-btn" data-add="${p.id}"><span class="material-symbols-rounded">add_shopping_cart</span> إضافة للسلة</button><button class="product-details-btn" data-details="${p.id}" aria-label="تفاصيل ${p.name}"><span class="material-symbols-rounded">info</span></button></div></div></article>`;
}

function renderProducts(){
  const q=document.getElementById('globalSearch').value.trim().toLowerCase();
  const stockOnly=document.getElementById('stockOnly').checked;
  const min=Number(document.getElementById('minPrice').value)||0;
  const max=Number(document.getElementById('maxPrice').value)||Infinity;
  let list=products.filter(p=>(currentCategory==='all'||p.category===currentCategory)&&(!stockOnly||p.stock>0)&&p.price>=min&&p.price<=max&&(!q||`${p.name} ${p.en} ${p.code} ${p.supplier}`.toLowerCase().includes(q)));
  const sort=document.getElementById('sortSelect').value;
  if(sort==='low')list.sort((a,b)=>a.price-b.price); if(sort==='high')list.sort((a,b)=>b.price-a.price); if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);
  document.getElementById('productGrid').innerHTML=list.map(productCard).join('');
  document.getElementById('resultsCount').textContent=list.length;
  document.getElementById('emptyState').hidden=!!list.length;
}

function renderSuppliers(){
  document.getElementById('dashboardSuppliers').innerHTML=suppliers.slice(0,3).map(s=>`<div class="supplier-mini"><span class="supplier-logo">${s.initial}</span><div><strong>${s.name}</strong><small>توصيل خلال ${s.delivery}</small></div><span class="rating">★ ${s.rating}</span></div>`).join('');
  document.getElementById('supplierGrid').innerHTML=suppliers.map(s=>`<article class="supplier-card"><div class="supplier-card-head"><span class="supplier-logo">${s.initial}</span><div><h3>${s.name}</h3><p class="verified-supplier"><span class="material-symbols-rounded">verified</span> مورد معتمد ومرخّص</p></div></div><div class="supplier-stats"><div><strong>★ ${s.rating}</strong><small>التقييم</small></div><div><strong>${s.orders}</strong><small>طلب مكتمل</small></div><div><strong>${s.delivery}</strong><small>متوسط التجهيز</small></div></div><div class="supplier-tags">${s.specialties.map(x=>`<span>${x}</span>`).join('')}</div><button class="secondary-btn">عرض كتالوج المورد</button></article>`).join('');
}

function renderOrders(filter='all'){
  const list=orders.filter(o=>filter==='all'||o.status===filter);
  document.getElementById('ordersList').innerHTML=list.map(o=>`<article class="order-card"><div class="order-id"><p>${o.date}</p><h3>طلبية #${o.id}</h3><small>${o.supplier} • ${o.items} أصناف</small></div><div class="order-products">${Array.from({length:Math.min(o.items,4)},(_,i)=>`<span class="mini-product"><span class="material-symbols-rounded">${['vaccines','biotech','medical_services','medication'][i%4]}</span></span>`).join('')}</div><div class="order-summary"><div><span class="status status-${o.status}">${o.label}</span><strong>${money(o.total)}</strong></div><button class="text-btn" data-order="${o.id}">عرض التفاصيل</button></div></article>`).join('');
}

function addToCart(id){
  const found=cart.find(i=>i.id===id); found?found.qty++:cart.push({id,qty:1});
  saveCart(); showToast('تمت إضافة المنتج إلى السلة');
}
function saveCart(){localStorage.setItem('medprocure-cart',JSON.stringify(cart));renderCart();}
function renderCart(){
  const count=cart.reduce((s,i)=>s+i.qty,0); document.getElementById('cartCount').textContent=count;document.getElementById('mobileCartCount').textContent=count;
  const body=document.getElementById('cartItems');
  if(!cart.length)body.innerHTML='<div class="cart-empty"><span class="material-symbols-rounded">shopping_cart</span><h3>السلة فارغة</h3><p>أضف المنتجات من الكتالوج لتجميع طلبية موحّدة.</p><button class="secondary-btn" data-go-catalog>تصفح المنتجات</button></div>';
  else body.innerHTML=cart.map(i=>{const p=products.find(p=>p.id===i.id);return `<div class="cart-item"><div><h3>${p.name}</h3><p>${p.supplier}</p><div class="qty-control"><button data-qty="${p.id}" data-delta="1" aria-label="زيادة الكمية">+</button><span>${i.qty}</span><button data-qty="${p.id}" data-delta="-1" aria-label="إنقاص الكمية">−</button><button class="remove-item" data-remove="${p.id}">إزالة</button></div></div><strong>${money(p.price*i.qty)}</strong></div>`}).join('');
  const subtotal=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0),vat=subtotal*.15;
  document.getElementById('cartSubtotal').textContent=money(subtotal);document.getElementById('cartVat').textContent=money(vat);document.getElementById('cartTotal').textContent=money(subtotal+vat);document.getElementById('checkoutBtn').disabled=!cart.length;
}
function toggleCart(open=true){document.getElementById('cartDrawer').classList.toggle('open',open);document.getElementById('cartDrawer').setAttribute('aria-hidden',String(!open));document.getElementById('backdrop').hidden=!open;if(open)document.getElementById('closeCart').focus();}
function showToast(message){const el=document.createElement('div');el.className='toast';el.innerHTML=`<span class="material-symbols-rounded">check_circle</span>${message}`;document.getElementById('toastRegion').append(el);setTimeout(()=>el.remove(),3000);}
function showDetails(id){const p=products.find(p=>p.id===id);document.getElementById('checkoutContent').innerHTML=`<div class="checkout-success"><div class="success-mark"><span class="material-symbols-rounded">medical_services</span></div><p class="eyebrow">${p.categoryLabel} • ${p.code}</p><h2>${p.name}</h2><p>${p.en}</p><div class="order-number">${money(p.price)} / ${p.unit}</div><p>المورد الأفضل حالياً: <strong>${p.supplier}</strong><br>المتوفر: ${p.stock} • التقييم ★ ${p.rating}</p><button type="button" class="primary-btn full" data-modal-add="${p.id}">إضافة إلى السلة</button></div>`;document.getElementById('checkoutDialog').showModal();}

document.addEventListener('click',e=>{
  const route=e.target.closest('[data-route]');if(route){routeTo(route.dataset.route);return}
  const add=e.target.closest('[data-add]');if(add){addToCart(Number(add.dataset.add));return}
  const fav=e.target.closest('[data-favorite]');if(fav){const id=Number(fav.dataset.favorite);favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem('medprocure-favorites',JSON.stringify([...favorites]));renderProducts();return}
  const details=e.target.closest('[data-details]');if(details){showDetails(Number(details.dataset.details));return}
  const modalAdd=e.target.closest('[data-modal-add]');if(modalAdd){addToCart(Number(modalAdd.dataset.modalAdd));document.getElementById('checkoutDialog').close();return}
  const qty=e.target.closest('[data-qty]');if(qty){const item=cart.find(i=>i.id===Number(qty.dataset.qty));item.qty+=Number(qty.dataset.delta);if(item.qty<=0)cart=cart.filter(i=>i!==item);saveCart();return}
  const remove=e.target.closest('[data-remove]');if(remove){cart=cart.filter(i=>i.id!==Number(remove.dataset.remove));saveCart();return}
  if(e.target.closest('[data-go-catalog]')){toggleCart(false);routeTo('catalog')}
});
document.getElementById('cartBtn').onclick=()=>toggleCart(true);document.getElementById('mobileCart').onclick=()=>toggleCart(true);document.getElementById('closeCart').onclick=()=>toggleCart(false);document.getElementById('backdrop').onclick=()=>{toggleCart(false);document.querySelector('.sidebar').classList.remove('open')};
document.getElementById('menuBtn').onclick=()=>{document.querySelector('.sidebar').classList.toggle('open');document.getElementById('backdrop').hidden=!document.querySelector('.sidebar').classList.contains('open')};
document.getElementById('globalSearch').addEventListener('input',()=>{if(location.hash!=='#catalog')routeTo('catalog');renderProducts()});
document.querySelectorAll('input[name="category"]').forEach(r=>r.onchange=()=>{currentCategory=r.value;renderProducts()});
['stockOnly','verifiedOnly','minPrice','maxPrice'].forEach(id=>document.getElementById(id).addEventListener('input',renderProducts));document.getElementById('sortSelect').onchange=renderProducts;
function resetFilters(){currentCategory='all';document.querySelector('input[name="category"][value="all"]').checked=true;document.getElementById('stockOnly').checked=false;document.getElementById('verifiedOnly').checked=false;document.getElementById('minPrice').value='';document.getElementById('maxPrice').value='';document.getElementById('globalSearch').value='';renderProducts()}
document.getElementById('clearFilters').onclick=resetFilters;document.getElementById('emptyReset').onclick=resetFilters;document.getElementById('filterToggle').onclick=()=>document.getElementById('filtersPanel').classList.toggle('open');
document.querySelectorAll('[data-order-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-order-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderOrders(b.dataset.orderFilter)});
document.getElementById('checkoutBtn').onclick=()=>{if(!cart.length)return;const total=document.getElementById('cartTotal').textContent;toggleCart(false);document.getElementById('checkoutContent').innerHTML=`<div class="checkout-success"><div class="success-mark"><span class="material-symbols-rounded">task_alt</span></div><p class="eyebrow">تم بنجاح</p><h2>تم إرسال طلبية الشراء</h2><p>أُرسلت المنتجات إلى الموردين للتأكيد، وستصلك تحديثات التوفر تباعاً.</p><div class="order-number">رقم الطلب MP-1052 • ${total}</div><button class="primary-btn full" value="confirm">متابعة الطلبات</button></div>`;document.getElementById('checkoutDialog').showModal();cart=[];saveCart();};
document.getElementById('rfqForm').onsubmit=e=>{e.preventDefault();showToast('تم إرسال طلب التسعير إلى 12 مورداً معتمداً');e.target.reset();routeTo('dashboard')};
window.addEventListener('hashchange',()=>routeTo(location.hash.slice(1)));renderProducts();renderSuppliers();renderOrders();renderCart();routeTo(location.hash.slice(1)||'dashboard');
