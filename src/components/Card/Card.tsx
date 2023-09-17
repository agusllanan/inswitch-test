import { Product } from '../../types';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Container,
} from '@mui/material';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import { Buttons } from '../Buttons';

export const CardComponent = ({ product }: { product: Product }) => {
  return (
    <>
      <Card
        key={product.id}
        variant='outlined'
        style={{
          width: '100%',
          height: '420px',
          display: 'inline-block',
          textAlign: 'center',
          verticalAlign: 'top',
          border: '1px solid lightgray',
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: '0.3s',
          cursor: 'pointer',
        }}
      >
        <CardContent style={{ height: '300px' }}>
          <CardMedia
            component='img'
            height='194'
            image={product.image}
            alt={product.title}
          />
          <LinesEllipsis
            maxLine={1}
            text={product.title}
            ellipsis='...'
            trimRight
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '10px',
              marginTop: '10px',
            }}
          />
          <Typography variant='body1' color='textSecondary'>
            ${product.price}
          </Typography>
        </CardContent>
        <Container
          sx={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'row',
            flexWrap: 'wrap',
          }}
        >
          <CardActions
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Button
              variant='contained'
              color='secondary'
              size='small'
              component={Link}
              to={`/productos/${product.id}`}
              sx={{ width: '300px' }}
            >
              Ver producto
            </Button>
          </CardActions>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Buttons product={product} />
          </CardActions>
        </Container>
      </Card>
    </>
  );
};
