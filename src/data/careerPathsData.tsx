
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
    longDescription: 'Software development is a dynamic and creative field focused on designing, coding, testing, and maintaining computer programs. As a software developer, you'll solve complex problems, build innovative applications, and contribute to products that impact millions of users worldwide.',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    animation: '/animations/software-development.json',
    growthPotential: 'Projected 22% growth over the next decade',
    salaryRange: '$75,000 - $150,000 depending on specialization',
    keySkills: ['Programming', 'Problem Solving', 'Software Design', 'Testing', 'Debugging', 'Version Control'],
    educationRequirements: 'Bachelor's degree in Computer Science or related field (some roles accessible with bootcamp certificates and portfolios)',
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
      'Bachelor's degree in Computer Science, Software Engineering, or related field',
      'Master's degree for specialized roles (AI, machine learning, security)',
      'Associate's degree in Computer Science or Programming',
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
        url: 'https://www.coursera.org/'
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
    longDescription: 'Cybersecurity professionals protect organizations from digital threats by identifying vulnerabilities, implementing security measures, and responding to incidents. In this ever-evolving field, you'll defend critical systems against hackers, malware, and other cyber threats.',
    icon: <Shield className="h-8 w-8 text-red-600" />,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    animation: '/animations/cybersecurity.json',
    growthPotential: 'Projected 33% growth over the next decade, much faster than average',
    salaryRange: '$85,000 - $160,000 depending on role and specialization',
    keySkills: ['Network Security', 'Threat Analysis', 'Security Tools', 'Risk Assessment', 'Incident Response'],
    educationRequirements: 'Bachelor's degree in Cybersecurity, Computer Science or related field (certifications highly valued)',
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
      'Bachelor's degree in Cybersecurity, Computer Science, IT, or related field',
      'Master's degree in Cybersecurity or specialization (Digital Forensics, Security Management)',
      'Associate's degree in Cybersecurity or Information Technology',
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
    longDescription: 'Data science combines statistics, mathematics, programming, and domain expertise to extract actionable insights from data. As a data professional, you'll analyze patterns, build models, and help organizations make data-driven decisions across business, healthcare, finance, and more.',
    icon: <Database className="h-8 w-8 text-purple-600" />,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    animation: '/animations/data-science.json',
    growthPotential: 'Projected 31% growth over the next decade, particularly for AI and machine learning specialists',
    salaryRange: '$70,000 - $180,000 depending on role, experience, and location',
    keySkills: ['Python/R', 'Statistics', 'Machine Learning', 'Data Visualization', 'SQL', 'Problem Solving'],
    educationRequirements: 'Bachelor's or Master's degree in Data Science, Statistics, Computer Science, or related field',
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
      'Bachelor's degree in Data Science, Computer Science, Statistics, Mathematics, or related field',
      'Master's degree in Data Science, Machine Learning, or Artificial Intelligence',
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
    
    careerInsight: 'Data science isn't a monolithic field—professionals typically specialize in areas like machine learning engineering, computer vision, NLP, business analytics, or research. Your career path can emphasize engineering, science, or business aspects depending on your strengths and interests.',
    
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
    longDescription: 'Cloud computing and DevOps professionals bridge development and operations, automating and streamlining the process of building, deploying, and scaling applications in cloud environments. In this field, you'll work with cutting-edge technologies to create efficient, resilient infrastructure that powers modern applications.',
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    animation: '/animations/cloud-computing.json',
    growthPotential: 'Projected 25% growth over the next decade',
    salaryRange: '$90,000 - $180,000 depending on role and expertise',
    keySkills: ['Cloud Platforms', 'Infrastructure as Code', 'Containerization', 'CI/CD', 'Automation', 'Monitoring'],
    educationRequirements: 'Bachelor's degree in Computer Science or IT-related field (experience and certifications often valued over degrees)',
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
      'Bachelor's degree in Computer Science, Information Technology, or related field',
      'Master's degree in Cloud Computing, DevOps Engineering, or similar',
      'Associate's degree in Network Administration or Cloud Technologies',
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
    
    communities: [
      {
        name: 'DevOps Stack Exchange',
        description: 'Q&A platform for DevOps professionals',
        url: 'https://devops.stackexchange.com/'
      },
      {
        name: 'Reddit - r/devops',
        description: 'Community for DevOps discussions',
        url: 'https://www.reddit.com/r/devops/'
      },
      {
        name: 'Kubernetes Slack',
        description: 'Slack community for Kubernetes users',
        url: 'https://kubernetes.slack.com/'
      },
      {
        name: 'AWS, Azure, and GCP Community forums',
        description: 'Official forums for major cloud providers',
        url: 'https://aws.amazon.com/forums/'
      }
    ],
    
    relatedPaths: ['software-development', 'cybersecurity', 'it-support'],
    
    roles: [
      {
        title: 'Cloud Engineer',
        skills: ['AWS/Azure/GCP', 'Cloud Architecture', 'IaaS, PaaS, SaaS'],
        salary: '$90,000 - $140,000',
        certifications: ['AWS Certified Solutions Architect', 'Microsoft Certified: Azure Solutions Architect'],
        description: 'Design and implement cloud-based solutions for organizations.'
      },
      {
        title: 'DevOps Engineer',
        skills: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Automation'],
        salary: '$100,000 - $160,000',
        certifications: ['AWS Certified DevOps Engineer', 'Docker Certified Associate'],
        description: 'Bridge software development and IT operations to improve deployment frequency and reliability.'
      },
      {
        title: 'Site Reliability Engineer',
        skills: ['Monitoring', 'Incident Response', 'System Design', 'Performance Optimization'],
        salary: '$120,000 - $180,000',
        certifications: ['Google Professional Cloud DevOps Engineer', 'Kubernetes Administrator (CKA)'],
        description: 'Focus on availability, latency, performance, and capacity of software systems.'
      },
      {
        title: 'Cloud Solutions Architect',
        skills: ['Multi-cloud Strategy', 'Solution Design', 'Migration Planning', 'Cost Optimization'],
        salary: '$110,000 - $175,000',
        certifications: ['AWS Solutions Architect Professional', 'Google Professional Cloud Architect'],
        description: 'Design and plan cloud architecture solutions that meet business requirements.'
      }
    ]
  },
  {
    id: 'it-support',
    title: 'IT Support & Networking',
    description: 'Maintain and optimize IT infrastructure and provide technical support.',
    longDescription: 'IT Support and Networking professionals keep organizations running by maintaining computer systems, networks, and providing technical assistance to users. In this field, you'll troubleshoot issues, implement IT solutions, and ensure that technology infrastructure operates efficiently and securely.',
    icon: <Laptop className="h-8 w-8 text-green-600" />,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    animation: '/animations/it-support.json',
    growthPotential: 'Projected 15% growth over the next decade',
    salaryRange: '$45,000 - $120,000 depending on specialization and level',
    keySkills: ['Troubleshooting', 'Networking', 'System Administration', 'Customer Service', 'Security Basics'],
    educationRequirements: 'Associate's degree or technical certifications (many enter with high school diploma and certifications)',
    jobOutlook: 'Steady, with opportunities for advancement into specialized roles',
    topCertifications: 'CompTIA A+, Network+, CCNA, Microsoft Certified, ITIL',
    learningResources: 'Professor Messer, TechNet, Cisco Learning Network, Microsoft Learn',
    
    technicalSkills: [
      'Operating systems (Windows, macOS, Linux)',
      'Network technologies and protocols',
      'Hardware troubleshooting and maintenance',
      'Active Directory and user management',
      'VPN and remote access technologies',
      'Basic security principles',
      'Help desk and ticketing systems',
      'Virtualization and cloud technologies'
    ],
    
    softSkills: [
      'Communication with non-technical users',
      'Problem-solving and critical thinking',
      'Patience and empathy',
      'Time management and prioritization',
      'Documentation abilities',
      'Teamwork',
      'Adaptability'
    ],
    
    technologies: [
      'Windows Server', 'Active Directory', 'Cisco IOS',
      'VMware', 'Azure/AWS basics', 'Microsoft 365',
      'TCP/IP', 'VPN', 'DHCP', 'DNS', 'Firewall'
    ],
    
    skillTip: 'Develop strong documentation habits early in your career. Well-documented solutions not only help your team but build your reputation as a thorough professional and make knowledge transfer easier.',
    
    formalEducation: 'Educational paths for IT support and networking roles:',
    educationPaths: [
      'Associate's degree in Information Technology, Computer Networking, or similar',
      'Bachelor's degree in IT, Network Administration, or Computer Science',
      'Technical training programs at community colleges',
      'Vendor-specific certification programs (Cisco, Microsoft, CompTIA)'
    ],
    
    certifications: [
      {
        name: 'CompTIA A+',
        description: 'Entry-level certification for IT support roles covering hardware, software, and operating systems'
      },
      {
        name: 'CompTIA Network+',
        description: 'Validates knowledge of network concepts, infrastructure, operations, and troubleshooting'
      },
      {
        name: 'Cisco Certified Network Associate (CCNA)',
        description: 'Demonstrates ability to install, configure, and operate network technologies'
      },
      {
        name: 'Microsoft 365 Certified: Modern Desktop Administrator',
        description: 'Shows proficiency in deploying, configuring, and maintaining Windows 10 and M365 services'
      },
      {
        name: 'ITIL Foundation',
        description: 'Covers IT service management best practices and processes'
      }
    ],
    
    alternativeLearning: 'Alternative paths to enter IT support and networking:',
    alternativePaths: [
      'Help desk or call center roles as entry points',
      'Self-study with home labs and virtual environments',
      'Apprenticeships and on-the-job training',
      'Military IT experience',
      'Volunteer IT support for non-profits and community organizations'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Help Desk Technician / Support Specialist',
        timeframe: '0-2 years experience',
        description: 'Handle basic user issues, troubleshoot common problems, and escalate complex issues.',
        roles: 'Help Desk Technician, IT Support Specialist, Technical Support Representative'
      },
      {
        level: 'Mid Level: IT Support Technician / Network Admin',
        timeframe: '2-5 years experience',
        description: 'Manage systems, implement solutions, configure networks, and handle complex issues.',
        roles: 'IT Technician, Network Administrator, Desktop Support Specialist'
      },
      {
        level: 'Senior Level: Senior Systems Administrator',
        timeframe: '5-8 years experience',
        description: 'Design infrastructure, implement enterprise solutions, and lead technical projects.',
        roles: 'Senior Systems Administrator, Network Engineer, IT Infrastructure Specialist'
      },
      {
        level: 'Expert Level: IT Infrastructure Manager',
        timeframe: '8+ years experience',
        description: 'Oversee IT operations, develop technology strategies, and manage technical teams.',
        roles: 'IT Manager, Infrastructure Manager, Technical Operations Director'
      }
    ],
    
    careerInsight: 'IT support is an excellent entry point into tech careers, providing exposure to various technologies and business processes. Many successful IT professionals start in support roles and specialize based on interests developed through this hands-on experience.',
    
    onlineCourses: [
      {
        name: 'Professor Messer - Free CompTIA Courses',
        url: 'https://www.professormesser.com/'
      },
      {
        name: 'Microsoft Learn - MS Technologies Training',
        url: 'https://learn.microsoft.com/'
      },
      {
        name: 'Cisco Learning Network - Networking Courses',
        url: 'https://learningnetwork.cisco.com/'
      },
      {
        name: 'Google IT Support Professional Certificate (Coursera)',
        url: 'https://www.coursera.org/professional-certificates/google-it-support'
      }
    ],
    
    books: [
      {
        title: 'CompTIA A+ Certification All-in-One Exam Guide',
        author: 'Mike Meyers'
      },
      {
        title: 'Networking Essentials',
        author: 'Jeffrey S. Beasley and Piyasat Nilkaew'
      },
      {
        title: 'Windows Server Administration Fundamentals',
        author: 'Microsoft Official Academic Course'
      },
      {
        title: 'The Practice of System and Network Administration',
        author: 'Thomas A. Limoncelli, Christina J. Hogan, and Strata R. Chalup'
      }
    ],
    
    communities: [
      {
        name: 'Spiceworks Community',
        description: 'Forum for IT professionals',
        url: 'https://community.spiceworks.com/'
      },
      {
        name: 'Reddit - r/sysadmin',
        description: 'Community for system administrators',
        url: 'https://www.reddit.com/r/sysadmin/'
      },
      {
        name: 'Server Fault',
        description: 'Q&A site for system and network administrators',
        url: 'https://serverfault.com/'
      },
      {
        name: 'TechNet Forums',
        description: 'Microsoft technical community',
        url: 'https://social.technet.microsoft.com/Forums/'
      }
    ],
    
    relatedPaths: ['cloud-devops', 'cybersecurity', 'software-development'],
    
    roles: [
      {
        title: 'IT Support Specialist',
        skills: ['Technical Troubleshooting', 'Desktop Support', 'Customer Service'],
        salary: '$45,000 - $80,000',
        certifications: ['CompTIA A+', 'Microsoft Certified: Modern Desktop Administrator'],
        description: 'Provide technical assistance to computer users and resolve hardware/software issues.'
      },
      {
        title: 'Network Administrator',
        skills: ['Network Protocols', 'Routing/Switching', 'Network Security'],
        salary: '$65,000 - $110,000',
        certifications: ['CompTIA Network+', 'Cisco Certified Network Associate (CCNA)'],
        description: 'Maintain and administer computer networks and related computing environments.'
      },
      {
        title: 'System Administrator',
        skills: ['Windows/Linux', 'Server Management', 'Virtualization'],
        salary: '$70,000 - $120,000',
        certifications: ['Red Hat Certified System Administrator', 'Microsoft Certified: Windows Server'],
        description: 'Configure, maintain, and ensure the reliable operation of computer systems.'
      },
      {
        title: 'Help Desk Technician',
        skills: ['Technical Support', 'Problem Diagnosis', 'User Assistance'],
        salary: '$40,000 - $65,000',
        certifications: ['CompTIA A+', 'ITIL Foundation'],
        description: 'Provide first-line technical support and troubleshooting for users.'
      }
    ]
  },
  {
    id: 'product-design',
    title: 'Product & UI/UX Design',
    description: 'Create intuitive, user-friendly digital products and experiences.',
    longDescription: 'Product and UI/UX designers create digital experiences that are both visually appealing and functionally intuitive. As a designer in this field, you'll research user needs, create wireframes and prototypes, and design interfaces that help users achieve their goals while aligning with business objectives.',
    icon: <Layout className="h-8 w-8 text-amber-600" />,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    animation: '/animations/product-design.json',
    growthPotential: 'Projected 20% growth over the next decade',
    salaryRange: '$65,000 - $150,000 based on role, location, and experience',
    keySkills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Visual Design', 'User-Centered Design'],
    educationRequirements: 'Bachelor's degree in Design, HCI, or related field (portfolio often more important than degree)',
    jobOutlook: 'Strong, with growing emphasis on user experience across industries',
    topCertifications: 'Nielsen Norman UX Certification, Google UX Design, Interaction Design Foundation',
    learningResources: 'Figma tutorials, Dribbble, Behance, UX Planet, A Book Apart',
    
    technicalSkills: [
      'Design tools (Figma, Sketch, Adobe XD)',
      'Wireframing and prototyping',
      'User research methodologies',
      'Information architecture',
      'Visual design principles',
      'Interaction design',
      'Usability testing',
      'HTML/CSS fundamentals (for design implementation)'
    ],
    
    softSkills: [
      'Empathy for users',
      'Communication and presentation',
      'Collaboration with developers and stakeholders',
      'Critical thinking',
      'Creative problem solving',
      'Giving and receiving critique',
      'Project management'
    ],
    
    technologies: [
      'Figma', 'Sketch', 'Adobe XD', 'InVision',
      'Axure', 'Principle', 'Zeplin', 'Abstract',
      'Miro', 'UserTesting', 'Optimal Workshop'
    ],
    
    skillTip: 'Great designers balance aesthetics with functionality. Always maintain focus on solving real user problems rather than just creating something visually impressive but difficult to use.',
    
    formalEducation: 'Educational backgrounds for design professionals:',
    educationPaths: [
      'Bachelor's degree in Graphic Design, UI/UX Design, Interaction Design, or HCI',
      'Master's degree in Human-Computer Interaction, User Experience, or Design',
      'Design bootcamps focused on UI/UX design',
      'Certificate programs in user experience or product design'
    ],
    
    certifications: [
      {
        name: 'Nielsen Norman Group UX Certification',
        description: 'Industry-recognized credential for UX professionals with specializations available'
      },
      {
        name: 'Google UX Design Professional Certificate',
        description: 'Comprehensive program covering UX research, wireframing, prototyping, and design'
      },
      {
        name: 'Interaction Design Foundation Certification',
        description: 'Courses and certification in various UX specialties'
      },
      {
        name: 'Adobe Certified Professional in UI/UX Design',
        description: 'Validates expertise with Adobe XD and design principles'
      }
    ],
    
    alternativeLearning: 'Alternative paths to enter design:',
    alternativePaths: [
      'Self-taught through online courses and tutorials',
      'Transitioning from graphic design, web development, or marketing',
      'Design bootcamps (intensive 3-6 month programs)',
      'Personal design projects and case studies',
      'Internships and junior positions with mentorship'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Junior Designer',
        timeframe: '0-2 years experience',
        description: 'Create wireframes, assist with research, and produce design assets under supervision.',
        roles: 'Junior UI Designer, UI/UX Designer, Visual Designer'
      },
      {
        level: 'Mid Level: Product Designer',
        timeframe: '2-5 years experience',
        description: 'Own design projects, conduct research, create comprehensive designs, and collaborate with developers.',
        roles: 'Product Designer, UX Designer, Interaction Designer'
      },
      {
        level: 'Senior Level: Senior Designer',
        timeframe: '5-8 years experience',
        description: 'Lead design strategy, mentor junior designers, develop design systems, and influence product direction.',
        roles: 'Senior Product Designer, Senior UX Designer, Design Lead'
      },
      {
        level: 'Expert Level: Design Director / Manager',
        timeframe: '8+ years experience',
        description: 'Set design vision, build and lead design teams, align design with business strategy.',
        roles: 'Design Director, Head of Design, VP of Design, Chief Design Officer'
      }
    ],
    
    careerInsight: 'Design careers can specialize in research, interaction design, visual design, or move toward management and strategy. Building a strong portfolio of case studies is often more important than formal credentials, and designers should continuously update their skills as tools and methodologies evolve.',
    
    onlineCourses: [
      {
        name: 'Figma Learning Courses - Free UI Design Tutorials',
        url: 'https://www.figma.com/resources/learn-design/'
      },
      {
        name: 'Google UX Design Professional Certificate (Coursera)',
        url: 'https://www.coursera.org/professional-certificates/google-ux-design'
      },
      {
        name: 'Interaction Design Foundation Courses',
        url: 'https://www.interaction-design.org/courses'
      },
      {
        name: 'DesignLab - UX Academy',
        url: 'https://trydesignlab.com/ux-design-course/'
      }
    ],
    
    books: [
      {
        title: 'Don't Make Me Think',
        author: 'Steve Krug'
      },
      {
        title: 'The Design of Everyday Things',
        author: 'Don Norman'
      },
      {
        title: 'About Face: The Essentials of Interaction Design',
        author: 'Alan Cooper'
      },
      {
        title: 'Hooked: How to Build Habit-Forming Products',
        author: 'Nir Eyal'
      }
    ],
    
    communities: [
      {
        name: 'Dribbble',
        description: 'Platform for designers to share work and find inspiration',
        url: 'https://dribbble.com/'
      },
      {
        name: 'Behance',
        description: 'Showcase platform for creative professionals',
        url: 'https://www.behance.net/'
      },
      {
        name: 'UX Design Community on Slack',
        description: 'Slack workspace for UX designers',
        url: 'https://uxdesigncommunity.slack.com/'
      },
      {
        name: 'Designer Hangout',
        description: 'Invite-only community for UX designers',
        url: 'https://www.designerhangout.co/'
      }
    ],
    
    relatedPaths: ['software-development', 'product-management', 'customer-success'],
    
    roles: [
      {
        title: 'UX Designer',
        skills: ['User Research', 'Information Architecture', 'Wireframing', 'Usability Testing'],
        salary: '$75,000 - $120,000',
        certifications: ['Nielsen Norman Group UX Certification', 'Google UX Design Professional'],
        description: 'Research and optimize the user experience of digital products.'
      },
      {
        title: 'UI Designer',
        skills: ['Visual Design', 'Typography', 'Color Theory', 'Design Systems'],
        salary: '$70,000 - $115,000',
        certifications: ['Adobe Certified Expert', 'Interaction Design Foundation Certification'],
        description: 'Create visually appealing, intuitive interfaces for digital products.'
      },
      {
        title: 'Product Designer',
        skills: ['UX/UI Design', 'Prototyping', 'User Testing', 'Collaboration with Developers'],
        salary: '$80,000 - $130,000',
        certifications: ['Certified Product Designer', 'UX Design Institute Professional Diploma'],
        description: 'Combine UX and UI skills to create comprehensive product designs from concept to implementation.'
      },
      {
        title: 'Interaction Designer',
        skills: ['Motion Design', 'Micro-interactions', 'Prototyping', 'User Flows'],
        salary: '$75,000 - $125,000',
        certifications: ['Interaction Design Foundation', 'Google UX Design Certificate'],
        description: 'Focus on how users interact with digital products, creating dynamic and responsive experiences.'
      }
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Plan, execute, and complete projects on time and within budget.',
    longDescription: 'Project managers coordinate resources, schedules, and stakeholders to deliver successful projects. In this role, you'll plan project activities, manage teams, mitigate risks, and ensure that projects meet objectives within constraints of time, budget, and scope.',
    icon: <ChartBar className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    animation: '/animations/project-management.json',
    growthPotential: 'Projected 18% growth over the next decade',
    salaryRange: '$80,000 - $170,000 based on experience and industry',
    keySkills: ['Planning', 'Risk Management', 'Stakeholder Communication', 'Resource Allocation', 'Leadership'],
    educationRequirements: 'Bachelor's degree in Business or related field (certifications often valued equally)',
    jobOutlook: 'Excellent, with demand across virtually all industries',
    topCertifications: 'Project Management Professional (PMP), Certified ScrumMaster (CSM), PRINCE2',
    learningResources: 'PMI resources, Scrum Alliance, Coursera, LinkedIn Learning',
    
    technicalSkills: [
      'Project management methodologies (Waterfall, Agile, Hybrid)',
      'Project management software (MS Project, JIRA, Asana)',
      'Risk management techniques',
      'Budgeting and cost control',
      'Resource allocation',
      'Scheduling and timeline management',
      'Quality management',
      'Change management'
    ],
    
    softSkills: [
      'Leadership',
      'Communication',
      'Negotiation',
      'Problem-solving',
      'Conflict resolution',
      'Time management',
      'Adaptability',
      'Decision-making'
    ],
    
    technologies: [
      'MS Project', 'JIRA', 'Asana', 'Trello',
      'Smartsheet', 'Monday.com', 'Basecamp',
      'Microsoft Teams', 'Slack', 'Power BI'
    ],
    
    skillTip: 'The most successful project managers balance technical methodology with strong people skills. Focus on developing both aspects, particularly stakeholder management and communication.',
    
    formalEducation: 'Educational backgrounds for project management:',
    educationPaths: [
      'Bachelor's degree in Business, Management, IT, or Engineering',
      'Master's degree in Project Management, Business Administration (MBA), or related field',
      'Associate's degree with project management emphasis',
      'Project management certificate programs'
    ],
    
    certifications: [
      {
        name: 'Project Management Professional (PMP)',
        description: 'Industry standard certification recognizing expertise in project management principles and practices'
      },
      {
        name: 'Certified ScrumMaster (CSM)',
        description: 'Validates knowledge of Scrum methodology, roles, and implementation'
      },
      {
        name: 'PRINCE2 Practitioner',
        description: 'Demonstrates proficiency in the PRINCE2 project management method'
      },
      {
        name: 'PMI Agile Certified Practitioner (PMI-ACP)',
        description: 'Recognizes knowledge of agile principles, practices, tools, and techniques'
      },
      {
        name: 'Certified Associate in Project Management (CAPM)',
        description: 'Entry-level certification for those with less experience in project management'
      }
    ],
    
    alternativeLearning: 'Alternative paths to project management:',
    alternativePaths: [
      'Working on project teams and assuming increasing responsibility',
      'Transitioning from a technical role within a project team',
      'Leading departmental initiatives or smaller projects',
      'Cross-training while in an adjacent role (business analyst, team lead)',
      'Volunteering to manage projects for non-profits or community organizations'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Project Coordinator / Assistant',
        timeframe: '0-2 years experience',
        description: 'Support project managers, track tasks, coordinate meetings, and handle administrative aspects.',
        roles: 'Project Coordinator, Project Assistant, Project Scheduler'
      },
      {
        level: 'Mid Level: Project Manager',
        timeframe: '2-5 years experience',
        description: 'Independently manage projects, develop plans, track progress, and coordinate resources.',
        roles: 'Project Manager, IT Project Manager, Construction Project Manager'
      },
      {
        level: 'Senior Level: Senior Project Manager',
        timeframe: '5-8 years experience',
        description: 'Lead complex projects, mentor junior managers, implement methodologies, and improve processes.',
        roles: 'Senior Project Manager, Project Lead, Technical Project Manager'
      },
      {
        level: 'Expert Level: Program/Portfolio Manager',
        timeframe: '8+ years experience',
        description: 'Oversee multiple related projects, align with organizational strategy, and develop project management standards.',
        roles: 'Program Manager, Portfolio Manager, Director of Project Management'
      }
    ],
    
    careerInsight: 'Project management skills are highly transferable across industries, allowing professionals to work in technology, construction, healthcare, finance, and more. The most valuable project managers develop domain expertise in their industry while maintaining strong project fundamentals.',
    
    onlineCourses: [
      {
        name: 'Google Project Management Professional Certificate (Coursera)',
        url: 'https://www.coursera.org/professional-certificates/google-project-management'
      },
      {
        name: 'LinkedIn Learning - Project Management Foundations',
        url: 'https://www.linkedin.com/learning/project-management-foundations-2019'
      },
      {
        name: 'PMI Authorized Training - PMP Exam Prep',
        url: 'https://www.pmi.org/learning/training-development'
      },
      {
        name: 'Scrum.org Courses - Professional Scrum Training',
        url: 'https://www.scrum.org/courses'
      }
    ],
    
    books: [
      {
        title: 'A Guide to the Project Management Body of Knowledge (PMBOK Guide)',
        author: 'Project Management Institute'
      },
      {
        title: 'Scrum: The Art of Doing Twice the Work in Half the Time',
        author: 'Jeff Sutherland'
      },
      {
        title: 'Project Management Absolute Beginner's Guide',
        author: 'Greg Horine'
      },
      {
        title: 'Making Things Happen: Mastering Project Management',
        author: 'Scott Berkun'
      }
    ],
    
    communities: [
      {
        name: 'Project Management Institute (PMI)',
        description: 'Professional organization for project managers',
        url: 'https://www.pmi.org/'
      },
      {
        name: 'Reddit - r/projectmanagement',
        description: 'Community for project management discussion',
        url: 'https://www.reddit.com/r/projectmanagement/'
      },
      {
        name: 'ProjectManagement.com',
        description: 'PMI community for project managers',
        url: 'https://www.projectmanagement.com/'
      },
      {
        name: 'Scrum Alliance',
        description: 'Organization focused on Scrum and agile practices',
        url: 'https://www.scrumalliance.org/'
      }
    ],
    
    relatedPaths: ['product-management', 'business-analysis', 'software-development'],
    
    roles: [
      {
        title: 'Project Manager',
        skills: ['Project Planning', 'Risk Management', 'Stakeholder Communication', 'Agile/Scrum'],
        salary: '$85,000 - $140,000',
        certifications: ['Project Management Professional (PMP)', 'Certified ScrumMaster (CSM)'],
        description: 'Oversee projects from initiation to completion, ensuring they meet objectives within constraints.'
      },
      {
        title: 'Program Manager',
        skills: ['Strategic Planning', 'Portfolio Management', 'Resource Allocation', 'Change Management'],
        salary: '$110,000 - $170,000',
        certifications: ['Program Management Professional (PgMP)', 'PRINCE2 Practitioner'],
        description: 'Manage multiple related projects to achieve strategic objectives and business benefits.'
      },
      {
        title: 'Scrum Master',
        skills: ['Agile Methodologies', 'Team Facilitation', 'Sprint Planning', 'Impediment Removal'],
        salary: '$80,000 - $130,000',
        certifications: ['Professional Scrum Master (PSM)', 'SAFe Scrum Master'],
        description: 'Facilitate and coach teams in implementing Scrum practices and principles.'
      },
      {
        title: 'Project Coordinator',
        skills: ['Schedule Management', 'Task Tracking', 'Meeting Coordination', 'Documentation'],
        salary: '$55,000 - $85,000',
        certifications: ['Certified Associate in Project Management (CAPM)', 'CompTIA Project+'],
        description: 'Support project managers and teams with administrative and coordination tasks.'
      }
    ]
  },
  {
    id: 'business-analysis',
    title: 'Business & Data Analysis',
    description: 'Analyze business processes and data to drive improvements and inform decisions.',
    longDescription: 'Business and data analysts bridge the gap between business needs and technical solutions by gathering requirements, analyzing data, and recommending improvements. In this role, you'll use analytical skills to identify problems, discover insights, and help organizations make data-driven decisions.',
    icon: <BarChart4 className="h-8 w-8 text-teal-600" />,
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    animation: '/animations/business-analysis.json',
    growthPotential: 'Projected 24% growth over the next decade',
    salaryRange: '$65,000 - $120,000 depending on specialization',
    keySkills: ['Requirements Analysis', 'Data Analysis', 'SQL', 'Process Mapping', 'Visualization', 'Problem Solving'],
    educationRequirements: 'Bachelor's degree in Business, Analytics, IT, or related field',
    jobOutlook: 'Strong, with increasing emphasis on data-driven decision making',
    topCertifications: 'CBAP, CCBA, Power BI, Tableau, Six Sigma',
    learningResources: 'LinkedIn Learning, Coursera, DataCamp, IIBA resources',
    
    technicalSkills: [
      'Data analysis tools (Excel, SQL, Python basics)',
      'Data visualization software (Tableau, Power BI)',
      'Requirements elicitation techniques',
      'Process modeling and documentation',
      'Statistical analysis',
      'Database querying',
      'Business intelligence concepts',
      'Project management fundamentals'
    ],
    
    softSkills: [
      'Critical thinking',
      'Communication with technical and non-technical stakeholders',
      'Problem-solving',
      'Active listening',
      'Facilitation',
      'Documentation',
      'Presentation skills',
      'Attention to detail'
    ],
    
    technologies: [
      'Excel', 'SQL', 'Power BI', 'Tableau',
      'JIRA', 'Visio', 'Python', 'R', 
      'SAP', 'Salesforce', 'Azure Analytics'
    ],
    
    skillTip: 'The most valuable business analysts combine technical skills with domain knowledge. Focus on becoming an expert in both the analytical methods and the specific industry or business area you work in.',
    
    formalEducation: 'Educational backgrounds for business and data analysts:',
    educationPaths: [
      'Bachelor's degree in Business Administration, Information Systems, Economics, or Statistics',
      'Master's degree in Business Analytics, Data Science, or related field',
      'Business Analysis certificate programs',
      'Data Analytics bootcamps and specialized programs'
    ],
    
    certifications: [
      {
        name: 'Certified Business Analysis Professional (CBAP)',
        description: 'Advanced certification for experienced business analysts'
      },
      {
        name: 'Certification of Capability in Business Analysis (CCBA)',
        description: 'Mid-level certification for business analysts with 2-3 years of experience'
      },
      {
        name: 'Microsoft Certified: Data Analyst Associate',
        description: 'Validates skills in Power BI and data analysis'
      },
      {
        name: 'Tableau Desktop Specialist',
        description: 'Demonstrates proficiency in Tableau for data visualization'
      },
      {
        name: 'Six Sigma Green Belt/Black Belt',
        description: 'Certifies expertise in process improvement methodologies'
      }
    ],
    
    alternativeLearning: 'Alternative paths to business and data analysis:',
    alternativePaths: [
      'Transitioning from operational roles within a business area',
      'Moving from IT support or customer service positions',
      'Self-study with online analytics courses and projects',
      'Volunteering for analytical projects within current role',
      'Internships or entry-level positions with mentorship'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Junior Analyst',
        timeframe: '0-2 years experience',
        description: 'Assist with data collection, perform basic analysis, create reports, and learn business processes.',
        roles: 'Junior Business Analyst, Data Analyst, Reporting Analyst'
      },
      {
        level: 'Mid Level: Business/Data Analyst',
        timeframe: '2-5 years experience',
        description: 'Gather requirements, analyze complex data, identify trends, and recommend solutions.',
        roles: 'Business Analyst, Data Analyst, Business Systems Analyst'
      },
      {
        level: 'Senior Level: Senior Analyst',
        timeframe: '5-8 years experience',
        description: 'Lead analysis for major initiatives, develop methodologies, mentor junior analysts, and work on strategic projects.',
        roles: 'Senior Business Analyst, Senior Data Analyst, Business Intelligence Analyst'
      },
      {
        level: 'Expert Level: Lead Analyst / Manager',
        timeframe: '8+ years experience',
        description: 'Oversee analysis function, set standards, align with business strategy, and lead analytical teams.',
        roles: 'Lead Business Analyst, Analytics Manager, Director of Business Analysis'
      }
    ],
    
    careerInsight: 'Business and data analysis skills are increasingly important across all industries. As organizations become more data-driven, analysts who can translate data into actionable insights will continue to be in high demand. Specializing in specific analysis methodologies or business domains can accelerate career growth.',
    
    onlineCourses: [
      {
        name: 'Google Data Analytics Professional Certificate (Coursera)',
        url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
      },
      {
        name: 'Microsoft Power BI Data Analyst (Microsoft Learn)',
        url: 'https://docs.microsoft.com/en-us/learn/powerbi/'
      },
      {
        name: 'Business Analysis Foundations (LinkedIn Learning)',
        url: 'https://www.linkedin.com/learning/business-analysis-foundations'
      },
      {
        name: 'DataCamp - Data Analyst with Python/R Track',
        url: 'https://www.datacamp.com/tracks/data-analyst-with-python'
      }
    ],
    
    books: [
      {
        title: 'Business Analysis For Dummies',
        author: 'Kupe Kupersmith, Paul Mulvey, and Kate McGoey'
      },
      {
        title: 'The Data Warehouse Toolkit',
        author: 'Ralph Kimball and Margy Ross'
      },
      {
        title: 'Storytelling with Data',
        author: 'Cole Nussbaumer Knaflic'
      },
      {
        title: 'BABOK Guide (Business Analysis Body of Knowledge)',
        author: 'International Institute of Business Analysis'
      }
    ],
    
    communities: [
      {
        name: 'International Institute of Business Analysis (IIBA)',
        description: 'Professional association for business analysts',
        url: 'https://www.iiba.org/'
      },
      {
        name: 'Reddit - r/dataanalysis',
        description: 'Community for data analysis discussion',
        url: 'https://www.reddit.com/r/dataanalysis/'
      },
      {
        name: 'Modern Analyst',
        description: 'Community and resources for business analysts',
        url: 'https://www.modernanalyst.com/'
      },
      {
        name: 'Data Visualization Society',
        description: 'Community focused on data visualization',
        url: 'https://www.datavisualizationsociety.com/'
      }
    ],
    
    relatedPaths: ['data-science', 'project-management', 'product-management'],
    
    roles: [
      {
        title: 'Business Analyst',
        skills: ['Requirements Gathering', 'Process Mapping', 'Data Analysis', 'System Implementation'],
        salary: '$70,000 - $115,000',
        certifications: ['Certified Business Analysis Professional (CBAP)', 'PMI Professional in Business Analysis'],
        description: 'Bridge the gap between business needs and technical solutions through analysis and requirements definition.'
      },
      {
        title: 'Data Analyst',
        skills: ['SQL', 'Data Visualization', 'Statistical Analysis', 'Reporting'],
        salary: '$65,000 - $100,000',
        certifications: ['Certified Analytics Professional (CAP)', 'Microsoft Power BI Data Analyst'],
        description: 'Collect, clean, and interpret data sets to answer questions and solve business problems.'
      },
      {
        title: 'Business Intelligence Analyst',
        skills: ['BI Tools', 'Data Warehousing', 'ETL Processes', 'Dashboard Creation'],
        salary: '$75,000 - $120,000',
        certifications: ['Certified Business Intelligence Professional', 'Tableau Desktop Specialist'],
        description: 'Transform raw data into meaningful insights through reports and visualizations for decision-makers.'
      },
      {
        title: 'Process Analyst',
        skills: ['Process Mapping', 'Business Process Management', 'Continuous Improvement', 'Six Sigma'],
        salary: '$70,000 - $110,000',
        certifications: ['Six Sigma Green Belt/Black Belt', 'Certified Process Professional'],
        description: 'Analyze and optimize business processes to improve efficiency and effectiveness.'
      }
    ]
  },
  {
    id: 'customer-success',
    title: 'Customer Success & Marketing',
    description: 'Drive customer satisfaction, retention, and growth through relationship management.',
    longDescription: 'Customer success and marketing professionals ensure customers achieve their desired outcomes while using a company's products or services. In this field, you'll build relationships, provide strategic guidance, develop marketing strategies, and help organizations retain and expand their customer base.',
    icon: <Users className="h-8 w-8 text-pink-600" />,
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    animation: '/animations/customer-success.json',
    growthPotential: 'Projected 16-20% growth over the next decade, particularly in tech and SaaS',
    salaryRange: '$60,000 - $130,000 depending on role and industry',
    keySkills: ['Relationship Building', 'Strategic Communication', 'Product Knowledge', 'Customer Onboarding', 'Marketing Strategy'],
    educationRequirements: 'Bachelor's degree in Business, Marketing, Communications, or related field (experience often weighted heavily)',
    jobOutlook: 'Strong, especially in subscription-based and technology industries',
    topCertifications: 'Customer Success Manager Certification, HubSpot Inbound, Google Ads, Salesforce',
    learningResources: 'HubSpot Academy, Gainsight, Customer Success Association, LinkedIn Learning',
    
    technicalSkills: [
      'CRM systems (Salesforce, HubSpot)',
      'Customer success platforms (Gainsight, Totango)',
      'Marketing automation tools',
      'Analytics and reporting',
      'Product usage analysis',
      'Basic data analysis',
      'Campaign management',
      'Content management systems'
    ],
    
    softSkills: [
      'Relationship building',
      'Strategic communication',
      'Active listening',
      'Presentation skills',
      'Negotiation',
      'Empathy',
      'Problem-solving',
      'Adaptability'
    ],
    
    technologies: [
      'Salesforce', 'HubSpot', 'Gainsight', 'Marketo',
      'Mailchimp', 'Google Analytics', 'Intercom',
      'Zendesk', 'Slack', 'Zoom', 'Asana'
    ],
    
    skillTip: 'Success in customer-facing roles depends on balancing relationship management with data-driven decision making. Learn to use metrics and analytics to guide customer interactions and demonstrate the value you're providing.',
    
    formalEducation: 'Educational backgrounds for customer success and marketing professionals:',
    educationPaths: [
      'Bachelor's degree in Business, Marketing, Communications, or Customer Experience',
      'Master's degree in Business Administration, Marketing, or related field',
      'Associate's degree with relevant experience',
      'Certificate programs in Customer Success Management or Digital Marketing'
    ],
    
    certifications: [
      {
        name: 'Customer Success Manager Certification (Success League)',
        description: 'Focused on customer success fundamentals, strategy, and best practices'
      },
      {
        name: 'SuccessCOACHING CSM Certification',
        description: 'Comprehensive program covering customer success methodology and application'
      },
      {
        name: 'HubSpot Inbound Marketing Certification',
        description: 'Covers inbound marketing strategies and techniques'
      },
      {
        name: 'Google Ads Certification',
        description: 'Validates expertise in Google's advertising platform'
      },
      {
        name: 'Salesforce Certified Administrator',
        description: 'Demonstrates proficiency with Salesforce CRM'
      }
    ],
    
    alternativeLearning: 'Alternative paths to customer success and marketing:',
    alternativePaths: [
      'Transitioning from customer support or account management',
      'Moving from sales or business development roles',
      'Self-learning through online courses and marketing projects',
      'Industry-specific experience (valuable for specialized customer success roles)',
      'Volunteering for marketing and customer-facing initiatives'
    ],
    
    careerProgression: [
      {
        level: 'Entry Level: Customer Success Representative',
        timeframe: '0-2 years experience',
        description: 'Handle day-to-day customer interactions, basic onboarding, and respond to customer needs.',
        roles: 'Customer Success Representative, Marketing Coordinator, Customer Onboarding Specialist'
      },
      {
        level: 'Mid Level: Customer Success Manager',
        timeframe: '2-5 years experience',
        description: 'Manage customer portfolios, develop success plans, identify expansion opportunities, and resolve complex issues.',
        roles: 'Customer Success Manager, Marketing Manager, Customer Experience Manager'
      },
      {
        level: 'Senior Level: Senior CSM / Team Lead',
        timeframe: '5-8 years experience',
        description: 'Handle strategic accounts, develop customer success methodologies, mentor junior staff, and influence product roadmap.',
        roles: 'Senior Customer Success Manager, Marketing Director, Customer Success Team Lead'
      },
      {
        level: 'Expert Level: Director / VP of Customer Success',
        timeframe: '8+ years experience',
        description: 'Set customer success strategy, build and scale teams, align with executive leadership, and drive organization-wide customer focus.',
        roles: 'Director of Customer Success, VP of Customer Experience, Chief Customer Officer'
      }
    ],
    
    careerInsight: 'Customer success is relatively new compared to traditional roles like sales and marketing, offering opportunities for rapid advancement. As subscription-based business models continue to grow, the importance of customer retention and expansion makes customer success professionals increasingly valuable to organizations.',
    
    onlineCourses: [
      {
        name: 'HubSpot Academy - Customer Success Courses',
        url: 'https://academy.hubspot.com/'
      },
      {
        name: 'LinkedIn Learning - Customer Success Manager Path',
        url: 'https://www.linkedin.com/learning/'
      },
      {
        name: 'Google Digital Marketing & E-commerce Professional Certificate',
        url: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce'
      },
      {
        name: 'Gainsight - Customer Success University',
        url: 'https://www.gainsight.com/customer-success-university/'
      }
    ],
    
    books: [
      {
        title: 'Customer Success: How Innovative Companies Are Reducing Churn and Growing Recurring Revenue',
        author: 'Nick Mehta, Dan Steinman, and Lincoln Murphy'
      },
      {
        title: 'The Effortless Experience',
        author: 'Matthew Dixon, Nick Toman, and Rick DeLisi'
      },
      {
        title: 'This Is Marketing',
        author: 'Seth Godin'
      },
      {
        title: 'Never Lose a Customer Again',
        author: 'Joey Coleman'
      }
    ],
    
    communities: [
      {
        name: 'Customer Success Network',
        description: 'Community for customer success professionals',
        url: 'https://www.customersuccess.network/'
      },
      {
        name: 'Gain Grow Retain',
        description: 'Community and resources for B2B customer success',
        url: 'https://www.gaingrowretain.com/'
      },
      {
        name: 'Customer Success Association',
        description: 'Professional association for customer success',
        url: 'https://www.customersuccessassociation.com/'
      },
      {
        name: 'American Marketing Association',
        description: 'Professional association for marketers',
        url: 'https://www.ama.org/'
      }
    ],
    
    relatedPaths: ['product-management', 'business-analysis', 'project-management'],
    
    roles: [
      {
        title: 'Customer Success Manager',
        skills: ['Relationship Building', 'Product Knowledge', 'Upselling', 'Customer Onboarding'],
        salary: '$65,000 - $110,000',
        certifications: ['Certified Customer Success Manager', 'Customer Experience Specialist'],
        description: 'Ensure customers achieve desired outcomes while using your company\'s products or services.'
      },
      {
        title: 'Marketing Manager',
        skills: ['Marketing Strategy', 'Campaign Management', 'Analytics', 'Content Creation'],
        salary: '$70,000 - $130,000',
        certifications: ['Professional Certified Marketer', 'Digital Marketing Certification'],
        description: 'Develop and implement marketing strategies to promote products, services, or brands.'
      },
      {
        title: 'Digital Marketing Specialist',
        skills: ['SEO/SEM', 'Social Media', 'Email Marketing', 'Conversion Optimization'],
        salary: '$60,000 - $95,000',
        certifications: ['Google Ads Certification', 'HubSpot Inbound Marketing'],
        description: 'Plan and execute digital marketing campaigns across various online channels.'
      },
      {
        title: 'Customer Experience Manager',
        skills: ['Journey Mapping', 'Voice of Customer', 'CX Strategy', 'User Research'],
        salary: '$75,000 - $120,000',
        certifications: ['Certified Customer Experience Professional', 'Journey Mapping Certification'],
        description: 'Design and improve customer experiences across all touchpoints with an organization.'
      }
    ]
  }
];
