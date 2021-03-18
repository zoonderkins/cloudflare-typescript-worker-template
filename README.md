# cloudflare-typescript-worker-template
A minimal typescript for Cloudflare woerker template

### Install wrangler

```bash
npm i @cloudflare/wrangler -g

wrangler login

## Get account_id
wrangler whoami

## Replace zone id and accout_id in worker/wrangler.toml

```

## Local dev

`wrangler dev`

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
