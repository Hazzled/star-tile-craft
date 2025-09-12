import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const helmetContext: Record<string, any> = {};

  const app = (
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  );

  const appHtml = ReactDOMServer.renderToString(app);
  const helmet = helmetContext.helmet as any;

  const headHtml = [
    helmet?.title?.toString?.() ?? '',
    helmet?.priority?.toString?.() ?? '',
    helmet?.meta?.toString?.() ?? '',
    helmet?.link?.toString?.() ?? '',
    helmet?.script?.toString?.() ?? '',
  ]
    .filter(Boolean)
    .join('\n');

  return { appHtml, headHtml };
}