import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HomeIcon from '@mui/icons-material/Home';
import Dashboard from '../Dashboard/Dashboard';
import Wallet from '../wallet/Wallet';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import '../tabs/Tabs.css';


function Tabs() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='tabes_main'>
      <Box sx={{ width: '100%', typography: 'body1', color: '#fff', }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab icon={<HomeIcon />} label="Home" sx={{ color: '#fff', fontWeight: 'bold', flexDirection:'inherit'}} value="1" />
              <Tab icon={<AccountBalanceWalletIcon/>} label="Wallet" style={{ color: '#fff', fontWeight: 'bold', flexDirection:'inherit' }} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Dashboard />
          </TabPanel>
          <TabPanel value="2">
            <Wallet />
          </TabPanel>
        </TabContext>
      </Box>
        <Box className='sun_icon'>
          <WbSunnyIcon sx={{ color: '#fff' }} />
          </Box>
    </Box>
  )
}

export default Tabs