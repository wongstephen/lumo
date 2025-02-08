import submitNewsletterForm from './newsletterClient';

describe('submitNewsletterForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should create correct body with all fields', async () => {
    const data = {
      email: 'test@example.com',
      contactConsent: true,
      pageUrl: 'http://example.com',
      pageName: 'Example Page',
      formId: '12345',
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
    });

    await submitNewsletterForm(data);

    const expectedBody = JSON.stringify({
      fields: [
        { name: 'email', value: 'test@example.com' },
        { name: 'contact_consent', value: 'true' },
      ],
      context: {
        pageName: 'Example Page',
        pageUrl: 'http://example.com',
      },
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.hsforms.com/submissions/v3/integration/submit/49209266/12345',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expectedBody),
      },
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(await submitNewsletterForm(data)).toBe(200);
  });

  it('should throw an error if the response is not ok', async () => {
    const data = {
      email: 'test@example.com',
      contactConsent: true,
      formId: '12345',
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
    });

    await expect(submitNewsletterForm(data)).rejects.toThrow(
      'Failed to submit the form',
    );
  });
});
