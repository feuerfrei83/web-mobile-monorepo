import NewsHeadlines from '@tcp/core/lib/core';

const Index = (props) => (
    <div>
      <p>Headlines for the hour</p>
      <ul>
        { props.headlines.map(headline => <li>{headline}</li>)}
      </ul>
    </div>
  );

Index.getInitialProps = async () => {
  const newsApi = new NewsHeadlines;
  const response = await newsApi.getHeadlines();
  console.dir(response.data);
  if (response.data && response.data.articles) {
    return {
      headlines: response.data.articles.map(article => article.title)
    }
  }
  return;
}
export default Index;