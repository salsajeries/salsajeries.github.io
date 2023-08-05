import './ProjectMenu.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProjectItem from './ProjectItem';
import Projects from '../data/projects.json';
import {
    QR1, QR2, QR3,
    U1, U2, U3, U4,
    ATTS1, ATTS2, ATTS3,
    PW1, PW2, PW3, PW4,
    NCW1, NCW2
} from '../assets/images'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
};
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};
  


function ProjectMenu() {
    
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const projectImages = [
        [QR1, QR2, QR3],
        [U1, U2, U3, U4],
        [ATTS1, ATTS2, ATTS3],
        [PW1, PW2, PW3, PW4],
        [],
        [NCW1, NCW2]
    ];

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ width: '100%'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}
                    onChange={handleChange}
                    textColor="#EAE0D5"
                    variant='scrollable'
                    scrollButtons='auto'
                    TabIndicatorProps={{style: {background:'#EAE0D5'}}}
                >
                    {Projects.map((p) => {
                        return (
                            <Tab
                                label={p.title}
                                {...a11yProps(0)}
                                style={{fontFamily: 'Varela Round, sans-serif'}}
                            />
                        );
                    })}
                </Tabs>
            </Box>
                {Projects.map((p) => {
                    return (
                        <TabPanel value={value} index={p.index} width={'100%'}>
                            <ProjectItem project={p} images={projectImages[p.index]}></ProjectItem>
                        </TabPanel>
                    );
                })}
        </Box>
    );
}

export default ProjectMenu;