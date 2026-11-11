// All the site's content lives here, so updates don't need touching layout code.
// Logos: drop files into public/logos/ and set `logo` below. No file = initials placeholder.

export const roles = [
  {
    role: 'Solutions Architect (Pre-Sales) & Program Manager',
    company: 'MiPhi Semiconductors',
    note: 'Phison × Micromax JV',
    dates: 'Feb 2026 → Present',
    logo: 'logos/miphi-mark.png' as string | undefined,
    points: [
      'Closed a ₹2 Cr+ Kubernetes GPU cluster order with an education customer, via a channel partner, within 7 months of joining. Delivered the BoQ, power and cooling sizing, and licensing, SLA and security responses.',
      'Lead solutions architect for the team\'s AI deals across 10+ enterprise, education and public-sector engagements, including an 18,000-user on-prem coding-agent proposal to replace a cloud LLM API bill.',
      'Appointed project manager of a 5-person agentic AI product team, running scrums, Jira tracking and weekly management updates.',
      'Program manager for a multi-party server program with a government R&D body and two industry partners.',
      'Audited a GPU fleet capacity model, fixed 4 modelling errors and rebuilt it across 40 model and precision combinations.',
      'Led a 12-deliverable go-to-market package for an on-prem agentic AI appliance, from sales deck to TCO model and user manual.',
    ],
    tags: ['AI solution architecture', 'LLM inference sizing', 'GPU clusters', 'TCO modelling', 'Program management'],
  },
  {
    role: 'DevOps & Platform Engineer',
    company: 'Osfin.ai',
    dates: 'Jun 2025 → Jan 2026',
    logo: 'logos/osfin.svg' as string | undefined,
    points: [
      'Built and secured production Amazon EKS clusters with modular Terraform (IRSA, managed node groups, workload isolation), cutting cluster provisioning time by 40%.',
      'Fixed CI/CD and Helm pipeline failures across environments, cutting build failures by 30%.',
      'Automated multi-cloud operations on AWS, OCI and Azure with Jenkins, n8n and Python, cutting compute cost by 60% and saving 6+ engineer-hours a week.',
    ],
    tags: ['Amazon EKS', 'Terraform', 'Helm', 'ArgoCD', 'Jenkins', 'FinOps'],
  },
  {
    role: 'Co-op Intern, GenAI',
    company: 'AMD India',
    dates: 'Jul 2024 → Jun 2025',
    logo: 'logos/amd.svg',
    points: [
      'Fine-tuned Indic-language LLMs with INT8, INT4 and GPTQ quantisation for about 20% better inference efficiency on low-resource GPUs.',
      'Configured and deployed an end-to-end fine-tuning suite with automated inference, evaluation and benchmarking, orchestrated on Kubernetes.',
    ],
    tags: ['LLM fine-tuning', 'Quantisation', 'Kubernetes', 'MLOps'],
  },
  {
    role: 'Trainee',
    company: 'Corizo',
    dates: 'May 2023 → Jul 2023',
    logo: 'logos/corizo-mark.png' as string | undefined,
    points: [
      'Designed a highly available multi-tier AWS architecture (EC2, RDS, S3, auto scaling, load balancing) with Lambda automation and CloudWatch alerting.',
    ],
    tags: ['AWS', 'Serverless', 'Monitoring'],
  },
];

export const education = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    school: 'Kalinga Institute of Industrial Technology (KIIT)',
    detail: 'CGPA 9.31 / 10 · Bhubaneswar, Odisha',
    dates: '2021 → 2025',
    logo: 'logos/kiit.png' as string | undefined,
  },
];

export const stats = [
  { count: 2, prefix: '₹', suffix: ' Cr+', label: 'GPU cluster order closed for an education customer' },
  { count: 10, prefix: '', suffix: '+', label: 'AI solution engagements across enterprise, education and public sector' },
  { count: 60, prefix: '', suffix: '%', label: 'lower compute cost from containerised automation agents' },
  { count: 40, prefix: '', suffix: '%', label: 'less time to provision EKS clusters with Terraform' },
];

