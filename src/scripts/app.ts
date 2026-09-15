import { SERVICES_DATA, CITIES, type ServiceItem } from '../data/services';

interface CartItem {
  id: string;
  service: ServiceItem;
  quantity: number;
}

class QuickyApp {
  private currentBrand: 'quickyit' | 'tanzzzx' = 'quickyit';
  private selectedCategory: string = 'all';
  private searchQuery: string = '';
  private activeCity: string = 'Kolkata';
  private cart: Map<string, CartItem> = new Map();
  private isPhoneView: boolean = false;
  private currentSlideIndex: number = 0;
  private slideInterval: any = null;
  private typewriterInterval: any = null;
  private activeFilter: string = 'popular';
  private speedFilter: string = 'all';

  private quickySearchTerms = [
    "Ecommerce Website",
    "Android & iOS App",
    "ERP & CRM Automation",
    "Branding & Logo Design",
    "48H Fast Website",
    "Paid Ads & Meta Leads",
    "Cinematic Video Editing",
    "3D Product Animation"
  ];

  private tanzzzxSearchTerms = [
    "3D Architectural Walkthrough",
    "Interactive Digital Brochure",
    "Real Estate 4K Drone Shoot",
    "Total Builder Launch Package",
    "Luxury Print & Hoardings"
  ];

  constructor() {
    this.init();
  }

  private init() {
    this.loadSavedState();
    this.setupBrandSwitching();
    this.setupCategoryPills();
    this.setupSearch();
    this.setupCardInteractions();
    this.setupCartSystem();
    this.setupModals();
    this.setupOffersCarousel();
    this.setupCitySelector();
    this.setupViewModeToggle();
    this.setupWhatsAppForms();
    this.setupFilters();
    this.renderCards();
    this.updateCartUI();
  }

