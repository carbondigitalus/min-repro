// NPM Modules
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  // check http method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Unauthorized method.' });
  }
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token.' });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    // page variable is a relative path
    // api post url format: domain/api/revalidate?secret=<secret>&archive=<archive>&single=<single>
    await res.revalidate(`/${req.query.archive}/${req.query.single}`);
    return res.json({ revalidated: true });
  } catch (error) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log('error details\n', error);
    return res.status(500).send('Error revalidating');
  }
}