export const skills = [
  {
    group: 'Cloud & Platform',
    items: ['AWS (EKS, VPC, IAM, Lambda)', 'Kubernetes', 'Terraform', 'Helm', 'ArgoCD', 'Jenkins', 'Docker', 'Prometheus', 'Grafana', 'Azure', 'OCI'],
  },
  {
    group: 'AI & LLM Infrastructure',
    items: ['LLM inference sizing', 'Fine-tuning', 'vLLM', 'KV-cache offloading', 'Quantisation', 'RAG', 'Agentic AI', 'NVIDIA B200 / RTX PRO 6000'],
  },
  {
    group: 'Solution Architecture',
    items: ['Requirements to architecture', 'BoM / BoQ', 'TCO modelling', 'Concurrency modelling', 'RFQ & tender responses', 'Proposals'],
  },
  {
    group: 'Delivery',
    items: ['Program management', 'Scrum', 'Jira', 'Multi-party coordination', 'Status reporting'],
  },
];

// `url` = link to the verifiable certificate (Credly, Google Skills Boost, etc.). Empty until provided.
export const certifications = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: 'Oct 2025', url: 'https://www.credly.com/badges/be953941-2c3f-4951-a19d-eb088fc9f0bb', logo: 'logos/aws.svg' as string | undefined },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Sep 2025', url: 'https://www.credly.com/badges/8a358dda-1e42-4975-933d-147845d4ab4c', logo: 'logos/aws.svg' as string | undefined },
  { name: 'McKinsey.org Forward Program', issuer: 'McKinsey.org', date: 'Jul 2025', url: 'https://www.credly.com/badges/130caad1-929e-4fba-8c38-5a4ad2650aad', logo: 'logos/mckinsey.svg' as string | undefined },
  { name: 'Career Essentials in GitHub Professional Certificate', issuer: 'GitHub · LinkedIn Learning', date: 'May 2025', url: 'https://www.linkedin.com/learning/certificates/1d799bbafb1dda40fb4394cbec4b6be12e7347e1a47207de44c7a94a9f532cc0', logo: 'logos/github.svg' as string | undefined },
  { name: 'Real World AI Applications with Gemini and Imagen', issuer: 'Google Cloud', date: 'Apr 2025', url: '', logo: 'logos/googlecloud.svg' as string | undefined },
  { name: 'Prompt Design in Vertex AI', issuer: 'Google Cloud', date: 'Apr 2025', url: '', logo: 'logos/googlecloud.svg' as string | undefined },
];

export const events = [
  { name: 'Convergence India', logo: 'logos/convergence.png' as string | undefined, dark: true },
  { name: 'UP International Trade Show (UPITS)', logo: 'logos/upits.png' as string | undefined, dark: false },
  { name: 'Bengaluru Tech Summit', logo: 'logos/bts.png' as string | undefined, dark: false },
];

// Blog posts and personal projects. No `url` = shown as a "coming soon" card.
export const blogs = [
  {
    kind: 'blog',
    date: 'Apr 2026',
    title: 'The Model Is Not the Problem. The System Around It Is.',
    subtitle: 'What nobody tells you about running GenAI at scale.',
    url: 'https://medium.com/towards-artificial-intelligence/the-model-is-not-the-problem-the-system-around-it-is-34c4fe243692',
  },
  {
    kind: 'blog',
    date: 'Apr 2026',
    title: 'Stop Defaulting to Rolling Updates: 6 Kubernetes Deployment Strategies Explained',
    subtitle: 'Deploying software is about how safely and deliberately you roll it out.',
    url: 'https://medium.com/towards-artificial-intelligence/stop-defaulting-to-rolling-updates-6-kubernetes-deployment-strategies-explained-f5063e01afb2',
  },
  {
    kind: 'blog',
    date: 'Mar 2026',
    title: 'Understanding the Real AI Stack Beyond LLM APIs',
    subtitle: 'Calling an LLM API is not an architecture. Here is what actually is.',
    url: 'https://medium.com/towards-artificial-intelligence/understanding-the-real-ai-stack-beyond-llm-apis-d8f6fb77443c',
  },
  {
    kind: 'blog',
    date: '',
    title: 'Scaling LLM serving for 200 users',
    subtitle: 'A new post on what changes when an LLM platform grows to hundreds of users. In review.',
    url: '',
  },
];
