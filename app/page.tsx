'use client';

import { useState } from 'react';
import { generateRecipe } from '@/app/lib/actions';
import UserForm from '@/app/ui/UserForm';
import Recipe from '@/app/ui/Recipe';
import RecipeSkeleton from '@/app/ui/RecipeSkeleton';

export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function addIngredient(formData: FormData) {
    setIngredients([...ingredients, formData.get('ingredient') as string]);
  }

  async function getRecipe() {
    setIsLoading(true);
    await generateRecipe(ingredients).then((recipe) => {
      setRecipe(recipe);
      setIsLoading(false);
    });
  }

  return (
    <main className="h-full max-w-[760px] m-auto pt-4">
      <p className='mb-2'>Welcome to Chef Claude! Add at least 4 ingredients and press the button below to get a custom recipe from Claude AI!</p>

      <UserForm addIngredient={addIngredient} />

      {ingredients.length > 0 && (
        <div className="mt-3">
          <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
          <ul className="list-disc pl-8">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-[#F0EFEB] flex items-center justify-between rounded-md p-3 mt-8">
        <div>
          <h2 className="text-xl font-semibold">Time to cook!</h2>
          <p className="text-sm text-gray-500 my-2">
            {ingredients.length > 3
              ? "You have enough ingredients to make a delicious meal. Let's get cooking!"
              : 'You need at least 4 ingredients to get a recipe.'}
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

      {isLoading ? <RecipeSkeleton /> : recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
