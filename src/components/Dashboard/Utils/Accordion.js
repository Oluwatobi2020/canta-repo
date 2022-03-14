import * as React from "react";
import './Accordion.css'
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: "none",
    '&:not(:last-child)': {
      borderBottom: `1px solid #0059B2`,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem'}} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 38, 76, 1)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      padding: "2rem",
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: "2rem",
    backgroundColor: "#00264C",
    color:"#ffffff"
  }));

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordionIcon"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{color:'white'}}
        >
          <Typography>How many currencies can you transact in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Canta helps you hold money in multiple currencies (over 50
            currencies) and instantly convert between<br/> them at the real exchange
            rate for a very low fee–Pounds, Dollars, Euros, Canadian Dollar, AED
            Dubai,<br/> CHY, Naira, among others.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordionIcon"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{color:'white'}}
        >
          <Typography>Can I register my business with Canta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can register your business with Canta and have a virtual
            multi-currency account with Canta.<br/> Canta doesn’t only just serve
            individuals. We are designed to also help businesses transact
            globally.<br/> Merchants who process large volumes of payments enjoy a
            discount on the transaction fees.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordionIcon"/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{color:'white'}}
        >
          <Typography>Can you do bulk transactions with Canta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a benefit to using our platform, we help B2Bs and B2Cs handle
            bulk transactions. We never run out<br/> of liquidity, therefore you can
            transact large amounts with the same ease and speed it would take to<br/>
            transact smaller amounts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordionIcon"/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{color:'white'}}
        >
          <Typography>How safe is sending money with Canta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Canta fulfills all security details necessary to help you transact
            globally. Officially licensed in all regions<br/> it currently operates
            in, you’re rest assured your money is safe with us. For your safety,
            we set up a 2-<br/>Factor Authentication for every transaction to ensure
            that only you decide who receives the money you send.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordionIcon"/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{color:'white'}}
        >
          <Typography>
            How long does it take for a transaction to be completed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With our high-speed transfer service, you are guaranteed that your
            funds will be delivered to your<br/> beneficiaries within 24hrs or less.
            Something to look forward to, soon, we will be able to achieve<br/>
            instant remittance by having currency floats in beneficiaries’ and
            receivers’ countries.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
