// NPM Modules
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Head from 'next/head';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';

export default class LegalTermsConditionsPage extends React.Component {
  render() {
    return (
      <GlobalPageWrapper>
        <Head>
          <title>Terms &amp; Conditions | Veteran Database</title>
          <meta name='description' content='Veteran Database @VeteranDB' />
        </Head>
        <Box
          component={'main'}
          className='legal-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <Grid className='content-2col' container spacing={2}>
            <Grid item xs={6} className='text-col-center terms-conditions card-center'>
              <Typography variant='h1'>Terms &amp; Conditions</Typography>
              <div id='policy'>
                <link href='https://app.termageddon.com/css/policy.css?v=20210506' rel='stylesheet' />
                <article>
                  <p className='tg-last-updated-date'>Last updated: 2021-03-30 21:28:28</p>
                  <p>
                    Please read this Terms of Service (&quot;Terms,&quot; &quot;Terms of Service&quot;) carefully before
                    using the https://carbondigital.us/ website (the &quot;Website&quot;) operated by Carbon Digital,
                    a(n) Limited Liability Company formed in North Carolina, United States (&quot;us,&quot;
                    &quot;we,&quot; &quot;our&quot;) as this Terms of Service contains important information regarding
                    limitations of our liability. Your access to and use of this Website is conditional upon your
                    acceptance of and compliance with these Terms. These Terms apply to everyone, including but not
                    limited to visitors, users and others, who wish to access and use the Website.
                  </p>
                  <p>
                    By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any
                    part of the Terms, then you do not have our permission to access or use the Website.
                  </p>
                  <h2 className='text-center'>Our offers and pricing</h2>
                  <p>
                    We offer services and digital products on this Website. The price of these services and digital
                    products can be found listed on the Website. This price does not include taxes or other fees that
                    you may be charged.
                  </p>
                  <h2 className='text-center'>Purchases</h2>
                  <p>
                    When you make a purchase on the Website, you will be using a third party payment processor, Stripe,
                    that will collect your payment information and process your payment. We are not responsible for the
                    collection, use, sharing or security of your billing information by Stripe. The following payment
                    method(s) are accepted by the third party payment processor: American Express, MasterCard, and Visa.
                  </p>
                  <p>
                    You hereby represent and warrant that you have the legal right to use the payment method(s) in
                    connection with any purchase and that the information that you supply to us and to the third party
                    payment processor(s) is true, correct and complete.
                  </p>
                  <h2 className='text-center'>Cancellation policy</h2>
                  <p>
                    We do not offer you the ability to cancel any purchases that you have made of the services and
                    digital products offered on our Website.
                  </p>
                  <p>We do not reserve the right to cancel your purchase.</p>
                  <h2 className='text-center'>Refund policy</h2>
                  <p>We do not offer refunds on any purchases made on this Website.</p>
                  <h2 className='text-center'>Advance payments</h2>
                  <p>
                    We may ask you to provide an advance payment on any purchase made of the services and digital
                    products offered on our Website. An advance payment is a partial payment of the total purchase price
                    that will help pay for our actual expenses while providing the services and digital products.
                  </p>
                  <p>
                    We do not reserve the right to cancel your purchase and, as such, we do not refund advance payments.
                  </p>
                  <p>
                    We do not offer you the ability to cancel any purchases that you have made of the services and
                    digital products offered on this Website. As such, we do not refund advance payments.
                  </p>
                  <h2 className='text-center'>Deposits</h2>
                  <p>
                    We may ask you to provide a deposit for purchases made of the services and digital products offered
                    on our Website. A deposit is a payment made to reserve the services and digital products.
                  </p>
                  <p>We do not reserve the right to cancel your purchase. As such, we do not refund deposits.</p>
                  <p>
                    We do not offer you the ability to cancel any purchases that you have made of the services and
                    digital products offered on our Website. As such, we do not refund deposits.
                  </p>
                  <h2 className='text-center'>
                    <span className='text-uppercase'>No warranty on purchases</span>
                  </h2>
                  <p className='text-uppercase'>
                    The items or services displayed or sold on this Website are provided “as is,” No warranty, express
                    or implied (including any implied warranty of merchantability, of satisfactory quality or fitness
                    for a particular purpose or use) shall apply to any items or services displayed or sold on this
                    Website, whether arising by law, course of dealing, course of performance, usage of trade or
                    otherwise.
                  </p>
                  <h2 className='text-center'>Remedies</h2>
                  <p>
                    You agree that the remedies for breach of this Terms of Service as it relates to your purchase shall
                    be:
                  </p>
                  <ul>
                    <li>repair;</li>
                    <li>replacement;</li>
                    <li>price reduction.</li>
                  </ul>
                  <p>
                    You also agree that the remedy for breach of this Terms of Service as it relates to your purchase
                    shall be to pursue dispute resolution as provided in the “governing law, severability, dispute
                    resolution, venue and class action waiver” section below. These remedies intended to be your sole
                    and exclusive remedies for any breach of this Terms of Service as it relates to your purchase.
                  </p>
                  <h2 className='text-center'>Prohibited uses</h2>
                  <p>
                    You agree that you will use this Website in accordance with all applicable laws, rules, regulations
                    and these Terms at all times. The following is a non-exhaustive list of prohibited uses of this
                    Website. You agree that you will not perform any of the following prohibited uses:
                  </p>
                  <ol>
                    <li>
                      Impersonating or attempting to impersonate Carbon Digital or its employees, representatives,
                      subsidiaries or divisions;
                    </li>
                    <li>Misrepresenting your identity or affiliation with any person or entity;</li>
                    <li>
                      Sending or attempting to send any advertising or promotional material, including but not limited
                      to spam, junk mail, chain mail or any similar material;
                    </li>
                    <li>
                      Engaging in any conduct that restricts or inhibits any person&apos;s use or enjoyment of the
                      Website, or which, as determined in our sole discretion, may harm us or the users of this Website
                      or expose us or other users to liability;
                    </li>
                    <li>
                      Using the Website in any manner that could disable, overburden, damage or impair the Website or
                      interfere with another party’s use of the Website;
                    </li>
                    <li>
                      Using any robot, spider or other similar automatic technology, process or means to access or use
                      the Website for any purpose, including monitoring or copying any of the material on this Website;
                    </li>
                    <li>
                      Using any manual process or means to monitor or copy any of the material on this Website or for
                      any other unauthorized purpose;
                    </li>
                    <li>
                      Using any device, software, means or routine that interferes with the proper working of the
                      Website, including but not limited to viruses, trojan horses, worms, logic bombs or other such
                      materials;
                    </li>
                    <li>
                      Attempting to gain unauthorized access to, interfering with, damaging or disrupting any parts of
                      the Website, the server(s) on which the Website is stored, or any server, computer or database
                      connected to the Website;
                    </li>
                    <li>
                      Attempting to attack or attacking the Website via a denial-of-service attack or a distributed
                      denial-of-service attack;
                    </li>
                    <li>Otherwise attempting to interfere with the proper working of the Website;</li>
                    <li>
                      Using the Website in any way that violates any applicable federal, state or local laws, rules or
                      regulations.
                    </li>
                  </ol>
                  <h2 className='text-center'>
                    <span className='text-uppercase'>No warranty on Website</span>
                  </h2>
                  <p className='text-uppercase'>
                    This Website is provided “as is,” No warranty, express or implied (including any implied warranty of
                    merchantability, of satisfactory quality or fitness for a particular purpose or use) shall apply to
                    this Website, whether arising by law, course of dealing, course of performance, usage of trade or
                    otherwise.
                  </p>
                  <h2 className='text-center'>Availability, errors and inaccuracies</h2>
                  <p>
                    We assume no liability for the availability, errors or inaccuracies of the information, products or
                    services provided on this Website. We may experience delays in updating information on this Website
                    and in our advertising on other websites. The information, products and services found on the
                    Website may contain errors or inaccuracies or may not be complete or current. Products or services
                    may be incorrectly priced or unavailable. We expressly reserve the right to correct any pricing
                    errors on our Website. The inclusion or offering of any product or service on this Website does not
                    constitute an endorsement or recommendation of such product or service by us.
                  </p>
                  <h2 className='text-center'>
                    <span className='text-uppercase'>Damages and limitation of liability</span>
                  </h2>
                  <p className='text-uppercase'>
                    In no event shall Carbon Digital be liable for any direct, indirect, punitive, incidental, special
                    or consequential damages arising out of, relating to or in any way connected with your access to,
                    display of or use of this Website or with the delay or inability to access, display or use this
                    Website, including but not limited to your reliance upon opinions or information appearing on this
                    Website; any computer viruses, information, software, linked websites operated by third parties,
                    products or services obtained through this Website, whether based on a theory of negligence,
                    contract, tort, strict liability, consumer protection statutes or otherwise, even if Carbon Digital
                    has been advised of the possibility of such damages. IF, DESPITE THE LIMITATION ABOVE, Carbon
                    Digital IS FOUND LIABLE FOR ANY LOSS OR DAMAGE WHICH ARISES OUT OF OR IN ANY WAY CONNECTED WITH ANY
                    OF THE OCCURRENCES DESCRIBED ABOVE, THEN THE LIABILITY OF Carbon Digital WILL IN NO EVENT EXCEED THE
                    SERVICE FEES YOU PAID TO Carbon Digital IN CONNECTION WITH SUCH TRANSACTION(S) ON THIS Website. THE
                    LIMITATION OF LIABILITY REFLECTS THE ALLOCATION OF RISK BETWEEN THE PARTIES. THE LIMITATIONS
                    SPECIFIED IN THIS SECTION WILL SURVIVE AND APPLY EVEN IF ANY LIMITED REMEDY SPECIFIED IN THESE TERMS
                    OF USE IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. THE LIMITATIONS OF LIABILITY PROVIDED IN
                    THESE TERMS OF USE INURE TO THE BENEFIT OF Carbon Digital. The aggregate liability of Carbon Digital
                    arising out of or relating to this Website, whether arising out of or related to breach of contract,
                    tort (including negligence) or otherwise shall be limited to the amount of fees actually received by
                    Carbon Digital from you.
                  </p>
                  <h2 className='text-center'>Links to third party websites</h2>
                  <p>
                    This Website may contain hyperlinks to websites operated by third parties and not by us. We provide
                    such hyperlinks for your reference only. We do not control such websites and are not responsible for
                    their contents or the privacy or other practices of such websites. Further, it is your
                    responsibility to take precautions to ensure that whatever links you click on or software that you
                    download, whether from this Website or other websites or applications, is free of such items as
                    viruses, worms, trojan horses, defects and other items of a destructive nature. Our inclusion of
                    hyperlinks to such websites does not imply any endorsement of the material on such websites or any
                    association with their operators.
                  </p>
                  <h2 className='text-center'>
                    Intellectual property and DMCA notice and procedure for intellectual property infringement claims
                  </h2>
                  <p>
                    All contents of this Website are &copy;2017-2023 Carbon Digital or third parties. All rights
                    reserved. Unless specified otherwise, this Website and all content and other materials on this
                    Website including but not limited to all logos, designs, text, graphics, pictures, information,
                    data, software, sound files and arrangement thereof (collectively, &quot;Content&quot;) are the
                    proprietary property of Carbon Digital and are either registered trademarks, trademarks or otherwise
                    protected intellectual property of Carbon Digital or third parties in the United States and/or other
                    countries.
                  </p>
                  <p>
                    If you are aware of a potential infringement of our intellectual property, please contact Jared
                    Ledbetter at legal@carbondigital.us.
                  </p>
                  <p>
                    We respect the intellectual property rights of others. It is our policy to respond to any claim that
                    Content posted on the Website infringes on the copyright, trademark or other intellectual property
                    rights of any person or entity.
                  </p>
                  <p>
                    If you believe in good faith that the Content infringes on your intellectual property rights, you or
                    your agent may send us a written notice of such infringement titled “Infringement of Intellectual
                    Property Rights - DMCA.” Your notice to us must include the following information:
                  </p>
                  <ol>
                    <li>
                      An electronic or physical signature of the person authorized to act on behalf of the owner of the
                      intellectual property right&apos;s interest;
                    </li>
                    <li>
                      A description of the work that you claim has been infringed, including the URL (i.e., web page
                      address) of the location where the work exists or a copy of the work;
                    </li>
                    <li>Your name, email, address and telephone number; and</li>
                    <li>
                      A statement by you that you have a good faith belief that the disputed use is not authorized by
                      the owner of the work, its agent or the law.
                    </li>
                  </ol>
                  <p>
                    Please note that we will not process your complaint if it is not properly filled out or is
                    incomplete. You may be held accountable for damages, including but not limited to costs and
                    attorneys’ fees for any misrepresentation or bad faith claims regarding the infringement of your
                    intellectual property rights by the Content on this Website.
                  </p>
                  <p>You may submit your claim to us by contacting us at:</p>
                  <p>
                    Carbon Digital <br />
                    Jared Ledbetter <br />
                    legal@carbondigital.us <br />
                    (704) 368-0050 <br />
                    20 Bellmore Rd <br /> Camp Hill, PA 17011 <br />
                    <span className='text-uppercase'>United States</span>
                  </p>
                  <h2 className='text-center'>Governing law, severability, dispute resolution and venue</h2>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of the state of
                    Pennsylvania, United States, without regard to its conflict of laws provisions.&nbsp;
                    <span className='text-uppercase'>
                      These terms shall not be governed by the United Nations convention on contracts for the sale of
                      international goods, the Uniform Commercial Code, nor Incoterms
                    </span>
                    .
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of that
                    right or provision. If any provision of these Terms is held to be invalid or unenforceable by a
                    court, the remaining provisions of these Terms will remain in effect. These Terms constitute the
                    entire agreement between you and us regarding our Website, and supersede and replace any prior
                    agreements we might have had with you regarding the Website.
                  </p>
                  <p>
                    Any controversy or claim arising out of or relating to these Terms including but not limited to the
                    interpretation or breach thereof shall be resolved in a court of competent jurisdiction in
                    Cumberland County, Pennsylvania.
                  </p>
                  <p className='text-uppercase'>
                    You and Carbon Digital agree that each may bring claims against the other only in your or its
                    individual capacity and not as a plaintiff or class member in any class or representative action.
                  </p>
                  <h2 className='text-center'>Changes to Terms of Service</h2>
                  <p>
                    We reserve the right to make changes to these Terms of Service at any time. We will not provide you
                    with any notice when we make changes to this Terms of Service.
                  </p>
                  <h2 className='text-center'>Questions</h2>
                  <p>
                    If you have any questions about our Terms of Service, please contact us at legal@carbondigital.us.
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
