import React from 'react';
import { PerfCascade } from './PerfCascade';
import { WithZipJs } from './WithZipJs';

export {PerfCascade};
export {WithZipJs};

export default ({ harData }) => (<WithZipJs>
    <PerfCascade harData={harData} />
</WithZipJs>)