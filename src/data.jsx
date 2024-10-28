const IMAGE_PATH = '/images/';
const navLinks = [
  {
    href: '#',
    text: 'About',
  },
  {
    href: '#',
    text: 'Pricing',
  },
  {
    href: '#',
    text: 'Blog',
  },
];

const earlyAccessCta = {
  href: '#early-access',
  text: 'Get Early Access',
};

const logo = {
  link: `${IMAGE_PATH}choreon-logo.svg`,
  text: 'Choreon Logo',
};

export const data = {
  header: {
    logo,
    links: navLinks,
    linkActions: [earlyAccessCta],
  },
  hero: {
    primaryHeading: (
      <>
        Choreon <span className="name-pulse">Pulse</span>: Innovate Fearlessly,
        Deploy Effortlessly, Scale Affordably.
      </>
    ),
    primarySubHeading: `
      Accelerate from prototype to enterprise grade solutions without breaking your bank.
      Develop products with a straightforward pricing to help you grow at your own pace.
    `,
    spotlightImg: {
      src: `${IMAGE_PATH}overview-ui.png`,
      alt: 'Choreon Dashboard',
    },
    action: earlyAccessCta,
  },

  getStartedSteps: {
    title: 'Get Started in 3 Steps!',
    cards: [
      {
        title: 'Connect your Git Account.',
        description: 'Log in with Github or GitLab.',
      },
      {
        title: 'Setup an Organization.',
        description:
          'Provide your organization name, along with an optional website URL and logo.',
      },
      {
        title: 'Start Delivering.',
        description:
          'Deploy services with a single command from our CLI or directly from the web UI.',
      },
    ],
  },
  keyHighlights: {
    title: 'Why Choreon Pulse?',
    subtitle:
      'Build reliable systems without the hassle of managing delivery and maintenance, at a cost that fits your budget.',
    cards: [
      {
        icon: `${IMAGE_PATH}icon-lightning.svg`,
        title: 'Develop. Deploy. Repeat.',
        description:
          'Deploy from container registries or source code. Choreon can handle remote repositories and local development seamlessly.',
      },
      {
        icon: `${IMAGE_PATH}icon-console.svg`,
        title: 'Intuitive CLI.',
        description:
          'Built for developers, Choreon\’s lightweight CLI removes the burden of overcomplicated commands.',
      },
      {
        icon: `${IMAGE_PATH}icon-shield.svg`,
        title: 'Impeccable Standard by Design.',
        description:
          'Build confidently with Choreon — great development practices, zero trust security, and observability are built-in.',
      },
    ],
  },

  powerfulCli: {
    title: 'Deploy in Minutes, Zero Config.',
    subtitle:
      'Launch services in a few clicks from UI or by a single command from terminal. Choreon Pulse enables full CI/CD from day one.',
    img: {
      src: `${IMAGE_PATH}cli-code-sample.svg`,
      alt: 'Choreon CLI Demo Image.',
    },
  },

  security: {
    title: 'Zero Trust Security.',
    description: `
      Choreon Pulse keeps your services secure, even when exposed. 
      With built-in zero trust, you control full access and actions. 
      Rest easy knowing your service secrets are securely managed.
    `,
    img: {
      src: `${IMAGE_PATH}secure-hive.svg`,
      alt: 'Choreon Security Image.',
    },
  },

  pricing: {
    cardPayDetail: {
      title: 'Predictable, Flat Pricing.',
      description:
        'Focus on building, not on budgeting. With a straightforward cost model, you can grow your project without financial stress.',
      img: {
        src: `${IMAGE_PATH}card-pay.svg`,
        alt: 'Card Pay Image.',
      },
    },
    flexCards: [
      {
        icon: `${IMAGE_PATH}icon-dollar.svg`,
        title: 'No Surprising Bills.',
        description:
          'Choreon Pulse enables delivering products with a simple, credit based pricing. No hidden charges.',
      },
      {
        icon: `${IMAGE_PATH}icon-arrow.svg`,
        title: 'Upgrade with Peace.',
        description:
          "Upgrade as needed, with transparent & credit-based billing; ensuring you only pay when it's necessary.",
      },
      {
        icon: `${IMAGE_PATH}icon-maximise.svg`,
        title: 'Pulse Units to the Rescue.',
        description:
          'Boost your resource credits without upgrading plan by purchasing affordable Pulse Units.',
      },
    ],
  },

  nextIdea: {
    title: 'Built for Next Big Idea.',
    cards: [
      {
        icon: `${IMAGE_PATH}icon-rocket.svg`,
        title: 'Startups.',
        description:
          'Accelerate development and focus on growth with Choreon Pulse, providing all the tools for fast iteration so you can innovate without infrastructure worries.',
      },
      {
        icon: `${IMAGE_PATH}icon-manuscript.svg`,
        title: 'Indie Developers.',
        description:
          'Easily launch personal projects or MVPs; our platform streamlines building, deploying, and scaling with minimal setup.',
      },
      {
        icon: `${IMAGE_PATH}icon-building.svg`,
        title: 'Growing Busineses.',
        description:
          'Choreon Pulse fuels your growth — so you can focus on your customers while we handle the tech.',
      },
    ],
  },

  bottomCtaSection: {
    title: 'Embrace Choreon Pulse!',
    action: {
      href: '#early-access',
      text: 'Get Early Access',
    },
  },
  footer: {
    logo,
    copyrightText: '© 2024 Choreon Inc. All rights reserved.',
    primaryLinks: navLinks,
    socialSites: [
      {
        href: '#',
        icon: `${IMAGE_PATH}icon-fb.svg`,
        text: 'Facebook',
      },
      {
        href: '#',
        icon: `${IMAGE_PATH}icon-x.svg`,
        text: 'X',
      },
      {
        href: '#',
        icon: `${IMAGE_PATH}icon-linkedin.svg`,
        text: 'LinkedIn',
      },
      {
        href: '#',
        icon: `${IMAGE_PATH}icon-yt.svg`,
        text: 'Youtube',
      },
    ],
    otherLinks: [
      {
        href: '#',
        text: 'Privacy Policy',
      },
      {
        href: '#',
        text: 'Terms of Service',
      },
    ],
  },
};
