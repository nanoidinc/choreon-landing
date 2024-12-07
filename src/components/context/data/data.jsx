const IMAGE_PATH = `${import.meta.env.BASE_URL}images/`;
const navLinks = [
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/docs',
    text: 'Docs',
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
      Develop products with a streamlined developer experience and straightforward pricing
      to help you grow at your own pace.
    `,
    spotlightImg: {
      src: `${IMAGE_PATH}overview-ui.png`,
      alt: 'Choreon Dashboard',
    },
    action: earlyAccessCta,
  },

  servicesOverview: {
    title: 'Build your team, let us enable them to ship fast.',
    subtitle: `
      Focus on building your team and refining your product idea.
      Choreon Pulse accelerates your journey by managing the development
      lifecycle and delivery infrastructure, enabling you to build, prototype,
      and deploy efficiently without overspending.
    `,
    img: {
      src: `${IMAGE_PATH}services-ui.png`,
      alt: 'Choreon Services Page.',
    },
  },

  getStartedSteps: {
    title: 'Get Started in 3 Easy Steps!',
    cards: [
      {
        title: 'Login using a Git Provider.',
        description: 'Login with Github or GitLab. Soon there will be BitBucket too.',
      },
      {
        title: 'Setup your Organization.',
        description:
          'Provide your organization name, along with an optional website URL and logo.',
      },
      {
        title: 'Start Delivering.',
        description:
          'Onboard your team, deploy services, manage secrets, and build your product.',
      },
    ],
  },
  keyHighlights: {
    title: 'Why Choreon Pulse?',
    subtitle: `
      Choreon Pulse empowers your developers to build reliable systems effortlessly,
      reducing the hassle of delivery and maintenance — all while staying within your budget.
    `,
    cards: [
      {
        icon: `${IMAGE_PATH}icon-lightning.svg`,
        title: 'Develop. Deploy. Repeat.',
        description:`
          Deploy from container registries or source code. Choreon Pulse can handle remote repositories and local development seamlessly.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-console.svg`,
        title: 'Intuitive CLI.',
        description:`
          Designed for developers, Choreon’s lightweight CLI simplifies workflows by
          eliminating complex commands while ensuring everything gets done efficiently.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-shield.svg`,
        title: 'Impeccable Standards by Design.',
        description:`
          Build confidently with Choreon Pulse — enforce great development practices,
          zero trust security, and observability norms.
        `,
      },
    ],
  },

  powerfulCli: {
    title: 'Deploy in Minutes, Zero Config.',
    subtitle:`
      Launch services in a few clicks from UI or by a single command from CLI. Choreon Pulse enables full CI/CD from day one.
    `,
    img: {
      src: `${IMAGE_PATH}cli-code-sample.svg`,
      alt: 'Choreon CLI Demo Image.',
    },
  },

  security: {
    title: 'Zero Trust Security.',
    description: `
      Choreon Pulse keeps your resources secure. With built-in zero trust, you control
      full access and actions. Rest easy knowing your secrets are managed.
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
        description: `
          Choreon Pulse enables delivering products with a simple, credit based pricing. No hidden charges.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-arrow.svg`,
        title: 'Upgrade with Peace.',
        description:`
          Upgrade as needed, with transparent & credit-based billing - ensuring you only pay when it's necessary.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-maximise.svg`,
        title: 'Pulse Units to the Rescue.',
        description: `
          Boost your resource credits without upgrading plan by purchasing affordable Pulse Units.
        `,
      },
    ],
  },

  nextIdea: {
    title: 'Built for your next big idea.',
    cards: [
      {
        icon: `${IMAGE_PATH}icon-rocket.svg`,
        title: 'Startups.',
        description: `
          Accelerate development and focus on growth with Choreon Pulse,
          providing all the tools for fast iteration so you can innovate without infrastructure worries.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-manuscript.svg`,
        title: 'Individual Entrepreneurs.',
        description: `
          Easily launch personal projects, prototypes or MVPs - our platform streamlines building, deploying, and scaling with minimal setup.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-building.svg`,
        title: 'Growing Busineses.',
        description:
          'Choreon Pulse fuels your growth — so you can focus on your customers while we handle the tech (most of it).',
      },
    ],
  },

  bottomCtaSection: {
    title: 'Embrace Choreon Pulse today!',
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
        href: 'www.facebook.com/choreon',
        icon: `${IMAGE_PATH}icon-fb.svg`,
        text: 'Facebook',
      },
      {
        href: 'www.x.com/choreon',
        icon: `${IMAGE_PATH}icon-x.svg`,
        text: 'X',
      },
      {
        href: 'www.linkedin.com/choreon',
        icon: `${IMAGE_PATH}icon-linkedin.svg`,
        text: 'LinkedIn',
      },
      {
        href: 'www.youtube.com/choreon',
        icon: `${IMAGE_PATH}icon-yt.svg`,
        text: 'Youtube',
      },
    ],
    otherLinks: [
      {
        href: '/policies/privacy',
        text: 'Privacy Policy',
      },
      {
        href: '/policies/tos',
        text: 'Terms of Service',
      },
    ],
  },
  otherImages: {
    closeIcon: `${IMAGE_PATH}icon-close.svg`,
    menuIcon: `${IMAGE_PATH}icon-menu.svg`,
  },
  about: {
    questions: [
      {
        title: 'What is Choreon Pulse?',
        answer: `
          Choreon is built to be the ultimate development experience optimization platform.
          Pulse, our flagship offering, is a comprehensive suite designed for building, 
          deploying, and scaling software products—from rapid prototypes to enterprise-grade solutions.
          It eliminates the burdens of infrastructure provisioning, team access management,
          certificate handling, secret management, and many more, empowering your developers
          to focus on innovation and faster delivery.
          
          With streamlined workflows and flat, transparent pricing, Choreon Pulse ensures you
          can grow efficiently and cost-effectively, making it the perfect choice for startups
          and scaling businesses alike.
        `,
      },
      {
        title: 'Is Choreon just another cloud service provider (CSP)?',
        answer: `
          Not at all. Choreon is an abstraction layer built on top of leading cloud service
          providers (CSPs), designed to simplify product delivery and elevate the developer experience.
          Instead of just providing infrastructure, Choreon removes unnecessary, time-consuming steps
          from the development lifecycle—letting you focus on what matters most: building great features.
          
          Whether you're crafting your MVP, scaling a startup, or supporting thousands of users, Choreon
          Pulse is here to streamline your journey. It’s a workflow optimization platform for your product
          and engineering teams, simplifying development operations, onboarding, and offboarding while
          boosting overall efficiency. Say goodbye to deployment headaches, tedious maintenance, and
          complex audits.
          
          Under the hood, we leverage reliable CSPs like AWS to host your services. Pulse provides an
          easy-to-use platform for medium to semi-large scales, helping you ship faster and more effectively.
          
          And we’re just getting started. Our upcoming product, Nexus, takes things further. For large
          organizations with existing CSP workloads, Nexus acts as a central control plane, streamlining
          development and resource provisioning across multicloud environments. It offers all the power of
          Pulse but tailored for multicloud setups, enabling seamless integration with your existing
          infrastructure. Choreon Pulse is perfect for individual entrepreneurs, developers, startups,
          and growing businesses. But we don’t stop there—big organizations can integrate their setups
          with ours to unlock Choreon’s exceptional development experience as a unified productivity
          control plane. Whether you’re just starting or scaling up, Choreon is here to empower your team
          and accelerate your success.
        `,
      },
      {
        title: 'How does Choreon Pulse add value?',
        answer: `
          Choreon Pulse serves as a control plane that abstracts compute resources, providing your
          developers with a seamless way to deploy services and products. By taking over delivery
          infrastructure management, it allows your product team to focus entirely on building features
          instead of dealing with deployment complexities.
          
          With Choreon Pulse, you get:
          
          One-command deployments: 
          A lightweight CLI that enables service deployment in seconds. It integrates easily with
          existing pipelines, simplifying CI/CD workflows and making manifests leaner.
          
          Secrets and environment management:
          Effortlessly manage service secrets and environment variables, ensuring secure and
          streamlined operations.
          
          Authentication at Gateway: Decide which services to expose publicly or keep private,
          with built-in edge authentication mechanisms.
          
          Built-in observability: Get monitoring and alerting for your services from day one,
          with the ability to forward logs and metrics to third-party platforms if needed.
          
          Choreon Pulse provides everything you need to get started and scale efficiently, offering
          out-of-the-box solutions that meet your needs until you're ready to grow even bigger. It’s
          designed to boost your development workflow while keeping operations simple, secure, and
          reliable.
        `,
      },
    ]
  },
  docs: {
    topics: [
      {
        title: 'Getting Started',
        description: 'Learn how to get started with Choreon Pulse.',
      }
    ]
  }
};
