export const CONTACT = { phone: '0910857469', tel: '+251910857469', email: 'voltifyevinstallation@gmail.com' };

export const SERVICES = [
  { title: 'EV Charger Consultation', text: 'Electrical panel and load capacity assessment, site inspection, cost estimation and custom charging recommendations.' },
  { title: 'Charging Components Delivery', text: 'On-demand delivery of chargers, cables, mounting hardware, adapters and accessories.' },
  { title: 'EV Charger Installation', text: 'EV charger installation for residential, commercial and workplace properties, with a variety of installation options.', list: [['Level 1 (AC):', '3 flexible options · 3 kW · 16 A'], ['Level 2 (AC):', 'wall mounted · 7 kW · 30–32 A']], soon: { label: 'Level 3 Fast Charger (DC):', text: '20–100+ kW · 40–150 A' } },
];

export const MORE_SERVICE = {
  title: 'Comprehensive EV Vehicles Diagnostics & Maintenance',
  groups: [
    { title: 'Complete EV Diagnostics', items: [
      ['State-of-Health (SOH) Analysis:', 'Deep scan of battery pack degradation, individual cell balancing and charge-holding capacity.'],
      ['Electrical System & Harness Audit:', 'Checking high-voltage insulation, wiring continuity and controller fault codes.'],
      ['Charging System Diagnostics:', 'Diagnosing onboard chargers, port communication errors and cable degradation.'],
    ] },
    { title: 'Preventive EV Maintenance', items: [
      ['Thermal & Cooling Circuit Service:', 'Inspecting battery coolant loops, pumps and heat management systems to prevent overheating.'],
      ['Regenerative Brake & Fluid Care:', 'Inspecting pad/rotor wear and flushing hydraulic brake fluid to maintain peak stopping power.'],
      ['EV-Heavy Suspension & Tire Rotation:', 'Checking specialized low-rolling-resistance tires and heavy-duty suspension bushings built to carry heavy battery loads.'],
      ['Cabin Air Quality & HVAC:', 'Replacing cabin microfilters and testing heating/cooling systems for efficient cabin climate control.'],
    ] },
  ],
};

export const SERVICE_NAMES = [...SERVICES.map((s) => s.title), MORE_SERVICE.title];

export const STEPS = [
  ['Free quote', 'Tell us about your car, property and where you’d like the charger.'],
  ['Site survey', 'We check your electrics and agree the best position and charger.'],
  ['Install and test', 'We fit, test and show you how to use it. You’re ready to charge.'],
];

export const PROJECTS = [
  { title: "Home Charger Installation", text: "Wall-mounted charger wired and tested at a family home.", img: '/portfolio/home-install.svg', alt: "Illustration of a house with a wall-mounted charger and a cable to an electric car" },
  { title: "Level 2 Wall-Mounted Install", text: "Outdoor wall unit with conduit and wiring routed to the panel.", img: '/portfolio/wall-mounted.svg', alt: "Illustration of a wall-mounted EV charger with conduit and coiled cable" },
  { title: "Electrical Panel & Load Check", text: "Panel inspection and load check before a charger goes live.", img: '/portfolio/panel-load.svg', alt: "Illustration of an electrical panel with breakers, a load gauge and a check mark" },
  { title: "Charging Components Delivery", text: "Chargers, cables, sockets, breakers, conduit and brackets delivered together.", img: '/portfolio/components.svg', alt: "Illustration of EV charger installation components: wall charger, cable, socket, circuit breaker, conduit and bracket" },
  { title: "Charging Cables & Adapters", text: "Type 2 to Type 1 cables for 230–400V, 16–32A charging.", img: '/portfolio/cables.svg', alt: "Illustration of a Type 2 plug and a Type 1 plug with an arrow between them" },
];

export const CLIENTS = [
  { title: 'Residential EV Owners', who: 'Single-Family Homeowners', text: 'Over 80% of EV charging happens at home. New or existing EV drivers upgrade from standard Level 1 wall plugs to Level 2 home charging units for faster overnight charging. They rely heavily on expert consultation to verify if their electrical panel needs an upgrade.' },
  { title: 'Commercial & Workplace Site Hosts', who: 'Businesses, Offices & Retail', text: 'Companies, office complexes, shopping centers and hotels install chargers to attract employees and eco-conscious customers. They require component delivery for multi-unit orders alongside expert consultation for site planning, power load management and commercial-grade wall/pedestal mounts.' },
  { title: 'Multi-Family Housing Managers', who: 'Property Managers & HOAs', text: 'Apartment complexes, condominiums and housing developments are under growing pressure to provide EV charging options for tenants. They consult installation experts to assess shared garage electrical capacity, set up dedicated metering and arrange bulk delivery of wall-mounted charging stations.' },
];

export const FAQS = [
  { q: 'Do I need a site visit first?', a: 'We survey most properties before confirming a price.' },
  { q: 'Which areas do you cover?', a: 'We cover all of Addis Ababa and selected areas of Sheger City.' },
  { q: 'Can you install any charger brand?', a: 'Yes, we install all charger brands.' },
  { q: 'How long does an installation take?', a: 'It depends on the environment and scope of the project, and is decided during the site visit. On average, an installation takes 1–2 days.' },
];
