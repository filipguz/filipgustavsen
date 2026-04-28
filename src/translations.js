export const t = {
  no: {
    nav: { home: 'Hjem', tech: 'Tech', people: 'Folk' },
    home: {
      intro: 'Utvikler og friluftsinstruktør med erfaring fra både programvareutvikling og arbeid med mennesker.',
      techBtn: 'Teknologi / Utvikling',
      peopleBtn: 'Mennesker / Utdanning',
    },
    tech: {
      title: 'Teknologi / Utvikling',
      intro: 'Selvlært fullstack-utvikler. Jeg har bygget og deployet en SaaS-applikasjon med Java og Spring Boot — fra databasedesign til produksjon.',
      stackTitle: 'Teknologier',
      projectsTitle: 'Prosjekter',
      linksTitle: 'Lenker',
      projects: [
        {
          title: 'Leirskoleportalen',
          description: 'SaaS-plattform for administrasjon av leirskoleopphold. Håndterer bestillinger, fakturering og kommunikasjon mellom skoler og leirskoler.',
          tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Stripe'],
          links: [{ label: 'GitHub', href: '#' }, { label: 'Demo', href: '#' }],
        },
        {
          title: 'Ventilation Dashboard',
          description: 'Sanntidsdashboard for overvåking av ventilasjonsanlegg via Modbus TCP.',
          tags: ['React', 'Spring Boot', 'Modbus TCP'],
          links: [{ label: 'GitHub', href: '#' }],
        },
        {
          title: 'Lønnskrav AI',
          description: 'Beslutningsstøttesystem for behandling av lønnskrav. Bygget som MVP.',
          tags: ['React', 'AI/ML'],
          links: [{ label: 'GitHub', href: '#' }],
        },
      ],
    },
    people: {
      title: 'Mennesker / Utdanning',
      intro: 'Bakgrunn innen friluftsliv, folkehelse og arbeid med mennesker. Jeg har erfaring med å lede grupper, fasilitere læring og ha organisatorisk ansvar.',
      experienceTitle: 'Erfaring',
      educationTitle: 'Utdanning',
      skillsTitle: 'Ferdigheter',
      experience: [
        { role: 'Leirskolelærer', note: 'Undervisning og friluftsliv på leirskole' },
        { role: 'Friluftspedagog', note: 'Pedagogikk innen natur og friluftsliv' },
        { role: 'Vaktleder', note: 'Vaktleder, Aquarama' },
        { role: 'Hovedtillitsvalgt', note: 'Tillitsvalgtarbeid på øverste nivå' },
      ],
      education: [
        { title: 'Bachelor i folkehelse', institution: '' },
        { title: 'Friluftsliv og uterehabilitering', institution: '' },
        { title: 'Ledelse og selvledelse', institution: 'Kristiania' },
      ],
      skills: ['Kommunikasjon', 'Ledelse', 'Sikkerhet og førstehjelp', 'Folkehelse', 'Gruppefasilitering'],
    },
    footer: { email: 'E-post' },
  },
  en: {
    nav: { home: 'Home', tech: 'Tech', people: 'People' },
    home: {
      intro: 'Developer and outdoor instructor with experience in both building software and working with people.',
      techBtn: 'Tech / Development',
      peopleBtn: 'People / Education',
    },
    tech: {
      title: 'Tech / Development',
      intro: 'Self-taught fullstack developer. I have built and deployed a SaaS application using Java and Spring Boot — from database design to production deployment.',
      stackTitle: 'Tech Stack',
      projectsTitle: 'Projects',
      linksTitle: 'Links',
      projects: [
        {
          title: 'Leirskoleportalen',
          description: 'SaaS platform for managing school camps. Handles bookings, invoicing, and communication between schools and camp providers.',
          tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Stripe'],
          links: [{ label: 'GitHub', href: '#' }, { label: 'Demo', href: '#' }],
        },
        {
          title: 'Ventilation Dashboard',
          description: 'Real-time dashboard for monitoring ventilation systems over Modbus TCP.',
          tags: ['React', 'Spring Boot', 'Modbus TCP'],
          links: [{ label: 'GitHub', href: '#' }],
        },
        {
          title: 'Lønnskrav AI',
          description: 'Decision support system for salary claim processing. Built as an MVP.',
          tags: ['React', 'AI/ML'],
          links: [{ label: 'GitHub', href: '#' }],
        },
      ],
    },
    people: {
      title: 'People / Education',
      intro: 'Background in outdoor education, public health and working with people. I have experience leading groups, facilitating learning, and holding organisational responsibility.',
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      skillsTitle: 'Skills',
      experience: [
        { role: 'Leirskolelærer', note: 'Outdoor education at school camps' },
        { role: 'Friluftspedagog', note: 'Outdoor activity pedagogue' },
        { role: 'Vaktleder', note: 'Shift supervisor, Aquarama' },
        { role: 'Hovedtillitsvalgt', note: 'Main union representative' },
      ],
      education: [
        { title: 'Bachelor i folkehelse', institution: '' },
        { title: 'Friluftsliv og uterehabilitering', institution: '' },
        { title: 'Ledelse og selvledelse', institution: 'Kristiania' },
      ],
      skills: ['Communication', 'Leadership', 'Safety & First Aid', 'Public Health', 'Group facilitation'],
    },
    footer: { email: 'Email' },
  },
}
