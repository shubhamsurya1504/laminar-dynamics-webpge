/**
 * Homepage content from LaminarDynamics_website_6slides v3.pptx
 */

export const DEFAULTS = {
  hero: {
    titleLead: "Let's build something",
    titleHighlight: "extraordinary",
    primaryCtaLabel: "our work",
    primaryCtaHref: "https://myrahulroy.blogspot.com/",
    featuredImage: "/hummingbird.jpg",
    domains: [
      { label: "Aerial" },
      { label: "Surface" },
      { label: "Underwater" },
      { label: "X-Rocketry" },
    ],
    stats: [
      { value: "30+", label: "Platforms built" },
      { value: "0", label: "Kits or clones" },
      { value: "~3wk", label: "Brief to flight" },
    ],
  },

  about: {
    label: "About",
    heading: "Things done properly.",
    body: "We are an unmanned vehicle company where Passion complements deep tech expertise and experience.",
    tagline:
      "UAV prototyping, deep technical consulting & service and repairs. Original designs — Real aircraft — Fast.",
    image: "",
    cycleSteps: [
      { label: "Design" },
      { label: "Simulate" },
      { label: "Fabricate" },
      { label: "Fly" },
      { label: "Optimize" },
    ],
  },

  work: {
    label: "Work",
    message: "Work In-Progress",
  },

  services: {
    label: "Work & Service",
    heading: "Full Spectrum",
    image: "",
    items: [
      {
        no: "01",
        title: "Prototyping",
        points: [
          { text: "Original ground-up airframe design." },
          { text: "Build-to-spec: we fabricate your design." },
          { text: "Composite / Monocoque construction — strong lightweight structure." },
          { text: "Full system: airframe + propulsion + avionics." },
          { text: "Flight testing & iterative optimization." },
        ],
      },
      {
        no: "02",
        title: "Technical Consulting",
        points: [
          { text: "Aerodynamic & structural design review." },
          { text: "Flight controller tuning, log analysis." },
          { text: "Propulsion system sizing & optimization." },
          { text: "DFM & structural geometry analysis." },
          { text: "Airworthiness inspection." },
        ],
      },
      {
        no: "03",
        title: "Applied Research",
        points: [
          { text: "Experimental platform development." },
          { text: "Novel / hybrid propulsion configurations." },
          { text: "Materials science & composite R&D." },
          { text: "Sensor fusion & autonomous systems." },
          { text: "Flight control algorithm development support." },
        ],
      },
      {
        no: "04",
        title: "Service & Repairs",
        points: [
          { text: "Periodic airframe & propulsion servicing." },
          { text: "Crash damage & major reconstructions." },
          { text: "Major modifications." },
          { text: "Airworthiness tests." },
        ],
      },
    ],
  },

  deepTech: {
    label: "Services",
    heading: "Deep Tech expertise",
    image: "",
    pillars: [
      {
        title: "Aircraft Design",
        body: "Mission to airframe mapping, aerodynamic and structural feasibility, experimental planforms, fixed-wing / rotor-craft, XFLR5 & OpenVSP analysis. Stability and control geometry & sizing.",
      },
      {
        title: "Fabrication Expertise",
        body: "Composites — glass / carbon / aramid fibre. Vacuum bagging, resin infusion & prepreg. Monocoque construction in wood / composite skins / covering films. 3D and CNC modelling.",
      },
      {
        title: "Propulsion",
        body: "Electric & IC powertrain architecture. Prop-motor-ESC optimization. Hybrid propulsion system design. eVTOL drive-train integration. Fuel efficiency modelling & testing.",
      },
      {
        title: "Electronics",
        body: "Servo, FC, sensor sizing, setup, configuration and optimizing. Sensor fusion: IMU, GPS, barometer, Rx. Payload integration: photogrammetry, LiDAR, gimbal integration for stabilized optics.",
      },
    ],
    integrationTitle: "Integration and Efficiency",
    integrationBody:
      "Troubleshooting through flight video / logs. CG, control surface throws fine tuning, onboard electronics placement and tuning. Propulsion system tuning.",
  },

  whyUs: {
    label: "Why Us",
    image: "",
    items: [
      {
        title: "Proven Execution",
        body: "Dozens of custom-built, flight-tested UAVs across fixed-wing, multi-rotor, VTOL, and experimental platforms.",
      },
      {
        title: "Original Design IP",
        body: "Custom airframe from blank sheet — flying wings, experimental quads, delta planforms, eVTOL. Original designs with transfer of plans, specs, DFM tooling and jigs, manufacturing and service knowhow.",
      },
      {
        title: "Build to spec",
        body: "Customers bring designs — we build them: material, optimizing, high-end fabrication, flight-ready airframes delivered fast.",
      },
      {
        title: "UAV Expertise",
        body: "Deep aerodynamics & fabrication expertise and experience. In-house propulsion, flight control, electronics, and payload expertise that generalist consultants simply cannot offer — deep as-well-as cross-functional.",
      },
      {
        title: "Efficient Model",
        body: "Lean structure with deep & cross-functional expertise to deliver rapidly complex prototypes and unique solutions along with lower costs.",
      },
    ],
    ourWorkLabel: "Our work",
    ourWorkLinks: [
      { label: "myrahulroy.blogspot.com", href: "https://myrahulroy.blogspot.com/" },
      { label: "YouTube — featured flight", href: "https://www.youtube.com/watch?v=pVT5TLOxDik" },
      { label: "YouTube channel", href: "https://www.youtube.com/@RahulRoy-ds7qt" },
    ],
  },

  testimonials: {
    label: "Testimonials and for sale",
    heading: "Testimonials",
    image: "",
    items: [
      { text: "Item 1" },
      { text: "Item 2" },
      { text: "Item 3" },
      { text: "Item 4" },
    ],
    forSaleLabel: "For Sale",
    forSaleItems: [
      { title: "Item 1", body: "" },
      { title: "Item 2", body: "" },
      { title: "Item 3", body: "" },
      { title: "Item 4", body: "" },
    ],
  },

  contact: {
    label: "Contact",
    headingLead: "Let's build something",
    headingHighlight: "extraordinary.",
    description:
      "Open to collaborations, prototyping, R&D partnerships, and consulting engagements. If you're working on something that flies — or should — get in touch. We move fast, build from scratch, and care about getting it right.",
    email: "roy.laminardynamics@gmail.com",
    webLabel: "myrahulroy.blogspot.com",
    webHref: "https://myrahulroy.blogspot.com",
    image: "",
    domainsLine: "Aerial · Surface · Underwater · X-Rocketry",
    footerLine: "laminardynamics.net · rahul.roy@laminardynamics.net",
  },
};
