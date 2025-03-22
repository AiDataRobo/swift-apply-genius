
import React from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

const TermsOfService = () => {
  return (
    <ContentPageLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our service"
    >
      <div className="prose prose-slate max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using SwiftApply's services, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          SwiftApply provides an AI-powered resume and cover letter generator designed to help users create, 
          edit, and optimize job application documents. Our services include but are not limited to resume 
          creation, editing, formatting, and optimization for Applicant Tracking Systems (ATS).
        </p>

        <h2>3. User Accounts</h2>
        <p>
          To access certain features of our service, you may be required to create an account. You are responsible 
          for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>

        <h2>4. User Content</h2>
        <p>
          You retain all rights to the content you submit to our service. By uploading content, you grant 
          SwiftApply a worldwide, non-exclusive license to use, store, and process this content for the purpose 
          of providing our services to you.
        </p>

        <h2>5. Prohibited Uses</h2>
        <p>
          You agree not to use SwiftApply for any unlawful purpose or in any way that might harm, damage, or 
          negatively affect the performance or functionality of our service.
        </p>

        <h2>6. Payment and Subscription</h2>
        <p>
          Certain features of SwiftApply require a paid subscription. Billing terms and conditions will be 
          provided at the time of purchase. Subscriptions will automatically renew unless canceled before the 
          renewal date.
        </p>

        <h2>7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account at our sole discretion, without notice, 
          for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          The SwiftApply service, including all content, features, and functionality, is owned by us and is 
          protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          SwiftApply is provided "as is" without warranties of any kind, either express or implied. We do not 
          guarantee that our service will be uninterrupted, secure, or error-free.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          SwiftApply shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
          resulting from your use of or inability to use our service.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of SwiftApply after such changes 
          constitutes acceptance of the new terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction 
          in which SwiftApply operates, without regard to its conflict of law provisions.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at support@swiftapply.com.
        </p>

        <p className="text-sm text-muted-foreground mt-12">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </ContentPageLayout>
  );
};

export default TermsOfService;
