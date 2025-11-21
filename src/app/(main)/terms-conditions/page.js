import React from 'react';
import ContentTemplate from '@/components/template/ContentTemplate';
import { termsConditionsData } from '@/data/ContentData';

export const metadata = termsConditionsData.metadata;

export default function TermsConditionsPage() {
  return (
    <ContentTemplate
      metadata={termsConditionsData.metadata}
      bannerData={termsConditionsData.bannerData}
      headerData={termsConditionsData.headerData}
      tableOfContents={termsConditionsData.tableOfContents}
      content={termsConditionsData.content}
    />
  );
}