  private loadSavedState() {
    try {
      const savedCity = localStorage.getItem('quicky_city');
      if (savedCity) {
        this.activeCity = savedCity;
        const cityEl = document.getElementById('active-city-display');
        if (cityEl) cityEl.textContent = savedCity;
      }
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
  }

  // --- BRAND SWITCHING (QUICKYIT vs TANZZZX STUDIO) ---
  private setupBrandSwitching() {
    const tabQuicky = document.getElementById('tab-quickyit');
    const tabTanzzzx = document.getElementById('tab-tanzzzx');
    const quickyCats = document.getElementById('quickyit-categories-wrap');
    const tanzzzxCats = document.getElementById('tanzzzx-categories-wrap');
    const quickyLogo = document.querySelector('.quickyit-logo-wrap');
    const tanzzzxLogo = document.querySelector('.tanzzzx-logo-wrap');

    const switchBrand = (brand: 'quickyit' | 'tanzzzx') => {
      this.currentBrand = brand;
      this.selectedCategory = brand === 'quickyit' ? 'all' : 'tanzzzx_all';

      if (brand === 'quickyit') {
        tabQuicky?.classList.add('active', 'bg-white', 'text-slate-900', 'border-emerald-500/30', 'shadow-sm');
        tabQuicky?.classList.remove('text-slate-600', 'hover:bg-white/60');
        tabTanzzzx?.classList.remove('active', 'bg-slate-900', 'text-white', 'shadow-sm');
        tabTanzzzx?.classList.add('text-slate-600', 'hover:bg-white/60');

        quickyCats?.classList.remove('hidden');
        tanzzzxCats?.classList.add('hidden');

        quickyLogo?.classList.remove('hidden');
        quickyLogo?.classList.add('flex');
        tanzzzxLogo?.classList.add('hidden');
        tanzzzxLogo?.classList.remove('flex');
      } else {
        tabTanzzzx?.classList.add('active', 'bg-slate-900', 'text-white', 'shadow-sm');
        tabTanzzzx?.classList.remove('text-slate-600', 'hover:bg-white/60');
        tabQuicky?.classList.remove('active', 'bg-white', 'text-slate-900', 'border-emerald-500/30', 'shadow-sm');
        tabQuicky?.classList.add('text-slate-600', 'hover:bg-white/60');

        tanzzzxCats?.classList.remove('hidden');
        quickyCats?.classList.add('hidden');

        tanzzzxLogo?.classList.remove('hidden');
        tanzzzxLogo?.classList.add('flex');
        quickyLogo?.classList.add('hidden');
        quickyLogo?.classList.remove('flex');
      }

      // Reset category pills active styling
      document.querySelectorAll('.category-pill').forEach(pill => {
        const pBrand = pill.getAttribute('data-brand');
        const pCat = pill.getAttribute('data-category');
        if (pBrand === brand && (pCat === 'all' || pCat === 'tanzzzx_all')) {
          pill.classList.add(brand === 'quickyit' ? 'bg-emerald-600' : 'bg-amber-500', 'text-white', 'active-pill');
          pill.classList.remove('bg-white', 'text-slate-700');
        } else {
          pill.classList.remove('bg-emerald-600', 'bg-amber-500', 'text-white', 'active-pill');
          pill.classList.add('bg-white', 'text-slate-700');
        }
      });

      // Filter carousel slides
      this.currentSlideIndex = 0;
      this.updateCarouselSlide(0);

      this.renderCards();
      this.startTypewriter();
    };

    tabQuicky?.addEventListener('click', () => switchBrand('quickyit'));
    tabTanzzzx?.addEventListener('click', () => switchBrand('tanzzzx'));
  }

  // --- CATEGORY PILLS FILTER ---
  private setupCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.getAttribute('data-category') || 'all';
        this.selectedCategory = cat;

        pills.forEach(p => {
          if (p.getAttribute('data-brand') === this.currentBrand) {
            if (p === pill) {
              p.classList.add(this.currentBrand === 'quickyit' ? 'bg-emerald-600' : 'bg-amber-500', 'text-white', 'active-pill');
              p.classList.remove('bg-white', 'text-slate-700');
            } else {
              p.classList.remove('bg-emerald-600', 'bg-amber-500', 'text-white', 'active-pill');
              p.classList.add('bg-white', 'text-slate-700');
            }
          }
        });

        this.renderCards();
      });
    });

    // Horizontal Scroll Arrows
    const scrollContainer = document.getElementById('category-strip-container');
    document.getElementById('cat-scroll-left')?.addEventListener('click', () => {
      scrollContainer?.scrollBy({ left: -200, behavior: 'smooth' });
    });
    document.getElementById('cat-scroll-right')?.addEventListener('click', () => {
      scrollContainer?.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }

  // --- TYPEWRITER & LIVE SEARCH ---
  private setupSearch() {
    const input = document.getElementById('service-search-input') as HTMLInputElement;
    const clearBtn = document.getElementById('clear-search-btn');

    this.startTypewriter();

    input?.addEventListener('input', (e) => {
      const val = (e.target as HTMLInputElement).value.trim();
      this.searchQuery = val.toLowerCase();
      if (val.length > 0) {
        clearBtn?.classList.remove('hidden');
        clearInterval(this.typewriterInterval);
      } else {
        clearBtn?.classList.add('hidden');
        this.startTypewriter();
      }
      this.renderCards();
    });

    clearBtn?.addEventListener('click', () => {
      if (input) input.value = '';
      this.searchQuery = '';
      clearBtn?.classList.add('hidden');
      this.startTypewriter();
      this.renderCards();
    });
  }

  private startTypewriter() {
    clearInterval(this.typewriterInterval);
    const input = document.getElementById('service-search-input') as HTMLInputElement;
    if (!input || this.searchQuery) return;

    const terms = this.currentBrand === 'quickyit' ? this.quickySearchTerms : this.tanzzzxSearchTerms;
    let termIndex = 0;

    const cyclePlaceholder = () => {
      if (this.searchQuery) return;
      const term = terms[termIndex % terms.length];
      input.setAttribute('placeholder', `Search for '${term}'...`);
      termIndex++;
    };

    cyclePlaceholder();
    this.typewriterInterval = setInterval(cyclePlaceholder, 2800);
  }

  // --- SERVICE CARD INTERACTIONS ---
  private setupCardInteractions() {
    // Accordion Toggle for Deliverables
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.details-toggle') as HTMLElement;
      if (target) {
        const targetId = target.getAttribute('data-target');
        if (targetId) {
          const content = document.getElementById(targetId);
          const chevron = target.querySelector('.chevron-icon');
          if (content) {
            content.classList.toggle('hidden');
            chevron?.classList.toggle('rotate-180');
          }
        }
      }
    });
  }

  // --- CART SYSTEM (Blinkit / Licious Style) ---
  private setupCartSystem() {
    document.addEventListener('click', (e) => {
      const bookBtn = (e.target as HTMLElement).closest('.book-service-btn') as HTMLElement;
      if (bookBtn) {
        const serviceId = bookBtn.getAttribute('data-id');
        if (serviceId) {
          this.addToCart(serviceId);
        }
      }

      const minusBtn = (e.target as HTMLElement).closest('.qty-btn-minus') as HTMLElement;
      if (minusBtn) {
        const serviceId = minusBtn.getAttribute('data-id');
        if (serviceId) {
          this.decrementQuantity(serviceId);
        }
      }

      const plusBtn = (e.target as HTMLElement).closest('.qty-btn-plus') as HTMLElement;
      if (plusBtn) {
        const serviceId = plusBtn.getAttribute('data-id');
        if (serviceId) {
          this.incrementQuantity(serviceId);
        }
      }
    });

    // Addon Checkbox changes
    document.querySelectorAll('.addon-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        this.updateCartUI();
      });
    });

    // Browse services button in empty cart
    document.getElementById('cart-browse-services-btn')?.addEventListener('click', () => {
      this.closeCartDrawer();
    });
  }

  private addToCart(serviceId: string) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service) return;

    if (this.cart.has(serviceId)) {
      const item = this.cart.get(serviceId)!;
      item.quantity += 1;
    } else {
      this.cart.set(serviceId, {
        id: serviceId,
        service,
        quantity: 1
      });
    }

    this.showToast(`Added ${service.title} to cart! ⚡`);
    this.updateCartUI();
    this.syncCardButtons(serviceId);
  }

  private incrementQuantity(serviceId: string) {
    if (this.cart.has(serviceId)) {
      const item = this.cart.get(serviceId)!;
      item.quantity += 1;
      this.updateCartUI();
      this.syncCardButtons(serviceId);
    }
  }

  private decrementQuantity(serviceId: string) {
    if (this.cart.has(serviceId)) {
      const item = this.cart.get(serviceId)!;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.cart.delete(serviceId);
      }
      this.updateCartUI();
      this.syncCardButtons(serviceId);
    }
  }

  private syncCardButtons(serviceId: string) {
    const slots = document.querySelectorAll(`.service-action-slot[data-id="${serviceId}"]`);
    const cartItem = this.cart.get(serviceId);

    slots.forEach(slot => {
      const bookBtn = slot.querySelector('.book-service-btn');
      const counter = slot.querySelector('.service-counter');
      const qtyDisplay = slot.querySelector('.qty-display');

      if (cartItem && cartItem.quantity > 0) {
        bookBtn?.classList.add('hidden');
        counter?.classList.remove('hidden');
        counter?.classList.add('flex');
        if (qtyDisplay) qtyDisplay.textContent = String(cartItem.quantity);
      } else {
        bookBtn?.classList.remove('hidden');
        counter?.classList.add('hidden');
        counter?.classList.remove('flex');
      }
    });
  }

  private updateCartUI() {
    const floatingBar = document.getElementById('floating-cart-bar');
    const barBadge = document.getElementById('cart-bar-badge');
    const barCount = document.getElementById('cart-bar-count');
    const barTotal = document.getElementById('cart-bar-total');

    let totalItems = 0;
    let basePrice = 0;

    this.cart.forEach(item => {
      totalItems += item.quantity;
      basePrice += item.service.price * item.quantity;
    });

    let addonsPrice = 0;
    document.querySelectorAll('.addon-checkbox:checked').forEach((cb: any) => {
      addonsPrice += Number(cb.getAttribute('data-price') || 0);
    });

    const grandTotal = basePrice + addonsPrice;

    // Update Floating Bar
    if (totalItems > 0) {
      floatingBar?.classList.remove('translate-y-32', 'pointer-events-none');
      floatingBar?.classList.add('translate-y-0');
      if (barBadge) barBadge.textContent = String(totalItems);
      if (barCount) barCount.textContent = `${totalItems} SERVICE${totalItems > 1 ? 'S' : ''}`;
      if (barTotal) barTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
    } else {
      floatingBar?.classList.remove('translate-y-0');
      floatingBar?.classList.add('translate-y-32', 'pointer-events-none');
    }

    // Update Cart Drawer Details
    const emptyState = document.getElementById('cart-empty-state');
    const itemsContainer = document.getElementById('cart-items-container');
    const addonsSection = document.getElementById('cart-addons-section');
    const pricingNotice = document.getElementById('cart-pricing-notice');
    const bookingForm = document.getElementById('cart-booking-form');
    const drawerFooter = document.getElementById('cart-drawer-footer');
    const baseTotalEl = document.getElementById('drawer-base-total');
    const addonsTotalEl = document.getElementById('drawer-addons-total');
    const grandTotalEl = document.getElementById('drawer-grand-total');

    if (totalItems === 0) {
      emptyState?.classList.remove('hidden');
      if (itemsContainer) itemsContainer.innerHTML = '';
      addonsSection?.classList.add('hidden');
      pricingNotice?.classList.add('hidden');
      bookingForm?.classList.add('hidden');
      drawerFooter?.classList.add('hidden');
    } else {
      emptyState?.classList.add('hidden');
      addonsSection?.classList.remove('hidden');
      pricingNotice?.classList.remove('hidden');
      bookingForm?.classList.remove('hidden');
      drawerFooter?.classList.remove('hidden');

      if (baseTotalEl) baseTotalEl.textContent = `₹${basePrice.toLocaleString('en-IN')}`;
      if (addonsTotalEl) addonsTotalEl.textContent = `₹${addonsPrice.toLocaleString('en-IN')}`;
      if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

      if (itemsContainer) {
        itemsContainer.innerHTML = Array.from(this.cart.values()).map(item => `
          <div class="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
            <img src="${item.service.image}" alt="${item.service.title}" class="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200" />
            <div class="flex-1 min-w-0">
              <h5 class="text-xs font-bold text-slate-900 truncate">${item.service.title}</h5>
              <div class="text-[11px] text-emerald-700 font-extrabold mt-0.5">
                ₹${item.service.price.toLocaleString('en-IN')} <span class="text-[10px] text-slate-400 font-normal">/ unit</span>
              </div>
              <div class="text-[10px] text-slate-400">${item.service.turnaround}</div>
            </div>
            <div class="flex items-center bg-white border border-slate-200 rounded-xl p-0.5 shadow-2xs">
              <button class="qty-btn-minus w-6 h-6 flex items-center justify-center text-slate-600 hover:text-rose-600 font-bold" data-id="${item.id}">-</button>
              <span class="w-5 text-center text-xs font-black text-slate-900">${item.quantity}</span>
              <button class="qty-btn-plus w-6 h-6 flex items-center justify-center text-slate-600 hover:text-emerald-600 font-bold" data-id="${item.id}">+</button>
            </div>
          </div>
        `).join('');
      }
    }

    SERVICES_DATA.forEach(s => this.syncCardButtons(s.id));
  }

  // --- WHATSAPP SUBMISSION LOGIC ---
  private setupWhatsAppForms() {
    const adminPhone = "919876543210";

    const cartSubmitBtn = document.getElementById('cart-whatsapp-submit-btn');
    cartSubmitBtn?.addEventListener('click', () => {
      const nameInput = document.getElementById('cart-input-name') as HTMLInputElement;
      const phoneInput = document.getElementById('cart-input-phone') as HTMLInputElement;
      const cityInput = document.getElementById('cart-input-city') as HTMLInputElement;
      const slotInput = document.getElementById('cart-input-slot') as HTMLSelectElement;
      const notesInput = document.getElementById('cart-input-notes') as HTMLTextAreaElement;

      const clientName = nameInput?.value.trim();
      const clientPhone = phoneInput?.value.trim();

      if (!clientName) {
        alert("Please enter your name to proceed with WhatsApp booking.");
        nameInput?.focus();
        return;
      }
      if (!clientPhone || clientPhone.length < 10) {
        alert("Please enter a valid 10-digit WhatsApp phone number.");
        phoneInput?.focus();
        return;
      }

      const clientCity = cityInput?.value.trim() || this.activeCity;
      const clientSlot = slotInput?.value || "Afternoon (2:00 PM - 5:00 PM)";
      const clientNotes = notesInput?.value.trim() || "No additional notes provided.";

      const bookedServicesList: string[] = [];
      let totalEst = 0;
      this.cart.forEach(item => {
        const itemTotal = item.service.price * item.quantity;
        totalEst += itemTotal;
        bookedServicesList.push(`• ${item.service.title} (Qty: ${item.quantity}) — Starting ₹${itemTotal.toLocaleString('en-IN')}`);
      });

      const addonsList: string[] = [];
      document.querySelectorAll('.addon-checkbox:checked').forEach((cb: any) => {
        const p = Number(cb.getAttribute('data-price') || 0);
        const n = cb.getAttribute('data-name') || '';
        totalEst += p;
        addonsList.push(`• ${n} (+₹${p.toLocaleString('en-IN')})`);
      });

      const message = `👋 *NEW SERVICE BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━━━
🏢 *Brand:* ${this.currentBrand === 'quickyit' ? '⚡ QuickyIT (Digital Services)' : '🏢 TANZZZX STUDIO (Real Estate 3D)'}
📍 *City:* ${clientCity}

👤 *Client Information:*
• *Name:* ${clientName}
• *WhatsApp Phone:* +91 ${clientPhone}
• *Preferred Call Slot:* ${clientSlot}

📋 *Booked Services (Starting Estimate):*
${bookedServicesList.join('\n')}

${addonsList.length > 0 ? `✨ *Selected Add-Ons:*\n${addonsList.join('\n')}\n` : ''}
💰 *Total Starting Estimate:* ₹${totalEst.toLocaleString('en-IN')}
*(Note: Final project scope & customized deliverables to be locked on our call)*

📝 *Project Brief / Notes:*
${clientNotes}

━━━━━━━━━━━━━━━━━━━━
🔗 *Sent via QuickyIT Web App — A ReachX Group Unit*
Please confirm my booking and connect with me.`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${adminPhone}?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
      this.showToast("Opening WhatsApp with booking details! 🚀");
    });

    // Free Consultancy Form
    const consForm = document.getElementById('consultancy-form');
    consForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const service = (document.getElementById('cons-service') as HTMLSelectElement)?.value;
      const name = (document.getElementById('cons-name') as HTMLInputElement)?.value.trim();
      const phone = (document.getElementById('cons-phone') as HTMLInputElement)?.value.trim();
      const city = (document.getElementById('cons-city') as HTMLInputElement)?.value.trim() || this.activeCity;
      const slot = (document.getElementById('cons-slot') as HTMLSelectElement)?.value;
      const notes = (document.getElementById('cons-notes') as HTMLTextAreaElement)?.value.trim() || "Strategy discussion";

      if (!name || !phone) {
        alert("Please provide your Name and WhatsApp phone number.");
        return;
      }

      const message = `👋 *FREE CONSULTANCY STRATEGY CALL REQUEST*
━━━━━━━━━━━━━━━━━━━━
🏢 *Unit:* ${this.currentBrand === 'quickyit' ? '⚡ QuickyIT' : '🏢 TANZZZX STUDIO'} (ReachX Group)
🎯 *Service of Interest:* ${service}
📍 *City:* ${city}

👤 *Client Details:*
• *Name:* ${name}
• *WhatsApp:* +91 ${phone}
• *Preferred Time Slot:* ${slot}

📝 *Goal / Project Notes:*
${notes}

━━━━━━━━━━━━━━━━━━━━
Please confirm our free strategy call slot. Thank you!`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${adminPhone}?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
      this.closeModal('consultancy');
      this.showToast("Opening WhatsApp consultation request! 💬");
    });
  }

  // --- CARD FILTERING ---
  private renderCards() {
    const cards = document.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
    let visibleCount = 0;

    cards.forEach(card => {
      const brand = card.getAttribute('data-brand');
      const category = card.getAttribute('data-category');
      const title = card.getAttribute('data-title') || '';

      let matchBrand = brand === this.currentBrand;

      let matchCat = true;
      if (this.selectedCategory !== 'all' && this.selectedCategory !== 'tanzzzx_all') {
        matchCat = category === this.selectedCategory;
      }

      let matchSearch = true;
      if (this.searchQuery) {
        matchSearch = title.includes(this.searchQuery) || (category?.includes(this.searchQuery) ?? false);
      }

      let matchSpeed = true;
      if (this.speedFilter === 'sprint48h') {
        const text = card.textContent || '';
        matchSpeed = text.includes('48H') || text.includes('48 Hours');
      }

      if (matchBrand && matchCat && matchSearch && matchSpeed) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const emptyContainer = document.getElementById('no-services-found');
    if (emptyContainer) {
      if (visibleCount === 0) {
        emptyContainer.classList.remove('hidden');
      } else {
        emptyContainer.classList.add('hidden');
      }
    }
  }

  // --- FILTERS MODAL ---
  private setupFilters() {
    document.querySelectorAll('.filter-sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-sort-btn').forEach(b => {
          b.classList.remove('border-emerald-500', 'bg-emerald-50', 'text-emerald-800', 'font-bold');
          b.classList.add('border-slate-200', 'bg-white', 'text-slate-700', 'font-medium');
        });
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-800', 'font-bold');
        btn.classList.remove('border-slate-200', 'bg-white', 'text-slate-700', 'font-medium');
        this.activeFilter = btn.getAttribute('data-sort') || 'popular';
      });
    });

    document.getElementById('apply-filters-btn')?.addEventListener('click', () => {
      const speedRadio = document.querySelector('input[name="speed_filter"]:checked') as HTMLInputElement;
      this.speedFilter = speedRadio?.value || 'all';

      const badge = document.getElementById('active-filter-badge');
      if (this.speedFilter !== 'all' || this.activeFilter !== 'popular') {
        badge?.classList.remove('hidden');
      } else {
        badge?.classList.add('hidden');
      }

      this.closeModal('filters');
      this.sortAndRenderCards();
    });

    document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
      this.speedFilter = 'all';
      this.activeFilter = 'popular';
      const speedRadioAll = document.querySelector('input[name="speed_filter"][value="all"]') as HTMLInputElement;
      if (speedRadioAll) speedRadioAll.checked = true;
      document.getElementById('active-filter-badge')?.classList.add('hidden');
      this.closeModal('filters');
      this.renderCards();
    });
  }

  private sortAndRenderCards() {
    const grid = document.getElementById('services-grid-container');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.service-card')) as HTMLElement[];
    cards.sort((a, b) => {
      const priceA = Number(a.getAttribute('data-price') || 0);
      const priceB = Number(b.getAttribute('data-price') || 0);
      const popA = a.getAttribute('data-popular') === 'true' ? 1 : 0;
      const popB = b.getAttribute('data-popular') === 'true' ? 1 : 0;

      if (this.activeFilter === 'price_low') return priceA - priceB;
      if (this.activeFilter === 'price_high') return priceB - priceA;
      if (this.activeFilter === 'popular') return popB - popA;
      return 0;
    });

    cards.forEach(c => grid.appendChild(c));
    this.renderCards();
  }

  // --- OFFERS CAROUSEL ---
  private setupOffersCarousel() {
    const track = document.getElementById('offers-carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = 4;

    const showSlide = (idx: number) => {
      this.currentSlideIndex = (idx + totalSlides) % totalSlides;
      if (track) {
        track.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
      }
      dots.forEach((dot, i) => {
        if (i === this.currentSlideIndex) {
          dot.classList.add('w-5', 'bg-white');
          dot.classList.remove('bg-white/40');
        } else {
          dot.classList.remove('w-5', 'bg-white');
          dot.classList.add('bg-white/40');
        }
      });
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => showSlide(idx));
    });

    this.slideInterval = setInterval(() => {
      showSlide(this.currentSlideIndex + 1);
    }, 4500);

    document.querySelectorAll('.banner-cta-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const brand = btn.getAttribute('data-brand') as 'quickyit' | 'tanzzzx';
        if (brand && brand !== this.currentBrand) {
          const tab = document.getElementById(brand === 'quickyit' ? 'tab-quickyit' : 'tab-tanzzzx');
          tab?.click();
        }
        document.getElementById('open-consultancy-modal')?.click();
      });
    });
  }

  private updateCarouselSlide(idx: number) {
    const track = document.getElementById('offers-carousel-track');
    if (track) track.style.transform = `translateX(-${idx * 100}%)`;
  }

  // --- CITY SELECTOR ---
  private setupCitySelector() {
    const searchInput = document.getElementById('city-search-input') as HTMLInputElement;
    const cityButtons = document.querySelectorAll('.city-option-btn');

    searchInput?.addEventListener('input', (e) => {
      const q = (e.target as HTMLInputElement).value.toLowerCase();
      cityButtons.forEach((btn: any) => {
        const cityName = (btn.getAttribute('data-city-name') || '').toLowerCase();
        btn.style.display = cityName.includes(q) ? 'flex' : 'none';
      });
    });

    cityButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-city-name') || 'Kolkata';
        this.activeCity = name;
        try {
          localStorage.setItem('quicky_city', name);
        } catch (e) {}

        const cityEl = document.getElementById('active-city-display');
        if (cityEl) cityEl.textContent = name;

        const cartCityInput = document.getElementById('cart-input-city') as HTMLInputElement;
        if (cartCityInput) cartCityInput.value = name;

        const consCityInput = document.getElementById('cons-city') as HTMLInputElement;
        if (consCityInput) consCityInput.value = name;

        this.closeModal('city');
        this.showToast(`Active location set to ${name} 📍`);
      });
    });
  }

  // --- PHONE VIEW TOGGLE ---
  private setupViewModeToggle() {
    const toggleBtn = document.getElementById('toggle-view-mode');
    const container = document.getElementById('app-viewport-container');
    const icon = document.getElementById('view-mode-icon');
    const text = document.getElementById('view-mode-text');

    toggleBtn?.addEventListener('click', () => {
      this.isPhoneView = !this.isPhoneView;
      if (this.isPhoneView) {
        container?.classList.add('phone-frame-active');
        if (icon) icon.textContent = '🖥️';
        if (text) text.textContent = 'Expanded View';
        this.showToast('Switched to Phone Mockup View 📱');
      } else {
        container?.classList.remove('phone-frame-active');
        if (icon) icon.textContent = '📱';
        if (text) text.textContent = 'Phone View';
        this.showToast('Switched to Wide Responsive View 🖥️');
      }
    });
  }

  // --- MODALS & DRAWERS ---
  private setupModals() {
    document.getElementById('open-city-modal')?.addEventListener('click', () => this.openModal('city'));
    document.getElementById('close-city-modal-btn')?.addEventListener('click', () => this.closeModal('city'));
    document.getElementById('city-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeModal('city');
    });

    document.getElementById('open-consultancy-modal')?.addEventListener('click', () => this.openModal('consultancy'));
    document.getElementById('close-consultancy-modal-btn')?.addEventListener('click', () => this.closeModal('consultancy'));
    document.getElementById('consultancy-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeModal('consultancy');
    });

    document.getElementById('open-call-modal')?.addEventListener('click', () => this.openModal('call'));
    document.getElementById('close-call-modal-btn')?.addEventListener('click', () => this.closeModal('call'));
    document.getElementById('call-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeModal('call');
    });

    document.getElementById('open-filters-modal')?.addEventListener('click', () => this.openModal('filters'));
    document.getElementById('close-filters-modal-btn')?.addEventListener('click', () => this.closeModal('filters'));
    document.getElementById('filters-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeModal('filters');
    });

    document.getElementById('open-profile-modal')?.addEventListener('click', () => this.openDrawer('profile'));
    document.getElementById('close-profile-drawer-btn')?.addEventListener('click', () => this.closeDrawer('profile'));
    document.getElementById('profile-drawer-backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeDrawer('profile');
    });
    document.getElementById('profile-open-consultancy-btn')?.addEventListener('click', () => {
      this.closeDrawer('profile');
      this.openModal('consultancy');
    });

    document.getElementById('open-cart-drawer-btn')?.addEventListener('click', () => this.openDrawer('cart'));
    document.getElementById('close-cart-drawer-btn')?.addEventListener('click', () => this.closeDrawer('cart'));
    document.getElementById('cart-drawer-backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this.closeDrawer('cart');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal('city');
        this.closeModal('consultancy');
        this.closeModal('call');
        this.closeModal('filters');
        this.closeDrawer('profile');
        this.closeDrawer('cart');
      }
    });
  }

  private openModal(name: string) {
    const backdrop = document.getElementById(`${name}-modal-backdrop`);
    const card = document.getElementById(`${name}-modal-card`);
    if (backdrop && card) {
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100');
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
    }
  }

  private closeModal(name: string) {
    const backdrop = document.getElementById(`${name}-modal-backdrop`);
    const card = document.getElementById(`${name}-modal-card`);
    if (backdrop && card) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-100');
      card.classList.add('scale-95');
    }
  }

  private openDrawer(name: string) {
    const backdrop = document.getElementById(`${name}-drawer-backdrop`);
    const panel = document.getElementById(`${name}-drawer-panel`);
    if (backdrop && panel) {
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    }
  }

  private closeDrawer(name: string) {
    const backdrop = document.getElementById(`${name}-drawer-backdrop`);
    const panel = document.getElementById(`${name}-drawer-panel`);
    if (backdrop && panel) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
    }
  }

  private closeCartDrawer() {
    this.closeDrawer('cart');
  }

  private showToast(msg: string) {
    const existing = document.getElementById('quicky-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'quicky-toast';
    toast.className = 'fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/95 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700 text-xs font-bold flex items-center gap-2 backdrop-blur-md transition-all duration-300 pointer-events-none';
    toast.innerHTML = `<span>⚡</span><span>${msg}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('opacity-0', '-translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new QuickyApp();
  });
}
