// default data
export const tree = {
  valor: 10,
  izquierda: {
    valor: 5,
    izquierda: {
      valor: 2,
      izquierda: null,
      derecha: null
    },
    derecha: {
      valor: 7,
      izquierda: null,
      derecha: null
    }
  },
  derecha: {
    valor: 15,
    izquierda: null,
    derecha: {
      valor: 20,
      izquierda: null,
      derecha: null
    }
  }
}

// react d3 tree data
export const arbol = [
  {
    name: "10",
    children: [
      {
        name: "5",
        children: [
          { name: "2" },
          { name: "7" }
        ]
      },
      {
        name: "15",
        children: [
          { name: "20" }
        ]
      }
    ]
  }
];
