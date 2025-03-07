'use client';

import Markdown from 'react-markdown';

type Props = {
  recipe: string;
}

export default function Recipe({ recipe }: Props) {
  return (
    <div>
      <Markdown>{recipe}</Markdown>
    </div>
  );
}