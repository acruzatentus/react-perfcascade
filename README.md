# react-perfcascade

This repo is a react wrapper around [https://github.com/micmro/PerfCascade](https://github.com/micmro/PerfCascade)

## Usage

```
npm i --save react-perfcascade
```

```

import 'react-perfcascade/dist/react-perfcascade.css';
import {HarFileView} from 'react-perfcascade';

import harData from './example.har';

...

<HarFileView harData={harData} />
```