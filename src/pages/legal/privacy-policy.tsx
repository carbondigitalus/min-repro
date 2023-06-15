// NPM Modules
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { NextSeo } from 'next-seo';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';

export default class LegalPrivacyPolicyPage extends React.Component {
  render() {
    return (
      <GlobalPageWrapper>
        <NextSeo
          title='Privacy Policy | Veteran Database'
          canonical='https://veterandb.com/legal/privacy-policy'
          openGraph={{ url: 'https://veterandb.com/legal/privacy-policy' }}
        />
        <Box
          component={'main'}
          className='legal-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <Grid className='content-2col' container spacing={2}>
            <Grid item xs={6} className='text-col-center privacy-policy card-center'>
              <Typography variant='h1'>Privacy Policy</Typography>
              <div id='policy'>
                <link href='https://app.termageddon.com/css/policy.css?v=20210506' rel='stylesheet' />
                <article>
                  <p className='tg-last-updated-date'>Last updated: Dec 14, 2022 8:09 AM</p>
                  <p>
                    We value your privacy very highly. Please read this Privacy Policy carefully before using the
                    https://carbondigital.us/ Website (the &quot;Website&quot;) operated by Carbon Digital, a(n) Limited
                    Liability Company formed in North Carolina, United States (&quot;us,&quot; &quot;we,&quot;
                    &quot;our&quot;) as this Privacy Policy contains important information regarding your privacy and
                    how we may use the information we collect about you.
                  </p>
                  <p>
                    Your access to and use of the Website is conditional upon your acceptance of and compliance with
                    this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to:
                    visitors, users, and others, who wish to access or use the Website.
                  </p>
                  <p>
                    By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree
                    with any part of the Privacy Policy, then you do not have our permission to access or use the
                    Website.
                  </p>
                  <h2 className='text-center'>
                    What information we collect, where we get this information, how we use this information, what
                    happens if we don&apos;t have it, and the legal basis for processing this information
                  </h2>
                  <p>
                    We collect any and all information that you enter on this Website. We collect the following
                    information about you:
                  </p>
                  <div className='accordions'>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Identifying information - Name</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Name</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Identifying information - Billing address</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Billing address</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Identifying information - Phone number</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Phone number</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Identifying information - IP address</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>IP address</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Identifying information - Email address</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Email address</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Financial information - Card expiration date</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Card expiration date</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Financial information - Credit card or debit card number</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Credit card or debit card number</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>Financial information - Card CVV (security code)</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>Card CVV (security code)</div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          Internet or other electronic activity - Information regarding your interaction with our
                          website or application
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Specific piece of information</h4>
                          <div className='accordion-section-content'>
                            Information regarding your interaction with our website or application
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Legal basis for processing this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>The user has provided consent to the processing of their information;</li>
                              <li>Processing is necessary to perform a contract with the user;</li>
                              <li>
                                Processing is necessary in order to take steps that the user has requested prior to
                                entering into a contract;
                              </li>
                              <li>Processing is necessary for compliance with a legal obligation;</li>
                              <li>
                                Processing is necessary for the purpose of a legitimate interest pursued by us or by a
                                third party.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Where we get this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Information submitted by the consumer;</li>
                              <li>Social networks;</li>
                              <li>Tracking pixels;</li>
                              <li>
                                The observation and recording of activities by the business, such as through the use of
                                cookies.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>How we use this information</h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Analytics;</li>
                              <li>Counting ad impressions to unique visitors;</li>
                              <li>Creating new features;</li>
                              <li>Debugging to identify and repair errors;</li>
                              <li>Detecting security incidents;</li>
                              <li>Enforcing our Terms of Service;</li>
                              <li>Marketing and advertising;</li>
                              <li>Participation in surveys and contests;</li>
                              <li>Performing services;</li>
                              <li>Processing payments;</li>
                              <li>Providing customer service;</li>
                              <li>Resolving disputes;</li>
                              <li>Verifying position and quality of ad impressions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>
                            What happens if we don&apos;t have this information
                          </h4>
                          <div className='accordion-section-content'>
                            <ul>
                              <li>Our use of your data for analytics will not be possible;</li>
                              <li>
                                Our use of your data for counting ad impressions to unique visitors will not be
                                possible;
                              </li>
                              <li>Our use of your data for creating new features will not be possible;</li>
                              <li>
                                Our use of your data for debugging to identify and repair errors will not be possible;
                              </li>
                              <li>Our use of your data for detecting security incidents will not be possible;</li>
                              <li>Our use of your data for enforcing our Terms of Service will not be possible;</li>
                              <li>Our use of your data for marketing and advertising will not be possible;</li>
                              <li>
                                Our use of your data for participation in surveys and contests will not be possible;
                              </li>
                              <li>Our use of your data for performing services will not be possible;</li>
                              <li>Our use of your data for processing payments will not be possible;</li>
                              <li>Our use of your data for providing customer service will not be possible;</li>
                              <li>Our use of your data for resolving disputes will not be possible;</li>
                              <li>
                                Our use of your data for verifying position and quality of ad impressions will not be
                                possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                  <h2 className='text-center'>With whom we share your personal information</h2>
                  <p>We do not share your personal information with any third parties.</p> We have implemented the
                  following measures to protect and safeguard your personal information:
                  <ul>
                    <li>Limiting the amount of personal information that we collect to strictly necessary only;</li>
                    <li>
                      Using ssl or other secure connection technologies when receiving or sending personal information
                      beyond internal networks;
                    </li>
                    <li>Destroying the personal information that we no longer need;</li>
                    <li>Performing regular risk assessments;</li>
                    <li>Mitigating risks by following a risk treatment plan;</li>
                    <li>Having comprehensive security policies and procedures;</li>
                    <li>Screening all employees with access to personal information;</li>
                    <li>Training our employees;</li>
                    <li>Requiring our employees to sign confidentiality agreements;</li>
                    <li>Encrypting laptops, usbs and other portable media;</li>
                    <li>Implementing and monitoring intrusion prevention and detection systems;</li>
                    <li>Maintaining up-to-date software and safeguards;</li>
                    <li>Performing regular due diligence of vendors;</li>
                    <li>Implementing physical security measures;</li>
                    <li>
                      Physically and/or logically separating systems containing personal information from public
                      networks such as the internet.
                    </li>
                  </ul>
                  <h2 className='text-center'>Sale of your information</h2>
                  <p>We do not sell your personal information. </p>
                  <h2 className='text-center'>Cookies</h2>
                  <p>
                    A cookie is a small piece of data sent from a website and stored on your device by your browser.
                    This Website collects cookies and may use cookies for reasons including, but not limited to:
                  </p>
                  <ul>
                    <li>Analyzing our Website traffic;</li>
                    <li>Analyzing your interactions with advertisements;</li>
                    <li>Identifying if you are signed in to the Website;</li>
                    <li>Testing content on the Website;</li>
                    <li>Storing information about your preferences;</li>
                    <li>Recognizing when you return to the Website.</li>
                  </ul>
                  <p>
                    Most web browsers automatically accept cookies. However, you can modify your browser settings to
                    decline cookies, if you prefer. This setting may prevent you from taking full advantage of the
                    Website.
                  </p>
                  <h2 className='text-center'>Children&apos;s privacy</h2>
                  <p>
                    This Website is intended for use by a general audience and does not offer services to children.
                    Should a child whom we know to be under 18 send personal information to us, we will use that
                    information only to respond to that child to inform him or her that they cannot use this Website.
                  </p>
                  <h2 className='text-center'>Analytics programs</h2>
                  <p>
                    This Website uses Google Analytics to collect information about you and your behaviors. If you would
                    like to opt out of Google Analytics, please visit&nbsp;
                    <a href='https://tools.google.com/dlpage/gaoptout/' target='_blank' rel='noreferrer'>
                      https://tools.google.com/dlpage/gaoptout/
                    </a>
                    .
                  </p>
                  <h2 className='text-center'>Information retention</h2>
                  <p>We retain all of the information that we collect for a period of 5 years.</p>
                  <h2 className='text-center'>Direct marketing</h2>
                  <p>
                    We use the information that we collect about you for direct marketing purposes. Direct marketing is
                    the act of selling products or services directly to consumers rather than through retailers. You
                    may, at any time, request that we cease to use your information for direct marketing purposes by
                    emailing us at legal@carbondigital.us.
                  </p>
                  <h2 className='text-center'>Your rights</h2>
                  <p>
                    Depending upon where you reside, you may have the following rights with regard to your personal
                    information:
                  </p>
                  <div className='accordions'>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to access the personal information that we have collected about you.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of Canada, the European Union and/or the European Economic Area, and the United
                            Kingdom only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to say no to the sale of your personal information.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>Residents of Nevada only</div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to request that we delete all or some of the personal information that we have
                          collected on you.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of the European Union and/or the European Economic Area and the United Kingdom
                            only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to ask us to transmit your personal information that we have collected on you to
                          another provider (where technically feasible).
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of the European Union and/or the European Economic Area and the United Kingdom
                            only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to request that we amend any of the information that we have collected about you.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of Canada, the European Union and/or the European Economic Area, and the United
                            Kingdom only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to withdraw your consent to the processing of your data.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of Canada, the European Union and/or the European Economic Area, and the United
                            Kingdom only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to request that we restrict the processing of your data.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of the European Union and/or the European Economic Area and the United Kingdom
                            only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>
                          The right to lodge a complaint regarding our collection, sharing and processing of data with
                          competent authorities in the proper jurisdiction.
                        </h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of Canada, the European Union and/or the European Economic Area, and the United
                            Kingdom only
                          </div>
                        </div>
                      </div>
                    </details>
                    <details className='accordion'>
                      <summary className='accordion-summary'>
                        <h3 className='accordion-heading'>The right to stop receiving unwanted direct marketing.</h3>
                      </summary>
                      <div className='accordion-content'>
                        <div className='accordion-section'>
                          <h4 className='accordion-section-heading'>Applies To</h4>
                          <div className='accordion-section-content'>
                            Residents of the European Union and/or the European Economic Area only
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                  <h2 className='text-center'>Exercising your rights</h2>
                  <p>You may exercise the rights specified above by submitting a consumer request to: </p>
                  <p></p>
                  <p>
                    We will need to verify your identity prior to effectuating your request. To verify your identity,
                    you will need to provide us with the following information with your request:
                  </p>
                  <p></p>
                  <ul>
                    <li>Name;</li>
                    <li>Billing address;</li>
                    <li>Phone number;</li>
                    <li>IP address;</li>
                    <li>Email address.</li>
                  </ul>
                  <p>
                    Please note that we may be unable to process your request if you do not provide us with the above
                    information.
                  </p>
                  <h2 className='text-center'>Accountability</h2>
                  <p>The following person is accountable and responsible for our privacy practices and procedures: </p>
                  <p>
                    Jared Ledbetter <br />
                    CEO <br />
                    (704) 368-0050 <br />
                    legal@carbondigital.us
                  </p>
                  <p>
                    You may lodge a complaint with us by contacting the person accountable and responsible for our
                    privacy practices and procedures at the contact information above. You may also lodge a complaint
                    with the Office of the Privacy Commissioner of Canada by visiting&nbsp;
                    <a
                      href='https://priv.gc.ca/en/report-a-concern/file-a-formal-privacy-complaint/file-a-complaint-about-a-business/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      this page
                    </a>
                    &nbsp; or calling 1-800-282-1376.
                  </p>
                  <h2 className='text-center'>Location of data processing</h2>
                  <p>All data processing activities undertaken by us take place in Pennsylvania. </p>
                  <h2 className='text-center'>Third-party websites</h2>
                  <p>
                    This Website may contain hyperlinks to websites operated by parties other than us. We provide such
                    hyperlinks for your reference only. We do not control such websites and are not responsible for
                    their contents or the privacy or other practices of such websites. It is up to you to read and fully
                    understand their Privacy Policies. Our inclusion of hyperlinks to such websites does not imply any
                    endorsement of the material on such websites or any association with their operators.
                  </p>
                  <h2 className='text-center'>Do Not Track</h2>
                  <p>
                    Do Not Track is a preference you can set on your browser to inform websites that you do not want to
                    be tracked. We do not support Do Not Track (&quot;DNT&quot;). You can either enable or disable Do
                    Not Track by visiting the Preferences or Settings page of your browser.
                  </p>
                  <h2 className='text-center'>Changes to Privacy Policy</h2>
                  <p>
                    We reserve the right to amend this Privacy Policy at any time. We will notify you of any changes to
                    this Privacy Policy by posting the updated Privacy Policy to this website or application.
                  </p>
                  <h2 className='text-center'>Questions</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at legal@carbondigital.us.
                  </p>
                </article>
              </div>
            </Grid>
          </Grid>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
