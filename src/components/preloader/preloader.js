import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import p from './pleloader.module.css'
import { SemipolarLoading } from 'react-loadingg';


const PreLoader = (props) => {

  return (
      <div >
              <SemipolarLoading  color='#f90e0e' />
     </div>
  )
}
export default PreLoader;
