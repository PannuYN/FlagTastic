import { Card, CardContent, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public'; // Example icon
import LanguageIcon from '@mui/icons-material/Language'; // Example icon
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Icon for currency
import { useTranslation } from 'react-i18next';

const Test = (props) => {
  const { special = "switzerland" } = props;
  const callString = (caption) => `${special}.${caption}`;
  //for language switch
  const { t } = useTranslation();
  return (
    <div className='flex relative justify-start'>
      <div className="absolute inset-0 w-full h-full">
        <img src='/images/switzerland/facts-img.jpg' className='w-2/3 ml-auto opacity-80 -z-10'
        style={{
          maskImage: 'radial-gradient(ellipse closest-side, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse closest-side, black 50%, transparent 100%)',
        }}
             
         />
      </div>

      <Card sx={{ maxWidth: 400 }} className='z-10 m-5 bg-transparent border-none'>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {t(callString('facts'))}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PublicIcon /> Capital: <strong>{t(callString('capital'))}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LanguageIcon /> Official Language: <strong>{t(callString('officialLanguage'))}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AttachMoneyIcon /> Currency: <strong>{t(callString('currency'))}</strong>
          </Typography>
          {/* Add more facts with different icons */}
        </CardContent>
      </Card>
    </div>

  );
};

export default Test;
