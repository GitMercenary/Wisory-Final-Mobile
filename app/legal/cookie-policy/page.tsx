'use client';

import React from 'react';
import { LegalLayout } from '@/components/layouts/LegalLayout';

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="January 2025">
      <section>
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer, smartphone, or other device when
          you visit a website. They are widely used to make websites work more efficiently, provide a better
          user experience, and give website owners information about how visitors interact with their site.
        </p>
        <p>
          Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device for
          a set period of time specified in the cookie or until you delete them. Session cookies expire when
          you close your browser.
        </p>
      </section>

      <section>
        <h2>How We Use Cookies</h2>
        <p>
          Wisory Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies on
          our website to:
        </p>
        <ul>
          <li>Ensure the website functions properly and securely</li>
          <li>Remember your preferences and settings</li>
          <li>Understand how you interact with our website</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Deliver relevant content and advertisements</li>
          <li>Measure the effectiveness of our marketing campaigns</li>
        </ul>
      </section>

      <section>
        <h2>Types of Cookies We Use</h2>

        <h3>1. Essential Cookies (Strictly Necessary)</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core functionality
          such as security, network management, and accessibility. You cannot opt out of these cookies as
          the website would not work without them.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>session_id</td>
              <td>Maintains user session state across pages</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>csrf_token</td>
              <td>Prevents cross-site request forgery attacks</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>cookie_consent</td>
              <td>Stores your cookie preferences</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Analytics Cookies (Performance)</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting and reporting
          information anonymously. This data helps us improve the website&apos;s structure, content, and user experience.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distinguishes unique users by assigning a randomly generated number</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Google Analytics</td>
              <td>Maintains session state and tracks user activity</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distinguishes users for analytics purposes</td>
              <td>24 hours</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>Google Analytics</td>
              <td>Throttles request rate to limit data collection</td>
              <td>1 minute</td>
            </tr>
          </tbody>
        </table>

        <h3>3. Marketing Cookies (Targeting/Advertising)</h3>
        <p>
          These cookies are used to track visitors across websites to display relevant advertisements.
          They are also used to limit the number of times you see an advertisement and help measure the
          effectiveness of advertising campaigns.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_fbp</td>
              <td>Facebook</td>
              <td>Tracks visits across websites for ad targeting</td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>_gcl_au</td>
              <td>Google Ads</td>
              <td>Stores conversion data for Google Ads</td>
              <td>3 months</td>
            </tr>
            <tr>
              <td>li_sugr</td>
              <td>LinkedIn</td>
              <td>Collects data on user behavior for targeted advertising</td>
              <td>3 months</td>
            </tr>
          </tbody>
        </table>

        <h3>4. Functional Cookies (Preferences)</h3>
        <p>
          These cookies enable enhanced functionality and personalization, such as remembering your
          preferences (e.g., language or region). They may be set by us or by third-party providers
          whose services we have added to our pages.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>locale</td>
              <td>Remembers your language preference</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>timezone</td>
              <td>Stores your timezone for displaying correct times</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage
          statistics of the website and deliver advertisements on and through the website. The main
          third-party services we use include:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> For website analytics and performance measurement
          </li>
          <li>
            <strong>Google Tag Manager:</strong> For managing and deploying marketing tags
          </li>
          <li>
            <strong>LinkedIn Insight Tag:</strong> For conversion tracking and retargeting
          </li>
          <li>
            <strong>Facebook Pixel:</strong> For ad tracking and audience building
          </li>
          <li>
            <strong>HubSpot:</strong> For marketing automation and lead tracking
          </li>
        </ul>
        <p>
          These third parties have their own privacy policies, and we recommend you review them to
          understand how they process your data.
        </p>
      </section>

      <section>
        <h2>Managing Your Cookie Preferences</h2>
        <h3>Cookie Consent Banner</h3>
        <p>
          When you first visit our website, you will see a cookie consent banner that allows you to
          accept or decline non-essential cookies. You can change your preferences at any time by
          clicking the &quot;Cookie Settings&quot; link in the footer of our website.
        </p>

        <h3>Browser Settings</h3>
        <p>
          Most web browsers allow you to control cookies through their settings. You can typically
          find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. The following
          links may be helpful:
        </p>
        <ul>
          <li>
            <strong>Chrome:</strong>{' '}
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Manage cookies in Chrome
            </a>
          </li>
          <li>
            <strong>Firefox:</strong>{' '}
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">
              Manage cookies in Firefox
            </a>
          </li>
          <li>
            <strong>Safari:</strong>{' '}
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Manage cookies in Safari
            </a>
          </li>
          <li>
            <strong>Edge:</strong>{' '}
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Manage cookies in Edge
            </a>
          </li>
        </ul>

        <h3>Opt-Out Links</h3>
        <p>You can also opt out of specific third-party cookies using these links:</p>
        <ul>
          <li>
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">
              Facebook Ad Preferences
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer">
              LinkedIn Opt-out
            </a>
          </li>
          <li>
            <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiative Opt-out
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Consequences of Disabling Cookies</h2>
        <p>
          If you choose to disable cookies, some features of our website may not function properly.
          This may include:
        </p>
        <ul>
          <li>Inability to remember your preferences</li>
          <li>Reduced website functionality</li>
          <li>Less personalized experience</li>
          <li>Forms may not work correctly</li>
        </ul>
        <p>
          Essential cookies cannot be disabled as they are required for the basic operation of the website.
        </p>
      </section>

      <section>
        <h2>Do Not Track</h2>
        <p>
          Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not
          want your online activity tracked. Currently, there is no universal standard for how websites
          should respond to DNT signals, and our website does not currently respond to DNT browser settings.
          However, you can use the cookie management options described above to control tracking.
        </p>
      </section>

      <section>
        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
          or our data practices. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
          We encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie Policy, please contact us:
        </p>
        <p>
          <strong>Wisory Global</strong><br />
          Email: <a href="mailto:privacy@wisoryglobal.com">privacy@wisoryglobal.com</a><br />
          Address: Wisory Global HQs, HITEC City, Hyderabad, Telangana, India - 500081
        </p>
      </section>
    </LegalLayout>
  );
}
