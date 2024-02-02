import * as vl from 'vega-lite-api';

export const viz = vl
  .markBar()
  .encode(
    vl.x().fieldQ('temperature').scale({ zero: false }),
    vl.y().fieldQ('pm10').scale({ zero: false }),
    vl.tooltip('device_id')
  );
