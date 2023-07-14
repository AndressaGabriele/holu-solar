import Inverter from './src/controller/inverter';
import Panel from './src/controller/panel';
import Roof from './src/controller/roof';
import readline from 'readline-sync'


// const
const totalPower = parseFloat(readline.question('Digite a potencia total do sistema (em kW): ')); //4.5; //Kw
const panelPower = 550; //w
const panelLength = 1.95;
const panelWidth = 1.1;
const panelsPerInverte = 4;


// Entity
const panel = new Panel(panelPower, panelLength, panelWidth)
const inverter = new Inverter(panelsPerInverte);
const roof = new Roof(panelLength, panelWidth);

// Calculation 
const numPanels = Math.ceil((totalPower * 1000) / panel.getPower());
const numInterter = Math.ceil(inverter.calculateInverterPerPanels(numPanels));
const roofLength = roof.calculateRoofLength(numPanels).toFixed(2);
const roofArea = roof.calculateRoofArea(numPanels).toFixed(2);

// Output
console.log('Quantidade de placas: ', numPanels)
console.log('Quantidade de inversores: ', numInterter)
console.log('Comprimento de estrutura necessária:', roofLength, 'm');
console.log('Área útil necessária:', roofArea, 'm²');