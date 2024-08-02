import { SignIn } from '@/features/auth';
import { Cart } from '@/features/cart';
import { HomePage } from '@/pages/home-page';
import { Header } from '@/widgets/header';

export function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <HomePage />
      <Cart />
      <SignIn />
    </div>
  );
}
