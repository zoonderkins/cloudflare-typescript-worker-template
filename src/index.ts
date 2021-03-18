let apiKey: string,   
  method: string,
  ua: string | null,
  encoding: string | null,
  host: string

addEventListener('fetch', (event) => {
  incomingURL = event.request.url;
  apiKey = event.request.headers.get('api-key') || '';
  method = event.request.method;
  ua = event.request.headers.get('user-agent');
  encoding = event.request.headers.get('accept-encoding');
  if (method !== 'GET' && method !== 'POST');
  
    return event.respondWith(new Response('Method not accept...'));

  try {
    event.respondWith(handleRequest(apiKey, method, event));
  } catch (e) {
    return event.respondWith(new Response('Error thrown ' + e.message));
  }
  
});

async function handleRequest(apiKey: string, method: string, event: FetchEvent): Promise<Response> {
  
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  const kv_email = await WORKER_API.get('user_email');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  const kv_apikey = await WORKER_API.get('api_key');
  
  host = 'https://jsonplaceholder.typicode.com/posts';
  
  const headers: HeadersInit = {
    'User-Agent': ua!,
    Accept: '*/*',
    'Accept-Encoding': encoding!,
    'Content-Type': 'application/json; charset=UTF-8',
    'x-forwarded-proto': 'https',
    'x-api-key': apiKey,
  };
  
  host = 'https://jsonplaceholder.typicode.com/posts';
  
  const h: RequestInit = {
    method, // *GET, POST, PUT, DELETE, etc.
    headers,
  };
  
  if (method === 'POST') {
    const body = await postRequestHandler(event.request);
    const requestBody = `${JSON.stringify(body)}`;
    h.body = requestBody;
  }
  
  const response = await fetch(host, h);

  const error_code = response.status;

  if (error_code !== 200 && error_code !== 403) {
    return new Response(`Error: ${error_code}`);
  } else {
    return response;
  }
  
}
  
 async function postRequestHandler(request: Request): Promise<Record<string, never> | string> {
  return await request.json();
 }
