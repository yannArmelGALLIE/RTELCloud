import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Lottie from 'lottie-react';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CustomCard = ({animation, title, subTitle, textColor, background}) => {
  return (
    <Card sx={{ maxWidth: 360, display: "flex", flexDirection: "column" }}>
      <CardActionArea>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Lottie 
            animationData={animation} 
            loop={true} 
            style={{ width: 200, height: 200 }}
          />
        </div>
        <CardContent sx={{ backgroundColor: background, }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: textColor, fontSize: 35 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: textColor, fontSize: 20 }}>
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
