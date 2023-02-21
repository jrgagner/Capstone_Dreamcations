import React from "react";

const [tavgLow, setTavgLow] = React.useState(15);
const [tavgHigh, setTavgHigh] = React.useState(27);

<ReactBootstrap.Form.Group controlId="slider_group">
          <ReactBootstrap.Form.Label>Ideal average temperature (°C)</ReactBootstrap.Form.Label>
          <RangeSlider setTavgLow={setTavgLow} setTavgHigh={setTavgHigh}/>
        </ReactBootstrap.Form.Group>
