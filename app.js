/**
 * JusTICe: JusTech & Innovation Centre
 * Strategic Framework and Vision Website
 * Matching theme of Jigme Singye Wangchuck School of Law (www.jswlaw.bt)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MOBILE MENU TOGGLE
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#ffffff';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        navMenu.style.zIndex = '999';
      }
    });

    // Close menu when clicking nav links on mobile
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // ==========================================================================
  // 2. ACTIVE NAV LINK ON SCROLL
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 3. TOPIC 1: INTERACTIVE 4 GAPS NEXUS
  // ==========================================================================
  const gapData = {
    knowledge: {
      title: "Knowledge Gap • Academic & Legal Implication Research",
      desc: "Prior to JusTICe, Bhutan lacked an institutional anchor studying the intersection of emerging AI, multi-agent workflows, data privacy, and judicial independence. JusTICe provides horizon scanning, academic scholarship, and GNH-aligned policy inputs.",
      badge: "Mandate I Core Focus"
    },
    governance: {
      title: "Governance Gap • GNH-Aligned Policy Harmonization",
      desc: "Legal frameworks and public policy struggled to keep pace with rapid technical capabilities. JusTICe establishes a national bridge uniting constitutional jurisprudence with engineering standards, producing the GNH Algorithmic Impact Assessment Tool.",
      badge: "National Reference Standard"
    },
    innovation: {
      title: "Innovation Gap • Dedicated Sandbox & Prototyping",
      desc: "Innovative LegalTech concepts lacked a safe, controlled testbed with real case anonymization. JusTICe operationalizes the physical Justice Innovation Lab, providing high-performance computing (HPC) and security vetting for prototypes.",
      badge: "Innovation Lab Facility"
    },
    hub: {
      title: "Hub Gap • 17-Agency Multi-Sectoral Ecosystem",
      desc: "Silos isolated investigative bodies, prosecutors, courts, technologists, academia, and rural citizens. JusTICe serves as the collaborative national nexus uniting 17+ partner entities under a shared 2035 digital justice transformation mandate.",
      badge: "Multi-Sectoral Network"
    }
  };

  const nexusCards = document.querySelectorAll('.nexus-card');
  const nexusTitle = document.getElementById('nexusTitle');
  const nexusDesc = document.getElementById('nexusDesc');
  const nexusRemedy = document.getElementById('nexusRemedy');

  nexusCards.forEach(card => {
    card.addEventListener('click', () => {
      nexusCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const gapKey = card.getAttribute('data-gap');
      if (gapData[gapKey]) {
        nexusTitle.textContent = gapData[gapKey].title;
        nexusDesc.textContent = gapData[gapKey].desc;
        nexusRemedy.textContent = gapData[gapKey].badge;
      }
    });
  });

  // ==========================================================================
  // 4. TOPIC 3: THE 7-STAGE INNOVATION FLYWHEEL
  // ==========================================================================
  const flywheelData = {
    1: {
      title: "Stage 1: Engage • Deep Needs Discovery",
      desc: "Understand the concrete lived experiences, pain points, and administrative hurdles of citizens, litigants, judges, and clerks through nationwide community surveys, clinic intake data, and multi-agency consultations.",
      tags: ["<i class='fa-solid fa-users'></i> Citizen Surveys", "<i class='fa-solid fa-gavel'></i> Judicial Feedback", "<i class='fa-solid fa-mountain'></i> Rural Gewog Outreach"],
      output: "Empirical Access-to-Justice Needs Assessment"
    },
    2: {
      title: "Stage 2: Think • Horizon Scanning & Legal Risks",
      desc: "Examine emerging technologies, agentic AI risks, data sovereignty, and human rights impacts. Ground inquiry in Gross National Happiness and constitutional balance before lines of code are written.",
      tags: ["<i class='fa-solid fa-radar'></i> AI Observatory", "<i class='fa-solid fa-scale-balanced'></i> Constitutional Review", "<i class='fa-solid fa-shield-halved'></i> Algorithmic Ethics"],
      output: "GNH Algorithmic Impact Assessment Guidelines"
    },
    3: {
      title: "Stage 3: Design • Interdisciplinary Co-Creation",
      desc: "Mould legal, technical, institutional, and user perspectives together. Lawyers from JSW clinics collaborate with software engineers from CST/GCIT and UX designers to architect intuitive, bilingual legal tools.",
      tags: ["<i class='fa-solid fa-pen-ruler'></i> Human-Centred UX", "<i class='fa-solid fa-language'></i> Dzongkha/English Architecture", "<i class='fa-solid fa-universal-access'></i> WCAG Accessibility"],
      output: "Technical Blueprint & Interface Wireframes"
    },
    4: {
      title: "Stage 4: Build • Prototyping & Standards",
      desc: "Develop working prototypes, open standards, AI models, and secure data pipelines within the Justice Innovation Lab facility, leveraging GovTech cloud infrastructure and sovereign Bhutan NDI biometrics.",
      tags: ["<i class='fa-solid fa-code'></i> Multi-Agent RAG", "<i class='fa-solid fa-id-card'></i> Bhutan NDI Integration", "<i class='fa-solid fa-database'></i> Consolidated Legal DB"],
      output: "Functional Vetted Alpha Prototype"
    },
    5: {
      title: "Stage 5: Test • Controlled Sandboxing & Trials",
      desc: "Experiment in controlled, safe judicial environments under strict data privacy protocols. Pilot with real legal aid clients and ADR sessions to measure disposition time reduction and user trust.",
      tags: ["<i class='fa-solid fa-vial-circle-check'></i> Judicial Sandbox", "<i class='fa-solid fa-lock'></i> Anonymized Case Data", "<i class='fa-solid fa-chart-line'></i> KPI Measurement"],
      output: "Empirical Trial Validation Report"
    },
    6: {
      title: "Stage 6: Scale • Sector-Wide Deployment",
      desc: "Support validated prototypes transitioning into nationwide institutional practice across the Supreme Court, Royal Bhutan Police, Legal Aid Centre, and rural Gewog connectivity hubs.",
      tags: ["<i class='fa-solid fa-network-wired'></i> Nationwide Deployment", "<i class='fa-solid fa-chalkboard-user'></i> Judicial Training", "<i class='fa-solid fa-building-columns'></i> Statutory Integration"],
      output: "Institutionalized National Legal Platform"
    },
    7: {
      title: "Stage 7: Iterate • Feedback Loops & Refinement",
      desc: "Capture continuous feedback, judicial performance metrics, and community satisfaction to refine tools, update legal tech curricula, and kick off the next innovation cycle.",
      tags: ["<i class='fa-solid fa-rotate'></i> Continuous Auditing", "<i class='fa-solid fa-book'></i> Standards Library Update", "<i class='fa-solid fa-heart'></i> GNH Wellbeing Indexing"],
      output: "Annual State of Digital Justice Revision"
    }
  };

  const flywheelSteps = document.querySelectorAll('.flywheel-step');
  const flywheelStepTitle = document.getElementById('flywheelStepTitle');
  const flywheelStepDesc = document.getElementById('flywheelStepDesc');
  const flywheelStepTags = document.getElementById('flywheelStepTags');
  const flywheelStepOutput = document.getElementById('flywheelStepOutput');

  flywheelSteps.forEach(step => {
    step.addEventListener('click', () => {
      flywheelSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      const stepNum = step.getAttribute('data-step');
      if (flywheelData[stepNum]) {
        flywheelStepTitle.textContent = flywheelData[stepNum].title;
        flywheelStepDesc.textContent = flywheelData[stepNum].desc;
        flywheelStepOutput.textContent = flywheelData[stepNum].output;
        flywheelStepTags.innerHTML = flywheelData[stepNum].tags
          .map(tag => `<span class='detail-tag'>${tag}</span>`)
          .join('');
      }
    });
  });

  // ==========================================================================
  // 5. TOPIC 4: THE 4 FLAGSHIP GOALS TAB SWITCHER
  // ==========================================================================
  const goalTabs = document.querySelectorAll('.goal-tab-btn');
  const goalPanels = document.querySelectorAll('.goal-panel');

  goalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      goalTabs.forEach(t => t.classList.remove('active'));
      goalPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const goalKey = tab.getAttribute('data-goal');
      const targetPanel = document.getElementById(`panel-${goalKey}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 6. TOPIC 5: PARTNER ECOSYSTEM FILTER
  // ==========================================================================
  const partnerFilterBtns = document.querySelectorAll('.partner-filter-btn');
  const partnerCards = document.querySelectorAll('#partnersGrid .partner-card');

  partnerFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      partnerFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-partner-cat');
      partnerCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 7. STAKEHOLDER LENS SELECTOR
  // ==========================================================================
  const lensPills = document.querySelectorAll('.lens-pill');

  lensPills.forEach(pill => {
    pill.addEventListener('click', () => {
      lensPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');

      // Highlight relevant cards across sections based on selected lens
      document.querySelectorAll('.blueprint-card, .workshop-card, .timeline-card, .partner-card').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.border = '1px solid var(--c-border)';
      });

      if (filter === 'judiciary') {
        highlightCards(['Court', 'Judicial', 'ODR', 'Precedents', 'Legal DB', 'BADRC']);
      } else if (filter === 'govtech') {
        highlightCards(['GovTech', 'Cloud', 'Bhutan NDI', 'NLP', 'Database', 'Infrastructure', 'HPC']);
      } else if (filter === 'academia') {
        highlightCards(['JSW Law', 'Curriculum', 'Students', 'CST', 'GCIT', 'Research', 'Seoul', 'Consortium']);
      } else if (filter === 'citizens') {
        highlightCards(['Gewog', 'Rural', 'Access', 'Bilingual', 'Disability', 'Literacy', 'Dignity']);
      } else if (filter === 'regulators') {
        highlightCards(['Gelephu', 'GMC', 'Policy', 'GNH', 'Assessment', 'Standard', 'OAG', 'ACC', 'BICMA']);
      }
    });
  });

  function highlightCards(keywords) {
    document.querySelectorAll('.blueprint-card, .partner-card').forEach(el => {
      const text = el.textContent.toLowerCase();
      const matches = keywords.some(kw => text.includes(kw.toLowerCase()));
      if (matches) {
        el.style.border = '2px solid var(--c-gold)';
        el.style.boxShadow = '0 6px 16px rgba(230, 179, 57, 0.25)';
        el.style.opacity = '1';
      } else {
        el.style.opacity = '0.5';
      }
    });
  }

  // ==========================================================================
  // 8. TOPIC 6: THREE-YEAR ROADMAP PHASE SWITCHER
  // ==========================================================================
  const phaseBtns = document.querySelectorAll('.phase-card-btn');
  const phasePanels = document.querySelectorAll('.phase-panel');

  phaseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      phaseBtns.forEach(b => b.classList.remove('active'));
      phasePanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const phaseNum = btn.getAttribute('data-phase');
      const targetPanel = document.getElementById(`phase-panel-${phaseNum}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 9. FULLSCREEN PRESENTATION MODE (SLIDESHOW DECK)
  // ==========================================================================
  const presModal = document.getElementById('presentationModal');
  const openPresBtn = document.getElementById('openPresentationBtn');
  const openPresTopBtn = document.getElementById('openPresentationTopBtn');
  const footerPresentBtn = document.getElementById('footerPresentBtn');
  const closePresBtn = document.getElementById('closePresentationBtn');
  const presSlides = document.querySelectorAll('.pres-slide');
  const presPrevBtn = document.getElementById('presPrevBtn');
  const presNextBtn = document.getElementById('presNextBtn');
  const presIndicators = document.querySelectorAll('.pres-dot');
  const presSlideCounter = document.getElementById('presSlideCounter');

  let currentSlide = 1;
  const totalSlides = presSlides.length;

  function showSlide(index) {
    if (index < 1) index = 1;
    if (index > totalSlides) index = totalSlides;
    currentSlide = index;

    presSlides.forEach(slide => {
      slide.classList.remove('active');
      if (parseInt(slide.getAttribute('data-slide')) === currentSlide) {
        slide.classList.add('active');
      }
    });

    presIndicators.forEach(dot => {
      dot.classList.remove('active');
      if (parseInt(dot.getAttribute('data-slide-target')) === currentSlide) {
        dot.classList.add('active');
      }
    });

    if (presSlideCounter) {
      presSlideCounter.textContent = `Slide ${currentSlide} of ${totalSlides}`;
    }
  }

  function openPresentation() {
    if (presModal) {
      presModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      showSlide(1);
    }
  }

  function closePresentation() {
    if (presModal) {
      presModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (openPresBtn) openPresBtn.addEventListener('click', openPresentation);
  if (openPresTopBtn) openPresTopBtn.addEventListener('click', openPresentation);
  if (footerPresentBtn) footerPresentBtn.addEventListener('click', openPresentation);
  if (closePresBtn) closePresBtn.addEventListener('click', closePresentation);

  if (presNextBtn) {
    presNextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
      }
    });
  }

  if (presPrevBtn) {
    presPrevBtn.addEventListener('click', () => {
      if (currentSlide > 1) {
        showSlide(currentSlide - 1);
      }
    });
  }

  presIndicators.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-slide-target'));
      showSlide(target);
    });
  });

  // Keyboard navigation for presentation mode
  document.addEventListener('keydown', (e) => {
    if (!presModal || !presModal.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      if (currentSlide < totalSlides) showSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
      if (currentSlide > 1) showSlide(currentSlide - 1);
    } else if (e.key === 'Escape') {
      closePresentation();
    }
  });

});
