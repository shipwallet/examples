# Receipt widget example

1. Create `.env` file with following contents:

```plaintext
PRIVATE_KEY=
SITE_ID=
SESSION_ID=
```

Where `PRIVATE_KEY` is base 64 encoded string.

2. Run `npm install`

3. Run `npm start` to run example

## Notice

Call for token should be handled by backend in real world case - this prevents leaking private key.
On frontend side you should use only token for auth.
