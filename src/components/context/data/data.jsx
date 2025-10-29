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
        title: 'Deploying a service from portal UI',
        description: (
          <>
            <strong>Prerequisites</strong>
            <br />
            • For deployment from a repository: GitHub or GitLab account, which
            you have used to log in.
            <br />
            • For deploying image from a private registry: any private registry
            credentials e.g. github, gitlab, docker hub etc.
            <br />
            <br />
            <strong>Ways to deploy a service</strong>
            <br />
            <br />
            <strong>
              Method 1: Deploy a service image hosted in a public registry
            </strong>
            <br />
            Note: Use this method for quick deployments if your service image is
            pushed into a public registry.
            <br />
            <br />
            Steps:
            <br />
            1. Navigate to <code>Create Service</code>
            <br />
            2. Configure your service:
            <br />
            Example inputs -
            <pre>
              <code>
                {'  '}• Registry Host: docker.io
                {'\n  '}• Image: nmatsui/hello-world-api
                {'\n  '}• Port: 3000
              </code>
            </pre>
            3. Provide the healthcheck endpoint, and then select appropriate CPU
            and memory credits for your service.
            <br />
            4. Click deploy.
            <br />
            <br />
            Expected result: Service deploys successfully with a public URL. You
            can uncheck the <code>Expose Publicly</code> checkbox to disable
            exposing the service publicly, in which case it will be privately
            available to other services you deploy, but not to others over the
            internet.
            <br />
            <br />
            <strong>
              Method 2: Deploy a service image from private registry
            </strong>
            <br />
            Note: Use this method for deploying images hosted in a private
            registry. For example, if you are pushing the built image to a
            registry from some pipeline e.g. Github actions.
            <br />
            <br />
            Steps:
            <br />
            1. Same as public registry one, but now you should add your registry
            by clicking on <code>+ Add private registry</code>.
            <br />
            <br />
            <pre>
              <code>
                {'  '}• Host: docker.io (or your registry URL)
                {'\n  '}• Username: Your registry username
                {'\n  '}• Password: Your registDeploying a service from pry
                password/auth token
              </code>
            </pre>
            <br />
            <br />
            2. Select your configured registry from the dropdown in{' '}
            <code>Registry Host</code>.
            <br />
            <br />
            <strong>Method 3: Deploy from a repository</strong>
            <br />
            Note: Use this method for automatic builds from your source code
            repository. Choreon will create a private container registry where
            the image will be pushed.
            <br />
            <br />
            Steps:
            <br />
            1. Toggle on <code>Advanced Setup</code> in{' '}
            <code>Create Service</code>.
            <br />
            2. Switch source kind from "From Container Registry" to "From
            Repository".
            <br />
            3. Select your repository, and then the branch from where the
            service image should be built.
            <br />
            4. In build settings, provide your Dockerfile location in the source
            repository. By default Choreon will expect it to be in the root i.e.{' '}
            <code>/</code>. Alternatively, Choreon can use{' '}
            <a
              href="https://buildpacks.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud Native Buildpacks
            </a>
            , but the support is experimental.
            <br />
            5. In deploy parameters, select resources like before and proceed.
            <br />
            6. In miscelleneous step, you can provide necessary env variables,
            and even CORS related settings. Once you are happy, click
            "Continue".
            <br />
            Expected result: Build process initiates automatically, service
            deploys from the pipeline, and a public URL is generated which
            eventually shows working service response.
            <br />
            <br />
            <strong>Troubleshooting</strong>
            <br />
            <br />
            <strong>Port mismatch error:</strong> Ensure the port matches your
            container images listening port.
            <br />
            <br />
            <strong>Authentication failure while fetching image:</strong> Verify
            your registry credentials and ensure the registry is created using
            "Add private registry".
            <br />
            <br />
            <strong>Build fails:</strong> Check Choreon generated pipeline
            files, and contact us if support is needed.
            <br />
            <br />
            <strong>Image pull fails:</strong> Verify the image name, version
            etc. and ensure you have proper access credentials.
            <br />
          </>
        ),
      },
      {
        title: 'Deploying a service using our CLI',
        description: (
          <>
            First, install the CLI by running:{' '}
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
            This command starts the login process with Choreon. It will open
            your default browser to complete the steps.
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
            can be created from either an image or from a source code directory.
            Environment variables can be specified using <code>
              --envs
            </code>{' '}
            flag or providing a <code>.env</code> file with{' '}
            <code>--env-file</code>. The service can be deployed immediately
            after creation using the <code>--deploy</code> flag.
            <br />
            Check the help by doing <code>choreon -h</code> to understand each
            of the available options.
            <br />
            <br />
            <strong>Some Examples:</strong>
            <br />
            <br />
            Deploy from a public image:
            <pre>
              <code>
                choreon service create \{'\n  '}--name nginx-test \{'\n  '}
                --image nginx:latest \{'\n  '}--port 80 \{'\n  '}--healthcheck /
                \{'\n  '}--memory 128 \{'\n  '}--cpu 50 \{'\n  '}--public \
                {'\n  '}--deploy
              </code>
            </pre>
            <br />
            Deploy from a private registry:
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
            Deploy from a local source folder:
            <pre>
              <code>
                choreon service create \{'\n  '}--name my-app \{'\n  '}--src
                /path/to/source/dir \{'\n  '}--port 8080 \{'\n  '}--healthcheck
                / \{'\n  '}--memory 128 \{'\n  '}--cpu 100 \{'\n  '}--public \
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
