'use server';

import { type SubscribeToNewsletter, subscribeToNewsletter } from '@lumo/api';

import text from '../../lib/locales/en.json';

type State = {
  message: string;
  error?: boolean;
};

async function submitForm(
  payload: Omit<SubscribeToNewsletter, 'email'>,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const rawFormData = {
    email: formData.get('email') as string,
    ...payload,
  };

  try {
    await subscribeToNewsletter(rawFormData);
    return { message: text.EmailNewsletter.successMessage };
  } catch (error) {
    console.log('Submission Failed', error); // TODO: log to the error to service
    return { message: text.EmailNewsletter.errorMessage, error: true };
  }
}

export { submitForm };
