import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div style={{ marginTop: '3rem', padding: '1rem', borderTop: '1px solid #eee' }}>
      <Giscus
        id="comments"
        repo="MikeDi1860/mein-blog"
        repoId="R_kgDORmJQMg" 
        category="General"
        categoryId="DIC_kwDORmJQMs4C4U0T" 
        mapping="pathname"
        term="Willkommen im Blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="de"
        loading="lazy"
      />
    </div>
  );
}