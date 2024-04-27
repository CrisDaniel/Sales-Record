export type User = {
    id: string;
    date: Date;
    firstName: string;
    lastName: string;
    state: string;
    commission: string;
  };
  
  export const fakeData: User[] = [
    {
      id: '9s41rp',
      date: new Date(),
      firstName: 'Kelvin',
      lastName: 'Langosh',
      state: 'Entregado',
      commission: '1234',
    },
    {
      id: '08m6rx',
      date: new Date(),
      firstName: 'Molly',
      lastName: 'Purdy',
      state: 'Cancelado',
      commission: '1234',
    },
    {
      id: '5ymtrc',
      date: new Date(),
      firstName: 'Henry',
      lastName: 'Lynch',
      state: 'Entregado',
      commission: '1234',
    },
    {
      id: 'ek5b97',
      date: new Date(),
      firstName: 'Glenda',
      lastName: 'Douglas',
      state: 'Entregado',
      commission: '1234',
    },
    {
      id: 'xxtydd',
      date: new Date(),
      firstName: 'Leone',
      lastName: 'Williamson',
      state: 'Entregado',
      commission: '1234',
    },
    {
      id: 'wzxj9m',
      date: new Date(),
      firstName: 'Mckenna',
      lastName: 'Friesen',
      state: 'Entregado',
      commission: '1234',
    },
    {
      id: '21dwtz',
      date: new Date(),
      firstName: 'Wyman',
      lastName: 'Jast',
      state: 'Entregado',
      commission: '1234',
    },
    {
      id: 'o8oe4k',
      date: new Date(),
      firstName: 'Janick',
      lastName: 'Willms',
      state: 'Entregado',
      commission: '1234',
    },
  ];
  
  export const usStates = [
    'Entregado',
    'Actualizado',
    'Cancelado',
    'Reprogramado',
  ];

  export const reason = [
    'Delivery',
    'Derivado ACD',
    'Derivado CAC',
    'Desiste recojo',
    'No contesta',
    'Otro asesor',
  ];

  export const service = [
    'Porta Chip',
    'Porta Pack',
    'Renovacion',
    'Alta nueva',
  ];