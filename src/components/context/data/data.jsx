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
  href: 'https://www.surveymonkey.com/r/BT3NXKC',
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
    action: earlyAccessCta,
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
        answer: (
          <>
            <strong>
              Choreon Pulse is a developer workflow platform that simplifies
              product delivery by abstracting cloud infrastructure and unifying
              the deployment experience.
            </strong>
            <br />
            <br />
            Built for startups and fast-moving teams, Pulse handles the
            complexity of provisioning, deploying, securing, and scaling
            services—so developers can focus on shipping features, not managing
            infrastructure.
            <br />
            <br />
            From blazing-fast service deployments to integrated secrets
            management, lightweight datastores, and built-in gateway
            authentication, Pulse brings structure and automation to your entire
            development lifecycle.
            <br />
            <br />
            Whether you're deploying from local or integrating into existing
            pipelines, Pulse provides a single control plane to manage your
            services and environments—right out of the box.
            <br />
            <br />
            Looking ahead, our upcoming “Bring Your Own Cloud” feature will
            allow organizations to connect their own infrastructure accounts
            (AWS, GCP, and others), gaining full control while continuing to
            benefit from Pulse’s seamless workflows and automation.
          </>
        ),
      },
      {
        title: 'Is Choreon just another cloud service provider (CSP)?',
        answer: (
          <>
            No. Choreon is not a cloud provider—it is a developer experience and
            workflow platform that operates atop trusted public cloud
            infrastructure like AWS, GCP, and others.
            <br />
            <br />
            We do not offer infrastructure directly. Instead, Choreon Pulse
            removes the operational complexity of using cloud platforms by
            abstracting deployment, configuration, secrets, and basic
            observability into a single, easy-to-use layer.
            <br />
            <br />
            Your services are still powered by leading CSPs. Choreon simply
            makes that infrastructure usable in a more streamlined,
            developer-first way. This lets you launch, scale, and operate
            faster—without becoming an expert in cloud operations.
            <br />
            <br />
            In the future, we will extend this abstraction into multi-cloud and
            bring-your-own-cloud environments, giving larger organizations even
            more flexibility while maintaining the same seamless control plane.
          </>
        ),
      },
      {
        title: 'How does Choreon Pulse add value?',
        answer: (
          <>
            Choreon Pulse simplifies cloud-based development by abstracting
            common operational challenges and delivering a faster,
            developer-focused workflow.
            <br />
            <br />
            <strong>Blazing-Fast Deployments:</strong> Launch services in
            minutes using our lightweight CLI or visual UI. Pulse integrates
            with your existing pipelines, supports both container and
            source-based deployments, and works even if you're just getting
            started locally.
            <br />
            <br />
            <strong>Secrets and Environment Management:</strong> Easily manage
            secrets and environment variables. Attach them securely to services,
            detach them instantly when needed—all without external tooling.
            <br />
            <br />
            <strong>Integrated Full-Stack Services:</strong> Spin up lightweight
            datastores using community-backed technologies. Build full-stack
            apps without setup friction. As you grow, transition to
            production-grade solutions from CSPs—without leaving Pulse.
            <br />
            <br />
            <strong>Built-in Gateway Authentication:</strong> Control which
            services are public or private through a built-in
            edge-authentication layer—no need for complex configurations or
            third-party systems until you grow beyond a certain scale.
            <br />
            <br />
            <strong>Native Observability:</strong> Get real-time visibility with
            basic built-in monitoring and alerting. Forward logs and metrics to
            third-party platforms when needed, with minimal setup.
          </>
        ),
      },
    ],
  },
  docs: {
    topics: [
      {
        title: 'Getting Started with Service Deployment (UI)',
        description: (
          <>
            <strong>Prerequisites</strong>
            <br />
            • For Repository deployment: GitHub or GitLab account
            <br />
            • For Private Registry deployment: Docker Hub account or other
            registry credentials
            <br />
            <br />
            <strong>Deployment Methods</strong>
            <br />
            <br />
            <strong>Method 1: Deploy from Public Image</strong>
            <br />
            Use this method for quick deployments with publicly available Docker
            images.
            <br />
            <br />
            Steps:
            <br />
            1. Navigate to <strong>Create Service → Basic Setup</strong>
            <br />
            2. Configure your service:
            <br />
            <pre>
              <code>
                {'  '}• Registry Host: docker.io
                {'\n  '}• Image: nmatsui/hello-world-api
                {'\n  '}• Port: 3000
              </code>
            </pre>
            3. Select appropriate CPU and memory allocation
            <br />
            4. Click Deploy
            <br />
            <br />
            Expected result: Service deploys successfully with a public URL
            generated.
            <br />
            <br />
            <strong>Method 2: Deploy from Private Registry</strong>
            <br />
            Use this method for deploying private images that require
            authentication.
            <br />
            <br />
            First-time setup:
            <br />
            1. Navigate to Create Service page
            <br />
            2. Click <strong>Add Registry</strong>
            <br />
            3. Configure your registry:
            <br />
            <pre>
              <code>
                {'  '}• Host: docker.io (or your registry URL)
                {'\n  '}• Username: Your registry username
                {'\n  '}• Password: Your registry password/token
              </code>
            </pre>
            4. Click <strong>Proceed</strong> to save
            <br />
            <br />
            Deploy your service:
            <br />
            1. Select your configured registry from the dropdown
            <br />
            2. Enter your private image name (e.g., username/private-app)
            <br />
            3. Specify the port your application listens on
            <br />
            4. Select resources and Deploy
            <br />
            <br />
            <strong>Method 3: Deploy from Repository (CI/CD)</strong>
            <br />
            Use this method for automatic builds from your source code
            repository.
            <br />
            <br />
            Steps:
            <br />
            1. Navigate to <strong>Create Service → Advanced Setup</strong>
            <br />
            2. Switch Source Type from "Image" to "Repository"
            <br />
            3. Connect your repository:
            <br />
            <pre>
              <code>
                {'  '}• Provider: Select GitHub or GitLab
                {'\n  '}• Branch: Select your deployment branch
                {'\n  '}• Port: Specify your application's listening port
              </code>
            </pre>
            4. Configure build settings if needed
            <br />
            5. Select resources and Deploy
            <br />
            <br />
            Expected result: Build process initiates automatically, service
            deploys from the pipeline, and a public URL is generated.
            <br />
            <br />
            <strong>Validation</strong>
            <br />
            <br />
            After deployment, verify:
            <br />
            • Service status shows as "Running"
            <br />
            • Public URL is accessible
            <br />
            • Application responds correctly
            <br />
            • Service logs show successful startup
            <br />
            • Resource allocation matches your configuration
            <br />
            <br />
            <strong>Troubleshooting</strong>
            <br />
            <br />
            <strong>Port mismatch error:</strong> Ensure the port matches your
            application's listening port
            <br />
            <br />
            <strong>Authentication fails:</strong> Verify your registry
            credentials and ensure the registry is properly saved
            <br />
            <br />
            <strong>Build fails:</strong> Check your repository's build
            configuration and ensure all required files are present
            <br />
            <br />
            <strong>Image pull fails:</strong> Verify the image name and ensure
            you have proper access credentials
            <br />
          </>
        ),
      },
      {
        title: 'Getting Started using CLI',
        description: (
          <>
            First, download the CLI by running:{' '}
            <code>
              curl -fsSL
              https://public.choreon.dev/artifacts/choreon-cli/install.sh | bash
            </code>
            <br />
            <br />
            After installation, verify the CLI is installed correctly:
            <br />
            <code>choreon version</code>
            <br />
            <br />
            <strong>Getting Started</strong>
            <br />
            <br />
            <code>choreon init</code>
            <br />
            <br />
            Initialize the CLI configuration and authenticate with Choreon. This
            command creates the configuration directory and starts the login
            process. It will open your default browser to complete the
            authentication.
            <br />
            <br />
            <strong>Managing Services</strong>
            <br />
            <br />
            <code>choreon service list</code>
            <br />
            <br />
            List all services in your account.
            <br />
            <br />
            <code>choreon service create</code>
            <br />
            <br />
            Create a new service with the specified configuration. The service
            can be created from either a Docker image or source code directory.
            Environment variables can be specified using --envs flag or
            --env-file. The service can be deployed immediately after creation
            using --deploy flag.
            <br />
            <br />
            <strong>Examples:</strong>
            <br />
            <br />
            Deploy from a public Docker image:
            <pre>
              <code>
                choreon service create \{'\n  '}--name nginx-test \{'\n  '}
                --image nginx:latest \{'\n  '}--port 80 \{'\n  '}--healthcheck /
                \{'\n  '}--memory 128 \{'\n  '}--cpu 50 \{'\n  '}--public \
                {'\n  '}--deploy
              </code>
            </pre>
            <br />
            Deploy from a private Docker image:
            <pre>
              <code>
                choreon service create \{'\n  '}--name my-app \{'\n  '}--image
                registry.example.com/my-app:latest \{'\n  '}--port 8080 \
                {'\n  '}--healthcheck /health \{'\n  '}--image-credentials '
                {`'{"username": "user", "password": "pass"}'`}' \{'\n  '}
                --memory 512 \{'\n  '}--cpu 100 \{'\n  '}--public \{'\n  '}
                --deploy
              </code>
            </pre>
            <br />
            Deploy from source code:
            <pre>
              <code>
                choreon service create \{'\n  '}--name my-app \{'\n  '}--src
                /path/to/source \{'\n  '}--port 8080 \{'\n  '}--healthcheck / \
                {'\n  '}--memory 128 \{'\n  '}--cpu 100 \{'\n  '}--public \
                {'\n  '}--deploy
              </code>
            </pre>
            <br />
            <code>choreon service get --name [service-name]</code>
            <br />
            <br />
            Get detailed information about a specific service.
            <br />
            <br />
            <code>choreon service delete --name [service-name]</code>
            <br />
            <br />
            Delete a service from your account.
            <br />
            <br />
            Try <code>choreon -h</code> or{' '}
            <code>choreon [command] [subcommand] -h</code> to learn more about
            specific commands and options.
          </>
        ),
      },
    ],
  },
};
