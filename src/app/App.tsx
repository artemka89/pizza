import { HomePage } from '@/pages/home-page';
import { Header } from '@/widgets/header';

export function App() {
  return (
    <div className='container min-h-screen'>
      <Header />
      <HomePage />
    </div>
  );
}
