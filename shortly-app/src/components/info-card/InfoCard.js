import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoCard.css';

function InfoCard(props) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, maxWidth: '10%', position: 'relative', height: '16em', overflow: 'visible', marginTop: `${props.marginTop}` }}>
        <div className="cardIconContainer">
            <img src={props.icon} alt={props.alt} />
        </div>
        <CardContent className="cardContent">
            <Typography sx={{ fontSize: 20, color: 'var(--primary-text)', fontWeight: 'bold', marginBottom: '1em' }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
            <Typography sx={{ fontSize: 14, color: 'var(--secondary-text)', fontWeight: '500',}} color="text.secondary" gutterBottom>
                {props.description}
            </Typography>
        </CardContent>
  </Card>
  )
}

export default InfoCard;