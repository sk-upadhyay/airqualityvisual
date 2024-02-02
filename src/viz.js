import * as vl from 'vega-lite-api';

export const viz = vl
  .markCircle({stroke : false, size:20})
  .encode(
    vl.x().fieldT('timestamp').scale({ zero: false }),
    vl.y().fieldQ('pm10').scale({ zero: false }),
    vl.tooltip('device_id')
  );
