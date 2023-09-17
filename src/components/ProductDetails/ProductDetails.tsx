import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  IconButton,
  Skeleton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Buttons } from '../Buttons';
import { useProductDetails } from '../../hooks/useProductDetails';
import HomeIcon from '@mui/icons-material/Home';
import { Helmet } from 'react-helmet';
export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const {
    data: product,
    isLoading: loading,
    isError,
    error,
  } = useProductDetails(id ?? '');

  if (isError) {
    return (
      <div>Error al cargar los detalles del producto: {error.message}</div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{loading ? 'Cargando...' : product?.title}</title>
      </Helmet>

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
        <Grid item xs={12} sm={10} md={10} lg={10}>
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
                style={{ color: 'black', fontWeight: 'bold', padding: '10px' }}
              >
                {loading ? <Skeleton width={200} /> : product?.title}
              </Typography>
              <Container
                maxWidth='lg'
                style={{
                  padding: '10px',
                  margin: 'auto',
                  display: 'flex',
                  flexDirection:
                    isMobile || isTablet ? 'column-reverse' : 'row',
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
                      width: '35%',
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
                <Container
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    margin: 'auto',
                  }}
                >
                  {loading ? (
                    <Skeleton variant='rectangular' width={210} height={300} />
                  ) : (
                    <img
                      src={product?.image}
                      alt={product?.title}
                      height={isMobile ? '300px' : '500px'}
                      style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                        margin: 'auto',
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
