import React from 'react';
import { PerfCascade } from './PerfCascade';
import { WithZipJs } from './WithZipJs';

export { PerfCascade };
export { WithZipJs };

const HarFileView = ({ harData }) => (<WithZipJs>
    <PerfCascade harData={harData} />
</WithZipJs>);

export { HarFileView };