export const myProjectData = {
  projects: [
    {
      id: 1,
      name: "ZOOM (Zero Outage & Operation Management)",
      role: "Developer",
      teamSize: 8,
      startDate: new Date("2023-01-10"),
      endDate: new Date(),
      description:
        "ZOOM is networking tool. Zero Outage and Operations Management which is better known as ZOOM. ZOOM track and aggregate data from all the ticketing system into one place. ZOOM provide governance and features like analysis, reporting. ZOOM has modules Incident Management, Change Management, Problem Management, Service Level Management, Service Level Management, Master Data Management.",
      technologies: [
        "Angular",
        "Asp.Net",
        "SQL Server"
      ],
      tools: ["VS-Code", "Visual Studio", "MSSQL Server 2016", "Postman"],
      database: ["MSSQL Server 2016"],
      environment: ["Windows"],
    },
    {
      id: 2,
      name: "Odyssey",
      role: "Team Lead",
      teamSize: 6,
      startDate: new Date("2023-02-01"),
      endDate: new Date(),
      description:
        `Odyssey is a dxc tool. Odyssey has multiple module which serve different needs.
•	Account Central – has list of account which odyssey support, controls the access, who can access what accounts.
•	Certificate Management – User can view certificate expiration, manage certificate and setup certificate notification.
•	Account Risk – This module track end of life of server.
•	DXC Automation Catalog – This module has list of automation assets which reduce manual efforts.
•	OPM (Odyssey Platform Management) – provides the ability to manage user groups, groups access, controls the master data, account tags, country mapping, industry mapping, portfolio mapping.
•	Task Tracking – track the activity.
•	Tool View – track the tool being used by company, tool end of life, license cost of tool, list of tools.`,
      technologies: [
        "Asp.net",
        "Ado.net",
        "SQL"
      ],
      tools: ["Visual Studio", "MSSQL", "Postman"],
      database: ["MSSQL Database"],
      environment: ["Windows"],
    },
    {
      id: 3,
      name: "One Shop Stop",
      role: "Developer",
      teamSize: 6,
      startDate: new Date("2022-05-09"),
      endDate: new Date("2023-01-10"),
      description:
        "One-Shop-Stop is a simple Web Application for reusability the Automation Solutions developed across the Organization. It holds all the solutions with respect to Capability, Sub-Capability and Solutions. Employee can search for solution and download it which are already developed and can make reuse of the code. Along with a dynamic Dashboard for management reporting purpose.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Sequelize ORM",
        "JWT",
        "JavaScript",
        "ExpressJS",
      ],
      tools: ["VS-Code", "MongoDB", "Postman"],
      database: ["MongoDB"],
      environment: ["Windows"],
    },
    {
      id: 4,
      name: "SARA",
      role: "Developer",
      teamSize: 5,
      startDate: new Date("2021-01-01"),
      endDate: new Date("2021-05-07"),
      description:
        "SARA is an end-to-end Automation Software for Storage Allocation and Expansion which can be used for New Storage Request and Expanding Existing Storage (LUN) Size. A LUN could reference an entire RAID set, a single hard disk or partition, or multiple disks or partitions. It provides support for different type of Storage EMC-Unity, 3PAR. Data transfer (Import, export) for data processing with specified formats.",
      technologies: [
        "Angular",
        "NodeJS",
        "Sequelize ORM",
        "JWT",
        "JavaScript",
        "ExpressJS",
      ],
      tools: ["VS-Code", "MySQL Workbench", "Postman"],
      database: ["MySQL Database"],
      environment: ["Windows"],
    },
    {
      id: 5,
      name: "AT&T Inc. - Dispute Management System",
      role: "Developer",
      teamSize: 4,
      startDate: new Date("2021-01-01"),
      endDate: new Date("2022-05-12"),
      description:
        "AT&T Dispute tool is a Web Application tool for the Dispute Management System which supports the communication and exchange of information in relation to the management of payment initiation and account information service transaction-related enquiries, complaints or disputes between Accounts.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Sequelize ORM",
        "JWT",
        "JavaScript",
        "ExpressJS",
      ],
      tools: ["VS-Code", "MSSQL Server 2016", "Postman"],
      database: ["MSSQL Server 2016"],
      environment: ["Windows"],
    },
    {
      id: 6,
      name: "Polaris",
      role: "Developer",
      teamSize: 4,
      startDate: new Date("2020-01-01"),
      endDate: new Date("2021-01-01"),
      description:
        `Polaris has 3 components.
•	Polaris – is financial master data. Contains both AFM and Legacy master data (including TE mappings) and distributes master data to 200+ subscribing systems.
•	Polaris TBL – Contains 161 tables (finance and non-finance) owned by multiple business groups.
•	Polaris WWAS – WW Authorization System - manages expenditure authorization limits for all HP employees worldwide.
`,
      technologies: [
        "ReactJS",
        "NodeJS",
        "Sequelize ORM",
        "JWT",
        "JavaScript",
        "ExpressJS",
      ],
      tools: ["VS-Code", "MySQL Workbench", "Postman"],
      database: ["MySQL Database"],
      environment: ["Windows"],
    },
    {
      id: 7,
      name: "Serial Number Repository (SNR)",
      role: "Developer",
      teamSize: 6,
      startDate: new Date("2019-04-16"),
      endDate: new Date("2020-01-10"),
      description:
        `SNR stores the following information in the database.
•	Manufacturing data – From internal sites as well as external ODMs/manufacturers
•	Product BOM and material data – From internal system, PMG/PhWeb/SAP-BW
•	Component and spare parts information – From internal system, PMG
•	Shipment data – From internal system, SCOUT
`,
      technologies: [
        "WCF",
        "Oracle"
      ],
      tools: ["Visual Studio", "Oracle SQL Developer", "SaopUI"],
      database: ["Oracle"],
      environment: ["Windows"],
    },
    {
      id: 8,
      name: "LivliChat",
      role: "Developer",
      teamSize: 5,
      startDate: new Date("2018-01-10"),
      endDate: new Date("2019-04-12"),
      description:
        "LivliChat is a Kilmist internal using tool for Chat. We can chat with every employee in the organization using this tool. In this tool, we can do group chat also by creating a group called Channel adding member into that channel & we can do personal chat also. (One to One).",
      technologies: [
        ".NET",
        "WCF",
        "Winforms",
        "SQL Server"
      ],
      tools: ["Visual STudio", "MSSQL", "SoapUI"],
      database: ["MSSQL"],
      environment: ["Windows"],
    },
    {
      id: 9,
      name: "AppStudio",
      role: "Developer",
      teamSize: 5,
      startDate: new Date("2017-01-10"),
      endDate: new Date("2019-04-12"),
      description:
        "AppStudio is Build and Release Software. It is mainly maintaining the Build, Versioning and Release of the various software products. Software is developed in C# with WCF concept and following 3 tier architecture. AppStudio is a Kilmist internal using tool for project maintenance. This tool built for maintenance project like building projects, Installer generations, deployment of applications and other organizations system data maintenances.  Automation of SVN (Project maintenance with subversion) for check in, checkout and source accessing permissions etc.",
        technologies: [
          ".NET",
          "WCF",
          "Winforms",
          "SQL Server"
        ],
        tools: ["Visual STudio", "MSSQL", "SoapUI"],
        database: ["MSSQL"],
        environment: ["Windows"],
    },
    {
      id: 10,
      name: "Customer Portal",
      role: "Developer",
      teamSize: 8,
      startDate: new Date("2015-09-01"),
      endDate: new Date("2017-01-10"),
      description:
        "SARA is an end-to-end Automation Software for Storage Allocation and Expansion which can be used for New Storage Request and Expanding Existing Storage (LUN) Size. A LUN could reference an entire RAID set, a single hard disk or partition, or multiple disks or partitions. It provides support for different type of Storage EMC-Unity, 3PAR. Data transfer (Import, export) for data processing with specified formats.",
        technologies: [
          ".NET",
          "WCF",
          "Winforms",
          "SQL Server"
        ],
        tools: ["Visual STudio", "MSSQL", "SoapUI"],
        database: ["MSSQL"],
        environment: ["Windows"],
    },
    {
      id: 11,
      name: "SpryBill",
      role: "Developer",
      teamSize: 12,
      startDate: new Date("2015-08-24"),
      endDate: new Date("2017-01-12"),
      description:
        `SpryBill is an end-to-end Telecom Billing Software (OSS/BSS) which can be used for both Post-paid and Interconnect Billing Services. SpryBill process starts right from Mediation to Sending Invoices to the Customers and Tracking their Payments and Service Status. 

It’s designed to allow Communications Service Providers (CSP) to collect consumption data in the format of CDR files, process those files to retrieve required information, provide real-time charging, rating, billing, taxing produce customizable invoices, process payments, credit memos, debit memos, discounts, and manage bundle packages.

Sprybill provides support for different type of communications includes Calls, Internet, Storage, Messages, Data Transfer, Connect Time. It will also provide a feature to migrate from old software to SpryBill. Data transfer (Import, export) for data processing with specified formats
`,
        technologies: [
          ".NET",
          "WCF",
          "Winforms",
          "SQL Server"
        ],
        tools: ["Visual STudio", "MSSQL", "SoapUI"],
        database: ["MSSQL"],
        environment: ["Windows"],
    }
  ]
}