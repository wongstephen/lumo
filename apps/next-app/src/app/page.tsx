import NewsletterInputForm from '../components/NewsletterInputForm/NewsletterInputForm';

export const metadata = {
  title: 'Home',
};

export default function Home(): React.JSX.Element {
  return (
    <div>
      <h1>Welcome</h1>

      <NewsletterInputForm />
    </div>
  );
}
