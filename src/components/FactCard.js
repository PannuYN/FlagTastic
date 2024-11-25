import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function FactCard(props) {
    //for reusable purpose
    const callString = (caption) => `${country}.${caption}`;
    //for language switch
    const { t } = useTranslation();

    const { type, country } = props;
    const img_src = `/images/${country}/${type}.jpg`;
    const title = t(callString(type));
    const paragraph = t(callString(`${type}-paragraph`));

    return (
        <Card sx={{ maxWidth: 500 }} className="rounded-md shadow-lg bg-violet-900/90 text-white">
            {/* Image Section */}
            <CardMedia
                sx={{ height: 110 }}
                image={img_src}
                title="jfoe"
                className="object-cover"
            />

            {/* Content Section */}
            <CardContent className="h-32 overflow-hidden">  {/* Control height */}
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" className="text-sm text-gray-200">
                    {paragraph}
                </Typography>
            </CardContent>

            {/* Actions Section */}
            <CardActions>
                <Button size="small">Got it!</Button>
            </CardActions>
        </Card>

    );
}

export default FactCard;
