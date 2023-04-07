import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
    }}>
      <CircularProgress sx={{
        color: 'var(--primary)'
      }}/>
    </div>
  )
}

export default Loader
