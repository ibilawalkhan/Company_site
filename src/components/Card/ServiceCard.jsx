import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function ServiceCard({
    image,
    title,
    description,
    className = ""
}) {
    return (
        <div className={`bg-[#646262] row-span-6 rounded-xl sm:row-span-8 text-black p-2 ${className}`}>
            <div className={`bg-[#646262]`}>
                <img
                    src={image}
                    alt="Mobile icon"
                    className={`h-10 object-cover bg-[#646262] ml-3`}
                />
            </div>
            <div className={`bg-[#646262]`}>
                <Card sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                }}
                >
                    <CardActionArea sx={{ backgroundColor: '#646262', border: '#646262' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    color: '#92DEED',
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography variant="body2"
                                sx={{
                                    fontSize: '0.6rem',
                                    color: 'rgba(255, 255, 255, 0.7)'
                                }}
                            >
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}

export default ServiceCard