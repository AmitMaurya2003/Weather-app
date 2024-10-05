import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import "./InfoBox.css"; 
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    const IMG_URL = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=0&k=20&c=rXSudGCCelYGe1O4y8Ix3txjVC-UdBlCLa8DIgRr4mg=";
    let HOT_URL = "https://images.unsplash.com/photo-1648220073452-648960ffec43?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1638253910847-b98cac8387c1?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='infoBox'> 
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= { info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ?<ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
           <p>Temperature - {info.temp}&deg;C</p>
           <p>Humidity - {info.humidity}</p>
           <p> Min Temperature - {info.tempMin}&deg;C</p>
           <p>Max Temperature - {info.tempMax}&deg;C</p>
           <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C.</p>
        </Typography>
      </CardContent> 
    </Card>
    </div>
    </div>
    )
};