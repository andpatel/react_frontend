import React from 'react'
import logo from '../../asets/img/metamask.png'
import { Box, Typography, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import logo_two from '../../asets/img/1.png'
import heading_logo from '../../asets/img/Untitled-2.png'
import '../wallet/Wallet.css'

function Wallet() {
  return (
    <Box>
      <Box className='wallet_parent'>
        <Box className='logo_img'>
          <img src={logo} className="logo_size" alt="" />
          <Box className='logo_heading'>
            <Typography className='heading_text'>METAMASK</Typography>
          </Box>
          <Box className='wallet_btn'>
            <Button className='btn_tyheme'>Connect wallet</Button>
          </Box>
        </Box>
      </Box>
      <Box className='network_box'>
        <Box className='first_line'>
          <Box className='heading'>
            <Typography className='heading_txt'> <img src={heading_logo} alt="" /> Energi Network</Typography>
          </Box>
          <Box className='heading'>
            <Typography className='connect_txt'><FiberManualRecordIcon className='round_icon'/>Connect</Typography>
          </Box>
        </Box>
        <Box className='line_two'>
          <Box className='id'>
        
            <Typography className='heading_txt'> <img src={logo} className="logo_two" alt="" /> 0xbf9...18F8FbB9</Typography>
          </Box>
          <Box className='icons'>
            <Typography><ContentCopyIcon/></Typography>
            <Typography><IosShareIcon/></Typography>
          </Box>
        </Box>
        <Box className='center_text'>
          <Typography className='text_theme'>Total Balance</Typography>
          <Box className='price'>
            <Typography className='price_txt'><img src={logo_two} className="price_logo" alt="" /> 1,000</Typography>
            <Typography className='price_txt'>$ 2,500</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Wallet