import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  IconButton,
} from '@mui/material';
import { Buttons } from '../Buttons';
import Skeleton from '@mui/material/Skeleton';
import { useProductDetails } from '../../hooks/useProductDetails';
import HomeIcon from '@mui/icons-material/Home';
export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading: loading,
    isError,
    error,
  } = useProductDetails(id || '');

  if (isError) {
    return (
      <div>
        Error al cargar los detalles del producto: {(error as Error).message}
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          padding: '10px',
          backgroundColor: 'black',
          borderRadius: '50%',
        }}
      >
        <IconButton color='primary' onClick={() => window.history.back()}>
          <HomeIcon />
        </IconButton>
      </div>

      <Grid
        container
        style={{ minHeight: '100vh' }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Card
            variant='outlined'
            style={{
              backgroundColor: 'beige',
              width: '100%',
              margin: 'auto',
              padding: '10px',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            }}
          >
            <CardContent>
              <Typography
                variant='h4'
                component='div'
                align='center'
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                {loading ? <Skeleton width={200} /> : product?.title}
              </Typography>
              <Container
                maxWidth='lg'
                style={{
                  padding: '10px',
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Container
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '10px',
                  }}
                >
                  <Typography variant='body1' color='textPrimary'>
                    {loading ? <Skeleton /> : product?.description}
                  </Typography>
                  <Typography variant='h3' color='textPrimary'>
                    {loading ? <Skeleton width={100} /> : `$${product?.price}`}
                  </Typography>
                  <Typography
                    variant='h5'
                    color='textPrimary'
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginBottom: '10px',
                      marginTop: '10px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      padding: '5px',
                      width: '15%',
                    }}
                  >
                    {loading ? (
                      <Skeleton width={100} />
                    ) : (
                      `${product?.category}`
                    )}
                  </Typography>
                  {product && <Buttons product={product} />}
                </Container>
                <Container>
                  {loading ? (
                    <Skeleton variant='rectangular' width={210} height={300} />
                  ) : (
                    <img
                      src={product?.image}
                      alt={product?.title}
                      style={{
                        width: '60%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                        margin: '10px',
                      }}
                    />
                  )}
                </Container>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
