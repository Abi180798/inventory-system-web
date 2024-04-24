import React from "react";
import ReactToPrint from "react-to-print";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import QRCode from "react-qr-code";
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="print-source">
        <Grid container spacing={1} >
          {/* @ts-ignore */}
          {this.props?.value.map((row: any) => (
            <Grid item>
              <div
                style={{
                  margin: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div>
                  {/* @ts-ignore */}
                  <QRCode value={row} size={50} />
                </div>

                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    fontSize: 10,
                  }}
                >
                  {row}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

class PrintQrCode extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          // @ts-ignore
          trigger={() => <Button variant="contained" disabled={!Boolean(this.props.dataArray?.length > 0)}>Cetak</Button>}
          // @ts-ignore
          content={() => this.componentRef}
        />
        {/* @ts-ignore */}
        <ComponentToPrint ref={(el) => (this.componentRef = el)} value={this.props.dataArray}
        />
      </div>
    );
  }
}

export default PrintQrCode;
