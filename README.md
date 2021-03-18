# cloudflare-typescript-worker-template
A minimal typescript for Cloudflare woerker template

## Installation on local

1. Git clone
2. Npm (>=14) install `npm i`
3. Install wrangler: `npm i @cloudflare/wrangler -g`

## Using wrangler

```bash
## Login with browser
wrangler login

## Login with email | token
wrangler config --api-key

## Replace zone id and accout_id in worker/wrangler.toml
```

## Get account_id

`wrangler whoami`

### Local dev

`wrangler dev`

## Build worker

```bash
npm run build
```

## Input or update KV value

```bash
wrangler kv:key put --binding=WORKER_API "user_email" "xxx@xxx.com"
wrangler kv:key put --binding=WORKER_API "api_key" "asdfasdf"
```

## Deploy in CI with wrangler

```bash
CF_ACCOUNT_ID=xxxxx \
  CF_API_TOKEN=<API KEY> \
  CF_ZONE_ID=xxxx \
  wrangler publish

```

## Publish

`wrangler publish`

## Tail log via Argo tunnel
port: 8080, 8081

```bash
## Install
brew install cloudflare/cloudflare/cloudflared

## Login
cloudflared tunnel login

## Keep cert.pem securely, After login on Browser
## https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/setup

## Login with certificate
cloudflared tunnel login --origincert

## Tail log
wrangler tail
```
