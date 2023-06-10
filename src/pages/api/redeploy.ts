// NPM Modules
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_DEPLOY_HOOK}`
  });
}
