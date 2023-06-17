// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs" ;
import { remark } from "remark";
import html from "remark-html";
import path from 'path';
import matter from 'gray-matter';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
export async function getPostData(id) {
  const fullPath = path.join("/home/lampros/Projects/self-prod/DevGlimpse/dev-glimpse/public/", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const contentHtml = fileContents ;

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
  };
}
