type NewsletterFormData = {
  email: string;
  contactConsent: boolean;
  pageUrl?: string;
  pageName?: string;
  formId: string;
};

const submitNewsletterForm = async (
  data: NewsletterFormData,
): Promise<number> => {
  const portalId = '49209266';
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${data.formId}`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    fields: [
      {
        name: 'email',
        value: data.email,
      },
      {
        name: 'contact_consent',
        value: data.contactConsent ? 'true' : 'false',
      },
    ],
    context: {
      pageName: data.pageName,
      pageUrl: data.pageUrl,
    },
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return response.status;
  }

  throw new Error('Failed to submit the form');
};

export default submitNewsletterForm;
