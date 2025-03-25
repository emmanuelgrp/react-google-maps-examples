//import { useState, useEffect } from 'react';
import './App.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const listaUsuarios = [
  { nombre: "Carlos", apellido: "Gómez", edad: 25 },
  { nombre: "Ana", apellido: "López", edad: 30 },
  { nombre: "Pedro", apellido: "Martínez", edad: 16 }, // Menor de edad
  { nombre: "Lucía", apellido: "Fernández", edad: 17 }, // Menor de edad
  { nombre: "Javier", apellido: "Rodríguez", edad: 22 },
  { nombre: "Mariana", apellido: "Pérez", edad: 28 }
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Apellido</TableCell>
            <TableCell align="center">Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listaUsuarios.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.nombre}
              </TableCell>
              <TableCell align="center">{row.apellido}</TableCell>
              <TableCell align="center">{row.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function App() {
  return (
    <div className="App">
      <BasicTable />
    </div>
  );
}

export default App;
