
import React from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

const PrivacyPolicy = () => {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
    >
      <div className="prose prose-slate max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, 
          submit a resume or cover letter, or contact us for support. This information may include:
        </p>
        <ul>
          <li>Personal identifiers (name, email address, phone number)</li>
          <li>Professional information (work history, education, skills)</li>
          <li>Account credentials</li>
          <li>Any other information you choose to include in your documents</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>Providing, maintaining, and improving our services</li>
          <li>Creating and updating your account</li>
          <li>Processing transactions</li>
          <li>Sending technical notices, updates, and support messages</li>
          <li>Responding to your comments and questions</li>
          <li>Developing new products and services</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your 
          personal information. However, no electronic transmission or storage technology is completely secure, 
          and we cannot guarantee that your information will not be accessed, disclosed, altered, or destroyed.
        </p>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your information in the following circumstances:
        </p>
        <ul>
          <li>With service providers who perform services on our behalf</li>
          <li>To comply with legal obligations</li>
          <li>To protect the rights, property, or safety of EnhanceResume, our users, or others</li>
          <li>In connection with a merger, sale of company assets, financing, or acquisition</li>
        </ul>

        <h2>5. Your Rights and Choices</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>Accessing, correcting, or deleting your data</li>
          <li>Objecting to our use of your data</li>
          <li>Requesting portability of your data</li>
          <li>Withdrawing consent</li>
        </ul>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to collect information about how you interact with our services. 
          You can configure your browser to refuse cookies or alert you when cookies are being sent.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our services are not intended for children under 16 years of age. We do not knowingly collect personal 
          information from children under 16.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
          new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@enhanceresume.com.
        </p>

        <p className="text-sm text-muted-foreground mt-12">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </ContentPageLayout>
  );
};

export default PrivacyPolicy;
