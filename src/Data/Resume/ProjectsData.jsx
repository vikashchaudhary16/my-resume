export const myProjectData = {
projects: [   
    {
      id: 1,
      img: "data:image/png;base64,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",
      link: "https://www.google.com/",
      name: "AT&T Inc. - Dispute Management System",
      role: "Developer",
      status: "Completed",
      teamSize: 6,
      startDate: new Date("2021-06-01"),
      endDate: new Date("2022-04-12"),
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
      environment: ["Windows 10", "MacOS"],
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiX5tSIGYn8OX6mWPmJ20iWkU0xHAp_Us5GnLxgcZd3U7Rg_MS1x-ykcMPXaDxbUWVw8&usqp=CAU",
      link: "https://www.google.com/",
      name: "Telenor Group - Storage Allocation",
      role: "Developer",
      status: "Completed",
      teamSize: 4,
      startDate: new Date("2020-11-01"),
      endDate: new Date("2021-05-01"),
      description:
        "SARA is an end-to-end Automation Software for Storage Allocation and Expansion which can be used for New Storage Request and Expanding Existing Storage (LUN) Size. A LUN could reference an entire RAID set, a single hard disk or partition, or multiple disks or partitions. It provides support for different type of Storage EMC-Unity, 3PAR. Data transfer (Import, export) for data processing with specified formats.",
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
      environment: ["Windows 10", "MacOS"],
    },
  ]
}