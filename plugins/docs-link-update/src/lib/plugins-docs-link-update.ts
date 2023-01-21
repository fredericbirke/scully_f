import { HandledRoute, logWarn, registerPlugin, yellow } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const docLink = 'docsLink';

const docsLinkPlugin = async (dom: JSDOM, options: HandledRoute): Promise<JSDOM> => {
  try {
    const { window } = dom;
    const anchors = Array.from(window.document.querySelectorAll('[href]')) as HTMLAnchorElement[];
    anchors.forEach((a: HTMLAnchorElement) => {
      const href = a.getAttribute('href');

      if (href && href.toLowerCase().endsWith('.md') && !href.toLowerCase().startsWith('http')) {
        let newRef = '';
        if (!href.startsWith('/')) {
          const myBase = dropOpeningSlash(options.route.substring(0, options.route.lastIndexOf('/')));
          newRef = `${myBase}/`;
        }
        newRef = newRef + href.slice(0, -3);
        a.setAttribute('href', newRef);
      }
      if (href && href.startsWith('#')) {
        a.setAttribute('data-hash', href.slice(1));
        a.setAttribute('href', 'javascript:;');
        a.setAttribute('onclick', `document.location.hash=this.dataset.hash`);
      }
    });
    return dom;
  } catch (e) {
    logWarn(`error in docsLink, didn't parse for route "${yellow(options.route)}"`);
  }
  // in case of failure return unchanged HTML to keep flow going
  return dom;
};

const validator = async () => [];
registerPlugin('postProcessByDom', docLink, docsLinkPlugin, validator);

function dropOpeningSlash(str: string) {
  return str.startsWith('/') && !str.startsWith('//') ? str.slice(1) : str;
}
