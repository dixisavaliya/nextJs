import React from 'react';
import ContentTemplate from '@/components/template/ContentTemplate';
import { privacyPolicyData } from '@/data/ContentData';

export const metadata = privacyPolicyData.metadata;

export default function PrivacyPolicyPage() {
  return (
    <ContentTemplate
      metadata={privacyPolicyData.metadata}
      bannerData={privacyPolicyData.bannerData}
      headerData={privacyPolicyData.headerData}
      tableOfContents={privacyPolicyData.tableOfContents}
      content={privacyPolicyData.content}
    />
  );
}
