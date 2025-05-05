import './App.css'
import React from 'react';
import { Graph } from 'react-d3-graph';

function App() {

  // graph for people and cities
  const data = {
    nodes: [
      // cities
      { id: "Cali", color: "lightgreen" },
      { id: "Medellin", color: "lightgreen" },
      { id: "Bogota", color: "lightgreen" },
      { id: "Manizales", color: "lightgreen" },

      // people
      { id: "Ana", color: "orange" },
      { id: "Luis", color: "orange" },
      { id: "Maria", color: "orange" },
      { id: "Carlos", color: "orange" },
    ],

    // connections
    links: [

      // cities connections
      { source: "Cali", target: "Medellin", color: "lightblue" },
      { source: "Cali", target: "Manizales", color: "lightblue" },
      { source: "Medellin", target: "Bogota", color: "lightblue" },
      { source: "Bogota", target: "Manizales", color: "lightblue" },

      // location connection, person to city
      { source: "Ana", target: "Manizales", color: "green" },
      { source: "Luis", target: "Medellin", color: "green" },
      { source: "Maria", target: "Bogota", color: "green" },
      { source: "Carlos", target: "Cali", color: "green" },

      // friends, person to person
      { source: "Ana", target: "Luis", color: "orange" },
      { source: "Luis", target: "Maria", color: "orange" },
      { source: "Carlos", target: "Ana", color: "orange" },
    ],
  };

  const config = {
    nodeHighlightBehavior: true,
    node: {
      size: 300,
      fontColor: 'white',
      fontSize: 10,
    },
    link: {
      highlightColor: 'blue',
    },
    directed: false,
  };

  return (
    <div>
      <h2>cities and people graph</h2>
      <Graph id="graph-id" data={data} config={config} />
    </div>
  );
}
export default App
