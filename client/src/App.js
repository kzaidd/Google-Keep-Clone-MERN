import React, { useEffect , useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import keep from './images/keep.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
  const [currentid, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {

      dispatch(getPosts())
    }, [currentid, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant='h2' align='center'>
          Keep
        </Typography>
        <img className={classes.image} src={keep} alt="memories" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentid={currentid} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App