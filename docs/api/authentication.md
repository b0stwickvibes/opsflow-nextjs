---
title: "API Authentication"
description: "Learn how to authenticate with the OpsFlow API using API keys, OAuth 2.0, and webhook signatures."
---

# API Authentication

OpsFlow provides multiple authentication methods to secure your API integrations. This guide covers API keys, OAuth 2.0, and webhook signature verification.

{% callout type="info" title="Base URL" %}
All API requests should be made to: `https://api.opsflow.com/v1`
{% /callout %}

## API Keys

API keys are the simplest way to authenticate with OpsFlow. They're perfect for server-to-server integrations and internal tools.

### Creating API Keys

1. Navigate to **Settings** → **API Keys**
2. Click **Generate New Key**
3. Choose permissions and expiry settings
4. Store the key securely (it won't be shown again)

```bash
# Example API request with key
curl -H "Authorization: Bearer ops_live_sk_1234567890abcdef" \
  https://api.opsflow.com/v1/operations/metrics
```

### Key Types

{% card title="Live Keys" %}
Use in production environments. Start with `ops_live_sk_`
{% /card %}

{% card title="Test Keys" %}
Use for development and testing. Start with `ops_test_sk_`
{% /card %}

### Best Practices

- **Never expose keys in client-side code**
- **Rotate keys regularly** (every 90 days recommended)
- **Use environment variables** to store keys
- **Implement key scoping** to limit permissions

{% code-block language="javascript" title="Secure Key Storage" %}
// ❌ Wrong - exposed in client code
const apiKey = "ops_live_sk_1234567890abcdef";

// ✅ Correct - server-side with environment variable
const apiKey = process.env.OPSFLOW_API_KEY;
{% /code-block %}

## OAuth 2.0

For applications that need to access user data on behalf of multiple organizations, use OAuth 2.0.

### Authorization Flow

1. **Redirect users to authorization URL**
2. **User grants permissions**
3. **Receive authorization code**
4. **Exchange code for access token**

### Step 1: Authorization URL

```javascript
const authUrl = new URL('https://api.opsflow.com/oauth/authorize');
authUrl.searchParams.set('client_id', 'your_client_id');
authUrl.searchParams.set('redirect_uri', 'https://yourapp.com/callback');
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('scope', 'read write');
authUrl.searchParams.set('state', 'random_state_string');

// Redirect user to authUrl.toString()
```

### Step 2: Handle Callback

```javascript
// In your callback endpoint
async function handleCallback(code, state) {
  const tokenResponse = await fetch('https://api.opsflow.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.OPSFLOW_CLIENT_ID,
      client_secret: process.env.OPSFLOW_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: 'https://yourapp.com/callback'
    })
  });

  const tokens = await tokenResponse.json();
  // Store tokens.access_token and tokens.refresh_token securely
}
```

### Using Access Tokens

```javascript
// Make authenticated requests
const response = await fetch('https://api.opsflow.com/v1/operations/metrics', {
  headers: {
    'Authorization': `Bearer ${access_token}`
  }
});
```

### Refreshing Tokens

```javascript
async function refreshAccessToken(refreshToken) {
  const response = await fetch('https://api.opsflow.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.OPSFLOW_CLIENT_ID,
      client_secret: process.env.OPSFLOW_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    })
  });

  return await response.json();
}
```

## Webhook Signature Verification

Verify webhook authenticity using signature validation.

### Signature Header

OpsFlow includes a signature in the `OpsFlow-Signature` header:

```
OpsFlow-Signature: t=1642694400,v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd
```

### Verification Process

{% code-block language="node" title="Webhook Signature Verification" %}
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const elements = signature.split(',');
  const timestamp = elements.find(el => el.startsWith('t=')).split('=')[1];
  const signatures = elements.filter(el => el.startsWith('v1='));

  // Create expected signature
  const payloadString = timestamp + '.' + payload;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payloadString, 'utf8')
    .digest('hex');

  // Compare signatures
  return signatures.some(sig => {
    const providedSignature = sig.split('=')[1];
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(providedSignature, 'hex')
    );
  });
}

// Usage in Express middleware
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['opsflow-signature'];
  const payload = req.body;
  
  if (!verifyWebhookSignature(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(400).send('Invalid signature');
  }
  
  // Process webhook...
  res.status(200).send('OK');
});
{% /code-block %}

## Error Handling

### Common Error Responses

```json
{
  "error": {
    "type": "authentication_error",
    "code": "invalid_api_key",
    "message": "The provided API key is invalid or has expired."
  }
}
```

### HTTP Status Codes

| Status | Description |
|--------|-------------|
| `401` | Invalid or missing authentication |
| `403` | Valid auth but insufficient permissions |
| `429` | Rate limit exceeded |
| `500` | Internal server error |

### Rate Limiting

API requests are limited by plan:

- **Starter**: 1,000 requests/hour
- **Professional**: 10,000 requests/hour  
- **Enterprise**: 100,000 requests/hour

Rate limit headers are included in responses:

```
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9999
X-RateLimit-Reset: 1642698000
```

## Security Best Practices

{% callout type="warning" title="Security Checklist" %}
- ✅ Store credentials securely (use environment variables)
- ✅ Use HTTPS for all API requests  
- ✅ Implement proper error handling
- ✅ Verify webhook signatures
- ✅ Rotate API keys regularly
- ✅ Use minimal required scopes
- ✅ Log security events
{% /callout %}

### Environment Variables Example

```bash
# .env file
OPSFLOW_API_KEY=ops_live_sk_1234567890abcdef
OPSFLOW_CLIENT_ID=client_1234567890
OPSFLOW_CLIENT_SECRET=secret_1234567890abcdef
OPSFLOW_WEBHOOK_SECRET=whsec_1234567890abcdef
```

## SDK Examples

### Node.js

```javascript
const OpsFlow = require('@opsflow/node');

const opsflow = new OpsFlow({
  apiKey: process.env.OPSFLOW_API_KEY,
});

// Get metrics
const metrics = await opsflow.operations.metrics.list();
```

### Python

```python
import opsflow

client = opsflow.Client(api_key=os.environ['OPSFLOW_API_KEY'])

# Get metrics
metrics = client.operations.metrics.list()
```

### cURL

```bash
curl -X GET "https://api.opsflow.com/v1/operations/metrics" \
  -H "Authorization: Bearer ${OPSFLOW_API_KEY}" \
  -H "Content-Type: application/json"
```

## Next Steps

- [API Endpoints](/docs/api/endpoints) - Explore available endpoints
- [SDKs](/docs/api/sdks) - Use our official client libraries
- [Webhooks Guide](/docs/integrations/webhooks) - Set up real-time notifications
