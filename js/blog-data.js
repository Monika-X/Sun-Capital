/* ==========================================================================
   SUNCAPITAL BLOG ARTICLE DATA
   Each article renders a unique detail page via blog-details.html?id=<slug>
   ========================================================================== */
window.BLOG_ARTICLES = {
  '2026-subsidy-master-guide': {
    title: `The Complete 2026 Residential Solar Subsidy & Tax Incentive Master Guide`,
    category: 'cat3',
    tag: 'POLICY',
    date: 'August 24, 2026',
    readTime: '8 Min Read',
    author: 'Dr. Sophia Chen',
    authorRole: 'VP of Photovoltaic R&D at SunCapital',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    authorBio: `Dr. Chen holds a Ph.D. in Material Sciences from Stanford University and has authored 14 published papers on solar cell efficiency and grid net metering economics.`,
    img: 'https://i.pinimg.com/736x/b3/81/ac/b381acb3766fa49dd679399c655258b5.jpg',
    excerpt: `Everything luxury estate owners need to know about claiming the 30% Federal ITC credit, state net metering tariffs, and local utility property tax exemptions.`,
    body: {
      lead: `The 2026 clean energy legislative landscape presents unprecedented opportunities for luxury homeowners. Under the extended Investment Tax Credit (ITC) framework, residential property owners who install solar photovoltaic equipment and battery microgrids can write off 30% of total system hardware and labor expenses directly against their income tax returns.`,
      sections: [
        { h: `1. Executive Overview of 2026 Tax Rebates`, p: `Federal and state programs now stack to make owned solar the lowest lifetime-cost energy source for premium estates. The key is treating the credit as a dollar-for-dollar reduction of tax owed, not a deduction that merely lowers taxable income.` },
        { h: `2. Claiming the 30% Federal Investment Tax Credit`, p: `To qualify for the full 30% credit, solar equipment must be installed on your primary or secondary residence during tax year 2026. Eligible expenses include photovoltaic panels, inverters, battery storage rated at 3 kWh or higher, and professional CAD roof engineering plus municipal permit fees.` },
        { h: `3. Net Metering 3.0 & Grid Surplus Selling`, p: `Net Metering (NEM 3.0) allows residential microgrids to export excess daytime generation back to the municipal grid. With integrated battery storage, energy is stored mid-day and dispatched during peak 4 PM â€“ 9 PM utility rates to maximize buy-back credits.` }
      ],
      quote: `Tax credits directly reduce your income tax bill dollar-for-dollar, unlike tax deductions which merely lower taxable income.`,
      list: [
        `Photovoltaic solar panels and mounting racking structures.`,
        `Inverters, microinverters, and electrical conduit upgrades.`,
        `Solid-state battery storage systems with capacity â‰¥ 3 kWh.`,
        `Professional CAD roof engineering and municipal permit fees.`
      ]
    },
    takeaways: [
      `30% Federal Investment Tax Credit on hardware + labor`,
      `Net Metering 3.0 buy-back credits for exported surplus`,
      `100% property tax immunity on added solar value`
    ]
  },

  'n-type-topcon-efficiency': {
    title: `Why N-Type TOPCon Cell Efficiency Outperforms Standard Solar`,
    category: 'cat1',
    tag: 'SOLAR TECH',
    date: 'August 18, 2026',
    readTime: '5 Min Read',
    author: 'Dr. Sophia Chen',
    authorRole: 'VP of Photovoltaic R&D at SunCapital',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    authorBio: `Dr. Chen leads SunCapital's cell-efficiency research and has published extensively on passivated contact architectures.`,
    img: 'https://i.pinimg.com/1200x/44/c5/9e/44c59e6a62f0bc33c9f191a404ae2aaa.jpg',
    excerpt: `An engineering breakdown of how bi-facial solar cell chemistry yields 22.8% energy conversion efficiency even in diffuse overcast weather.`,
    body: {
      lead: `N-Type TOPCon (Tunnel Oxide Passivated Contact) cells quietly became the premium standard for luxury rooftops, pushing module conversion past 22.8% while degrading far slower than legacy PERC glass.`,
      sections: [
        { h: `1. The Bi-Facial Efficiency Advantage`, p: `TOPCon's rear-side passivated contact recovers electrons that standard cells waste as heat. Mounted over a light rooftop membrane, the bi-facial gain adds 8â€“15% annual yield with zero extra footprint.` },
        { h: `2. Diffuse Light Harvesting in Overcast Weather`, p: `Because the n-type wafer is inherently leak-resistant, performance holds up in marine-layer and smog conditions where p-type arrays collapse. Estate owners in coastal California see remarkably stable winter output.` }
      ],
      quote: `TOPCon's passivated contacts recover electrons that standard PERC cells simply waste as heat.`,
      list: [
        `22.8% nameplate conversion efficiency`,
        `8â€“15% bi-facial yield bonus`,
        `Slower annual degradation than PERC`
      ]
    },
    takeaways: [
      `Higher yearly kWh per square metre of roof`,
      `Stable output in diffuse coastal light`,
      `Lower levelized cost of energy (LCOE)`
    ]
  },

  'solid-state-smart-automation': {
    title: `Integrating Solid-State Battery Storage with Smart Automation`,
    category: 'cat2',
    tag: 'BATTERY',
    date: 'August 12, 2026',
    readTime: '6 Min Read',
    author: 'Julian Vance',
    authorRole: 'Director of Roof CAD Design',
    authorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600',
    authorBio: `Julian leads SunCapital's architectural CAD engineering team, specializing in luxury estate roof layouts and zero-leak flashing systems.`,
    img: 'https://i.pinimg.com/736x/b0/c3/54/b0c354193056cefa9582e2e4c34a4447.jpg',
    excerpt: `How non-flammable solid-state storage pairs with predictive home automation to deliver 24/7 power autonomy.`,
    body: {
      lead: `Solid-state batteries replace the flammable liquid electrolyte of older packs with a ceramic separator, unlocking denser energy and a dramatically safer footprint inside a lived-in estate.`,
      sections: [
        { h: `1. Sizing Your Storage Stack`, p: `We model a typical luxury residence around 25â€“40 kWh of usable capacity: enough to ride through an overnight outage while still powering the pool heat pump and EV charger the next morning.` },
        { h: `2. Automated Load Shifting`, p: `SunCapital's energy app learns your routine and pre-charges the stack from mid-day surplus, then silently shifts non-essential loads off the grid during 4â€“9 PM peak tariffs.` }
      ],
      quote: `A solid-state stack is the difference between a home that notices an outage and one that never does.`,
      list: [
        `Non-flammable ceramic electrolyte`,
        `24/7 autonomous power continuity`,
        `Peak-rate load shifting via app`
      ]
    },
    takeaways: [
      `Safer chemistry than liquid-electrolyte packs`,
      `Whole-home backup during outages`,
      `Automatic peak-tariff arbitrage`
    ]
  },

  'rooftop-valuation-boost': {
    title: `How Rooftop Solar Arrays Boost Luxury Property Valuations by 4.1%`,
    category: 'cat3',
    tag: 'ESTATE ROI',
    date: 'August 6, 2026',
    readTime: '5 Min Read',
    author: 'Marcus Sterling',
    authorRole: 'Chief Executive Officer',
    authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    authorBio: `Marcus is a former aerospace engineer with 18+ years of solar grid design experience and founded SunCapital in 2018.`,
    img: 'https://i.pinimg.com/1200x/cf/95/a6/cf95a6f09705516e1a2effcb6570d341.jpg',
    excerpt: `Appraisal data shows owned solar adds a measurable premium to executive residences versus leased systems.`,
    body: {
      lead: `Multiple 2026 appraisal studies confirm owned photovoltaic arrays add roughly 4.1% to the resale value of premium homesâ€”outperforming many kitchen remodels on a cost-recovered basis.`,
      sections: [
        { h: `1. Appraisal Methodology`, p: `Certified appraisers now capitalize the projected 25-year energy savings into the as-completed value, provided the system is owned rather than leased.` },
        { h: `2. Buyer Premium Data`, p: `Listings that advertise owned solar with battery backup receive more showings and close faster, especially among eco-conscious executive relocations.` }
      ],
      quote: `Owned solar is the rare renovation that pays you back before you ever sell.`,
      list: [
        `~4.1% measured resale premium`,
        `Only owned (non-lease) systems qualify`,
        `Faster, higher-quality buyer interest`
      ]
    },
    takeaways: [
      `Owned arrays capitalize into value`,
      `Battery backup increases desirability`,
      `Stronger than many interior remodels`
    ]
  },

  'maximize-federal-itc': {
    title: `Maximizing the 30% Federal ITC Tax Credit for 2026 Residential Solar`,
    category: 'cat1',
    tag: 'SOLAR TECH',
    date: 'July 30, 2026',
    readTime: '6 Min Read',
    author: 'Dr. Sophia Chen',
    authorRole: 'VP of Photovoltaic R&D at SunCapital',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    authorBio: `Dr. Chen advises SunCapital clients on structuring owned systems to capture the full federal credit.`,
    img: 'https://i.pinimg.com/1200x/8d/62/39/8d62395ab9ba70b91ef15263220a6b8a.jpg',
    excerpt: `Practical filing structure: what counts as eligible basis and how to avoid the lease-PPA trap.`,
    body: {
      lead: `The 30% credit is generous but unforgiving on structureâ€”owners who finance through a lease or PPA forfeit the personal credit to the financing entity.`,
      sections: [
        { h: `1. What Counts as Eligible Basis`, p: `Panel hardware, racking, inverters, battery storage, and even the engineering and permit fees roll into the qualifying basis, so document every line item.` },
        { h: `2. Avoiding the Lease-PPA Trap`, p: `A third-party-owned PPA shifts the credit to the financier. Direct purchase or a solar loan keeps the full 30% with you.` }
      ],
      quote: `If a financier owns the panels, they own your tax credit too.`,
      list: [
        `Include engineering + permit fees in basis`,
        `Use direct purchase or solar loan`,
        `Retain all installer invoices`
      ]
    },
    takeaways: [
      `30% of total owned-system cost`,
      `Leases forfeit the personal credit`,
      `Keep meticulous documentation`
    ]
  },

  'autonomous-islanding': {
    title: `Autonomous Islanding: Keeping Power On During Regional Grid Outages`,
    category: 'cat2',
    tag: 'BATTERY',
    date: 'July 24, 2026',
    readTime: '5 Min Read',
    author: 'Julian Vance',
    authorRole: 'Director of Roof CAD Design',
    authorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600',
    authorBio: `Julian designs microgrid isolation logic that keeps estates energized when the utility goes dark.`,
    img: 'https://i.pinimg.com/1200x/c4/35/e0/c435e0fa9d93b8bf168992a4c506f6df.jpg',
    excerpt: `How a properly commissioned microgrid disconnects from the grid in milliseconds and runs autonomously.`,
    body: {
      lead: `Islanding is the art of cleanly severing your estate from the failing grid and running it as its own power islandâ€”no flicker, no reset, no spoiled wine.`,
      sections: [
        { h: `1. Sub-Cycle Transfer Switches`, p: `SunCapital specifies transfer logic that detects a grid fault and isolates the home in under 20 milliseconds, faster than most electronics can brown out.` },
        { h: `2. Sustaining the Island`, p: `With a 30 kWh solid-state stack, the estate carries critical loads indefinitely and throttles luxury loads only after prolonged outages.` }
      ],
      quote: `A well-commissioned microgrid makes the regional blackout someone else's problem.`,
      list: [
        `Sub-20ms grid isolation`,
        `Critical loads run indefinitely`,
        `No appliance resets on transfer`
      ]
    },
    takeaways: [
      `Seamless backup transition`,
      `Protects sensitive electronics`,
      `Supports multi-day autonomy`
    ]
  },

  'bipv-vs-flush-panels': {
    title: `BIPV Slate Tiles vs Flush Monocrystalline Roof Panels`,
    category: 'cat1',
    tag: 'SOLAR TECH',
    date: 'July 18, 2026',
    readTime: '5 Min Read',
    author: 'Julian Vance',
    authorRole: 'Director of Roof CAD Design',
    authorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600',
    authorBio: `Julian matches aesthetic and engineering priorities when specifying roof-integrated vs racked arrays.`,
    img: 'https://i.pinimg.com/1200x/49/a6/12/49a6120d2ecb7f94492f8b11b4f2c330.jpg',
    excerpt: `A design-led comparison of building-integrated photovoltaics against flush monocrystalline roofs.`,
    body: {
      lead: `Heritage and contemporary estates often demand invisible solar. Building-integrated photovoltaic (BIPV) slate trades a few points of efficiency for a roofline with zero visible racking.`,
      sections: [
        { h: `1. Aesthetic Integration`, p: `BIPV tiles sit flush with the roofing plane, preserving historic rooflines that flush racks would violate.` },
        { h: `2. Efficiency & Serviceability`, p: `Flush monocrystalline still wins on raw watts-per-roof and is far easier to service panel-by-panel when a single cell ages.` }
      ],
      quote: `Invisible solar costs a little yield; for the right estate, that trade is obvious.`,
      list: [
        `BIPV preserves roofline aesthetics`,
        `Flush mono leads on efficiency`,
        `Racked arrays are easier to service`
      ]
    },
    takeaways: [
      `Choose BIPV for strict aesthetics`,
      `Choose flush mono for max yield`,
      `Factor long-term serviceability`
    ]
  },

  'lfp-vs-solid-state': {
    title: `LFP vs Solid-State Chemistry: Choosing the Longest-Life Battery Stack`,
    category: 'cat2',
    tag: 'BATTERY',
    date: 'July 11, 2026',
    readTime: '6 Min Read',
    author: 'Julian Vance',
    authorRole: 'Director of Roof CAD Design',
    authorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600',
    authorBio: `Julian specifies storage chemistry based on lifespan, safety, and estate duty cycle.`,
    img: 'https://i.pinimg.com/1200x/8c/ea/ad/8ceaadb80ed48d31608c5c7c1e9e0fc3.jpg',
    excerpt: `LFP is the proven workhorse; solid-state is the premium incumbent. Here is how to choose.`,
    body: {
      lead: `Lithium Iron Phosphate (LFP) has dominated safe residential storage for a decade, but solid-state is arriving with higher density and cooler operation.`,
      sections: [
        { h: `1. Cycle Life & Safety`, p: `LFP routinely exceeds 6,000 cycles with a stable chemistry; solid-state promises similar life with a non-flammable separator and tighter footprint.` },
        { h: `2. Cost & Availability`, p: `LFP remains the value leader today, while solid-state commands a premium justified by estates where roof or closet space is the constraint.` }
      ],
      quote: `LFP is the safe bet; solid-state is the safe luxury bet.`,
      list: [
        `LFP: 6,000+ proven cycles`,
        `Solid-state: denser, cooler, premium`,
        `Match chemistry to space and budget`
      ]
    },
    takeaways: [
      `LFP for proven value`,
      `Solid-state for space-constrained luxury`,
      `Both outlast the panels`
    ]
  },

  'zero-capex-leasing': {
    title: `Zero-CapEx Commercial Solar Leasing for Headquarters & Small Offices`,
    category: 'cat3',
    tag: 'ESTATE ROI',
    date: 'July 4, 2026',
    readTime: '5 Min Read',
    author: 'Elena Rostova',
    authorRole: 'Head of Customer Concierge',
    authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600',
    authorBio: `Elena structures zero-upfront solar programs for SunCapital's commercial and small-office clients.`,
    img: 'https://i.pinimg.com/736x/5c/5f/bd/5c5fbde81729cbb36a701c500373bf80.jpg',
    excerpt: `How businesses can deploy rooftop solar with no capital outlay and immediately lower operating cost.`,
    body: {
      lead: `Small offices and headquarters alike can deploy solar with zero capital expense through a structured power purchase agreement, turning a capex line into a lower operating bill from day one.`,
      sections: [
        { h: `1. The Zero-CapEx Structure`, p: `SunCapital owns and maintains the array; your business simply buys the cleaner power at a rate below the utility tariff under a long-term PPA.` },
        { h: `2. Balance-Sheet Benefits`, p: `Because nothing hits the capex budget, facilities teams adopt solar without a capital committee, and the savings drop straight to operating margin.` }
      ],
      quote: `The best solar project is the one that needs no board approval.`,
      list: [
        `No upfront capital required`,
        `Rate below utility tariff`,
        `Vendor-owned maintenance`
      ]
    },
    takeaways: [
      `Immediate opex reduction`,
      `No capex committee needed`,
      `Predictable energy rate`
    ]
  },

  'solar-ev-charging': {
    title: `Level 3 Solar EV Ultra-Fast Charging Station Integration`,
    category: 'cat2',
    tag: 'EV CHARGING',
    date: 'June 27, 2026',
    readTime: '5 Min Read',
    author: 'Marcus Sterling',
    authorRole: 'Chief Executive Officer',
    authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    authorBio: `Marcus oversees SunCapital's integrated solar-plus-EV product strategy.`,
    img: 'https://i.pinimg.com/1200x/c6/4f/19/c64f198cba479816cba7ac69cd30c534.jpg',
    excerpt: `Pairing a rooftop array with a DC fast charger so your vehicles run on sunshine.`,
    body: {
      lead: `An estate with a Level 3 DC charger can replenish an EV in the time it takes to tour the propertyâ€”especially when the charger draws from on-site solarè€Œä¸æ˜¯ the grid.`,
      sections: [
        { h: `1. Sizing the Charger to the Array`, p: `We size the inverter and battery so the charger's peak draw is buffered by storage, avoiding painful demand charges from the utility.` },
        { h: `2. Sunshine-First Dispatch`, p: `The energy app prioritizes direct solar into the vehicle during the day and tops up from the stack overnight.` }
      ],
      quote: `The cleanest mile is the one powered before it leaves the driveway.`,
      list: [
        `DC fast charging at home`,
        `Battery-buffered peak draw`,
        `Solar-first vehicle dispatch`
      ]
    },
    takeaways: [
      `Faster, cheaper EV fills`,
      `No utility demand penalties`,
      `Showcase-grade estate amenity`
    ]
  },

  'net-metering-3-tariffs': {
    title: `Navigating Net Metering 3.0 Tariffs: Exporting Power Back to the Grid`,
    category: 'cat3',
    tag: 'POLICY',
    date: 'June 20, 2026',
    readTime: '6 Min Read',
    author: 'Elena Rostova',
    authorRole: 'Head of Customer Concierge',
    authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600',
    authorBio: `Elena files net-metering applications and utility approvals for every SunCapital client.`,
    img: 'https://i.pinimg.com/736x/66/aa/ea/66aaeaf767a5f2acce0f68f212b72690.jpg',
    excerpt: `NEM 3.0 pays less for exports but rewards storageâ€”here is how to play it.`,
    body: {
      lead: `Net Metering 3.0 lowered the export credit, but it simultaneously rewards owners who store surplus and export strategically during evening peaks.`,
      sections: [
        { h: `1. Understanding the New Export Rate`, p: `Under NEM 3.0, avoided-cost compensation for exports is modest, so designing around self-consumption matters more than ever.` },
        { h: `2. Storage-First Strategy`, p: `By banking mid-day surplus in the solid-state stack and exporting only during high-value evening windows, owners recover far more value.` }
      ],
      quote: `Under NEM 3.0, the batteryâ€”not the gridâ€”is your best customer.`,
      list: [
        `Lower export compensation`,
        `Self-consumption is king`,
        `Evening-peak storage arbitrage`
      ]
    },
    takeaways: [
      `Size storage before export`,
      `Shift exports to peak windows`,
      `Maximize self-consumption`
    ]
  },

  'cold-climate-solar': {
    title: `Cold Climate Solar Performance & Hydrophobic Snow-Shedding Coatings`,
    category: 'cat1',
    tag: 'SOLAR TECH',
    date: 'June 13, 2026',
    readTime: '5 Min Read',
    author: 'Dr. Sophia Chen',
    authorRole: 'VP of Photovoltaic R&D at SunCapital',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    authorBio: `Dr. Chen researches cold-weather yield and panel surface treatments.`,
    img: 'https://i.pinimg.com/1200x/8e/2a/d4/8e2ad4f48b745f14ab0fa9c9adde596f.jpg',
    excerpt: `Panels love the coldâ€”it is the snow that hurts. Hydrophobic coatings fix that.`,
    body: {
      lead: `Counter-intuitively, solar cells are more efficient in the cold; the enemy is snow cover and soiling, not temperature.`,
      sections: [
        { h: `1. Why Cold Helps Yield`, p: `Lower cell temperature reduces resistive losses, so a crisp winter day with sun often out-produces a hot summer afternoon at equal irradiance.` },
        { h: `2. Hydrophobic Snow-Shedding`, p: `A nano hydrophobic coating lets panels shed snow modules at a clean angle once the sun returns, restoring output without manual clearing.` }
      ],
      quote: `Cold is a feature for solar; snow is just a temporary curtain.`,
      list: [
        `Higher efficiency in cold`,
        `Hydrophobic self-clearing`,
        `Tilt optimizes shed angle`
      ]
    },
    takeaways: [
      `Winter sun is productive`,
      `Coatings cut manual clearing`,
      `Correct tilt accelerates recovery`
    ]
  },

  'drone-lidar-inspections': {
    title: `Drone Thermal LIDAR Inspections & Automated Solar Panel Cleaning`,
    category: 'cat3',
    tag: 'MAINTENANCE',
    date: 'June 6, 2026',
    readTime: '5 Min Read',
    author: 'Elena Rostova',
    authorRole: 'Head of Customer Concierge',
    authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600',
    authorBio: `Elena coordinates SunCapital's remote inspection and concierge maintenance programs.`,
    img: 'https://i.pinimg.com/1200x/81/8a/e0/818ae0ea4a4a83e4c6f3d151d78d368a.jpg',
    excerpt: `How thermal drones find hot-spots and robots keep arrays pristine.`,
    body: {
      lead: `A single shaded or failing cell can quietly sink an entire string's output; annual drone thermal scans catch it before the utility bill does.`,
      sections: [
        { h: `1. Thermal Hot-Spot Detection`, p: `LIDAR-structured thermal imaging flags defective cells and loose connections as small temperature anomalies, pinpointing exactly which module to swap.` },
        { h: `2. Automated Cleaning`, p: `For large estates, a scheduled robotic wash removes pollen and dust soiling that can cost 5â€“8% of annual yield.` }
      ],
      quote: `The cheapest megawatt-hour is the one you did not lose to dust.`,
      list: [
        `Catch faults before yield drops`,
        `Robotic cleaning recovers 5â€“8%`,
        `No scaffolding or roof walks`
      ]
    },
    takeaways: [
      `Annual thermal scans pay back`,
      `Soiling is a hidden tax`,
      `Safer than manual roof work`
    ]
  }
};

window.BLOG_ORDER = [
  '2026-subsidy-master-guide',
  'n-type-topcon-efficiency',
  'solid-state-smart-automation',
  'rooftop-valuation-boost',
  'maximize-federal-itc',
  'autonomous-islanding',
  'bipv-vs-flush-panels',
  'lfp-vs-solid-state',
  'zero-capex-leasing',
  'solar-ev-charging',
  'net-metering-3-tariffs',
  'cold-climate-solar',
  'drone-lidar-inspections'
];
