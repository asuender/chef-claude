'use client';

import { use } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

type Props = {
  addIngredient: (formData: FormData) => void;
};

export default function UserForm(props: Props) {
  return (
    <form action={props.addIngredient} className="flex gap-4 justify-center w-full text-sm">
      <input
        id="ingredient"
        name="ingredient"
        type="text"
        aria-label="ingredient"
        placeholder="e.g. oregano"
        className="flex-1 bg-white min-w-[150px] border-2 rounded-sm px-2"
        required
      />
      <button
        type="submit"
        className="bg-black text-white font-semibold px-10 py-2 rounded-sm"
      >
        <PlusIcon className="inline size-5" /> Add ingredient
      </button>
    </form>
  );
}
//
