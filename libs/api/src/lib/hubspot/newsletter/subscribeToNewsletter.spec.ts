import { subscribeToNewsletter } from './subscribeToNewsletter';

describe('submitNewsletterForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should create correct body with all fields', async () => {
    const data = {
      email: 'test@example.com',
      pageName: 'Example Page',
      pageUri: 'http://example.com',
      formId: '12345',
      portalId: '78901234',
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
    });

    await subscribeToNewsletter(data);

    const expectedBody = JSON.stringify({
      fields: [{ name: 'email', value: data.email }],
      context: {
        pageName: data.pageName,
        pageUri: data.pageUri,
      },
    });

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.hsforms.com/submissions/v3/integration/submit/${data.portalId}/${data.formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expectedBody,
      },
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(await subscribeToNewsletter(data)).toBe(200);
  });

  it('should throw an error if the response is not ok', async () => {
    const data = {
      email: 'test@example.com',
      formId: '12345',
      portalId: '78901234',
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
    });

    await expect(subscribeToNewsletter(data)).rejects.toThrow(
      'Submission Failed',
    );
  });
});
