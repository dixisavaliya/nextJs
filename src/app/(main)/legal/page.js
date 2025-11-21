import React from 'react';
import ContentTemplate from '@/components/template/ContentTemplate';
import { legalData } from '@/data/ContentData';

export const metadata = legalData.metadata;

export default function LegalPage() {
  return (
    <ContentTemplate
      metadata={legalData.metadata}
      bannerData={legalData.bannerData}
      headerData={legalData.headerData}
      tableOfContents={legalData.tableOfContents}
      content={legalData.content}
    />
  );
}
