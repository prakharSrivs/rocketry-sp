import { Grid, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { CardDetail } from '../central-console'
import moment from 'moment';

const styles = {
    cardStyles:{
        margin:{
            xs:"0.5rem",
            md:"1rem",
        },
        padding:{
            xs:"1rem",
            md:"1.5rem",
        },
        background:"#141B23",
        maxWidth:"300px",
        flexGrow:"1",
    },
    cardHeader:{
        fontFamily:"Ubuntu",
        fontSize:{
            xs:"20px",
            md:"24px",
        },
        fontWeight:600,
        color:"#CDCDCD"
    },
    goNoGoCard:{
        padding:"0.5rem",
        mt:"0.5rem",
        border:"1px solid #CDCDCD",
    },
    detailHeader:{
        fontFamily:"Ubuntu",
        fontSize:{
            xs:"14px",
            md:"18px"
        },
        textAlign:{
            md:"left",
            xs:"center",
        },
        mt:{
            xs:"5px",
            md:"8px",
        },
        color:"#CDCDCD",
    }
}

const GoNoGoDetail = ({header, go})=>{
    return (
        <Grid display={"flex"} justifyContent={"space-between"} mt={"5px"}>
            <Typography sx={styles.detailHeader}>{header}:</Typography>
            <Button variant="contained" color={go?"success":"error"}>
                {go ? "Go" : "No Go"}
            </Button>
        </Grid>
    )
}

const StatusCard = () => {
  return (
    <Card sx={styles.cardStyles}>
        <Typography sx={styles.cardHeader}>Status</Typography>
        <CardDetail header={"Battery Voltage"} value={"4.2V"} />
        <CardDetail header={"Time"} value={moment().format('HH:mm:ss')} />
        <Card sx={styles.goNoGoCard}>
            <GoNoGoDetail header={"Telemetry"} go={true} />
            <GoNoGoDetail header={"Avioinics"} go={true} />
            <GoNoGoDetail header={"Propulsion"} go={false} />
            <GoNoGoDetail header={"Weather"} go={true} />
            <GoNoGoDetail header={"Range"} go={false} />
            <GoNoGoDetail header={"Parachutes"} go={true} />
            <GoNoGoDetail header={"Payload"} go={true} />
            <GoNoGoDetail header={"Tracking"} go={true} />
        </Card>
    </Card>
  )
}

export default StatusCard