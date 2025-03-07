'use client';

import { useState } from 'react';
import { generateRecipe } from '@/app/lib/actions';
import UserForm from '@/app/ui/UserForm';
import Markdown from 'react-markdown';

export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>([
    'all the main spices',
    'pasta',
    'ground beef',
    'tomato paste',
  ]);
  const [recipe, setRecipe] = useState<string>('');

  function addIngredient(formData: FormData) {
    setIngredients([...ingredients, formData.get('ingredient') as string]);
  }

  async function getRecipe() {
    await generateRecipe(ingredients).then((recipe) => setRecipe(recipe));
  }

  return (
    <main className="h-full max-w-[760px] m-auto pt-4">
      <UserForm addIngredient={addIngredient} />

      {ingredients.length > 0 && (
        <div className="mt-3 mb-8">
          <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
          <ul className="list-disc pl-8">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-[#F0EFEB] flex items-center justify-between rounded-md p-3">
        <div>
          <h2 className="text-xl font-semibold">Time to cook!</h2>
          <p className="text-sm text-gray-500 my-2">
            {ingredients.length > 3
              ? "You have enough ingredients to make a delicious meal. Let's get cooking!"
              : 'You need at least 3 ingredients to get a recipe.'}
          </p>
        </div>
        <button
          className="bg-amber-600 rounded-md text-white font-semibold py-1.5 px-3 cursor-pointer disabled:bg-amber-900 disabled:cursor-default"
          disabled={ingredients.length <= 3}
          onClick={getRecipe}
        >
          Get a recipe
        </button>
      </div>

      {recipe && <Markdown>{recipe}</Markdown>}
    </main>
  );
}
