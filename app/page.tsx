'use client';

import { useState } from 'react';
import UserForm from '@/app/ui/UserForm';

export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>([
    'salt',
    'pepper',
    'oregano',
  ]);

  function addIngredient(formData: FormData) {
    setIngredients([...ingredients, formData.get('ingredient') as string]);
  }

  return (
    <main className="h-full max-w-[760px] m-auto pt-4">
      <UserForm addIngredient={addIngredient} />

      {ingredients.length > 0 && (
        <div className="mt-3 mb-8">
          <h2 className="text-xl font-semibold">Ingredients on hand:</h2>
          <ul className="list-disc pl-8">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {ingredients.length >= 3 && (
        <div className="bg-[#F0EFEB] flex items-center justify-between rounded-lg p-3">
          <div>
            <h2 className="text-xl font-semibold">Time to cook!</h2>
            <p className="text-sm text-gray-500 my-2">
              You have enough ingredients to make a delicious meal. Let's get
              cooking!
            </p>
          </div>
          <button className='bg-amber-600 rounded-lg text-white font-semibold py-1.5 px-3'>Get a recipe</button>
        </div>
      )}
    </main>
  );
}
