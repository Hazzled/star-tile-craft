import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const helmetContext: FilledContext = {} as FilledContext;

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const appHtml = ReactDOMServer.renderToString(app);
  const helmet = helmetContext.helmet;

  const headHtml = [
    helmet?.title?.toString?.() ?? '',
    helmet?.meta?.toString?.() ?? '',
    helmet?.link?.toString?.() ?? '',
    helmet?.script?.toString?.() ?? '',
  ]
    .filter(Boolean)
    .join('\n');

  return { appHtml, headHtml };
}
