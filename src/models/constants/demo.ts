import { UserModel } from "../user.model";

export const USERS: UserModel[] = [
  {
    id: "u1",
    name: "Carlos",
    surname: "Méndez",
    alerts: [
      {
        title: "Torre Medellín",
        message: "Niveles criticos en la bateria",
        issueDate: "2024-10-10",
        issueTime: "15:09",
      },
    ],
    devices: [
      {
        charge: 75,
        temperature: 65,
        name: "Torre Medellín",
        id: "d1",
        criticLevel: 3,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "carlos.m",
    password: "password123",
  },
  {
    id: "u2",
    name: "Ana",
    surname: "García",
    alerts: [],
    devices: [
      {
        charge: 50,
        temperature: 58,
        name: "Torre Bogotá",
        id: "d2",
        criticLevel: 2,
        isActive: true,
        showAtHome: true,
      },
      {
        charge: 30,
        temperature: 72,
        name: "Torre Cali",
        id: "d3",
        criticLevel: 4,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "ana.garcia",
    password: "securepass",
  },
  {
    id: "u3",
    name: "Luis",
    surname: "Pérez",
    alerts: [],
    devices: [
      {
        charge: 80,
        temperature: 60,
        name: "Torre Cartagena",
        id: "d4",
        criticLevel: 2,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "luis.perez",
    password: "mypassword",
  },
  {
    id: "u4",
    name: "María",
    surname: "Hernández",
    alerts: [],
    devices: [
      {
        charge: 40,
        temperature: 68,
        name: "Torre Barranquilla",
        id: "d5",
        criticLevel: 3,
        isActive: true,
        showAtHome: true,
      },
      {
        charge: 55,
        temperature: 55,
        name: "Torre Santa Marta",
        id: "d6",
        criticLevel: 1,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "maria.hernandez",
    password: "maria2023",
  },
  {
    id: "u5",
    name: "Jorge",
    surname: "Torres",
    alerts: [],
    devices: [
      {
        charge: 90,
        temperature: 50,
        name: "Torre Bucaramanga",
        id: "d7",
        criticLevel: 2,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "jorge.torres",
    password: "jorgepass",
  },
  {
    id: "u6",
    name: "Sofía",
    surname: "Romero",
    alerts: [],
    devices: [
      {
        charge: 65,
        temperature: 70,
        name: "Torre Manizales",
        id: "d8",
        criticLevel: 5,
        isActive: true,
        showAtHome: true,
      },
      {
        charge: 20,
        temperature: 80,
        name: "Torre Pasto",
        id: "d9",
        criticLevel: 4,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "sofia.romero",
    password: "sofialover",
  },
  {
    id: "u7",
    name: "Andrés",
    surname: "Suárez",
    alerts: [],
    devices: [],
    username: "andres.suarez",
    password: "andres123",
  },
  {
    id: "u8",
    name: "Gabriela",
    surname: "Salazar",
    alerts: [],
    devices: [
      {
        charge: 60,
        temperature: 75,
        name: "Torre Cúcuta",
        id: "d10",
        criticLevel: 3,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "gabriela.salazar",
    password: "gabriela2023",
  },
  {
    id: "u9",
    name: "Daniel",
    surname: "Ceballos",
    alerts: [],
    devices: [
      {
        charge: 85,
        temperature: 62,
        name: "Torre Pereira",
        id: "d11",
        criticLevel: 2,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "daniel.ceballos",
    password: "daniel123",
  },
  {
    id: "u10",
    name: "Valentina",
    surname: "Lopez",
    alerts: [
      {
        title: "Torre Armenia",
        message: "Niveles criticos en la bateria",
        issueDate: "2024-10-10",
        issueTime: "15:09",
      },
      {
        title: "Torre Neiva",
        message: "Niveles criticos en la bateria",
        issueDate: "2024-10-10",
        issueTime: "15:09",
      },
    ],
    devices: [
      {
        charge: 72,
        temperature: 58,
        name: "Torre Armenia",
        id: "d12",
        criticLevel: 4,
        isActive: true,
        showAtHome: true,
      },
      {
        charge: 48,
        temperature: 66,
        name: "Torre Neiva",
        id: "d13",
        criticLevel: 3,
        isActive: true,
        showAtHome: true,
      },
    ],
    username: "valentina.lopez",
    password: "valentina123",
  },
];
