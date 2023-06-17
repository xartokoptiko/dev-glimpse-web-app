import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData("article");

  return {
    props: {
      postData,
    },
  };
}


export async function getPostData(id) {
  const fullPath = path.join("/", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export default function RenderMD({postData}){

  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  
}