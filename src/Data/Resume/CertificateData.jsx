import Oracle from "../../pdfs/Oracle Cloud Infrastructure 2023 eCertificate.pdf";
import fy22H2DXCCollaborator from "../../pdfs/FY22/Certificate_Vikash Chaudhary.pdf";
import fy23H1DXCCollaborator from "../../pdfs/FY23/Collaborators Award_E-Certificate - VIKASH CHAUDHARY.pdf";
import fy23Q1DXCChamp from "../../pdfs/FY23/Q1 Champs FY23 E-Certificate - VIKASH CHAUDHARY.pdf";
import fy23Q4DXCChamp from "../../pdfs/FY23/VIKASH CHAUDHARY - Congatulations.pdf";
import fy24H1DXCCollaborator from "../../pdfs/FY24/Vikash Chaudhary - Congatulations.pdf";

export const myCertificateData = {
certificate: [
    {
      name: "DXC Collaborator",
      link: fy22H2DXCCollaborator,
      param: "fy22DXCCollaborator.pdf",
      date: new Date(),
      desc: "H2 FY2022",
    },
    {
      name: "DXC Collaborator",
      link: fy23H1DXCCollaborator,
      param: "fy23H1DXCCollaborator.pdf",
      date: new Date(),
      desc: "H1 FY2023",
    },
    {
      name: "DXC Champ",
      link: fy23Q1DXCChamp,
      param: "fy23Q1DXCChamp.pdf",
      date: new Date(),
      desc: "Q1 FY2023",
    },
    {
      name: "DXC Champ",
      link: fy23Q4DXCChamp,
      param: "fy23Q4DXCChamp.pdf",
      date: new Date(),
      desc: "Q4 FY2023",
    },
    {
      name: "DXC Collaborator",
      link: fy24H1DXCCollaborator,
      param: "fy24H1DXCCollaborator.pdf",
      date: new Date(),
      desc: "H1 FY2024",
    },
    {
      name: "Oracle Cloud",
      link: Oracle,
      param: "Champ.pdf",
      date: new Date(),
      desc: "Certified",
    },
  ]
}