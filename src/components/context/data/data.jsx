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
        description:
          'Login with Github or GitLab. Soon there will be BitBucket too.',
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
        description: `
          Deploy from container registries or source code. Choreon Pulse can handle remote repositories and local development seamlessly.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-console.svg`,
        title: 'Intuitive CLI.',
        description: `
          Designed for developers, Choreon’s lightweight CLI simplifies workflows by
          eliminating complex commands while ensuring everything gets done efficiently.
        `,
      },
      {
        icon: `${IMAGE_PATH}icon-shield.svg`,
        title: 'Impeccable Standards by Design.',
        description: `
          Build confidently with Choreon Pulse — enforce great development practices,
          zero trust security, and observability norms.
        `,
      },
    ],
  },

  powerfulCli: {
    title: 'Deploy in Minutes, Zero Config.',
    subtitle: `
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
        description: `
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
          Choreon is a developer experience automation platform built to eliminate the friction in deploying and scaling software.
          Our first product, Pulse, is a complete suite designed to take you from rapid prototypes to your first 10,000 customers—without the usual operational headaches.

          Pulse abstracts away infrastructure management, team access, certificates, secrets, and more, so your developers can focus purely on building and shipping faster.
          With streamlined workflows and simple, transparent pricing, Choreon Pulse empowers startups and scaling businesses to grow efficiently, cost-effectively, and without hidden complexity.
        `,
      },
      {
        title: 'Is Choreon just another cloud service provider (CSP)?',
        answer: (
          <>
            Choreon is the ultimate abstraction layer built atop leading cloud
            service providers (AWS, GCP, DigitalOcean, and more), designed to
            streamline product delivery and revolutionize the developer
            experience. Instead of simply offering infrastructure, Choreon
            eliminates the friction, complexity, and manual steps from your
            development lifecycle—so your team can focus entirely on what
            matters most: building and shipping great products.
            <br />
            <br />
            Whether you're crafting your MVP, scaling a fast-growing startup, or
            supporting thousands of users, Choreon Pulse optimizes every part of
            your workflow. From infrastructure management and access controls to
            certificate handling and secrets management, Pulse removes the
            operational overhead that slows teams down. Say goodbye to
            deployment headaches, tedious maintenance, and complex audits. Under
            the hood, your services run on the most reliable CSPs, while Pulse
            gives you a seamless, easy-to-use platform to deploy, scale, and
            operate at speed—perfect for individual developers, small teams, and
            growing businesses.
            <br />
            <br />
            And we’re just getting started. Coming soon, Choreon Nexus will
            power large organizations with existing CSP workloads. Acting as a
            unified control plane for multi-cloud environments, Nexus offers
            everything Pulse delivers—plus seamless integration into your
            existing cloud and on-premises infrastructure. With Nexus, you bring
            your own cloud, and we bring the best developer experience. Choreon
            empowers startups to launch faster, businesses to scale smarter, and
            enterprises to operate with developer-first efficiency—all through a
            single, unified platform. No more complexity. No more friction. Just
            pure focus on innovation.
          </>
        ),
      },
      {
        title: 'How does Choreon Pulse add value?',
        answer: (
          <>
            Choreon Pulse is the control plane for modern development,
            abstracting away compute complexity and delivering a seamless
            deployment experience. By fully managing your delivery
            infrastructure, Pulse frees your product and engineering teams to
            focus on what truly matters—building features, not fighting
            operational bottlenecks. With Choreon Pulse, you get:
            <br />
            <br />
            <strong>Blazing-Fast Deployments:</strong> Deploy services in
            seconds using our lightweight CLI or intuitive UI. Whether launching
            containers or deploying directly from a source repository, Pulse
            integrates effortlessly with your existing pipelines and streamlines
            your CI/CD workflows from day one. Just starting out and deploying
            from your local machine? We’ve got you covered too.
            <br />
            <br />
            <strong>Effortless Secrets and Environment Management:</strong>
            Manage secrets and environment variables with ease. Securely attach
            secrets to services, instantly detach them during emergencies, and
            maintain complete control—all without the need for complex external
            tooling.
            <br />
            <br />
            <strong>Integrated Full-Stack Services:</strong> Pulse offers
            lightweight, community-powered datastores you can easily connect to
            your services, enabling you to build full-stack products right out
            of the gate. As your business grows, seamlessly upgrade to
            enterprise-grade databases from leading cloud providers—without ever
            leaving the familiar Pulse control plane. Datastore integrations are
            automatic, including secure secret management, so you can scale with
            confidence.
            <br />
            <br />
            <strong>Simple, Built-In Gateway Authentication:</strong> Control
            access effortlessly. Choose which services are public or private
            with a built-in edge authentication layer—no complicated setup or
            third-party tools required. Native Observability: Get real-time
            visibility into your services from day one. Pulse provides built-in
            basic monitoring and alerting, with the flexibility to forward logs
            and metrics to third-party observability platforms when needed—all
            without additional setup.
          </>
        ),
      },
    ],
  },
  docs: {
    topics: [
      {
        title: 'Getting Started',
        description: 'Learn how to get started with Choreon Pulse.',
      },
    ],
  },
};
