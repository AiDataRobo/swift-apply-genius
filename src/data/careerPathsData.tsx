import React from 'react';
import { 
  ArrowRight, Code, Shield, Database, Cloud, Laptop, 
  Layout, ChartBar, BarChart4, Users, Lightbulb 
} from 'lucide-react';

export const careerPathsData = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Design, develop, and maintain software applications and systems.',
    longDescription: "Software development is a dynamic and creative field focused on designing, coding, testing, and maintaining computer programs. As a software developer, you'll solve complex problems, build innovative applications, and contribute to products that impact millions of users worldwide.",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    animation: '/animations/software-development.json',
    growthPotential: 'Projected 22% growth over the next decade',
    salaryRange: '$75,000 - $150,000 depending on specialization',
    keySkills: ['Programming', 'Problem Solving', 'Software Design', 'Testing', 'Debugging', 'Version Control'],
    educationRequirements: "Bachelor's degree in Computer Science or related field (some roles accessible with bootcamp certificates and portfolios)",
    jobOutlook: 'Excellent, with consistent demand across industries',
    topCertifications: 'AWS Certified Developer, Microsoft Certified: Azure Developer, Oracle Certified Professional',
    learningResources: 'freeCodeCamp, Codecademy, Udemy, Coursera, GitHub Learning Lab',
    
    technicalSkills: [
      'Programming languages (JavaScript, Python, Java, etc.)',
      'Data structures and algorithms',
      'Database management and SQL',
      'Web development (HTML, CSS, frameworks)',
      'Version control systems (Git)',
      'API development and integration',
      'Software testing and debugging',
      'System architecture design'
    ],
    
    softSkills: [
      'Problem solving and analytical thinking',
      'Attention to detail',
      'Communication skills',
      'Teamwork and collaboration',
      'Time management',
      'Adaptability',
      'Continuous learning'
    ],
    
    technologies: [
      'JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP',
      'React', 'Angular', 'Vue', 'Node.js', 'Django',
      'AWS', 'Azure', 'Git', 'Docker', 'Kubernetes'
    ],
    
    skillTip: 'In software development, breadth of knowledge initially helps you find your path, but depth in specific technologies advances your career. Balance learning fundamentals with specializing in areas you enjoy.',
    
    formalEducation: 'While not always required, formal education can provide a strong foundation for a software development career:',
    educationPaths: [
      "Bachelor's degree in Computer Science, Software Engineering, or related field",
      "Master's degree for specialized roles (AI, machine learning, security)",
      "Associate's degree in Computer Science or Programming",
      'Relevant certifications from accredited institutions'
    ],
    
    certifications: [
      {
        name: 'AWS Certified Developer - Associate',
        description: 'Validates technical expertise in developing and maintaining applications on AWS'
      },
      {
        name: 'Microsoft Certified: Azure Developer Associate',
        description: 'Demonstrates proficiency in designing, building, and maintaining cloud applications on Azure'
      },
      {
        name: 'Oracle Certified Professional, Java SE Programmer',
        description: 'Confirms expertise in Java programming language and related technologies'
      },
      {
        name: 'Certified Kubernetes Application Developer (CKAD)',
        description: 'Validates skills in designing, building, and deploying cloud-native applications using Kubernetes'
      }
    ],
    
    alternativeLearning: 'Many successful software developers are self-taught or have attended bootcamps:',
    alternativePaths: [
      'Coding bootcamps (12-24 week intensive programs)',
      'Self-directed learning through online resources',
      'Open-source contributions and personal projects',
      'Hackathons and coding competitions',
      'Internships and apprenticeships'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Junior Developer',
        timeframe: '0-2 years experience',
        description: 'Focus on learning fundamentals, coding standards, and team workflows. Handle bug fixes and smaller features under supervision.',
        roles: 'Junior Developer, Software Engineer I, Associate Developer'
      },
      {
        level: 'Mid Level: Software Developer',
        timeframe: '2-5 years experience',
        description: 'Take ownership of features, mentor juniors, and have deeper technical expertise in specific areas.',
        roles: 'Software Developer, Software Engineer II, Full Stack Developer'
      },
      {
        level: 'Senior Level: Senior Developer',
        timeframe: '5-8 years experience',
        description: 'Architect solutions, make critical technical decisions, and lead development teams.',
        roles: 'Senior Developer, Software Engineer III, Team Lead'
      },
      {
        level: 'Expert Level: Technical Lead / Architect',
        timeframe: '8+ years experience',
        description: 'Set technical direction, oversee complex systems, and focus on high-level architecture.',
        roles: 'Principal Engineer, Software Architect, Technical Director'
      },
      {
        level: 'Management Track',
        timeframe: 'Varies',
        description: 'Move into people management, focus on team productivity and project delivery.',
        roles: 'Engineering Manager, Director of Engineering, CTO'
      }
    ],
    
    careerInsight: 'Software development offers multiple career tracks based on your interests: technical specialization, architecture, management, or product-focused roles. Most companies value continuous improvement and real-world problem-solving skills over specific degrees.',
    
    onlineCourses: [
      {
        name: 'freeCodeCamp - Full Stack Web Development',
        url: 'https://www.freecodecamp.org/'
      },
      {
        name: 'Codecademy - Learn to Code',
        url: 'https://www.codecademy.com/'
      },
      {
        name: 'Udemy - The Complete Web Developer Course',
        url: 'https://www.udemy.com/'
      },
      {
        name: 'Coursera - Computer Science Career Path',
        url: 'https://www.coursera.com/'
      }
    ],
    
    books: [
      {
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin'
      },
      {
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author: 'Gang of Four'
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas'
      },
      {
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell'
      }
    ],
    
    communities: [
      {
        name: 'Stack Overflow',
        description: 'Q&A community for programmers',
        url: 'https://stackoverflow.com/'
      },
      {
        name: 'GitHub',
        description: 'Platform for open-source collaboration',
        url: 'https://github.com/'
      },
      {
        name: 'Dev.to',
        description: 'Community of software developers',
        url: 'https://dev.to/'
      },
      {
        name: 'Reddit - r/learnprogramming',
        description: 'Subreddit for beginners learning to code',
        url: 'https://www.reddit.com/r/learnprogramming/'
      }
    ],
    
    relatedPaths: ['data-science', 'cloud-devops', 'product-design'],
    
    roles: [
      {
        title: 'Frontend Developer',
        skills: ['HTML/CSS', 'JavaScript', 'React/Angular/Vue', 'Responsive Design'],
        salary: '$75,000 - $120,000',
        certifications: ['Meta Front-End Developer', 'JavaScript Certification'],
        description: 'Create the user interface and user experience of websites and applications.'
      },
      {
        title: 'Backend Developer',
        skills: ['Python', 'Java', 'Node.js', 'Databases', 'API Design'],
        salary: '$85,000 - $140,000',
        certifications: ['AWS Certified Developer', 'Oracle Certified Professional'],
        description: 'Build server-side logic, databases, and application integration.'
      },
      {
        title: 'Full Stack Developer',
        skills: ['Frontend & Backend Technologies', 'DevOps', 'System Architecture'],
        salary: '$90,000 - $150,000',
        certifications: ['Full Stack Web Developer Certification', 'MongoDB Certification'],
        description: 'Handle both client and server-side development for complete web applications.'
      },
      {
        title: 'Mobile Developer',
        skills: ['Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter'],
        salary: '$80,000 - $130,000',
        certifications: ['Android Certified Developer', 'Apple Certified iOS Developer'],
        description: 'Create applications for mobile devices across various platforms.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems, networks, and programs from digital attacks.',
    longDescription: "Cybersecurity professionals protect organizations from digital threats by identifying vulnerabilities, implementing security measures, and responding to incidents. In this ever-evolving field, you'll defend critical systems against hackers, malware, and other cyber threats.",
    icon: <Shield className="h-8 w-8 text-red-600" />,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    animation: '/animations/cybersecurity.json',
    growthPotential: 'Projected 33% growth over the next decade, much faster than average',
    salaryRange: '$85,000 - $160,000 depending on role and specialization',
    keySkills: ['Network Security', 'Threat Analysis', 'Security Tools', 'Risk Assessment', 'Incident Response'],
    educationRequirements: "Bachelor's degree in Cybersecurity, Computer Science or related field (certifications highly valued)",
    jobOutlook: 'Excellent, with severe talent shortage projected to continue',
    topCertifications: 'CISSP, CEH, CompTIA Security+, CISM',
    learningResources: 'TryHackMe, HackTheBox, Cybrary, SANS courses',
    
    technicalSkills: [
      'Network security and architecture',
      'Security information and event management (SIEM)',
      'Penetration testing and vulnerability assessment',
      'Encryption technologies',
      'Firewall and intrusion detection systems',
      'Operating system security',
      'Cloud security',
      'Scripting and programming basics'
    ],
    
    softSkills: [
      'Analytical thinking and problem solving',
      'Attention to detail',
      'Communication skills',
      'Crisis management',
      'Continuous learning mindset',
      'Ethical judgment',
      'Teamwork'
    ],
    
    technologies: [
      'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite',
      'Splunk', 'Kali Linux', 'Snort', 'OpenVAS',
      'Hashcat', 'John the Ripper', 'OSSEC', 'ArcSight'
    ],
    
    skillTip: 'Successful cybersecurity professionals combine strong technical knowledge with an understanding of human behavior. Think like an attacker but act ethically as a defender.',
    
    formalEducation: 'Educational pathways for cybersecurity careers include:',
    educationPaths: [
      "Bachelor's degree in Cybersecurity, Computer Science, IT, or related field",
      "Master's degree in Cybersecurity or specialization (Digital Forensics, Security Management)",
      "Associate's degree in Cybersecurity or Information Technology",
      'Military cybersecurity training and experience'
    ],
    
    certifications: [
      {
        name: 'Certified Information Systems Security Professional (CISSP)',
        description: 'Advanced certification covering security and risk management, asset security, security engineering, and more'
      },
      {
        name: 'Certified Ethical Hacker (CEH)',
        description: 'Focuses on ethical hacking methodologies, tools, and techniques for identifying vulnerabilities'
      },
      {
        name: 'CompTIA Security+',
        description: 'Entry-level certification covering network security, compliance, threats, vulnerabilities, and more'
      },
      {
        name: 'Certified Information Security Manager (CISM)',
        description: 'Management-focused certification emphasizing security governance and program development'
      },
      {
        name: 'Offensive Security Certified Professional (OSCP)',
        description: 'Hands-on penetration testing certification requiring successful completion of a 24-hour lab exam'
      }
    ],
    
    alternativeLearning: 'Alternative paths to enter the cybersecurity field:',
    alternativePaths: [
      'Bootcamps focused on cybersecurity skills',
      'Self-study with practical labs and CTF challenges',
      'Transition from IT roles (system administrator, network engineer)',
      'Industry mentorship programs',
      'Open-source security project contributions'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Security Analyst',
        timeframe: '0-2 years experience',
        description: 'Monitor security systems, respond to alerts, implement basic security controls, and contribute to documentation.',
        roles: 'Security Analyst, Information Security Analyst, SOC Analyst'
      },
      {
        level: 'Mid Level: Security Engineer',
        timeframe: '3-5 years experience',
        description: 'Design security solutions, conduct assessments, manage security tools, and lead incident responses.',
        roles: 'Security Engineer, Cybersecurity Specialist, Penetration Tester'
      },
      {
        level: 'Senior Level: Security Architect',
        timeframe: '5-8 years experience',
        description: 'Develop security architecture, frameworks, and strategies. Provide technical leadership on security initiatives.',
        roles: 'Security Architect, Senior Security Engineer, Lead Penetration Tester'
      },
      {
        level: 'Expert Level: Security Director',
        timeframe: '8+ years experience',
        description: 'Set security vision, manage large-scale programs, oversee multiple security domains, and engage with executives.',
        roles: 'Director of Information Security, CISO, Principal Security Consultant'
      }
    ],
    
    careerInsight: 'Cybersecurity offers exceptional career stability and multiple specialization paths. Professionals can focus on offensive security (penetration testing), defensive operations, governance, or emerging areas like cloud security and IoT. Hands-on experience remains one of the most valuable qualifications.',
    
    onlineCourses: [
      {
        name: 'TryHackMe - Hands-on Cybersecurity Training',
        url: 'https://tryhackme.com/'
      },
      {
        name: 'Hack The Box - Penetration Testing Labs',
        url: 'https://www.hackthebox.eu/'
      },
      {
        name: 'Cybrary - Free and Premium Cybersecurity Courses',
        url: 'https://www.cybrary.it/'
      },
      {
        name: 'SANS - Professional Cybersecurity Training',
        url: 'https://www.sans.org/cyber-security-courses/'
      }
    ],
    
    books: [
      {
        title: 'The Art of Deception',
        author: 'Kevin Mitnick'
      },
      {
        title: 'Blue Team Handbook',
        author: 'Don Murdoch'
      },
      {
        title: 'RTFM: Red Team Field Manual',
        author: 'Ben Clark'
      },
      {
        title: 'Practical Malware Analysis',
        author: 'Michael Sikorski and Andrew Honig'
      }
    ],
    
    communities: [
      {
        name: 'OWASP (Open Web Application Security Project)',
        description: 'Community focused on web application security',
        url: 'https://owasp.org/'
      },
      {
        name: 'Reddit - r/netsec',
        description: 'Community for network security news and discussion',
        url: 'https://www.reddit.com/r/netsec/'
      },
      {
        name: 'Bugcrowd Forum',
        description: 'Community for bug bounty hunters',
        url: 'https://forum.bugcrowd.com/'
      },
      {
        name: 'DEF CON Groups',
        description: 'Local groups inspired by the DEF CON conference',
        url: 'https://www.defcon.org/html/defcon-groups/dc-groups.html'
      }
    ],
    
    relatedPaths: ['cloud-devops', 'it-support', 'software-development'],
    
    roles: [
      {
        title: 'Security Analyst',
        skills: ['Security Information Systems', 'Threat Detection', 'Risk Assessment'],
        salary: '$85,000 - $130,000',
        certifications: ['CompTIA Security+', 'Certified Information Systems Security Professional (CISSP)'],
        description: 'Monitor and analyze security systems and respond to security breaches.'
      },
      {
        title: 'Ethical Hacker',
        skills: ['Penetration Testing', 'Vulnerability Assessment', 'Coding'],
        salary: '$90,000 - $150,000',
        certifications: ['Certified Ethical Hacker (CEH)', 'GIAC Penetration Tester'],
        description: 'Identify and fix security vulnerabilities before malicious hackers can exploit them.'
      },
      {
        title: 'Security Engineer',
        skills: ['Network Security', 'Security Architecture', 'Secure Coding Practices'],
        salary: '$100,000 - $160,000',
        certifications: ['Certified Information Security Manager (CISM)', 'GIAC Security Essentials'],
        description: 'Design and implement security solutions to protect organizational assets.'
      },
      {
        title: 'Incident Responder',
        skills: ['Digital Forensics', 'Malware Analysis', 'Threat Hunting'],
        salary: '$95,000 - $145,000',
        certifications: ['GIAC Certified Incident Handler', 'Certified Computer Forensic Examiner'],
        description: 'Investigate and mitigate security breaches and cyber attacks.'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Extract insights and build predictive models from complex data.',
    longDescription: "Data science combines statistics, mathematics, programming, and domain expertise to extract actionable insights from data. As a data professional, you'll analyze patterns, build models, and help organizations make data-driven decisions across business, healthcare, finance, and more.",
    icon: <Database className="h-8 w-8 text-purple-600" />,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    animation: '/animations/data-science.json',
    growthPotential: 'Projected 31% growth over the next decade, particularly for AI and machine learning specialists',
    salaryRange: '$70,000 - $180,000 depending on role, experience, and location',
    keySkills: ['Python/R', 'Statistics', 'Machine Learning', 'Data Visualization', 'SQL', 'Problem Solving'],
    educationRequirements: "Bachelor's or Master's degree in Data Science, Statistics, Computer Science, or related field",
    jobOutlook: 'Excellent, with demand across virtually all industries',
    topCertifications: 'Microsoft Certified: Azure Data Scientist, Google Professional Data Engineer, AWS Certified Data Analytics',
    learningResources: 'Kaggle, DataCamp, Coursera, edX, fast.ai',
    
    technicalSkills: [
      'Programming in Python, R, or SQL',
      'Statistical analysis and hypothesis testing',
      'Machine learning algorithms and frameworks',
      'Data cleaning and preprocessing',
      'Data visualization tools (Tableau, Power BI, matplotlib)',
      'Big data technologies (Hadoop, Spark)',
      'Deep learning frameworks (TensorFlow, PyTorch)',
      'Database management'
    ],
    
    softSkills: [
      'Analytical thinking',
      'Problem-solving',
      'Communication of technical concepts',
      'Business acumen',
      'Curiosity and research mindset',
      'Teamwork and collaboration',
      'Project management'
    ],
    
    technologies: [
      'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch',
      'Scikit-learn', 'Pandas', 'NumPy', 'Keras',
      'Tableau', 'Power BI', 'Spark', 'Hadoop'
    ],
    
    skillTip: 'The most effective data scientists combine strong technical skills with domain expertise and business acumen. Always focus on the real-world impact of your models and analyses.',
    
    formalEducation: 'Traditional education paths for data science include:',
    educationPaths: [
      "Bachelor's degree in Data Science, Computer Science, Statistics, Mathematics, or related field",
      "Master's degree in Data Science, Machine Learning, or Artificial Intelligence",
      'PhD for research-focused roles, especially in AI research',
      'Specialized courses in specific domains (biostatistics, financial analytics, etc.)'
    ],
    
    certifications: [
      {
        name: 'Microsoft Certified: Azure Data Scientist Associate',
        description: 'Validates skills in using Azure services to prepare, transform, model, and visualize data'
      },
      {
        name: 'Google Professional Data Engineer',
        description: 'Certifies ability to design and build data processing systems on Google Cloud'
      },
      {
        name: 'IBM Data Science Professional Certificate',
        description: 'Covers data science methodology, Python programming, databases, visualization, analysis, and machine learning'
      },
      {
        name: 'AWS Certified Data Analytics - Specialty',
        description: 'Validates expertise in AWS data lakes, data processing, security, and analysis services'
      },
      {
        name: 'TensorFlow Developer Certificate',
        description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems'
      }
    ],
    
    alternativeLearning: 'Alternative paths to enter data science:',
    alternativePaths: [
      'Bootcamps specializing in data science and machine learning',
      'Self-directed learning through online courses and competitions',
      'Transitioning from related fields (statistics, programming, domain expertise)',
      'Building a portfolio of personal data projects',
      'Contributing to open-source data science tools or research'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Data Analyst',
        timeframe: '0-2 years experience',
        description: 'Focus on data cleaning, basic analysis, and visualization. Support decision-making with reports and dashboards.',
        roles: 'Data Analyst, Business Intelligence Analyst, Junior Data Scientist'
      },
      {
        level: 'Mid Level: Data Scientist',
        timeframe: '2-5 years experience',
        description: 'Build predictive models, extract insights from complex data, and lead data-driven projects.',
        roles: 'Data Scientist, Machine Learning Engineer, Analytics Specialist'
      },
      {
        level: 'Senior Level: Senior Data Scientist',
        timeframe: '5-8 years experience',
        description: 'Develop sophisticated models, architect data solutions, and mentor junior team members.',
        roles: 'Senior Data Scientist, Lead ML Engineer, Data Science Manager'
      },
      {
        level: 'Expert Level: Principal Data Scientist',
        timeframe: '8+ years experience',
        description: 'Set data strategy, innovate new methodologies, and drive organizational data culture.',
        roles: 'Principal Data Scientist, Chief Data Scientist, Director of Analytics'
      }
    ],
    
    careerInsight: "Data science isn't a monolithic field—professionals typically specialize in areas like machine learning engineering, computer vision, NLP, business analytics, or research. Your career path can emphasize engineering, science, or business aspects depending on your strengths and interests.",
    
    onlineCourses: [
      {
        name: 'Kaggle Courses - Free Data Science and ML Tutorials',
        url: 'https://www.kaggle.com/learn'
      },
      {
        name: 'DataCamp - Interactive Data Science Courses',
        url: 'https://www.datacamp.com/'
      },
      {
        name: 'Coursera - Data Science Specialization (Johns Hopkins)',
        url: 'https://www.coursera.org/specializations/jhu-data-science'
      },
      {
        name: 'fast.ai - Practical Deep Learning for Coders',
        url: 'https://www.fast.ai/'
      }
    ],
    
    books: [
      {
        title: 'Python for Data Analysis',
        author: 'Wes McKinney'
      },
      {
        title: 'Hands-On Machine Learning with Scikit-Learn and TensorFlow',
        author: 'Aurélien Géron'
      },
      {
        title: 'The Elements of Statistical Learning',
        author: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman'
      },
      {
        title: 'Deep Learning',
        author: 'Ian Goodfellow, Yoshua Bengio, and Aaron Courville'
      }
    ],
    
    communities: [
      {
        name: 'Kaggle',
        description: 'Platform for data science competitions and community',
        url: 'https://www.kaggle.com/'
      },
      {
        name: 'Reddit - r/datascience',
        description: 'Community for data science discussions',
        url: 'https://www.reddit.com/r/datascience/'
      },
      {
        name: 'Data Science Stack Exchange',
        description: 'Q&A community for data science',
        url: 'https://datascience.stackexchange.com/'
      },
      {
        name: 'PyData',
        description: 'Community around open-source data science tools',
        url: 'https://pydata.org/'
      }
    ],
    
    relatedPaths: ['software-development', 'cloud-devops', 'business-analysis'],
    
    roles: [
      {
        title: 'Data Analyst',
        skills: ['SQL', 'Excel', 'Data Visualization (Tableau/Power BI)', 'Statistics'],
        salary: '$65,000 - $95,000',
        certifications: ['Microsoft Certified: Data Analyst Associate', 'IBM Data Analyst Professional'],
        description: 'Transform and analyze data to support business decision-making.'
      },
      {
        title: 'Data Scientist',
        skills: ['Python/R', 'Machine Learning', 'Statistical Analysis', 'Big Data'],
        salary: '$95,000 - $165,000',
        certifications: ['IBM Data Science Professional', 'Google Data Analytics Professional'],
        description: 'Apply algorithms, statistical models, and machine learning to extract patterns from data.'
      },
      {
        title: 'AI Engineer',
        skills: ['Deep Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision'],
        salary: '$110,000 - $180,000',
        certifications: ['Microsoft Certified: Azure AI Engineer', 'TensorFlow Developer Certificate'],
        description: 'Design and implement AI systems that can perform tasks that typically require human intelligence.'
      },
      {
        title: 'Data Engineer',
        skills: ['ETL Pipelines', 'SQL/NoSQL', 'Big Data Technologies (Hadoop, Spark)', 'Cloud Services'],
        salary: '$90,000 - $150,000', 
        certifications: ['Google Cloud Professional Data Engineer', 'AWS Certified Data Analytics'],
        description: 'Build and maintain data pipelines and infrastructure for data scientists and analysts.'
      },
      {
        title: 'Machine Learning Engineer',
        skills: ['ML Algorithms', 'Software Engineering', 'Model Deployment', 'MLOps'],
        salary: '$100,000 - $170,000',
        certifications: ['AWS Certified Machine Learning', 'Google Professional Machine Learning Engineer'],
        description: 'Design and implement machine learning systems for production environments.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    description: 'Build, deploy, and manage applications in cloud environments.',
    longDescription: "Cloud computing and DevOps professionals bridge development and operations, automating and streamlining the process of building, deploying, and scaling applications in cloud environments. In this field, you'll work with cutting-edge technologies to create efficient, resilient infrastructure that powers modern applications.",
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    animation: '/animations/cloud-computing.json',
    growthPotential: 'Projected 25% growth over the next decade',
    salaryRange: '$90,000 - $180,000 depending on role and expertise',
    keySkills: ['Cloud Platforms', 'Infrastructure as Code', 'Containerization', 'CI/CD', 'Automation', 'Monitoring'],
    educationRequirements: "Bachelor's degree in Computer Science or IT-related field (experience and certifications often valued over degrees)",
    jobOutlook: 'Excellent, with consistent growth as cloud adoption increases',
    topCertifications: 'AWS Solutions Architect, Azure Administrator, Google Cloud Engineer, Kubernetes (CKA), Terraform',
    learningResources: 'A Cloud Guru, Pluralsight, Linux Academy, Cloud documentation',
    
    technicalSkills: [
      'Cloud platforms (AWS, Azure, GCP)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Containerization and orchestration (Docker, Kubernetes)',
      'CI/CD tools (Jenkins, GitHub Actions, GitLab CI)',
      'Configuration management (Ansible, Chef, Puppet)',
      'Scripting and automation (Python, Bash)',
      'Monitoring and logging tools (Prometheus, Grafana, ELK)',
      'Networking and security fundamentals'
    ],
    
    softSkills: [
      'Problem-solving',
      'Continuous learning mindset',
      'Communication and collaboration',
      'Systems thinking',
      'Change management',
      'Time management',
      'Documentation skills'
    ],
    
    technologies: [
      'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
      'Terraform', 'Jenkins', 'GitHub Actions', 'Ansible',
      'Prometheus', 'Grafana', 'Nginx', 'Linux'
    ],
    
    skillTip: 'Focus on both breadth and depth: understand core cloud concepts across platforms, but develop deeper expertise in one cloud provider. Automation skills are essential for scaling your impact.',
    
    formalEducation: 'Educational backgrounds for cloud and DevOps professionals:',
    educationPaths: [
      "Bachelor's degree in Computer Science, Information Technology, or related field",
      "Master's degree in Cloud Computing, DevOps Engineering, or similar",
      "Associate's degree in Network Administration or Cloud Technologies",
      'Technical certifications from major cloud providers and technology vendors'
    ],
    
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        description: 'Validates ability to design and deploy systems on AWS'
      },
      {
        name: 'Microsoft Certified: Azure Administrator',
        description: 'Demonstrates skills in implementing, monitoring, and maintaining Azure resources'
      },
      {
        name: 'Google Cloud Professional Cloud Architect',
        description: 'Shows proficiency in designing, developing, and managing Google Cloud solutions'
      },
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        description: 'Validates skills in Kubernetes installation, configuration, and management'
      },
      {
        name: 'HashiCorp Certified: Terraform Associate',
        description: 'Verifies ability to build, change, and destroy infrastructure using Terraform'
      }
    ],
    
    alternativeLearning: 'Alternative paths to enter cloud and DevOps:',
    alternativePaths: [
      'Transitioning from system administration or network engineering',
      'Moving from software development roles',
      'Self-study with cloud provider free tiers and labs',
      'Contributing to open-source DevOps tools',
      'Building personal projects using cloud infrastructure'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Cloud Support / Junior DevOps',
        timeframe: '0-2 years experience',
        description: 'Support existing infrastructure, assist with deployments, learn cloud platforms, and help with monitoring.',
        roles: 'Junior DevOps Engineer, Cloud Support Engineer, Operations Analyst'
      },
      {
        level: 'Mid Level: DevOps Engineer / Cloud Engineer',
        timeframe: '2-5 years experience',
        description: 'Implement infrastructure as code, automate processes, manage CI/CD pipelines, and improve system reliability.',
        roles: 'DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE)'
      },
      {
        level: 'Senior Level: Senior DevOps / Cloud Architect',
        timeframe: '5-8 years experience',
        description: 'Design complex systems, establish best practices, lead migration strategies, and mentor junior engineers.',
        roles: 'Senior DevOps Engineer, Cloud Architect, Platform Engineer'
      },
      {
        level: 'Expert Level: Principal Engineer / Technical Director',
        timeframe: '8+ years experience',
        description: 'Set technical direction, design enterprise-wide solutions, and drive cloud strategy and transformation.',
        roles: 'Principal Cloud Architect, DevOps Director, Head of Infrastructure'
      }
    ],
    
    careerInsight: 'The most successful cloud and DevOps professionals have T-shaped skills: broad knowledge across multiple disciplines with deep expertise in specific areas. This field rewards continuous learning and experimentation as technologies evolve rapidly.',
    
    onlineCourses: [
      {
        name: 'A Cloud Guru - AWS, Azure, GCP, and DevOps Courses',
        url: 'https://acloudguru.com/'
      },
      {
        name: 'Pluralsight - Cloud Computing and DevOps Path',
        url: 'https://www.pluralsight.com/'
      },
      {
        name: 'Linux Academy - Hands-on Labs',
        url: 'https://linuxacademy.com/'
      },
      {
        name: 'KodeKloud - DevOps, Kubernetes, and Docker Training',
        url: 'https://kodekloud.com/'
      }
    ],
    
    books: [
      {
        title: 'The Phoenix Project',
        author: 'Gene Kim, Kevin Behr, and George Spafford'
      },
      {
        title: 'Infrastructure as Code',
        author: 'Kief Morris'
      },
      {
        title: 'Site Reliability Engineering: How Google Runs Production Systems',
        author: 'Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy'
      },
      {
        title: 'Kubernetes: Up and Running',
        author: 'Brendan Burns, Joe Beda, and Kelsey Hightower'
      }
    ],
