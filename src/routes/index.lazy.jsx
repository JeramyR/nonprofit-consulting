import { createLazyFileRoute } from '@tanstack/react-router';
export const Route = createLazyFileRoute('/')({
  component: Home,
});

function Home() {
  return <h1>✅ Home Works</h1>;
}
