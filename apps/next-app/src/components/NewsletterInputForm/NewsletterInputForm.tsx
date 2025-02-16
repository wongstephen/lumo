'use client';

import { Button, Input } from '@lumo/components';
import React from 'react';
import { useActionState } from 'react';

import text from '../../lib/locales/en.json';
import { submitForm } from './actions';
import styles from './NewsletterInputForm.module.css';

const initialState = {
  message: '',
  error: undefined,
};

const isBrowser = (): boolean => typeof window !== 'undefined';

export default function NewsletterInputForm(): React.JSX.Element {
  const HUBSPOT_NEWSLETTER_FORM_ID = process.env
    .NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID as string;
  const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID as string;

  const pageContext = {
    pageUri: isBrowser() ? window.location.href : undefined,
    pageName: isBrowser() ? document.title : undefined,
  };

  const payload = {
    formId: HUBSPOT_NEWSLETTER_FORM_ID,
    portalId: HUBSPOT_PORTAL_ID,
    ...pageContext,
  };

  const submitNewsletterFormWithId = submitForm.bind(null, payload);

  const [state, formAction, pending] = useActionState(
    submitNewsletterFormWithId,
    initialState,
  );

  return (
    <div className={styles.container}>
      <h4>{text.EmailNewsletter.title}</h4>
      <form action={formAction}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={text.EmailNewsletter.inputPlaceholder}
        />
        <Button type="submit" disabled={pending}>
          {pending
            ? text.EmailNewsletter.buttonLoading
            : text.EmailNewsletter.button}
        </Button>
      </form>
      {state?.message ? (
        <p className={state.error ? styles.errorStatus : ''}>{state.message}</p>
      ) : (
        <p style={{ visibility: 'hidden' }}>{''}</p>
      )}
    </div>
  );
}
