import React from 'react'
import './Dashboard.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import btc from '../../asets/img/BTC.svg'
import etc from '../../asets/img/ETC.svg'
import usd from '../../asets/img/USDC.svg'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', <Typography><img src={btc} alt="" width={"18px"}/><Typography>bitcoin</Typography></Typography>, <Typography>BTC</Typography>,<Typography>$20,752.15</Typography>),
  createData('2', <Typography> <img src={etc} alt=""  width={"18px"} /> Ethereum</Typography>, <Typography>ETH</Typography>,<Typography>$20,752.15</Typography>),
  createData('3', <Typography><img src={usd} alt=""  width={"18px"} /> USD coin</Typography>,<Typography>USDC</Typography>, <Typography>$20,752.15</Typography>),

];
function Dashboard() {
  return (
   <div className='dashboard_theme'>
     <TableContainer component={Paper}>
      <Table className='tableui' sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Coin</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Price</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  )
}

export default Dashboard