import { v4 as uuidv4 } from 'uuid';
import { URL } from 'url';

class Parser {
  async parse(url) {
    if (typeof url !== 'string') {
      throw new Error('Invalid URL');
    }

    try {
      const parsedUrl = new URL(url);
      const parsedQuery = new URLSearchParams(parsedUrl.search);

      const id = uuidv4();
      const referer = parsedUrl.referrer || '';

      return {
        id,
        referer,
        url: parsedUrl.href,
        query: parsedQuery.toString(),
      };
    } catch (error) {
      throw new Error('Invalid URL');
    }
  }
}

export default Parser;