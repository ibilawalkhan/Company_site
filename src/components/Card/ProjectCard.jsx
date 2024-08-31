import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

function ProjectCard({
    image,
    title,
    date,
    description,
    className = ""
}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={`rounded-xl text-black p-2 ${className}`} onClick={handleClickOpen}>
                <Card
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        borderRadius: '15px',
                        overflow: 'hidden',
                    }}
                >
                    <CardActionArea
                        sx={{
                            backgroundColor: '#646262',
                            border: '#646262',
                            height: '200px',
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <CardContent className='h-full flex flex-col justify-end bg-black bg-opacity-50'>
                            <Typography variant="body2"
                                sx={{
                                    fontSize: '0.6rem',
                                    color: 'rgba(255, 255, 255, 0.7)'
                                }}
                            >
                                {date}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    color: '#92DEED',
                                }}
                            >
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <img src={image} alt="Project" className="w-full h-auto mb-4" />
                    <Typography variant="subtitle1" gutterBottom>
                        Date: {date}
                    </Typography>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
                <Button onClick={handleClose} color="primary" sx={{ margin: '0 16px 16px 0' }}>
                    Close
                </Button>
            </Dialog>
        </>
    );
}

export default ProjectCard;
