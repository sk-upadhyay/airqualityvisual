
import './App.css';
import * as vega  from 'vega';
import * as vegaLite  from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { config } from './config';
import { getData } from './getData';
import { viz } from './viz';

vl.register(vega,vegaLite,{
  view:{render:'svg'},
  init:view=>{view.tooltip(new Handler().call);}
});

function App() {
  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);

    document.body.appendChild(await marks.render());
  };

  run();

  
}

export default App;
