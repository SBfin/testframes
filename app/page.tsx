import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'tx',
      label: 'Click the Button',
      target: `${NEXT_PUBLIC_URL}/api/buttonclicker`,
    },
    {
      action: 'link',
      label: 'Leaderboard',
      target: `${NEXT_PUBLIC_URL}/buttonclicker`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/button.webp`,
    aspectRatio: '1:1',
  },
  input: {
    text: "Don't click the button!",
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/aftertx`,
});

export const metadata: Metadata = {
  title: 'Click the Button',
  description: "Don't click the button!",
  openGraph: {
    title: 'Click the Button',
    description: "Don't click the button!",
    images: [`${NEXT_PUBLIC_URL}/button.webp`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>silvio.xyz</h1>
    </>
  );
}
