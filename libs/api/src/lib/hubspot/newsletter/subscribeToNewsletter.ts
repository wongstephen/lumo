import { ERROR_MESSAGE, HUBSPOT_BASE_URL } from './constants';

export type SubscribeToNewsletter = {
  email: string;
  formId: string;
  portalId: string;
  pageUri?: string;
  pageName?: string;
};

export const subscribeToNewsletter = async (
  data: SubscribeToNewsletter,
): Promise<number> => {
  const url = `${HUBSPOT_BASE_URL}${data.portalId}/${data.formId}`;

  const rawBody = JSON.stringify({
    fields: [
      {
        name: 'email',
        value: data.email,
      },
    ],

    context: {
      pageName: data.pageName,
      pageUri: data.pageUri,
    },
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: rawBody,
  });

  if (response.ok) {
    return response.status;
  }

  throw new Error(ERROR_MESSAGE);
};
