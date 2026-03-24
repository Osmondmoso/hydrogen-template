import {json, type ActionFunctionArgs} from '@netlify/remix-runtime';

const FALLBACK_REPLY =
  'Welcome to KASI FIRST. Send us your details on WhatsApp and we can start your CV and job applications today.';

export async function action({request}: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const {message} = (await request.json()) as {message?: string};

  if (!message || !message.trim()) {
    return json({reply: FALLBACK_REPLY});
  }

  const env = process.env as Record<string, string | undefined>;
  const apiKey = env.GEMINI_API_KEY || env.GOOGLE_API_KEY;

  if (!apiKey) {
    return json({reply: FALLBACK_REPLY});
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are KASI FIRST talking helper. Keep responses under 45 words. Be encouraging and practical. User question: ${message}`,
                },
              ],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      return json({reply: FALLBACK_REPLY});
    }

    const data = (await response.json()) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{text?: string}>;
        };
      }>;
    };

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || FALLBACK_REPLY;

    return json({reply});
  } catch (_error) {
    return json({reply: FALLBACK_REPLY});
  }
}
